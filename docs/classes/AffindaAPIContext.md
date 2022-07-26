[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIContext

# Class: AffindaAPIContext

## Hierarchy

- `ServiceClient`

  ↳ **`AffindaAPIContext`**

  ↳↳ [`AffindaAPI`](AffindaAPI.md)

## Table of contents

### Constructors

- [constructor](AffindaAPIContext.md#constructor)

### Properties

- [$host](AffindaAPIContext.md#$host)
- [pipeline](AffindaAPIContext.md#pipeline)

### Methods

- [sendOperationRequest](AffindaAPIContext.md#sendoperationrequest)
- [sendRequest](AffindaAPIContext.md#sendrequest)

## Constructors

### constructor

• **new AffindaAPIContext**(`credentials`, `options?`)

Initializes a new instance of the AffindaAPIContext class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials` | `TokenCredential` | Subscription credentials which uniquely identify client subscription. |
| `options?` | [`AffindaAPIOptionalParams`](../interfaces/AffindaAPIOptionalParams.md) | The parameter options |

#### Overrides

coreClient.ServiceClient.constructor

## Properties

### $host

• **$host**: `string`

___

### pipeline

• `Readonly` **pipeline**: `Pipeline`

The pipeline used by this client to make requests

#### Inherited from

coreClient.ServiceClient.pipeline

## Methods

### sendOperationRequest

▸ **sendOperationRequest**<`T`\>(`operationArguments`, `operationSpec`): `Promise`<`T`\>

Send an HTTP request that is populated using the provided OperationSpec.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The typed result of the request, based on the OperationSpec. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operationArguments` | `OperationArguments` | The arguments that the HTTP request's templated values will be populated from. |
| `operationSpec` | `OperationSpec` | The OperationSpec to use to populate the httpRequest. |

#### Returns

`Promise`<`T`\>

#### Inherited from

coreClient.ServiceClient.sendOperationRequest

___

### sendRequest

▸ **sendRequest**(`request`): `Promise`<`PipelineResponse`\>

Send the provided httpRequest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `PipelineRequest` |

#### Returns

`Promise`<`PipelineResponse`\>

#### Inherited from

coreClient.ServiceClient.sendRequest
