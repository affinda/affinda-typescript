[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPI

# Class: AffindaAPI

## Hierarchy

- `ServiceClient`

  ↳ **`AffindaAPI`**

## Table of contents

### Constructors

- [constructor](AffindaAPI.md#constructor)

### Properties

- [pipeline](AffindaAPI.md#pipeline)
- [region](AffindaAPI.md#region)

### Methods

- [activateResthookSubscription](AffindaAPI.md#activateresthooksubscription)
- [addMappingDataSourceValue](AffindaAPI.md#addmappingdatasourcevalue)
- [batchAddTag](AffindaAPI.md#batchaddtag)
- [batchCreateAnnotations](AffindaAPI.md#batchcreateannotations)
- [batchCreateValidationResults](AffindaAPI.md#batchcreatevalidationresults)
- [batchDeleteAnnotations](AffindaAPI.md#batchdeleteannotations)
- [batchDeleteValidationResults](AffindaAPI.md#batchdeletevalidationresults)
- [batchRemoveTag](AffindaAPI.md#batchremovetag)
- [batchUpdateAnnotations](AffindaAPI.md#batchupdateannotations)
- [createAnnotation](AffindaAPI.md#createannotation)
- [createApiUser](AffindaAPI.md#createapiuser)
- [createCollection](AffindaAPI.md#createcollection)
- [createDataFieldForCollection](AffindaAPI.md#createdatafieldforcollection)
- [createDataPoint](AffindaAPI.md#createdatapoint)
- [createDataPointChoice](AffindaAPI.md#createdatapointchoice)
- [createDocument](AffindaAPI.md#createdocument)
- [createDocumentType](AffindaAPI.md#createdocumenttype)
- [createExtractor](AffindaAPI.md#createextractor)
- [createIndex](AffindaAPI.md#createindex)
- [createIndexDocument](AffindaAPI.md#createindexdocument)
- [createInvitation](AffindaAPI.md#createinvitation)
- [createJobDescriptionSearch](AffindaAPI.md#createjobdescriptionsearch)
- [createJobDescriptionSearchEmbedUrl](AffindaAPI.md#createjobdescriptionsearchembedurl)
- [createMapping](AffindaAPI.md#createmapping)
- [createMappingDataSource](AffindaAPI.md#createmappingdatasource)
- [createOrganization](AffindaAPI.md#createorganization)
- [createResthookSubscription](AffindaAPI.md#createresthooksubscription)
- [createResumeSearch](AffindaAPI.md#createresumesearch)
- [createResumeSearchEmbedUrl](AffindaAPI.md#createresumesearchembedurl)
- [createTag](AffindaAPI.md#createtag)
- [createValidationResult](AffindaAPI.md#createvalidationresult)
- [createWorkspace](AffindaAPI.md#createworkspace)
- [createWorkspaceMembership](AffindaAPI.md#createworkspacemembership)
- [deleteAnnotation](AffindaAPI.md#deleteannotation)
- [deleteApiUser](AffindaAPI.md#deleteapiuser)
- [deleteCollection](AffindaAPI.md#deletecollection)
- [deleteDataPoint](AffindaAPI.md#deletedatapoint)
- [deleteDataPointChoice](AffindaAPI.md#deletedatapointchoice)
- [deleteDocument](AffindaAPI.md#deletedocument)
- [deleteDocumentType](AffindaAPI.md#deletedocumenttype)
- [deleteExtractor](AffindaAPI.md#deleteextractor)
- [deleteIndex](AffindaAPI.md#deleteindex)
- [deleteIndexDocument](AffindaAPI.md#deleteindexdocument)
- [deleteInvitation](AffindaAPI.md#deleteinvitation)
- [deleteMapping](AffindaAPI.md#deletemapping)
- [deleteMappingDataSource](AffindaAPI.md#deletemappingdatasource)
- [deleteMappingDataSourceValue](AffindaAPI.md#deletemappingdatasourcevalue)
- [deleteOrganization](AffindaAPI.md#deleteorganization)
- [deleteOrganizationMembership](AffindaAPI.md#deleteorganizationmembership)
- [deleteResthookSubscription](AffindaAPI.md#deleteresthooksubscription)
- [deleteTag](AffindaAPI.md#deletetag)
- [deleteValidationResult](AffindaAPI.md#deletevalidationresult)
- [deleteWorkspace](AffindaAPI.md#deleteworkspace)
- [deleteWorkspaceMembership](AffindaAPI.md#deleteworkspacemembership)
- [editDocumentPages](AffindaAPI.md#editdocumentpages)
- [getAllAnnotations](AffindaAPI.md#getallannotations)
- [getAllApiUsers](AffindaAPI.md#getallapiusers)
- [getAllCollections](AffindaAPI.md#getallcollections)
- [getAllDataPoints](AffindaAPI.md#getalldatapoints)
- [getAllDocumentSplitters](AffindaAPI.md#getalldocumentsplitters)
- [getAllDocuments](AffindaAPI.md#getalldocuments)
- [getAllExtractors](AffindaAPI.md#getallextractors)
- [getAllIndexDocuments](AffindaAPI.md#getallindexdocuments)
- [getAllIndexes](AffindaAPI.md#getallindexes)
- [getAllInvitations](AffindaAPI.md#getallinvitations)
- [getAllOrganizationMemberships](AffindaAPI.md#getallorganizationmemberships)
- [getAllOrganizations](AffindaAPI.md#getallorganizations)
- [getAllResthookSubscriptions](AffindaAPI.md#getallresthooksubscriptions)
- [getAllTags](AffindaAPI.md#getalltags)
- [getAllValidationResults](AffindaAPI.md#getallvalidationresults)
- [getAllWorkspaceMemberships](AffindaAPI.md#getallworkspacememberships)
- [getAllWorkspaces](AffindaAPI.md#getallworkspaces)
- [getAnnotation](AffindaAPI.md#getannotation)
- [getApiUser](AffindaAPI.md#getapiuser)
- [getCollection](AffindaAPI.md#getcollection)
- [getDataFieldForCollection](AffindaAPI.md#getdatafieldforcollection)
- [getDataPoint](AffindaAPI.md#getdatapoint)
- [getDataPointChoice](AffindaAPI.md#getdatapointchoice)
- [getDataPointChoices](AffindaAPI.md#getdatapointchoices)
- [getDocument](AffindaAPI.md#getdocument)
- [getDocumentSplitter](AffindaAPI.md#getdocumentsplitter)
- [getDocumentType](AffindaAPI.md#getdocumenttype)
- [getDocumentTypes](AffindaAPI.md#getdocumenttypes)
- [getExtractor](AffindaAPI.md#getextractor)
- [getInvitation](AffindaAPI.md#getinvitation)
- [getInvitationByToken](AffindaAPI.md#getinvitationbytoken)
- [getJobDescriptionSearchConfig](AffindaAPI.md#getjobdescriptionsearchconfig)
- [getJobDescriptionSearchDetail](AffindaAPI.md#getjobdescriptionsearchdetail)
- [getMapping](AffindaAPI.md#getmapping)
- [getMappingDataSource](AffindaAPI.md#getmappingdatasource)
- [getMappingDataSourceValue](AffindaAPI.md#getmappingdatasourcevalue)
- [getOrganization](AffindaAPI.md#getorganization)
- [getOrganizationMembership](AffindaAPI.md#getorganizationmembership)
- [getRedactedDocument](AffindaAPI.md#getredacteddocument)
- [getResthookSubscription](AffindaAPI.md#getresthooksubscription)
- [getResumeSearchConfig](AffindaAPI.md#getresumesearchconfig)
- [getResumeSearchDetail](AffindaAPI.md#getresumesearchdetail)
- [getResumeSearchMatch](AffindaAPI.md#getresumesearchmatch)
- [getResumeSearchSuggestionJobTitle](AffindaAPI.md#getresumesearchsuggestionjobtitle)
- [getResumeSearchSuggestionSkill](AffindaAPI.md#getresumesearchsuggestionskill)
- [getTag](AffindaAPI.md#gettag)
- [getUsageByCollection](AffindaAPI.md#getusagebycollection)
- [getUsageByWorkspace](AffindaAPI.md#getusagebyworkspace)
- [getValidationResult](AffindaAPI.md#getvalidationresult)
- [getWorkspace](AffindaAPI.md#getworkspace)
- [getWorkspaceMembership](AffindaAPI.md#getworkspacemembership)
- [listMappingDataSourceValues](AffindaAPI.md#listmappingdatasourcevalues)
- [listMappingDataSources](AffindaAPI.md#listmappingdatasources)
- [listMappings](AffindaAPI.md#listmappings)
- [listOccupationGroups](AffindaAPI.md#listoccupationgroups)
- [reIndexDocument](AffindaAPI.md#reindexdocument)
- [regenerateApiKeyForApiUser](AffindaAPI.md#regenerateapikeyforapiuser)
- [replaceDataPointChoices](AffindaAPI.md#replacedatapointchoices)
- [replaceMappingDataSourceValues](AffindaAPI.md#replacemappingdatasourcevalues)
- [respondToInvitation](AffindaAPI.md#respondtoinvitation)
- [sendOperationRequest](AffindaAPI.md#sendoperationrequest)
- [sendRequest](AffindaAPI.md#sendrequest)
- [updateAnnotation](AffindaAPI.md#updateannotation)
- [updateApiUser](AffindaAPI.md#updateapiuser)
- [updateCollection](AffindaAPI.md#updatecollection)
- [updateDataFieldForCollection](AffindaAPI.md#updatedatafieldforcollection)
- [updateDataPoint](AffindaAPI.md#updatedatapoint)
- [updateDataPointChoice](AffindaAPI.md#updatedatapointchoice)
- [updateDocument](AffindaAPI.md#updatedocument)
- [updateDocumentData](AffindaAPI.md#updatedocumentdata)
- [updateDocumentType](AffindaAPI.md#updatedocumenttype)
- [updateExtractor](AffindaAPI.md#updateextractor)
- [updateIndex](AffindaAPI.md#updateindex)
- [updateInvitation](AffindaAPI.md#updateinvitation)
- [updateJobDescriptionSearchConfig](AffindaAPI.md#updatejobdescriptionsearchconfig)
- [updateMapping](AffindaAPI.md#updatemapping)
- [updateMappingDataSourceValue](AffindaAPI.md#updatemappingdatasourcevalue)
- [updateOrganization](AffindaAPI.md#updateorganization)
- [updateOrganizationMembership](AffindaAPI.md#updateorganizationmembership)
- [updateResthookSubscription](AffindaAPI.md#updateresthooksubscription)
- [updateResumeSearchConfig](AffindaAPI.md#updateresumesearchconfig)
- [updateTag](AffindaAPI.md#updatetag)
- [updateValidationResult](AffindaAPI.md#updatevalidationresult)
- [updateWorkspace](AffindaAPI.md#updateworkspace)

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

coreClient.ServiceClient.constructor

## Properties

### pipeline

• `Readonly` **pipeline**: `Pipeline`

The pipeline used by this client to make requests

#### Inherited from

coreClient.ServiceClient.pipeline

___

### region

• **region**: `string`

## Methods

### activateResthookSubscription

▸ **activateResthookSubscription**(`xHookSecret`, `options?`): `Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

After creating a subscription, we'll send a POST request to your target URL with a `X-Hook-Secret`
header. <br />
You should response to this with a 200 status code, and use the value of the `X-Hook-Secret` header
that you received to activate the subscription using this endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xHookSecret` | `string` | The secret received when creating a subscription. |
| `options?` | [`ActivateResthookSubscriptionOptionalParams`](../interfaces/ActivateResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

___

### addMappingDataSourceValue

▸ **addMappingDataSourceValue**(`identifier`, `body`, `options?`): `Promise`\<[`AddMappingDataSourceValueResponse`](../modules.md#addmappingdatasourcevalueresponse)\>

Adds a value to a mapping data source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping data source's identifier |
| `body` | `Record`\<`string`, `unknown`\> | Any object |
| `options?` | [`AddMappingDataSourceValueOptionalParams`](../interfaces/AddMappingDataSourceValueOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`AddMappingDataSourceValueResponse`](../modules.md#addmappingdatasourcevalueresponse)\>

___

### batchAddTag

▸ **batchAddTag**(`body`, `options?`): `Promise`\<`void`\>

Add a tag to documents.
Tags are used to group documents together.
Tags can be used to filter documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BatchAddTagRequest`](../interfaces/BatchAddTagRequest.md) | Specify the tag and the documents to tag |
| `options?` | [`BatchAddTagOptionalParams`](../interfaces/BatchAddTagOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### batchCreateAnnotations

▸ **batchCreateAnnotations**(`body`, `options?`): `Promise`\<[`BatchCreateAnnotationsResponse`](../modules.md#batchcreateannotationsresponse)\>

Batch create annotations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AnnotationCreate`](../interfaces/AnnotationCreate.md)[] | Array of AnnotationCreate |
| `options?` | [`BatchCreateAnnotationsOptionalParams`](../interfaces/BatchCreateAnnotationsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`BatchCreateAnnotationsResponse`](../modules.md#batchcreateannotationsresponse)\>

___

### batchCreateValidationResults

▸ **batchCreateValidationResults**(`body`, `options?`): `Promise`\<[`BatchCreateValidationResultsResponse`](../modules.md#batchcreatevalidationresultsresponse)\>

Batch create validation results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ValidationResultCreate`](../interfaces/ValidationResultCreate.md)[] | Array of ValidationResultCreate |
| `options?` | [`BatchCreateValidationResultsOptionalParams`](../interfaces/BatchCreateValidationResultsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`BatchCreateValidationResultsResponse`](../modules.md#batchcreatevalidationresultsresponse)\>

___

### batchDeleteAnnotations

▸ **batchDeleteAnnotations**(`body`, `options?`): `Promise`\<[`BatchDeleteAnnotationsResponse`](../interfaces/BatchDeleteAnnotationsResponse.md)\>

Batch delete annotations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `number`[] | Array of annotation IDs to be deleted |
| `options?` | [`BatchDeleteAnnotationsOptionalParams`](../interfaces/BatchDeleteAnnotationsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`BatchDeleteAnnotationsResponse`](../interfaces/BatchDeleteAnnotationsResponse.md)\>

___

### batchDeleteValidationResults

▸ **batchDeleteValidationResults**(`body`, `options?`): `Promise`\<`void`\>

Batch delete validation results

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BatchDeleteValidationResultsRequest`](../interfaces/BatchDeleteValidationResultsRequest.md) |  |
| `options?` | [`BatchDeleteValidationResultsOptionalParams`](../interfaces/BatchDeleteValidationResultsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### batchRemoveTag

▸ **batchRemoveTag**(`body`, `options?`): `Promise`\<`void`\>

Remove a tag from documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BatchRemoveTagRequest`](../interfaces/BatchRemoveTagRequest.md) | Specify the tag and the documents to remove the tag from |
| `options?` | [`BatchRemoveTagOptionalParams`](../interfaces/BatchRemoveTagOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### batchUpdateAnnotations

▸ **batchUpdateAnnotations**(`body`, `options?`): `Promise`\<[`BatchUpdateAnnotationsResponse`](../modules.md#batchupdateannotationsresponse)\>

Batch update annotations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AnnotationBatchUpdate`](../interfaces/AnnotationBatchUpdate.md)[] | Array of AnnotationBatchUpdate |
| `options?` | [`BatchUpdateAnnotationsOptionalParams`](../interfaces/BatchUpdateAnnotationsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`BatchUpdateAnnotationsResponse`](../modules.md#batchupdateannotationsresponse)\>

___

### createAnnotation

▸ **createAnnotation**(`body`, `options?`): `Promise`\<[`AnnotationWithValidationResults`](../interfaces/AnnotationWithValidationResults.md)\>

Create a annotation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AnnotationCreate`](../interfaces/AnnotationCreate.md) |  |
| `options?` | [`CreateAnnotationOptionalParams`](../interfaces/CreateAnnotationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`AnnotationWithValidationResults`](../interfaces/AnnotationWithValidationResults.md)\>

___

### createApiUser

▸ **createApiUser**(`body`, `options?`): `Promise`\<[`ApiUserWithKey`](../interfaces/ApiUserWithKey.md)\>

Create an API user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ApiUserCreate`](../interfaces/ApiUserCreate.md) |  |
| `options?` | [`CreateApiUserOptionalParams`](../interfaces/CreateApiUserOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ApiUserWithKey`](../interfaces/ApiUserWithKey.md)\>

___

### createCollection

▸ **createCollection**(`body`, `options?`): `Promise`\<[`Collection`](../interfaces/Collection.md)\>

Create a collection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`CollectionCreate`](../interfaces/CollectionCreate.md) |  |
| `options?` | [`CreateCollectionOptionalParams`](../interfaces/CreateCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Collection`](../interfaces/Collection.md)\>

___

### createDataFieldForCollection

▸ **createDataFieldForCollection**(`identifier`, `body`, `options?`): `Promise`\<[`DataField`](../interfaces/DataField.md)\>

Create data field for a collection along with a new data point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Collection's identifier |
| `body` | [`DataFieldCreate`](../interfaces/DataFieldCreate.md) | The data field and data point to be created. |
| `options?` | [`CreateDataFieldForCollectionOptionalParams`](../interfaces/CreateDataFieldForCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DataField`](../interfaces/DataField.md)\>

___

### createDataPoint

▸ **createDataPoint**(`options?`): `Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

Create a custom data point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`CreateDataPointOptionalParams`](../interfaces/CreateDataPointOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

___

### createDataPointChoice

▸ **createDataPointChoice**(`options?`): `Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

Create a custom data point choice.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`CreateDataPointChoiceOptionalParams`](../interfaces/CreateDataPointChoiceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

___

### createDocument

▸ **createDocument**(`options?`): `Promise`\<[`DocumentUnion`](../modules.md#documentunion)\>

Uploads a document for parsing. When successful, returns an `identifier` in the response for
subsequent use with the [/documents/{identifier}](#get-/v3/documents/-identifier-) endpoint to check
processing status and retrieve results.<br/>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`CreateDocumentOptionalParams`](../interfaces/CreateDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DocumentUnion`](../modules.md#documentunion)\>

___

### createDocumentType

▸ **createDocumentType**(`body`, `options?`): `Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

Create a new document type in the specified organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DocumentTypeCreate`](../interfaces/DocumentTypeCreate.md) |  |
| `options?` | [`CreateDocumentTypeOptionalParams`](../interfaces/CreateDocumentTypeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

___

### createExtractor

▸ **createExtractor**(`options?`): `Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

Create a custom extractor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`CreateExtractorOptionalParams`](../interfaces/CreateExtractorOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

___

### createIndex

▸ **createIndex**(`body`, `options?`): `Promise`\<[`Index`](../interfaces/Index.md)\>

Create an index for the search tool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`IndexCreate`](../interfaces/IndexCreate.md) | Index to create |
| `options?` | [`CreateIndexOptionalParams`](../interfaces/CreateIndexOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Index`](../interfaces/Index.md)\>

___

### createIndexDocument

▸ **createIndexDocument**(`name`, `body`, `options?`): `Promise`\<[`PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema`](../interfaces/PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema.md)\>

Create an indexed document for the search tool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `body` | [`PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema`](../interfaces/PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema.md) | Document to index |
| `options?` | [`CreateIndexDocumentOptionalParams`](../interfaces/CreateIndexDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema`](../interfaces/PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema.md)\>

___

### createInvitation

▸ **createInvitation**(`body`, `options?`): `Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

Create a new invitation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`InvitationCreate`](../interfaces/InvitationCreate.md) | Invitation to create. |
| `options?` | [`CreateInvitationOptionalParams`](../interfaces/CreateInvitationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

___

### createJobDescriptionSearch

▸ **createJobDescriptionSearch**(`body`, `options?`): `Promise`\<[`JobDescriptionSearch`](../interfaces/JobDescriptionSearch.md)\>

Searches through parsed job descriptions. You can search with custom criterias or a resume.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | ``null`` \| [`JobDescriptionSearchParameters`](../interfaces/JobDescriptionSearchParameters.md) | Search parameters |
| `options?` | [`CreateJobDescriptionSearchOptionalParams`](../interfaces/CreateJobDescriptionSearchOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`JobDescriptionSearch`](../interfaces/JobDescriptionSearch.md)\>

___

### createJobDescriptionSearchEmbedUrl

▸ **createJobDescriptionSearchEmbedUrl**(`options?`): `Promise`\<[`JobDescriptionSearchEmbed`](../interfaces/JobDescriptionSearchEmbed.md)\>

Create and return a signed URL of the job description search tool which then can be embedded on a
web page. An optional parameter `config_override` can be passed to override the user-level
configurations of the embeddable search tool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`CreateJobDescriptionSearchEmbedUrlOptionalParams`](../interfaces/CreateJobDescriptionSearchEmbedUrlOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`JobDescriptionSearchEmbed`](../interfaces/JobDescriptionSearchEmbed.md)\>

___

### createMapping

▸ **createMapping**(`body`, `options?`): `Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

Create a custom mapping.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MappingCreate`](../interfaces/MappingCreate.md) |  |
| `options?` | [`CreateMappingOptionalParams`](../interfaces/CreateMappingOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

___

### createMappingDataSource

▸ **createMappingDataSource**(`body`, `options?`): `Promise`\<[`MappingDataSource`](../interfaces/MappingDataSource.md)\>

Create a custom mapping data source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MappingDataSourceCreate`](../interfaces/MappingDataSourceCreate.md) | A mapping data source is used to map from raw data found by our AI models to records in your database. |
| `options?` | [`CreateMappingDataSourceOptionalParams`](../interfaces/CreateMappingDataSourceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`MappingDataSource`](../interfaces/MappingDataSource.md)\>

___

### createOrganization

▸ **createOrganization**(`name`, `options?`): `Promise`\<[`Organization`](../interfaces/Organization.md)\>

Create a new organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` |  |
| `options?` | [`CreateOrganizationOptionalParams`](../interfaces/CreateOrganizationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Organization`](../interfaces/Organization.md)\>

___

### createResthookSubscription

▸ **createResthookSubscription**(`body`, `options?`): `Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

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
| `options?` | [`CreateResthookSubscriptionOptionalParams`](../interfaces/CreateResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

___

### createResumeSearch

▸ **createResumeSearch**(`body`, `options?`): `Promise`\<[`ResumeSearch`](../interfaces/ResumeSearch.md)\>

Searches through parsed resumes. Users have 3 options to create a search:<br /><br /> 1.	Match to a
job description - a parsed job description is used to find candidates that suit it<br /> 2.	Match to
a resume - a parsed resume is used to find other candidates that have similar attributes<br /> 3.
Search using custom criteria<br /><br /> Users should only populate 1 of jobDescription, resume or
the custom criteria.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ResumeSearchParameters`](../interfaces/ResumeSearchParameters.md) | Search parameters |
| `options?` | [`CreateResumeSearchOptionalParams`](../interfaces/CreateResumeSearchOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ResumeSearch`](../interfaces/ResumeSearch.md)\>

___

### createResumeSearchEmbedUrl

▸ **createResumeSearchEmbedUrl**(`options?`): `Promise`\<[`ResumeSearchEmbed`](../interfaces/ResumeSearchEmbed.md)\>

Create and return a signed URL of the resume search tool which then can be embedded on a web page.
An optional parameter `config_override` can be passed to override the user-level configurations of
the embeddable resume search tool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`CreateResumeSearchEmbedUrlOptionalParams`](../interfaces/CreateResumeSearchEmbedUrlOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ResumeSearchEmbed`](../interfaces/ResumeSearchEmbed.md)\>

___

### createTag

▸ **createTag**(`body`, `options?`): `Promise`\<[`Tag`](../interfaces/Tag.md)\>

Create a tag

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`TagCreate`](../interfaces/TagCreate.md) |  |
| `options?` | [`CreateTagOptionalParams`](../interfaces/CreateTagOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)\>

___

### createValidationResult

▸ **createValidationResult**(`body`, `options?`): `Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

Create a validation result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ValidationResultCreate`](../interfaces/ValidationResultCreate.md) |  |
| `options?` | [`CreateValidationResultOptionalParams`](../interfaces/CreateValidationResultOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

___

### createWorkspace

▸ **createWorkspace**(`body`, `options?`): `Promise`\<[`Workspace`](../interfaces/Workspace.md)\>

Create a workspace

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`WorkspaceCreate`](../interfaces/WorkspaceCreate.md) | Workspace to create |
| `options?` | [`CreateWorkspaceOptionalParams`](../interfaces/CreateWorkspaceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Workspace`](../interfaces/Workspace.md)\>

___

### createWorkspaceMembership

▸ **createWorkspaceMembership**(`body`, `options?`): `Promise`\<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

Create a workspace membership.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`WorkspaceMembershipCreate`](../interfaces/WorkspaceMembershipCreate.md) |  |
| `options?` | [`CreateWorkspaceMembershipOptionalParams`](../interfaces/CreateWorkspaceMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

___

### deleteAnnotation

▸ **deleteAnnotation**(`id`, `options?`): `Promise`\<[`AnotationDelete`](../interfaces/AnotationDelete.md)\>

Deletes the specified annotation from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Annotation's ID |
| `options?` | [`DeleteAnnotationOptionalParams`](../interfaces/DeleteAnnotationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`AnotationDelete`](../interfaces/AnotationDelete.md)\>

___

### deleteApiUser

▸ **deleteApiUser**(`id`, `options?`): `Promise`\<`void`\>

Deletes the specified API user from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | API user's ID |
| `options?` | [`DeleteApiUserOptionalParams`](../interfaces/DeleteApiUserOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteCollection

▸ **deleteCollection**(`identifier`, `options?`): `Promise`\<`void`\>

Deletes the specified collection from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Collection's identifier |
| `options?` | [`DeleteCollectionOptionalParams`](../interfaces/DeleteCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteDataPoint

▸ **deleteDataPoint**(`identifier`, `options?`): `Promise`\<`void`\>

Deletes the specified data point from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | DataPoint's identifier |
| `options?` | [`DeleteDataPointOptionalParams`](../interfaces/DeleteDataPointOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteDataPointChoice

▸ **deleteDataPointChoice**(`id`, `options?`): `Promise`\<`void`\>

Deletes the specified data point choice from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Data point choice's ID |
| `options?` | [`DeleteDataPointChoiceOptionalParams`](../interfaces/DeleteDataPointChoiceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteDocument

▸ **deleteDocument**(`identifier`, `options?`): `Promise`\<`void`\>

Deletes the specified document from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document's identifier |
| `options?` | [`DeleteDocumentOptionalParams`](../interfaces/DeleteDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteDocumentType

▸ **deleteDocumentType**(`identifier`, `options?`): `Promise`\<`void`\>

Delete a document type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document type identifier |
| `options?` | [`DeleteDocumentTypeOptionalParams`](../interfaces/DeleteDocumentTypeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteExtractor

▸ **deleteExtractor**(`identifier`, `options?`): `Promise`\<`void`\>

Deletes the specified extractor from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Extractor's identifier |
| `options?` | [`DeleteExtractorOptionalParams`](../interfaces/DeleteExtractorOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteIndex

▸ **deleteIndex**(`name`, `options?`): `Promise`\<`void`\>

Deletes the specified index from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `options?` | [`DeleteIndexOptionalParams`](../interfaces/DeleteIndexOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteIndexDocument

▸ **deleteIndexDocument**(`name`, `identifier`, `options?`): `Promise`\<`void`\>

Delete the specified indexed document from the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `identifier` | `string` | Document identifier |
| `options?` | [`DeleteIndexDocumentOptionalParams`](../interfaces/DeleteIndexDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteInvitation

▸ **deleteInvitation**(`identifier`, `options?`): `Promise`\<`void`\>

Delete the specified invitation from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Invitation identifier. |
| `options?` | [`DeleteInvitationOptionalParams`](../interfaces/DeleteInvitationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteMapping

▸ **deleteMapping**(`identifier`, `options?`): `Promise`\<`void`\>

Delete the specified mapping from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping's identifier |
| `options?` | [`DeleteMappingOptionalParams`](../interfaces/DeleteMappingOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteMappingDataSource

▸ **deleteMappingDataSource**(`identifier`, `options?`): `Promise`\<`void`\>

Delete the specified mapping data source from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping data source's identifier |
| `options?` | [`DeleteMappingDataSourceOptionalParams`](../interfaces/DeleteMappingDataSourceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteMappingDataSourceValue

▸ **deleteMappingDataSourceValue**(`identifier`, `value`, `options?`): `Promise`\<`void`\>

Delete the specified mapping data source value from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping data source's identifier |
| `value` | `string` | Mapping Data Source Value's value |
| `options?` | [`DeleteMappingDataSourceValueOptionalParams`](../interfaces/DeleteMappingDataSourceValueOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteOrganization

▸ **deleteOrganization**(`identifier`, `options?`): `Promise`\<`void`\>

Delete the specified organization from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Organization identifier. |
| `options?` | [`DeleteOrganizationOptionalParams`](../interfaces/DeleteOrganizationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteOrganizationMembership

▸ **deleteOrganizationMembership**(`identifier`, `options?`): `Promise`\<`void`\>

The admin users can use this endpoint to remove member from their organization. Other users can also
use this to leave their organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Membership identifier. |
| `options?` | [`DeleteOrganizationMembershipOptionalParams`](../interfaces/DeleteOrganizationMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteResthookSubscription

▸ **deleteResthookSubscription**(`id`, `options?`): `Promise`\<`void`\>

Deletes the specified resthook subscription from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ResthookSubscription's ID |
| `options?` | [`DeleteResthookSubscriptionOptionalParams`](../interfaces/DeleteResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteTag

▸ **deleteTag**(`id`, `options?`): `Promise`\<`void`\>

Deletes the specified tag from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Tag's ID |
| `options?` | [`DeleteTagOptionalParams`](../interfaces/DeleteTagOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteValidationResult

▸ **deleteValidationResult**(`id`, `options?`): `Promise`\<`void`\>

Remove validation result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Validation result's ID. |
| `options?` | [`DeleteValidationResultOptionalParams`](../interfaces/DeleteValidationResultOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteWorkspace

▸ **deleteWorkspace**(`identifier`, `options?`): `Promise`\<`void`\>

Deletes the specified workspace from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace's identifier |
| `options?` | [`DeleteWorkspaceOptionalParams`](../interfaces/DeleteWorkspaceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### deleteWorkspaceMembership

▸ **deleteWorkspaceMembership**(`identifier`, `options?`): `Promise`\<`void`\>

Remove an user from a workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace membership's identifier. |
| `options?` | [`DeleteWorkspaceMembershipOptionalParams`](../interfaces/DeleteWorkspaceMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### editDocumentPages

▸ **editDocumentPages**(`identifier`, `body`, `options?`): `Promise`\<[`EditDocumentPagesResponse`](../modules.md#editdocumentpagesresponse)\>

Split / merge / rotate / delete pages of a document.
Documents with multiple pages can be splitted into multiple documents, or merged into one document.
Each page can also be rotated. Edit operations will trigger re-parsing of the documents involved.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document's identifier |
| `body` | [`DocumentEditRequest`](../interfaces/DocumentEditRequest.md) | Describe how the pages should be edited |
| `options?` | [`EditDocumentPagesOptionalParams`](../interfaces/EditDocumentPagesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`EditDocumentPagesResponse`](../modules.md#editdocumentpagesresponse)\>

___

### getAllAnnotations

▸ **getAllAnnotations**(`document`, `options?`): `Promise`\<[`Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema.md)\>

Returns your annotations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `document` | `string` | Filter by document. |
| `options?` | [`GetAllAnnotationsOptionalParams`](../interfaces/GetAllAnnotationsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllApiUsers

▸ **getAllApiUsers**(`options?`): `Promise`\<[`Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema.md)\>

Returns your API users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllApiUsersOptionalParams`](../interfaces/GetAllApiUsersOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllCollections

▸ **getAllCollections**(`workspace`, `options?`): `Promise`\<[`GetAllCollectionsResponse`](../modules.md#getallcollectionsresponse)\>

Returns your collections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workspace` | `string` | Filter by workspace. |
| `options?` | [`GetAllCollectionsOptionalParams`](../interfaces/GetAllCollectionsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetAllCollectionsResponse`](../modules.md#getallcollectionsresponse)\>

___

### getAllDataPoints

▸ **getAllDataPoints**(`options?`): `Promise`\<[`GetAllDataPointsResponse`](../modules.md#getalldatapointsresponse)\>

Returns your custom data points as well as Affinda's off-the-shelf data points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllDataPointsOptionalParams`](../interfaces/GetAllDataPointsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetAllDataPointsResponse`](../modules.md#getalldatapointsresponse)\>

___

### getAllDocumentSplitters

▸ **getAllDocumentSplitters**(`options?`): `Promise`\<[`GetAllDocumentSplittersResponse`](../modules.md#getalldocumentsplittersresponse)\>

Returns all the document splitters visible to the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllDocumentSplittersOptionalParams`](../interfaces/GetAllDocumentSplittersOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetAllDocumentSplittersResponse`](../modules.md#getalldocumentsplittersresponse)\>

___

### getAllDocuments

▸ **getAllDocuments**(`options?`): `Promise`\<[`PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the document summaries for that user, limited to 300 per page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllDocumentsOptionalParams`](../interfaces/GetAllDocumentsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllExtractors

▸ **getAllExtractors**(`organization`, `options?`): `Promise`\<[`GetAllExtractorsResponse`](../modules.md#getallextractorsresponse)\>

Returns your custom extractors as well as Affinda's off-the-shelf extractors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `organization` | `string` | Filter by organization. |
| `options?` | [`GetAllExtractorsOptionalParams`](../interfaces/GetAllExtractorsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetAllExtractorsResponse`](../modules.md#getallextractorsresponse)\>

___

### getAllIndexDocuments

▸ **getAllIndexDocuments**(`name`, `options?`): `Promise`\<[`PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the indexed documents for that index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `options?` | [`GetAllIndexDocumentsOptionalParams`](../interfaces/GetAllIndexDocumentsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllIndexes

▸ **getAllIndexes**(`options?`): `Promise`\<[`PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the indexes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllIndexesOptionalParams`](../interfaces/GetAllIndexesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllInvitations

▸ **getAllInvitations**(`options?`): `Promise`\<[`Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema.md)\>

Get list of all invitations you created or sent to you.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllInvitationsOptionalParams`](../interfaces/GetAllInvitationsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllOrganizationMemberships

▸ **getAllOrganizationMemberships**(`options?`): `Promise`\<[`PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the organization memberships

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllOrganizationMembershipsOptionalParams`](../interfaces/GetAllOrganizationMembershipsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllOrganizations

▸ **getAllOrganizations**(`options?`): `Promise`\<[`GetAllOrganizationsResponse`](../modules.md#getallorganizationsresponse)\>

Returns all the organizations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllOrganizationsOptionalParams`](../interfaces/GetAllOrganizationsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetAllOrganizationsResponse`](../modules.md#getallorganizationsresponse)\>

___

### getAllResthookSubscriptions

▸ **getAllResthookSubscriptions**(`options?`): `Promise`\<[`PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema.md)\>

Returns your resthook subscriptions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllResthookSubscriptionsOptionalParams`](../interfaces/GetAllResthookSubscriptionsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllTags

▸ **getAllTags**(`options?`): `Promise`\<[`GetAllTagsResponse`](../modules.md#getalltagsresponse)\>

Returns your tags.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllTagsOptionalParams`](../interfaces/GetAllTagsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetAllTagsResponse`](../modules.md#getalltagsresponse)\>

___

### getAllValidationResults

▸ **getAllValidationResults**(`document`, `options?`): `Promise`\<[`GetAllValidationResultsResponse`](../modules.md#getallvalidationresultsresponse)\>

Returns the validation results of a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `document` | `string` | Filter by document. |
| `options?` | [`GetAllValidationResultsOptionalParams`](../interfaces/GetAllValidationResultsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetAllValidationResultsResponse`](../modules.md#getallvalidationresultsresponse)\>

___

### getAllWorkspaceMemberships

▸ **getAllWorkspaceMemberships**(`options?`): `Promise`\<[`PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema.md)\>

Returns the memberships of your workspaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetAllWorkspaceMembershipsOptionalParams`](../interfaces/GetAllWorkspaceMembershipsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllWorkspaces

▸ **getAllWorkspaces**(`organization`, `options?`): `Promise`\<[`GetAllWorkspacesResponse`](../modules.md#getallworkspacesresponse)\>

Returns your workspaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `organization` | `string` | Filter by organization. |
| `options?` | [`GetAllWorkspacesOptionalParams`](../interfaces/GetAllWorkspacesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetAllWorkspacesResponse`](../modules.md#getallworkspacesresponse)\>

___

### getAnnotation

▸ **getAnnotation**(`id`, `options?`): `Promise`\<[`Annotation`](../interfaces/Annotation.md)\>

Return a specific annotation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Annotation's ID |
| `options?` | [`GetAnnotationOptionalParams`](../interfaces/GetAnnotationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Annotation`](../interfaces/Annotation.md)\>

___

### getApiUser

▸ **getApiUser**(`id`, `options?`): `Promise`\<[`ApiUserWithoutKey`](../interfaces/ApiUserWithoutKey.md)\>

Return a specific API user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | API user's ID |
| `options?` | [`GetApiUserOptionalParams`](../interfaces/GetApiUserOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ApiUserWithoutKey`](../interfaces/ApiUserWithoutKey.md)\>

___

### getCollection

▸ **getCollection**(`identifier`, `options?`): `Promise`\<[`Collection`](../interfaces/Collection.md)\>

Return a specific collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Collection's identifier |
| `options?` | [`GetCollectionOptionalParams`](../interfaces/GetCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Collection`](../interfaces/Collection.md)\>

___

### getDataFieldForCollection

▸ **getDataFieldForCollection**(`identifier`, `datapointIdentifier`, `options?`): `Promise`\<[`CollectionField`](../interfaces/CollectionField.md)\>

Get a data field for a collection assosciated with a data point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Collection's identifier |
| `datapointIdentifier` | `string` | Datapoint's identifier |
| `options?` | [`GetDataFieldForCollectionOptionalParams`](../interfaces/GetDataFieldForCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`CollectionField`](../interfaces/CollectionField.md)\>

___

### getDataPoint

▸ **getDataPoint**(`identifier`, `options?`): `Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

Return a specific data point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Data point's identifier |
| `options?` | [`GetDataPointOptionalParams`](../interfaces/GetDataPointOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

___

### getDataPointChoice

▸ **getDataPointChoice**(`id`, `options?`): `Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

Return a specific data point choice.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Data point choice's ID |
| `options?` | [`GetDataPointChoiceOptionalParams`](../interfaces/GetDataPointChoiceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

___

### getDataPointChoices

▸ **getDataPointChoices**(`dataPoint`, `collection`, `options?`): `Promise`\<[`PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema.md)\>

Returns available choices for a specific enum data point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dataPoint` | `string` | The data point to get choices for. |
| `collection` | `string` | The collection to get choices for. |
| `options?` | [`GetDataPointChoicesOptionalParams`](../interfaces/GetDataPointChoicesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema.md)\>

___

### getDocument

▸ **getDocument**(`identifier`, `options?`): `Promise`\<[`DocumentUnion`](../modules.md#documentunion)\>

Return a specific document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document's identifier |
| `options?` | [`GetDocumentOptionalParams`](../interfaces/GetDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DocumentUnion`](../modules.md#documentunion)\>

___

### getDocumentSplitter

▸ **getDocumentSplitter**(`identifier`, `options?`): `Promise`\<[`DocumentSplitter`](../interfaces/DocumentSplitter.md)\>

Return a specific document splitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document splitter's identifier |
| `options?` | [`GetDocumentSplitterOptionalParams`](../interfaces/GetDocumentSplitterOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DocumentSplitter`](../interfaces/DocumentSplitter.md)\>

___

### getDocumentType

▸ **getDocumentType**(`identifier`, `options?`): `Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

Returns the details of a specific document type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document type identifier |
| `options?` | [`GetDocumentTypeOptionalParams`](../interfaces/GetDocumentTypeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

___

### getDocumentTypes

▸ **getDocumentTypes**(`options?`): `Promise`\<[`GetDocumentTypesResponse`](../modules.md#getdocumenttypesresponse)\>

Returns a list of document types that the user has access to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetDocumentTypesOptionalParams`](../interfaces/GetDocumentTypesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetDocumentTypesResponse`](../modules.md#getdocumenttypesresponse)\>

___

### getExtractor

▸ **getExtractor**(`identifier`, `options?`): `Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

Return a specific extractor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Extractor's identifier |
| `options?` | [`GetExtractorOptionalParams`](../interfaces/GetExtractorOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

___

### getInvitation

▸ **getInvitation**(`identifier`, `options?`): `Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

Get detail of an invitation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Invitation identifier. |
| `options?` | [`GetInvitationOptionalParams`](../interfaces/GetInvitationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

___

### getInvitationByToken

▸ **getInvitationByToken**(`token`, `options?`): `Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

Get detail of an invitation using a secret token. This allows users who have not registered/logged
in to view the invitation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | Invitation token. |
| `options?` | [`GetInvitationByTokenOptionalParams`](../interfaces/GetInvitationByTokenOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

___

### getJobDescriptionSearchConfig

▸ **getJobDescriptionSearchConfig**(`options?`): `Promise`\<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

Return configurations such as which fields can be displayed in the logged in user's embeddable job
description search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetJobDescriptionSearchConfigOptionalParams`](../interfaces/GetJobDescriptionSearchConfigOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

___

### getJobDescriptionSearchDetail

▸ **getJobDescriptionSearchDetail**(`identifier`, `body`, `options?`): `Promise`\<[`JobDescriptionSearchDetail`](../interfaces/JobDescriptionSearchDetail.md)\>

This contains more detailed information about the matching score of the search criteria, or which
search criteria is missing in this job description.
The `identifier` is the unique ID returned via the
[/job_description_search](#post-/job_description_search) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Job Description identifier |
| `body` | ``null`` \| [`JobDescriptionSearchParameters`](../interfaces/JobDescriptionSearchParameters.md) | Search parameters |
| `options?` | [`GetJobDescriptionSearchDetailOptionalParams`](../interfaces/GetJobDescriptionSearchDetailOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`JobDescriptionSearchDetail`](../interfaces/JobDescriptionSearchDetail.md)\>

___

### getMapping

▸ **getMapping**(`identifier`, `options?`): `Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

Return a specific mapping.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping's identifier |
| `options?` | [`GetMappingOptionalParams`](../interfaces/GetMappingOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

___

### getMappingDataSource

▸ **getMappingDataSource**(`identifier`, `options?`): `Promise`\<[`MappingDataSource`](../interfaces/MappingDataSource.md)\>

Return a specific mapping data source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping data source's identifier |
| `options?` | [`GetMappingDataSourceOptionalParams`](../interfaces/GetMappingDataSourceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`MappingDataSource`](../interfaces/MappingDataSource.md)\>

___

### getMappingDataSourceValue

▸ **getMappingDataSourceValue**(`identifier`, `value`, `options?`): `Promise`\<[`GetMappingDataSourceValueResponse`](../modules.md#getmappingdatasourcevalueresponse)\>

Return a specific mapping dta source value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping data source's identifier |
| `value` | `string` | Mapping Data Source Value's value |
| `options?` | [`GetMappingDataSourceValueOptionalParams`](../interfaces/GetMappingDataSourceValueOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetMappingDataSourceValueResponse`](../modules.md#getmappingdatasourcevalueresponse)\>

___

### getOrganization

▸ **getOrganization**(`identifier`, `options?`): `Promise`\<[`Organization`](../interfaces/Organization.md)\>

Get detail of an organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Organization identifier. |
| `options?` | [`GetOrganizationOptionalParams`](../interfaces/GetOrganizationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Organization`](../interfaces/Organization.md)\>

___

### getOrganizationMembership

▸ **getOrganizationMembership**(`identifier`, `options?`): `Promise`\<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

Get detail of an organization membership.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Membership identifier. |
| `options?` | [`GetOrganizationMembershipOptionalParams`](../interfaces/GetOrganizationMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

___

### getRedactedDocument

▸ **getRedactedDocument**(`identifier`, `options?`): `Promise`\<[`GetRedactedDocumentResponse`](../modules.md#getredacteddocumentresponse)\>

Get the redacted version of a document. The original document is not modified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document identifier |
| `options?` | [`GetRedactedDocumentOptionalParams`](../interfaces/GetRedactedDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetRedactedDocumentResponse`](../modules.md#getredacteddocumentresponse)\>

___

### getResthookSubscription

▸ **getResthookSubscription**(`id`, `options?`): `Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

Return a specific resthook subscription.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Resthook subscription's ID |
| `options?` | [`GetResthookSubscriptionOptionalParams`](../interfaces/GetResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

___

### getResumeSearchConfig

▸ **getResumeSearchConfig**(`options?`): `Promise`\<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

Return configurations such as which fields can be displayed in the logged in user's embeddable
resume search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`GetResumeSearchConfigOptionalParams`](../interfaces/GetResumeSearchConfigOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

___

### getResumeSearchDetail

▸ **getResumeSearchDetail**(`identifier`, `body`, `options?`): `Promise`\<[`ResumeSearchDetail`](../interfaces/ResumeSearchDetail.md)\>

This contains more detailed information about the matching score of the search criteria, or which
search criteria is missing in this resume.
The `identifier` is the unique ID returned via the [/resume_search](#post-/resume_search) endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Resume identifier |
| `body` | [`ResumeSearchParameters`](../interfaces/ResumeSearchParameters.md) | Search parameters |
| `options?` | [`GetResumeSearchDetailOptionalParams`](../interfaces/GetResumeSearchDetailOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ResumeSearchDetail`](../interfaces/ResumeSearchDetail.md)\>

___

### getResumeSearchMatch

▸ **getResumeSearchMatch**(`resume`, `jobDescription`, `options?`): `Promise`\<[`ResumeSearchMatch`](../interfaces/ResumeSearchMatch.md)\>

Get the matching score between a resume and a job description. The score ranges between 0 and 1,
with 0 being not a match at all, and 1 being perfect match.<br/> Note, this score will not directly
match the score returned from POST
[/resume_search/details/{identifier}](#post-/resume_search/details/-identifier-).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resume` | `string` | Identify the resume to match. |
| `jobDescription` | `string` | Identify the job description to match. |
| `options?` | [`GetResumeSearchMatchOptionalParams`](../interfaces/GetResumeSearchMatchOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ResumeSearchMatch`](../interfaces/ResumeSearchMatch.md)\>

___

### getResumeSearchSuggestionJobTitle

▸ **getResumeSearchSuggestionJobTitle**(`jobTitles`, `options?`): `Promise`\<[`GetResumeSearchSuggestionJobTitleResponse`](../modules.md#getresumesearchsuggestionjobtitleresponse)\>

Provided one or more job titles, get related suggestions for your search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jobTitles` | `string`[] | Job title to query suggestions for |
| `options?` | [`GetResumeSearchSuggestionJobTitleOptionalParams`](../interfaces/GetResumeSearchSuggestionJobTitleOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetResumeSearchSuggestionJobTitleResponse`](../modules.md#getresumesearchsuggestionjobtitleresponse)\>

___

### getResumeSearchSuggestionSkill

▸ **getResumeSearchSuggestionSkill**(`skills`, `options?`): `Promise`\<[`GetResumeSearchSuggestionSkillResponse`](../modules.md#getresumesearchsuggestionskillresponse)\>

Provided one or more skills, get related suggestions for your search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skills` | `string`[] | Skill to query suggestions for |
| `options?` | [`GetResumeSearchSuggestionSkillOptionalParams`](../interfaces/GetResumeSearchSuggestionSkillOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetResumeSearchSuggestionSkillResponse`](../modules.md#getresumesearchsuggestionskillresponse)\>

___

### getTag

▸ **getTag**(`id`, `options?`): `Promise`\<[`Tag`](../interfaces/Tag.md)\>

Return a specific tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Tag's ID |
| `options?` | [`GetTagOptionalParams`](../interfaces/GetTagOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)\>

___

### getUsageByCollection

▸ **getUsageByCollection**(`identifier`, `options?`): `Promise`\<[`GetUsageByCollectionResponse`](../modules.md#getusagebycollectionresponse)\>

Return monthly credits consumption of a collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Collection's identifier |
| `options?` | [`GetUsageByCollectionOptionalParams`](../interfaces/GetUsageByCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetUsageByCollectionResponse`](../modules.md#getusagebycollectionresponse)\>

___

### getUsageByWorkspace

▸ **getUsageByWorkspace**(`identifier`, `options?`): `Promise`\<[`GetUsageByWorkspaceResponse`](../modules.md#getusagebyworkspaceresponse)\>

Return monthly credits consumption of a workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace's identifier |
| `options?` | [`GetUsageByWorkspaceOptionalParams`](../interfaces/GetUsageByWorkspaceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`GetUsageByWorkspaceResponse`](../modules.md#getusagebyworkspaceresponse)\>

___

### getValidationResult

▸ **getValidationResult**(`id`, `options?`): `Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

Return a specific validation result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Validation result's ID. |
| `options?` | [`GetValidationResultOptionalParams`](../interfaces/GetValidationResultOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

___

### getWorkspace

▸ **getWorkspace**(`identifier`, `options?`): `Promise`\<[`Workspace`](../interfaces/Workspace.md)\>

Return a specific workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace's identifier |
| `options?` | [`GetWorkspaceOptionalParams`](../interfaces/GetWorkspaceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Workspace`](../interfaces/Workspace.md)\>

___

### getWorkspaceMembership

▸ **getWorkspaceMembership**(`identifier`, `options?`): `Promise`\<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

Return a specific workspace membership.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace membership's identifier. |
| `options?` | [`GetWorkspaceMembershipOptionalParams`](../interfaces/GetWorkspaceMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

___

### listMappingDataSourceValues

▸ **listMappingDataSourceValues**(`identifier`, `options?`): `Promise`\<[`Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema.md)\>

Returns the list of all values in a mapping data source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping data source's identifier |
| `options?` | [`ListMappingDataSourceValuesOptionalParams`](../interfaces/ListMappingDataSourceValuesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema.md)\>

___

### listMappingDataSources

▸ **listMappingDataSources**(`options?`): `Promise`\<[`Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema.md)\>

Returns the list of all custom mapping data sources.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ListMappingDataSourcesOptionalParams`](../interfaces/ListMappingDataSourcesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema.md)\>

___

### listMappings

▸ **listMappings**(`mappingDataSource`, `options?`): `Promise`\<[`Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema.md)\>

Returns the list of all custom data mappings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mappingDataSource` | `string` | Mapping data source's identifier |
| `options?` | [`ListMappingsOptionalParams`](../interfaces/ListMappingsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema.md)\>

___

### listOccupationGroups

▸ **listOccupationGroups**(`options?`): `Promise`\<[`ListOccupationGroupsResponse`](../modules.md#listoccupationgroupsresponse)\>

Returns the list of searchable occupation groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ListOccupationGroupsOptionalParams`](../interfaces/ListOccupationGroupsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ListOccupationGroupsResponse`](../modules.md#listoccupationgroupsresponse)\>

___

### reIndexDocument

▸ **reIndexDocument**(`name`, `identifier`, `options?`): `Promise`\<`void`\>

Re-index a document.
This is relevant if you updated the document's data via the /annotations endpoint, and want to
refresh
the document's data in the search index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `identifier` | `string` | Document identifier |
| `options?` | [`ReIndexDocumentOptionalParams`](../interfaces/ReIndexDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<`void`\>

___

### regenerateApiKeyForApiUser

▸ **regenerateApiKeyForApiUser**(`id`, `options?`): `Promise`\<[`ApiUserWithKey`](../interfaces/ApiUserWithKey.md)\>

Regenerate API key for an API user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | API user's ID |
| `options?` | [`RegenerateApiKeyForApiUserOptionalParams`](../interfaces/RegenerateApiKeyForApiUserOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ApiUserWithKey`](../interfaces/ApiUserWithKey.md)\>

___

### replaceDataPointChoices

▸ **replaceDataPointChoices**(`options?`): `Promise`\<[`DataPointChoiceReplaceResponse`](../interfaces/DataPointChoiceReplaceResponse.md)\>

Replace choices of a data point. Existing choices and incoming choices are matched base on their
`value`. New `value` will be created, existing `value` will be updated, and `value` not in incoming
choices will be deleted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ReplaceDataPointChoicesOptionalParams`](../interfaces/ReplaceDataPointChoicesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DataPointChoiceReplaceResponse`](../interfaces/DataPointChoiceReplaceResponse.md)\>

___

### replaceMappingDataSourceValues

▸ **replaceMappingDataSourceValues**(`identifier`, `body`, `options?`): `Promise`\<[`ReplaceMappingDataSourceValuesResponse`](../modules.md#replacemappingdatasourcevaluesresponse)\>

Replaces the list of all values in a mapping data source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping data source's identifier |
| `body` | `Record`\<`string`, `unknown`\>[] | Array of AnyObject |
| `options?` | [`ReplaceMappingDataSourceValuesOptionalParams`](../interfaces/ReplaceMappingDataSourceValuesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ReplaceMappingDataSourceValuesResponse`](../modules.md#replacemappingdatasourcevaluesresponse)\>

___

### respondToInvitation

▸ **respondToInvitation**(`token`, `body`, `options?`): `Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

Choose to accept or decline an invitation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | Invitation token. |
| `body` | [`InvitationResponse`](../interfaces/InvitationResponse.md) |  |
| `options?` | [`RespondToInvitationOptionalParams`](../interfaces/RespondToInvitationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

___

### sendOperationRequest

▸ **sendOperationRequest**\<`T`\>(`operationArguments`, `operationSpec`): `Promise`\<`T`\>

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

`Promise`\<`T`\>

#### Inherited from

coreClient.ServiceClient.sendOperationRequest

___

### sendRequest

▸ **sendRequest**(`request`): `Promise`\<`PipelineResponse`\>

Send the provided httpRequest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `PipelineRequest` |

#### Returns

`Promise`\<`PipelineResponse`\>

#### Inherited from

coreClient.ServiceClient.sendRequest

___

### updateAnnotation

▸ **updateAnnotation**(`id`, `body`, `options?`): `Promise`\<[`Annotation`](../interfaces/Annotation.md)\>

Update data of an annotation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Annotation's ID |
| `body` | [`AnnotationUpdate`](../interfaces/AnnotationUpdate.md) | Annotation data to update |
| `options?` | [`UpdateAnnotationOptionalParams`](../interfaces/UpdateAnnotationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Annotation`](../interfaces/Annotation.md)\>

___

### updateApiUser

▸ **updateApiUser**(`id`, `body`, `options?`): `Promise`\<[`ApiUserWithoutKey`](../interfaces/ApiUserWithoutKey.md)\>

Update data of an API user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | API user's ID |
| `body` | [`ApiUserUpdate`](../interfaces/ApiUserUpdate.md) | API user to update |
| `options?` | [`UpdateApiUserOptionalParams`](../interfaces/UpdateApiUserOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ApiUserWithoutKey`](../interfaces/ApiUserWithoutKey.md)\>

___

### updateCollection

▸ **updateCollection**(`identifier`, `body`, `options?`): `Promise`\<[`Collection`](../interfaces/Collection.md)\>

Update data of a collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Collection's identifier |
| `body` | [`CollectionUpdate`](../interfaces/CollectionUpdate.md) | Collection data to update |
| `options?` | [`UpdateCollectionOptionalParams`](../interfaces/UpdateCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Collection`](../interfaces/Collection.md)\>

___

### updateDataFieldForCollection

▸ **updateDataFieldForCollection**(`identifier`, `datapointIdentifier`, `body`, `options?`): `Promise`\<[`CollectionField`](../interfaces/CollectionField.md)\>

Update data field for a collection assosciated with a data point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Collection's identifier |
| `datapointIdentifier` | `string` | Datapoint's identifier |
| `body` | [`CollectionField`](../interfaces/CollectionField.md) | Data field properties to update |
| `options?` | [`UpdateDataFieldForCollectionOptionalParams`](../interfaces/UpdateDataFieldForCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`CollectionField`](../interfaces/CollectionField.md)\>

___

### updateDataPoint

▸ **updateDataPoint**(`identifier`, `body`, `options?`): `Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

Update data of a data point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | DataPoint's identifier |
| `body` | [`DataPointUpdate`](../interfaces/DataPointUpdate.md) | Data point to update |
| `options?` | [`UpdateDataPointOptionalParams`](../interfaces/UpdateDataPointOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

___

### updateDataPointChoice

▸ **updateDataPointChoice**(`id`, `body`, `options?`): `Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

Update data of a data point choice.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Data point choice's ID |
| `body` | [`DataPointChoiceUpdate`](../interfaces/DataPointChoiceUpdate.md) | Data point choice to update |
| `options?` | [`UpdateDataPointChoiceOptionalParams`](../interfaces/UpdateDataPointChoiceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

___

### updateDocument

▸ **updateDocument**(`identifier`, `body`, `options?`): `Promise`\<[`DocumentUnion`](../modules.md#documentunion)\>

Update file name, expiry time, or move to another collection, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document's identifier |
| `body` | [`DocumentUpdate`](../interfaces/DocumentUpdate.md) | Document data to update |
| `options?` | [`UpdateDocumentOptionalParams`](../interfaces/UpdateDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DocumentUnion`](../modules.md#documentunion)\>

___

### updateDocumentData

▸ **updateDocumentData**(`identifier`, `body`, `options?`): `Promise`\<[`DocumentUnion`](../modules.md#documentunion)\>

Update data of a document.
Only applicable for resumes and job descriptions. For other document types, please use the `PATCH
/annotations/{id}` endpoint or the `POST /annotations/batch_update` endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Resume or Job Description identifier |
| `body` | [`PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema`](../interfaces/PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema.md) | Resume data to update |
| `options?` | [`UpdateDocumentDataOptionalParams`](../interfaces/UpdateDocumentDataOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DocumentUnion`](../modules.md#documentunion)\>

___

### updateDocumentType

▸ **updateDocumentType**(`identifier`, `body`, `options?`): `Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

Update an existing document type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document type identifier |
| `body` | [`DocumentTypeUpdate`](../interfaces/DocumentTypeUpdate.md) |  |
| `options?` | [`UpdateDocumentTypeOptionalParams`](../interfaces/UpdateDocumentTypeOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

___

### updateExtractor

▸ **updateExtractor**(`identifier`, `body`, `options?`): `Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

Update data of an extractor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Extractor's identifier |
| `body` | [`ExtractorUpdate`](../interfaces/ExtractorUpdate.md) | Extractor data to update |
| `options?` | [`UpdateExtractorOptionalParams`](../interfaces/UpdateExtractorOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

___

### updateIndex

▸ **updateIndex**(`name`, `body`, `options?`): `Promise`\<[`Index`](../interfaces/Index.md)\>

Updates the specified index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `body` | [`IndexUpdate`](../interfaces/IndexUpdate.md) | Index data to update |
| `options?` | [`UpdateIndexOptionalParams`](../interfaces/UpdateIndexOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Index`](../interfaces/Index.md)\>

___

### updateInvitation

▸ **updateInvitation**(`identifier`, `body`, `options?`): `Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

Update the detail of an invitation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Invitation identifier. |
| `body` | [`InvitationUpdate`](../interfaces/InvitationUpdate.md) |  |
| `options?` | [`UpdateInvitationOptionalParams`](../interfaces/UpdateInvitationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

___

### updateJobDescriptionSearchConfig

▸ **updateJobDescriptionSearchConfig**(`body`, `options?`): `Promise`\<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

Update configurations such as which fields can be displayed in the logged in user's embeddable job
description search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md) |  |
| `options?` | [`UpdateJobDescriptionSearchConfigOptionalParams`](../interfaces/UpdateJobDescriptionSearchConfigOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

___

### updateMapping

▸ **updateMapping**(`identifier`, `body`, `options?`): `Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

Updates a specific mapping.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping's identifier |
| `body` | [`MappingUpdate`](../interfaces/MappingUpdate.md) |  |
| `options?` | [`UpdateMappingOptionalParams`](../interfaces/UpdateMappingOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

___

### updateMappingDataSourceValue

▸ **updateMappingDataSourceValue**(`identifier`, `value`, `body`, `options?`): `Promise`\<[`UpdateMappingDataSourceValueResponse`](../modules.md#updatemappingdatasourcevalueresponse)\>

Update the specified mapping data source value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Mapping data source's identifier |
| `value` | `string` | Mapping Data Source's value |
| `body` | `Record`\<`string`, `unknown`\> | Any object |
| `options?` | [`UpdateMappingDataSourceValueOptionalParams`](../interfaces/UpdateMappingDataSourceValueOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`UpdateMappingDataSourceValueResponse`](../modules.md#updatemappingdatasourcevalueresponse)\>

___

### updateOrganization

▸ **updateOrganization**(`identifier`, `options?`): `Promise`\<[`Organization`](../interfaces/Organization.md)\>

Update the detail of an organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Organization identifier. |
| `options?` | [`UpdateOrganizationOptionalParams`](../interfaces/UpdateOrganizationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Organization`](../interfaces/Organization.md)\>

___

### updateOrganizationMembership

▸ **updateOrganizationMembership**(`identifier`, `body`, `options?`): `Promise`\<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

The admin users can use this endpoint to update the role of the members within their organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Membership identifier. |
| `body` | [`OrganizationMembershipUpdate`](../interfaces/OrganizationMembershipUpdate.md) |  |
| `options?` | [`UpdateOrganizationMembershipOptionalParams`](../interfaces/UpdateOrganizationMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

___

### updateResthookSubscription

▸ **updateResthookSubscription**(`id`, `body`, `options?`): `Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

Update data of a resthook subscription.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ResthookSubscription's ID |
| `body` | [`ResthookSubscriptionUpdate`](../interfaces/ResthookSubscriptionUpdate.md) | ResthookSubscription data to update |
| `options?` | [`UpdateResthookSubscriptionOptionalParams`](../interfaces/UpdateResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

___

### updateResumeSearchConfig

▸ **updateResumeSearchConfig**(`body`, `options?`): `Promise`\<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

Update configurations such as which fields can be displayed in the logged in user's embeddable
resume search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md) |  |
| `options?` | [`UpdateResumeSearchConfigOptionalParams`](../interfaces/UpdateResumeSearchConfigOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

___

### updateTag

▸ **updateTag**(`id`, `body`, `options?`): `Promise`\<[`Tag`](../interfaces/Tag.md)\>

Update data of an tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Tag's ID |
| `body` | [`TagUpdate`](../interfaces/TagUpdate.md) | Tag data to update |
| `options?` | [`UpdateTagOptionalParams`](../interfaces/UpdateTagOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)\>

___

### updateValidationResult

▸ **updateValidationResult**(`id`, `body`, `options?`): `Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

Update a validation result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Validation result's ID. |
| `body` | [`ValidationResultUpdate`](../interfaces/ValidationResultUpdate.md) | Validation result data to update |
| `options?` | [`UpdateValidationResultOptionalParams`](../interfaces/UpdateValidationResultOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

___

### updateWorkspace

▸ **updateWorkspace**(`identifier`, `body`, `options?`): `Promise`\<[`Workspace`](../interfaces/Workspace.md)\>

Update a workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace's identifier |
| `body` | [`WorkspaceUpdate`](../interfaces/WorkspaceUpdate.md) | Workspace data to update |
| `options?` | [`UpdateWorkspaceOptionalParams`](../interfaces/UpdateWorkspaceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`\<[`Workspace`](../interfaces/Workspace.md)\>
