[@affinda/affinda](../README.md) / [Exports](../modules.md) / Meta

# Interface: Meta

## Table of contents

### Properties

- [childDocuments](Meta.md#childdocuments)
- [createdDt](Meta.md#createddt)
- [customIdentifier](Meta.md#customidentifier)
- [documentType](Meta.md#documenttype)
- [expiryTime](Meta.md#expirytime)
- [failed](Meta.md#failed)
- [fileName](Meta.md#filename)
- [identifier](Meta.md#identifier)
- [isVerified](Meta.md#isverified)
- [language](Meta.md#language)
- [ocrConfidence](Meta.md#ocrconfidence)
- [pages](Meta.md#pages)
- [parentDocument](Meta.md#parentdocument)
- [pdf](Meta.md#pdf)
- [ready](Meta.md#ready)
- [readyDt](Meta.md#readydt)
- [regionBias](Meta.md#regionbias)
- [reviewUrl](Meta.md#reviewurl)

## Properties

### childDocuments

• `Optional` **childDocuments**: [`MetaChildDocumentsItem`](MetaChildDocumentsItem.md)[]

If this document has been splitted into a number of child documents, this attribute points to those child documents.

___

### createdDt

• `Optional` **createdDt**: `Date`

___

### customIdentifier

• `Optional` **customIdentifier**: `string`

Optional identifier for the document that you can set to track the document in the Affinda system.  Is not required to be unique.

___

### documentType

• `Optional` **documentType**: `string`

___

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

___

### failed

• `Optional` **failed**: `boolean`

If true, some exception was raised during processing. Check the 'error' field of the main return object.

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the document

___

### isVerified

• `Optional` **isVerified**: `boolean`

This is true if the 'confirm' button has been clicked in the Affinda validation tool

___

### language

• `Optional` **language**: `string`

The document's language.

___

### ocrConfidence

• `Optional` **ocrConfidence**: `number`

The overall confidence in the conversion of image to text.  (only applicable for images or PDF documents without a text layer)

___

### pages

• `Optional` **pages**: [`PageMeta`](PageMeta.md)[]

The document's pages.

___

### parentDocument

• `Optional` **parentDocument**: [`MetaParentDocument`](MetaParentDocument.md)

If this document is part of a splitted document, this attribute points to the original document that this document is splitted from.

___

### pdf

• `Optional` **pdf**: `string`

The URL to the document's pdf (if the uploaded document is not already pdf, it's converted to pdf as part of the parsing process).

___

### ready

• `Optional` **ready**: `boolean`

If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling

___

### readyDt

• `Optional` **readyDt**: `Date`

The datetime when the document was ready

___

### regionBias

• `Optional` **regionBias**: [`RegionBias`](RegionBias.md)

___

### reviewUrl

• `Optional` **reviewUrl**: `string`

Signed URL (valid for 60 minutes) to access the validation tool.  Not applicable for documents types such a resumes.
