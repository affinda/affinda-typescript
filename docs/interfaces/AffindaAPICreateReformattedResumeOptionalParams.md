[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateReformattedResumeOptionalParams

# Interface: AffindaAPICreateReformattedResumeOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateReformattedResumeOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateReformattedResumeOptionalParams.md#abortsignal)
- [file](AffindaAPICreateReformattedResumeOptionalParams.md#file)
- [fileName](AffindaAPICreateReformattedResumeOptionalParams.md#filename)
- [identifier](AffindaAPICreateReformattedResumeOptionalParams.md#identifier)
- [language](AffindaAPICreateReformattedResumeOptionalParams.md#language)
- [onResponse](AffindaAPICreateReformattedResumeOptionalParams.md#onresponse)
- [requestOptions](AffindaAPICreateReformattedResumeOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPICreateReformattedResumeOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPICreateReformattedResumeOptionalParams.md#tracingoptions)
- [url](AffindaAPICreateReformattedResumeOptionalParams.md#url)
- [wait](AffindaAPICreateReformattedResumeOptionalParams.md#wait)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

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

Unique identifier for the document. If creating a document and left blank, one will be automatically generated.

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

URL to file to download and process

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.
