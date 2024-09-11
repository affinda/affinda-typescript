[@affinda/affinda](../README.md) / [Exports](../modules.md) / GetAllTagsOptionalParams

# Interface: GetAllTagsOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`GetAllTagsOptionalParams`**

## Table of contents

### Properties

- [abortSignal](GetAllTagsOptionalParams.md#abortsignal)
- [limit](GetAllTagsOptionalParams.md#limit)
- [name](GetAllTagsOptionalParams.md#name)
- [offset](GetAllTagsOptionalParams.md#offset)
- [onResponse](GetAllTagsOptionalParams.md#onresponse)
- [requestOptions](GetAllTagsOptionalParams.md#requestoptions)
- [serializerOptions](GetAllTagsOptionalParams.md#serializeroptions)
- [tracingOptions](GetAllTagsOptionalParams.md#tracingoptions)
- [workspace](GetAllTagsOptionalParams.md#workspace)

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
