[@affinda/affinda](../README.md) / [Exports](../modules.md) / WorkspaceCreate

# Interface: WorkspaceCreate

## Table of contents

### Properties

- [name](WorkspaceCreate.md#name)
- [organization](WorkspaceCreate.md#organization)
- [rejectInvalidDocuments](WorkspaceCreate.md#rejectinvaliddocuments)
- [visibility](WorkspaceCreate.md#visibility)

## Properties

### name

• **name**: `string`

___

### organization

• **organization**: `string`

Uniquely identify an organization.

___

### rejectInvalidDocuments

• `Optional` **rejectInvalidDocuments**: `boolean`

If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed.

___

### visibility

• `Optional` **visibility**: `string`

Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace.
