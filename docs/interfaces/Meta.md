[@affinda/affinda](../README.md) / [Exports](../modules.md) / Meta

# Interface: Meta

## Table of contents

### Properties

- [expiryTime](Meta.md#expirytime)
- [failed](Meta.md#failed)
- [fileName](Meta.md#filename)
- [identifier](Meta.md#identifier)
- [ready](Meta.md#ready)
- [readyDt](Meta.md#readydt)

## Properties

### expiryTime

• `Optional` **expiryTime**: `Date`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

___

### failed

• **failed**: `boolean`

If true, some exception was raised during processing. Check the 'error' field of the main return object.

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

___

### identifier

• **identifier**: ``null`` \| `string`

Unique identifier for the document. If creating a document and left blank, one will be automatically generated.

___

### ready

• **ready**: `boolean`

If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling

___

### readyDt

• `Optional` **readyDt**: `Date`

The datetime when the document was ready
