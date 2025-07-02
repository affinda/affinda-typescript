#!/usr/bin/env node

import fs from 'fs';
import { compile } from 'json-schema-to-typescript';
import fetch from 'node-fetch';
import path from 'path';
import process from 'process';
import readlineSync from 'readline-sync';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

declare interface DocumentType {
    identifier: string;
    // There are more fields but this is all we care about
}

declare interface Collection {
    identifier: string;
    // There are more fields but this is all we care about
}

declare interface JsonSchema {
    title: string;
    // There are more fields but this is all we care about
}

async function fetchSchema(
    apiKey: string,
    baseUrl: string,
    docTypeId: string,
    title?: string,
): Promise<JsonSchema> {
    const url = `${baseUrl}/v3/document_types/${docTypeId}/json_schema${title ? `?title=${encodeURIComponent(title)}` : ''}`;
    const headers = { Authorization: `Bearer ${apiKey}` };
    const response = await fetch(url, { headers });
    if (!response.ok) {
        console.error(`Error contacting API: ${response.status} ${response.statusText}`);
        process.exit(1);
    }

    try {
        return (await response.json()) as JsonSchema;
    } catch (err) {
        console.error(`Unexpected response JSON: ${err}`);
        process.exit(1);
    }
}

async function getDocTypeIds(
    apiKey: string,
    baseUrl: string,
    organizationId: string | undefined,
    workspaceId: string | undefined,
): Promise<string[]> {
    const headers = { Authorization: `Bearer ${apiKey}` };

    let params = '';
    if (organizationId !== undefined) {
        params = `organization=${organizationId}`;
    } else if (workspaceId !== undefined) {
        params = `workspace=${workspaceId}`;
    } else {
        throw new Error('Either organizationId or workspaceId must be provided.');
    }

    const url = `${baseUrl}/v3/document_types?${params}`;
    const response = await fetch(url, { headers });
    if (!response.ok) {
        console.error(`Error fetching document types: ${response.status} ${response.statusText}`);
        process.exit(1);
    }
    const payload = (await response.json()) as DocumentType[];
    let documentTypeIds = payload.map((docType) => docType.identifier);

    // Fallback for portal v2 users whose collections are not yet migrated to be compatible with v3
    if (workspaceId !== undefined && documentTypeIds.length === 0) {
        const collectionUrl = `${baseUrl}/v3/collections?workspace=${workspaceId}`;
        const collectionResponse = await fetch(collectionUrl, { headers });
        if (!collectionResponse.ok) {
            console.error(
                `Error fetching collections: ${collectionResponse.status} ${collectionResponse.statusText}`,
            );
            process.exit(1);
        }
        const collectionPayload = (await collectionResponse.json()) as Collection[];
        documentTypeIds = collectionPayload.map((collection) => collection.identifier);
    }

    return documentTypeIds;
}

async function writeInterfaces(
    tsCode: string,
    fileStem: string,
    modelsDir: string,
): Promise<string> {
    await fs.promises.mkdir(modelsDir, { recursive: true });

    const modelPath = path.join(modelsDir, `${fileStem}.ts`);

    const finalCode = tsCode.trimEnd() + '\n';
    const existed = fs.existsSync(modelPath);
    await fs.promises.writeFile(modelPath, finalCode, { encoding: 'utf8' });
    console.log(
        existed ? `Overwrote existing model at ${modelPath}.` : `Created model file ${modelPath}.`,
    );

    return modelPath;
}

// ---------------------------------------------------------------------------
// CLI entry
// ---------------------------------------------------------------------------
(async () => {
    const argv = await yargs(hideBin(process.argv))
        .option('base-url', {
            type: 'string',
            default: 'https://api.affinda.com',
            describe: 'Affinda API base URL.',
        })
        .option('organization-id', {
            type: 'string',
            describe: 'Generate models for all document types in the organization.',
        })
        .option('workspace-id', {
            type: 'string',
            describe: 'Generate models for all document types (collections) in the workspace.',
        })
        .option('document-type-id', {
            type: 'string',
            describe: 'Generate models for a specific document type.',
        })
        .option('collection-id', {
            type: 'string',
            describe: 'Alias for --document-type-id.',
        })
        .option('interface-name', {
            type: 'string',
            describe:
                'Specify interface name to generate. Only valid when --document-type-id is provided.',
        })
        .option('output-dir', {
            type: 'string',
            default: path.resolve('./affinda-interfaces'),
            describe: 'Directory in which to output the generated models.',
        })
        .strict()
        .help()
        .parse();

    const baseUrl: string = (argv['base-url'] as string).replace(/\/$/, '');
    const organizationId: string | undefined = argv['organization-id'] as string | undefined;
    const workspaceId: string | undefined = argv['workspace-id'] as string | undefined;
    const docTypeIdInput: string | undefined = argv['document-type-id'] as string | undefined;
    const collectionIdInput: string | undefined = argv['collection-id'] as string | undefined;
    const interfaceName: string | undefined = argv['interface-name'] as string | undefined;
    const outputDir: string = path.resolve(argv['output-dir'] as string);

    const docTypeId = docTypeIdInput || collectionIdInput;

    // Validate inputs
    if ([organizationId, workspaceId, docTypeId].filter(Boolean).length !== 1) {
        console.error(
            'Please provide exactly one of --organization-id, --workspace-id, or --document-type-id.',
        );
        process.exit(1);
    }

    if (interfaceName && !docTypeId) {
        console.error('--interface-name can only be used when --document-type-id is provided.');
        process.exit(1);
    }

    // Prompt for API key
    let apiKey = process.env.AFFINDA_API_KEY;
    if (!apiKey) {
        apiKey = readlineSync.question(
            'Enter your API key (required when AFFINDA_API_KEY is not set): ',
            { hideEchoBack: true },
        );
        if (!apiKey || !apiKey.trim()) {
            console.error('API key is required.');
            process.exit(1);
        }
        apiKey = apiKey.trim();
    }

    // Determine document type IDs to process
    let docTypeIds: string[];

    if (docTypeId) {
        docTypeIds = [docTypeId];
    } else {
        docTypeIds = await getDocTypeIds(apiKey, baseUrl, organizationId, workspaceId);
        if (!docTypeIds.length) {
            console.error('No document types found for the provided organization ID.');
            process.exit(1);
        }
    }

    let anyWritten = false;
    for (const id of docTypeIds) {
        const schema = await fetchSchema(apiKey, baseUrl, id, interfaceName);
        const title = interfaceName || schema.title;

        const tsCode = await compile(schema, title);
        const writtenPath = await writeInterfaces(tsCode, title, outputDir);
        anyWritten = anyWritten || !!writtenPath;
    }

    if (anyWritten) {
        console.log('\nAll requested TypeScript interfaces processed.');
    }
})();
