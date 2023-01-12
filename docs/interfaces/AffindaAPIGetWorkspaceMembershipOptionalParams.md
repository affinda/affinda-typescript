[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIGetWorkspaceMembershipOptionalParams

# Interface: AffindaAPIGetWorkspaceMembershipOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIGetWorkspaceMembershipOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIGetWorkspaceMembershipOptionalParams.md#abortsignal)
- [onResponse](AffindaAPIGetWorkspaceMembershipOptionalParams.md#onresponse)
- [requestOptions](AffindaAPIGetWorkspaceMembershipOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPIGetWorkspaceMembershipOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPIGetWorkspaceMembershipOptionalParams.md#tracingoptions)

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
