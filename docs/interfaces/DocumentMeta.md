[@affinda/affinda](../README.md) / [Exports](../modules.md) / DocumentMeta

# Interface: DocumentMeta

## Table of contents

### Properties

- [archivedBy](DocumentMeta.md#archivedby)
- [archivedDt](DocumentMeta.md#archiveddt)
- [childDocuments](DocumentMeta.md#childdocuments)
- [collection](DocumentMeta.md#collection)
- [confirmedBy](DocumentMeta.md#confirmedby)
- [confirmedDt](DocumentMeta.md#confirmeddt)
- [createdBy](DocumentMeta.md#createdby)
- [createdDt](DocumentMeta.md#createddt)
- [customIdentifier](DocumentMeta.md#customidentifier)
- [documentType](DocumentMeta.md#documenttype)
- [errorCode](DocumentMeta.md#errorcode)
- [errorDetail](DocumentMeta.md#errordetail)
- [expiryTime](DocumentMeta.md#expirytime)
- [failed](DocumentMeta.md#failed)
- [file](DocumentMeta.md#file)
- [fileName](DocumentMeta.md#filename)
- [html](DocumentMeta.md#html)
- [identifier](DocumentMeta.md#identifier)
- [isArchived](DocumentMeta.md#isarchived)
- [isConfirmed](DocumentMeta.md#isconfirmed)
- [isOcrd](DocumentMeta.md#isocrd)
- [isRejected](DocumentMeta.md#isrejected)
- [language](DocumentMeta.md#language)
- [ocrConfidence](DocumentMeta.md#ocrconfidence)
- [pages](DocumentMeta.md#pages)
- [parentDocument](DocumentMeta.md#parentdocument)
- [pdf](DocumentMeta.md#pdf)
- [ready](DocumentMeta.md#ready)
- [readyDt](DocumentMeta.md#readydt)
- [regionBias](DocumentMeta.md#regionbias)
- [rejectedBy](DocumentMeta.md#rejectedby)
- [rejectedDt](DocumentMeta.md#rejecteddt)
- [reviewUrl](DocumentMeta.md#reviewurl)
- [skipParse](DocumentMeta.md#skipparse)
- [sourceEmail](DocumentMeta.md#sourceemail)
- [sourceEmailAddress](DocumentMeta.md#sourceemailaddress)
- [tags](DocumentMeta.md#tags)
- [workspace](DocumentMeta.md#workspace)

## Properties

### archivedBy

• `Optional` **archivedBy**: [`UserNullable`](UserNullable.md)

___

### archivedDt

• `Optional` **archivedDt**: `Date`

___

### childDocuments

• `Optional` **childDocuments**: [`DocumentMetaChildDocumentsItem`](DocumentMetaChildDocumentsItem.md)[]

If this document has been splitted into a number of child documents, this attribute points to those child documents.

___

### collection

• `Optional` **collection**: [`DocumentMetaCollection`](DocumentMetaCollection.md)

___

### confirmedBy

• `Optional` **confirmedBy**: [`UserNullable`](UserNullable.md)

___

### confirmedDt

• `Optional` **confirmedDt**: `Date`

___

### createdBy

• `Optional` **createdBy**: [`User`](User.md)

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

The document type's identifier.  Provide if you already know the document type.

___

### errorCode

• `Optional` **errorCode**: `string`

___

### errorDetail

• `Optional` **errorDetail**: `string`

___

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

___

### failed

• `Optional` **failed**: `boolean`

If true, some exception was raised during processing. Check the 'error' field of the main return object.

___

### file

• `Optional` **file**: `string`

URL to view the file.

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

___

### html

• `Optional` **html**: `string`

URL to view the file converted to HTML.

___

### identifier

• **identifier**: `string`

Unique identifier for the document

___

### isArchived

• `Optional` **isArchived**: `boolean`

___

### isConfirmed

• `Optional` **isConfirmed**: `boolean`

___

### isOcrd

• `Optional` **isOcrd**: `boolean`

___

### isRejected

• `Optional` **isRejected**: `boolean`

___

### language

• `Optional` **language**: `string`

The document's language.

___

### ocrConfidence

• `Optional` **ocrConfidence**: `number`

___

### pages

• **pages**: [`PageMeta`](PageMeta.md)[]

The document's pages.

___

### parentDocument

• `Optional` **parentDocument**: [`DocumentMetaParentDocument`](DocumentMetaParentDocument.md)

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

### rejectedBy

• `Optional` **rejectedBy**: [`UserNullable`](UserNullable.md)

___

### rejectedDt

• `Optional` **rejectedDt**: `Date`

___

### reviewUrl

• `Optional` **reviewUrl**: `string`

___

### skipParse

• `Optional` **skipParse**: `boolean`

___

### sourceEmail

• `Optional` **sourceEmail**: `string`

If the document is created via email ingestion, this field stores the email file's URL.

___

### sourceEmailAddress

• `Optional` **sourceEmailAddress**: `string`

If the document is created via email ingestion, this field stores the email's From address.

___

### tags

• `Optional` **tags**: [`Tag`](Tag.md)[]

___

### workspace

• **workspace**: [`DocumentMetaWorkspace`](DocumentMetaWorkspace.md)
