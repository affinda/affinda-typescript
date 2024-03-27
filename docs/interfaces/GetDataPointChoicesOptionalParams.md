[@affinda/affinda](../README.md) / [Exports](../modules.md) / GetDataPointChoicesOptionalParams

# Interface: GetDataPointChoicesOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`GetDataPointChoicesOptionalParams`**

## Table of contents

### Properties

- [abortSignal](GetDataPointChoicesOptionalParams.md#abortsignal)
- [limit](GetDataPointChoicesOptionalParams.md#limit)
- [offset](GetDataPointChoicesOptionalParams.md#offset)
- [onResponse](GetDataPointChoicesOptionalParams.md#onresponse)
- [requestOptions](GetDataPointChoicesOptionalParams.md#requestoptions)
- [search](GetDataPointChoicesOptionalParams.md#search)
- [serializerOptions](GetDataPointChoicesOptionalParams.md#serializeroptions)
- [tracingOptions](GetDataPointChoicesOptionalParams.md#tracingoptions)

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

Filter choices by searching for a substring.

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
