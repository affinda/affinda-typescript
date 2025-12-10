[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / DocumentUpdate

# Interface: DocumentUpdate

## Properties

### collection?

> `optional` **collection**: `string`

Uniquely identify a collection.

***

### customIdentifier?

> `optional` **customIdentifier**: `string`

Specify a custom identifier for the document if you need one, not required to be unique.

***

### documentType?

> `optional` **documentType**: `string`

The document type's identifier.  Provide if you already know the document type.

***

### expiryTime?

> `optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

***

### fileName?

> `optional` **fileName**: `string`

Optional filename of the file

***

### identifier?

> `optional` **identifier**: `string`

Deprecated in favor of `customIdentifier`.

***

### isArchived?

> `optional` **isArchived**: `boolean`

***

### isConfirmed?

> `optional` **isConfirmed**: `boolean`

***

### isRejected?

> `optional` **isRejected**: `boolean`

***

### language?

> `optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

***

### llmHint?

> `optional` **llmHint**: `string`

Optional hint inserted into the LLM prompt when processing this document.

***

### skipParse?

> `optional` **skipParse**: `boolean`

***

### warningMessages?

> `optional` **warningMessages**: [`DocumentWarning`](DocumentWarning.md)[]

***

### workspace?

> `optional` **workspace**: `string`

Uniquely identify a workspace.
