[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / DocumentCreateFromData

# Interface: DocumentCreateFromData

## Extends

- [`DocumentCreate`](DocumentCreate.md)

## Properties

### collection?

> `optional` **collection**: `string`

Uniquely identify a collection.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`collection`](DocumentCreate.md#collection)

***

### compact?

> `optional` **compact**: `string`

If true, the returned parse result (assuming `wait` is also true) will be a compact version of the full result.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`compact`](DocumentCreate.md#compact)

***

### customIdentifier?

> `optional` **customIdentifier**: `string`

Specify a custom identifier for the document if you need one, not required to be unique.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`customIdentifier`](DocumentCreate.md#customidentifier)

***

### data

> **data**: [`DocumentCreateFromDataData`](DocumentCreateFromDataData.md)

Create resume or job description directly from data.

***

### deleteAfterParse?

> `optional` **deleteAfterParse**: `string`

If true, no data will be stored after parsing. Only compatible with requests where wait: True.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`deleteAfterParse`](DocumentCreate.md#deleteafterparse)

***

### documentType?

> `optional` **documentType**: `string`

The document type's identifier.  Provide if you already know the document type.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`documentType`](DocumentCreate.md#documenttype)

***

### enableValidationTool?

> `optional` **enableValidationTool**: `string`

If true, the document will be viewable in the Affinda Validation Tool. Set to False to optimize parsing speed.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`enableValidationTool`](DocumentCreate.md#enablevalidationtool)

***

### expiryTime?

> `optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`expiryTime`](DocumentCreate.md#expirytime)

***

### file?

> `optional` **file**: `RequestBodyType`

File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG, TIFF, ODT, XLS, XLSX

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`file`](DocumentCreate.md#file)

***

### fileName?

> `optional` **fileName**: `string`

Optional filename of the file

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`fileName`](DocumentCreate.md#filename)

***

### identifier?

> `optional` **identifier**: `string`

Deprecated in favor of `customIdentifier`.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`identifier`](DocumentCreate.md#identifier)

***

### language?

> `optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`language`](DocumentCreate.md#language)

***

### lowPriority?

> `optional` **lowPriority**: `string`

Explicitly mark this document as low priority.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`lowPriority`](DocumentCreate.md#lowpriority)

***

### regionBias?

> `optional` **regionBias**: `string`

A JSON representation of the RegionBias object.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`regionBias`](DocumentCreate.md#regionbias)

***

### rejectDuplicates?

> `optional` **rejectDuplicates**: `string`

If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`rejectDuplicates`](DocumentCreate.md#rejectduplicates)

***

### url?

> `optional` **url**: `string`

URL to download the document.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`url`](DocumentCreate.md#url)

***

### useOcr?

> `optional` **useOcr**: `string`

If true, the document will be treated like an image, and the text will be extracted using OCR. If false, the document will be treated like a PDF, and the text will be extracted using the parser. If not set, we will determine whether to use OCR based on whether words are found in the document.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`useOcr`](DocumentCreate.md#useocr)

***

### wait?

> `optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`wait`](DocumentCreate.md#wait)

***

### warningMessages?

> `optional` **warningMessages**: [`DocumentWarning`](DocumentWarning.md)[]

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`warningMessages`](DocumentCreate.md#warningmessages)

***

### workspace?

> `optional` **workspace**: `string`

Uniquely identify a workspace.

#### Inherited from

[`DocumentCreate`](DocumentCreate.md).[`workspace`](DocumentCreate.md#workspace)
