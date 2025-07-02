[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / Meta

# Interface: Meta

## Properties

### childDocuments?

> `optional` **childDocuments**: [`MetaChildDocumentsItem`](MetaChildDocumentsItem.md)[]

If this document has been splitted into a number of child documents, this attribute points to those child documents.

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

***

### expiryTime?

> `optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

***

### failed?

> `optional` **failed**: `boolean`

If true, some exception was raised during processing. Check the 'error' field of the main return object.

***

### fileName?

> `optional` **fileName**: `string`

Optional filename of the file

***

### identifier?

> `optional` **identifier**: `string`

Unique identifier for the document

***

### isOcrd?

> `optional` **isOcrd**: `boolean`

***

### isVerified?

> `optional` **isVerified**: `boolean`

This is true if the 'confirm' button has been clicked in the Affinda validation tool

***

### language?

> `optional` **language**: `string`

The document's language.

***

### ocrConfidence?

> `optional` **ocrConfidence**: `number`

The overall confidence in the conversion of image to text.  (only applicable for images or PDF documents without a text layer)

***

### pages?

> `optional` **pages**: [`PageMeta`](PageMeta.md)[]

The document's pages.

***

### parentDocument?

> `optional` **parentDocument**: [`MetaParentDocument`](MetaParentDocument.md)

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

### reviewUrl?

> `optional` **reviewUrl**: `string`

Signed URL (valid for 60 minutes) to access the validation tool.  Not applicable for documents types such a resumes.
