[@affinda/affinda](../README.md) / [Exports](../modules.md) / Workspace

# Interface: Workspace

## Table of contents

### Properties

- [collections](Workspace.md#collections)
- [confirmedDocsCount](Workspace.md#confirmeddocscount)
- [documentSplitter](Workspace.md#documentsplitter)
- [identifier](Workspace.md#identifier)
- [ingestEmail](Workspace.md#ingestemail)
- [members](Workspace.md#members)
- [name](Workspace.md#name)
- [organization](Workspace.md#organization)
- [rejectDuplicates](Workspace.md#rejectduplicates)
- [rejectInvalidDocuments](Workspace.md#rejectinvaliddocuments)
- [unvalidatedDocsCount](Workspace.md#unvalidateddocscount)
- [visibility](Workspace.md#visibility)
- [whitelistIngestAddresses](Workspace.md#whitelistingestaddresses)

## Properties

### collections

• `Optional` **collections**: [`WorkspaceCollectionsItem`](WorkspaceCollectionsItem.md)[]

___

### confirmedDocsCount

• `Optional` **confirmedDocsCount**: `number`

Number of validated documents in the workspace.

___

### documentSplitter

• `Optional` **documentSplitter**: [`WorkspaceDocumentSplitter`](WorkspaceDocumentSplitter.md)

___

### identifier

• **identifier**: `string`

Uniquely identify a workspace.

___

### ingestEmail

• `Optional` **ingestEmail**: `string`

When you send email to this address, any document attached in the body will be uploaded to this workspace.

___

### members

• `Optional` **members**: [`User`](User.md)[]

___

### name

• `Optional` **name**: `string`

___

### organization

• `Optional` **organization**: [`Organization`](Organization.md)

___

### rejectDuplicates

• `Optional` **rejectDuplicates**: `string`

If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings.

___

### rejectInvalidDocuments

• `Optional` **rejectInvalidDocuments**: `boolean`

If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed.

___

### unvalidatedDocsCount

• `Optional` **unvalidatedDocsCount**: `number`

Number of unvalidated documents in the workspace.

___

### visibility

• `Optional` **visibility**: `string`

Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace.

___

### whitelistIngestAddresses

• `Optional` **whitelistIngestAddresses**: `string`[]

If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info".
