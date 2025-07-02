[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / AffindaAPI

# Class: AffindaAPI

## Extends

- `ServiceClient`

## Constructors

### Constructor

> **new AffindaAPI**(`credentials`, `options?`): `AffindaAPI`

Initializes a new instance of the AffindaAPI class.

#### Parameters

##### credentials

`TokenCredential`

Subscription credentials which uniquely identify client subscription.

##### options?

[`AffindaAPIOptionalParams`](../interfaces/AffindaAPIOptionalParams.md)

The parameter options

#### Returns

`AffindaAPI`

#### Overrides

`coreClient.ServiceClient.constructor`

## Properties

### pipeline

> `readonly` **pipeline**: `Pipeline`

The pipeline used by this client to make requests

#### Inherited from

`coreClient.ServiceClient.pipeline`

***

### region

> **region**: `string`

## Methods

### activateResthookSubscription()

> **activateResthookSubscription**(`xHookSecret`, `options?`): `Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

After creating a subscription, we'll send a POST request to your target URL with a `X-Hook-Secret`
header. <br />
You should response to this with a 200 status code, and use the value of the `X-Hook-Secret` header
that you received to activate the subscription using this endpoint.

#### Parameters

##### xHookSecret

`string`

The secret received when creating a subscription.

##### options?

[`ActivateResthookSubscriptionOptionalParams`](../interfaces/ActivateResthookSubscriptionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

***

### addMappingDataSourceValue()

> **addMappingDataSourceValue**(`identifier`, `body`, `options?`): `Promise`\<[`AddMappingDataSourceValueResponse`](../type-aliases/AddMappingDataSourceValueResponse.md)\>

Adds a value to a mapping data source

#### Parameters

##### identifier

`string`

Mapping data source's identifier

##### body

`Record`\<`string`, `unknown`\>

Any object

##### options?

[`AddMappingDataSourceValueOptionalParams`](../interfaces/AddMappingDataSourceValueOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`AddMappingDataSourceValueResponse`](../type-aliases/AddMappingDataSourceValueResponse.md)\>

***

### batchAddTag()

> **batchAddTag**(`body`, `options?`): `Promise`\<`void`\>

Add a tag to documents.
Tags are used to group documents together.
Tags can be used to filter documents.

#### Parameters

##### body

[`BatchAddTagRequest`](../interfaces/BatchAddTagRequest.md)

Specify the tag and the documents to tag

##### options?

[`BatchAddTagOptionalParams`](../interfaces/BatchAddTagOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### batchCreateAnnotations()

> **batchCreateAnnotations**(`body`, `options?`): `Promise`\<[`BatchCreateAnnotationsResponse`](../type-aliases/BatchCreateAnnotationsResponse.md)\>

Batch create annotations

#### Parameters

##### body

[`AnnotationCreate`](../interfaces/AnnotationCreate.md)[]

Array of AnnotationCreate

##### options?

[`BatchCreateAnnotationsOptionalParams`](../interfaces/BatchCreateAnnotationsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`BatchCreateAnnotationsResponse`](../type-aliases/BatchCreateAnnotationsResponse.md)\>

***

### batchCreateValidationResults()

> **batchCreateValidationResults**(`body`, `options?`): `Promise`\<[`BatchCreateValidationResultsResponse`](../type-aliases/BatchCreateValidationResultsResponse.md)\>

Batch create validation results.

#### Parameters

##### body

[`ValidationResultCreate`](../interfaces/ValidationResultCreate.md)[]

Array of ValidationResultCreate

##### options?

[`BatchCreateValidationResultsOptionalParams`](../interfaces/BatchCreateValidationResultsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`BatchCreateValidationResultsResponse`](../type-aliases/BatchCreateValidationResultsResponse.md)\>

***

### batchDeleteAnnotations()

> **batchDeleteAnnotations**(`body`, `options?`): `Promise`\<[`BatchDeleteAnnotationsResponse`](../interfaces/BatchDeleteAnnotationsResponse.md)\>

Batch delete annotations

#### Parameters

##### body

`number`[]

Array of annotation IDs to be deleted

##### options?

[`BatchDeleteAnnotationsOptionalParams`](../interfaces/BatchDeleteAnnotationsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`BatchDeleteAnnotationsResponse`](../interfaces/BatchDeleteAnnotationsResponse.md)\>

***

### batchDeleteValidationResults()

> **batchDeleteValidationResults**(`body`, `options?`): `Promise`\<`void`\>

Batch delete validation results

#### Parameters

##### body

[`BatchDeleteValidationResultsRequest`](../interfaces/BatchDeleteValidationResultsRequest.md)

##### options?

[`BatchDeleteValidationResultsOptionalParams`](../interfaces/BatchDeleteValidationResultsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### batchRemoveTag()

> **batchRemoveTag**(`body`, `options?`): `Promise`\<`void`\>

Remove a tag from documents.

#### Parameters

##### body

[`BatchRemoveTagRequest`](../interfaces/BatchRemoveTagRequest.md)

Specify the tag and the documents to remove the tag from

##### options?

[`BatchRemoveTagOptionalParams`](../interfaces/BatchRemoveTagOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### batchUpdateAnnotations()

> **batchUpdateAnnotations**(`body`, `options?`): `Promise`\<[`BatchUpdateAnnotationsResponse`](../type-aliases/BatchUpdateAnnotationsResponse.md)\>

Batch update annotations

#### Parameters

##### body

[`AnnotationBatchUpdate`](../interfaces/AnnotationBatchUpdate.md)[]

Array of AnnotationBatchUpdate

##### options?

[`BatchUpdateAnnotationsOptionalParams`](../interfaces/BatchUpdateAnnotationsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`BatchUpdateAnnotationsResponse`](../type-aliases/BatchUpdateAnnotationsResponse.md)\>

***

### createAnnotation()

> **createAnnotation**(`body`, `options?`): `Promise`\<[`AnnotationWithValidationResults`](../interfaces/AnnotationWithValidationResults.md)\>

Create a annotation

#### Parameters

##### body

[`AnnotationCreate`](../interfaces/AnnotationCreate.md)

##### options?

[`CreateAnnotationOptionalParams`](../interfaces/CreateAnnotationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`AnnotationWithValidationResults`](../interfaces/AnnotationWithValidationResults.md)\>

***

### createApiUser()

> **createApiUser**(`body`, `options?`): `Promise`\<[`ApiUserWithKey`](../interfaces/ApiUserWithKey.md)\>

Create an API user

#### Parameters

##### body

[`ApiUserCreate`](../interfaces/ApiUserCreate.md)

##### options?

[`CreateApiUserOptionalParams`](../interfaces/CreateApiUserOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ApiUserWithKey`](../interfaces/ApiUserWithKey.md)\>

***

### createCollection()

> **createCollection**(`body`, `options?`): `Promise`\<[`Collection`](../interfaces/Collection.md)\>

Create a collection

#### Parameters

##### body

[`CollectionCreate`](../interfaces/CollectionCreate.md)

##### options?

[`CreateCollectionOptionalParams`](../interfaces/CreateCollectionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Collection`](../interfaces/Collection.md)\>

***

### createDataFieldForCollection()

> **createDataFieldForCollection**(`identifier`, `body`, `options?`): `Promise`\<[`DataField`](../interfaces/DataField.md)\>

Create data field for a collection along with a new data point.

#### Parameters

##### identifier

`string`

Collection's identifier

##### body

[`DataFieldCreate`](../interfaces/DataFieldCreate.md)

The data field and data point to be created.

##### options?

[`CreateDataFieldForCollectionOptionalParams`](../interfaces/CreateDataFieldForCollectionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DataField`](../interfaces/DataField.md)\>

***

### createDataPoint()

> **createDataPoint**(`options?`): `Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

Create a custom data point.

#### Parameters

##### options?

[`CreateDataPointOptionalParams`](../interfaces/CreateDataPointOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

***

### createDataPointChoice()

> **createDataPointChoice**(`options?`): `Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

Create a custom data point choice.

#### Parameters

##### options?

[`CreateDataPointChoiceOptionalParams`](../interfaces/CreateDataPointChoiceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

***

### createDocument()

> **createDocument**(`options?`): `Promise`\<[`DocumentUnion`](../type-aliases/DocumentUnion.md)\>

Uploads a document for parsing. When successful, returns an `identifier` in the response for
subsequent use with the [/documents/{identifier}](#get-/v3/documents/-identifier-) endpoint to check
processing status and retrieve results.<br/>

#### Parameters

##### options?

[`CreateDocumentOptionalParams`](../interfaces/CreateDocumentOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DocumentUnion`](../type-aliases/DocumentUnion.md)\>

***

### createDocumentType()

> **createDocumentType**(`body`, `options?`): `Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

Create a new document type in the specified organization.

#### Parameters

##### body

[`DocumentTypeCreate`](../interfaces/DocumentTypeCreate.md)

##### options?

[`CreateDocumentTypeOptionalParams`](../interfaces/CreateDocumentTypeOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

***

### createExtractor()

> **createExtractor**(`options?`): `Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

Create a custom extractor.

#### Parameters

##### options?

[`CreateExtractorOptionalParams`](../interfaces/CreateExtractorOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

***

### createIndex()

> **createIndex**(`body`, `options?`): `Promise`\<[`Index`](../interfaces/Index.md)\>

Create an index for the search tool

#### Parameters

##### body

[`IndexCreate`](../interfaces/IndexCreate.md)

Index to create

##### options?

[`CreateIndexOptionalParams`](../interfaces/CreateIndexOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Index`](../interfaces/Index.md)\>

***

### createIndexDocument()

> **createIndexDocument**(`name`, `body`, `options?`): `Promise`\<[`PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema`](../interfaces/PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema.md)\>

Create an indexed document for the search tool

#### Parameters

##### name

`string`

Index name

##### body

[`PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema`](../interfaces/PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema.md)

Document to index

##### options?

[`CreateIndexDocumentOptionalParams`](../interfaces/CreateIndexDocumentOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema`](../interfaces/PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema.md)\>

***

### createInvitation()

> **createInvitation**(`body`, `options?`): `Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

Create a new invitation.

#### Parameters

##### body

[`InvitationCreate`](../interfaces/InvitationCreate.md)

Invitation to create.

##### options?

[`CreateInvitationOptionalParams`](../interfaces/CreateInvitationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

***

### createJobDescriptionSearch()

> **createJobDescriptionSearch**(`body`, `options?`): `Promise`\<[`JobDescriptionSearch`](../interfaces/JobDescriptionSearch.md)\>

Searches through parsed job descriptions. You can search with custom criterias or a resume.

#### Parameters

##### body

Search parameters

`null` | [`JobDescriptionSearchParameters`](../interfaces/JobDescriptionSearchParameters.md)

##### options?

[`CreateJobDescriptionSearchOptionalParams`](../interfaces/CreateJobDescriptionSearchOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`JobDescriptionSearch`](../interfaces/JobDescriptionSearch.md)\>

***

### createJobDescriptionSearchEmbedUrl()

> **createJobDescriptionSearchEmbedUrl**(`options?`): `Promise`\<[`JobDescriptionSearchEmbed`](../interfaces/JobDescriptionSearchEmbed.md)\>

Create and return a signed URL of the job description search tool which then can be embedded on a
web page. An optional parameter `config_override` can be passed to override the user-level
configurations of the embeddable search tool.

#### Parameters

##### options?

[`CreateJobDescriptionSearchEmbedUrlOptionalParams`](../interfaces/CreateJobDescriptionSearchEmbedUrlOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`JobDescriptionSearchEmbed`](../interfaces/JobDescriptionSearchEmbed.md)\>

***

### createMapping()

> **createMapping**(`body`, `options?`): `Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

Create a custom mapping.

#### Parameters

##### body

[`MappingCreate`](../interfaces/MappingCreate.md)

##### options?

[`CreateMappingOptionalParams`](../interfaces/CreateMappingOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

***

### createMappingDataSource()

> **createMappingDataSource**(`body`, `options?`): `Promise`\<[`MappingDataSource`](../interfaces/MappingDataSource.md)\>

Create a custom mapping data source.

#### Parameters

##### body

[`MappingDataSourceCreate`](../interfaces/MappingDataSourceCreate.md)

A mapping data source is used to map from raw data found by our AI models to records in
            your database.

##### options?

[`CreateMappingDataSourceOptionalParams`](../interfaces/CreateMappingDataSourceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`MappingDataSource`](../interfaces/MappingDataSource.md)\>

***

### createOrganization()

> **createOrganization**(`name`, `options?`): `Promise`\<[`Organization`](../interfaces/Organization.md)\>

Create a new organization.

#### Parameters

##### name

`string`

##### options?

[`CreateOrganizationOptionalParams`](../interfaces/CreateOrganizationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Organization`](../interfaces/Organization.md)\>

***

### createResthookSubscription()

> **createResthookSubscription**(`body`, `options?`): `Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

After a subscription is successfully created, we'll send a POST request to your target URL with a
`X-Hook-Secret` header. <br />
You need to response to this request with a 200 status code to confirm your subscribe intention. <br
/>
Then, you need to use the `X-Hook-Secret` to activate the subscription using the
[/resthook_subscriptions/activate](#post-/v3/resthook_subscriptions/activate) endpoint. <br />
For more information and detailed instructions, [see our webhooks documentation
here.](https://docs.affinda.com/docs/webhooks)

#### Parameters

##### body

[`ResthookSubscriptionCreate`](../interfaces/ResthookSubscriptionCreate.md)

##### options?

[`CreateResthookSubscriptionOptionalParams`](../interfaces/CreateResthookSubscriptionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

***

### createResumeSearch()

> **createResumeSearch**(`body`, `options?`): `Promise`\<[`ResumeSearch`](../interfaces/ResumeSearch.md)\>

Searches through parsed resumes. Users have 3 options to create a search:<br /><br /> 1.	Match to a
job description - a parsed job description is used to find candidates that suit it<br /> 2.	Match to
a resume - a parsed resume is used to find other candidates that have similar attributes<br /> 3.
Search using custom criteria<br /><br /> Users should only populate 1 of jobDescription, resume or
the custom criteria.

#### Parameters

##### body

[`ResumeSearchParameters`](../interfaces/ResumeSearchParameters.md)

Search parameters

##### options?

[`CreateResumeSearchOptionalParams`](../interfaces/CreateResumeSearchOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ResumeSearch`](../interfaces/ResumeSearch.md)\>

***

### createResumeSearchEmbedUrl()

> **createResumeSearchEmbedUrl**(`options?`): `Promise`\<[`ResumeSearchEmbed`](../interfaces/ResumeSearchEmbed.md)\>

Create and return a signed URL of the resume search tool which then can be embedded on a web page.
An optional parameter `config_override` can be passed to override the user-level configurations of
the embeddable resume search tool.

#### Parameters

##### options?

[`CreateResumeSearchEmbedUrlOptionalParams`](../interfaces/CreateResumeSearchEmbedUrlOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ResumeSearchEmbed`](../interfaces/ResumeSearchEmbed.md)\>

***

### createTag()

> **createTag**(`body`, `options?`): `Promise`\<[`Tag`](../interfaces/Tag.md)\>

Create a tag

#### Parameters

##### body

[`TagCreate`](../interfaces/TagCreate.md)

##### options?

[`CreateTagOptionalParams`](../interfaces/CreateTagOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)\>

***

### createValidationResult()

> **createValidationResult**(`body`, `options?`): `Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

Create a validation result.

#### Parameters

##### body

[`ValidationResultCreate`](../interfaces/ValidationResultCreate.md)

##### options?

[`CreateValidationResultOptionalParams`](../interfaces/CreateValidationResultOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

***

### createWorkspace()

> **createWorkspace**(`body`, `options?`): `Promise`\<[`Workspace`](../interfaces/Workspace.md)\>

Create a workspace

#### Parameters

##### body

[`WorkspaceCreate`](../interfaces/WorkspaceCreate.md)

Workspace to create

##### options?

[`CreateWorkspaceOptionalParams`](../interfaces/CreateWorkspaceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Workspace`](../interfaces/Workspace.md)\>

***

### createWorkspaceMembership()

> **createWorkspaceMembership**(`body`, `options?`): `Promise`\<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

Create a workspace membership.

#### Parameters

##### body

[`WorkspaceMembershipCreate`](../interfaces/WorkspaceMembershipCreate.md)

##### options?

[`CreateWorkspaceMembershipOptionalParams`](../interfaces/CreateWorkspaceMembershipOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

***

### deleteAnnotation()

> **deleteAnnotation**(`id`, `options?`): `Promise`\<[`AnotationDelete`](../interfaces/AnotationDelete.md)\>

Deletes the specified annotation from the database.

#### Parameters

##### id

`number`

Annotation's ID

##### options?

[`DeleteAnnotationOptionalParams`](../interfaces/DeleteAnnotationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`AnotationDelete`](../interfaces/AnotationDelete.md)\>

***

### deleteApiUser()

> **deleteApiUser**(`id`, `options?`): `Promise`\<`void`\>

Deletes the specified API user from the database.

#### Parameters

##### id

`number`

API user's ID

##### options?

[`DeleteApiUserOptionalParams`](../interfaces/DeleteApiUserOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteCollection()

> **deleteCollection**(`identifier`, `options?`): `Promise`\<`void`\>

Deletes the specified collection from the database.

#### Parameters

##### identifier

`string`

Collection's identifier

##### options?

[`DeleteCollectionOptionalParams`](../interfaces/DeleteCollectionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteDataPoint()

> **deleteDataPoint**(`identifier`, `options?`): `Promise`\<`void`\>

Deletes the specified data point from the database.

#### Parameters

##### identifier

`string`

DataPoint's identifier

##### options?

[`DeleteDataPointOptionalParams`](../interfaces/DeleteDataPointOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteDataPointChoice()

> **deleteDataPointChoice**(`id`, `options?`): `Promise`\<`void`\>

Deletes the specified data point choice from the database.

#### Parameters

##### id

`number`

Data point choice's ID

##### options?

[`DeleteDataPointChoiceOptionalParams`](../interfaces/DeleteDataPointChoiceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteDocument()

> **deleteDocument**(`identifier`, `options?`): `Promise`\<`void`\>

Deletes the specified document from the database.

#### Parameters

##### identifier

`string`

Document's identifier

##### options?

[`DeleteDocumentOptionalParams`](../interfaces/DeleteDocumentOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteDocumentType()

> **deleteDocumentType**(`identifier`, `options?`): `Promise`\<`void`\>

Delete a document type.

#### Parameters

##### identifier

`string`

Document type identifier

##### options?

[`DeleteDocumentTypeOptionalParams`](../interfaces/DeleteDocumentTypeOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteExtractor()

> **deleteExtractor**(`identifier`, `options?`): `Promise`\<`void`\>

Deletes the specified extractor from the database.

#### Parameters

##### identifier

`string`

Extractor's identifier

##### options?

[`DeleteExtractorOptionalParams`](../interfaces/DeleteExtractorOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteIndex()

> **deleteIndex**(`name`, `options?`): `Promise`\<`void`\>

Deletes the specified index from the database

#### Parameters

##### name

`string`

Index name

##### options?

[`DeleteIndexOptionalParams`](../interfaces/DeleteIndexOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteIndexDocument()

> **deleteIndexDocument**(`name`, `identifier`, `options?`): `Promise`\<`void`\>

Delete the specified indexed document from the database

#### Parameters

##### name

`string`

Index name

##### identifier

`string`

Document identifier

##### options?

[`DeleteIndexDocumentOptionalParams`](../interfaces/DeleteIndexDocumentOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteInvitation()

> **deleteInvitation**(`identifier`, `options?`): `Promise`\<`void`\>

Delete the specified invitation from the database.

#### Parameters

##### identifier

`string`

Invitation identifier.

##### options?

[`DeleteInvitationOptionalParams`](../interfaces/DeleteInvitationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteMapping()

> **deleteMapping**(`identifier`, `options?`): `Promise`\<`void`\>

Delete the specified mapping from the database.

#### Parameters

##### identifier

`string`

Mapping's identifier

##### options?

[`DeleteMappingOptionalParams`](../interfaces/DeleteMappingOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteMappingDataSource()

> **deleteMappingDataSource**(`identifier`, `options?`): `Promise`\<`void`\>

Delete the specified mapping data source from the database.

#### Parameters

##### identifier

`string`

Mapping data source's identifier

##### options?

[`DeleteMappingDataSourceOptionalParams`](../interfaces/DeleteMappingDataSourceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteMappingDataSourceValue()

> **deleteMappingDataSourceValue**(`identifier`, `value`, `options?`): `Promise`\<`void`\>

Delete the specified mapping data source value from the database.

#### Parameters

##### identifier

`string`

Mapping data source's identifier

##### value

`string`

Mapping Data Source Value's value

##### options?

[`DeleteMappingDataSourceValueOptionalParams`](../interfaces/DeleteMappingDataSourceValueOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteOrganization()

> **deleteOrganization**(`identifier`, `options?`): `Promise`\<`void`\>

Delete the specified organization from the database.

#### Parameters

##### identifier

`string`

Organization identifier.

##### options?

[`DeleteOrganizationOptionalParams`](../interfaces/DeleteOrganizationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteOrganizationMembership()

> **deleteOrganizationMembership**(`identifier`, `options?`): `Promise`\<`void`\>

The admin users can use this endpoint to remove member from their organization. Other users can also
use this to leave their organization.

#### Parameters

##### identifier

`string`

Membership identifier.

##### options?

[`DeleteOrganizationMembershipOptionalParams`](../interfaces/DeleteOrganizationMembershipOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteResthookSubscription()

> **deleteResthookSubscription**(`id`, `options?`): `Promise`\<`void`\>

Deletes the specified resthook subscription from the database.

#### Parameters

##### id

`number`

ResthookSubscription's ID

##### options?

[`DeleteResthookSubscriptionOptionalParams`](../interfaces/DeleteResthookSubscriptionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteTag()

> **deleteTag**(`id`, `options?`): `Promise`\<`void`\>

Deletes the specified tag from the database.

#### Parameters

##### id

`number`

Tag's ID

##### options?

[`DeleteTagOptionalParams`](../interfaces/DeleteTagOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteValidationResult()

> **deleteValidationResult**(`id`, `options?`): `Promise`\<`void`\>

Remove validation result.

#### Parameters

##### id

`number`

Validation result's ID.

##### options?

[`DeleteValidationResultOptionalParams`](../interfaces/DeleteValidationResultOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteWorkspace()

> **deleteWorkspace**(`identifier`, `options?`): `Promise`\<`void`\>

Deletes the specified workspace from the database.

#### Parameters

##### identifier

`string`

Workspace's identifier

##### options?

[`DeleteWorkspaceOptionalParams`](../interfaces/DeleteWorkspaceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### deleteWorkspaceMembership()

> **deleteWorkspaceMembership**(`identifier`, `options?`): `Promise`\<`void`\>

Remove an user from a workspace.

#### Parameters

##### identifier

`string`

Workspace membership's identifier.

##### options?

[`DeleteWorkspaceMembershipOptionalParams`](../interfaces/DeleteWorkspaceMembershipOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### editDocumentPages()

> **editDocumentPages**(`identifier`, `body`, `options?`): `Promise`\<[`EditDocumentPagesResponse`](../type-aliases/EditDocumentPagesResponse.md)\>

Split / merge / rotate / delete pages of a document.
Documents with multiple pages can be splitted into multiple documents, or merged into one document.
Each page can also be rotated. Edit operations will trigger re-parsing of the documents involved.

#### Parameters

##### identifier

`string`

Document's identifier

##### body

[`DocumentEditRequest`](../interfaces/DocumentEditRequest.md)

Describe how the pages should be edited

##### options?

[`EditDocumentPagesOptionalParams`](../interfaces/EditDocumentPagesOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`EditDocumentPagesResponse`](../type-aliases/EditDocumentPagesResponse.md)\>

***

### getAllAnnotations()

> **getAllAnnotations**(`document`, `options?`): `Promise`\<[`Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema.md)\>

Returns your annotations.

#### Parameters

##### document

`string`

Filter by document.

##### options?

[`GetAllAnnotationsOptionalParams`](../interfaces/GetAllAnnotationsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema.md)\>

***

### getAllApiUsers()

> **getAllApiUsers**(`options?`): `Promise`\<[`Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema.md)\>

Returns your API users.

#### Parameters

##### options?

[`GetAllApiUsersOptionalParams`](../interfaces/GetAllApiUsersOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema.md)\>

***

### getAllCollections()

> **getAllCollections**(`workspace`, `options?`): `Promise`\<[`GetAllCollectionsResponse`](../type-aliases/GetAllCollectionsResponse.md)\>

Returns your collections.

#### Parameters

##### workspace

`string`

Filter by workspace.

##### options?

[`GetAllCollectionsOptionalParams`](../interfaces/GetAllCollectionsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetAllCollectionsResponse`](../type-aliases/GetAllCollectionsResponse.md)\>

***

### getAllDataPoints()

> **getAllDataPoints**(`options?`): `Promise`\<[`GetAllDataPointsResponse`](../type-aliases/GetAllDataPointsResponse.md)\>

Returns your custom data points as well as Affinda's off-the-shelf data points.

#### Parameters

##### options?

[`GetAllDataPointsOptionalParams`](../interfaces/GetAllDataPointsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetAllDataPointsResponse`](../type-aliases/GetAllDataPointsResponse.md)\>

***

### getAllDocuments()

> **getAllDocuments**(`options?`): `Promise`\<[`PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the document summaries for that user, limited to 300 per page.

#### Parameters

##### options?

[`GetAllDocumentsOptionalParams`](../interfaces/GetAllDocumentsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema.md)\>

***

### getAllDocumentSplitters()

> **getAllDocumentSplitters**(`options?`): `Promise`\<[`GetAllDocumentSplittersResponse`](../type-aliases/GetAllDocumentSplittersResponse.md)\>

Returns all the document splitters visible to the user.

#### Parameters

##### options?

[`GetAllDocumentSplittersOptionalParams`](../interfaces/GetAllDocumentSplittersOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetAllDocumentSplittersResponse`](../type-aliases/GetAllDocumentSplittersResponse.md)\>

***

### getAllExtractors()

> **getAllExtractors**(`organization`, `options?`): `Promise`\<[`GetAllExtractorsResponse`](../type-aliases/GetAllExtractorsResponse.md)\>

Returns your custom extractors as well as Affinda's off-the-shelf extractors.

#### Parameters

##### organization

`string`

Filter by organization.

##### options?

[`GetAllExtractorsOptionalParams`](../interfaces/GetAllExtractorsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetAllExtractorsResponse`](../type-aliases/GetAllExtractorsResponse.md)\>

***

### getAllIndexDocuments()

> **getAllIndexDocuments**(`name`, `options?`): `Promise`\<[`PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the indexed documents for that index

#### Parameters

##### name

`string`

Index name

##### options?

[`GetAllIndexDocumentsOptionalParams`](../interfaces/GetAllIndexDocumentsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema.md)\>

***

### getAllIndexes()

> **getAllIndexes**(`options?`): `Promise`\<[`PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the indexes

#### Parameters

##### options?

[`GetAllIndexesOptionalParams`](../interfaces/GetAllIndexesOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema.md)\>

***

### getAllInvitations()

> **getAllInvitations**(`options?`): `Promise`\<[`Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema.md)\>

Get list of all invitations you created or sent to you.

#### Parameters

##### options?

[`GetAllInvitationsOptionalParams`](../interfaces/GetAllInvitationsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema.md)\>

***

### getAllOrganizationMemberships()

> **getAllOrganizationMemberships**(`options?`): `Promise`\<[`PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema.md)\>

Returns all the organization memberships

#### Parameters

##### options?

[`GetAllOrganizationMembershipsOptionalParams`](../interfaces/GetAllOrganizationMembershipsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema.md)\>

***

### getAllOrganizations()

> **getAllOrganizations**(`options?`): `Promise`\<[`GetAllOrganizationsResponse`](../type-aliases/GetAllOrganizationsResponse.md)\>

Returns all the organizations

#### Parameters

##### options?

[`GetAllOrganizationsOptionalParams`](../interfaces/GetAllOrganizationsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetAllOrganizationsResponse`](../type-aliases/GetAllOrganizationsResponse.md)\>

***

### getAllResthookSubscriptions()

> **getAllResthookSubscriptions**(`options?`): `Promise`\<[`PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema.md)\>

Returns your resthook subscriptions.

#### Parameters

##### options?

[`GetAllResthookSubscriptionsOptionalParams`](../interfaces/GetAllResthookSubscriptionsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema.md)\>

***

### getAllTags()

> **getAllTags**(`options?`): `Promise`\<[`GetAllTagsResponse`](../type-aliases/GetAllTagsResponse.md)\>

Returns your tags.

#### Parameters

##### options?

[`GetAllTagsOptionalParams`](../interfaces/GetAllTagsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetAllTagsResponse`](../type-aliases/GetAllTagsResponse.md)\>

***

### getAllValidationResults()

> **getAllValidationResults**(`document`, `options?`): `Promise`\<[`GetAllValidationResultsResponse`](../type-aliases/GetAllValidationResultsResponse.md)\>

Returns the validation results of a document.

#### Parameters

##### document

`string`

Filter by document.

##### options?

[`GetAllValidationResultsOptionalParams`](../interfaces/GetAllValidationResultsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetAllValidationResultsResponse`](../type-aliases/GetAllValidationResultsResponse.md)\>

***

### getAllWorkspaceMemberships()

> **getAllWorkspaceMemberships**(`options?`): `Promise`\<[`PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema.md)\>

Returns the memberships of your workspaces.

#### Parameters

##### options?

[`GetAllWorkspaceMembershipsOptionalParams`](../interfaces/GetAllWorkspaceMembershipsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema.md)\>

***

### getAllWorkspaces()

> **getAllWorkspaces**(`organization`, `options?`): `Promise`\<[`GetAllWorkspacesResponse`](../type-aliases/GetAllWorkspacesResponse.md)\>

Returns your workspaces.

#### Parameters

##### organization

`string`

Filter by organization.

##### options?

[`GetAllWorkspacesOptionalParams`](../interfaces/GetAllWorkspacesOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetAllWorkspacesResponse`](../type-aliases/GetAllWorkspacesResponse.md)\>

***

### getAnnotation()

> **getAnnotation**(`id`, `options?`): `Promise`\<[`Annotation`](../interfaces/Annotation.md)\>

Return a specific annotation.

#### Parameters

##### id

`number`

Annotation's ID

##### options?

[`GetAnnotationOptionalParams`](../interfaces/GetAnnotationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Annotation`](../interfaces/Annotation.md)\>

***

### getApiUser()

> **getApiUser**(`id`, `options?`): `Promise`\<[`ApiUserWithoutKey`](../interfaces/ApiUserWithoutKey.md)\>

Return a specific API user.

#### Parameters

##### id

`number`

API user's ID

##### options?

[`GetApiUserOptionalParams`](../interfaces/GetApiUserOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ApiUserWithoutKey`](../interfaces/ApiUserWithoutKey.md)\>

***

### getCollection()

> **getCollection**(`identifier`, `options?`): `Promise`\<[`Collection`](../interfaces/Collection.md)\>

Return a specific collection.

#### Parameters

##### identifier

`string`

Collection's identifier

##### options?

[`GetCollectionOptionalParams`](../interfaces/GetCollectionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Collection`](../interfaces/Collection.md)\>

***

### getDataFieldForCollection()

> **getDataFieldForCollection**(`identifier`, `datapointIdentifier`, `options?`): `Promise`\<[`CollectionField`](../interfaces/CollectionField.md)\>

Get a data field for a collection assosciated with a data point

#### Parameters

##### identifier

`string`

Collection's identifier

##### datapointIdentifier

`string`

Datapoint's identifier

##### options?

[`GetDataFieldForCollectionOptionalParams`](../interfaces/GetDataFieldForCollectionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`CollectionField`](../interfaces/CollectionField.md)\>

***

### getDataPoint()

> **getDataPoint**(`identifier`, `options?`): `Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

Return a specific data point.

#### Parameters

##### identifier

`string`

Data point's identifier

##### options?

[`GetDataPointOptionalParams`](../interfaces/GetDataPointOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

***

### getDataPointChoice()

> **getDataPointChoice**(`id`, `options?`): `Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

Return a specific data point choice.

#### Parameters

##### id

`number`

Data point choice's ID

##### options?

[`GetDataPointChoiceOptionalParams`](../interfaces/GetDataPointChoiceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

***

### getDataPointChoices()

> **getDataPointChoices**(`dataPoint`, `collection`, `options?`): `Promise`\<[`PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema.md)\>

Returns available choices for a specific enum data point.

#### Parameters

##### dataPoint

`string`

The data point to get choices for.

##### collection

`string`

The collection to get choices for.

##### options?

[`GetDataPointChoicesOptionalParams`](../interfaces/GetDataPointChoicesOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema`](../interfaces/PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema.md)\>

***

### getDocument()

> **getDocument**(`identifier`, `options?`): `Promise`\<[`DocumentUnion`](../type-aliases/DocumentUnion.md)\>

Return a specific document.

#### Parameters

##### identifier

`string`

Document's identifier

##### options?

[`GetDocumentOptionalParams`](../interfaces/GetDocumentOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DocumentUnion`](../type-aliases/DocumentUnion.md)\>

***

### getDocumentSplitter()

> **getDocumentSplitter**(`identifier`, `options?`): `Promise`\<[`DocumentSplitter`](../interfaces/DocumentSplitter.md)\>

Return a specific document splitter.

#### Parameters

##### identifier

`string`

Document splitter's identifier

##### options?

[`GetDocumentSplitterOptionalParams`](../interfaces/GetDocumentSplitterOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DocumentSplitter`](../interfaces/DocumentSplitter.md)\>

***

### getDocumentType()

> **getDocumentType**(`identifier`, `options?`): `Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

Returns the details of a specific document type.

#### Parameters

##### identifier

`string`

Document type identifier

##### options?

[`GetDocumentTypeOptionalParams`](../interfaces/GetDocumentTypeOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

***

### getDocumentTypes()

> **getDocumentTypes**(`options?`): `Promise`\<[`GetDocumentTypesResponse`](../type-aliases/GetDocumentTypesResponse.md)\>

Returns a list of document types that the user has access to.

#### Parameters

##### options?

[`GetDocumentTypesOptionalParams`](../interfaces/GetDocumentTypesOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetDocumentTypesResponse`](../type-aliases/GetDocumentTypesResponse.md)\>

***

### getExtractor()

> **getExtractor**(`identifier`, `options?`): `Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

Return a specific extractor.

#### Parameters

##### identifier

`string`

Extractor's identifier

##### options?

[`GetExtractorOptionalParams`](../interfaces/GetExtractorOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

***

### getInvitation()

> **getInvitation**(`identifier`, `options?`): `Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

Get detail of an invitation.

#### Parameters

##### identifier

`string`

Invitation identifier.

##### options?

[`GetInvitationOptionalParams`](../interfaces/GetInvitationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

***

### getInvitationByToken()

> **getInvitationByToken**(`token`, `options?`): `Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

Get detail of an invitation using a secret token. This allows users who have not registered/logged
in to view the invitation.

#### Parameters

##### token

`string`

Invitation token.

##### options?

[`GetInvitationByTokenOptionalParams`](../interfaces/GetInvitationByTokenOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

***

### getJobDescriptionSearchConfig()

> **getJobDescriptionSearchConfig**(`options?`): `Promise`\<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

Return configurations such as which fields can be displayed in the logged in user's embeddable job
description search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

##### options?

[`GetJobDescriptionSearchConfigOptionalParams`](../interfaces/GetJobDescriptionSearchConfigOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

***

### getJobDescriptionSearchDetail()

> **getJobDescriptionSearchDetail**(`identifier`, `body`, `options?`): `Promise`\<[`JobDescriptionSearchDetail`](../interfaces/JobDescriptionSearchDetail.md)\>

This contains more detailed information about the matching score of the search criteria, or which
search criteria is missing in this job description.
The `identifier` is the unique ID returned via the
[/job_description_search](#post-/job_description_search) endpoint.

#### Parameters

##### identifier

`string`

Job Description identifier

##### body

Search parameters

`null` | [`JobDescriptionSearchParameters`](../interfaces/JobDescriptionSearchParameters.md)

##### options?

[`GetJobDescriptionSearchDetailOptionalParams`](../interfaces/GetJobDescriptionSearchDetailOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`JobDescriptionSearchDetail`](../interfaces/JobDescriptionSearchDetail.md)\>

***

### getMapping()

> **getMapping**(`identifier`, `options?`): `Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

Return a specific mapping.

#### Parameters

##### identifier

`string`

Mapping's identifier

##### options?

[`GetMappingOptionalParams`](../interfaces/GetMappingOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

***

### getMappingDataSource()

> **getMappingDataSource**(`identifier`, `options?`): `Promise`\<[`MappingDataSource`](../interfaces/MappingDataSource.md)\>

Return a specific mapping data source.

#### Parameters

##### identifier

`string`

Mapping data source's identifier

##### options?

[`GetMappingDataSourceOptionalParams`](../interfaces/GetMappingDataSourceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`MappingDataSource`](../interfaces/MappingDataSource.md)\>

***

### getMappingDataSourceValue()

> **getMappingDataSourceValue**(`identifier`, `value`, `options?`): `Promise`\<[`GetMappingDataSourceValueResponse`](../type-aliases/GetMappingDataSourceValueResponse.md)\>

Return a specific mapping dta source value.

#### Parameters

##### identifier

`string`

Mapping data source's identifier

##### value

`string`

Mapping Data Source Value's value

##### options?

[`GetMappingDataSourceValueOptionalParams`](../interfaces/GetMappingDataSourceValueOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetMappingDataSourceValueResponse`](../type-aliases/GetMappingDataSourceValueResponse.md)\>

***

### getOrganization()

> **getOrganization**(`identifier`, `options?`): `Promise`\<[`Organization`](../interfaces/Organization.md)\>

Get detail of an organization.

#### Parameters

##### identifier

`string`

Organization identifier.

##### options?

[`GetOrganizationOptionalParams`](../interfaces/GetOrganizationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Organization`](../interfaces/Organization.md)\>

***

### getOrganizationMembership()

> **getOrganizationMembership**(`identifier`, `options?`): `Promise`\<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

Get detail of an organization membership.

#### Parameters

##### identifier

`string`

Membership identifier.

##### options?

[`GetOrganizationMembershipOptionalParams`](../interfaces/GetOrganizationMembershipOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

***

### getRedactedDocument()

> **getRedactedDocument**(`identifier`, `options?`): `Promise`\<[`GetRedactedDocumentResponse`](../type-aliases/GetRedactedDocumentResponse.md)\>

Get the redacted version of a document. The original document is not modified.

#### Parameters

##### identifier

`string`

Document identifier

##### options?

[`GetRedactedDocumentOptionalParams`](../interfaces/GetRedactedDocumentOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetRedactedDocumentResponse`](../type-aliases/GetRedactedDocumentResponse.md)\>

***

### getResthookSubscription()

> **getResthookSubscription**(`id`, `options?`): `Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

Return a specific resthook subscription.

#### Parameters

##### id

`number`

Resthook subscription's ID

##### options?

[`GetResthookSubscriptionOptionalParams`](../interfaces/GetResthookSubscriptionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

***

### getResumeSearchConfig()

> **getResumeSearchConfig**(`options?`): `Promise`\<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

Return configurations such as which fields can be displayed in the logged in user's embeddable
resume search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

##### options?

[`GetResumeSearchConfigOptionalParams`](../interfaces/GetResumeSearchConfigOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

***

### getResumeSearchDetail()

> **getResumeSearchDetail**(`identifier`, `body`, `options?`): `Promise`\<[`ResumeSearchDetail`](../interfaces/ResumeSearchDetail.md)\>

This contains more detailed information about the matching score of the search criteria, or which
search criteria is missing in this resume.
The `identifier` is the unique ID returned via the [/resume_search](#post-/resume_search) endpoint.

#### Parameters

##### identifier

`string`

Resume identifier

##### body

[`ResumeSearchParameters`](../interfaces/ResumeSearchParameters.md)

Search parameters

##### options?

[`GetResumeSearchDetailOptionalParams`](../interfaces/GetResumeSearchDetailOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ResumeSearchDetail`](../interfaces/ResumeSearchDetail.md)\>

***

### getResumeSearchMatch()

> **getResumeSearchMatch**(`resume`, `jobDescription`, `options?`): `Promise`\<[`ResumeSearchMatch`](../interfaces/ResumeSearchMatch.md)\>

Get the matching score between a resume and a job description. The score ranges between 0 and 1,
with 0 being not a match at all, and 1 being perfect match.<br/> Note, this score will not directly
match the score returned from POST
[/resume_search/details/{identifier}](#post-/resume_search/details/-identifier-).

#### Parameters

##### resume

`string`

Identify the resume to match.

##### jobDescription

`string`

Identify the job description to match.

##### options?

[`GetResumeSearchMatchOptionalParams`](../interfaces/GetResumeSearchMatchOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ResumeSearchMatch`](../interfaces/ResumeSearchMatch.md)\>

***

### getResumeSearchSuggestionJobTitle()

> **getResumeSearchSuggestionJobTitle**(`jobTitles`, `options?`): `Promise`\<[`GetResumeSearchSuggestionJobTitleResponse`](../type-aliases/GetResumeSearchSuggestionJobTitleResponse.md)\>

Provided one or more job titles, get related suggestions for your search.

#### Parameters

##### jobTitles

`string`[]

Job title to query suggestions for

##### options?

[`GetResumeSearchSuggestionJobTitleOptionalParams`](../interfaces/GetResumeSearchSuggestionJobTitleOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetResumeSearchSuggestionJobTitleResponse`](../type-aliases/GetResumeSearchSuggestionJobTitleResponse.md)\>

***

### getResumeSearchSuggestionSkill()

> **getResumeSearchSuggestionSkill**(`skills`, `options?`): `Promise`\<[`GetResumeSearchSuggestionSkillResponse`](../type-aliases/GetResumeSearchSuggestionSkillResponse.md)\>

Provided one or more skills, get related suggestions for your search.

#### Parameters

##### skills

`string`[]

Skill to query suggestions for

##### options?

[`GetResumeSearchSuggestionSkillOptionalParams`](../interfaces/GetResumeSearchSuggestionSkillOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetResumeSearchSuggestionSkillResponse`](../type-aliases/GetResumeSearchSuggestionSkillResponse.md)\>

***

### getTag()

> **getTag**(`id`, `options?`): `Promise`\<[`Tag`](../interfaces/Tag.md)\>

Return a specific tag.

#### Parameters

##### id

`number`

Tag's ID

##### options?

[`GetTagOptionalParams`](../interfaces/GetTagOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)\>

***

### getUsageByCollection()

> **getUsageByCollection**(`identifier`, `options?`): `Promise`\<[`GetUsageByCollectionResponse`](../type-aliases/GetUsageByCollectionResponse.md)\>

Return monthly credits consumption of a collection.

#### Parameters

##### identifier

`string`

Collection's identifier

##### options?

[`GetUsageByCollectionOptionalParams`](../interfaces/GetUsageByCollectionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetUsageByCollectionResponse`](../type-aliases/GetUsageByCollectionResponse.md)\>

***

### getUsageByWorkspace()

> **getUsageByWorkspace**(`identifier`, `options?`): `Promise`\<[`GetUsageByWorkspaceResponse`](../type-aliases/GetUsageByWorkspaceResponse.md)\>

Return monthly credits consumption of a workspace.

#### Parameters

##### identifier

`string`

Workspace's identifier

##### options?

[`GetUsageByWorkspaceOptionalParams`](../interfaces/GetUsageByWorkspaceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`GetUsageByWorkspaceResponse`](../type-aliases/GetUsageByWorkspaceResponse.md)\>

***

### getValidationResult()

> **getValidationResult**(`id`, `options?`): `Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

Return a specific validation result.

#### Parameters

##### id

`number`

Validation result's ID.

##### options?

[`GetValidationResultOptionalParams`](../interfaces/GetValidationResultOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

***

### getWorkspace()

> **getWorkspace**(`identifier`, `options?`): `Promise`\<[`Workspace`](../interfaces/Workspace.md)\>

Return a specific workspace.

#### Parameters

##### identifier

`string`

Workspace's identifier

##### options?

[`GetWorkspaceOptionalParams`](../interfaces/GetWorkspaceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Workspace`](../interfaces/Workspace.md)\>

***

### getWorkspaceMembership()

> **getWorkspaceMembership**(`identifier`, `options?`): `Promise`\<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

Return a specific workspace membership.

#### Parameters

##### identifier

`string`

Workspace membership's identifier.

##### options?

[`GetWorkspaceMembershipOptionalParams`](../interfaces/GetWorkspaceMembershipOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`WorkspaceMembership`](../interfaces/WorkspaceMembership.md)\>

***

### jsonSchemaFromDocumentType()

> **jsonSchemaFromDocumentType**(`identifier`, `options?`): `Promise`\<[`JsonSchemaFromDocumentTypeResponse`](../type-aliases/JsonSchemaFromDocumentTypeResponse.md)\>

Generate JSON schema from a document type.

#### Parameters

##### identifier

`string`

Document type's identifier

##### options?

[`JsonSchemaFromDocumentTypeOptionalParams`](../interfaces/JsonSchemaFromDocumentTypeOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`JsonSchemaFromDocumentTypeResponse`](../type-aliases/JsonSchemaFromDocumentTypeResponse.md)\>

***

### listMappingDataSources()

> **listMappingDataSources**(`options?`): `Promise`\<[`Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema.md)\>

Returns the list of all custom mapping data sources.

#### Parameters

##### options?

[`ListMappingDataSourcesOptionalParams`](../interfaces/ListMappingDataSourcesOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema.md)\>

***

### listMappingDataSourceValues()

> **listMappingDataSourceValues**(`identifier`, `options?`): `Promise`\<[`Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema.md)\>

Returns the list of all values in a mapping data source

#### Parameters

##### identifier

`string`

Mapping data source's identifier

##### options?

[`ListMappingDataSourceValuesOptionalParams`](../interfaces/ListMappingDataSourceValuesOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema.md)\>

***

### listMappings()

> **listMappings**(`mappingDataSource`, `options?`): `Promise`\<[`Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema.md)\>

Returns the list of all custom data mappings.

#### Parameters

##### mappingDataSource

`string`

Mapping data source's identifier

##### options?

[`ListMappingsOptionalParams`](../interfaces/ListMappingsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema`](../interfaces/Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema.md)\>

***

### listOccupationGroups()

> **listOccupationGroups**(`options?`): `Promise`\<[`ListOccupationGroupsResponse`](../type-aliases/ListOccupationGroupsResponse.md)\>

Returns the list of searchable occupation groups.

#### Parameters

##### options?

[`ListOccupationGroupsOptionalParams`](../interfaces/ListOccupationGroupsOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ListOccupationGroupsResponse`](../type-aliases/ListOccupationGroupsResponse.md)\>

***

### pydanticModelsFromDocumentType()

> **pydanticModelsFromDocumentType**(`identifier`, `options?`): `Promise`\<[`PydanticModelsResponse`](../interfaces/PydanticModelsResponse.md)\>

Generate Pydantic models from a document type.

#### Parameters

##### identifier

`string`

Document type's identifier

##### options?

[`PydanticModelsFromDocumentTypeOptionalParams`](../interfaces/PydanticModelsFromDocumentTypeOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`PydanticModelsResponse`](../interfaces/PydanticModelsResponse.md)\>

***

### regenerateApiKeyForApiUser()

> **regenerateApiKeyForApiUser**(`id`, `options?`): `Promise`\<[`ApiUserWithKey`](../interfaces/ApiUserWithKey.md)\>

Regenerate API key for an API user.

#### Parameters

##### id

`number`

API user's ID

##### options?

[`RegenerateApiKeyForApiUserOptionalParams`](../interfaces/RegenerateApiKeyForApiUserOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ApiUserWithKey`](../interfaces/ApiUserWithKey.md)\>

***

### reIndexDocument()

> **reIndexDocument**(`name`, `identifier`, `options?`): `Promise`\<`void`\>

Re-index a document.
This is relevant if you updated the document's data via the /annotations endpoint, and want to
refresh
the document's data in the search index.

#### Parameters

##### name

`string`

Index name

##### identifier

`string`

Document identifier

##### options?

[`ReIndexDocumentOptionalParams`](../interfaces/ReIndexDocumentOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<`void`\>

***

### replaceDataPointChoices()

> **replaceDataPointChoices**(`options?`): `Promise`\<[`DataPointChoiceReplaceResponse`](../interfaces/DataPointChoiceReplaceResponse.md)\>

Replace choices of a data point. Existing choices and incoming choices are matched base on their
`value`. New `value` will be created, existing `value` will be updated, and `value` not in incoming
choices will be deleted.

#### Parameters

##### options?

[`ReplaceDataPointChoicesOptionalParams`](../interfaces/ReplaceDataPointChoicesOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DataPointChoiceReplaceResponse`](../interfaces/DataPointChoiceReplaceResponse.md)\>

***

### replaceMappingDataSourceValues()

> **replaceMappingDataSourceValues**(`identifier`, `body`, `options?`): `Promise`\<[`ReplaceMappingDataSourceValuesResponse`](../type-aliases/ReplaceMappingDataSourceValuesResponse.md)\>

Replaces the list of all values in a mapping data source

#### Parameters

##### identifier

`string`

Mapping data source's identifier

##### body

`Record`\<`string`, `unknown`\>[]

Array of AnyObject

##### options?

[`ReplaceMappingDataSourceValuesOptionalParams`](../interfaces/ReplaceMappingDataSourceValuesOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ReplaceMappingDataSourceValuesResponse`](../type-aliases/ReplaceMappingDataSourceValuesResponse.md)\>

***

### respondToInvitation()

> **respondToInvitation**(`token`, `body`, `options?`): `Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

Choose to accept or decline an invitation.

#### Parameters

##### token

`string`

Invitation token.

##### body

[`InvitationResponse`](../interfaces/InvitationResponse.md)

##### options?

[`RespondToInvitationOptionalParams`](../interfaces/RespondToInvitationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

***

### sendOperationRequest()

> **sendOperationRequest**\<`T`\>(`operationArguments`, `operationSpec`): `Promise`\<`T`\>

Send an HTTP request that is populated using the provided OperationSpec.

#### Type Parameters

##### T

`T`

The typed result of the request, based on the OperationSpec.

#### Parameters

##### operationArguments

`OperationArguments`

The arguments that the HTTP request's templated values will be populated from.

##### operationSpec

`OperationSpec`

The OperationSpec to use to populate the httpRequest.

#### Returns

`Promise`\<`T`\>

#### Inherited from

`coreClient.ServiceClient.sendOperationRequest`

***

### sendRequest()

> **sendRequest**(`request`): `Promise`\<`PipelineResponse`\>

Send the provided httpRequest.

#### Parameters

##### request

`PipelineRequest`

#### Returns

`Promise`\<`PipelineResponse`\>

#### Inherited from

`coreClient.ServiceClient.sendRequest`

***

### updateAnnotation()

> **updateAnnotation**(`id`, `body`, `options?`): `Promise`\<[`Annotation`](../interfaces/Annotation.md)\>

Update data of an annotation.

#### Parameters

##### id

`number`

Annotation's ID

##### body

[`AnnotationUpdate`](../interfaces/AnnotationUpdate.md)

Annotation data to update

##### options?

[`UpdateAnnotationOptionalParams`](../interfaces/UpdateAnnotationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Annotation`](../interfaces/Annotation.md)\>

***

### updateApiUser()

> **updateApiUser**(`id`, `body`, `options?`): `Promise`\<[`ApiUserWithoutKey`](../interfaces/ApiUserWithoutKey.md)\>

Update data of an API user.

#### Parameters

##### id

`number`

API user's ID

##### body

[`ApiUserUpdate`](../interfaces/ApiUserUpdate.md)

API user to update

##### options?

[`UpdateApiUserOptionalParams`](../interfaces/UpdateApiUserOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ApiUserWithoutKey`](../interfaces/ApiUserWithoutKey.md)\>

***

### updateCollection()

> **updateCollection**(`identifier`, `body`, `options?`): `Promise`\<[`Collection`](../interfaces/Collection.md)\>

Update data of a collection.

#### Parameters

##### identifier

`string`

Collection's identifier

##### body

[`CollectionUpdate`](../interfaces/CollectionUpdate.md)

Collection data to update

##### options?

[`UpdateCollectionOptionalParams`](../interfaces/UpdateCollectionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Collection`](../interfaces/Collection.md)\>

***

### updateDataFieldForCollection()

> **updateDataFieldForCollection**(`identifier`, `datapointIdentifier`, `body`, `options?`): `Promise`\<[`CollectionField`](../interfaces/CollectionField.md)\>

Update data field for a collection assosciated with a data point

#### Parameters

##### identifier

`string`

Collection's identifier

##### datapointIdentifier

`string`

Datapoint's identifier

##### body

[`CollectionField`](../interfaces/CollectionField.md)

Data field properties to update

##### options?

[`UpdateDataFieldForCollectionOptionalParams`](../interfaces/UpdateDataFieldForCollectionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`CollectionField`](../interfaces/CollectionField.md)\>

***

### updateDataPoint()

> **updateDataPoint**(`identifier`, `body`, `options?`): `Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

Update data of a data point.

#### Parameters

##### identifier

`string`

DataPoint's identifier

##### body

[`DataPointUpdate`](../interfaces/DataPointUpdate.md)

Data point to update

##### options?

[`UpdateDataPointOptionalParams`](../interfaces/UpdateDataPointOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DataPoint`](../interfaces/DataPoint.md)\>

***

### updateDataPointChoice()

> **updateDataPointChoice**(`id`, `body`, `options?`): `Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

Update data of a data point choice.

#### Parameters

##### id

`number`

Data point choice's ID

##### body

[`DataPointChoiceUpdate`](../interfaces/DataPointChoiceUpdate.md)

Data point choice to update

##### options?

[`UpdateDataPointChoiceOptionalParams`](../interfaces/UpdateDataPointChoiceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DataPointChoice`](../interfaces/DataPointChoice.md)\>

***

### updateDocument()

> **updateDocument**(`identifier`, `body`, `options?`): `Promise`\<[`DocumentUnion`](../type-aliases/DocumentUnion.md)\>

Update file name, expiry time, or move to another collection, etc.

#### Parameters

##### identifier

`string`

Document's identifier

##### body

[`DocumentUpdate`](../interfaces/DocumentUpdate.md)

Document data to update

##### options?

[`UpdateDocumentOptionalParams`](../interfaces/UpdateDocumentOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DocumentUnion`](../type-aliases/DocumentUnion.md)\>

***

### updateDocumentData()

> **updateDocumentData**(`identifier`, `body`, `options?`): `Promise`\<[`DocumentUnion`](../type-aliases/DocumentUnion.md)\>

Update data of a document.
Only applicable for resumes and job descriptions. For other document types, please use the `PATCH
/annotations/{id}` endpoint or the `POST /annotations/batch_update` endpoint.

#### Parameters

##### identifier

`string`

Resume or Job Description identifier

##### body

[`PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema`](../interfaces/PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema.md)

Resume data to update

##### options?

[`UpdateDocumentDataOptionalParams`](../interfaces/UpdateDocumentDataOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DocumentUnion`](../type-aliases/DocumentUnion.md)\>

***

### updateDocumentType()

> **updateDocumentType**(`identifier`, `body`, `options?`): `Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

Update an existing document type.

#### Parameters

##### identifier

`string`

Document type identifier

##### body

[`DocumentTypeUpdate`](../interfaces/DocumentTypeUpdate.md)

##### options?

[`UpdateDocumentTypeOptionalParams`](../interfaces/UpdateDocumentTypeOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`DocumentType`](../interfaces/DocumentType.md)\>

***

### updateExtractor()

> **updateExtractor**(`identifier`, `body`, `options?`): `Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

Update data of an extractor.

#### Parameters

##### identifier

`string`

Extractor's identifier

##### body

[`ExtractorUpdate`](../interfaces/ExtractorUpdate.md)

Extractor data to update

##### options?

[`UpdateExtractorOptionalParams`](../interfaces/UpdateExtractorOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Extractor`](../interfaces/Extractor.md)\>

***

### updateIndex()

> **updateIndex**(`name`, `body`, `options?`): `Promise`\<[`Index`](../interfaces/Index.md)\>

Updates the specified index

#### Parameters

##### name

`string`

Index name

##### body

[`IndexUpdate`](../interfaces/IndexUpdate.md)

Index data to update

##### options?

[`UpdateIndexOptionalParams`](../interfaces/UpdateIndexOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Index`](../interfaces/Index.md)\>

***

### updateInvitation()

> **updateInvitation**(`identifier`, `body`, `options?`): `Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

Update the detail of an invitation.

#### Parameters

##### identifier

`string`

Invitation identifier.

##### body

[`InvitationUpdate`](../interfaces/InvitationUpdate.md)

##### options?

[`UpdateInvitationOptionalParams`](../interfaces/UpdateInvitationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Invitation`](../interfaces/Invitation.md)\>

***

### updateJobDescriptionSearchConfig()

> **updateJobDescriptionSearchConfig**(`body`, `options?`): `Promise`\<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

Update configurations such as which fields can be displayed in the logged in user's embeddable job
description search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

##### body

[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)

##### options?

[`UpdateJobDescriptionSearchConfigOptionalParams`](../interfaces/UpdateJobDescriptionSearchConfigOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`JobDescriptionSearchConfig`](../interfaces/JobDescriptionSearchConfig.md)\>

***

### updateMapping()

> **updateMapping**(`identifier`, `body`, `options?`): `Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

Updates a specific mapping.

#### Parameters

##### identifier

`string`

Mapping's identifier

##### body

[`MappingUpdate`](../interfaces/MappingUpdate.md)

##### options?

[`UpdateMappingOptionalParams`](../interfaces/UpdateMappingOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Mapping`](../interfaces/Mapping.md)\>

***

### updateMappingDataSourceValue()

> **updateMappingDataSourceValue**(`identifier`, `value`, `body`, `options?`): `Promise`\<[`UpdateMappingDataSourceValueResponse`](../type-aliases/UpdateMappingDataSourceValueResponse.md)\>

Update the specified mapping data source value.

#### Parameters

##### identifier

`string`

Mapping data source's identifier

##### value

`string`

Mapping Data Source's value

##### body

`Record`\<`string`, `unknown`\>

Any object

##### options?

[`UpdateMappingDataSourceValueOptionalParams`](../interfaces/UpdateMappingDataSourceValueOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`UpdateMappingDataSourceValueResponse`](../type-aliases/UpdateMappingDataSourceValueResponse.md)\>

***

### updateOrganization()

> **updateOrganization**(`identifier`, `options?`): `Promise`\<[`Organization`](../interfaces/Organization.md)\>

Update the detail of an organization.

#### Parameters

##### identifier

`string`

Organization identifier.

##### options?

[`UpdateOrganizationOptionalParams`](../interfaces/UpdateOrganizationOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Organization`](../interfaces/Organization.md)\>

***

### updateOrganizationMembership()

> **updateOrganizationMembership**(`identifier`, `body`, `options?`): `Promise`\<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

The admin users can use this endpoint to update the role of the members within their organization.

#### Parameters

##### identifier

`string`

Membership identifier.

##### body

[`OrganizationMembershipUpdate`](../interfaces/OrganizationMembershipUpdate.md)

##### options?

[`UpdateOrganizationMembershipOptionalParams`](../interfaces/UpdateOrganizationMembershipOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`OrganizationMembership`](../interfaces/OrganizationMembership.md)\>

***

### updateResthookSubscription()

> **updateResthookSubscription**(`id`, `body`, `options?`): `Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

Update data of a resthook subscription.

#### Parameters

##### id

`number`

ResthookSubscription's ID

##### body

[`ResthookSubscriptionUpdate`](../interfaces/ResthookSubscriptionUpdate.md)

ResthookSubscription data to update

##### options?

[`UpdateResthookSubscriptionOptionalParams`](../interfaces/UpdateResthookSubscriptionOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ResthookSubscription`](../interfaces/ResthookSubscription.md)\>

***

### updateResumeSearchConfig()

> **updateResumeSearchConfig**(`body`, `options?`): `Promise`\<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

Update configurations such as which fields can be displayed in the logged in user's embeddable
resume search tool, what are their weights, what is the maximum number of results that can be
returned, etc.

#### Parameters

##### body

[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)

##### options?

[`UpdateResumeSearchConfigOptionalParams`](../interfaces/UpdateResumeSearchConfigOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ResumeSearchConfig`](../interfaces/ResumeSearchConfig.md)\>

***

### updateTag()

> **updateTag**(`id`, `body`, `options?`): `Promise`\<[`Tag`](../interfaces/Tag.md)\>

Update data of an tag.

#### Parameters

##### id

`number`

Tag's ID

##### body

[`TagUpdate`](../interfaces/TagUpdate.md)

Tag data to update

##### options?

[`UpdateTagOptionalParams`](../interfaces/UpdateTagOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)\>

***

### updateValidationResult()

> **updateValidationResult**(`id`, `body`, `options?`): `Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

Update a validation result.

#### Parameters

##### id

`number`

Validation result's ID.

##### body

[`ValidationResultUpdate`](../interfaces/ValidationResultUpdate.md)

Validation result data to update

##### options?

[`UpdateValidationResultOptionalParams`](../interfaces/UpdateValidationResultOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`ValidationResult`](../interfaces/ValidationResult.md)\>

***

### updateWorkspace()

> **updateWorkspace**(`identifier`, `body`, `options?`): `Promise`\<[`Workspace`](../interfaces/Workspace.md)\>

Update a workspace.

#### Parameters

##### identifier

`string`

Workspace's identifier

##### body

[`WorkspaceUpdate`](../interfaces/WorkspaceUpdate.md)

Workspace data to update

##### options?

[`UpdateWorkspaceOptionalParams`](../interfaces/UpdateWorkspaceOptionalParams.md)

The options parameters.

#### Returns

`Promise`\<[`Workspace`](../interfaces/Workspace.md)\>
