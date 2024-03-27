[@affinda/affinda](../README.md) / [Exports](../modules.md) / GetDocumentOptionalParams

# Interface: GetDocumentOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`GetDocumentOptionalParams`**

## Table of contents

### Properties

- [abortSignal](GetDocumentOptionalParams.md#abortsignal)
- [compact](GetDocumentOptionalParams.md#compact)
- [format](GetDocumentOptionalParams.md#format)
- [onResponse](GetDocumentOptionalParams.md#onresponse)
- [requestOptions](GetDocumentOptionalParams.md#requestoptions)
- [serializerOptions](GetDocumentOptionalParams.md#serializeroptions)
- [tracingOptions](GetDocumentOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### compact

• `Optional` **compact**: `boolean`

If "true", the response is compacted to annotations' parsed data. Annotations' meta data are excluded. Default is "false".

___

### format

• `Optional` **format**: `string`

Specify which format you want the response to be. Default is "json"

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
