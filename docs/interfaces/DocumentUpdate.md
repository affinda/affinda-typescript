[@affinda/affinda](../README.md) / [Exports](../modules.md) / DocumentUpdate

# Interface: DocumentUpdate

## Table of contents

### Properties

- [collection](DocumentUpdate.md#collection)
- [customIdentifier](DocumentUpdate.md#customidentifier)
- [expiryTime](DocumentUpdate.md#expirytime)
- [fileName](DocumentUpdate.md#filename)
- [identifier](DocumentUpdate.md#identifier)
- [isArchived](DocumentUpdate.md#isarchived)
- [isConfirmed](DocumentUpdate.md#isconfirmed)
- [isRejected](DocumentUpdate.md#isrejected)
- [language](DocumentUpdate.md#language)

## Properties

### collection

• `Optional` **collection**: `string`

Uniquely identify a collection.

___

### customIdentifier

• `Optional` **customIdentifier**: `string`

Specify a custom identifier for the document if you need one, not required to be unique.

___

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

___

### identifier

• `Optional` **identifier**: `string`

Deprecated in favor of `customIdentifier`.

___

### isArchived

• `Optional` **isArchived**: `boolean`

___

### isConfirmed

• `Optional` **isConfirmed**: `boolean`

___

### isRejected

• `Optional` **isRejected**: `boolean`

___

### language

• `Optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.
