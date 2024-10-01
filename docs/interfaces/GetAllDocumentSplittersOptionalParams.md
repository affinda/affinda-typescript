[@affinda/affinda](../README.md) / [Exports](../modules.md) / GetAllDocumentSplittersOptionalParams

# Interface: GetAllDocumentSplittersOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`GetAllDocumentSplittersOptionalParams`**

## Table of contents

### Properties

- [abortSignal](GetAllDocumentSplittersOptionalParams.md#abortsignal)
- [includePublic](GetAllDocumentSplittersOptionalParams.md#includepublic)
- [limit](GetAllDocumentSplittersOptionalParams.md#limit)
- [offset](GetAllDocumentSplittersOptionalParams.md#offset)
- [onResponse](GetAllDocumentSplittersOptionalParams.md#onresponse)
- [organization](GetAllDocumentSplittersOptionalParams.md#organization)
- [requestOptions](GetAllDocumentSplittersOptionalParams.md#requestoptions)
- [serializerOptions](GetAllDocumentSplittersOptionalParams.md#serializeroptions)
- [tracingOptions](GetAllDocumentSplittersOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### includePublic

• `Optional` **includePublic**: `boolean`

Allows you to include public splitters in the response when you're filtering by organization.

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
