[affinda](../README.md) / [Exports](../modules.md) / AffindaAPI

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

src/affindaAPI.ts:42

## Properties

### $host

• **$host**: `string`

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[$host](AffindaAPIContext.md#$host)

#### Defined in

src/affindaAPIContext.ts:6

___

### limit

• `Optional` **limit**: `number`

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[limit](AffindaAPIContext.md#limit)

#### Defined in

src/affindaAPIContext.ts:7

___

### offset

• `Optional` **offset**: `number`

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[offset](AffindaAPIContext.md#offset)

#### Defined in

src/affindaAPIContext.ts:8

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

▸ **createRedactedResume**(`options?`): `Promise`<[`Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema.md)\>

Uploads a resume for redacting.
When successful, returns an `identifier` in the response for subsequent use with the
[/redacted_resumes/{identifier}](#operation/getRedactedResume) endpoint to check processing status
and retrieve results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateRedactedResumeOptionalParams`](../interfaces/AffindaAPICreateRedactedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema.md)\>

#### Defined in

src/affindaAPI.ts:124

___

### createReformattedResume

▸ **createReformattedResume**(`resumeFormat`, `options?`): `Promise`<[`Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema.md)\>

Uploads a resume for reformatting.
When successful, returns an `identifier` in the response for subsequent use with the
[/reformatted_resumes/{identifier}](#operation/getReformattedResume) endpoint to check processing
status and retrieve results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resumeFormat` | `string` | Identifier of the format used |
| `options?` | [`AffindaAPICreateReformattedResumeOptionalParams`](../interfaces/AffindaAPICreateReformattedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema.md)\>

#### Defined in

src/affindaAPI.ts:199

___

### createResume

▸ **createResume**(`options?`): `Promise`<[`PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema`](../interfaces/PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema.md)\>

Uploads a resume for parsing.
When successful, returns an `identifier` in the response for subsequent use with the
[/resumes/{identifier}](#operation/getResume) endpoint to check processing status and retrieve
results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateResumeOptionalParams`](../interfaces/AffindaAPICreateResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema`](../interfaces/PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema.md)\>

#### Defined in

src/affindaAPI.ts:66

___

### deleteRedactedResume

▸ **deleteRedactedResume**(`identifier`, `options?`): `Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

Deletes the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteRedactedResumeOptionalParams`](../interfaces/AffindaAPIDeleteRedactedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

#### Defined in

src/affindaAPI.ts:155

___

### deleteReformattedResume

▸ **deleteReformattedResume**(`identifier`, `options?`): `Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

Deletes the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteReformattedResumeOptionalParams`](../interfaces/AffindaAPIDeleteReformattedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

#### Defined in

src/affindaAPI.ts:231

___

### deleteResume

▸ **deleteResume**(`identifier`, `options?`): `Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

Deletes the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Resume identifier |
| `options?` | [`AffindaAPIDeleteResumeOptionalParams`](../interfaces/AffindaAPIDeleteResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema`](../interfaces/ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema.md)\>

#### Defined in

src/affindaAPI.ts:94

___

### getAllRedactedResumes

▸ **getAllRedactedResumes**(`options?`): `Promise`<[`Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the redacted resume information for that resume

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllRedactedResumesOptionalParams`](../interfaces/AffindaAPIGetAllRedactedResumesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema.md)\>

#### Defined in

src/affindaAPI.ts:108

___

### getAllReformattedResumes

▸ **getAllReformattedResumes**(`options?`): `Promise`<[`Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the reformatted resume information for that resume

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllReformattedResumesOptionalParams`](../interfaces/AffindaAPIGetAllReformattedResumesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema.md)\>

#### Defined in

src/affindaAPI.ts:182

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

src/affindaAPI.ts:169

___

### getAllResumes

▸ **getAllResumes**(`options?`): `Promise`<[`Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the resume summaries for that user, limited to 300 per page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllResumesOptionalParams`](../interfaces/AffindaAPIGetAllResumesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema.md)\>

#### Defined in

src/affindaAPI.ts:53

___

### getRedactedResume

▸ **getRedactedResume**(`identifier`, `options?`): `Promise`<[`RedactedDocument`](../interfaces/RedactedDocument.md)\>

Returns all the redaction results for that resume if processing is completed.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/redacted_resumes](#operation/createRedactedResume) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIGetRedactedResumeOptionalParams`](../interfaces/AffindaAPIGetRedactedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RedactedDocument`](../interfaces/RedactedDocument.md)\>

#### Defined in

src/affindaAPI.ts:140

___

### getReformattedResume

▸ **getReformattedResume**(`identifier`, `options?`): `Promise`<[`ReformattedDocument`](../interfaces/ReformattedDocument.md)\>

Returns all the reformatting results for that resume if processing is completed.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/reformatted_resumes](#operation/createReformattedResume) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIGetReformattedResumeOptionalParams`](../interfaces/AffindaAPIGetReformattedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ReformattedDocument`](../interfaces/ReformattedDocument.md)\>

#### Defined in

src/affindaAPI.ts:216

___

### getResume

▸ **getResume**(`identifier`, `options?`): `Promise`<[`Resume`](../interfaces/Resume.md)\>

Returns all the parse results for that resume if processing is completed.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/resumes](#operation/createResume) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIGetResumeOptionalParams`](../interfaces/AffindaAPIGetResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Resume`](../interfaces/Resume.md)\>

#### Defined in

src/affindaAPI.ts:79

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
