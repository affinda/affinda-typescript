[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPI

# Class: AffindaAPI

## Hierarchy

- [`AffindaAPIContext`](AffindaAPIContext.md)

  ↳ **`AffindaAPI`**

## Table of contents

### Constructors

- [constructor](AffindaAPI.md#constructor)

### Properties

- [$host](AffindaAPI.md#$host)
- [limit](AffindaAPI.md#limit)
- [offset](AffindaAPI.md#offset)
- [pipeline](AffindaAPI.md#pipeline)

### Methods

- [createRedactedResume](AffindaAPI.md#createredactedresume)
- [createReformattedResume](AffindaAPI.md#createreformattedresume)
- [createResume](AffindaAPI.md#createresume)
- [deleteRedactedResume](AffindaAPI.md#deleteredactedresume)
- [deleteReformattedResume](AffindaAPI.md#deletereformattedresume)
- [deleteResume](AffindaAPI.md#deleteresume)
- [getAllRedactedResumes](AffindaAPI.md#getallredactedresumes)
- [getAllReformattedResumes](AffindaAPI.md#getallreformattedresumes)
- [getAllResumeFormats](AffindaAPI.md#getallresumeformats)
- [getAllResumes](AffindaAPI.md#getallresumes)
- [getRedactedResume](AffindaAPI.md#getredactedresume)
- [getReformattedResume](AffindaAPI.md#getreformattedresume)
- [getResume](AffindaAPI.md#getresume)
- [sendOperationRequest](AffindaAPI.md#sendoperationrequest)
- [sendRequest](AffindaAPI.md#sendrequest)

## Constructors

### constructor

• **new AffindaAPI**(`credentials`, `options?`)

Initializes a new instance of the AffindaAPI class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials` | `TokenCredential` | Subscription credentials which uniquely identify client subscription. |
| `options?` | [`AffindaAPIOptionalParams`](../interfaces/AffindaAPIOptionalParams.md) | The parameter options |

#### Overrides

[AffindaAPIContext](AffindaAPIContext.md).[constructor](AffindaAPIContext.md#constructor)

#### Defined in

[src/affindaAPI.ts:42](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L42)

## Properties

### $host

• **$host**: `string`

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[$host](AffindaAPIContext.md#$host)

#### Defined in

[src/affindaAPIContext.ts:6](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPIContext.ts#L6)

___

### limit

• `Optional` **limit**: `number`

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[limit](AffindaAPIContext.md#limit)

#### Defined in

[src/affindaAPIContext.ts:7](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPIContext.ts#L7)

___

### offset

• `Optional` **offset**: `number`

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[offset](AffindaAPIContext.md#offset)

#### Defined in

[src/affindaAPIContext.ts:8](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPIContext.ts#L8)

___

### pipeline

• `Readonly` **pipeline**: `Pipeline`

The pipeline used by this client to make requests

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[pipeline](AffindaAPIContext.md#pipeline)

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:609

## Methods

### createRedactedResume

▸ **createRedactedResume**(`options?`): `Promise`<[`RedactedResume`](../interfaces/RedactedResume.md)\>

Uploads a resume for redacting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateRedactedResumeOptionalParams`](../interfaces/AffindaAPICreateRedactedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RedactedResume`](../interfaces/RedactedResume.md)\>

#### Defined in

[src/affindaAPI.ts:121](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L121)

___

### createReformattedResume

▸ **createReformattedResume**(`resumeFormat`, `options?`): `Promise`<[`ReformattedResume`](../interfaces/ReformattedResume.md)\>

Uploads a resume for reformatting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resumeFormat` | `string` | Identifier of the format used |
| `options?` | [`AffindaAPICreateReformattedResumeOptionalParams`](../interfaces/AffindaAPICreateReformattedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ReformattedResume`](../interfaces/ReformattedResume.md)\>

#### Defined in

[src/affindaAPI.ts:193](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L193)

___

### createResume

▸ **createResume**(`options?`): `Promise`<[`Resume`](../interfaces/Resume.md)\>

Uploads a resume for parsing.
When successful, returns an `identifier` in the response for subsequent use with the
[/resumes/{identifier}](#operation/getResume) endpoint to check processing status and retrieve
results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateResumeOptionalParams`](../interfaces/AffindaAPICreateResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Resume`](../interfaces/Resume.md)\>

#### Defined in

[src/affindaAPI.ts:66](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L66)

___

### deleteRedactedResume

▸ **deleteRedactedResume**(`identifier`, `options?`): `Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

Deletes the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteRedactedResumeOptionalParams`](../interfaces/AffindaAPIDeleteRedactedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

#### Defined in

[src/affindaAPI.ts:152](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L152)

___

### deleteReformattedResume

▸ **deleteReformattedResume**(`identifier`, `options?`): `Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

Deletes the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteReformattedResumeOptionalParams`](../interfaces/AffindaAPIDeleteReformattedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

#### Defined in

[src/affindaAPI.ts:225](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L225)

___

### deleteResume

▸ **deleteResume**(`identifier`, `options?`): `Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

Deletes the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Resume identifier |
| `options?` | [`AffindaAPIDeleteResumeOptionalParams`](../interfaces/AffindaAPIDeleteResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

#### Defined in

[src/affindaAPI.ts:94](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L94)

___

### getAllRedactedResumes

▸ **getAllRedactedResumes**(`options?`): `Promise`<[`GetAllDocumentsResults`](../interfaces/GetAllDocumentsResults.md)\>

Returns all the redacted resume information for that resume

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllRedactedResumesOptionalParams`](../interfaces/AffindaAPIGetAllRedactedResumesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`GetAllDocumentsResults`](../interfaces/GetAllDocumentsResults.md)\>

#### Defined in

[src/affindaAPI.ts:108](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L108)

___

### getAllReformattedResumes

▸ **getAllReformattedResumes**(`options?`): `Promise`<[`GetAllDocumentsResults`](../interfaces/GetAllDocumentsResults.md)\>

Returns all the reformatted resume information for that resume

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllReformattedResumesOptionalParams`](../interfaces/AffindaAPIGetAllReformattedResumesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`GetAllDocumentsResults`](../interfaces/GetAllDocumentsResults.md)\>

#### Defined in

[src/affindaAPI.ts:179](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L179)

___

### getAllResumeFormats

▸ **getAllResumeFormats**(`options?`): `Promise`<[`Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the resume formats

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllResumeFormatsOptionalParams`](../interfaces/AffindaAPIGetAllResumeFormatsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema.md)\>

#### Defined in

[src/affindaAPI.ts:166](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L166)

___

### getAllResumes

▸ **getAllResumes**(`options?`): `Promise`<[`GetAllDocumentsResults`](../interfaces/GetAllDocumentsResults.md)\>

Returns all the resume summaries for that user, limited to 300 per page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllResumesOptionalParams`](../interfaces/AffindaAPIGetAllResumesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`GetAllDocumentsResults`](../interfaces/GetAllDocumentsResults.md)\>

#### Defined in

[src/affindaAPI.ts:53](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L53)

___

### getRedactedResume

▸ **getRedactedResume**(`identifier`, `options?`): `Promise`<[`RedactedResume`](../interfaces/RedactedResume.md)\>

Returns all the redaction results for that resume if processing is completed.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/redacted_resumes](#operation/createRedactedResume) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIGetRedactedResumeOptionalParams`](../interfaces/AffindaAPIGetRedactedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RedactedResume`](../interfaces/RedactedResume.md)\>

#### Defined in

[src/affindaAPI.ts:137](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L137)

___

### getReformattedResume

▸ **getReformattedResume**(`identifier`, `options?`): `Promise`<[`ReformattedResume`](../interfaces/ReformattedResume.md)\>

Returns all the reformatting results for that resume if processing is completed.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/reformatted_resumes](#operation/createReformattedResume) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIGetReformattedResumeOptionalParams`](../interfaces/AffindaAPIGetReformattedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ReformattedResume`](../interfaces/ReformattedResume.md)\>

#### Defined in

[src/affindaAPI.ts:210](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L210)

___

### getResume

▸ **getResume**(`identifier`, `options?`): `Promise`<[`Resume`](../interfaces/Resume.md)\>

Returns all the parse results for that resume if processing is completed.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/resumes](#operation/createResume) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIGetResumeOptionalParams`](../interfaces/AffindaAPIGetResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Resume`](../interfaces/Resume.md)\>

#### Defined in

[src/affindaAPI.ts:79](https://github.com/affinda/affinda-typescript/blob/30e5a05/src/affindaAPI.ts#L79)

___

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

[AffindaAPIContext](AffindaAPIContext.md).[sendOperationRequest](AffindaAPIContext.md#sendoperationrequest)

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:626

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

[AffindaAPIContext](AffindaAPIContext.md).[sendRequest](AffindaAPIContext.md#sendrequest)

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:619
