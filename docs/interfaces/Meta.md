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

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry.

#### Defined in

[src/models/index.ts:23](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L23)

___

### failed

• **failed**: `boolean`

If true, some exception was raised during processing. Check the 'error' field of the main return object.

#### Defined in

[src/models/index.ts:21](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L21)

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

[src/models/index.ts:15](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L15)

___

### identifier

• **identifier**: ``null`` \| `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

[src/models/index.ts:13](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L13)

___

### ready

• **ready**: `boolean`

If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling

#### Defined in

[src/models/index.ts:17](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L17)

___

### readyDt

• `Optional` **readyDt**: `Date`

The datetime when the document was ready

#### Defined in

[src/models/index.ts:19](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L19)
