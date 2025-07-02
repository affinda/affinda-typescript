[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / GetDocumentOptionalParams

# Interface: GetDocumentOptionalParams

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

### camelCase?

> `optional` **camelCase**: `boolean`

Whether to return the response in camelCase. Default is true.

***

### compact?

> `optional` **compact**: `boolean`

If "true", the response is compacted to annotations' parsed data. Annotations' meta data are excluded. Default is "false".

***

### format?

> `optional` **format**: `string`

Specify which format you want the response to be. Default is "json"

***

### onResponse?

> `optional` **onResponse**: `RawResponseCallback`

A function to be called each time a response is received from the server
while performing the requested operation.
May be called multiple times.

#### Inherited from

`coreClient.OperationOptions.onResponse`

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
