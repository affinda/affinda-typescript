[@affinda/affinda](../README.md) / [Exports](../modules.md) / Organization

# Interface: Organization

## Table of contents

### Properties

- [avatar](Organization.md#avatar)
- [identifier](Organization.md#identifier)
- [isTrial](Organization.md#istrial)
- [name](Organization.md#name)
- [resthookSignatureKey](Organization.md#resthooksignaturekey)
- [userRole](Organization.md#userrole)
- [validationToolConfig](Organization.md#validationtoolconfig)

## Properties

### avatar

• `Optional` **avatar**: `string`

URL of the organization's avatar.

___

### identifier

• `Optional` **identifier**: `string`

Uniquely identify an organization.

___

### isTrial

• `Optional` **isTrial**: `boolean`

___

### name

• `Optional` **name**: `string`

___

### resthookSignatureKey

• `Optional` **resthookSignatureKey**: `string`

Used to sign webhook payloads so you can verify their integrity.

___

### userRole

• `Optional` **userRole**: `string`

The role of the logged in user within the organization.

___

### validationToolConfig

• `Optional` **validationToolConfig**: [`OrganizationValidationToolConfig`](OrganizationValidationToolConfig.md)

Configuration of the embeddable validation tool.
