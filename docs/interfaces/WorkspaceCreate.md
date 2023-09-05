[@affinda/affinda](../README.md) / [Exports](../modules.md) / WorkspaceCreate

# Interface: WorkspaceCreate

## Table of contents

### Properties

- [documentSplitter](WorkspaceCreate.md#documentsplitter)
- [name](WorkspaceCreate.md#name)
- [organization](WorkspaceCreate.md#organization)
- [rejectDuplicates](WorkspaceCreate.md#rejectduplicates)
- [rejectInvalidDocuments](WorkspaceCreate.md#rejectinvaliddocuments)
- [visibility](WorkspaceCreate.md#visibility)
- [whitelistIngestAddresses](WorkspaceCreate.md#whitelistingestaddresses)

## Properties

### documentSplitter

• `Optional` **documentSplitter**: `string`

Option "leave" means no document splitting at all. Option "conservative" means we don't actually split documents the documents, but will add a warning to documents that may require a split. Option "recommended" means we split documents that are highly likely to require a split, and add warnings to documents that might require one. Option "aggressive" means we split all documents that are likely to require a split.

___

### name

• **name**: `string`

___

### organization

• **organization**: `string`

Uniquely identify an organization.

___

### rejectDuplicates

• `Optional` **rejectDuplicates**: `string`

If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings.

___

### rejectInvalidDocuments

• `Optional` **rejectInvalidDocuments**: `boolean`

If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed.

___

### visibility

• `Optional` **visibility**: `string`

Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace.

___

### whitelistIngestAddresses

• `Optional` **whitelistIngestAddresses**: `string`[]

If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info".
