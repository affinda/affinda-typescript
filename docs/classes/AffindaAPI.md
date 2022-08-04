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
- [pipeline](AffindaAPI.md#pipeline)

### Methods

- [createIndex](AffindaAPI.md#createindex)
- [createIndexDocument](AffindaAPI.md#createindexdocument)
- [createInvoice](AffindaAPI.md#createinvoice)
- [createJobDescription](AffindaAPI.md#createjobdescription)
- [createRedactedResume](AffindaAPI.md#createredactedresume)
- [createReformattedResume](AffindaAPI.md#createreformattedresume)
- [createResume](AffindaAPI.md#createresume)
- [createResumeSearch](AffindaAPI.md#createresumesearch)
- [createResumeSearchEmbedUrl](AffindaAPI.md#createresumesearchembedurl)
- [createUser](AffindaAPI.md#createuser)
- [deleteIndex](AffindaAPI.md#deleteindex)
- [deleteIndexDocument](AffindaAPI.md#deleteindexdocument)
- [deleteInvoice](AffindaAPI.md#deleteinvoice)
- [deleteJobDescription](AffindaAPI.md#deletejobdescription)
- [deleteRedactedResume](AffindaAPI.md#deleteredactedresume)
- [deleteReformattedResume](AffindaAPI.md#deletereformattedresume)
- [deleteResume](AffindaAPI.md#deleteresume)
- [getAllIndexDocuments](AffindaAPI.md#getallindexdocuments)
- [getAllIndexes](AffindaAPI.md#getallindexes)
- [getAllInvoices](AffindaAPI.md#getallinvoices)
- [getAllJobDescriptions](AffindaAPI.md#getalljobdescriptions)
- [getAllRedactedResumes](AffindaAPI.md#getallredactedresumes)
- [getAllReformattedResumes](AffindaAPI.md#getallreformattedresumes)
- [getAllResumeFormats](AffindaAPI.md#getallresumeformats)
- [getAllResumes](AffindaAPI.md#getallresumes)
- [getAllUsers](AffindaAPI.md#getallusers)
- [getInvoice](AffindaAPI.md#getinvoice)
- [getJobDescription](AffindaAPI.md#getjobdescription)
- [getRedactedResume](AffindaAPI.md#getredactedresume)
- [getReformattedResume](AffindaAPI.md#getreformattedresume)
- [getResume](AffindaAPI.md#getresume)
- [getResumeSearchConfig](AffindaAPI.md#getresumesearchconfig)
- [getResumeSearchDetail](AffindaAPI.md#getresumesearchdetail)
- [getResumeSearchMatch](AffindaAPI.md#getresumesearchmatch)
- [listOccupationGroups](AffindaAPI.md#listoccupationgroups)
- [sendOperationRequest](AffindaAPI.md#sendoperationrequest)
- [sendRequest](AffindaAPI.md#sendrequest)
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

### $host

• **$host**: `string`

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[$host](AffindaAPIContext.md#$host)

___

### pipeline

• `Readonly` **pipeline**: `Pipeline`

The pipeline used by this client to make requests

#### Inherited from

[AffindaAPIContext](AffindaAPIContext.md).[pipeline](AffindaAPIContext.md#pipeline)

## Methods

### createIndex

▸ **createIndex**(`options?`): `Promise`<[`Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema.md)\>

Create an index for the search tool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateIndexOptionalParams`](../interfaces/AffindaAPICreateIndexOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema.md)\>

___

### createIndexDocument

▸ **createIndexDocument**(`name`, `body`, `options?`): `Promise`<[`PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema`](../interfaces/PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema.md)\>

Create an indexed document for the search tool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `body` | [`PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema`](../interfaces/PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema.md) | Document to index |
| `options?` | [`AffindaAPICreateIndexDocumentOptionalParams`](../interfaces/AffindaAPICreateIndexDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema`](../interfaces/PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema.md)\>

___

### createInvoice

▸ **createInvoice**(`options?`): `Promise`<[`Invoice`](../interfaces/Invoice.md)\>

Uploads an invoice for parsing.
When successful, returns an `identifier` in the response for subsequent use with the
[/invoices/{identifier}](#operation/getInvoice) endpoint to check processing status and retrieve
results.

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
[/job_descriptions/{identifier}](#operation/getResume) endpoint to check processing status and
retrieve results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateJobDescriptionOptionalParams`](../interfaces/AffindaAPICreateJobDescriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`JobDescription`](../interfaces/JobDescription.md)\>

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

### createReformattedResume

▸ **createReformattedResume**(`resumeFormat`, `options?`): `Promise`<[`ReformattedResume`](../interfaces/ReformattedResume.md)\>

Upload a resume for reformatting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resumeFormat` | `string` | Identifier of the format used |
| `options?` | [`AffindaAPICreateReformattedResumeOptionalParams`](../interfaces/AffindaAPICreateReformattedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ReformattedResume`](../interfaces/ReformattedResume.md)\>

___

### createResume

▸ **createResume**(`options?`): `Promise`<[`Resume`](../interfaces/Resume.md)\>

Uploads a resume for parsing.
Provide `file` for uploading a resume file, or `url` for getting resume file from an url, or `data`
if you want to upload resume data directly without parsing any resume file.
For uploading resume data, the `data` argument provided must be a JSON-encoded string.
When successful, returns an `identifier` in the response for subsequent use with the
[/resumes/{identifier}](#operation/getResume) endpoint to check processing status and retrieve
results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateResumeOptionalParams`](../interfaces/AffindaAPICreateResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Resume`](../interfaces/Resume.md)\>

___

### createResumeSearch

▸ **createResumeSearch**(`body`, `options?`): `Promise`<[`ResumeSearch`](../interfaces/ResumeSearch.md)\>

Searches through parsed resumes. You can search with custom criterias, a job description, or a
resume.
When searching with a job description, a parsed job description is used to find candidates that suit
it.
When searching with a resume, a parsed resume is used to find other candidates that have similar
attributes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | ``null`` \| [`ResumeSearchParameters`](../interfaces/ResumeSearchParameters.md) | Search parameters |
| `options?` | [`AffindaAPICreateResumeSearchOptionalParams`](../interfaces/AffindaAPICreateResumeSearchOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearch`](../interfaces/ResumeSearch.md)\>

___

### createResumeSearchEmbedUrl

▸ **createResumeSearchEmbedUrl**(`options?`): `Promise`<[`ResumeSearchEmbed`](../interfaces/ResumeSearchEmbed.md)\>

Create and return a signed URL of the resume search tool which then can be embedded on a web page.
An optional parameter `config_override` can be passed to override the user-level configurations of
the embedable search tool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateResumeSearchEmbedUrlOptionalParams`](../interfaces/AffindaAPICreateResumeSearchEmbedUrlOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearchEmbed`](../interfaces/ResumeSearchEmbed.md)\>

___

### createUser

▸ **createUser**(`username`, `options?`): `Promise`<[`PathsTop5ZkUsersPostResponses201ContentApplicationJsonSchema`](../modules.md#pathstop5zkuserspostresponses201contentapplicationjsonschema)\>

Create an user as part of your account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` |  |
| `options?` | [`AffindaAPICreateUserOptionalParams`](../interfaces/AffindaAPICreateUserOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsTop5ZkUsersPostResponses201ContentApplicationJsonSchema`](../modules.md#pathstop5zkuserspostresponses201contentapplicationjsonschema)\>

___

### deleteIndex

▸ **deleteIndex**(`name`, `options?`): `Promise`<[`RequestError`](../interfaces/RequestError.md)\>

Deletes the specified index from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `options?` | [`AffindaAPIDeleteIndexOptionalParams`](../interfaces/AffindaAPIDeleteIndexOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RequestError`](../interfaces/RequestError.md)\>

___

### deleteIndexDocument

▸ **deleteIndexDocument**(`name`, `identifier`, `options?`): `Promise`<[`RequestError`](../interfaces/RequestError.md)\>

Delete the specified indexed document from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteIndexDocumentOptionalParams`](../interfaces/AffindaAPIDeleteIndexDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RequestError`](../interfaces/RequestError.md)\>

___

### deleteInvoice

▸ **deleteInvoice**(`identifier`, `options?`): `Promise`<[`RequestError`](../interfaces/RequestError.md)\>

Delete the specified invoice from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Invoice identifier |
| `options?` | [`AffindaAPIDeleteInvoiceOptionalParams`](../interfaces/AffindaAPIDeleteInvoiceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RequestError`](../interfaces/RequestError.md)\>

___

### deleteJobDescription

▸ **deleteJobDescription**(`identifier`, `options?`): `Promise`<[`RequestError`](../interfaces/RequestError.md)\>

Deletes the specified job description from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteJobDescriptionOptionalParams`](../interfaces/AffindaAPIDeleteJobDescriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RequestError`](../interfaces/RequestError.md)\>

___

### deleteRedactedResume

▸ **deleteRedactedResume**(`identifier`, `options?`): `Promise`<[`RequestError`](../interfaces/RequestError.md)\>

Deletes the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteRedactedResumeOptionalParams`](../interfaces/AffindaAPIDeleteRedactedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RequestError`](../interfaces/RequestError.md)\>

___

### deleteReformattedResume

▸ **deleteReformattedResume**(`identifier`, `options?`): `Promise`<[`RequestError`](../interfaces/RequestError.md)\>

Delete the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIDeleteReformattedResumeOptionalParams`](../interfaces/AffindaAPIDeleteReformattedResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RequestError`](../interfaces/RequestError.md)\>

___

### deleteResume

▸ **deleteResume**(`identifier`, `options?`): `Promise`<[`RequestError`](../interfaces/RequestError.md)\>

Deletes the specified resume from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Resume identifier |
| `options?` | [`AffindaAPIDeleteResumeOptionalParams`](../interfaces/AffindaAPIDeleteResumeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`RequestError`](../interfaces/RequestError.md)\>

___

### getAllIndexDocuments

▸ **getAllIndexDocuments**(`name`, `options?`): `Promise`<[`PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the indexed documents for that index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `options?` | [`AffindaAPIGetAllIndexDocumentsOptionalParams`](../interfaces/AffindaAPIGetAllIndexDocumentsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllIndexes

▸ **getAllIndexes**(`options?`): `Promise`<[`Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the indexes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllIndexesOptionalParams`](../interfaces/AffindaAPIGetAllIndexesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllInvoices

▸ **getAllInvoices**(`options?`): `Promise`<[`GetAllInvoicesResults`](../interfaces/GetAllInvoicesResults.md)\>

Returns all the invoice summaries for that user, limited to 300 per page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllInvoicesOptionalParams`](../interfaces/AffindaAPIGetAllInvoicesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`GetAllInvoicesResults`](../interfaces/GetAllInvoicesResults.md)\>

___

### getAllJobDescriptions

▸ **getAllJobDescriptions**(`options?`): `Promise`<[`GetAllJobDescriptionsResults`](../interfaces/GetAllJobDescriptionsResults.md)\>

Returns all the job descriptions for that user, limited to 300 per page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllJobDescriptionsOptionalParams`](../interfaces/AffindaAPIGetAllJobDescriptionsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`GetAllJobDescriptionsResults`](../interfaces/GetAllJobDescriptionsResults.md)\>

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

___

### getAllUsers

▸ **getAllUsers**(`options?`): `Promise`<[`PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the users

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllUsersOptionalParams`](../interfaces/AffindaAPIGetAllUsersOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema.md)\>

___

### getInvoice

▸ **getInvoice**(`identifier`, `options?`): `Promise`<[`Invoice`](../interfaces/Invoice.md)\>

Returns all the parse results for that invoice if processing is completed.
The `identifier` is the unique ID returned after POST-ing the invoice via the
[/invoices](#operation/createInvoice) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIGetInvoiceOptionalParams`](../interfaces/AffindaAPIGetInvoiceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Invoice`](../interfaces/Invoice.md)\>

___

### getJobDescription

▸ **getJobDescription**(`identifier`, `options?`): `Promise`<[`JobDescription`](../interfaces/JobDescription.md)\>

Returns all the results for that job description if processing is completed.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/job_descriptions](#operation/createJobDescription) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Document identifier |
| `options?` | [`AffindaAPIGetJobDescriptionOptionalParams`](../interfaces/AffindaAPIGetJobDescriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`JobDescription`](../interfaces/JobDescription.md)\>

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

___

### getResumeSearchConfig

▸ **getResumeSearchConfig**(`options?`): `Promise`<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

Return configurations such as which fields can be displayed in the logged in user's embedable search
tool, what are their weights, what is the maximum number of results that can be returned, etc.

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
The `identifier` is the unique ID returned via the [/resume_search](#operation/createResumeSearch)
endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Resume identifier |
| `body` | ``null`` \| [`ResumeSearchParameters`](../interfaces/ResumeSearchParameters.md) | Search parameters |
| `options?` | [`AffindaAPIGetResumeSearchDetailOptionalParams`](../interfaces/AffindaAPIGetResumeSearchDetailOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearchDetail`](../interfaces/ResumeSearchDetail.md)\>

___

### getResumeSearchMatch

▸ **getResumeSearchMatch**(`resume`, `jobDescription`, `options?`): `Promise`<[`ResumeSearchMatch`](../interfaces/ResumeSearchMatch.md)\>

Get the matching score between a resume and a job description. The score ranges between 0 and 1,
with 0 being not a match at all, and 1 being perfect match.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resume` | `string` | Identify the resume to match. |
| `jobDescription` | `string` | Identify the job description to match. |
| `options?` | [`AffindaAPIGetResumeSearchMatchOptionalParams`](../interfaces/AffindaAPIGetResumeSearchMatchOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearchMatch`](../interfaces/ResumeSearchMatch.md)\>

___

### listOccupationGroups

▸ **listOccupationGroups**(`options?`): `Promise`<[`AffindaAPIListOccupationGroupsResponse`](../modules.md#affindaapilistoccupationgroupsresponse)\>

TODO TODO TODO

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

### updateResumeData

▸ **updateResumeData**(`identifier`, `body`, `options?`): `Promise`<[`ResumeData`](../interfaces/ResumeData.md)\>

Update data of a parsed resume.
The `identifier` is the unique ID returned after POST-ing the resume via the
[/resumes](#operation/createResume) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | ``null`` \| `string` | Resume identifier |
| `body` | ``null`` \| [`ResumeData`](../interfaces/ResumeData.md) | Resume data to update |
| `options?` | [`AffindaAPIUpdateResumeDataOptionalParams`](../interfaces/AffindaAPIUpdateResumeDataOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeData`](../interfaces/ResumeData.md)\>

___

### updateResumeSearchConfig

▸ **updateResumeSearchConfig**(`body`, `options?`): `Promise`<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

Update configurations such as which fields can be displayed in the logged in user's embedable search
tool, what are their weights, what is the maximum number of results that can be returned, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md) |  |
| `options?` | [`AffindaAPIUpdateResumeSearchConfigOptionalParams`](../interfaces/AffindaAPIUpdateResumeSearchConfigOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>
