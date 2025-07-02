[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / GetAllDocumentsOptionalParams

# Interface: GetAllDocumentsOptionalParams

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

### collection?

> `optional` **collection**: `string`

Filter by collection.

***

### compact?

> `optional` **compact**: `boolean`

If "true", the response is compacted to annotations' parsed data. Annotations' meta data are excluded. Default is "false".

***

### count?

> `optional` **count**: `boolean`

If "false", the documents count is not computed, thus saving time for large collections. Default is "true".

***

### createdDt?

> `optional` **createdDt**: `string`

Filter by created datetime.

***

### customIdentifier?

> `optional` **customIdentifier**: `string`

Filter for documents with this custom identifier.

***

### exclude?

> `optional` **exclude**: `string`[]

Exclude some documents from the result.

***

### failed?

> `optional` **failed**: `boolean`

Filter by failed status.

***

### hasChallenges?

> `optional` **hasChallenges**: `boolean`

Filter for documents with challenges.

***

### includeData?

> `optional` **includeData**: `boolean`

By default, this endpoint returns only the meta data of the documents. Set this to `true` will return a summary of the data that was parsed. If you want to retrieve the full set of data for a document, use the `GET /documents/{identifier}` endpoint.

***

### inReview?

> `optional` **inReview**: `boolean`

Exclude documents that are currently being reviewed.

***

### limit?

> `optional` **limit**: `number`

The numbers of results to return.

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

### ordering?

> `optional` **ordering**: `string`[]

Sort the result set. A "-" at the beginning denotes DESC sort, e.g. -created_dt. Sort by multiple fields is supported. Supported values include: 'file_name', 'extractor', 'created_dt', 'validated_dt', 'archived_dt' and 'parsed__<dataPointSlug>'.

***

### ready?

> `optional` **ready**: `boolean`

Filter by ready status.

***

### requestOptions?

> `optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

`coreClient.OperationOptions.requestOptions`

***

### search?

> `optional` **search**: `string`

Partial, case-insensitive match with file name or tag name.

***

### serializerOptions?

> `optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

`coreClient.OperationOptions.serializerOptions`

***

### state?

> `optional` **state**: `string`

Filter by the document's state.

***

### tags?

> `optional` **tags**: `number`[]

Filter by tag's IDs.

***

### tracingOptions?

> `optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

`coreClient.OperationOptions.tracingOptions`

***

### validatable?

> `optional` **validatable**: `boolean`

Filter for validatable documents.

***

### workspace?

> `optional` **workspace**: `string`

Filter by workspace.
