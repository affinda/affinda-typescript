[@affinda/affinda](../README.md) / [Exports](../modules.md) / DocumentUpdate

# Interface: DocumentUpdate

## Table of contents

### Properties

- [collection](DocumentUpdate.md#collection)
- [expiryTime](DocumentUpdate.md#expirytime)
- [fileName](DocumentUpdate.md#filename)
- [isConfirmed](DocumentUpdate.md#isconfirmed)
- [isRejected](DocumentUpdate.md#isrejected)
- [language](DocumentUpdate.md#language)

## Properties

### collection

• `Optional` **collection**: `string`

Uniquely identify a collection.

___

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

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
