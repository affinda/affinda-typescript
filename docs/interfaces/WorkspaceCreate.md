[@affinda/affinda](../README.md) / [Exports](../modules.md) / WorkspaceCreate

# Interface: WorkspaceCreate

## Table of contents

### Properties

- [name](WorkspaceCreate.md#name)
- [organization](WorkspaceCreate.md#organization)
- [rejectDuplicates](WorkspaceCreate.md#rejectduplicates)
- [rejectInvalidDocuments](WorkspaceCreate.md#rejectinvaliddocuments)
- [splitDocuments](WorkspaceCreate.md#splitdocuments)
- [visibility](WorkspaceCreate.md#visibility)
- [whitelistIngestAddresses](WorkspaceCreate.md#whitelistingestaddresses)

## Properties

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

### splitDocuments

• `Optional` **splitDocuments**: `boolean`

If true, attempt to split documents if multiple documents are detected in a single file.

___

### visibility

• `Optional` **visibility**: `string`

Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace.

___

### whitelistIngestAddresses

• `Optional` **whitelistIngestAddresses**: `string`[]

If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info".
