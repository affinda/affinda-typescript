[@affinda/affinda](../README.md) / [Exports](../modules.md) / CreateDocumentOptionalParams

# Interface: CreateDocumentOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`CreateDocumentOptionalParams`**

## Table of contents

### Properties

- [abortSignal](CreateDocumentOptionalParams.md#abortsignal)
- [collection](CreateDocumentOptionalParams.md#collection)
- [compact](CreateDocumentOptionalParams.md#compact)
- [customIdentifier](CreateDocumentOptionalParams.md#customidentifier)
- [data](CreateDocumentOptionalParams.md#data)
- [deleteAfterParse](CreateDocumentOptionalParams.md#deleteafterparse)
- [enableValidationTool](CreateDocumentOptionalParams.md#enablevalidationtool)
- [expiryTime](CreateDocumentOptionalParams.md#expirytime)
- [file](CreateDocumentOptionalParams.md#file)
- [fileName](CreateDocumentOptionalParams.md#filename)
- [identifier](CreateDocumentOptionalParams.md#identifier)
- [language](CreateDocumentOptionalParams.md#language)
- [lowPriority](CreateDocumentOptionalParams.md#lowpriority)
- [onResponse](CreateDocumentOptionalParams.md#onresponse)
- [regionBias](CreateDocumentOptionalParams.md#regionbias)
- [rejectDuplicates](CreateDocumentOptionalParams.md#rejectduplicates)
- [requestOptions](CreateDocumentOptionalParams.md#requestoptions)
- [serializerOptions](CreateDocumentOptionalParams.md#serializeroptions)
- [tracingOptions](CreateDocumentOptionalParams.md#tracingoptions)
- [url](CreateDocumentOptionalParams.md#url)
- [wait](CreateDocumentOptionalParams.md#wait)
- [workspace](CreateDocumentOptionalParams.md#workspace)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### collection

• `Optional` **collection**: `string`

Uniquely identify a collection.

___

### compact

• `Optional` **compact**: `string`

If true, the returned parse result (assuming `wait` is also true) will be a compact version of the full result.

___

### customIdentifier

• `Optional` **customIdentifier**: `string`

Specify a custom identifier for the document if you need one, not required to be unique.

___

### data

• `Optional` **data**: [`DocumentCreateData`](DocumentCreateData.md)

Create resume or job description directly from data.

___

### deleteAfterParse

• `Optional` **deleteAfterParse**: `string`

If true, no data will be stored after parsing. Only compatible with requests where wait: True.

___

### enableValidationTool

• `Optional` **enableValidationTool**: `string`

If true, the document will be viewable in the Affinda Validation Tool. Set to False to optimize parsing speed.

___

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

___

### file

• `Optional` **file**: `RequestBodyType`

File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG, TIFF, ODT, XLS, XLSX, ZIP

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

___

### identifier

• `Optional` **identifier**: `string`

Deprecated in favor of `customIdentifier`.

___

### language

• `Optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

___

### lowPriority

• `Optional` **lowPriority**: `string`

Explicitly mark this document as low priority.

___

### onResponse

• `Optional` **onResponse**: `RawResponseCallback`

A function to be called each time a response is received from the server
while performing the requested operation.
May be called multiple times.

#### Inherited from

coreClient.OperationOptions.onResponse

___

### regionBias

• `Optional` **regionBias**: `string`

A JSON representation of the RegionBias object.

___

### rejectDuplicates

• `Optional` **rejectDuplicates**: `boolean`

If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings.

___

### requestOptions

• `Optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

coreClient.OperationOptions.requestOptions

___

### serializerOptions

• `Optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

coreClient.OperationOptions.serializerOptions

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions

___

### url

• `Optional` **url**: `string`

URL to download the document.

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.

___

### workspace

• `Optional` **workspace**: `string`

Uniquely identify a workspace.
