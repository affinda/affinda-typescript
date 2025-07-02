[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / ListMappingDataSourcesOptionalParams

# Interface: ListMappingDataSourcesOptionalParams

Optional parameters.

## Extends

- `OperationOptions`

## Properties

### abortSignal?

> `optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

`coreClient.OperationOptions.abortSignal`

***

### identifier?

> `optional` **identifier**: `string`

Filter by identifier.

***

### limit?

> `optional` **limit**: `number`

The numbers of results to return.

***

### name?

> `optional` **name**: `string`

Filter by name.

***

### offset?

> `optional` **offset**: `number`

The number of documents to skip before starting to collect the result set.

***

### onResponse?

> `optional` **onResponse**: `RawResponseCallback`

A function to be called each time a response is received from the server
while performing the requested operation.
May be called multiple times.

#### Inherited from

`coreClient.OperationOptions.onResponse`

***

### organization?

> `optional` **organization**: `string`

Filter by organization.

***

### requestOptions?

> `optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

`coreClient.OperationOptions.requestOptions`

***

### serializerOptions?

> `optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

`coreClient.OperationOptions.serializerOptions`

***

### tracingOptions?

> `optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

`coreClient.OperationOptions.tracingOptions`

***

### workspace?

> `optional` **workspace**: `string`

Filter by workspace.
