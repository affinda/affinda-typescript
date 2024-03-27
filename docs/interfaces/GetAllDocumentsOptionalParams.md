[@affinda/affinda](../README.md) / [Exports](../modules.md) / GetAllDocumentsOptionalParams

# Interface: GetAllDocumentsOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`GetAllDocumentsOptionalParams`**

## Table of contents

### Properties

- [abortSignal](GetAllDocumentsOptionalParams.md#abortsignal)
- [collection](GetAllDocumentsOptionalParams.md#collection)
- [compact](GetAllDocumentsOptionalParams.md#compact)
- [count](GetAllDocumentsOptionalParams.md#count)
- [createdDt](GetAllDocumentsOptionalParams.md#createddt)
- [customIdentifier](GetAllDocumentsOptionalParams.md#customidentifier)
- [exclude](GetAllDocumentsOptionalParams.md#exclude)
- [failed](GetAllDocumentsOptionalParams.md#failed)
- [hasChallenges](GetAllDocumentsOptionalParams.md#haschallenges)
- [inReview](GetAllDocumentsOptionalParams.md#inreview)
- [includeData](GetAllDocumentsOptionalParams.md#includedata)
- [limit](GetAllDocumentsOptionalParams.md#limit)
- [offset](GetAllDocumentsOptionalParams.md#offset)
- [onResponse](GetAllDocumentsOptionalParams.md#onresponse)
- [ordering](GetAllDocumentsOptionalParams.md#ordering)
- [ready](GetAllDocumentsOptionalParams.md#ready)
- [requestOptions](GetAllDocumentsOptionalParams.md#requestoptions)
- [search](GetAllDocumentsOptionalParams.md#search)
- [serializerOptions](GetAllDocumentsOptionalParams.md#serializeroptions)
- [state](GetAllDocumentsOptionalParams.md#state)
- [tags](GetAllDocumentsOptionalParams.md#tags)
- [tracingOptions](GetAllDocumentsOptionalParams.md#tracingoptions)
- [validatable](GetAllDocumentsOptionalParams.md#validatable)
- [workspace](GetAllDocumentsOptionalParams.md#workspace)

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

### compact

• `Optional` **compact**: `boolean`

If "true", the response is compacted to annotations' parsed data. Annotations' meta data are excluded. Default is "false".

___

### count

• `Optional` **count**: `boolean`

If "false", the documents count is not computed, thus saving time for large collections. Default is "true".

___

### createdDt

• `Optional` **createdDt**: `string`

Filter by created datetime.

___

### customIdentifier

• `Optional` **customIdentifier**: `string`

Filter for documents with this custom identifier.

___

### exclude

• `Optional` **exclude**: `string`[]

Exclude some documents from the result.

___

### failed

• `Optional` **failed**: `boolean`

Filter by failed status.

___

### hasChallenges

• `Optional` **hasChallenges**: `boolean`

Filter for documents with challenges.

___

### inReview

• `Optional` **inReview**: `boolean`

Exclude documents that are currently being reviewed.

___

### includeData

• `Optional` **includeData**: `boolean`

By default, this endpoint returns only the meta data of the documents. Set this to `true` will return a summary of the data that was parsed. If you want to retrieve the full set of data for a document, use the `GET /documents/{identifier}` endpoint.

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

Sort the result set. A "-" at the beginning denotes DESC sort, e.g. -created_dt. Sort by multiple fields is supported. Supported values include: 'file_name', 'extractor', 'created_dt', 'validated_dt', 'archived_dt' and 'parsed__<dataPointSlug>'.

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
