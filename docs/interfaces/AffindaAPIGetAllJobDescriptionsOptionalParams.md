[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIGetAllJobDescriptionsOptionalParams

# Interface: AffindaAPIGetAllJobDescriptionsOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIGetAllJobDescriptionsOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIGetAllJobDescriptionsOptionalParams.md#abortsignal)
- [customIdentifier](AffindaAPIGetAllJobDescriptionsOptionalParams.md#customidentifier)
- [limit](AffindaAPIGetAllJobDescriptionsOptionalParams.md#limit)
- [offset](AffindaAPIGetAllJobDescriptionsOptionalParams.md#offset)
- [onResponse](AffindaAPIGetAllJobDescriptionsOptionalParams.md#onresponse)
- [requestOptions](AffindaAPIGetAllJobDescriptionsOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPIGetAllJobDescriptionsOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPIGetAllJobDescriptionsOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### customIdentifier

• `Optional` **customIdentifier**: `string`

Filter for documents with this custom identifier.

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
