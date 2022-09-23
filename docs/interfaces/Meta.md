[@affinda/affinda](../README.md) / [Exports](../modules.md) / Meta

# Interface: Meta

## Indexable

▪ [property: `string`]: `any`

Describes unknown properties. The value of an unknown property can be of "any" type.

## Table of contents

### Properties

- [childDocuments](Meta.md#childdocuments)
- [expiryTime](Meta.md#expirytime)
- [failed](Meta.md#failed)
- [fileName](Meta.md#filename)
- [identifier](Meta.md#identifier)
- [language](Meta.md#language)
- [pages](Meta.md#pages)
- [parentDocument](Meta.md#parentdocument)
- [pdf](Meta.md#pdf)
- [ready](Meta.md#ready)
- [readyDt](Meta.md#readydt)

## Properties

### childDocuments

• `Optional` `Readonly` **childDocuments**: [`SplitRelation`](SplitRelation.md)[]

If this document has been splitted into a number of child documents, this attribute points to those child documents.
NOTE: This property will not be serialized. It can only be populated by the server.

___

### expiryTime

• `Optional` **expiryTime**: `string`

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

### language

• `Optional` **language**: `string`

The document's language.

___

### pages

• `Optional` **pages**: [`PageMeta`](PageMeta.md)[]

The document's pages.

___

### parentDocument

• `Optional` `Readonly` **parentDocument**: [`SplitRelation`](SplitRelation.md)

If this document is part of a splitted document, this attribute points to the original document that this document is splitted from.
NOTE: This property will not be serialized. It can only be populated by the server.

___

### pdf

• `Optional` `Readonly` **pdf**: `string`

The URL to the document's pdf (if the uploaded document is not already pdf, it's converted to pdf as part of the parsing process).
NOTE: This property will not be serialized. It can only be populated by the server.

___

### ready

• **ready**: `boolean`

If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling

___

### readyDt

• `Optional` **readyDt**: `Date`

The datetime when the document was ready
