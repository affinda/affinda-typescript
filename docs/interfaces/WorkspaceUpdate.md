[@affinda/affinda](../README.md) / [Exports](../modules.md) / WorkspaceUpdate

# Interface: WorkspaceUpdate

## Table of contents

### Properties

- [name](WorkspaceUpdate.md#name)
- [rejectDuplicates](WorkspaceUpdate.md#rejectduplicates)
- [rejectInvalidDocuments](WorkspaceUpdate.md#rejectinvaliddocuments)
- [visibility](WorkspaceUpdate.md#visibility)
- [whitelistIngestAddresses](WorkspaceUpdate.md#whitelistingestaddresses)

## Properties

### name

• `Optional` **name**: `string`

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
