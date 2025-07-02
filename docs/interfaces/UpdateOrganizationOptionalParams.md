[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / UpdateOrganizationOptionalParams

# Interface: UpdateOrganizationOptionalParams

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

### avatar?

> `optional` **avatar**: `RequestBodyType`

Upload avatar for the organization.

***

### name?

> `optional` **name**: `string`

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

### resthookSignatureKey?

> `optional` **resthookSignatureKey**: `string`

Used to sign webhook payloads so you can verify their integrity.

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

### validationToolConfig?

> `optional` **validationToolConfig**: [`ValidationToolConfig`](ValidationToolConfig.md)

Configuration of the embeddable validation tool.
