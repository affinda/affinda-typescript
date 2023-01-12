[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateOrganizationOptionalParams

# Interface: AffindaAPICreateOrganizationOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateOrganizationOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateOrganizationOptionalParams.md#abortsignal)
- [avatar](AffindaAPICreateOrganizationOptionalParams.md#avatar)
- [onResponse](AffindaAPICreateOrganizationOptionalParams.md#onresponse)
- [requestOptions](AffindaAPICreateOrganizationOptionalParams.md#requestoptions)
- [resthookSignatureKey](AffindaAPICreateOrganizationOptionalParams.md#resthooksignaturekey)
- [serializerOptions](AffindaAPICreateOrganizationOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPICreateOrganizationOptionalParams.md#tracingoptions)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### avatar

• `Optional` **avatar**: `RequestBodyType`

Upload avatar for the organization.

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

### resthookSignatureKey

• `Optional` **resthookSignatureKey**: `string`

Used to sign webhook payloads so you can verify their integrity.

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
