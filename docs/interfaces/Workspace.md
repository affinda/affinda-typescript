[@affinda/affinda](../README.md) / [Exports](../modules.md) / Workspace

# Interface: Workspace

## Table of contents

### Properties

- [collections](Workspace.md#collections)
- [confirmedDocsCount](Workspace.md#confirmeddocscount)
- [identifier](Workspace.md#identifier)
- [ingestEmail](Workspace.md#ingestemail)
- [members](Workspace.md#members)
- [name](Workspace.md#name)
- [organization](Workspace.md#organization)
- [rejectInvalidDocuments](Workspace.md#rejectinvaliddocuments)
- [unvalidatedDocsCount](Workspace.md#unvalidateddocscount)
- [visibility](Workspace.md#visibility)

## Properties

### collections

• `Optional` **collections**: [`WorkspaceCollectionsItem`](WorkspaceCollectionsItem.md)[]

___

### confirmedDocsCount

• `Optional` **confirmedDocsCount**: `number`

Number of validated documents in the workspace.

___

### identifier

• **identifier**: `string`

Uniquely identify a workspace.

___

### ingestEmail

• `Optional` **ingestEmail**: `string`

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
