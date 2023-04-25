[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIGetAllDocumentsOptionalParams

# Interface: AffindaAPIGetAllDocumentsOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIGetAllDocumentsOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIGetAllDocumentsOptionalParams.md#abortsignal)
- [collection](AffindaAPIGetAllDocumentsOptionalParams.md#collection)
- [createdDt](AffindaAPIGetAllDocumentsOptionalParams.md#createddt)
- [exclude](AffindaAPIGetAllDocumentsOptionalParams.md#exclude)
- [failed](AffindaAPIGetAllDocumentsOptionalParams.md#failed)
- [inReview](AffindaAPIGetAllDocumentsOptionalParams.md#inreview)
- [includeData](AffindaAPIGetAllDocumentsOptionalParams.md#includedata)
- [limit](AffindaAPIGetAllDocumentsOptionalParams.md#limit)
- [offset](AffindaAPIGetAllDocumentsOptionalParams.md#offset)
- [onResponse](AffindaAPIGetAllDocumentsOptionalParams.md#onresponse)
- [ordering](AffindaAPIGetAllDocumentsOptionalParams.md#ordering)
- [ready](AffindaAPIGetAllDocumentsOptionalParams.md#ready)
- [requestOptions](AffindaAPIGetAllDocumentsOptionalParams.md#requestoptions)
- [search](AffindaAPIGetAllDocumentsOptionalParams.md#search)
- [serializerOptions](AffindaAPIGetAllDocumentsOptionalParams.md#serializeroptions)
- [state](AffindaAPIGetAllDocumentsOptionalParams.md#state)
- [tags](AffindaAPIGetAllDocumentsOptionalParams.md#tags)
- [tracingOptions](AffindaAPIGetAllDocumentsOptionalParams.md#tracingoptions)
- [validatable](AffindaAPIGetAllDocumentsOptionalParams.md#validatable)
- [workspace](AffindaAPIGetAllDocumentsOptionalParams.md#workspace)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### collection

• `Optional` **collection**: `string`

Filter by collection.

___

### createdDt

• `Optional` **createdDt**: `string`

Filter by created datetime.

___

### exclude

• `Optional` **exclude**: `string`[]

Exclude some documents from the result.

___

### failed

• `Optional` **failed**: `boolean`

Filter by failed status.

___

### inReview

• `Optional` **inReview**: `boolean`

Exclude documents that are currently being reviewed.

___

### includeData

• `Optional` **includeData**: `boolean`

By default, this endpoint returns only the meta data of the documents. Set this to `true` will return the detailed data that was parsed, at a performance cost.

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

### ordering

• `Optional` **ordering**: `string`[]

Sort the result set. A "-" at the beginning denotes DESC sort, e.g. -created_dt. Sort by multiple fields is supported.

___

### ready

• `Optional` **ready**: `boolean`

Filter by ready status.

___

### requestOptions

• `Optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

coreClient.OperationOptions.requestOptions

___

### search

• `Optional` **search**: `string`

Partial, case-insensitive match with file name or tag name.

___

### serializerOptions

• `Optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

coreClient.OperationOptions.serializerOptions

___

### state

• `Optional` **state**: `string`

Filter by the document's state.

___

### tags

• `Optional` **tags**: `number`[]

Filter by tag's IDs.

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions

___

### validatable

• `Optional` **validatable**: `boolean`

Filter for validatable documents.

___

### workspace

• `Optional` **workspace**: `string`

Filter by workspace.
