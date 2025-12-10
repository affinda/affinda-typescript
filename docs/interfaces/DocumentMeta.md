[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / DocumentMeta

# Interface: DocumentMeta

## Properties

### archivedBy?

> `optional` **archivedBy**: [`UserNullable`](UserNullable.md)

***

### archivedDt?

> `optional` **archivedDt**: `Date`

***

### childDocuments?

> `optional` **childDocuments**: [`DocumentMetaChildDocumentsItem`](DocumentMetaChildDocumentsItem.md)[]

If this document has been splitted into a number of child documents, this attribute points to those child documents.

***

### collection?

> `optional` **collection**: [`DocumentMetaCollection`](DocumentMetaCollection.md)

***

### confirmedBy?

> `optional` **confirmedBy**: [`UserNullable`](UserNullable.md)

***

### confirmedDt?

> `optional` **confirmedDt**: `Date`

***

### createdBy?

> `optional` **createdBy**: [`User`](User.md)

***

### createdDt?

> `optional` **createdDt**: `Date`

***

### customIdentifier?

> `optional` **customIdentifier**: `string`

Optional identifier for the document that you can set to track the document in the Affinda system.  Is not required to be unique.

***

### documentType?

> `optional` **documentType**: `string`

The document type's identifier.  Provide if you already know the document type.

***

### errorCode?

> `optional` **errorCode**: `string`

***

### errorDetail?

> `optional` **errorDetail**: `string`

***

### expiryTime?

> `optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

***

### failed?

> `optional` **failed**: `boolean`

If true, some exception was raised during processing. Check the 'error' field of the main return object.

***

### file?

> `optional` **file**: `string`

URL to view the file.

***

### fileName?

> `optional` **fileName**: `string`

Optional filename of the file

***

### html?

> `optional` **html**: `string`

URL to view the file converted to HTML.

***

### identifier

> **identifier**: `string`

Unique identifier for the document

***

### isArchived?

> `optional` **isArchived**: `boolean`

***

### isConfirmed?

> `optional` **isConfirmed**: `boolean`

***

### isOcrd?

> `optional` **isOcrd**: `boolean`

***

### isRejected?

> `optional` **isRejected**: `boolean`

***

### language?

> `optional` **language**: `string`

The document's language.

***

### llmHint?

> `optional` **llmHint**: `string`

Optional hint inserted into the LLM prompt when processing this document.

***

### ocrConfidence?

> `optional` **ocrConfidence**: `number`

***

### pages

> **pages**: [`PageMeta`](PageMeta.md)[]

The document's pages.

***

### parentDocument?

> `optional` **parentDocument**: [`DocumentMetaParentDocument`](DocumentMetaParentDocument.md)

If this document is part of a splitted document, this attribute points to the original document that this document is splitted from.

***

### pdf?

> `optional` **pdf**: `string`

The URL to the document's pdf (if the uploaded document is not already pdf, it's converted to pdf as part of the parsing process).

***

### ready?

> `optional` **ready**: `boolean`

If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling

***

### readyDt?

> `optional` **readyDt**: `Date`

The datetime when the document was ready

***

### regionBias?

> `optional` **regionBias**: [`RegionBias`](RegionBias.md)

***

### rejectedBy?

> `optional` **rejectedBy**: [`UserNullable`](UserNullable.md)

***

### rejectedDt?

> `optional` **rejectedDt**: `Date`

***

### reviewUrl?

> `optional` **reviewUrl**: `string`

***

### skipParse?

> `optional` **skipParse**: `boolean`

***

### sourceEmail?

> `optional` **sourceEmail**: `string`

If the document is created via email ingestion, this field stores the email file's URL.

***

### sourceEmailAddress?

> `optional` **sourceEmailAddress**: `string`

If the document is created via email ingestion, this field stores the email's From address.

***

### tags?

> `optional` **tags**: [`Tag`](Tag.md)[]

***

### workspace

> **workspace**: [`DocumentMetaWorkspace`](DocumentMetaWorkspace.md)
