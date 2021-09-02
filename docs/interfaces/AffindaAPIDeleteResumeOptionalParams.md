[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIDeleteResumeOptionalParams

# Interface: AffindaAPIDeleteResumeOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIDeleteResumeOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIDeleteResumeOptionalParams.md#abortsignal)
- [onResponse](AffindaAPIDeleteResumeOptionalParams.md#onresponse)
- [requestOptions](AffindaAPIDeleteResumeOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPIDeleteResumeOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPIDeleteResumeOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:289

___

### onResponse

• `Optional` **onResponse**: `RawResponseCallback`

A function to be called each time a response is received from the server
while performing the requested operation.
May be called multiple times.

#### Inherited from

coreClient.OperationOptions.onResponse

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:307

___

### requestOptions

• `Optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

coreClient.OperationOptions.requestOptions

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:293

___

### serializerOptions

• `Optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

coreClient.OperationOptions.serializerOptions

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:301

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:297
