[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / DocumentCreate

# Interface: DocumentCreate

## Properties

### collection?

> `optional` **collection**: `string`

Uniquely identify a collection.

***

### compact?

> `optional` **compact**: `string`

If true, the returned parse result (assuming `wait` is also true) will be a compact version of the full result.

***

### customIdentifier?

> `optional` **customIdentifier**: `string`

Specify a custom identifier for the document if you need one, not required to be unique.

***

### deleteAfterParse?

> `optional` **deleteAfterParse**: `string`

If true, no data will be stored after parsing. Only compatible with requests where wait: True.

***

### documentType?

> `optional` **documentType**: `string`

The document type's identifier.  Provide if you already know the document type.

***

### enableValidationTool?

> `optional` **enableValidationTool**: `string`

If true, the document will be viewable in the Affinda Validation Tool. Set to False to optimize parsing speed.

***

### expiryTime?

> `optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

***

### file?

> `optional` **file**: `RequestBodyType`

File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG, TIFF, ODT, XLS, XLSX

***

### fileName?

> `optional` **fileName**: `string`

Optional filename of the file

***

### identifier?

> `optional` **identifier**: `string`

Deprecated in favor of `customIdentifier`.

***

### language?

> `optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

***

### limitToExamples?

> `optional` **limitToExamples**: `string`[]

Restrict LLM example selection to the specified document identifiers.

***

### llmHint?

> `optional` **llmHint**: `string`

Optional hint inserted into the LLM prompt when processing this document.

***

### lowPriority?

> `optional` **lowPriority**: `string`

Explicitly mark this document as low priority.

***

### regionBias?

> `optional` **regionBias**: `string`

A JSON representation of the RegionBias object.

***

### rejectDuplicates?

> `optional` **rejectDuplicates**: `string`

If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings.

***

### url?

> `optional` **url**: `string`

URL to download the document.

***

### useOcr?

> `optional` **useOcr**: `string`

If true, the document will be treated like an image, and the text will be extracted using OCR. If false, the document will be treated like a PDF, and the text will be extracted using the parser. If not set, we will determine whether to use OCR based on whether words are found in the document.

***

### wait?

> `optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.

***

### warningMessages?

> `optional` **warningMessages**: [`DocumentWarning`](DocumentWarning.md)[]

***

### workspace?

> `optional` **workspace**: `string`

Uniquely identify a workspace.
