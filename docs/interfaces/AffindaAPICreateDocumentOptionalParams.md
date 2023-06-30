[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateDocumentOptionalParams

# Interface: AffindaAPICreateDocumentOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateDocumentOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateDocumentOptionalParams.md#abortsignal)
- [collection](AffindaAPICreateDocumentOptionalParams.md#collection)
- [data](AffindaAPICreateDocumentOptionalParams.md#data)
- [expiryTime](AffindaAPICreateDocumentOptionalParams.md#expirytime)
- [file](AffindaAPICreateDocumentOptionalParams.md#file)
- [fileName](AffindaAPICreateDocumentOptionalParams.md#filename)
- [identifier](AffindaAPICreateDocumentOptionalParams.md#identifier)
- [language](AffindaAPICreateDocumentOptionalParams.md#language)
- [lowPriority](AffindaAPICreateDocumentOptionalParams.md#lowpriority)
- [onResponse](AffindaAPICreateDocumentOptionalParams.md#onresponse)
- [regionBias](AffindaAPICreateDocumentOptionalParams.md#regionbias)
- [rejectDuplicates](AffindaAPICreateDocumentOptionalParams.md#rejectduplicates)
- [requestOptions](AffindaAPICreateDocumentOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPICreateDocumentOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPICreateDocumentOptionalParams.md#tracingoptions)
- [url](AffindaAPICreateDocumentOptionalParams.md#url)
- [wait](AffindaAPICreateDocumentOptionalParams.md#wait)
- [workspace](AffindaAPICreateDocumentOptionalParams.md#workspace)

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

### data

• `Optional` **data**: [`DocumentCreateData`](DocumentCreateData.md)

Create resume or job description directly from data.

___

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

___

### file

• `Optional` **file**: `RequestBodyType`

File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

___

### identifier

• `Optional` **identifier**: `string`

Specify a custom identifier for the document.

___

### language

• `Optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

___

### lowPriority

• `Optional` **lowPriority**: `boolean`

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
