[@affinda/affinda](../README.md) / [Exports](../modules.md) / GetAllIndexesOptionalParams

# Interface: GetAllIndexesOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`GetAllIndexesOptionalParams`**

## Table of contents

### Properties

- [abortSignal](GetAllIndexesOptionalParams.md#abortsignal)
- [documentType](GetAllIndexesOptionalParams.md#documenttype)
- [limit](GetAllIndexesOptionalParams.md#limit)
- [name](GetAllIndexesOptionalParams.md#name)
- [offset](GetAllIndexesOptionalParams.md#offset)
- [onResponse](GetAllIndexesOptionalParams.md#onresponse)
- [requestOptions](GetAllIndexesOptionalParams.md#requestoptions)
- [serializerOptions](GetAllIndexesOptionalParams.md#serializeroptions)
- [tracingOptions](GetAllIndexesOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### documentType

• `Optional` **documentType**: `string`

Filter indices by a document type

___

### limit

• `Optional` **limit**: `number`

The numbers of results to return.

___

### name

• `Optional` **name**: `string`

Filter indices by name

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
