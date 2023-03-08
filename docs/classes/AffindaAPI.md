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

- [createCollection](AffindaAPI.md#createcollection)
- [createDataPoint](AffindaAPI.md#createdatapoint)
- [createDocument](AffindaAPI.md#createdocument)
- [createExtractor](AffindaAPI.md#createextractor)
- [createIndex](AffindaAPI.md#createindex)
- [createIndexDocument](AffindaAPI.md#createindexdocument)
- [createInvitation](AffindaAPI.md#createinvitation)
- [createJobDescriptionSearch](AffindaAPI.md#createjobdescriptionsearch)
- [createJobDescriptionSearchEmbedUrl](AffindaAPI.md#createjobdescriptionsearchembedurl)
- [createOrganization](AffindaAPI.md#createorganization)
- [createResthookSubscription](AffindaAPI.md#createresthooksubscription)
- [createResumeSearch](AffindaAPI.md#createresumesearch)
- [createResumeSearchEmbedUrl](AffindaAPI.md#createresumesearchembedurl)
- [createTag](AffindaAPI.md#createtag)
- [createWorkspace](AffindaAPI.md#createworkspace)
- [createWorkspaceMembership](AffindaAPI.md#createworkspacemembership)
- [deleteCollection](AffindaAPI.md#deletecollection)
- [deleteDataPoint](AffindaAPI.md#deletedatapoint)
- [deleteDocument](AffindaAPI.md#deletedocument)
- [deleteExtractor](AffindaAPI.md#deleteextractor)
- [deleteIndex](AffindaAPI.md#deleteindex)
- [deleteIndexDocument](AffindaAPI.md#deleteindexdocument)
- [deleteInvitation](AffindaAPI.md#deleteinvitation)
- [deleteOrganization](AffindaAPI.md#deleteorganization)
- [deleteOrganizationMembership](AffindaAPI.md#deleteorganizationmembership)
- [deleteResthookSubscription](AffindaAPI.md#deleteresthooksubscription)
- [deleteTag](AffindaAPI.md#deletetag)
- [deleteWorkspace](AffindaAPI.md#deleteworkspace)
- [deleteWorkspaceMembership](AffindaAPI.md#deleteworkspacemembership)
- [getAllCollections](AffindaAPI.md#getallcollections)
- [getAllDataPoints](AffindaAPI.md#getalldatapoints)
- [getAllDocuments](AffindaAPI.md#getalldocuments)
- [getAllExtractors](AffindaAPI.md#getallextractors)
- [getAllIndexDocuments](AffindaAPI.md#getallindexdocuments)
- [getAllIndexes](AffindaAPI.md#getallindexes)
- [getAllInvitations](AffindaAPI.md#getallinvitations)
- [getAllOrganizationMemberships](AffindaAPI.md#getallorganizationmemberships)
- [getAllOrganizations](AffindaAPI.md#getallorganizations)
- [getAllResthookSubscriptions](AffindaAPI.md#getallresthooksubscriptions)
- [getAllTags](AffindaAPI.md#getalltags)
- [getAllWorkspaceMemberships](AffindaAPI.md#getallworkspacememberships)
- [getAllWorkspaces](AffindaAPI.md#getallworkspaces)
- [getCollection](AffindaAPI.md#getcollection)
- [getDataPoint](AffindaAPI.md#getdatapoint)
- [getDataPointChoices](AffindaAPI.md#getdatapointchoices)
- [getDocument](AffindaAPI.md#getdocument)
- [getExtractor](AffindaAPI.md#getextractor)
- [getInvitation](AffindaAPI.md#getinvitation)
- [getInvitationByToken](AffindaAPI.md#getinvitationbytoken)
- [getJobDescriptionSearchConfig](AffindaAPI.md#getjobdescriptionsearchconfig)
- [getJobDescriptionSearchDetail](AffindaAPI.md#getjobdescriptionsearchdetail)
- [getOrganization](AffindaAPI.md#getorganization)
- [getOrganizationMembership](AffindaAPI.md#getorganizationmembership)
- [getResthookSubscription](AffindaAPI.md#getresthooksubscription)
- [getResumeSearchConfig](AffindaAPI.md#getresumesearchconfig)
- [getResumeSearchDetail](AffindaAPI.md#getresumesearchdetail)
- [getResumeSearchMatch](AffindaAPI.md#getresumesearchmatch)
- [getResumeSearchSuggestionJobTitle](AffindaAPI.md#getresumesearchsuggestionjobtitle)
- [getResumeSearchSuggestionSkill](AffindaAPI.md#getresumesearchsuggestionskill)
- [getTag](AffindaAPI.md#gettag)
- [getWorkspace](AffindaAPI.md#getworkspace)
- [getWorkspaceMembership](AffindaAPI.md#getworkspacemembership)
- [listOccupationGroups](AffindaAPI.md#listoccupationgroups)
- [respondToInvitation](AffindaAPI.md#respondtoinvitation)
- [sendOperationRequest](AffindaAPI.md#sendoperationrequest)
- [sendRequest](AffindaAPI.md#sendrequest)
- [updateCollection](AffindaAPI.md#updatecollection)
- [updateDataPoint](AffindaAPI.md#updatedatapoint)
- [updateDocument](AffindaAPI.md#updatedocument)
- [updateExtractor](AffindaAPI.md#updateextractor)
- [updateInvitation](AffindaAPI.md#updateinvitation)
- [updateJobDescriptionSearchConfig](AffindaAPI.md#updatejobdescriptionsearchconfig)
- [updateOrganization](AffindaAPI.md#updateorganization)
- [updateOrganizationMembership](AffindaAPI.md#updateorganizationmembership)
- [updateResthookSubscription](AffindaAPI.md#updateresthooksubscription)
- [updateResumeSearchConfig](AffindaAPI.md#updateresumesearchconfig)
- [updateTag](AffindaAPI.md#updatetag)
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

### createCollection

▸ **createCollection**(`body`, `options?`): `Promise`<[`Collection`](../interfaces/Collection.md)\>

Create a collection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`CollectionCreate`](../interfaces/CollectionCreate.md) |  |
| `options?` | [`AffindaAPICreateCollectionOptionalParams`](../interfaces/AffindaAPICreateCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Collection`](../interfaces/Collection.md)\>

___

### createDataPoint

▸ **createDataPoint**(`options?`): `Promise`<[`DataPoint`](../interfaces/DataPoint.md)\>

Create a custom data point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateDataPointOptionalParams`](../interfaces/AffindaAPICreateDataPointOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`DataPoint`](../interfaces/DataPoint.md)\>

___

### createDocument

▸ **createDocument**(`options?`): `Promise`<[`DocumentUnion`](../modules.md#documentunion)\>

Uploads a document for parsing. When successful, returns an `identifier` in the response for
subsequent use with the [/documents/{identifier}](#get-/documents/-identifier-) endpoint to check
processing status and retrieve results.<br/>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateDocumentOptionalParams`](../interfaces/AffindaAPICreateDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`DocumentUnion`](../modules.md#documentunion)\>

___

### createExtractor

▸ **createExtractor**(`options?`): `Promise`<[`Extractor`](../interfaces/Extractor.md)\>

Create a custom extractor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateExtractorOptionalParams`](../interfaces/AffindaAPICreateExtractorOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Extractor`](../interfaces/Extractor.md)\>

___

### createIndex

▸ **createIndex**(`options?`): `Promise`<[`Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema.md)\>

Create an index for the search tool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPICreateIndexOptionalParams`](../interfaces/AffindaAPICreateIndexOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema`](../interfaces/Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema.md)\>

___

### createIndexDocument

▸ **createIndexDocument**(`name`, `body`, `options?`): `Promise`<[`PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema`](../interfaces/PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema.md)\>

Create an indexed document for the search tool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `body` | [`PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema`](../interfaces/PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema.md) | Document to index |
| `options?` | [`AffindaAPICreateIndexDocumentOptionalParams`](../interfaces/AffindaAPICreateIndexDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema`](../interfaces/PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema.md)\>

___

### createInvitation

▸ **createInvitation**(`body`, `options?`): `Promise`<[`Invitation`](../interfaces/Invitation.md)\>

Create a new invitation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`InvitationCreate`](../interfaces/InvitationCreate.md) | Invitation to create. |
| `options?` | [`AffindaAPICreateInvitationOptionalParams`](../interfaces/AffindaAPICreateInvitationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Invitation`](../interfaces/Invitation.md)\>

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

### createOrganization

▸ **createOrganization**(`name`, `options?`): `Promise`<[`Organization`](../interfaces/Organization.md)\>

Create a new organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` |  |
| `options?` | [`AffindaAPICreateOrganizationOptionalParams`](../interfaces/AffindaAPICreateOrganizationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Organization`](../interfaces/Organization.md)\>

___

### createResthookSubscription

▸ **createResthookSubscription**(`body`, `options?`): `Promise`<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

Create a resthook subscriptions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ResthookSubscriptionCreate`](../interfaces/ResthookSubscriptionCreate.md) |  |
| `options?` | [`AffindaAPICreateResthookSubscriptionOptionalParams`](../interfaces/AffindaAPICreateResthookSubscriptionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

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

### createTag

▸ **createTag**(`body`, `options?`): `Promise`<[`Tag`](../interfaces/Tag.md)\>

Create a tag

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`TagCreate`](../interfaces/TagCreate.md) |  |
| `options?` | [`AffindaAPICreateTagOptionalParams`](../interfaces/AffindaAPICreateTagOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Tag`](../interfaces/Tag.md)\>

___

### createWorkspace

▸ **createWorkspace**(`body`, `options?`): `Promise`<[`Workspace`](../interfaces/Workspace.md)\>

Create a workspace

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`WorkspaceCreate`](../interfaces/WorkspaceCreate.md) | Workspace to create |
| `options?` | [`AffindaAPICreateWorkspaceOptionalParams`](../interfaces/AffindaAPICreateWorkspaceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Workspace`](../interfaces/Workspace.md)\>

___

### createWorkspaceMembership

▸ **createWorkspaceMembership**(`body`, `options?`): `Promise`<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

Create a workspace membership.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`WorkspaceMembershipCreate`](../interfaces/WorkspaceMembershipCreate.md) |  |
| `options?` | [`AffindaAPICreateWorkspaceMembershipOptionalParams`](../interfaces/AffindaAPICreateWorkspaceMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

___

### deleteCollection

▸ **deleteCollection**(`identifier`, `options?`): `Promise`<`void`\>

Deletes the specified collection from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Collection's identifier |
| `options?` | [`AffindaAPIDeleteCollectionOptionalParams`](../interfaces/AffindaAPIDeleteCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteDataPoint

▸ **deleteDataPoint**(`identifier`, `options?`): `Promise`<`void`\>

Deletes the specified data point from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | DataPoint's identifier |
| `options?` | [`AffindaAPIDeleteDataPointOptionalParams`](../interfaces/AffindaAPIDeleteDataPointOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteDocument

▸ **deleteDocument**(`identifier`, `options?`): `Promise`<`void`\>

Deletes the specified document from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document's identifier |
| `options?` | [`AffindaAPIDeleteDocumentOptionalParams`](../interfaces/AffindaAPIDeleteDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteExtractor

▸ **deleteExtractor**(`identifier`, `options?`): `Promise`<`void`\>

Deletes the specified extractor from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Extractor's identifier |
| `options?` | [`AffindaAPIDeleteExtractorOptionalParams`](../interfaces/AffindaAPIDeleteExtractorOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

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

### deleteInvitation

▸ **deleteInvitation**(`identifier`, `options?`): `Promise`<`void`\>

Delete the specified invitation from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Invitation identifier. |
| `options?` | [`AffindaAPIDeleteInvitationOptionalParams`](../interfaces/AffindaAPIDeleteInvitationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteOrganization

▸ **deleteOrganization**(`identifier`, `options?`): `Promise`<`void`\>

Delete the specified organization from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Organization identifier. |
| `options?` | [`AffindaAPIDeleteOrganizationOptionalParams`](../interfaces/AffindaAPIDeleteOrganizationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteOrganizationMembership

▸ **deleteOrganizationMembership**(`identifier`, `options?`): `Promise`<`void`\>

The admin users can use this endpoint to remove member from their organization. Other users can also
use this to leave their organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Membership identifier. |
| `options?` | [`AffindaAPIDeleteOrganizationMembershipOptionalParams`](../interfaces/AffindaAPIDeleteOrganizationMembershipOptionalParams.md) | The options parameters. |

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

### deleteTag

▸ **deleteTag**(`id`, `options?`): `Promise`<`void`\>

Deletes the specified tag from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Tag's ID |
| `options?` | [`AffindaAPIDeleteTagOptionalParams`](../interfaces/AffindaAPIDeleteTagOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteWorkspace

▸ **deleteWorkspace**(`identifier`, `options?`): `Promise`<`void`\>

Deletes the specified workspace from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace's identifier |
| `options?` | [`AffindaAPIDeleteWorkspaceOptionalParams`](../interfaces/AffindaAPIDeleteWorkspaceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### deleteWorkspaceMembership

▸ **deleteWorkspaceMembership**(`identifier`, `options?`): `Promise`<`void`\>

Remove an user from a workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace membership's identifier. |
| `options?` | [`AffindaAPIDeleteWorkspaceMembershipOptionalParams`](../interfaces/AffindaAPIDeleteWorkspaceMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<`void`\>

___

### getAllCollections

▸ **getAllCollections**(`workspace`, `options?`): `Promise`<[`AffindaAPIGetAllCollectionsResponse`](../modules.md#affindaapigetallcollectionsresponse)\>

Returns your collections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workspace` | `string` | Filter by workspace. |
| `options?` | [`AffindaAPIGetAllCollectionsOptionalParams`](../interfaces/AffindaAPIGetAllCollectionsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`AffindaAPIGetAllCollectionsResponse`](../modules.md#affindaapigetallcollectionsresponse)\>

___

### getAllDataPoints

▸ **getAllDataPoints**(`options?`): `Promise`<[`AffindaAPIGetAllDataPointsResponse`](../modules.md#affindaapigetalldatapointsresponse)\>

Returns your custom data points as well as Affinda's off-the-shelf data points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllDataPointsOptionalParams`](../interfaces/AffindaAPIGetAllDataPointsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`AffindaAPIGetAllDataPointsResponse`](../modules.md#affindaapigetalldatapointsresponse)\>

___

### getAllDocuments

▸ **getAllDocuments**(`options?`): `Promise`<[`PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsoxm5m7v3documentsgetresponses200contentapplicationjsonschema)\>

Returns all the document summaries for that user, limited to 300 per page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllDocumentsOptionalParams`](../interfaces/AffindaAPIGetAllDocumentsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsoxm5m7v3documentsgetresponses200contentapplicationjsonschema)\>

___

### getAllExtractors

▸ **getAllExtractors**(`organization`, `options?`): `Promise`<[`AffindaAPIGetAllExtractorsResponse`](../modules.md#affindaapigetallextractorsresponse)\>

Returns your custom extractors as well as Affinda's off-the-shelf extractors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `organization` | `string` | Filter by organization. |
| `options?` | [`AffindaAPIGetAllExtractorsOptionalParams`](../interfaces/AffindaAPIGetAllExtractorsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`AffindaAPIGetAllExtractorsResponse`](../modules.md#affindaapigetallextractorsresponse)\>

___

### getAllIndexDocuments

▸ **getAllIndexDocuments**(`name`, `options?`): `Promise`<[`PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the indexed documents for that index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Index name |
| `options?` | [`AffindaAPIGetAllIndexDocumentsOptionalParams`](../interfaces/AffindaAPIGetAllIndexDocumentsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllIndexes

▸ **getAllIndexes**(`options?`): `Promise`<[`PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the indexes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllIndexesOptionalParams`](../interfaces/AffindaAPIGetAllIndexesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema.md)\>

___

### getAllInvitations

▸ **getAllInvitations**(`options?`): `Promise`<[`Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema`](../modules.md#paths18wh2vcv3invitationsgetresponses200contentapplicationjsonschema)\>

Get list of all invitations you created or sent to you.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllInvitationsOptionalParams`](../interfaces/AffindaAPIGetAllInvitationsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema`](../modules.md#paths18wh2vcv3invitationsgetresponses200contentapplicationjsonschema)\>

___

### getAllOrganizationMemberships

▸ **getAllOrganizationMemberships**(`options?`): `Promise`<[`PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsq5os5rv3organizationmembershipsgetresponses200contentapplicationjsonschema)\>

Returns all the organization memberships

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllOrganizationMembershipsOptionalParams`](../interfaces/AffindaAPIGetAllOrganizationMembershipsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsq5os5rv3organizationmembershipsgetresponses200contentapplicationjsonschema)\>

___

### getAllOrganizations

▸ **getAllOrganizations**(`options?`): `Promise`<[`AffindaAPIGetAllOrganizationsResponse`](../modules.md#affindaapigetallorganizationsresponse)\>

Returns all the organizations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllOrganizationsOptionalParams`](../interfaces/AffindaAPIGetAllOrganizationsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`AffindaAPIGetAllOrganizationsResponse`](../modules.md#affindaapigetallorganizationsresponse)\>

___

### getAllResthookSubscriptions

▸ **getAllResthookSubscriptions**(`options?`): `Promise`<[`PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsvz5kj2v3resthooksubscriptionsgetresponses200contentapplicationjsonschema)\>

Returns your resthook subscriptions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllResthookSubscriptionsOptionalParams`](../interfaces/AffindaAPIGetAllResthookSubscriptionsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsvz5kj2v3resthooksubscriptionsgetresponses200contentapplicationjsonschema)\>

___

### getAllTags

▸ **getAllTags**(`options?`): `Promise`<[`AffindaAPIGetAllTagsResponse`](../modules.md#affindaapigetalltagsresponse)\>

Returns your tags.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllTagsOptionalParams`](../interfaces/AffindaAPIGetAllTagsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`AffindaAPIGetAllTagsResponse`](../modules.md#affindaapigetalltagsresponse)\>

___

### getAllWorkspaceMemberships

▸ **getAllWorkspaceMemberships**(`options?`): `Promise`<[`PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsz1juagv3workspacemembershipsgetresponses200contentapplicationjsonschema)\>

Returns the memberships of your workspaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AffindaAPIGetAllWorkspaceMembershipsOptionalParams`](../interfaces/AffindaAPIGetAllWorkspaceMembershipsOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsz1juagv3workspacemembershipsgetresponses200contentapplicationjsonschema)\>

___

### getAllWorkspaces

▸ **getAllWorkspaces**(`organization`, `options?`): `Promise`<[`AffindaAPIGetAllWorkspacesResponse`](../modules.md#affindaapigetallworkspacesresponse)\>

Returns your workspaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `organization` | `string` | Filter by organization. |
| `options?` | [`AffindaAPIGetAllWorkspacesOptionalParams`](../interfaces/AffindaAPIGetAllWorkspacesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`AffindaAPIGetAllWorkspacesResponse`](../modules.md#affindaapigetallworkspacesresponse)\>

___

### getCollection

▸ **getCollection**(`identifier`, `options?`): `Promise`<[`Collection`](../interfaces/Collection.md)\>

Return a specific collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Collection's identifier |
| `options?` | [`AffindaAPIGetCollectionOptionalParams`](../interfaces/AffindaAPIGetCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Collection`](../interfaces/Collection.md)\>

___

### getDataPoint

▸ **getDataPoint**(`identifier`, `options?`): `Promise`<[`DataPoint`](../interfaces/DataPoint.md)\>

Return a specific data point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Data point's identifier |
| `options?` | [`AffindaAPIGetDataPointOptionalParams`](../interfaces/AffindaAPIGetDataPointOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`DataPoint`](../interfaces/DataPoint.md)\>

___

### getDataPointChoices

▸ **getDataPointChoices**(`dataPoint`, `options?`): `Promise`<[`PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsmnwxgv3datapointchoicesgetresponses200contentapplicationjsonschema)\>

Returns available choices for a specific enum data point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dataPoint` | `string` | The data point to get choices for. |
| `options?` | [`AffindaAPIGetDataPointChoicesOptionalParams`](../interfaces/AffindaAPIGetDataPointChoicesOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema`](../modules.md#pathsmnwxgv3datapointchoicesgetresponses200contentapplicationjsonschema)\>

___

### getDocument

▸ **getDocument**(`identifier`, `options?`): `Promise`<[`DocumentUnion`](../modules.md#documentunion)\>

Return a specific document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document's identifier |
| `options?` | [`AffindaAPIGetDocumentOptionalParams`](../interfaces/AffindaAPIGetDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`DocumentUnion`](../modules.md#documentunion)\>

___

### getExtractor

▸ **getExtractor**(`identifier`, `options?`): `Promise`<[`Extractor`](../interfaces/Extractor.md)\>

Return a specific extractor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Extractor's identifier |
| `options?` | [`AffindaAPIGetExtractorOptionalParams`](../interfaces/AffindaAPIGetExtractorOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Extractor`](../interfaces/Extractor.md)\>

___

### getInvitation

▸ **getInvitation**(`identifier`, `options?`): `Promise`<[`Invitation`](../interfaces/Invitation.md)\>

Get detail of an invitation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Invitation identifier. |
| `options?` | [`AffindaAPIGetInvitationOptionalParams`](../interfaces/AffindaAPIGetInvitationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Invitation`](../interfaces/Invitation.md)\>

___

### getInvitationByToken

▸ **getInvitationByToken**(`token`, `options?`): `Promise`<[`Invitation`](../interfaces/Invitation.md)\>

Get detail of an invitation using a secret token. This allows users who have not registered/logged
in to view the invitation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | Invitation token. |
| `options?` | [`AffindaAPIGetInvitationByTokenOptionalParams`](../interfaces/AffindaAPIGetInvitationByTokenOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Invitation`](../interfaces/Invitation.md)\>

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

### getOrganization

▸ **getOrganization**(`identifier`, `options?`): `Promise`<[`Organization`](../interfaces/Organization.md)\>

Get detail of an organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Organization identifier. |
| `options?` | [`AffindaAPIGetOrganizationOptionalParams`](../interfaces/AffindaAPIGetOrganizationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Organization`](../interfaces/Organization.md)\>

___

### getOrganizationMembership

▸ **getOrganizationMembership**(`identifier`, `options?`): `Promise`<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

Get detail of an organization membership.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Membership identifier. |
| `options?` | [`AffindaAPIGetOrganizationMembershipOptionalParams`](../interfaces/AffindaAPIGetOrganizationMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

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

### getTag

▸ **getTag**(`id`, `options?`): `Promise`<[`Tag`](../interfaces/Tag.md)\>

Return a specific tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Tag's ID |
| `options?` | [`AffindaAPIGetTagOptionalParams`](../interfaces/AffindaAPIGetTagOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Tag`](../interfaces/Tag.md)\>

___

### getWorkspace

▸ **getWorkspace**(`identifier`, `options?`): `Promise`<[`Workspace`](../interfaces/Workspace.md)\>

Return a specific workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace's identifier |
| `options?` | [`AffindaAPIGetWorkspaceOptionalParams`](../interfaces/AffindaAPIGetWorkspaceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Workspace`](../interfaces/Workspace.md)\>

___

### getWorkspaceMembership

▸ **getWorkspaceMembership**(`identifier`, `options?`): `Promise`<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

Return a specific workspace membership.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace membership's identifier. |
| `options?` | [`AffindaAPIGetWorkspaceMembershipOptionalParams`](../interfaces/AffindaAPIGetWorkspaceMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

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

### respondToInvitation

▸ **respondToInvitation**(`token`, `body`, `options?`): `Promise`<[`Invitation`](../interfaces/Invitation.md)\>

Choose to accept or decline an invitation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | Invitation token. |
| `body` | [`InvitationResponse`](../interfaces/InvitationResponse.md) |  |
| `options?` | [`AffindaAPIRespondToInvitationOptionalParams`](../interfaces/AffindaAPIRespondToInvitationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Invitation`](../interfaces/Invitation.md)\>

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

### updateCollection

▸ **updateCollection**(`identifier`, `body`, `options?`): `Promise`<[`Collection`](../interfaces/Collection.md)\>

Update data of a collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Collection's identifier |
| `body` | [`CollectionUpdate`](../interfaces/CollectionUpdate.md) | Collection data to update |
| `options?` | [`AffindaAPIUpdateCollectionOptionalParams`](../interfaces/AffindaAPIUpdateCollectionOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Collection`](../interfaces/Collection.md)\>

___

### updateDataPoint

▸ **updateDataPoint**(`identifier`, `body`, `options?`): `Promise`<[`DataPoint`](../interfaces/DataPoint.md)\>

Update data of a data point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | DataPoint's identifier |
| `body` | [`DataPointUpdate`](../interfaces/DataPointUpdate.md) | Data point to update |
| `options?` | [`AffindaAPIUpdateDataPointOptionalParams`](../interfaces/AffindaAPIUpdateDataPointOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`DataPoint`](../interfaces/DataPoint.md)\>

___

### updateDocument

▸ **updateDocument**(`identifier`, `body`, `options?`): `Promise`<[`DocumentUnion`](../modules.md#documentunion)\>

Update file name, expiry time, or move to another collection, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Document's identifier |
| `body` | [`DocumentUpdate`](../interfaces/DocumentUpdate.md) | Document data to update |
| `options?` | [`AffindaAPIUpdateDocumentOptionalParams`](../interfaces/AffindaAPIUpdateDocumentOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`DocumentUnion`](../modules.md#documentunion)\>

___

### updateExtractor

▸ **updateExtractor**(`identifier`, `body`, `options?`): `Promise`<[`Extractor`](../interfaces/Extractor.md)\>

Update data of an extractor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Extractor's identifier |
| `body` | [`ExtractorUpdate`](../interfaces/ExtractorUpdate.md) | Extractor data to update |
| `options?` | [`AffindaAPIUpdateExtractorOptionalParams`](../interfaces/AffindaAPIUpdateExtractorOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Extractor`](../interfaces/Extractor.md)\>

___

### updateInvitation

▸ **updateInvitation**(`identifier`, `body`, `options?`): `Promise`<[`Invitation`](../interfaces/Invitation.md)\>

Update the detail of an invitation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Invitation identifier. |
| `body` | [`InvitationUpdate`](../interfaces/InvitationUpdate.md) |  |
| `options?` | [`AffindaAPIUpdateInvitationOptionalParams`](../interfaces/AffindaAPIUpdateInvitationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Invitation`](../interfaces/Invitation.md)\>

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

### updateOrganization

▸ **updateOrganization**(`identifier`, `options?`): `Promise`<[`Organization`](../interfaces/Organization.md)\>

Update the detail of an organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Organization identifier. |
| `options?` | [`AffindaAPIUpdateOrganizationOptionalParams`](../interfaces/AffindaAPIUpdateOrganizationOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Organization`](../interfaces/Organization.md)\>

___

### updateOrganizationMembership

▸ **updateOrganizationMembership**(`identifier`, `body`, `options?`): `Promise`<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

The admin users can use this endpoint to update the role of the members within their organization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Membership identifier. |
| `body` | [`OrganizationMembershipUpdate`](../interfaces/OrganizationMembershipUpdate.md) |  |
| `options?` | [`AffindaAPIUpdateOrganizationMembershipOptionalParams`](../interfaces/AffindaAPIUpdateOrganizationMembershipOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

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

___

### updateTag

▸ **updateTag**(`id`, `body`, `options?`): `Promise`<[`Tag`](../interfaces/Tag.md)\>

Update data of an tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Tag's ID |
| `body` | [`TagUpdate`](../interfaces/TagUpdate.md) | Tag data to update |
| `options?` | [`AffindaAPIUpdateTagOptionalParams`](../interfaces/AffindaAPIUpdateTagOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Tag`](../interfaces/Tag.md)\>

___

### updateWorkspace

▸ **updateWorkspace**(`identifier`, `body`, `options?`): `Promise`<[`Workspace`](../interfaces/Workspace.md)\>

Update a workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | Workspace's identifier |
| `body` | [`WorkspaceUpdate`](../interfaces/WorkspaceUpdate.md) | Workspace data to update |
| `options?` | [`AffindaAPIUpdateWorkspaceOptionalParams`](../interfaces/AffindaAPIUpdateWorkspaceOptionalParams.md) | The options parameters. |

#### Returns

`Promise`<[`Workspace`](../interfaces/Workspace.md)\>
