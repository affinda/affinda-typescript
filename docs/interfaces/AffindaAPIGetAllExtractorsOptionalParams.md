[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIGetAllExtractorsOptionalParams

# Interface: AffindaAPIGetAllExtractorsOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIGetAllExtractorsOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIGetAllExtractorsOptionalParams.md#abortsignal)
- [includePublicExtractors](AffindaAPIGetAllExtractorsOptionalParams.md#includepublicextractors)
- [name](AffindaAPIGetAllExtractorsOptionalParams.md#name)
- [onResponse](AffindaAPIGetAllExtractorsOptionalParams.md#onresponse)
- [requestOptions](AffindaAPIGetAllExtractorsOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPIGetAllExtractorsOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPIGetAllExtractorsOptionalParams.md#tracingoptions)
- [validatable](AffindaAPIGetAllExtractorsOptionalParams.md#validatable)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### includePublicExtractors

• `Optional` **includePublicExtractors**: `boolean`

Whether to include Affinda's off-the-shelf extractors.

___

### name

• `Optional` **name**: `string`

Filter by name.

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

### validatable

• `Optional` **validatable**: `boolean`

Filter by validatable.
