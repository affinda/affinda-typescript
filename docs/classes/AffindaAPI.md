[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPI

# Class: AffindaAPI

## Hierarchy

- [`AffindaAPIContext`](AffindaAPIContext.md)

  ↳ **`AffindaAPI`**

## Table of contents

### Constructors

- [constructor](AffindaAPI.md#constructor)

### Properties

- [pipeline](AffindaAPI.md#pipeline)
- [region](AffindaAPI.md#region)

### Methods

- [activateResthookSubscription](AffindaAPI.md#activateresthooksubscription)
- [createIndex](AffindaAPI.md#createindex)
- [createIndexDocument](AffindaAPI.md#createindexdocument)
- [createInvoice](AffindaAPI.md#createinvoice)
- [createJobDescription](AffindaAPI.md#createjobdescription)
- [createJobDescriptionSearch](AffindaAPI.md#createjobdescriptionsearch)
- [createJobDescriptionSearchEmbedUrl](AffindaAPI.md#createjobdescriptionsearchembedurl)
- [createRedactedResume](AffindaAPI.md#createredactedresume)
- [createResthookSubscription](AffindaAPI.md#createresthooksubscription)
- [createResume](AffindaAPI.md#createresume)
- [createResumeSearch](AffindaAPI.md#createresumesearch)
- [createResumeSearchEmbedUrl](AffindaAPI.md#createresumesearchembedurl)
- [deleteIndex](AffindaAPI.md#deleteindex)
- [deleteIndexDocument](AffindaAPI.md#deleteindexdocument)
- [deleteInvoice](AffindaAPI.md#deleteinvoice)
- [deleteJobDescription](AffindaAPI.md#deletejobdescription)
- [deleteRedactedResume](AffindaAPI.md#deleteredactedresume)
- [deleteResthookSubscription](AffindaAPI.md#deleteresthooksubscription)
- [deleteResume](AffindaAPI.md#deleteresume)
- [getAllIndexDocuments](AffindaAPI.md#getallindexdocuments)
- [getAllIndexes](AffindaAPI.md#getallindexes)
- [getAllInvoices](AffindaAPI.md#getallinvoices)
- [getAllJobDescriptions](AffindaAPI.md#getalljobdescriptions)
- [getAllRedactedResumes](AffindaAPI.md#getallredactedresumes)
- [getAllResthookSubscriptions](AffindaAPI.md#getallresthooksubscriptions)
- [getAllResumes](AffindaAPI.md#getallresumes)
- [getInvoice](AffindaAPI.md#getinvoice)
- [getJobDescription](AffindaAPI.md#getjobdescription)
- [getJobDescriptionSearchConfig](AffindaAPI.md#getjobdescriptionsearchconfig)
- [getJobDescriptionSearchDetail](AffindaAPI.md#getjobdescriptionsearchdetail)
- [getRedactedResume](AffindaAPI.md#getredactedresume)
- [getResthookSubscription](AffindaAPI.md#getresthooksubscription)
- [getResume](AffindaAPI.md#getresume)
- [getResumeSearchConfig](AffindaAPI.md#getresumesearchconfig)
- [getResumeSearchDetail](AffindaAPI.md#getresumesearchdetail)
- [getResumeSearchMatch](AffindaAPI.md#getresumesearchmatch)
- [getResumeSearchSuggestionJobTitle](AffindaAPI.md#getresumesearchsuggestionjobtitle)
- [getResumeSearchSuggestionSkill](AffindaAPI.md#getresumesearchsuggestionskill)
- [listOccupationGroups](AffindaAPI.md#listoccupationgroups)
- [sendOperationRequest](AffindaAPI.md#sendoperationrequest)
- [sendRequest](AffindaAPI.md#sendrequest)
- [updateJobDescriptionData](AffindaAPI.md#updatejobdescriptiondata)
- [updateJobDescriptionSearchConfig](AffindaAPI.md#updatejobdescriptionsearchconfig)
- [updateResthookSubscription](AffindaAPI.md#updateresthooksubscription)
- [updateResumeData](AffindaAPI.md#updateresumedata)
- [updateResumeSearchConfig](AffindaAPI.md#updateresumesearchconfig)

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

## Properties

### pipeline

• `Readonly` **pipeline**: `Pipeline`

The pipeline used by this client to make requests

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[pipeline](AffindaAPIContext.md#pipeline)

___

### region

• **region**: `string`

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[region](AffindaAPIContext.md#region)

## Methods

### activateResthookSubscription

▸ **activateResthookSubscription**(`xHookSecret`, `options?`): `Promise`<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

After creating a subscription, we'll send a POST request to your target URL with a `X-Hook-Secret`
header.
You should response to this with a 200 status code, and use the value of the `X-Hook-Secret` header
that you received to activate the subscription using this endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xHookSecret` | `string` | The secret received when creating a subscription. |
| `options?` | [`AffindaAPIActivateResthookSubscriptionOptionalParams`](../interfaces/AffindaAPIActivateResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

___

### createIndex

▸ **createIndex**(`options?`): `Promise`<[`Paths1Sikw07V2IndexPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths1Sikw07V2IndexPostResponses201ContentApplicationJsonSchema.md)\>

Create an index for the search tool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateIndexOptionalParams`](../interfaces/AffindaAPICreateIndexOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths1Sikw07V2IndexPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths1Sikw07V2IndexPostResponses201ContentApplicationJsonSchema.md)\>

___

### createIndexDocument

▸ **createIndexDocument**(`name`, `body`, `options?`): `Promise`<[`Paths14R8PdgV2IndexNameDocumentsPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths14R8PdgV2IndexNameDocumentsPostResponses201ContentApplicationJsonSchema.md)\>

Create an indexed document for the search tool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `body` | [`PathsYg099PV2IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema`](../interfaces/PathsYg099PV2IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema.md) | Document to index |
| `options?` | [`AffindaAPICreateIndexDocumentOptionalParams`](../interfaces/AffindaAPICreateIndexDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths14R8PdgV2IndexNameDocumentsPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths14R8PdgV2IndexNameDocumentsPostResponses201ContentApplicationJsonSchema.md)\>

___

### createInvoice

▸ **createInvoice**(`options?`): `Promise`<[`Invoice`](../interfaces/Invoice.md)\>

Uploads an invoice for parsing.
When successful, returns an `identifier` in the response for subsequent use with the
[/invoices/{identifier}](#get-/invoices/-identifier-) endpoint to check processing status and
retrieve results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateInvoiceOptionalParams`](../interfaces/AffindaAPICreateInvoiceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Invoice`](../interfaces/Invoice.md)\>

___

### createJobDescription

▸ **createJobDescription**(`options?`): `Promise`<[`JobDescription`](../interfaces/JobDescription.md)\>

Uploads a job description for parsing.
When successful, returns an `identifier` in the response for subsequent use with the
[/job_descriptions/{identifier}](#get-/job_descriptions/-identifier-) endpoint to check processing
status and retrieve results.
Job Descriptions can be uploaded as a file or a URL. In addition, data can be added directly if
users want to upload directly without parsing any resume file. For uploading resume data, the `data`
argument provided must be a JSON-encoded string. Data uploads will not impact upon parsing credits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateJobDescriptionOptionalParams`](../interfaces/AffindaAPICreateJobDescriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`JobDescription`](../interfaces/JobDescription.md)\>

___

### createJobDescriptionSearch

▸ **createJobDescriptionSearch**(`body`, `options?`): `Promise`<[`JobDescriptionSearch`](../interfaces/JobDescriptionSearch.md)\>

Searches through parsed job descriptions. You can search with custom criterias or a resume.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | ``null`` \| [`JobDescriptionSearchParameters`](../interfaces/JobDescriptionSearchParameters.md) | Search parameters |
| `options?` | [`AffindaAPICreateJobDescriptionSearchOptionalParams`](../interfaces/AffindaAPICreateJobDescriptionSearchOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`JobDescriptionSearch`](../interfaces/JobDescriptionSearch.md)\>

___

### createJobDescriptionSearchEmbedUrl

▸ **createJobDescriptionSearchEmbedUrl**(`options?`): `Promise`<[`JobDescriptionSearchEmbed`](../interfaces/JobDescriptionSearchEmbed.md)\>

Create and return a signed URL of the job description search tool which then can be embedded on a
web page. An optional parameter `config_override` can be passed to override the user-level
configurations of the embeddable search tool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateJobDescriptionSearchEmbedUrlOptionalParams`](../interfaces/AffindaAPICreateJobDescriptionSearchEmbedUrlOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`JobDescriptionSearchEmbed`](../interfaces/JobDescriptionSearchEmbed.md)\>

___

### createRedactedResume

▸ **createRedactedResume**(`options?`): `Promise`<[`RedactedResume`](../interfaces/RedactedResume.md)\>

Uploads a resume for redacting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateRedactedResumeOptionalParams`](../interfaces/AffindaAPICreateRedactedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RedactedResume`](../interfaces/RedactedResume.md)\>

___

### createResthookSubscription

▸ **createResthookSubscription**(`body`, `options?`): `Promise`<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

After a subscription is successfully created, we'll send a POST request to your target URL with a
`X-Hook-Secret` header. <br />
You need to response to this request with a 200 status code to confirm your subscribe intention. <br
/>
Then, you need to use the `X-Hook-Secret` to activate the subscription using the
[/resthook_subscriptions/activate](#post-/v3/resthook_subscriptions/activate) endpoint. <br />
For more information and detailed instructions, [see our webhooks documentation
here.](https://docs.affinda.com/docs/webhooks)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ResthookSubscriptionCreate`](../interfaces/ResthookSubscriptionCreate.md) |  |
| `options?` | [`AffindaAPICreateResthookSubscriptionOptionalParams`](../interfaces/AffindaAPICreateResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

___

### createResume

▸ **createResume**(`options?`): `Promise`<[`Resume`](../interfaces/Resume.md)\>

Uploads a resume for parsing. When successful, returns an `identifier` in the response for
subsequent use with the [/resumes/{identifier}](#get-/resumes/-identifier-) endpoint to check
processing status and retrieve results.<br/>
Resumes can be uploaded as a file or a URL. In addition, data can be added directly if users want to
upload directly without parsing any resume file. For uploading resume data, the `data` argument
provided must be a JSON-encoded string. Data uploads will not impact upon parsing credits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateResumeOptionalParams`](../interfaces/AffindaAPICreateResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Resume`](../interfaces/Resume.md)\>

___

### createResumeSearch

▸ **createResumeSearch**(`body`, `options?`): `Promise`<[`ResumeSearch`](../interfaces/ResumeSearch.md)\>

Searches through parsed resumes. Users have 3 options to create a search:<br /><br /> 1.	Match to a
job description - a parsed job description is used to find candidates that suit it<br /> 2.	Match to
a resume - a parsed resume is used to find other candidates that have similar attributes<br /> 3.
Search using custom criteria<br /><br /> Users should only populate 1 of jobDescription, resume or
the custom criteria.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ResumeSearchParameters`](../interfaces/ResumeSearchParameters.md) | Search parameters |
| `options?` | [`AffindaAPICreateResumeSearchOptionalParams`](../interfaces/AffindaAPICreateResumeSearchOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearch`](../interfaces/ResumeSearch.md)\>

___

### createResumeSearchEmbedUrl

▸ **createResumeSearchEmbedUrl**(`options?`): `Promise`<[`ResumeSearchEmbed`](../interfaces/ResumeSearchEmbed.md)\>

Create and return a signed URL of the resume search tool which then can be embedded on a web page.
An optional parameter `config_override` can be passed to override the user-level configurations of
the embeddable resume search tool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateResumeSearchEmbedUrlOptionalParams`](../interfaces/AffindaAPICreateResumeSearchEmbedUrlOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearchEmbed`](../interfaces/ResumeSearchEmbed.md)\>

___

### deleteIndex

▸ **deleteIndex**(`name`, `options?`): `Promise`<`void`\>

Deletes the specified index from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `options?` | [`AffindaAPIDeleteIndexOptionalParams`](../interfaces/AffindaAPIDeleteIndexOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteIndexDocument

▸ **deleteIndexDocument**(`name`, `identifier`, `options?`): `Promise`<`void`\>

Delete the specified indexed document from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteIndexDocumentOptionalParams`](../interfaces/AffindaAPIDeleteIndexDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteInvoice

▸ **deleteInvoice**(`identifier`, `options?`): `Promise`<`void`\>

Delete the specified invoice from the database. Note, any invoices deleted from the database will no
longer be used in any tailored customer models.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Invoice identifier |
| `options?` | [`AffindaAPIDeleteInvoiceOptionalParams`](../interfaces/AffindaAPIDeleteInvoiceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteJobDescription

▸ **deleteJobDescription**(`identifier`, `options?`): `Promise`<`void`\>

Deletes the specified job description from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteJobDescriptionOptionalParams`](../interfaces/AffindaAPIDeleteJobDescriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteRedactedResume

▸ **deleteRedactedResume**(`identifier`, `options?`): `Promise`<`void`\>

Deletes the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteRedactedResumeOptionalParams`](../interfaces/AffindaAPIDeleteRedactedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteResthookSubscription

▸ **deleteResthookSubscription**(`id`, `options?`): `Promise`<`void`\>

Deletes the specified resthook subscription from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ResthookSubscription's ID |
| `options?` | [`AffindaAPIDeleteResthookSubscriptionOptionalParams`](../interfaces/AffindaAPIDeleteResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteResume

▸ **deleteResume**(`identifier`, `options?`): `Promise`<`void`\>

Deletes the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Resume identifier |
| `options?` | [`AffindaAPIDeleteResumeOptionalParams`](../interfaces/AffindaAPIDeleteResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### getAllIndexDocuments

▸ **getAllIndexDocuments**(`name`, `options?`): `Promise`<[`PathsAf7Nd4V2IndexNameDocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsAf7Nd4V2IndexNameDocumentsGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the indexed documents for that index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `options?` | [`AffindaAPIGetAllIndexDocumentsOptionalParams`](../interfaces/AffindaAPIGetAllIndexDocumentsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsAf7Nd4V2IndexNameDocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsAf7Nd4V2IndexNameDocumentsGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllIndexes

▸ **getAllIndexes**(`options?`): `Promise`<[`Paths18Iqsr4V2IndexGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths18Iqsr4V2IndexGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the indexes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllIndexesOptionalParams`](../interfaces/AffindaAPIGetAllIndexesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths18Iqsr4V2IndexGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths18Iqsr4V2IndexGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllInvoices

▸ **getAllInvoices**(`options?`): `Promise`<[`PathsGfm23QV2InvoicesGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsgfm23qv2invoicesgetresponses200contentapplicationjsonschema)\>

Returns all the invoice summaries for that user, limited to 300 per page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllInvoicesOptionalParams`](../interfaces/AffindaAPIGetAllInvoicesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsGfm23QV2InvoicesGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsgfm23qv2invoicesgetresponses200contentapplicationjsonschema)\>

___

### getAllJobDescriptions

▸ **getAllJobDescriptions**(`options?`): `Promise`<[`PathsChbpqfV2JobDescriptionsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathschbpqfv2jobdescriptionsgetresponses200contentapplicationjsonschema)\>

Returns all the job descriptions for that user, limited to 300 per page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllJobDescriptionsOptionalParams`](../interfaces/AffindaAPIGetAllJobDescriptionsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsChbpqfV2JobDescriptionsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathschbpqfv2jobdescriptionsgetresponses200contentapplicationjsonschema)\>

___

### getAllRedactedResumes

▸ **getAllRedactedResumes**(`options?`): `Promise`<[`Paths1D957B5V2RedactedResumesGetResponses200ContentApplicationJsonSchema`](../modules.md#paths1d957b5v2redactedresumesgetresponses200contentapplicationjsonschema)\>

Returns all the redacted resume information for that resume

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllRedactedResumesOptionalParams`](../interfaces/AffindaAPIGetAllRedactedResumesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths1D957B5V2RedactedResumesGetResponses200ContentApplicationJsonSchema`](../modules.md#paths1d957b5v2redactedresumesgetresponses200contentapplicationjsonschema)\>

___

### getAllResthookSubscriptions

▸ **getAllResthookSubscriptions**(`options?`): `Promise`<[`PathsMda0LlV2ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsmda0llv2resthooksubscriptionsgetresponses200contentapplicationjsonschema)\>

Returns your resthook subscriptions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllResthookSubscriptionsOptionalParams`](../interfaces/AffindaAPIGetAllResthookSubscriptionsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsMda0LlV2ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsmda0llv2resthooksubscriptionsgetresponses200contentapplicationjsonschema)\>

___

### getAllResumes

▸ **getAllResumes**(`options?`): `Promise`<[`Paths14VxierV2ResumesGetResponses200ContentApplicationJsonSchema`](../modules.md#paths14vxierv2resumesgetresponses200contentapplicationjsonschema)\>

Returns all the resume summaries for that user, limited to 300 per page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllResumesOptionalParams`](../interfaces/AffindaAPIGetAllResumesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths14VxierV2ResumesGetResponses200ContentApplicationJsonSchema`](../modules.md#paths14vxierv2resumesgetresponses200contentapplicationjsonschema)\>

___

### getInvoice

▸ **getInvoice**(`identifier`, `options?`): `Promise`<[`Invoice`](../interfaces/Invoice.md)\>

Returns all the parse results for that invoice if processing is completed.
The `identifier` is the unique ID returned after POST-ing the invoice via the
[/invoices](#post-/invoices) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIGetInvoiceOptionalParams`](../interfaces/AffindaAPIGetInvoiceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Invoice`](../interfaces/Invoice.md)\>

___

### getJobDescription

▸ **getJobDescription**(`identifier`, `options?`): `Promise`<[`JobDescription`](../interfaces/JobDescription.md)\>

Returns all the results for that job description if processing is completed.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/job_descriptions](#post-/job_descriptions) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIGetJobDescriptionOptionalParams`](../interfaces/AffindaAPIGetJobDescriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`JobDescription`](../interfaces/JobDescription.md)\>

___

### getJobDescriptionSearchConfig

▸ **getJobDescriptionSearchConfig**(`options?`): `Promise`<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

Return configurations such as which fields can be displayed in the logged in user's embeddable job
description search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetJobDescriptionSearchConfigOptionalParams`](../interfaces/AffindaAPIGetJobDescriptionSearchConfigOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

___

### getJobDescriptionSearchDetail

▸ **getJobDescriptionSearchDetail**(`identifier`, `body`, `options?`): `Promise`<[`JobDescriptionSearchDetail`](../interfaces/JobDescriptionSearchDetail.md)\>

This contains more detailed information about the matching score of the search criteria, or which
search criteria is missing in this job description.
The `identifier` is the unique ID returned via the
[/job_description_search](#post-/job_description_search) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Job Description identifier |
| `body` | ``null`` \| [`JobDescriptionSearchParameters`](../interfaces/JobDescriptionSearchParameters.md) | Search parameters |
| `options?` | [`AffindaAPIGetJobDescriptionSearchDetailOptionalParams`](../interfaces/AffindaAPIGetJobDescriptionSearchDetailOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`JobDescriptionSearchDetail`](../interfaces/JobDescriptionSearchDetail.md)\>

___

### getRedactedResume

▸ **getRedactedResume**(`identifier`, `options?`): `Promise`<[`RedactedResume`](../interfaces/RedactedResume.md)\>

Returns all the redaction results for that resume if processing is completed.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/redacted_resumes](#post-/redacted_resumes) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIGetRedactedResumeOptionalParams`](../interfaces/AffindaAPIGetRedactedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RedactedResume`](../interfaces/RedactedResume.md)\>

___

### getResthookSubscription

▸ **getResthookSubscription**(`id`, `options?`): `Promise`<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

Return a specific resthook subscription.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Resthook subscription's ID |
| `options?` | [`AffindaAPIGetResthookSubscriptionOptionalParams`](../interfaces/AffindaAPIGetResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

___

### getResume

▸ **getResume**(`identifier`, `options?`): `Promise`<[`Resume`](../interfaces/Resume.md)\>

Returns all the parse results for that resume if processing is completed.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/resumes](#post-/resumes) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`AffindaAPIGetResumeOptionalParams`](../interfaces/AffindaAPIGetResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Resume`](../interfaces/Resume.md)\>

___

### getResumeSearchConfig

▸ **getResumeSearchConfig**(`options?`): `Promise`<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

Return configurations such as which fields can be displayed in the logged in user's embeddable
resume search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetResumeSearchConfigOptionalParams`](../interfaces/AffindaAPIGetResumeSearchConfigOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

___

### getResumeSearchDetail

▸ **getResumeSearchDetail**(`identifier`, `body`, `options?`): `Promise`<[`ResumeSearchDetail`](../interfaces/ResumeSearchDetail.md)\>

This contains more detailed information about the matching score of the search criteria, or which
search criteria is missing in this resume.
The `identifier` is the unique ID returned via the [/resume_search](#post-/resume_search) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Resume identifier |
| `body` | [`ResumeSearchParameters`](../interfaces/ResumeSearchParameters.md) | Search parameters |
| `options?` | [`AffindaAPIGetResumeSearchDetailOptionalParams`](../interfaces/AffindaAPIGetResumeSearchDetailOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearchDetail`](../interfaces/ResumeSearchDetail.md)\>

___

### getResumeSearchMatch

▸ **getResumeSearchMatch**(`resume`, `jobDescription`, `options?`): `Promise`<[`ResumeSearchMatch`](../interfaces/ResumeSearchMatch.md)\>

Get the matching score between a resume and a job description. The score ranges between 0 and 1,
with 0 being not a match at all, and 1 being perfect match.<br/> Note, this score will not directly
match the score returned from POST
[/resume_search/details/{identifier}](#post-/resume_search/details/-identifier-).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resume` | `string` | Identify the resume to match. |
| `jobDescription` | `string` | Identify the job description to match. |
| `options?` | [`AffindaAPIGetResumeSearchMatchOptionalParams`](../interfaces/AffindaAPIGetResumeSearchMatchOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearchMatch`](../interfaces/ResumeSearchMatch.md)\>

___

### getResumeSearchSuggestionJobTitle

▸ **getResumeSearchSuggestionJobTitle**(`jobTitles`, `options?`): `Promise`<[`AffindaAPIGetResumeSearchSuggestionJobTitleResponse`](../modules.md#affindaapigetresumesearchsuggestionjobtitleresponse)\>

Provided one or more job titles, get related suggestions for your search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jobTitles` | `string`[] | Job title to query suggestions for |
| `options?` | [`AffindaAPIGetResumeSearchSuggestionJobTitleOptionalParams`](../interfaces/AffindaAPIGetResumeSearchSuggestionJobTitleOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`AffindaAPIGetResumeSearchSuggestionJobTitleResponse`](../modules.md#affindaapigetresumesearchsuggestionjobtitleresponse)\>

___

### getResumeSearchSuggestionSkill

▸ **getResumeSearchSuggestionSkill**(`skills`, `options?`): `Promise`<[`AffindaAPIGetResumeSearchSuggestionSkillResponse`](../modules.md#affindaapigetresumesearchsuggestionskillresponse)\>

Provided one or more skills, get related suggestions for your search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skills` | `string`[] | Skill to query suggestions for |
| `options?` | [`AffindaAPIGetResumeSearchSuggestionSkillOptionalParams`](../interfaces/AffindaAPIGetResumeSearchSuggestionSkillOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`AffindaAPIGetResumeSearchSuggestionSkillResponse`](../modules.md#affindaapigetresumesearchsuggestionskillresponse)\>

___

### listOccupationGroups

▸ **listOccupationGroups**(`options?`): `Promise`<[`AffindaAPIListOccupationGroupsResponse`](../modules.md#affindaapilistoccupationgroupsresponse)\>

Returns the list of searchable occupation groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIListOccupationGroupsOptionalParams`](../interfaces/AffindaAPIListOccupationGroupsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`AffindaAPIListOccupationGroupsResponse`](../modules.md#affindaapilistoccupationgroupsresponse)\>

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

___

### updateJobDescriptionData

▸ **updateJobDescriptionData**(`identifier`, `body`, `options?`): `Promise`<[`JobDescriptionData`](../interfaces/JobDescriptionData.md)\>

Update data of a job description.
The `identifier` is the unique ID returned after POST-ing the job description via the
[/job_descriptions](#post-/job_descriptions) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Job description identifier |
| `body` | ``null`` \| [`JobDescriptionDataUpdate`](../interfaces/JobDescriptionDataUpdate.md) | Job description data to update |
| `options?` | [`AffindaAPIUpdateJobDescriptionDataOptionalParams`](../interfaces/AffindaAPIUpdateJobDescriptionDataOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`JobDescriptionData`](../interfaces/JobDescriptionData.md)\>

___

### updateJobDescriptionSearchConfig

▸ **updateJobDescriptionSearchConfig**(`body`, `options?`): `Promise`<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

Update configurations such as which fields can be displayed in the logged in user's embeddable job
description search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md) |  |
| `options?` | [`AffindaAPIUpdateJobDescriptionSearchConfigOptionalParams`](../interfaces/AffindaAPIUpdateJobDescriptionSearchConfigOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

___

### updateResthookSubscription

▸ **updateResthookSubscription**(`id`, `body`, `options?`): `Promise`<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

Update data of a resthook subscription.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ResthookSubscription's ID |
| `body` | [`ResthookSubscriptionUpdate`](../interfaces/ResthookSubscriptionUpdate.md) | ResthookSubscription data to update |
| `options?` | [`AffindaAPIUpdateResthookSubscriptionOptionalParams`](../interfaces/AffindaAPIUpdateResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

___

### updateResumeData

▸ **updateResumeData**(`identifier`, `body`, `options?`): `Promise`<[`ResumeData`](../interfaces/ResumeData.md)\>

Update data of a parsed resume.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/resumes](#post-/resumes) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Resume identifier |
| `body` | ``null`` \| [`ResumeData`](../interfaces/ResumeData.md) | Resume data to update |
| `options?` | [`AffindaAPIUpdateResumeDataOptionalParams`](../interfaces/AffindaAPIUpdateResumeDataOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeData`](../interfaces/ResumeData.md)\>

___

### updateResumeSearchConfig

▸ **updateResumeSearchConfig**(`body`, `options?`): `Promise`<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

Update configurations such as which fields can be displayed in the logged in user's embeddable
resume search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md) |  |
| `options?` | [`AffindaAPIUpdateResumeSearchConfigOptionalParams`](../interfaces/AffindaAPIUpdateResumeSearchConfigOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>
