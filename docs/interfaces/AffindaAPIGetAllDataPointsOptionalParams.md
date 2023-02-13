[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIGetAllDataPointsOptionalParams

# Interface: AffindaAPIGetAllDataPointsOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIGetAllDataPointsOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIGetAllDataPointsOptionalParams.md#abortsignal)
- [annotationContentType](AffindaAPIGetAllDataPointsOptionalParams.md#annotationcontenttype)
- [description](AffindaAPIGetAllDataPointsOptionalParams.md#description)
- [extractor](AffindaAPIGetAllDataPointsOptionalParams.md#extractor)
- [limit](AffindaAPIGetAllDataPointsOptionalParams.md#limit)
- [offset](AffindaAPIGetAllDataPointsOptionalParams.md#offset)
- [onResponse](AffindaAPIGetAllDataPointsOptionalParams.md#onresponse)
- [organization](AffindaAPIGetAllDataPointsOptionalParams.md#organization)
- [requestOptions](AffindaAPIGetAllDataPointsOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPIGetAllDataPointsOptionalParams.md#serializeroptions)
- [slug](AffindaAPIGetAllDataPointsOptionalParams.md#slug)
- [tracingOptions](AffindaAPIGetAllDataPointsOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### annotationContentType

• `Optional` **annotationContentType**: `string`

Filter by annotation content type, e.g. text, integer, float, date, etc.

___

### description

• `Optional` **description**: `string`

Filter by description.

___

### extractor

• `Optional` **extractor**: `string`

Filter by extractor.

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

### slug

• `Optional` **slug**: `string`

Filter by slug.

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions
