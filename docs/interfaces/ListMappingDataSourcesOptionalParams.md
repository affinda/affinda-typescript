[@affinda/affinda](../README.md) / [Exports](../modules.md) / ListMappingDataSourcesOptionalParams

# Interface: ListMappingDataSourcesOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`ListMappingDataSourcesOptionalParams`**

## Table of contents

### Properties

- [abortSignal](ListMappingDataSourcesOptionalParams.md#abortsignal)
- [identifier](ListMappingDataSourcesOptionalParams.md#identifier)
- [limit](ListMappingDataSourcesOptionalParams.md#limit)
- [name](ListMappingDataSourcesOptionalParams.md#name)
- [offset](ListMappingDataSourcesOptionalParams.md#offset)
- [onResponse](ListMappingDataSourcesOptionalParams.md#onresponse)
- [organization](ListMappingDataSourcesOptionalParams.md#organization)
- [requestOptions](ListMappingDataSourcesOptionalParams.md#requestoptions)
- [serializerOptions](ListMappingDataSourcesOptionalParams.md#serializeroptions)
- [tracingOptions](ListMappingDataSourcesOptionalParams.md#tracingoptions)
- [workspace](ListMappingDataSourcesOptionalParams.md#workspace)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### identifier

• `Optional` **identifier**: `string`

Filter by identifier.

___

### limit

• `Optional` **limit**: `number`

The numbers of results to return.

___

### name

• `Optional` **name**: `string`

Filter by name.

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

### organization

• `Optional` **organization**: `string`

Filter by organization.

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

### workspace

• `Optional` **workspace**: `string`

Filter by workspace.
