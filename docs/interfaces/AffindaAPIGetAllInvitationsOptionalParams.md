[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIGetAllInvitationsOptionalParams

# Interface: AffindaAPIGetAllInvitationsOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIGetAllInvitationsOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIGetAllInvitationsOptionalParams.md#abortsignal)
- [limit](AffindaAPIGetAllInvitationsOptionalParams.md#limit)
- [offset](AffindaAPIGetAllInvitationsOptionalParams.md#offset)
- [onResponse](AffindaAPIGetAllInvitationsOptionalParams.md#onresponse)
- [organization](AffindaAPIGetAllInvitationsOptionalParams.md#organization)
- [requestOptions](AffindaAPIGetAllInvitationsOptionalParams.md#requestoptions)
- [role](AffindaAPIGetAllInvitationsOptionalParams.md#role)
- [serializerOptions](AffindaAPIGetAllInvitationsOptionalParams.md#serializeroptions)
- [status](AffindaAPIGetAllInvitationsOptionalParams.md#status)
- [tracingOptions](AffindaAPIGetAllInvitationsOptionalParams.md#tracingoptions)

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

### status

• `Optional` **status**: `string`

Filter by status.

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions
