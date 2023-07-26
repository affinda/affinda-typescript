[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIGetUsageByCollectionOptionalParams

# Interface: AffindaAPIGetUsageByCollectionOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIGetUsageByCollectionOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIGetUsageByCollectionOptionalParams.md#abortsignal)
- [end](AffindaAPIGetUsageByCollectionOptionalParams.md#end)
- [onResponse](AffindaAPIGetUsageByCollectionOptionalParams.md#onresponse)
- [requestOptions](AffindaAPIGetUsageByCollectionOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPIGetUsageByCollectionOptionalParams.md#serializeroptions)
- [start](AffindaAPIGetUsageByCollectionOptionalParams.md#start)
- [tracingOptions](AffindaAPIGetUsageByCollectionOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### end

• `Optional` **end**: `string`

End date of the period to retrieve. Format: YYYY-MM

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

### start

• `Optional` **start**: `string`

Start date of the period to retrieve. Format: YYYY-MM

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions
