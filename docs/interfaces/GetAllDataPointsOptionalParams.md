[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / GetAllDataPointsOptionalParams

# Interface: GetAllDataPointsOptionalParams

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

### annotationContentType?

> `optional` **annotationContentType**: `string`

Filter by annotation content type, e.g. text, integer, float, date, etc.

***

### description?

> `optional` **description**: `string`

Filter by description.

***

### extractor?

> `optional` **extractor**: `string`

Filter by extractor.

***

### identifier?

> `optional` **identifier**: `string`[]

Filter by specific identifiers.

***

### includePublic?

> `optional` **includePublic**: `boolean`

Allows you to include public data points in the response when you're filtering by organization.

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

### slug?

> `optional` **slug**: `string`

Filter by slug.

***

### tracingOptions?

> `optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

`coreClient.OperationOptions.tracingOptions`
