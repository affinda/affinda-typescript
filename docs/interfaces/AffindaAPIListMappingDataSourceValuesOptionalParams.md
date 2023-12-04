[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIListMappingDataSourceValuesOptionalParams

# Interface: AffindaAPIListMappingDataSourceValuesOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIListMappingDataSourceValuesOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIListMappingDataSourceValuesOptionalParams.md#abortsignal)
- [limit](AffindaAPIListMappingDataSourceValuesOptionalParams.md#limit)
- [offset](AffindaAPIListMappingDataSourceValuesOptionalParams.md#offset)
- [onResponse](AffindaAPIListMappingDataSourceValuesOptionalParams.md#onresponse)
- [requestOptions](AffindaAPIListMappingDataSourceValuesOptionalParams.md#requestoptions)
- [search](AffindaAPIListMappingDataSourceValuesOptionalParams.md#search)
- [serializerOptions](AffindaAPIListMappingDataSourceValuesOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPIListMappingDataSourceValuesOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### limit

• `Optional` **limit**: `number`

The numbers of results to return.

___

### offset

• `Optional` **offset**: `number`

The number of documents to skip before starting to collect the result set.

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

### search

• `Optional` **search**: `string`

Search for specific values

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
