[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIGetAllOrganizationMembershipsOptionalParams

# Interface: AffindaAPIGetAllOrganizationMembershipsOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIGetAllOrganizationMembershipsOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIGetAllOrganizationMembershipsOptionalParams.md#abortsignal)
- [limit](AffindaAPIGetAllOrganizationMembershipsOptionalParams.md#limit)
- [offset](AffindaAPIGetAllOrganizationMembershipsOptionalParams.md#offset)
- [onResponse](AffindaAPIGetAllOrganizationMembershipsOptionalParams.md#onresponse)
- [organization](AffindaAPIGetAllOrganizationMembershipsOptionalParams.md#organization)
- [requestOptions](AffindaAPIGetAllOrganizationMembershipsOptionalParams.md#requestoptions)
- [role](AffindaAPIGetAllOrganizationMembershipsOptionalParams.md#role)
- [serializerOptions](AffindaAPIGetAllOrganizationMembershipsOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPIGetAllOrganizationMembershipsOptionalParams.md#tracingoptions)

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

### role

• `Optional` **role**: `string`

Filter by role.

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
