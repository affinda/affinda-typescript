[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIUpdateValidationResultOptionalParams

# Interface: AffindaAPIUpdateValidationResultOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIUpdateValidationResultOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIUpdateValidationResultOptionalParams.md#abortsignal)
- [onResponse](AffindaAPIUpdateValidationResultOptionalParams.md#onresponse)
- [requestOptions](AffindaAPIUpdateValidationResultOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPIUpdateValidationResultOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPIUpdateValidationResultOptionalParams.md#tracingoptions)

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
