[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateResumeOptionalParams

# Interface: AffindaAPICreateResumeOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateResumeOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateResumeOptionalParams.md#abortsignal)
- [data](AffindaAPICreateResumeOptionalParams.md#data)
- [expiryTime](AffindaAPICreateResumeOptionalParams.md#expirytime)
- [file](AffindaAPICreateResumeOptionalParams.md#file)
- [fileName](AffindaAPICreateResumeOptionalParams.md#filename)
- [identifier](AffindaAPICreateResumeOptionalParams.md#identifier)
- [language](AffindaAPICreateResumeOptionalParams.md#language)
- [onResponse](AffindaAPICreateResumeOptionalParams.md#onresponse)
- [regionBias](AffindaAPICreateResumeOptionalParams.md#regionbias)
- [rejectDuplicates](AffindaAPICreateResumeOptionalParams.md#rejectduplicates)
- [requestOptions](AffindaAPICreateResumeOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPICreateResumeOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPICreateResumeOptionalParams.md#tracingoptions)
- [url](AffindaAPICreateResumeOptionalParams.md#url)
- [wait](AffindaAPICreateResumeOptionalParams.md#wait)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### data

• `Optional` **data**: [`ResumeData`](ResumeData.md)

A JSON-encoded string of the `ResumeData` object.

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

A random string that uniquely identify the resource.

___

### language

• `Optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

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

URL to download the resume.

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.
