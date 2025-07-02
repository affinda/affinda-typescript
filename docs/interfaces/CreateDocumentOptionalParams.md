[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / CreateDocumentOptionalParams

# Interface: CreateDocumentOptionalParams

Optional parameters.

## Extends

- `OperationOptions`

## Properties

### abortSignal?

> `optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

`coreClient.OperationOptions.abortSignal`

***

### camelCase?

> `optional` **camelCase**: `boolean`

Whether to return the response in camelCase. Default is true.

***

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

### data?

> `optional` **data**: [`DocumentCreateData`](DocumentCreateData.md)

Create resume or job description directly from data.

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

### lowPriority?

> `optional` **lowPriority**: `string`

Explicitly mark this document as low priority.

***

### onResponse?

> `optional` **onResponse**: `RawResponseCallback`

A function to be called each time a response is received from the server
while performing the requested operation.
May be called multiple times.

#### Inherited from

`coreClient.OperationOptions.onResponse`

***

### regionBias?

> `optional` **regionBias**: `string`

A JSON representation of the RegionBias object.

***

### rejectDuplicates?

> `optional` **rejectDuplicates**: `boolean`

If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings.

***

### requestOptions?

> `optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

`coreClient.OperationOptions.requestOptions`

***

### serializerOptions?

> `optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

`coreClient.OperationOptions.serializerOptions`

***

### tracingOptions?

> `optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

`coreClient.OperationOptions.tracingOptions`

***

### url?

> `optional` **url**: `string`

URL to download the document.

***

### useOcr?

> `optional` **useOcr**: `boolean`

If true, the document will be treated like an image, and the text will be extracted using OCR. If false, the document will be treated like a PDF, and the text will be extracted using the parser. If not set, we will determine whether to use OCR based on whether words are found in the document.

***

### wait?

> `optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.

***

### warningMessages?

> `optional` **warningMessages**: [`DocumentWarning`](DocumentWarning.md)[]

Array of DocumentWarning

***

### workspace?

> `optional` **workspace**: `string`

Uniquely identify a workspace.
