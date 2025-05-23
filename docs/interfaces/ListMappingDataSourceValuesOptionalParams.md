[@affinda/affinda](../README.md) / [Exports](../modules.md) / ListMappingDataSourceValuesOptionalParams

# Interface: ListMappingDataSourceValuesOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`ListMappingDataSourceValuesOptionalParams`**

## Table of contents

### Properties

- [abortSignal](ListMappingDataSourceValuesOptionalParams.md#abortsignal)
- [annotation](ListMappingDataSourceValuesOptionalParams.md#annotation)
- [document](ListMappingDataSourceValuesOptionalParams.md#document)
- [limit](ListMappingDataSourceValuesOptionalParams.md#limit)
- [offset](ListMappingDataSourceValuesOptionalParams.md#offset)
- [onResponse](ListMappingDataSourceValuesOptionalParams.md#onresponse)
- [requestOptions](ListMappingDataSourceValuesOptionalParams.md#requestoptions)
- [search](ListMappingDataSourceValuesOptionalParams.md#search)
- [serializerOptions](ListMappingDataSourceValuesOptionalParams.md#serializeroptions)
- [tracingOptions](ListMappingDataSourceValuesOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### annotation

• `Optional` **annotation**: `number`

Filter based on annotation ID

___

### document

• `Optional` **document**: `string`

Identifier of the document to apply filter lookups on if available

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
