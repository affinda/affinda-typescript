[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateTagOptionalParams

# Interface: AffindaAPICreateTagOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateTagOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateTagOptionalParams.md#abortsignal)
- [onResponse](AffindaAPICreateTagOptionalParams.md#onresponse)
- [requestOptions](AffindaAPICreateTagOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPICreateTagOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPICreateTagOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

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
