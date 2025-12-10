/// <reference types="node" />

import { AccessToken } from '@azure/core-auth';
import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import * as coreRestPipeline from '@azure/core-rest-pipeline';
import { GetTokenOptions } from '@azure/core-auth';
import { TokenCredential } from '@azure/core-auth';

export declare interface Accreditation {
    education?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly inputStr?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly matchStr?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly educationLevel?: string;
}

/** Optional parameters. */
export declare interface ActivateResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the activateResthookSubscription operation. */
export declare type ActivateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export declare interface AddMappingDataSourceValueOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the addMappingDataSourceValue operation. */
export declare type AddMappingDataSourceValueResponse = Record<string, unknown>;

export declare class AffindaAPI extends coreClient.ServiceClient {
    region: Region;
    /**
     * Initializes a new instance of the AffindaAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: AffindaAPIOptionalParams);
    /**
     * Returns all the document summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllDocuments(options?: GetAllDocumentsOptionalParams): Promise<GetAllDocumentsResponse>;
    /**
     * Uploads a document for parsing via file upload or URL.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/documents/{identifier}](#get-/v3/documents/-identifier-) endpoint to check processing status and
     * retrieve results.<br/>
     * @param options The options parameters.
     */
    createDocument(options?: CreateDocumentOptionalParams): Promise<CreateDocumentResponse>;
    /**
     * Return a specific document.
     * @param identifier Document's identifier
     * @param options The options parameters.
     */
    getDocument(identifier: string, options?: GetDocumentOptionalParams): Promise<GetDocumentResponse>;
    /**
     * Update file name, expiry time, or move to another collection, etc.
     * @param identifier Document's identifier
     * @param body Document data to update
     * @param options The options parameters.
     */
    updateDocument(identifier: string, body: DocumentUpdate, options?: UpdateDocumentOptionalParams): Promise<UpdateDocumentResponse>;
    /**
     * Deletes the specified document from the database.
     * @param identifier Document's identifier
     * @param options The options parameters.
     */
    deleteDocument(identifier: string, options?: DeleteDocumentOptionalParams): Promise<void>;
    /**
     * Get the redacted version of a document. The original document is not modified.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getRedactedDocument(identifier: string, options?: GetRedactedDocumentOptionalParams): Promise<GetRedactedDocumentResponse>;
    /**
     * Returns your workspaces.
     * @param organization Filter by organization.
     * @param options The options parameters.
     */
    getAllWorkspaces(organization: string, options?: GetAllWorkspacesOptionalParams): Promise<GetAllWorkspacesResponse>;
    /**
     * Create a workspace
     * @param body Workspace to create
     * @param options The options parameters.
     */
    createWorkspace(body: WorkspaceCreate, options?: CreateWorkspaceOptionalParams): Promise<CreateWorkspaceResponse>;
    /**
     * Return a specific workspace.
     * @param identifier Workspace's identifier
     * @param options The options parameters.
     */
    getWorkspace(identifier: string, options?: GetWorkspaceOptionalParams): Promise<GetWorkspaceResponse>;
    /**
     * Update a workspace.
     * @param identifier Workspace's identifier
     * @param body Workspace data to update
     * @param options The options parameters.
     */
    updateWorkspace(identifier: string, body: WorkspaceUpdate, options?: UpdateWorkspaceOptionalParams): Promise<UpdateWorkspaceResponse>;
    /**
     * Deletes the specified workspace from the database.
     * @param identifier Workspace's identifier
     * @param options The options parameters.
     */
    deleteWorkspace(identifier: string, options?: DeleteWorkspaceOptionalParams): Promise<void>;
    /**
     * Return monthly credits consumption of a workspace.
     * @param identifier Workspace's identifier
     * @param options The options parameters.
     */
    getUsageByWorkspace(identifier: string, options?: GetUsageByWorkspaceOptionalParams): Promise<GetUsageByWorkspaceResponse>;
    /**
     * Returns the memberships of your workspaces.
     * @param options The options parameters.
     */
    getAllWorkspaceMemberships(options?: GetAllWorkspaceMembershipsOptionalParams): Promise<GetAllWorkspaceMembershipsResponse>;
    /**
     * Create a workspace membership.
     * @param body
     * @param options The options parameters.
     */
    createWorkspaceMembership(body: WorkspaceMembershipCreate, options?: CreateWorkspaceMembershipOptionalParams): Promise<CreateWorkspaceMembershipResponse>;
    /**
     * Return a specific workspace membership.
     * @param identifier Workspace membership's identifier.
     * @param options The options parameters.
     */
    getWorkspaceMembership(identifier: string, options?: GetWorkspaceMembershipOptionalParams): Promise<GetWorkspaceMembershipResponse>;
    /**
     * Remove an user from a workspace.
     * @param identifier Workspace membership's identifier.
     * @param options The options parameters.
     */
    deleteWorkspaceMembership(identifier: string, options?: DeleteWorkspaceMembershipOptionalParams): Promise<void>;
    /**
     * Returns a list of document types that the user has access to.
     * @param options The options parameters.
     */
    getDocumentTypes(options?: GetDocumentTypesOptionalParams): Promise<GetDocumentTypesResponse>;
    /**
     * Create a new document type in the specified organization.
     * @param body
     * @param options The options parameters.
     */
    createDocumentType(body: DocumentTypeCreate, options?: CreateDocumentTypeOptionalParams): Promise<CreateDocumentTypeResponse>;
    /**
     * Returns the details of a specific document type.
     * @param identifier Document type identifier
     * @param options The options parameters.
     */
    getDocumentType(identifier: string, options?: GetDocumentTypeOptionalParams): Promise<GetDocumentTypeResponse>;
    /**
     * Update an existing document type.
     * @param identifier Document type identifier
     * @param body
     * @param options The options parameters.
     */
    updateDocumentType(identifier: string, body: DocumentTypeUpdate, options?: UpdateDocumentTypeOptionalParams): Promise<UpdateDocumentTypeResponse>;
    /**
     * Delete a document type.
     * @param identifier Document type identifier
     * @param options The options parameters.
     */
    deleteDocumentType(identifier: string, options?: DeleteDocumentTypeOptionalParams): Promise<void>;
    /**
     * Generate JSON schema from a document type.
     * @param identifier Document type's identifier
     * @param options The options parameters.
     */
    jsonSchemaFromDocumentType(identifier: string, options?: JsonSchemaFromDocumentTypeOptionalParams): Promise<JsonSchemaFromDocumentTypeResponse>;
    /**
     * Generate Pydantic models from a document type.
     * @param identifier Document type's identifier
     * @param options The options parameters.
     */
    pydanticModelsFromDocumentType(identifier: string, options?: PydanticModelsFromDocumentTypeOptionalParams): Promise<PydanticModelsFromDocumentTypeResponse>;
    /**
     * Create a custom mapping data source.
     * @param body A mapping data source is used to map from raw data found by our AI models to records in
     *             your database.
     * @param options The options parameters.
     */
    createMappingDataSource(body: MappingDataSourceCreate, options?: CreateMappingDataSourceOptionalParams): Promise<CreateMappingDataSourceResponse>;
    /**
     * Returns the list of all custom mapping data sources.
     * @param options The options parameters.
     */
    listMappingDataSources(options?: ListMappingDataSourcesOptionalParams): Promise<ListMappingDataSourcesResponse>;
    /**
     * Return a specific mapping data source.
     * @param identifier Data source's identifier
     * @param options The options parameters.
     */
    getMappingDataSource(identifier: string, options?: GetMappingDataSourceOptionalParams): Promise<GetMappingDataSourceResponse>;
    /**
     * Delete the specified mapping data source from the database.
     * @param identifier Data source's identifier
     * @param options The options parameters.
     */
    deleteMappingDataSource(identifier: string, options?: DeleteMappingDataSourceOptionalParams): Promise<void>;
    /**
     * Returns the list of all values in a mapping data source
     * @param identifier Data source's identifier
     * @param options The options parameters.
     */
    listMappingDataSourceValues(identifier: string, options?: ListMappingDataSourceValuesOptionalParams): Promise<ListMappingDataSourceValuesResponse>;
    /**
     * Replaces the list of all values in a mapping data source
     * Note: For large data sources (e.g. > 1000 values), it can take a few minutes after the request
     * completes for the new values to be searchable.
     * @param identifier Data source's identifier
     * @param body Array of AnyObject
     * @param options The options parameters.
     */
    replaceMappingDataSourceValues(identifier: string, body: Record<string, unknown>[], options?: ReplaceMappingDataSourceValuesOptionalParams): Promise<ReplaceMappingDataSourceValuesResponse>;
    /**
     * Adds a value to a mapping data source
     * @param identifier Data source's identifier
     * @param body Any object
     * @param options The options parameters.
     */
    addMappingDataSourceValue(identifier: string, body: Record<string, unknown>, options?: AddMappingDataSourceValueOptionalParams): Promise<AddMappingDataSourceValueResponse>;
    /**
     * Return a specific mapping dta source value.
     * @param identifier Data source's identifier
     * @param value Data Source Value's value
     * @param options The options parameters.
     */
    getMappingDataSourceValue(identifier: string, value: string, options?: GetMappingDataSourceValueOptionalParams): Promise<GetMappingDataSourceValueResponse>;
    /**
     * Update the specified mapping data source value.
     * @param identifier Data source's identifier
     * @param value Data Source's value
     * @param body Any object
     * @param options The options parameters.
     */
    updateMappingDataSourceValue(identifier: string, value: string, body: Record<string, unknown>, options?: UpdateMappingDataSourceValueOptionalParams): Promise<UpdateMappingDataSourceValueResponse>;
    /**
     * Delete the specified mapping data source value from the database.
     * @param identifier Data source's identifier
     * @param value Data Source Value's value
     * @param options The options parameters.
     */
    deleteMappingDataSourceValue(identifier: string, value: string, options?: DeleteMappingDataSourceValueOptionalParams): Promise<void>;
    /**
     * Returns the validation results of a document.
     * @param document Filter by document.
     * @param options The options parameters.
     */
    getAllValidationResults(document: string, options?: GetAllValidationResultsOptionalParams): Promise<GetAllValidationResultsResponse>;
    /**
     * Create a validation result.
     * @param body
     * @param options The options parameters.
     */
    createValidationResult(body: ValidationResultCreate, options?: CreateValidationResultOptionalParams): Promise<CreateValidationResultResponse>;
    /**
     * Return a specific validation result.
     * @param id Validation result's ID.
     * @param options The options parameters.
     */
    getValidationResult(id: number, options?: GetValidationResultOptionalParams): Promise<GetValidationResultResponse>;
    /**
     * Update a validation result.
     * @param id Validation result's ID.
     * @param body Validation result data to update
     * @param options The options parameters.
     */
    updateValidationResult(id: number, body: ValidationResultUpdate, options?: UpdateValidationResultOptionalParams): Promise<UpdateValidationResultResponse>;
    /**
     * Remove validation result.
     * @param id Validation result's ID.
     * @param options The options parameters.
     */
    deleteValidationResult(id: number, options?: DeleteValidationResultOptionalParams): Promise<void>;
    /**
     * Batch create validation results.
     * @param body Array of ValidationResultCreate
     * @param options The options parameters.
     */
    batchCreateValidationResults(body: ValidationResultCreate[], options?: BatchCreateValidationResultsOptionalParams): Promise<BatchCreateValidationResultsResponse>;
    /**
     * Batch delete validation results
     * @param body
     * @param options The options parameters.
     */
    batchDeleteValidationResults(body: BatchDeleteValidationResultsRequest, options?: BatchDeleteValidationResultsOptionalParams): Promise<void>;
    /**
     * Returns all the organizations
     * @param options The options parameters.
     */
    getAllOrganizations(options?: GetAllOrganizationsOptionalParams): Promise<GetAllOrganizationsResponse>;
    /**
     * Create a new organization.
     * @param name
     * @param options The options parameters.
     */
    createOrganization(name: string, options?: CreateOrganizationOptionalParams): Promise<CreateOrganizationResponse>;
    /**
     * Get detail of an organization.
     * @param identifier Organization identifier.
     * @param options The options parameters.
     */
    getOrganization(identifier: string, options?: GetOrganizationOptionalParams): Promise<GetOrganizationResponse>;
    /**
     * Update the detail of an organization.
     * @param identifier Organization identifier.
     * @param options The options parameters.
     */
    updateOrganization(identifier: string, options?: UpdateOrganizationOptionalParams): Promise<UpdateOrganizationResponse>;
    /**
     * Delete the specified organization from the database.
     * @param identifier Organization identifier.
     * @param options The options parameters.
     */
    deleteOrganization(identifier: string, options?: DeleteOrganizationOptionalParams): Promise<void>;
    /**
     * Returns your tags.
     * @param options The options parameters.
     */
    getAllTags(options?: GetAllTagsOptionalParams): Promise<GetAllTagsResponse>;
    /**
     * Create a tag
     * @param body
     * @param options The options parameters.
     */
    createTag(body: TagCreate, options?: CreateTagOptionalParams): Promise<CreateTagResponse>;
    /**
     * Return a specific tag.
     * @param id Tag's ID
     * @param options The options parameters.
     */
    getTag(id: number, options?: GetTagOptionalParams): Promise<GetTagResponse>;
    /**
     * Update data of an tag.
     * @param id Tag's ID
     * @param body Tag data to update
     * @param options The options parameters.
     */
    updateTag(id: number, body: TagUpdate, options?: UpdateTagOptionalParams): Promise<UpdateTagResponse>;
    /**
     * Deletes the specified tag from the database.
     * @param id Tag's ID
     * @param options The options parameters.
     */
    deleteTag(id: number, options?: DeleteTagOptionalParams): Promise<void>;
    /**
     * Add a tag to documents.
     * Tags are used to group documents together.
     * Tags can be used to filter documents.
     *
     * @param body Specify the tag and the documents to tag
     * @param options The options parameters.
     */
    batchAddTag(body: BatchAddTagRequest, options?: BatchAddTagOptionalParams): Promise<void>;
    /**
     * Remove a tag from documents.
     * @param body Specify the tag and the documents to remove the tag from
     * @param options The options parameters.
     */
    batchRemoveTag(body: BatchRemoveTagRequest, options?: BatchRemoveTagOptionalParams): Promise<void>;
    /**
     * Returns your annotations.
     * @param document Filter by document.
     * @param options The options parameters.
     */
    getAllAnnotations(document: string, options?: GetAllAnnotationsOptionalParams): Promise<GetAllAnnotationsResponse>;
    /**
     * Create a annotation
     * @param body
     * @param options The options parameters.
     */
    createAnnotation(body: AnnotationCreate, options?: CreateAnnotationOptionalParams): Promise<CreateAnnotationResponse>;
    /**
     * Return a specific annotation.
     * @param id Annotation's ID
     * @param options The options parameters.
     */
    getAnnotation(id: number, options?: GetAnnotationOptionalParams): Promise<GetAnnotationResponse>;
    /**
     * Update data of an annotation.
     * @param id Annotation's ID
     * @param body Annotation data to update
     * @param options The options parameters.
     */
    updateAnnotation(id: number, body: AnnotationUpdate, options?: UpdateAnnotationOptionalParams): Promise<UpdateAnnotationResponse>;
    /**
     * Deletes the specified annotation from the database.
     * @param id Annotation's ID
     * @param options The options parameters.
     */
    deleteAnnotation(id: number, options?: DeleteAnnotationOptionalParams): Promise<DeleteAnnotationResponse>;
    /**
     * Batch create annotations
     * @param body Array of AnnotationCreate
     * @param options The options parameters.
     */
    batchCreateAnnotations(body: AnnotationCreate[], options?: BatchCreateAnnotationsOptionalParams): Promise<BatchCreateAnnotationsResponse>;
    /**
     * Batch update annotations
     * @param body Array of AnnotationBatchUpdate
     * @param options The options parameters.
     */
    batchUpdateAnnotations(body: AnnotationBatchUpdate[], options?: BatchUpdateAnnotationsOptionalParams): Promise<BatchUpdateAnnotationsResponse>;
    /**
     * Batch delete annotations
     * @param body Array of annotation IDs to be deleted
     * @param options The options parameters.
     */
    batchDeleteAnnotations(body: number[], options?: BatchDeleteAnnotationsOptionalParams): Promise<BatchDeleteAnnotationsOperationResponse>;
    /**
     * Returns your resthook subscriptions.
     * @param options The options parameters.
     */
    getAllResthookSubscriptions(options?: GetAllResthookSubscriptionsOptionalParams): Promise<GetAllResthookSubscriptionsResponse>;
    /**
     * After a subscription is successfully created, we'll send a POST request to your target URL with a
     * `X-Hook-Secret` header. <br />
     * You need to response to this request with a 200 status code to confirm your subscribe intention. <br
     * />
     * Then, you need to use the `X-Hook-Secret` to activate the subscription using the
     * [/resthook_subscriptions/activate](#post-/v3/resthook_subscriptions/activate) endpoint. <br />
     * For more information and detailed instructions, [see our webhooks documentation
     * here.](https://docs.affinda.com/docs/webhooks)
     * @param body
     * @param options The options parameters.
     */
    createResthookSubscription(body: ResthookSubscriptionCreate, options?: CreateResthookSubscriptionOptionalParams): Promise<CreateResthookSubscriptionResponse>;
    /**
     * Return a specific resthook subscription.
     * @param id Resthook subscription's ID
     * @param options The options parameters.
     */
    getResthookSubscription(id: number, options?: GetResthookSubscriptionOptionalParams): Promise<GetResthookSubscriptionResponse>;
    /**
     * Update data of a resthook subscription.
     * @param id ResthookSubscription's ID
     * @param body ResthookSubscription data to update
     * @param options The options parameters.
     */
    updateResthookSubscription(id: number, body: ResthookSubscriptionUpdate, options?: UpdateResthookSubscriptionOptionalParams): Promise<UpdateResthookSubscriptionResponse>;
    /**
     * Deletes the specified resthook subscription from the database.
     * @param id ResthookSubscription's ID
     * @param options The options parameters.
     */
    deleteResthookSubscription(id: number, options?: DeleteResthookSubscriptionOptionalParams): Promise<void>;
    /**
     * After creating a subscription, we'll send a POST request to your target URL with a `X-Hook-Secret`
     * header. <br />
     * You should response to this with a 200 status code, and use the value of the `X-Hook-Secret` header
     * that you received to activate the subscription using this endpoint.
     * @param xHookSecret The secret received when creating a subscription.
     * @param options The options parameters.
     */
    activateResthookSubscription(xHookSecret: string, options?: ActivateResthookSubscriptionOptionalParams): Promise<ActivateResthookSubscriptionResponse>;
    /**
     * Creates a document directly from structured resume or job description data for use in Search & Match
     * functionality. This endpoint is specifically designed for programmatic document creation without
     * file uploads.<br/>
     * If you want to upload a document with a file or URL, see the main [POST
     * /v3/documents](#post-/v3/documents) endpoint under the Documents tag.<br/>
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/documents/{identifier}](#get-/v3/documents/-identifier-) endpoint to check processing status and
     * retrieve results.<br/>
     * @param body Resume or job description data to create a document from
     * @param options The options parameters.
     */
    createDocumentFromData(body: DocumentCreateFromData, options?: CreateDocumentFromDataOptionalParams): Promise<CreateDocumentFromDataResponse>;
    /**
     * Update data of a document.
     * Only applicable for resumes and job descriptions. For other document types, please use the `PATCH
     * /annotations/{id}` endpoint or the `POST /annotations/batch_update` endpoint.
     * @param identifier Resume or Job Description identifier
     * @param body Resume data to update
     * @param options The options parameters.
     */
    updateDocumentData(identifier: string, body: PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema, options?: UpdateDocumentDataOptionalParams): Promise<UpdateDocumentDataResponse>;
    /**
     * Returns the list of searchable occupation groups.
     * @param options The options parameters.
     */
    listOccupationGroups(options?: ListOccupationGroupsOptionalParams): Promise<ListOccupationGroupsResponse>;
    /**
     * Searches through parsed resumes. Users have 3 options to create a search:<br /><br /> 1.	Match to a
     * job description - a parsed job description is used to find candidates that suit it<br /> 2.	Match to
     * a resume - a parsed resume is used to find other candidates that have similar attributes<br /> 3.
     * Search using custom criteria<br /><br /> Users should only populate 1 of jobDescription, resume or
     * the custom criteria.
     * @param body Search parameters
     * @param options The options parameters.
     */
    createResumeSearch(body: ResumeSearchParameters, options?: CreateResumeSearchOptionalParams): Promise<CreateResumeSearchResponse>;
    /**
     * This contains more detailed information about the matching score of the search criteria, or which
     * search criteria is missing in this resume.
     * The `identifier` is the unique ID returned via the [/resume_search](#post-/resume_search) endpoint.
     * @param identifier Resume identifier
     * @param body Search parameters
     * @param options The options parameters.
     */
    getResumeSearchDetail(identifier: string, body: ResumeSearchParameters, options?: GetResumeSearchDetailOptionalParams): Promise<GetResumeSearchDetailResponse>;
    /**
     * Return configurations such as which fields can be displayed in the logged in user's embeddable
     * resume search tool, what are their weights, what is the maximum number of results that can be
     * returned, etc.
     * @param options The options parameters.
     */
    getResumeSearchConfig(options?: GetResumeSearchConfigOptionalParams): Promise<GetResumeSearchConfigResponse>;
    /**
     * Update configurations such as which fields can be displayed in the logged in user's embeddable
     * resume search tool, what are their weights, what is the maximum number of results that can be
     * returned, etc.
     * @param body
     * @param options The options parameters.
     */
    updateResumeSearchConfig(body: ResumeSearchConfig, options?: UpdateResumeSearchConfigOptionalParams): Promise<UpdateResumeSearchConfigResponse>;
    /**
     * Create and return a signed URL of the resume search tool which then can be embedded on a web page.
     * An optional parameter `config_override` can be passed to override the user-level configurations of
     * the embeddable resume search tool.
     * @param options The options parameters.
     */
    createResumeSearchEmbedUrl(options?: CreateResumeSearchEmbedUrlOptionalParams): Promise<CreateResumeSearchEmbedUrlResponse>;
    /**
     * Get the matching score between a resume and a job description. The score ranges between 0 and 1,
     * with 0 being not a match at all, and 1 being perfect match.<br/> Note, this score will not directly
     * match the score returned from POST
     * [/resume_search/details/{identifier}](#post-/resume_search/details/-identifier-).
     * @param resume Identify the resume to match.
     * @param jobDescription Identify the job description to match.
     * @param options The options parameters.
     */
    getResumeSearchMatch(resume: string, jobDescription: string, options?: GetResumeSearchMatchOptionalParams): Promise<GetResumeSearchMatchResponse>;
    /**
     * Provided one or more job titles, get related suggestions for your search.
     * @param jobTitles Job title to query suggestions for
     * @param options The options parameters.
     */
    getResumeSearchSuggestionJobTitle(jobTitles: string[], options?: GetResumeSearchSuggestionJobTitleOptionalParams): Promise<GetResumeSearchSuggestionJobTitleResponse>;
    /**
     * Provided one or more skills, get related suggestions for your search.
     * @param skills Skill to query suggestions for
     * @param options The options parameters.
     */
    getResumeSearchSuggestionSkill(skills: string[], options?: GetResumeSearchSuggestionSkillOptionalParams): Promise<GetResumeSearchSuggestionSkillResponse>;
    /**
     * Searches through parsed job descriptions. You can search with custom criterias or a resume.
     * @param body Search parameters
     * @param options The options parameters.
     */
    createJobDescriptionSearch(body: JobDescriptionSearchParameters | null, options?: CreateJobDescriptionSearchOptionalParams): Promise<CreateJobDescriptionSearchResponse>;
    /**
     * This contains more detailed information about the matching score of the search criteria, or which
     * search criteria is missing in this job description.
     * The `identifier` is the unique ID returned via the
     * [/job_description_search](#post-/job_description_search) endpoint.
     * @param identifier Job Description identifier
     * @param body Search parameters
     * @param options The options parameters.
     */
    getJobDescriptionSearchDetail(identifier: string, body: JobDescriptionSearchParameters | null, options?: GetJobDescriptionSearchDetailOptionalParams): Promise<GetJobDescriptionSearchDetailResponse>;
    /**
     * Return configurations such as which fields can be displayed in the logged in user's embeddable job
     * description search tool, what are their weights, what is the maximum number of results that can be
     * returned, etc.
     * @param options The options parameters.
     */
    getJobDescriptionSearchConfig(options?: GetJobDescriptionSearchConfigOptionalParams): Promise<GetJobDescriptionSearchConfigResponse>;
    /**
     * Update configurations such as which fields can be displayed in the logged in user's embeddable job
     * description search tool, what are their weights, what is the maximum number of results that can be
     * returned, etc.
     * @param body
     * @param options The options parameters.
     */
    updateJobDescriptionSearchConfig(body: JobDescriptionSearchConfig, options?: UpdateJobDescriptionSearchConfigOptionalParams): Promise<UpdateJobDescriptionSearchConfigResponse>;
    /**
     * Create and return a signed URL of the job description search tool which then can be embedded on a
     * web page. An optional parameter `config_override` can be passed to override the user-level
     * configurations of the embeddable search tool.
     * @param options The options parameters.
     */
    createJobDescriptionSearchEmbedUrl(options?: CreateJobDescriptionSearchEmbedUrlOptionalParams): Promise<CreateJobDescriptionSearchEmbedUrlResponse>;
    /**
     * Returns all the indexes
     * @param options The options parameters.
     */
    getAllIndexes(options?: GetAllIndexesOptionalParams): Promise<GetAllIndexesResponse>;
    /**
     * Create an index for the search tool
     * @param body Index to create
     * @param options The options parameters.
     */
    createIndex(body: IndexCreate, options?: CreateIndexOptionalParams): Promise<CreateIndexResponse>;
    /**
     * Updates the specified index
     * @param name Index name
     * @param body Index data to update
     * @param options The options parameters.
     */
    updateIndex(name: string, body: IndexUpdate, options?: UpdateIndexOptionalParams): Promise<UpdateIndexResponse>;
    /**
     * Deletes the specified index from the database
     * @param name Index name
     * @param options The options parameters.
     */
    deleteIndex(name: string, options?: DeleteIndexOptionalParams): Promise<void>;
    /**
     * Returns all the indexed documents for that index
     * @param name Index name
     * @param options The options parameters.
     */
    getAllIndexDocuments(name: string, options?: GetAllIndexDocumentsOptionalParams): Promise<GetAllIndexDocumentsResponse>;
    /**
     * Create an indexed document for the search tool
     * @param name Index name
     * @param body Document to index
     * @param options The options parameters.
     */
    createIndexDocument(name: string, body: PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema, options?: CreateIndexDocumentOptionalParams): Promise<CreateIndexDocumentResponse>;
    /**
     * Delete the specified indexed document from the database
     * @param name Index name
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteIndexDocument(name: string, identifier: string, options?: DeleteIndexDocumentOptionalParams): Promise<void>;
    /**
     * Re-index a document.
     * This is relevant if you updated the document's data via the /annotations endpoint, and want to
     * refresh
     * the document's data in the search index.
     *
     * @param name Index name
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    reIndexDocument(name: string, identifier: string, options?: ReIndexDocumentOptionalParams): Promise<void>;
    /**
     * Returns your collections.
     * @param workspace Filter by workspace.
     * @param options The options parameters.
     */
    getAllCollections(workspace: string, options?: GetAllCollectionsOptionalParams): Promise<GetAllCollectionsResponse>;
    /**
     * Create a collection
     * @param body
     * @param options The options parameters.
     */
    createCollection(body: CollectionCreate, options?: CreateCollectionOptionalParams): Promise<CreateCollectionResponse>;
    /**
     * Return a specific collection.
     * @param identifier Collection's identifier
     * @param options The options parameters.
     */
    getCollection(identifier: string, options?: GetCollectionOptionalParams): Promise<GetCollectionResponse>;
    /**
     * Update data of a collection.
     * @param identifier Collection's identifier
     * @param body Collection data to update
     * @param options The options parameters.
     */
    updateCollection(identifier: string, body: CollectionUpdate, options?: UpdateCollectionOptionalParams): Promise<UpdateCollectionResponse>;
    /**
     * Deletes the specified collection from the database.
     * @param identifier Collection's identifier
     * @param options The options parameters.
     */
    deleteCollection(identifier: string, options?: DeleteCollectionOptionalParams): Promise<void>;
    /**
     * Create data field for a collection along with a new data point.
     * @param identifier Collection's identifier
     * @param body The data field and data point to be created.
     * @param options The options parameters.
     */
    createDataFieldForCollection(identifier: string, body: DataFieldCreate, options?: CreateDataFieldForCollectionOptionalParams): Promise<CreateDataFieldForCollectionResponse>;
    /**
     * Get a data field for a collection assosciated with a data point
     * @param identifier Collection's identifier
     * @param datapointIdentifier Datapoint's identifier
     * @param options The options parameters.
     */
    getDataFieldForCollection(identifier: string, datapointIdentifier: string, options?: GetDataFieldForCollectionOptionalParams): Promise<GetDataFieldForCollectionResponse>;
    /**
     * Update data field for a collection assosciated with a data point
     * @param identifier Collection's identifier
     * @param datapointIdentifier Datapoint's identifier
     * @param body Data field properties to update
     * @param options The options parameters.
     */
    updateDataFieldForCollection(identifier: string, datapointIdentifier: string, body: CollectionField, options?: UpdateDataFieldForCollectionOptionalParams): Promise<UpdateDataFieldForCollectionResponse>;
    /**
     * Return monthly credits consumption of a collection.
     * @param identifier Collection's identifier
     * @param options The options parameters.
     */
    getUsageByCollection(identifier: string, options?: GetUsageByCollectionOptionalParams): Promise<GetUsageByCollectionResponse>;
    /**
     * Returns your custom data points as well as Affinda's off-the-shelf data points.
     * @param options The options parameters.
     */
    getAllDataPoints(options?: GetAllDataPointsOptionalParams): Promise<GetAllDataPointsResponse>;
    /**
     * Create a custom data point.
     * @param options The options parameters.
     */
    createDataPoint(options?: CreateDataPointOptionalParams): Promise<CreateDataPointResponse>;
    /**
     * Return a specific data point.
     * @param identifier Data point's identifier
     * @param options The options parameters.
     */
    getDataPoint(identifier: string, options?: GetDataPointOptionalParams): Promise<GetDataPointResponse>;
    /**
     * Update data of a data point.
     * @param identifier DataPoint's identifier
     * @param body Data point to update
     * @param options The options parameters.
     */
    updateDataPoint(identifier: string, body: DataPointUpdate, options?: UpdateDataPointOptionalParams): Promise<UpdateDataPointResponse>;
    /**
     * Deletes the specified data point from the database.
     * @param identifier DataPoint's identifier
     * @param options The options parameters.
     */
    deleteDataPoint(identifier: string, options?: DeleteDataPointOptionalParams): Promise<void>;
    /**
     * Returns available choices for a specific enum data point.
     * @param dataPoint The data point to get choices for.
     * @param collection The collection to get choices for.
     * @param options The options parameters.
     */
    getDataPointChoices(dataPoint: string, collection: string, options?: GetDataPointChoicesOptionalParams): Promise<GetDataPointChoicesResponse>;
    /**
     * Create a custom data point choice.
     * @param options The options parameters.
     */
    createDataPointChoice(options?: CreateDataPointChoiceOptionalParams): Promise<CreateDataPointChoiceResponse>;
    /**
     * Return a specific data point choice.
     * @param id Data point choice's ID
     * @param options The options parameters.
     */
    getDataPointChoice(id: number, options?: GetDataPointChoiceOptionalParams): Promise<GetDataPointChoiceResponse>;
    /**
     * Update data of a data point choice.
     * @param id Data point choice's ID
     * @param body Data point choice to update
     * @param options The options parameters.
     */
    updateDataPointChoice(id: number, body: DataPointChoiceUpdate, options?: UpdateDataPointChoiceOptionalParams): Promise<UpdateDataPointChoiceResponse>;
    /**
     * Deletes the specified data point choice from the database.
     * @param id Data point choice's ID
     * @param options The options parameters.
     */
    deleteDataPointChoice(id: number, options?: DeleteDataPointChoiceOptionalParams): Promise<void>;
    /**
     * Replace choices of a data point. Existing choices and incoming choices are matched base on their
     * `value`. New `value` will be created, existing `value` will be updated, and `value` not in incoming
     * choices will be deleted.
     * @param options The options parameters.
     */
    replaceDataPointChoices(options?: ReplaceDataPointChoicesOptionalParams): Promise<ReplaceDataPointChoicesResponse>;
    /**
     * Returns your API users.
     * @param options The options parameters.
     */
    getAllApiUsers(options?: GetAllApiUsersOptionalParams): Promise<GetAllApiUsersResponse>;
    /**
     * Create an API user
     * @param body
     * @param options The options parameters.
     */
    createApiUser(body: ApiUserCreate, options?: CreateApiUserOptionalParams): Promise<CreateApiUserResponse>;
    /**
     * Return a specific API user.
     * @param id API user's ID
     * @param options The options parameters.
     */
    getApiUser(id: number, options?: GetApiUserOptionalParams): Promise<GetApiUserResponse>;
    /**
     * Update data of an API user.
     * @param id API user's ID
     * @param body API user to update
     * @param options The options parameters.
     */
    updateApiUser(id: number, body: ApiUserUpdate, options?: UpdateApiUserOptionalParams): Promise<UpdateApiUserResponse>;
    /**
     * Deletes the specified API user from the database.
     * @param id API user's ID
     * @param options The options parameters.
     */
    deleteApiUser(id: number, options?: DeleteApiUserOptionalParams): Promise<void>;
    /**
     * Regenerate API key for an API user.
     * @param id API user's ID
     * @param options The options parameters.
     */
    regenerateApiKeyForApiUser(id: number, options?: RegenerateApiKeyForApiUserOptionalParams): Promise<RegenerateApiKeyForApiUserResponse>;
    /**
     * Returns all the document splitters visible to the user.
     * @param options The options parameters.
     */
    getAllDocumentSplitters(options?: GetAllDocumentSplittersOptionalParams): Promise<GetAllDocumentSplittersResponse>;
    /**
     * Return a specific document splitter.
     * @param identifier Document splitter's identifier
     * @param options The options parameters.
     */
    getDocumentSplitter(identifier: string, options?: GetDocumentSplitterOptionalParams): Promise<GetDocumentSplitterResponse>;
    /**
     * Split / merge / rotate / delete pages of a document.
     * Documents with multiple pages can be splitted into multiple documents, or merged into one document.
     * Each page can also be rotated. Edit operations will trigger re-parsing of the documents involved.
     *
     * @param identifier Document's identifier
     * @param body Describe how the pages should be edited
     * @param options The options parameters.
     */
    editDocumentPages(identifier: string, body: DocumentEditRequest, options?: EditDocumentPagesOptionalParams): Promise<EditDocumentPagesResponse>;
    /**
     * Returns your custom extractors as well as Affinda's off-the-shelf extractors.
     * @param organization Filter by organization.
     * @param options The options parameters.
     */
    getAllExtractors(organization: string, options?: GetAllExtractorsOptionalParams): Promise<GetAllExtractorsResponse>;
    /**
     * Create a custom extractor.
     * @param options The options parameters.
     */
    createExtractor(options?: CreateExtractorOptionalParams): Promise<CreateExtractorResponse>;
    /**
     * Return a specific extractor.
     * @param identifier Extractor's identifier
     * @param options The options parameters.
     */
    getExtractor(identifier: string, options?: GetExtractorOptionalParams): Promise<GetExtractorResponse>;
    /**
     * Update data of an extractor.
     * @param identifier Extractor's identifier
     * @param body Extractor data to update
     * @param options The options parameters.
     */
    updateExtractor(identifier: string, body: ExtractorUpdate, options?: UpdateExtractorOptionalParams): Promise<UpdateExtractorResponse>;
    /**
     * Deletes the specified extractor from the database.
     * @param identifier Extractor's identifier
     * @param options The options parameters.
     */
    deleteExtractor(identifier: string, options?: DeleteExtractorOptionalParams): Promise<void>;
    /**
     * Returns all the organization memberships
     * @param options The options parameters.
     */
    getAllOrganizationMemberships(options?: GetAllOrganizationMembershipsOptionalParams): Promise<GetAllOrganizationMembershipsResponse>;
    /**
     * Get detail of an organization membership.
     * @param identifier Membership identifier.
     * @param options The options parameters.
     */
    getOrganizationMembership(identifier: string, options?: GetOrganizationMembershipOptionalParams): Promise<GetOrganizationMembershipResponse>;
    /**
     * The admin users can use this endpoint to update the role of the members within their organization.
     * @param identifier Membership identifier.
     * @param body
     * @param options The options parameters.
     */
    updateOrganizationMembership(identifier: string, body: OrganizationMembershipUpdate, options?: UpdateOrganizationMembershipOptionalParams): Promise<UpdateOrganizationMembershipResponse>;
    /**
     * The admin users can use this endpoint to remove member from their organization. Other users can also
     * use this to leave their organization.
     * @param identifier Membership identifier.
     * @param options The options parameters.
     */
    deleteOrganizationMembership(identifier: string, options?: DeleteOrganizationMembershipOptionalParams): Promise<void>;
    /**
     * Get list of all invitations you created or sent to you.
     * @param options The options parameters.
     */
    getAllInvitations(options?: GetAllInvitationsOptionalParams): Promise<GetAllInvitationsResponse>;
    /**
     * Create a new invitation.
     * @param body Invitation to create.
     * @param options The options parameters.
     */
    createInvitation(body: InvitationCreate, options?: CreateInvitationOptionalParams): Promise<CreateInvitationResponse>;
    /**
     * Get detail of an invitation.
     * @param identifier Invitation identifier.
     * @param options The options parameters.
     */
    getInvitation(identifier: string, options?: GetInvitationOptionalParams): Promise<GetInvitationResponse>;
    /**
     * Update the detail of an invitation.
     * @param identifier Invitation identifier.
     * @param body
     * @param options The options parameters.
     */
    updateInvitation(identifier: string, body: InvitationUpdate, options?: UpdateInvitationOptionalParams): Promise<UpdateInvitationResponse>;
    /**
     * Delete the specified invitation from the database.
     * @param identifier Invitation identifier.
     * @param options The options parameters.
     */
    deleteInvitation(identifier: string, options?: DeleteInvitationOptionalParams): Promise<void>;
    /**
     * Get detail of an invitation using a secret token. This allows users who have not registered/logged
     * in to view the invitation.
     * @param token Invitation token.
     * @param options The options parameters.
     */
    getInvitationByToken(token: string, options?: GetInvitationByTokenOptionalParams): Promise<GetInvitationByTokenResponse>;
    /**
     * Choose to accept or decline an invitation.
     * @param token Invitation token.
     * @param body
     * @param options The options parameters.
     */
    respondToInvitation(token: string, body: InvitationResponse, options?: RespondToInvitationOptionalParams): Promise<RespondToInvitationResponse>;
    /**
     * Create a custom mapping.
     * @param body
     * @param options The options parameters.
     */
    createMapping(body: MappingCreate, options?: CreateMappingOptionalParams): Promise<CreateMappingResponse>;
    /**
     * Returns the list of all custom data mappings.
     * @param mappingDataSource Data source's identifier
     * @param options The options parameters.
     */
    listMappings(mappingDataSource: string, options?: ListMappingsOptionalParams): Promise<ListMappingsResponse>;
    /**
     * Return a specific mapping.
     * @param identifier Mapping's identifier
     * @param options The options parameters.
     */
    getMapping(identifier: string, options?: GetMappingOptionalParams): Promise<GetMappingResponse>;
    /**
     * Delete the specified mapping from the database.
     * @param identifier Mapping's identifier
     * @param options The options parameters.
     */
    deleteMapping(identifier: string, options?: DeleteMappingOptionalParams): Promise<void>;
    /**
     * Updates a specific mapping.
     * @param identifier Mapping's identifier
     * @param body
     * @param options The options parameters.
     */
    updateMapping(identifier: string, body: MappingUpdate, options?: UpdateMappingOptionalParams): Promise<UpdateMappingResponse>;
}

/** Optional parameters. */
export declare interface AffindaAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** region - server parameter */
    region?: Region;
    /** Overrides client endpoint. */
    endpoint?: string;
}

export declare class AffindaCredential implements TokenCredential {
    token: string;
    constructor(token: string);
    getToken(scopes: string | string[], options?: GetTokenOptions): Promise<AccessToken | null>;
}

export declare interface Annotation {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** Annotation's ID */
    id: number;
    /** x/y coordinates for the rectangular bounding box containing the data */
    rectangle: Rectangle | null;
    /** x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles. */
    rectangles: Rectangle[];
    /** Unique identifier for the document */
    document: string;
    /** The page number within the document, starting from 0. */
    pageIndex: number | null;
    /** Raw data extracted from the before any post-processing */
    raw: string | null;
    /** The overall confidence that the model's prediction is correct */
    confidence: number | null;
    /** The model's confidence that the text has been classified correctly */
    classificationConfidence: number | null;
    /** If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model */
    textExtractionConfidence: number | null;
    /** Indicates whether the data has been validated, either by a human using our validation tool or through auto-validation rules */
    isVerified: boolean;
    /** Indicates whether the data has been validated by a human */
    isClientVerified: boolean;
    /** Indicates whether the data has been auto-validated */
    isAutoVerified: boolean;
    /** Data point's identifier */
    dataPoint?: string;
    /** Field's identifier */
    field?: string;
    /** The different data types of annotations */
    contentType: AnnotationContentType;
    /** The parent annotation's ID */
    parent?: number;
}

export declare interface AnnotationBase {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    id?: number;
    rectangle?: Rectangle;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly rectangles?: Rectangle[];
    pageIndex?: number;
    raw?: string;
    /** The overall confidence that the model's prediction is correct */
    confidence?: number;
    /** The model's confidence that the text has been classified correctly */
    classificationConfidence?: number;
    /** If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model. */
    textExtractionConfidence?: number;
    isVerified?: boolean;
    isClientVerified?: boolean;
    isAutoVerified?: boolean;
    dataPoint?: string;
    contentType?: string;
}

export declare interface AnnotationBatchUpdate {
    /** Annotation's ID */
    id: number;
    /** x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles. */
    rectangles?: Rectangle[];
    /** Unique identifier for the document */
    document?: string;
    /** The page number within the document, starting from 0. */
    pageIndex?: number;
    /** Raw data extracted from the before any post-processing */
    raw?: string;
    /** Anything */
    parsed?: any;
    /** Indicates whether the data has been validated by a human */
    isClientVerified?: boolean;
    /** Data point's identifier */
    dataPoint?: string;
    /** The parent annotation's ID */
    parent?: number;
    /** The validation results created, changed or deleted as a result of updating the annotation. */
    validationResults?: (ChangedValidationResults | null)[];
}

/**
 * Defines values for AnnotationContentType. \
 * {@link KnownAnnotationContentType} can be used interchangeably with AnnotationContentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **text** \
 * **integer** \
 * **float** \
 * **decimal** \
 * **date** \
 * **datetime** \
 * **daterange** \
 * **boolean** \
 * **enum** \
 * **location** \
 * **phonenumber** \
 * **json** \
 * **table** \
 * **expectedremuneration** \
 * **jobtitle** \
 * **language** \
 * **skill** \
 * **yearsexperience** \
 * **group** \
 * **table_deprecated** \
 * **url** \
 * **image** \
 * **docclf**
 */
export declare type AnnotationContentType = string;

export declare interface AnnotationCreate {
    /** x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles. */
    rectangles?: Rectangle[];
    /** Unique identifier for the document */
    document: string;
    /** The page number within the document, starting from 0. */
    pageIndex: number | null;
    /** Data point's identifier */
    dataPoint?: string;
    /** Field's identifier */
    field?: string;
    /** Raw data extracted from the before any post-processing */
    raw?: string;
    /** Anything */
    parsed?: any;
    /** Indicates whether the data has been validated by a human */
    isClientVerified?: boolean;
    /** The parent annotation's ID */
    parent?: number;
    /** The validation results created, changed or deleted as a result of creating the annotation. */
    validationResults?: (ChangedValidationResults | null)[];
}

export declare interface AnnotationUpdate {
    /** x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles. */
    rectangles?: Rectangle[];
    /** Unique identifier for the document */
    document?: string;
    /** The page number within the document, starting from 0. */
    pageIndex?: number;
    /** Raw data extracted from the before any post-processing */
    raw?: string;
    /** Anything */
    parsed?: any;
    /** Indicates whether the data has been validated by a human */
    isClientVerified?: boolean;
    /** Data point's identifier */
    dataPoint?: string;
    /** Field's identifier */
    field?: string;
    /** The parent annotation's ID */
    parent?: number;
    /** The validation results created, changed or deleted as a result of updating the annotation. */
    validationResults?: (ChangedValidationResults | null)[];
}

export declare interface AnnotationWithValidationResults extends Annotation {
    /** List of validation results for this annotation. */
    validationResults?: ValidationResult[];
}

export declare interface AnotationDelete {
    /** The validation results created, changed or deleted as a result of deleting the annotation. */
    validationResults?: Record<string, unknown>;
}

export declare interface ApiUserCreate {
    name?: string;
    username?: string;
    email?: string;
    /** URL of the user's avatar. */
    avatar?: string;
    /** Uniquely identify an organization. */
    organization: string;
}

export declare interface ApiUserUpdate {
    name?: string;
    username?: string;
    email?: string;
    /** URL of the user's avatar. */
    avatar?: string;
}

export declare interface ApiUserWithKey {
    /** Uniquely identify a user. */
    id: number;
    name: string;
    username: string;
    email: string;
    /** URL of the user's avatar. */
    avatar: string | null;
    organizations: ApiUserWithKeyOrganizationsItem[];
    /** Use this key to authenticate with the API. */
    apiKey: string;
    /** The last 4 characters of the API key. */
    apiKeyLastChars?: string;
}

export declare interface ApiUserWithKeyOrganizationsItem {
    /** Uniquely identify an organization. */
    identifier: string;
    name: string;
}

export declare interface ApiUserWithoutKey {
    /** Uniquely identify a user. */
    id: number;
    name: string;
    username: string;
    email: string;
    /** URL of the user's avatar. */
    avatar: string | null;
    organizations: ApiUserWithoutKeyOrganizationsItem[];
    /** The last 4 characters of the API key. */
    apiKeyLastChars?: string;
}

export declare interface ApiUserWithoutKeyOrganizationsItem {
    /** Uniquely identify an organization. */
    identifier: string;
    name: string;
}

export declare interface BaseExtractor {
    /** Uniquely identify an extractor. */
    identifier: string;
    name: string;
    namePlural: string;
    validatable: boolean;
    isCustom?: boolean;
    createdDt?: Date;
}

/** Optional parameters. */
export declare interface BatchAddTagOptionalParams extends coreClient.OperationOptions {
}

export declare interface BatchAddTagRequest {
    /** List of documents to tag */
    identifiers?: string[];
    /** The tag's ID */
    tag?: number;
}

/** Optional parameters. */
export declare interface BatchCreateAnnotationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the batchCreateAnnotations operation. */
export declare type BatchCreateAnnotationsResponse = (Annotation | null)[];

/** Optional parameters. */
export declare interface BatchCreateValidationResultsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the batchCreateValidationResults operation. */
export declare type BatchCreateValidationResultsResponse = ValidationResult[];

/** Contains response data for the batchDeleteAnnotations operation. */
export declare type BatchDeleteAnnotationsOperationResponse = BatchDeleteAnnotationsResponse;

/** Optional parameters. */
export declare interface BatchDeleteAnnotationsOptionalParams extends coreClient.OperationOptions {
}

export declare interface BatchDeleteAnnotationsResponse {
    /** The validation results created, changed or deleted as a result of deleting the annotations. */
    validationResults?: Record<string, unknown>;
}

/** Optional parameters. */
export declare interface BatchDeleteValidationResultsOptionalParams extends coreClient.OperationOptions {
}

export declare interface BatchDeleteValidationResultsRequest {
    /** List of validation result IDs to delete. */
    ids: number[];
}

/** Optional parameters. */
export declare interface BatchRemoveTagOptionalParams extends coreClient.OperationOptions {
}

export declare interface BatchRemoveTagRequest {
    /** List of documents to remove tag from */
    identifiers?: string[];
    /** The tag's ID */
    tag?: number;
}

/** Optional parameters. */
export declare interface BatchUpdateAnnotationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the batchUpdateAnnotations operation. */
export declare type BatchUpdateAnnotationsResponse = (Annotation | null)[];

export declare interface ChangedValidationResults {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** List of validation results created during this operation. */
    created?: ValidationResult[];
    /** List of validation results updated during this operation. */
    updated?: ValidationResult[];
    /** List of validation results deleted during this operation. */
    deleted?: ValidationResult[];
}

export declare interface Collection {
    /** Uniquely identify a collection. */
    identifier: string;
    name?: string;
    workspace?: CollectionWorkspace;
    extractor?: Extractor;
    autoValidationThreshold?: number;
    enableAutoValidationThreshold?: boolean;
    autoValidateIfValidationRulesPass?: boolean;
    fields?: FieldGroup[];
    fieldsLayout?: FieldsLayout;
    fieldsConfigured?: boolean;
    dateFormatPreference?: CollectionDateFormatPreference;
    /** Predict the date format from any dates in the document that is not ambiguous. */
    dateFormatFromDocument?: boolean;
    /** Extra configurations specific to an extractor. */
    extractorConfig?: ExtractorConfig;
    /** Number of unvalidated documents in the collection. */
    unvalidatedDocsCount?: number;
    /** Number of validated documents in the collection. */
    confirmedDocsCount?: number;
    /** When you send email to this address, any document attached in the body will be uploaded to this collection. */
    ingestEmail?: string;
    /** Whether a tailored extractor has been requested for this collection. */
    tailoredExtractorRequested?: boolean;
    /** Whether to allow OpenAI API to be used to assist in creating a model for this collection. */
    allowOpenai?: boolean;
    /** Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors. */
    trainsExtractor?: boolean;
    /** If True, users cannot validate documents with missing mandatory fields, or failing validation rules. */
    disableConfirmationIfValidationRulesFail?: boolean;
    /** If True, validation results are refreshed whenever annotations are changed. */
    autoRefreshValidationResults?: boolean;
}

export declare interface CollectionCreate {
    name: string;
    /** Uniquely identify a workspace. */
    workspace: string;
    /** Uniquely identify an extractor. Required if you are not a super user. */
    extractor?: string;
    /** Not applicable, please leave empty. This feature is reserved for super user. */
    baseExtractor?: string;
    autoValidationThreshold?: number;
    enableAutoValidationThreshold?: boolean;
    fields?: FieldGroup[];
    fieldsLayout?: FieldsLayout;
    dateFormatPreference?: DateFormatPreference;
    /** Predict the date format from any dates in the document that is not ambiguous. */
    dateFormatFromDocument?: boolean;
    /** Extra configurations specific to an extractor. */
    extractorConfig?: ExtractorConfig;
    /** Whether to allow OpenAI API to be used to assist in creating a model for this collection. */
    allowOpenai?: boolean;
    /** Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors. */
    trainsExtractor?: boolean;
    /** If True, users cannot validate documents with missing mandatory fields, or failing validation rules. */
    disableConfirmationIfValidationRulesFail?: boolean;
}

/**
 * Defines values for CollectionDateFormatPreference. \
 * {@link KnownCollectionDateFormatPreference} can be used interchangeably with CollectionDateFormatPreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DMY** \
 * **MDY** \
 * **YMD**
 */
export declare type CollectionDateFormatPreference = string;

export declare interface CollectionField {
    label?: string;
    /** The different data types of annotations */
    fieldType?: AnnotationContentType;
    mandatory?: boolean;
    showDropdown?: boolean;
    /** If true, both the value and the label for the enums will appear in the dropdown in the validation tool. */
    displayEnumValue?: boolean;
    /** Threshold for auto validation. If null, uses the collection's autoValidationThreshold. */
    autoValidationThreshold?: number;
    /** If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection */
    enableAutoValidationThreshold?: boolean;
    /** Data source mapping identifier */
    dataSource?: string;
    /** Defines how the data point is mapped to the data source */
    mapping?: string;
    /** Defines how the data point is mapped to the data source */
    displayRawText?: string;
}

export declare interface CollectionUpdate {
    name?: string;
    autoValidationThreshold?: number;
    enableAutoValidationThreshold?: boolean;
    fields?: FieldGroup[];
    fieldsLayout?: FieldsLayout;
    dateFormatPreference?: DateFormatPreference;
    /** Predict the date format from any dates in the document that is not ambiguous. */
    dateFormatFromDocument?: boolean;
    /** Extra configurations specific to an extractor. */
    extractorConfig?: ExtractorConfig;
    /** Whether to allow OpenAI API to be used to assist in creating a model for this collection. */
    allowOpenai?: boolean;
    /** Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors. */
    trainsExtractor?: boolean;
    /** If True, users cannot validate documents with missing mandatory fields, or failing validation rules. */
    disableConfirmationIfValidationRulesFail?: boolean;
}

export declare interface CollectionWorkspace {
    /** Uniquely identify a workspace. */
    identifier?: string;
    organization?: Organization;
    name?: string;
}

export declare interface Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1 {
    match?: boolean;
}

export declare interface Components1Kwk9B6SchemasThemeconfigPropertiesPalettePropertiesBackgroundOneof1 {
    default?: string;
    paper?: string;
}

export declare interface Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1 {
    match?: boolean;
}

export declare interface Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification {
    /** SOC2020 classification for this job title */
    title?: string;
    /** SOC2020 minor group */
    minorGroup?: string;
    /** SOC2020 sub major group */
    subMajorGroup?: string;
    /** SOC2020 major group */
    majorGroup?: string;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    socCode?: number;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    minorGroupCode?: number;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    subMajorGroupCode?: number;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    majorGroupCode?: number;
}

export declare interface ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1 {
    match?: boolean;
}

export declare interface ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1 {
    match?: boolean;
}

export declare interface ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties {
    value?: string;
    label: string;
    score?: number;
}

export declare interface ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1 {
    match?: boolean;
}

/** Optional parameters. */
export declare interface CreateAnnotationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createAnnotation operation. */
export declare type CreateAnnotationResponse = AnnotationWithValidationResults;

/** Optional parameters. */
export declare interface CreateApiUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createApiUser operation. */
export declare type CreateApiUserResponse = ApiUserWithKey;

/** Optional parameters. */
export declare interface CreateCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createCollection operation. */
export declare type CreateCollectionResponse = Collection;

/** Optional parameters. */
export declare interface CreateDataFieldForCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createDataFieldForCollection operation. */
export declare type CreateDataFieldForCollectionResponse = DataField;

/** Optional parameters. */
export declare interface CreateDataPointChoiceOptionalParams extends coreClient.OperationOptions {
    body?: DataPointChoiceCreate;
}

/** Contains response data for the createDataPointChoice operation. */
export declare type CreateDataPointChoiceResponse = DataPointChoice;

/** Optional parameters. */
export declare interface CreateDataPointOptionalParams extends coreClient.OperationOptions {
    body?: DataPointCreate;
}

/** Contains response data for the createDataPoint operation. */
export declare type CreateDataPointResponse = DataPoint;

/** Optional parameters. */
export declare interface CreateDocumentFromDataOptionalParams extends coreClient.OperationOptions {
    /** Whether to return the response in snake_case instead of camelCase. Default is false. */
    snakeCase?: boolean;
}

/** Contains response data for the createDocumentFromData operation. */
export declare type CreateDocumentFromDataResponse = DocumentUnion;

/** Optional parameters. */
export declare interface CreateDocumentOptionalParams extends coreClient.OperationOptions {
    /** Whether to return the response in snake_case instead of camelCase. Default is false. */
    snakeCase?: boolean;
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG, TIFF, ODT, XLS, XLSX */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to download the document. */
    url?: string;
    /** Uniquely identify a collection. */
    collection?: string;
    /** The document type's identifier.  Provide if you already know the document type. */
    documentType?: string;
    /** Uniquely identify a workspace. */
    workspace?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: string;
    /** A JSON representation of the RegionBias object. */
    regionBias?: string;
    /** Explicitly mark this document as low priority. */
    lowPriority?: string;
    /** If true, the returned parse result (assuming `wait` is also true) will be a compact version of the full result. */
    compact?: string;
    /** If true, no data will be stored after parsing. Only compatible with requests where wait: True. */
    deleteAfterParse?: string;
    /** If true, the document will be viewable in the Affinda Validation Tool. Set to False to optimize parsing speed. */
    enableValidationTool?: string;
    /** If true, the document will be treated like an image, and the text will be extracted using OCR. If false, the document will be treated like a PDF, and the text will be extracted using the parser. If not set, we will determine whether to use OCR based on whether words are found in the document. */
    useOcr?: string;
    /** Optional hint inserted into the LLM prompt when processing this document. */
    llmHint?: string;
    /** Restrict LLM example selection to the specified document identifiers. */
    limitToExamples?: string[];
    /** Array of DocumentWarning */
    warningMessages?: DocumentWarning[];
}

/** Contains response data for the createDocument operation. */
export declare type CreateDocumentResponse = DocumentUnion;

/** Optional parameters. */
export declare interface CreateDocumentTypeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createDocumentType operation. */
export declare type CreateDocumentTypeResponse = DocumentType_2;

/** Optional parameters. */
export declare interface CreateExtractorOptionalParams extends coreClient.OperationOptions {
    body?: ExtractorCreate;
}

/** Contains response data for the createExtractor operation. */
export declare type CreateExtractorResponse = Extractor;

/** Optional parameters. */
export declare interface CreateIndexDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createIndexDocument operation. */
export declare type CreateIndexDocumentResponse = PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface CreateIndexOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createIndex operation. */
export declare type CreateIndexResponse = Index;

/** Optional parameters. */
export declare interface CreateInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createInvitation operation. */
export declare type CreateInvitationResponse = Invitation;

/** Optional parameters. */
export declare interface CreateJobDescriptionSearchEmbedUrlOptionalParams extends coreClient.OperationOptions {
    body?: PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the createJobDescriptionSearchEmbedUrl operation. */
export declare type CreateJobDescriptionSearchEmbedUrlResponse = JobDescriptionSearchEmbed;

/** Optional parameters. */
export declare interface CreateJobDescriptionSearchOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the createJobDescriptionSearch operation. */
export declare type CreateJobDescriptionSearchResponse = JobDescriptionSearch;

/** Optional parameters. */
export declare interface CreateMappingDataSourceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createMappingDataSource operation. */
export declare type CreateMappingDataSourceResponse = MappingDataSource;

/** Optional parameters. */
export declare interface CreateMappingOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createMapping operation. */
export declare type CreateMappingResponse = Mapping;

/** Optional parameters. */
export declare interface CreateOrganizationOptionalParams extends coreClient.OperationOptions {
    /** Upload avatar for the organization. */
    avatar?: coreRestPipeline.RequestBodyType;
    /** Used to sign webhook payloads so you can verify their integrity. */
    resthookSignatureKey?: string;
}

/** Contains response data for the createOrganization operation. */
export declare type CreateOrganizationResponse = Organization;

/** Optional parameters. */
export declare interface CreateResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createResthookSubscription operation. */
export declare type CreateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export declare interface CreateResumeSearchEmbedUrlOptionalParams extends coreClient.OperationOptions {
    body?: Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the createResumeSearchEmbedUrl operation. */
export declare type CreateResumeSearchEmbedUrlResponse = ResumeSearchEmbed;

/** Optional parameters. */
export declare interface CreateResumeSearchOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the createResumeSearch operation. */
export declare type CreateResumeSearchResponse = ResumeSearch;

/** Optional parameters. */
export declare interface CreateTagOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createTag operation. */
export declare type CreateTagResponse = Tag;

/** Optional parameters. */
export declare interface CreateValidationResultOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createValidationResult operation. */
export declare type CreateValidationResultResponse = ValidationResult;

/** Optional parameters. */
export declare interface CreateWorkspaceMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createWorkspaceMembership operation. */
export declare type CreateWorkspaceMembershipResponse = WorkspaceMembership;

/** Optional parameters. */
export declare interface CreateWorkspaceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createWorkspace operation. */
export declare type CreateWorkspaceResponse = Workspace;

export declare interface CurrencyCodeAnnotation extends Annotation {
    parsed?: DataPointChoice;
}

export declare interface CustomFieldConfig {
    /** Data point identifier. */
    dataPoint: string;
    weight: number;
}

export declare interface DataField {
    /** The label of the category that this field will be put into. If not provided, the field will be put into the default category. If no category exists with the specified label, a new category will be created. */
    categoryLabel?: string;
    /** The field to be created. */
    field: DataFieldField;
    /** The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused. */
    dataPoint: DataFieldDataPoint;
}

export declare interface DataFieldCreate {
    /** The label of the category that this field will be put into. If not provided, the field will be put into the default category. If no category exists with the specified label, a new category will be created. */
    categoryLabel?: string;
    /** The field to be created. */
    field: DataFieldCreateField;
    /** The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused. */
    dataPoint: DataFieldCreateDataPoint;
}

/** The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused. */
export declare interface DataFieldCreateDataPoint {
    /** Name of the data point. */
    name: string;
    /** A camelCase string that will be used as the key in the API response. */
    slug: string;
    description?: string;
    /** The different data types of annotations */
    type: AnnotationContentType;
    multiple?: boolean;
    noRect?: boolean;
    /** The identifier of the parent data point if applicable. */
    parent?: string;
    /** If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool. */
    manualEntry?: boolean;
    /** If populated, the model will learn to predict this field using the data source, rather than relying on fuzzy string matching. */
    mappingDataSource?: string;
}

/** The field to be created. */
export declare interface DataFieldCreateField {
    label: string;
    /** The different data types of annotations */
    fieldType?: AnnotationContentType;
    mandatory?: boolean;
    showDropdown?: boolean;
    /** If true, both the value and the label for the enums will appear in the dropdown in the validation tool. */
    displayEnumValue?: boolean;
    /** Threshold for auto validation. If null, uses the collection's autoValidationThreshold. */
    autoValidationThreshold?: number;
    /** If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection */
    enableAutoValidationThreshold?: boolean;
    /** Data source mapping identifier */
    dataSource?: string;
    /** Defines how the data point is mapped to the data source */
    mapping?: string;
    /** If true, then the validation tool will show the user the raw text found on the page, not the value that has been parsed to a specific type. */
    displayRawText?: boolean;
}

/** The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused. */
export declare interface DataFieldDataPoint {
    /** Uniquely identify a data point. */
    identifier: string;
    /** Name of the data point. */
    name: string;
    /** A camelCase string that will be used as the key in the API response. */
    slug: string;
    description: string | null;
    /** The different data types of annotations */
    type: AnnotationContentType;
    multiple: boolean;
    noRect: boolean;
    /** The identifier of the parent data point if applicable. */
    parent: string | null;
    children: DataPoint[];
    /** If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool. */
    manualEntry?: boolean;
    availableDataSources?: MappingDataSource[];
}

/** The field to be created. */
export declare interface DataFieldField {
    label: string;
    /** The different data types of annotations */
    fieldType?: AnnotationContentType;
    mandatory: boolean;
    showDropdown?: boolean;
    /** If true, both the value and the label for the enums will appear in the dropdown in the validation tool. */
    displayEnumValue: boolean;
    /** Threshold for auto validation. If null, uses the collection's autoValidationThreshold. */
    autoValidationThreshold: number | null;
    /** If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection */
    enableAutoValidationThreshold?: boolean;
    enabledChildFields: Field[];
    disabledChildFields: Field[];
    /** Data source mapping identifier */
    dataSource?: string;
    /** Defines how the data point is mapped to the data source */
    mapping?: string;
    /** If true, then the validation tool will show the user the raw text found on the page, not the value that has been parsed to a specific type. */
    displayRawText?: boolean;
}

export declare interface DataPoint {
    /** Uniquely identify a data point. */
    identifier: string;
    /** Name of the data point. */
    name: string;
    /** A camelCase string that will be used as the key in the API response. */
    slug: string;
    description?: string;
    /** The different data types of annotations */
    annotationContentType: AnnotationContentType;
    organization: Organization | null;
    /** Uniquely identify an extractor. */
    extractor: string | null;
    multiple?: boolean;
    noRect?: boolean;
    /** The identifier of the parent data point if applicable. */
    parent?: string;
    children?: DataPoint[];
    availableDataSources?: MappingDataSource[];
    /** If populated, the model will learn to predict this field using the data source, rather than relying on fuzzy string matching. */
    mappingDataSource?: string;
    /** If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool. */
    manualEntry?: boolean;
}

export declare interface DataPointChoice {
    /** Data point choice's ID */
    id: number;
    label: string;
    value: string;
    synonyms?: string[];
    description?: string;
}

export declare interface DataPointChoiceCreate {
    /** Uniquely identify a data point. */
    dataPoint: string;
    /** Uniquely identify an organization. */
    organization?: string;
    /** Uniquely identify a collection. */
    collection?: string;
    label: string;
    value: string;
    synonyms?: string[];
    description?: string;
}

export declare interface DataPointChoiceForReplace {
    value: string;
    label?: string;
    synonyms?: string[];
    description?: string;
}

/** Request body for replacing choices of a data point. Either `collection` or `organization` is required. */
export declare interface DataPointChoiceReplaceRequest {
    /** Uniquely identify a data point. */
    dataPoint: string;
    /** Uniquely identify a collection. */
    collection?: string;
    /** Uniquely identify an organization. */
    organization?: string;
    /** Incoming choices to replace existing choices of a data point. Existing choices and incoming choices are matched base on their `value`. New `value` will be created, existing `value` will be updated, and `value` not in incoming choices will be deleted. */
    choices: DataPointChoiceForReplace[];
}

export declare interface DataPointChoiceReplaceResponse {
    /** Uniquely identify a data point. */
    dataPoint: string;
    /** Uniquely identify a collection. */
    collection: string | null;
    /** Uniquely identify an organization. */
    organization: string | null;
    choices: DataPointChoiceReplaceResponseChoicesItem[];
}

export declare interface DataPointChoiceReplaceResponseChoicesItem {
    /** Data point choice's ID */
    id: number;
    value: string;
    label: string;
    synonyms: string[] | null;
    description: string | null;
}

export declare interface DataPointChoiceUpdate {
    /** Uniquely identify a data point. */
    dataPoint?: string;
    /** Uniquely identify an organization. */
    organization?: string;
    /** Uniquely identify a collection. */
    collection?: string;
    label?: string;
    value?: string;
    synonyms?: string[];
    description?: string;
}

export declare interface DataPointCreate {
    /** Name of the data point. */
    name: string;
    /** A camelCase string that will be used as the key in the API response. */
    slug: string;
    description?: string;
    /** The different data types of annotations */
    annotationContentType: AnnotationContentType;
    /** Uniquely identify an organization. */
    organization: string;
    /** Uniquely identify an extractor. */
    extractor: string;
    multiple?: boolean;
    noRect?: boolean;
    /** The identifier of the parent data point if applicable. */
    parent?: string;
    /** If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool. */
    manualEntry?: boolean;
    /** If populated, the model will learn to predict this field using the data source, rather than relying on fuzzy string matching. */
    mappingDataSource?: string;
}

export declare interface DataPointUpdate {
    /** Name of the data point. */
    name?: string;
    /** A camelCase string that will be used as the key in the API response. */
    slug?: string;
    description?: string;
    /** The identifier of the parent data point if applicable. */
    parent?: string;
    /** If populated, the model will learn to predict this field using the data source, rather than relying on fuzzy string matching. */
    mappingDataSource?: string;
}

export declare interface DateAnnotation extends Annotation {
    parsed?: Date;
}

export declare interface DateAnnotationUpdate extends AnnotationBase {
    parsed?: Date;
}

/**
 * Defines values for DateFormatPreference. \
 * {@link KnownDateFormatPreference} can be used interchangeably with DateFormatPreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DMY** \
 * **MDY** \
 * **YMD**
 */
export declare type DateFormatPreference = string;

/**
 * Defines values for DateRange. \
 * {@link KnownDateRange} can be used interchangeably with DateRange,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **today** \
 * **yesterday** \
 * **week** \
 * **month** \
 * **year**
 */
export declare type DateRange = string;

export declare interface DateRangeAnnotation extends Annotation {
    parsed?: DateRangeAnnotationParsed;
}

export declare interface DateRangeAnnotationParsed {
    start?: DateRangeValue;
    end?: DateRangeValue;
}

export declare interface DateRangeValue {
    date?: Date;
    isCurrent?: boolean;
    day?: number;
    month?: number;
    year?: number;
}

/** Optional parameters. */
export declare interface DeleteAnnotationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteAnnotation operation. */
export declare type DeleteAnnotationResponse = AnotationDelete;

/** Optional parameters. */
export declare interface DeleteApiUserOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteDataPointChoiceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteDataPointOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteDocumentTypeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteExtractorOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteIndexDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteIndexOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteMappingDataSourceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteMappingDataSourceValueOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteMappingOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteOrganizationMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteOrganizationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteTagOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteValidationResultOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteWorkspaceMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteWorkspaceOptionalParams extends coreClient.OperationOptions {
}

/**
 * Defines values for DocType. \
 * {@link KnownDocType} can be used interchangeably with DocType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export declare type DocType = string;

declare interface Document_2 {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    extractor: "resume" | "invoice" | "job-description" | "resume-redact";
    /** Dictionary of <any> */
    data?: {
        [propertyName: string]: any;
    };
    meta: DocumentMeta;
    error?: DocumentError;
    warnings?: DocumentWarning[];
}
export { Document_2 as Document }

export declare interface DocumentCreate {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG, TIFF, ODT, XLS, XLSX */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to download the document. */
    url?: string;
    /** Uniquely identify a collection. */
    collection?: string;
    /** The document type's identifier.  Provide if you already know the document type. */
    documentType?: string;
    /** Uniquely identify a workspace. */
    workspace?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: string;
    /** A JSON representation of the RegionBias object. */
    regionBias?: string;
    /** Explicitly mark this document as low priority. */
    lowPriority?: string;
    /** If true, the returned parse result (assuming `wait` is also true) will be a compact version of the full result. */
    compact?: string;
    /** If true, no data will be stored after parsing. Only compatible with requests where wait: True. */
    deleteAfterParse?: string;
    /** If true, the document will be viewable in the Affinda Validation Tool. Set to False to optimize parsing speed. */
    enableValidationTool?: string;
    /** If true, the document will be treated like an image, and the text will be extracted using OCR. If false, the document will be treated like a PDF, and the text will be extracted using the parser. If not set, we will determine whether to use OCR based on whether words are found in the document. */
    useOcr?: string;
    /** Optional hint inserted into the LLM prompt when processing this document. */
    llmHint?: string;
    /** Restrict LLM example selection to the specified document identifiers. */
    limitToExamples?: string[];
    warningMessages?: DocumentWarning[];
}

export declare interface DocumentCreateFromData {
    /** Create resume or job description directly from data. */
    data: DocumentCreateFromDataData;
}

/** Create resume or job description directly from data. */
export declare interface DocumentCreateFromDataData {
}

export declare interface DocumentEditRequest {
    splits: DocumentSplit[];
}

export declare interface DocumentError {
    errorCode?: string;
    errorDetail?: string;
}

/**
 * Defines values for DocumentFormat. \
 * {@link KnownDocumentFormat} can be used interchangeably with DocumentFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **json** \
 * **xml** \
 * **hr-xml**
 */
export declare type DocumentFormat = string;

export declare interface DocumentMeta {
    /** Unique identifier for the document */
    identifier: string;
    /** Optional identifier for the document that you can set to track the document in the Affinda system.  Is not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling */
    ready?: boolean;
    /** The datetime when the document was ready */
    readyDt?: Date;
    /** If true, some exception was raised during processing. Check the 'error' field of the main return object. */
    failed?: boolean;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** The document's language. */
    language?: string;
    /** The URL to the document's pdf (if the uploaded document is not already pdf, it's converted to pdf as part of the parsing process). */
    pdf?: string;
    /** If this document is part of a splitted document, this attribute points to the original document that this document is splitted from. */
    parentDocument?: DocumentMetaParentDocument;
    /** If this document has been splitted into a number of child documents, this attribute points to those child documents. */
    childDocuments?: DocumentMetaChildDocumentsItem[];
    /** The document's pages. */
    pages: PageMeta[];
    isOcrd?: boolean;
    ocrConfidence?: number;
    reviewUrl?: string;
    /** The document type's identifier.  Provide if you already know the document type. */
    documentType?: string;
    collection?: DocumentMetaCollection;
    workspace: DocumentMetaWorkspace;
    archivedDt?: Date;
    isArchived?: boolean;
    skipParse?: boolean;
    confirmedDt?: Date;
    confirmedBy?: UserNullable;
    isConfirmed?: boolean;
    rejectedDt?: Date;
    rejectedBy?: UserNullable;
    archivedBy?: UserNullable;
    isRejected?: boolean;
    createdDt?: Date;
    errorCode?: string;
    errorDetail?: string;
    /** URL to view the file. */
    file?: string;
    /** URL to view the file converted to HTML. */
    html?: string;
    /** Optional hint inserted into the LLM prompt when processing this document. */
    llmHint?: string;
    tags?: Tag[];
    createdBy?: User;
    /** If the document is created via email ingestion, this field stores the email file's URL. */
    sourceEmail?: string;
    /** If the document is created via email ingestion, this field stores the email's From address. */
    sourceEmailAddress?: string;
    regionBias?: RegionBias;
}

export declare interface DocumentMetaChildDocumentsItem {
    /** Unique identifier for the document */
    identifier?: string;
    /** Optional identifier for the document that you can set to track the document in the Affinda system.  Is not required to be unique. */
    customIdentifier?: string;
}

export declare interface DocumentMetaCollection {
    /** Uniquely identify a collection. */
    identifier: string;
    name?: string;
    extractor?: DocumentMetaCollectionExtractor;
    validationRules?: ValidationRule[];
    /** If True, validation results are refreshed whenever annotations are changed. */
    autoRefreshValidationResults?: boolean;
}

export declare interface DocumentMetaCollectionExtractor {
    /** Uniquely identify an extractor. */
    identifier?: string;
    name?: string;
    /** Base extractor's identifier. */
    baseExtractor?: string;
    validatable?: boolean;
}

/** If this document is part of a splitted document, this attribute points to the original document that this document is splitted from. */
export declare interface DocumentMetaParentDocument {
    /** Unique identifier for the document */
    identifier?: string;
    /** Optional identifier for the document that you can set to track the document in the Affinda system.  Is not required to be unique. */
    customIdentifier?: string;
}

export declare interface DocumentMetaWorkspace {
    /** Uniquely identify a workspace. */
    identifier: string;
    name?: string;
}

/** Describe a split of a document. */
export declare interface DocumentSplit {
    /** Anything */
    identifier?: any;
    pages: DocumentSplitPage[];
}

/** List the pages within this split. Not including a page here will signal that the page should be deleted. */
export declare interface DocumentSplitPage {
    /** Page's ID */
    id: number;
    /** Specify a degree of rotation if you want to rotate a page. Possitive number for clockwise rotation, and negative number for counter-clockwise rotation. */
    rotation?: number;
}

export declare interface DocumentSplitter {
    /** Uniquely identify a document splitter. */
    identifier: string;
    name: string;
    /** The different types of document splitters */
    type: DocumentSplitterType;
    /** Uniquely identify an organization. */
    organization: string | null;
    /** Uniquely identify an extractor. */
    extractor: string | null;
    /** The hint about when to split which is passed into the LLM prompt. */
    llmHint: string | null;
}

/**
 * Defines values for DocumentSplitterType. \
 * {@link KnownDocumentSplitterType} can be used interchangeably with DocumentSplitterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **llm** \
 * **extractor** \
 * **keyword**
 */
export declare type DocumentSplitterType = string;

/**
 * Defines values for DocumentState. \
 * {@link KnownDocumentState} can be used interchangeably with DocumentState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **uploaded** \
 * **review** \
 * **validated** \
 * **archived** \
 * **rejected**
 */
export declare type DocumentState = string;

declare interface DocumentType_2 {
    /** Uniquely identify a document type. */
    identifier: string;
    /** The name of the document type. */
    name: string;
    /** A description of the document type. */
    description?: string;
    /** The email address that can be used to email documents directly to this document type. */
    ingestEmail?: string;
    /** The identifier of the organization this document type belongs to. */
    organization: string;
}
export { DocumentType_2 as DocumentType }

export declare interface DocumentTypeCreate {
    /** The name of the document type. */
    name: string;
    /** A description of the document type. */
    description?: string;
    /** The identifier of the organization this document type belongs to. */
    organization: string;
}

export declare interface DocumentTypeUpdate {
    /** The new name of the document type. */
    name?: string;
    /** A new description of the document type. */
    description?: string;
}

export declare type DocumentUnion = Document_2 | Resume | Invoice | JobDescription | ResumeRedact;

export declare interface DocumentUpdate {
    /** Uniquely identify a collection. */
    collection?: string;
    /** Uniquely identify a workspace. */
    workspace?: string;
    /** The document type's identifier.  Provide if you already know the document type. */
    documentType?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    isConfirmed?: boolean;
    isRejected?: boolean;
    isArchived?: boolean;
    skipParse?: boolean;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
    /** Optional hint inserted into the LLM prompt when processing this document. */
    llmHint?: string;
    warningMessages?: DocumentWarning[];
}

export declare interface DocumentWarning {
    warningCode?: string;
    warningDetail?: string;
}

/** Optional parameters. */
export declare interface EditDocumentPagesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the editDocumentPages operation. */
export declare type EditDocumentPagesResponse = Meta[];

export declare interface Education {
    id?: number;
    organization?: string;
    accreditation?: Accreditation;
    grade?: EducationGrade;
    location?: Location_2;
    dates?: EducationDates;
}

export declare interface EducationDates {
    completionDate?: Date;
    isCurrent?: boolean;
    startDate?: Date;
    rawText?: string;
}

export declare interface EducationGrade {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    raw?: string;
    metric?: string;
    value?: string;
}

/** Defines values for EducationLevel. */
export declare type EducationLevel = "school" | "certificate" | "bachelors" | "masters" | "doctoral";

export declare interface EducationSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

/**
 * Defines values for Enum17. \
 * {@link KnownEnum17} can be used interchangeably with Enum17,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export declare type Enum17 = string;

export declare interface ExpectedRemunerationAnnotation extends Annotation {
    parsed?: ExpectedRemunerationAnnotationParsed;
}

export declare interface ExpectedRemunerationAnnotationParsed {
    minimum?: number;
    maximum?: number;
    currency?: string;
    unit?: string;
}

export declare interface ExpectedRemunerationAnnotationUpdate extends AnnotationBase {
    parsed?: ExpectedRemunerationAnnotationUpdateParsed;
}

export declare interface ExpectedRemunerationAnnotationUpdateParsed {
    minimum?: number;
    maximum?: number;
    currency?: string;
    unit?: string;
}

export declare interface ExperienceSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

export declare interface Extractor {
    /** Uniquely identify an extractor. */
    identifier: string;
    name: string;
    namePlural: string;
    baseExtractor?: ExtractorBaseExtractor;
    organization?: Organization;
    category?: string;
    validatable: boolean;
    isCustom?: boolean;
    fieldGroups?: FieldGroup[];
    createdDt?: Date;
    lastTrainedDt?: Date;
}

export declare interface ExtractorBaseExtractor {
    /** Uniquely identify an extractor. */
    identifier: string;
    name: string;
    namePlural: string;
    validatable: boolean;
    isCustom?: boolean;
    createdDt?: Date;
}

/** Extra configurations specific to an extractor. */
export declare interface ExtractorConfig {
    resumeRedact?: RedactConfig;
}

export declare interface ExtractorCreate {
    name: string;
    namePlural?: string;
    /** Uniquely identify an extractor. */
    baseExtractor?: string;
    /** Uniquely identify an organization. */
    organization: string;
    category?: string;
    validatable?: boolean;
    fieldGroups?: FieldGroup[];
}

export declare interface ExtractorUpdate {
    name?: string;
    namePlural?: string;
    /** Uniquely identify an extractor. */
    baseExtractor?: string;
    category?: string;
    validatable?: boolean;
    fieldGroups?: FieldGroup[];
}

export declare interface Field {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    label: string;
    /** Data point identifier */
    dataPoint: string;
    /** The different data types of annotations */
    fieldType: AnnotationContentType;
    /** Data source mapping identifier */
    dataSource?: string;
    /** Defines how the data point is mapped to the data source */
    mapping?: string;
    mandatory?: boolean;
    /** Threshold for auto validation. If null, uses the collection's autoValidationThreshold. */
    autoValidationThreshold?: number;
    /** If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection */
    enableAutoValidationThreshold?: boolean;
    showDropdown?: boolean;
    /** If true, both the value and the label for the enums will appear in the dropdown in the validation tool. */
    displayEnumValue?: boolean;
    /** If true, the hoverable enum value detail icon will be hidden. */
    hideEnumDetail?: boolean;
    /** If True, any dropdown annotations that fail to parse to a value will be discarded */
    dropNull?: boolean;
    enabledChildFields?: Field[];
    disabledChildFields?: Field[];
    slug?: string;
    /** If true, then the validation tool will show the user the raw text found on the page, not the value that has been parsed to a specific type. */
    displayRawText?: boolean;
    fields?: Record<string, unknown>[];
}

export declare interface FieldCategory {
    label: string;
    enabledFields: Field[];
    disabledFields: Field[];
}

export declare interface FieldDeprecated {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    label: string;
    slug?: string;
    /** The different data types of annotations */
    fieldType: AnnotationContentType;
    /** Data source mapping identifier */
    dataSource?: string;
    /** Defines how the data point is mapped to the data source */
    mapping?: string;
    dataPoint: string;
    mandatory?: boolean;
    disabled?: boolean;
    autoValidationThreshold?: number;
    showDropdown?: boolean;
    displayRawText?: boolean;
    /** If True, any dropdown annotations that fail to parse to a value will be discarded */
    dropNull?: boolean;
    displayEnumValue?: boolean;
    fields?: FieldDeprecated[];
}

export declare interface FieldGroup {
    label: string;
    fields: FieldDeprecated[];
}

export declare interface FieldsLayout {
    defaultCategory: FieldCategory;
    categories: FieldCategory[];
}

export declare interface FloatAnnotation extends Annotation {
    parsed?: number;
}

export declare interface Get200ApplicationJsonPropertiesItemsItem {
    document?: string;
}

/** Optional parameters. */
export declare interface GetAllAnnotationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllAnnotations operation. */
export declare type GetAllAnnotationsResponse = Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface GetAllApiUsersOptionalParams extends coreClient.OperationOptions {
    /** Filter by organization. */
    organization?: string;
}

/** Contains response data for the getAllApiUsers operation. */
export declare type GetAllApiUsersResponse = Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface GetAllCollectionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllCollections operation. */
export declare type GetAllCollectionsResponse = Collection[];

/** Optional parameters. */
export declare interface GetAllDataPointsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter by organization. */
    organization?: string;
    /** Allows you to include public data points in the response when you're filtering by organization. */
    includePublic?: boolean;
    /** Filter by extractor. */
    extractor?: string;
    /** Filter by slug. */
    slug?: string;
    /** Filter by description. */
    description?: string;
    /** Filter by annotation content type, e.g. text, integer, float, date, etc. */
    annotationContentType?: string;
    /** Filter by specific identifiers. */
    identifier?: string[];
}

/** Contains response data for the getAllDataPoints operation. */
export declare type GetAllDataPointsResponse = DataPoint[];

/** Optional parameters. */
export declare interface GetAllDocumentsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter by workspace. */
    workspace?: string;
    /** Filter by collection. */
    collection?: string;
    /** Filter by the document's state. */
    state?: DocumentState;
    /** Filter by tag's IDs. */
    tags?: number[];
    /** Filter by created datetime. */
    createdDt?: DateRange;
    /** Partial, case-insensitive match with file name or tag name. */
    search?: string;
    /** Sort the result set. A "-" at the beginning denotes DESC sort, e.g. -created_dt. Sort by multiple fields is supported. Supported values include: 'file_name', 'extractor', 'created_dt', 'validated_dt', 'archived_dt' and 'parsed__<dataPointSlug>'. */
    ordering?: string[];
    /** By default, this endpoint returns only the meta data of the documents. Set this to `true` will return a summary of the data that was parsed. If you want to retrieve the full set of data for a document, use the `GET /documents/{identifier}` endpoint. */
    includeData?: boolean;
    /** Exclude some documents from the result. */
    exclude?: string[];
    /** Exclude documents that are currently being reviewed. */
    inReview?: boolean;
    /** Filter by failed status. */
    failed?: boolean;
    /** Filter by ready status. */
    ready?: boolean;
    /** Filter for validatable documents. */
    validatable?: boolean;
    /** Filter for documents with challenges. */
    hasChallenges?: boolean;
    /** Filter for documents with this custom identifier. */
    customIdentifier?: string;
    /** If "true", the response is compacted to annotations' parsed data. Annotations' meta data are excluded. Default is "false". */
    compact?: boolean;
    /** If "false", the documents count is not computed, thus saving time for large collections. Default is "true". */
    count?: boolean;
    /** Whether to return the response in snake_case instead of camelCase. Default is false. */
    snakeCase?: boolean;
}

/** Optional parameters. */
export declare interface GetAllDocumentSplittersOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter by organization. */
    organization?: string;
    /** Allows you to include public splitters in the response when you're filtering by organization. */
    includePublic?: boolean;
}

/** Contains response data for the getAllDocumentSplitters operation. */
export declare type GetAllDocumentSplittersResponse = DocumentSplitter[];

/** Contains response data for the getAllDocuments operation. */
export declare type GetAllDocumentsResponse = PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface GetAllExtractorsOptionalParams extends coreClient.OperationOptions {
    /** Filter by validatable. */
    validatable?: boolean;
    /** Filter by name. */
    name?: string;
    /** Whether to include Affinda's off-the-shelf extractors. */
    includePublicExtractors?: boolean;
}

/** Contains response data for the getAllExtractors operation. */
export declare type GetAllExtractorsResponse = Extractor[];

/** Optional parameters. */
export declare interface GetAllIndexDocumentsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllIndexDocuments operation. */
export declare type GetAllIndexDocumentsResponse = PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface GetAllIndexesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter indices by name */
    name?: string;
    /** Filter indices by a document type */
    documentType?: Enum17;
}

/** Contains response data for the getAllIndexes operation. */
export declare type GetAllIndexesResponse = PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface GetAllInvitationsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter by organization. */
    organization?: string;
    /** Filter by role. */
    role?: OrganizationRole;
    /** Filter by status. */
    status?: InvitationStatus;
}

/** Contains response data for the getAllInvitations operation. */
export declare type GetAllInvitationsResponse = Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface GetAllOrganizationMembershipsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter by organization. */
    organization?: string;
    /** Filter by role. */
    role?: OrganizationRole;
}

/** Contains response data for the getAllOrganizationMemberships operation. */
export declare type GetAllOrganizationMembershipsResponse = PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface GetAllOrganizationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllOrganizations operation. */
export declare type GetAllOrganizationsResponse = Organization[];

/** Optional parameters. */
export declare interface GetAllResthookSubscriptionsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllResthookSubscriptions operation. */
export declare type GetAllResthookSubscriptionsResponse = PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface GetAllTagsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter by workspace. */
    workspace?: string;
    /** Filter by name. */
    name?: string;
}

/** Contains response data for the getAllTags operation. */
export declare type GetAllTagsResponse = Tag[];

/** Optional parameters. */
export declare interface GetAllValidationResultsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllValidationResults operation. */
export declare type GetAllValidationResultsResponse = ValidationResult[];

/** Optional parameters. */
export declare interface GetAllWorkspaceMembershipsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter by workspace. */
    workspace?: string;
    /** Partial text match on user's email, case-insensitive. */
    user?: string;
}

/** Contains response data for the getAllWorkspaceMemberships operation. */
export declare type GetAllWorkspaceMembershipsResponse = PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface GetAllWorkspacesOptionalParams extends coreClient.OperationOptions {
    /** Filter by name. */
    name?: string;
}

/** Contains response data for the getAllWorkspaces operation. */
export declare type GetAllWorkspacesResponse = Workspace[];

/** Optional parameters. */
export declare interface GetAnnotationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAnnotation operation. */
export declare type GetAnnotationResponse = Annotation;

/** Optional parameters. */
export declare interface GetApiUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getApiUser operation. */
export declare type GetApiUserResponse = ApiUserWithoutKey;

/** Optional parameters. */
export declare interface GetCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getCollection operation. */
export declare type GetCollectionResponse = Collection;

/** Optional parameters. */
export declare interface GetDataFieldForCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDataFieldForCollection operation. */
export declare type GetDataFieldForCollectionResponse = CollectionField;

/** Optional parameters. */
export declare interface GetDataPointChoiceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDataPointChoice operation. */
export declare type GetDataPointChoiceResponse = DataPointChoice;

/** Optional parameters. */
export declare interface GetDataPointChoicesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter choices by searching for a substring. */
    search?: string;
}

/** Contains response data for the getDataPointChoices operation. */
export declare type GetDataPointChoicesResponse = PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface GetDataPointOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDataPoint operation. */
export declare type GetDataPointResponse = DataPoint;

/** Optional parameters. */
export declare interface GetDocumentOptionalParams extends coreClient.OperationOptions {
    /** If "true", the response is compacted to annotations' parsed data. Annotations' meta data are excluded. Default is "false". */
    compact?: boolean;
    /** Whether to return the response in snake_case instead of camelCase. Default is false. */
    snakeCase?: boolean;
    /** Specify which format you want the response to be. Default is "json" */
    format?: DocumentFormat;
}

/** Contains response data for the getDocument operation. */
export declare type GetDocumentResponse = DocumentUnion;

/** Optional parameters. */
export declare interface GetDocumentSplitterOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDocumentSplitter operation. */
export declare type GetDocumentSplitterResponse = DocumentSplitter;

/** Optional parameters. */
export declare interface GetDocumentTypeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDocumentType operation. */
export declare type GetDocumentTypeResponse = DocumentType_2;

/** Optional parameters. */
export declare interface GetDocumentTypesOptionalParams extends coreClient.OperationOptions {
    /** Filter by workspace identifier */
    workspace?: string;
    /** Filter by organization identifier */
    organization?: string;
}

/** Contains response data for the getDocumentTypes operation. */
export declare type GetDocumentTypesResponse = DocumentType_2[];

/** Optional parameters. */
export declare interface GetExtractorOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getExtractor operation. */
export declare type GetExtractorResponse = Extractor;

/** Optional parameters. */
export declare interface GetInvitationByTokenOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInvitationByToken operation. */
export declare type GetInvitationByTokenResponse = Invitation;

/** Optional parameters. */
export declare interface GetInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInvitation operation. */
export declare type GetInvitationResponse = Invitation;

/** Optional parameters. */
export declare interface GetJobDescriptionSearchConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getJobDescriptionSearchConfig operation. */
export declare type GetJobDescriptionSearchConfigResponse = JobDescriptionSearchConfig;

/** Optional parameters. */
export declare interface GetJobDescriptionSearchDetailOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getJobDescriptionSearchDetail operation. */
export declare type GetJobDescriptionSearchDetailResponse = JobDescriptionSearchDetail;

/** Optional parameters. */
export declare interface GetMappingDataSourceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMappingDataSource operation. */
export declare type GetMappingDataSourceResponse = MappingDataSource;

/** Optional parameters. */
export declare interface GetMappingDataSourceValueOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMappingDataSourceValue operation. */
export declare type GetMappingDataSourceValueResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface GetMappingOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMapping operation. */
export declare type GetMappingResponse = Mapping;

/** Optional parameters. */
export declare interface GetOrganizationMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getOrganizationMembership operation. */
export declare type GetOrganizationMembershipResponse = OrganizationMembership;

/** Optional parameters. */
export declare interface GetOrganizationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getOrganization operation. */
export declare type GetOrganizationResponse = Organization;

/** Optional parameters. */
export declare interface GetRedactedDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRedactedDocument operation. */
export declare type GetRedactedDocumentResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always `undefined` in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always `undefined` in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export declare interface GetResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResthookSubscription operation. */
export declare type GetResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export declare interface GetResumeSearchConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResumeSearchConfig operation. */
export declare type GetResumeSearchConfigResponse = ResumeSearchConfig;

/** Optional parameters. */
export declare interface GetResumeSearchDetailOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResumeSearchDetail operation. */
export declare type GetResumeSearchDetailResponse = ResumeSearchDetail;

/** Optional parameters. */
export declare interface GetResumeSearchMatchOptionalParams extends coreClient.OperationOptions {
    /** Optionally, specify an index to search in. If not specified, will search in all indexes. */
    index?: string;
    /** Add keywords to the search criteria. */
    searchExpression?: string;
    /** How important is this criteria to the matching score, range from 0 to 1. */
    jobTitlesWeight?: number;
    /** How important is this criteria to the matching score, range from 0 to 1. */
    yearsExperienceWeight?: number;
    /** How important is this criteria to the matching score, range from 0 to 1. */
    locationsWeight?: number;
    /** How important is this criteria to the matching score, range from 0 to 1. */
    languagesWeight?: number;
    /** How important is this criteria to the matching score, range from 0 to 1. */
    skillsWeight?: number;
    /** How important is this criteria to the matching score, range from 0 to 1. */
    educationWeight?: number;
    /** How important is this criteria to the matching score, range from 0 to 1. */
    searchExpressionWeight?: number;
    /** How important is this criteria to the matching score, range from 0 to 1. */
    socCodesWeight?: number;
    /** How important is this criteria to the matching score, range from 0 to 1. */
    managementLevelWeight?: number;
}

/** Contains response data for the getResumeSearchMatch operation. */
export declare type GetResumeSearchMatchResponse = ResumeSearchMatch;

/** Optional parameters. */
export declare interface GetResumeSearchSuggestionJobTitleOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResumeSearchSuggestionJobTitle operation. */
export declare type GetResumeSearchSuggestionJobTitleResponse = {
    /** The parsed response body. */
    body: string[];
};

/** Optional parameters. */
export declare interface GetResumeSearchSuggestionSkillOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResumeSearchSuggestionSkill operation. */
export declare type GetResumeSearchSuggestionSkillResponse = {
    /** The parsed response body. */
    body: string[];
};

/** Optional parameters. */
export declare interface GetTagOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTag operation. */
export declare type GetTagResponse = Tag;

/** Optional parameters. */
export declare interface GetUsageByCollectionOptionalParams extends coreClient.OperationOptions {
    /** Start date of the period to retrieve. Format: YYYY-MM */
    start?: string;
    /** End date of the period to retrieve. Format: YYYY-MM */
    end?: string;
}

/** Contains response data for the getUsageByCollection operation. */
export declare type GetUsageByCollectionResponse = UsageByCollection[];

/** Optional parameters. */
export declare interface GetUsageByWorkspaceOptionalParams extends coreClient.OperationOptions {
    /** Start date of the period to retrieve. Format: YYYY-MM */
    start?: string;
    /** End date of the period to retrieve. Format: YYYY-MM */
    end?: string;
}

/** Contains response data for the getUsageByWorkspace operation. */
export declare type GetUsageByWorkspaceResponse = UsageByWorkspace[];

/** Optional parameters. */
export declare interface GetValidationResultOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getValidationResult operation. */
export declare type GetValidationResultResponse = ValidationResult;

/** Optional parameters. */
export declare interface GetWorkspaceMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getWorkspaceMembership operation. */
export declare type GetWorkspaceMembershipResponse = WorkspaceMembership;

/** Optional parameters. */
export declare interface GetWorkspaceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getWorkspace operation. */
export declare type GetWorkspaceResponse = Workspace;

export declare interface Index {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** Unique index name */
    name: string;
    docType: IndexDocType;
    /**
     * The user who created this index
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly user: IndexUser;
}

/** IndexRequestBody */
export declare interface IndexCreate {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** Unique index name */
    name: string;
    docType?: DocType;
}

/**
 * Defines values for IndexDocType. \
 * {@link KnownIndexDocType} can be used interchangeably with IndexDocType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export declare type IndexDocType = string;

export declare interface IndexUpdate {
    /** Unique index name */
    name?: string;
}

/** The user who created this index */
export declare interface IndexUser {
    /** Uniquely identify a user. */
    id: number;
    name: string;
    email: string;
    /** URL of the user's avatar. */
    avatar: string | null;
}

export declare interface Invitation {
    /** Uniquely identify an invitation. */
    identifier?: string;
    organization?: Organization;
    /** The email which the invitation is sent to. */
    email?: string;
    role?: OrganizationRole;
    status?: InvitationStatus;
    /** The date after which the invitation expires. Default is 10 days from now. */
    expiryDate?: Date;
    invitedBy?: User;
    respondedBy?: InvitationRespondedBy;
    createdDt?: Date;
}

export declare interface InvitationCreate {
    /** Uniquely identify an organization. */
    organization: string;
    /** The email which the invitation is sent to. */
    email: string;
    role: OrganizationRole;
}

export declare interface InvitationRespondedBy extends User {
}

export declare interface InvitationResponse {
    status?: InvitationResponseStatus;
}

/**
 * Defines values for InvitationResponseStatus. \
 * {@link KnownInvitationResponseStatus} can be used interchangeably with InvitationResponseStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **accepted** \
 * **declined**
 */
export declare type InvitationResponseStatus = string;

/**
 * Defines values for InvitationStatus. \
 * {@link KnownInvitationStatus} can be used interchangeably with InvitationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **pending** \
 * **accepted** \
 * **declined**
 */
export declare type InvitationStatus = string;

export declare interface InvitationUpdate {
    role?: OrganizationRole;
}

export declare interface Invoice extends Document_2 {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    extractor: "invoice";
    data?: InvoiceData;
}

export declare interface InvoiceData {
    tables?: (TableAnnotation | null)[];
    tablesBeta?: (TableBetaAnnotation | null)[];
    invoiceDate?: DateAnnotation;
    invoiceOrderDate?: DateAnnotation;
    paymentDateDue?: DateAnnotation;
    paymentAmountBase?: TextAnnotation;
    paymentAmountTax?: TextAnnotation;
    paymentAmountTotal?: TextAnnotation;
    paymentAmountPaid?: TextAnnotation;
    paymentAmountDue?: TextAnnotation;
    invoiceNumber?: TextAnnotation;
    invoicePurchaseOrderNumber?: TextAnnotation;
    supplierBusinessNumber?: TextAnnotation;
    customerNumber?: TextAnnotation;
    customerBusinessNumber?: TextAnnotation;
    paymentReference?: TextAnnotation;
    bankAccountNumber?: TextAnnotation;
    supplierVat?: TextAnnotation;
    customerVat?: TextAnnotation;
    bpayBillerCode?: TextAnnotation;
    bpayReference?: TextAnnotation;
    bankSortCode?: TextAnnotation;
    bankIban?: TextAnnotation;
    bankSwift?: TextAnnotation;
    bankBsb?: TextAnnotation;
    customerContactName?: TextAnnotation;
    customerCompanyName?: TextAnnotation;
    supplierCompanyName?: TextAnnotation;
    customerBillingAddress?: LocationAnnotation;
    customerDeliveryAddress?: LocationAnnotation;
    supplierAddress?: LocationAnnotation;
    customerPhoneNumber?: TextAnnotation;
    supplierPhoneNumber?: TextAnnotation;
    supplierFax?: TextAnnotation;
    customerEmail?: TextAnnotation;
    supplierEmail?: TextAnnotation;
    supplierWebsite?: TextAnnotation;
    currencyCode?: CurrencyCodeAnnotation;
    /** Dictionary of <any> */
    customFields?: {
        [propertyName: string]: any;
    };
    /** All of the raw text of the parsed invoice. */
    rawText?: string;
}

export declare interface JobDescription extends Document_2 {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    extractor: "job-description";
    /** A JSON-encoded string of the `JobDescriptionData` object. */
    data?: JobDescriptionData;
}

/** A JSON-encoded string of the `JobDescriptionData` object. */
export declare interface JobDescriptionData {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    jobTitle?: JobTitleAnnotation;
    contactEmail?: TextAnnotation;
    contactName?: TextAnnotation;
    contactPhone?: TextAnnotation;
    startDate?: DateAnnotation;
    endDate?: DateAnnotation;
    jobType?: TextAnnotation;
    languages?: (LanguageAnnotation | null)[];
    skills?: (SkillAnnotation | null)[];
    organizationName?: TextAnnotation;
    organizationWebsite?: TextAnnotation;
    educationLevel?: TextAnnotation;
    educationAccreditation?: TextAnnotation;
    expectedRemuneration?: ExpectedRemunerationAnnotation;
    location?: LocationAnnotation;
    certifications?: (TextAnnotation | null)[];
    yearsExperience?: YearsExperienceAnnotation;
    /** All of the raw text of the parsed job description, example is shortened for readability */
    rawText?: string;
}

/** A JSON-encoded string of the `JobDescriptionData` object. */
export declare interface JobDescriptionDataUpdate {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    jobTitle?: JobTitleAnnotationUpdate;
    contactEmail?: TextAnnotationUpdate;
    contactName?: TextAnnotationUpdate;
    contactPhone?: TextAnnotationUpdate;
    startDate?: DateAnnotationUpdate;
    endDate?: DateAnnotationUpdate;
    jobType?: TextAnnotationUpdate;
    languages?: (LanguageAnnotationUpdate | null)[];
    skills?: (SkillAnnotationUpdate | null)[];
    organizationName?: TextAnnotationUpdate;
    organizationWebsite?: TextAnnotationUpdate;
    educationLevel?: TextAnnotationUpdate;
    educationAccreditation?: TextAnnotationUpdate;
    expectedRemuneration?: ExpectedRemunerationAnnotationUpdate;
    location?: LocationAnnotationUpdate;
    certifications?: (TextAnnotationUpdate | null)[];
    yearsExperience?: YearsExperienceAnnotationUpdate;
}

export declare interface JobDescriptionSearch {
    /** Total number of results */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    parameters?: JobDescriptionSearchParameters;
    results?: JobDescriptionSearchResult[];
}

export declare interface JobDescriptionSearchConfig {
    allowPdfDownload?: boolean;
    /** Maximum number of results that can be returned. Setting to "null" means no limitation. */
    maxResults?: number;
    displayJobTitle?: boolean;
    displayLocation?: boolean;
    displayYearsExperience?: boolean;
    displayOccupationGroup?: boolean;
    displayEducation?: boolean;
    displaySkills?: boolean;
    displayLanguages?: boolean;
    displayManagementLevel?: boolean;
    displayKeywords?: boolean;
    weightJobTitle?: number;
    weightLocation?: number;
    weightYearsExperience?: number;
    weightOccupationGroup?: number;
    weightEducation?: number;
    weightSkills?: number;
    weightLanguages?: number;
    weightManagementLevel?: number;
    weightKeywords?: number;
    /** List of index names. */
    indices?: string[];
    /** Controls whether or not the index dropdown is displayed to the user */
    showIndexDropdown?: boolean;
    /** Customize the theme of the embeded search tool. */
    searchToolTheme?: JobDescriptionSearchConfigSearchToolTheme;
    /**
     * ID of the logged in user.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly userId?: number;
    /**
     * Username of the logged in user.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly username?: string;
    /** A list of actions to show in the dropdown in the embedded search tool */
    actions?: SearchConfigAction[];
    /** Hide the reset/import toolbar. */
    hideToolbar?: boolean;
    /** Hide the entire side panel. */
    hideSidePanel?: boolean;
    customFieldsConfig?: CustomFieldConfig[];
    /** The unit of distance to use for location based searches */
    distanceUnit?: JobDescriptionSearchConfigDistanceUnit;
}

/**
 * Defines values for JobDescriptionSearchConfigDistanceUnit. \
 * {@link KnownJobDescriptionSearchConfigDistanceUnit} can be used interchangeably with JobDescriptionSearchConfigDistanceUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **mi** \
 * **km**
 */
export declare type JobDescriptionSearchConfigDistanceUnit = string;

/** Customize the theme of the embeded search tool. */
export declare interface JobDescriptionSearchConfigSearchToolTheme extends ThemeConfig {
}

export declare interface JobDescriptionSearchDetail {
    jobTitle?: JobDescriptionSearchDetailJobTitle;
    location?: JobDescriptionSearchDetailLocation;
    education?: JobDescriptionSearchDetailEducation;
    skills?: JobDescriptionSearchDetailSkills;
    experience?: JobDescriptionSearchDetailExperience;
    occupationGroup?: JobDescriptionSearchDetailOccupationGroup;
    languages?: JobDescriptionSearchDetailLanguages;
    managementLevel?: JobDescriptionSearchDetailManagementLevel;
    searchExpression?: JobDescriptionSearchDetailSearchExpression;
}

export declare interface JobDescriptionSearchDetailEducation {
    missing?: JobDescriptionSearchDetailEducationMissing;
    value?: JobDescriptionSearchDetailEducationValue;
}

export declare interface JobDescriptionSearchDetailEducationMissing {
    degrees?: string[];
    degreeTypes?: string[];
}

export declare interface JobDescriptionSearchDetailEducationValue {
    degrees?: string[];
    degreeTypes?: string[];
    match?: boolean;
}

export declare interface JobDescriptionSearchDetailExperience {
    minimumExperience?: number;
    maximumExperience?: number;
    match?: boolean;
}

export declare interface JobDescriptionSearchDetailJobTitle {
    missing?: string[];
    value?: JobDescriptionSearchDetailJobTitleValue;
}

export declare interface JobDescriptionSearchDetailJobTitleValue {
    name?: string;
    companyName?: string;
    match?: boolean;
}

export declare interface JobDescriptionSearchDetailLanguages {
    missing?: ResumeSearchParametersSkill[];
    value?: JobDescriptionSearchDetailLanguagesValueItem[];
}

export declare interface JobDescriptionSearchDetailLanguagesValueItem {
    name?: string;
    match?: boolean;
}

export declare interface JobDescriptionSearchDetailLocation {
    missing?: ResumeSearchParametersLocation[];
    value?: JobDescriptionSearchDetailLocationValue;
}

export declare interface JobDescriptionSearchDetailLocationValue extends Location_2, Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1 {
}

export declare interface JobDescriptionSearchDetailManagementLevel {
    level?: ManagementLevel;
    match?: boolean;
}

export declare interface JobDescriptionSearchDetailOccupationGroup {
    missing?: number[];
    value?: JobDescriptionSearchDetailOccupationGroupValue;
}

export declare interface JobDescriptionSearchDetailOccupationGroupValue extends OccupationGroupSearchResult {
}

export declare interface JobDescriptionSearchDetailSearchExpression {
    missing?: string[];
    value?: string[];
}

export declare interface JobDescriptionSearchDetailSkills {
    missing?: ResumeSearchParametersSkill[];
    value?: JobDescriptionSearchDetailSkillsValueItem[];
}

export declare interface JobDescriptionSearchDetailSkillsValueItem {
    name?: string;
    match?: boolean;
}

export declare interface JobDescriptionSearchEmbed {
    /** The signed URL for the embedable search tool. */
    url?: string;
}

export declare interface JobDescriptionSearchParameters {
    indices: string[];
    /** A random string that uniquely identify the resource. */
    resume?: string;
    jobTitles?: string[];
    jobTitlesRequired?: boolean;
    jobTitlesWeight?: number;
    totalYearsExperience?: number;
    yearsExperienceRequired?: boolean;
    yearsExperienceWeight?: number;
    locations?: ResumeSearchParametersLocation[];
    locationsWeight?: number;
    locationsRequired?: boolean;
    skills?: ResumeSearchParametersSkill[];
    skillsWeight?: number;
    languages?: ResumeSearchParametersSkill[];
    languagesWeight?: number;
    degrees?: string[];
    degreesRequired?: boolean;
    degreeTypes?: (EducationLevel | null)[];
    degreeTypesRequired?: boolean;
    educationWeight?: number;
    searchExpression?: string;
    searchExpressionRequired?: boolean;
    searchExpressionWeight?: number;
    socCodes?: number[];
    socCodesWeight?: number;
    socCodesRequired?: boolean;
    managementLevel?: ManagementLevel;
    managementLevelRequired?: boolean;
    managementLevelWeight?: number;
    customData?: SearchParametersCustomData[];
}

export declare interface JobDescriptionSearchResult {
    /** A random string that uniquely identify the resource. */
    identifier: string;
    score: number;
    pdf: string | null;
    jobTitle: JobTitleSearchScoreComponent;
    managementLevel: ManagementLevelSearchScoreComponent;
    experience: ExperienceSearchScoreComponent;
    skills: SkillsSearchScoreComponent;
    languages: LanguagesSearchScoreComponent;
    location: LocationSearchScoreComponent;
    education: EducationSearchScoreComponent;
    occupationGroup?: OccupationGroupSearchScoreComponent;
    searchExpression: SearchExpressionSearchScoreComponent;
    organizationName: string | null;
    /** Dictionary of <components·nqbw24·schemas·customdatasearchscorecomponent·additionalproperties> */
    customData: {
        [propertyName: string]: ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties;
    };
}

export declare interface JobTitleAnnotation extends Annotation {
    /** Years of experience range */
    parsed?: JobTitleAnnotationParsed;
}

/** Years of experience range */
export declare interface JobTitleAnnotationParsed {
    name?: string;
    managementLevel?: string;
    classification?: JobTitleAnnotationParsedClassification;
}

export declare interface JobTitleAnnotationParsedClassification {
    socCode?: number;
    title?: string;
    minorGroup?: string;
    subMajorGroup?: string;
    majorGroup?: string;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    minorGroupCode?: number;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    subMajorGroupCode?: number;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    majorGroupCode?: number;
}

export declare interface JobTitleAnnotationUpdate extends AnnotationBase, JobTitleParsed {
}

export declare interface JobTitleParsed {
    /**
     * Matching job title to extracted text
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly parsed?: JobTitleParsedParsed;
}

export declare interface JobTitleParsedClassification {
    socCode?: number;
    title?: string;
    minorGroup?: string;
    subMajorGroup?: string;
    majorGroup?: string;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    minorGroupCode?: number;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    subMajorGroupCode?: number;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    majorGroupCode?: number;
}

/** Matching job title to extracted text */
export declare interface JobTitleParsedParsed {
    name?: string;
    managementLevel?: string;
    classification?: JobTitleParsedClassification;
}

export declare interface JobTitleSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

/** Optional parameters. */
export declare interface JsonSchemaFromDocumentTypeOptionalParams extends coreClient.OperationOptions {
    /** Title for the JSON schema */
    title?: string;
}

/** Contains response data for the jsonSchemaFromDocumentType operation. */
export declare type JsonSchemaFromDocumentTypeResponse = {
    [propertyName: string]: any;
};

/** Known values of {@link AnnotationContentType} that the service accepts. */
export declare enum KnownAnnotationContentType {
    /** Text */
    Text = "text",
    /** Integer */
    Integer = "integer",
    /** Float */
    Float = "float",
    /** Decimal */
    Decimal = "decimal",
    /** Date */
    Date = "date",
    /** Datetime */
    Datetime = "datetime",
    /** Daterange */
    Daterange = "daterange",
    /** Boolean */
    Boolean = "boolean",
    /** Enum */
    Enum = "enum",
    /** Location */
    Location = "location",
    /** Phonenumber */
    Phonenumber = "phonenumber",
    /** Json */
    Json = "json",
    /** Table */
    Table = "table",
    /** Expectedremuneration */
    Expectedremuneration = "expectedremuneration",
    /** Jobtitle */
    Jobtitle = "jobtitle",
    /** Language */
    Language = "language",
    /** Skill */
    Skill = "skill",
    /** Yearsexperience */
    Yearsexperience = "yearsexperience",
    /** Group */
    Group = "group",
    /** TableDeprecated */
    TableDeprecated = "table_deprecated",
    /** Url */
    Url = "url",
    /** Image */
    Image = "image",
    /** Docclf */
    Docclf = "docclf"
}

/** Known values of {@link CollectionDateFormatPreference} that the service accepts. */
export declare enum KnownCollectionDateFormatPreference {
    /** DMY */
    DMY = "DMY",
    /** MDY */
    MDY = "MDY",
    /** YMD */
    YMD = "YMD"
}

/** Known values of {@link DateFormatPreference} that the service accepts. */
export declare enum KnownDateFormatPreference {
    /** DMY */
    DMY = "DMY",
    /** MDY */
    MDY = "MDY",
    /** YMD */
    YMD = "YMD"
}

/** Known values of {@link DateRange} that the service accepts. */
export declare enum KnownDateRange {
    /** Today */
    Today = "today",
    /** Yesterday */
    Yesterday = "yesterday",
    /** Week */
    Week = "week",
    /** Month */
    Month = "month",
    /** Year */
    Year = "year"
}

/** Known values of {@link DocType} that the service accepts. */
export declare enum KnownDocType {
    /** Resumes */
    Resumes = "resumes",
    /** JobDescriptions */
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link DocumentFormat} that the service accepts. */
export declare enum KnownDocumentFormat {
    /** Json */
    Json = "json",
    /** Xml */
    Xml = "xml",
    /** HrXml */
    HrXml = "hr-xml"
}

/** Known values of {@link DocumentSplitterType} that the service accepts. */
export declare enum KnownDocumentSplitterType {
    /** Llm */
    Llm = "llm",
    /** Extractor */
    Extractor = "extractor",
    /** Keyword */
    Keyword = "keyword"
}

/** Known values of {@link DocumentState} that the service accepts. */
export declare enum KnownDocumentState {
    /** Uploaded */
    Uploaded = "uploaded",
    /** Review */
    Review = "review",
    /** Validated */
    Validated = "validated",
    /** Archived */
    Archived = "archived",
    /** Rejected */
    Rejected = "rejected"
}

/** Known values of {@link Enum17} that the service accepts. */
export declare enum KnownEnum17 {
    /** Resumes */
    Resumes = "resumes",
    /** JobDescriptions */
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link IndexDocType} that the service accepts. */
export declare enum KnownIndexDocType {
    /** Resumes */
    Resumes = "resumes",
    /** JobDescriptions */
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link InvitationResponseStatus} that the service accepts. */
export declare enum KnownInvitationResponseStatus {
    /** Accepted */
    Accepted = "accepted",
    /** Declined */
    Declined = "declined"
}

/** Known values of {@link InvitationStatus} that the service accepts. */
export declare enum KnownInvitationStatus {
    /** Pending */
    Pending = "pending",
    /** Accepted */
    Accepted = "accepted",
    /** Declined */
    Declined = "declined"
}

/** Known values of {@link JobDescriptionSearchConfigDistanceUnit} that the service accepts. */
export declare enum KnownJobDescriptionSearchConfigDistanceUnit {
    /** Mi */
    Mi = "mi",
    /** Km */
    Km = "km"
}

/** Known values of {@link OrganizationRole} that the service accepts. */
export declare enum KnownOrganizationRole {
    /** Admin */
    Admin = "admin",
    /** Member */
    Member = "member"
}

/** Known values of {@link OrganizationUserRole} that the service accepts. */
export declare enum KnownOrganizationUserRole {
    /** Admin */
    Admin = "admin",
    /** Member */
    Member = "member"
}

/** Known values of {@link Region} that the service accepts. */
export declare enum KnownRegion {
    /** Api */
    Api = "api",
    /** ApiEu1 */
    ApiEu1 = "api.eu1",
    /** ApiUs1 */
    ApiUs1 = "api.us1"
}

/** Known values of {@link ResthookEvent} that the service accepts. */
export declare enum KnownResthookEvent {
    /** ResumeParseSucceeded */
    ResumeParseSucceeded = "resume.parse.succeeded",
    /** ResumeParseFailed */
    ResumeParseFailed = "resume.parse.failed",
    /** ResumeParseCompleted */
    ResumeParseCompleted = "resume.parse.completed",
    /** InvoiceParseSucceeded */
    InvoiceParseSucceeded = "invoice.parse.succeeded",
    /** InvoiceParseFailed */
    InvoiceParseFailed = "invoice.parse.failed",
    /** InvoiceParseCompleted */
    InvoiceParseCompleted = "invoice.parse.completed",
    /** InvoiceValidateCompleted */
    InvoiceValidateCompleted = "invoice.validate.completed",
    /** DocumentParseSucceeded */
    DocumentParseSucceeded = "document.parse.succeeded",
    /** DocumentParseFailed */
    DocumentParseFailed = "document.parse.failed",
    /** DocumentParseCompleted */
    DocumentParseCompleted = "document.parse.completed",
    /** DocumentValidateCompleted */
    DocumentValidateCompleted = "document.validate.completed",
    /** DocumentClassifySucceeded */
    DocumentClassifySucceeded = "document.classify.succeeded",
    /** DocumentClassifyFailed */
    DocumentClassifyFailed = "document.classify.failed",
    /** DocumentClassifyCompleted */
    DocumentClassifyCompleted = "document.classify.completed",
    /** DocumentRejected */
    DocumentRejected = "document.rejected",
    /** AnnotationValidated */
    AnnotationValidated = "annotation.validated"
}

/** Known values of {@link ResthookSubscriptionVersion} that the service accepts. */
export declare enum KnownResthookSubscriptionVersion {
    /** V1 */
    V1 = "v1",
    /** V2 */
    V2 = "v2",
    /** V3 */
    V3 = "v3"
}

/** Known values of {@link ResumeDataLanguagesItem} that the service accepts. */
export declare enum KnownResumeDataLanguagesItem {
    /** Ainu */
    Ainu = "Ainu",
    /** Akan */
    Akan = "Akan",
    /** Akkadian */
    Akkadian = "Akkadian",
    /** Amharic */
    Amharic = "Amharic",
    /** Anam */
    Anam = "Anam",
    /** Arabic */
    Arabic = "Arabic",
    /** Aramaic */
    Aramaic = "Aramaic",
    /** Arem */
    Arem = "Arem",
    /** Armenian */
    Armenian = "Armenian",
    /** Awadhi */
    Awadhi = "Awadhi",
    /** Aymara */
    Aymara = "Aymara",
    /** Azari */
    Azari = "Azari",
    /** Bagheli */
    Bagheli = "Bagheli",
    /** Bagri */
    Bagri = "Bagri",
    /** Bahasa */
    Bahasa = "Bahasa",
    /** BahasaIndonesian */
    BahasaIndonesian = "Bahasa Indonesian",
    /** Bambara */
    Bambara = "Bambara",
    /** Bangala */
    Bangala = "Bangala",
    /** Bardi */
    Bardi = "Bardi",
    /** Bassa */
    Bassa = "Bassa",
    /** Batak */
    Batak = "Batak",
    /** Belarusian */
    Belarusian = "Belarusian",
    /** Bemba */
    Bemba = "Bemba",
    /** Benga */
    Benga = "Benga",
    /** Bengali */
    Bengali = "Bengali",
    /** Berber */
    Berber = "Berber",
    /** Bhojpuri */
    Bhojpuri = "Bhojpuri",
    /** Bislama */
    Bislama = "Bislama",
    /** Brahui */
    Brahui = "Brahui",
    /** Bulgarian */
    Bulgarian = "Bulgarian",
    /** Bunu */
    Bunu = "Bunu",
    /** Cambodian */
    Cambodian = "Cambodian",
    /** Carew */
    Carew = "Carew",
    /** Carib */
    Carib = "Carib",
    /** Catalan */
    Catalan = "Catalan",
    /** Cebuano */
    Cebuano = "Cebuano",
    /** Chakma */
    Chakma = "Chakma",
    /** Chamorro */
    Chamorro = "Chamorro",
    /** Chango */
    Chango = "Chango",
    /** Chewa */
    Chewa = "Chewa",
    /** Croatian */
    Croatian = "Croatian",
    /** Czech */
    Czech = "Czech",
    /** Dagbani */
    Dagbani = "Dagbani",
    /** Danish */
    Danish = "Danish",
    /** Dari */
    Dari = "Dari",
    /** Dayi */
    Dayi = "Dayi",
    /** Dhatki */
    Dhatki = "Dhatki",
    /** Dhivehi */
    Dhivehi = "Dhivehi",
    /** Dinka */
    Dinka = "Dinka",
    /** Dogri */
    Dogri = "Dogri",
    /** Duala */
    Duala = "Duala",
    /** Dutch */
    Dutch = "Dutch",
    /** English */
    English = "English",
    /** Esperanto */
    Esperanto = "Esperanto",
    /** Estonian */
    Estonian = "Estonian",
    /** Ewondo */
    Ewondo = "Ewondo",
    /** Faroese */
    Faroese = "Faroese",
    /** Filipino */
    Filipino = "Filipino",
    /** Finnish */
    Finnish = "Finnish",
    /** Formula */
    Formula = "Formula",
    /** French */
    French = "French",
    /** Frisian */
    Frisian = "Frisian",
    /** Friulian */
    Friulian = "Friulian",
    /** Fula */
    Fula = "Fula",
    /** Gaelic */
    Gaelic = "Gaelic",
    /** Galo */
    Galo = "Galo",
    /** Garhwali */
    Garhwali = "Garhwali",
    /** Garifuna */
    Garifuna = "Garifuna",
    /** German */
    German = "German",
    /** Gikuyu */
    Gikuyu = "Gikuyu",
    /** Gujarati */
    Gujarati = "Gujarati",
    /** Gujerati */
    Gujerati = "Gujerati",
    /** Gwere */
    Gwere = "Gwere",
    /** Hawaiian */
    Hawaiian = "Hawaiian",
    /** Haya */
    Haya = "Haya",
    /** Hebrew */
    Hebrew = "Hebrew",
    /** Hindi */
    Hindi = "Hindi",
    /** Hmu */
    Hmu = "Hmu",
    /** Hokkien */
    Hokkien = "Hokkien",
    /** Hopi */
    Hopi = "Hopi",
    /** Hungarian */
    Hungarian = "Hungarian",
    /** Hup */
    Hup = "Hup",
    /** Ibanag */
    Ibanag = "Ibanag",
    /** Igbo */
    Igbo = "Igbo",
    /** Ilokano */
    Ilokano = "Ilokano",
    /** Indonesian */
    Indonesian = "Indonesian",
    /** Intermediate */
    Intermediate = "Intermediate",
    /** Irish */
    Irish = "Irish",
    /** Italian */
    Italian = "Italian",
    /** Japanese */
    Japanese = "Japanese",
    /** Jiba */
    Jiba = "Jiba",
    /** Kachin */
    Kachin = "Kachin",
    /** Kalenjin */
    Kalenjin = "Kalenjin",
    /** Kamayo */
    Kamayo = "Kamayo",
    /** Kannada */
    Kannada = "Kannada",
    /** Kaonde */
    Kaonde = "Kaonde",
    /** Kayan */
    Kayan = "Kayan",
    /** Khandeshi */
    Khandeshi = "Khandeshi",
    /** Khmer */
    Khmer = "Khmer",
    /** Kikuyu */
    Kikuyu = "Kikuyu",
    /** Kodava */
    Kodava = "Kodava",
    /** Koma */
    Koma = "Koma",
    /** Kongo */
    Kongo = "Kongo",
    /** Konkani */
    Konkani = "Konkani",
    /** Korean */
    Korean = "Korean",
    /** Korwa */
    Korwa = "Korwa",
    /** Kreyol */
    Kreyol = "Kreyol",
    /** Krio */
    Krio = "Krio",
    /** Kumaoni */
    Kumaoni = "Kumaoni",
    /** Kurdish */
    Kurdish = "Kurdish",
    /** Kurukh */
    Kurukh = "Kurukh",
    /** Kwa */
    Kwa = "Kwa",
    /** Ladino */
    Ladino = "Ladino",
    /** Lango */
    Lango = "Lango",
    /** Latvian */
    Latvian = "Latvian",
    /** Lawa */
    Lawa = "Lawa",
    /** Lingala */
    Lingala = "Lingala",
    /** Lithuanian */
    Lithuanian = "Lithuanian",
    /** Lule */
    Lule = "Lule",
    /** Luxembourgish */
    Luxembourgish = "Luxembourgish",
    /** Magahi */
    Magahi = "Magahi",
    /** Maithili */
    Maithili = "Maithili",
    /** Malay */
    Malay = "Malay",
    /** Malayalam */
    Malayalam = "Malayalam",
    /** Malaysian */
    Malaysian = "Malaysian",
    /** Malvi */
    Malvi = "Malvi",
    /** Maninka */
    Maninka = "Maninka",
    /** Manipuri */
    Manipuri = "Manipuri",
    /** Manx */
    Manx = "Manx",
    /** Marathi */
    Marathi = "Marathi",
    /** Mayan */
    Mayan = "Mayan",
    /** Medumba */
    Medumba = "Medumba",
    /** Memoni */
    Memoni = "Memoni",
    /** Mewari */
    Mewari = "Mewari",
    /** Mizo */
    Mizo = "Mizo",
    /** Montenegrin */
    Montenegrin = "Montenegrin",
    /** Mwan */
    Mwan = "Mwan",
    /** Mwanga */
    Mwanga = "Mwanga",
    /** Ndebele */
    Ndebele = "Ndebele",
    /** Nepali */
    Nepali = "Nepali",
    /** Nimadi */
    Nimadi = "Nimadi",
    /** Oriya */
    Oriya = "Oriya",
    /** Oromo */
    Oromo = "Oromo",
    /** Ovambo */
    Ovambo = "Ovambo",
    /** Pamona */
    Pamona = "Pamona",
    /** Pangasinan */
    Pangasinan = "Pangasinan",
    /** Pashto */
    Pashto = "Pashto",
    /** Phoenician */
    Phoenician = "Phoenician",
    /** Polish */
    Polish = "Polish",
    /** Portuguese */
    Portuguese = "Portuguese",
    /** Pulaar */
    Pulaar = "Pulaar",
    /** Pular */
    Pular = "Pular",
    /** Punjabi */
    Punjabi = "Punjabi",
    /** Quecha */
    Quecha = "Quecha",
    /** Rajasthani */
    Rajasthani = "Rajasthani",
    /** Romanian */
    Romanian = "Romanian",
    /** Russian */
    Russian = "Russian",
    /** Sakha */
    Sakha = "Sakha",
    /** Sango */
    Sango = "Sango",
    /** Santhali */
    Santhali = "Santhali",
    /** Saraiki */
    Saraiki = "Saraiki",
    /** Seim */
    Seim = "Seim",
    /** Shading */
    Shading = "Shading",
    /** Shama */
    Shama = "Shama",
    /** Shan */
    Shan = "Shan",
    /** Shona */
    Shona = "Shona",
    /** Silesian */
    Silesian = "Silesian",
    /** Sindhi */
    Sindhi = "Sindhi",
    /** Slovak */
    Slovak = "Slovak",
    /** Slovene */
    Slovene = "Slovene",
    /** Soga */
    Soga = "Soga",
    /** Sogdian */
    Sogdian = "Sogdian",
    /** Sotho */
    Sotho = "Sotho",
    /** Spanish */
    Spanish = "Spanish",
    /** Sudanese */
    Sudanese = "Sudanese",
    /** Sumerian */
    Sumerian = "Sumerian",
    /** Surajpuri */
    Surajpuri = "Surajpuri",
    /** Surigaonon */
    Surigaonon = "Surigaonon",
    /** Swati */
    Swati = "Swati",
    /** Swazi */
    Swazi = "Swazi",
    /** Swedish */
    Swedish = "Swedish",
    /** Tagalog */
    Tagalog = "Tagalog",
    /** Tamil */
    Tamil = "Tamil",
    /** Tausug */
    Tausug = "Tausug",
    /** Telugu */
    Telugu = "Telugu",
    /** Tetum */
    Tetum = "Tetum",
    /** Tharu */
    Tharu = "Tharu",
    /** Tibetan */
    Tibetan = "Tibetan",
    /** Tigrinya */
    Tigrinya = "Tigrinya",
    /** Tripuri */
    Tripuri = "Tripuri",
    /** Tswana */
    Tswana = "Tswana",
    /** Tulu */
    Tulu = "Tulu",
    /** Turkish */
    Turkish = "Turkish",
    /** Tuwali */
    Tuwali = "Tuwali",
    /** Ubi */
    Ubi = "Ubi",
    /** Ukrainian */
    Ukrainian = "Ukrainian",
    /** Urdu */
    Urdu = "Urdu",
    /** Veps */
    Veps = "Veps",
    /** Vietnamese */
    Vietnamese = "Vietnamese",
    /** Wagdi */
    Wagdi = "Wagdi",
    /** Waziri */
    Waziri = "Waziri",
    /** Xhosa */
    Xhosa = "Xhosa",
    /** Yiddish */
    Yiddish = "Yiddish",
    /** Yoruba */
    Yoruba = "Yoruba"
}

/** Known values of {@link ResumeSearchConfigDistanceUnit} that the service accepts. */
export declare enum KnownResumeSearchConfigDistanceUnit {
    /** Mi */
    Mi = "mi",
    /** Km */
    Km = "km"
}

/** Known values of {@link ResumeSkillSourcesItemSection} that the service accepts. */
export declare enum KnownResumeSkillSourcesItemSection {
    /** Achievements */
    Achievements = "Achievements",
    /** AdditionalInformation */
    AdditionalInformation = "AdditionalInformation",
    /** Education */
    Education = "Education",
    /** Extracurriculars */
    Extracurriculars = "Extracurriculars",
    /** Organisations */
    Organisations = "Organisations",
    /** Other */
    Other = "Other",
    /** PersonalDetails */
    PersonalDetails = "PersonalDetails",
    /** Projects */
    Projects = "Projects",
    /** Publications */
    Publications = "Publications",
    /** Referees */
    Referees = "Referees",
    /** Skills */
    Skills = "Skills",
    /** Summary */
    Summary = "Summary",
    /** Training */
    Training = "Training",
    /** WorkExperience */
    WorkExperience = "WorkExperience",
    /** NotPopulated */
    NotPopulated = "NotPopulated",
    /** Header */
    Header = "Header",
    /** Footer */
    Footer = "Footer",
    /** SkillsInterestsLanguages */
    SkillsInterestsLanguages = "Skills/Interests/Languages",
    /** TrainingCertifications */
    TrainingCertifications = "Training/Certifications",
    /** ExtracurricularsLeadership */
    ExtracurricularsLeadership = "Extracurriculars/Leadership"
}

/** Known values of {@link SearchParametersCustomDataFilterType} that the service accepts. */
export declare enum KnownSearchParametersCustomDataFilterType {
    /** Equals */
    Equals = "equals",
    /** Range */
    Range = "range"
}

/** Known values of {@link ThemeConfigPaletteMode} that the service accepts. */
export declare enum KnownThemeConfigPaletteMode {
    /** Light */
    Light = "light",
    /** Dark */
    Dark = "dark"
}

/** Known values of {@link Version} that the service accepts. */
export declare enum KnownVersion {
    /** V1 */
    V1 = "v1",
    /** V2 */
    V2 = "v2",
    /** V3 */
    V3 = "v3"
}

/** Known values of {@link WorkspaceVisibility} that the service accepts. */
export declare enum KnownWorkspaceVisibility {
    /** Organization */
    Organization = "organization",
    /** Private */
    Private = "private"
}

export declare interface LanguageAnnotation extends Annotation {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly parsed?: string;
}

export declare interface LanguageAnnotationUpdate extends AnnotationBase {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly parsed?: string;
}

export declare interface LanguagesSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

/** Optional parameters. */
export declare interface ListMappingDataSourcesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter by workspace. */
    workspace?: string;
    /** Filter by name. */
    name?: string;
    /** Filter by organization. */
    organization?: string;
    /** Filter by identifier. */
    identifier?: string;
}

/** Contains response data for the listMappingDataSources operation. */
export declare type ListMappingDataSourcesResponse = Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface ListMappingDataSourceValuesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Search for specific values */
    search?: string;
    /** Filter based on annotation ID */
    annotation?: number;
    /** Identifier of the document to apply filter lookups on if available */
    document?: string;
}

/** Contains response data for the listMappingDataSourceValues operation. */
export declare type ListMappingDataSourceValuesResponse = Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface ListMappingsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the listMappings operation. */
export declare type ListMappingsResponse = Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface ListOccupationGroupsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOccupationGroups operation. */
export declare type ListOccupationGroupsResponse = OccupationGroup[];

declare interface Location_2 {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly formatted?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly postalCode?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly state?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly stateCode?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly country?: string;
    /**
     * Two letter country code (ISO 3166-1 alpha-2)
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly countryCode?: string;
    rawInput: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly streetNumber?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly street?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly apartmentNumber?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly city?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly latitude?: number;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly longitude?: number;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly poBox?: string;
}
export { Location_2 as Location }

export declare interface LocationAnnotation extends Annotation {
    parsed?: Location_2;
}

export declare interface LocationAnnotationUpdate extends AnnotationBase {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly parsed?: LocationAnnotationUpdateParsed;
}

export declare interface LocationAnnotationUpdateParsed extends Location_2 {
}

export declare interface LocationSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

/** Defines values for ManagementLevel. */
export declare type ManagementLevel = "None" | "Low" | "Mid" | "Upper";

export declare interface ManagementLevelSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

/** A mapping allows you to specify specific settings regarding a lookup against a MappingDataSource should be applied. */
export declare interface Mapping {
    /**
     * Uniquely identify a mapping.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly identifier: string;
    /** The organization that this mapping belongs to. */
    organization?: string;
    /** The mapping data source this mapping applies to. */
    dataSource: string | null;
    /** Higher values will result in more strict matching. */
    scoreCutoff?: number;
    /** The field to order the results by. Leave blank for ordering by relevance. */
    orderBy?: string;
}

export declare interface MappingCreate {
    /** The mapping data source this mapping applies to. */
    dataSource: string | null;
    /** Higher values will result in more strict matching. */
    scoreCutoff?: number;
    /** The organization that this mapping belongs to. */
    organization?: string;
    /** The field to order the results by. Leave blank for ordering by relevance. */
    orderBy?: string;
}

/** A mapping data source is used to map from raw data found by our AI models to records in your database. */
export declare interface MappingDataSource {
    /**
     * Uniquely identify a mapping data source.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly identifier: string;
    name?: string;
    /** Attribute in the schema which uniquely identifiers the value */
    keyProperty: string;
    /** Attribute in the schema which is used to display the value */
    displayProperty: string;
    /** The organization that this mapping data source belongs to. */
    organization: string | null;
    /** The workspace that this mapping data source belongs to. */
    workspace: string | null;
    /** The schema of the mapping data source. */
    schema?: Record<string, unknown>;
}

/** A mapping data source is used to map from raw data found by our AI models to records in your database. */
export declare interface MappingDataSourceCreate {
    name?: string;
    /** The organization that this mapping data source belongs to. */
    organization?: string;
    /** The workspace that this mapping data source belongs to. */
    workspace?: string;
    /** Attribute in the schema which uniquely identifiers the value */
    keyProperty?: string;
    /** Attribute in the schema which is used to display the value */
    displayProperty?: string;
    values?: Record<string, unknown>[];
    /** The schema of the mapping data source. */
    schema?: Record<string, unknown>;
}

export declare interface MappingUpdate {
    /** Higher values will result in more strict matching. */
    scoreCutoff?: number;
    /** The field to order the results by. Leave blank for ordering by relevance. */
    orderBy?: string;
}

export declare interface Meta {
    /** Unique identifier for the document */
    identifier?: string;
    /** Optional identifier for the document that you can set to track the document in the Affinda system.  Is not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling */
    ready?: boolean;
    /** The datetime when the document was ready */
    readyDt?: Date;
    /** If true, some exception was raised during processing. Check the 'error' field of the main return object. */
    failed?: boolean;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** The document's language. */
    language?: string;
    /** The URL to the document's pdf (if the uploaded document is not already pdf, it's converted to pdf as part of the parsing process). */
    pdf?: string;
    /** If this document is part of a splitted document, this attribute points to the original document that this document is splitted from. */
    parentDocument?: MetaParentDocument;
    /** If this document has been splitted into a number of child documents, this attribute points to those child documents. */
    childDocuments?: MetaChildDocumentsItem[];
    /** The document's pages. */
    pages?: PageMeta[];
    /** This is true if the 'confirm' button has been clicked in the Affinda validation tool */
    isVerified?: boolean;
    /** Signed URL (valid for 60 minutes) to access the validation tool.  Not applicable for documents types such a resumes. */
    reviewUrl?: string;
    /** The overall confidence in the conversion of image to text.  (only applicable for images or PDF documents without a text layer) */
    ocrConfidence?: number;
    createdDt?: Date;
    documentType?: string;
    regionBias?: RegionBias;
    isOcrd?: boolean;
}

export declare interface MetaChildDocumentsItem {
    /** Unique identifier for the document */
    identifier?: string;
}

/** If this document is part of a splitted document, this attribute points to the original document that this document is splitted from. */
export declare interface MetaParentDocument {
    /** Unique identifier for the document */
    identifier?: string;
}

export declare interface OccupationGroup {
    code: number;
    name: string;
    children: OccupationGroup[];
}

export declare interface OccupationGroupSearchResult {
    match?: boolean;
    code: number;
    name: string;
    children?: OccupationGroup[];
    parents?: OccupationGroup[];
}

export declare interface OccupationGroupSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

export declare interface Organization {
    /** Uniquely identify an organization. */
    identifier?: string;
    name?: string;
    /** The role of the logged in user within the organization. */
    userRole?: OrganizationUserRole;
    /** URL of the organization's avatar. */
    avatar?: string;
    /** Used to sign webhook payloads so you can verify their integrity. */
    resthookSignatureKey?: string;
    isTrial?: boolean;
    /** Configuration of the embeddable validation tool. */
    validationToolConfig?: OrganizationValidationToolConfig;
    /** Whether to show the custom field creation in the UI. */
    showCustomFieldCreation?: boolean;
}

export declare interface OrganizationCreate {
    name: string;
    /** Upload avatar for the organization. */
    avatar?: coreRestPipeline.RequestBodyType;
    /** Used to sign webhook payloads so you can verify their integrity. */
    resthookSignatureKey?: string;
}

export declare interface OrganizationMembership {
    /** A random string that uniquely identify the resource. */
    identifier: string;
    /** Uniquely identify an organization. */
    organization: string;
    user: User;
    role: OrganizationRole;
}

export declare interface OrganizationMembershipUpdate {
    role?: OrganizationRole;
}

/**
 * Defines values for OrganizationRole. \
 * {@link KnownOrganizationRole} can be used interchangeably with OrganizationRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **admin** \
 * **member**
 */
export declare type OrganizationRole = string;

export declare interface OrganizationUpdate {
    name?: string;
    /** Upload avatar for the organization. */
    avatar?: coreRestPipeline.RequestBodyType;
    /** Used to sign webhook payloads so you can verify their integrity. */
    resthookSignatureKey?: string;
    /** Configuration of the embeddable validation tool. */
    validationToolConfig?: ValidationToolConfig;
}

/**
 * Defines values for OrganizationUserRole. \
 * {@link KnownOrganizationUserRole} can be used interchangeably with OrganizationUserRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **admin** \
 * **member**
 */
export declare type OrganizationUserRole = string;

/** Configuration of the embeddable validation tool. */
export declare interface OrganizationValidationToolConfig {
    theme?: ThemeConfig;
    /** Hide the confirm document button and other actions. */
    hideActions?: boolean;
    /** Hide the collection selector. */
    hideCollection?: boolean;
    /** Hide the edit pages button. */
    hideEditPages?: boolean;
    /** Hide the export menu. */
    hideExport?: boolean;
    /** Hide the filename input. */
    hideFilename?: boolean;
    /** Hide the toggle for showing raw annotation values. */
    hideShowRawValues?: boolean;
    /** Hide the reject document button. */
    hideReject?: boolean;
    /** Hide the reparse button. */
    hideReparse?: boolean;
    /** Hide the run OCR button. */
    hideRunOcr?: boolean;
    /** Hide the tags editor. */
    hideTags?: boolean;
    /** Hide the warnings panel. */
    hideWarnings?: boolean;
    /** Disable the page editor after a document has been split once. */
    restrictDocumentSplitting?: boolean;
    /** Disable currency formatting of decimals values. */
    disableCurrencyFormatting?: boolean;
    /** Disable editing document metadata. Makes the collection selector, filename input and tags editor read only. */
    disableEditDocumentMetadata?: boolean;
    /** Disable manual editing of annotation values via the validation popover. */
    disableManualAnnotationEditing?: boolean;
    /** Hide the document status indicator in the toolbar. */
    hideDocumentStatus?: boolean;
}

export declare interface PageMeta {
    id: number;
    /** Page number within the document, starts from 0. */
    pageIndex: number;
    /** The URL to the image of the page. */
    image: string | null;
    /** The URL to the translated image of the page. */
    imageTranslated?: string;
    /** Height of the page's image in px. */
    height: number;
    /** Width of the page's image in px. */
    width: number;
    /** The degree of rotation applied to the page. Greater than 0 indicates clockwise rotation. Less than 0 indicates counter-clockwise rotation. */
    rotation: number;
}

export declare interface PaginatedResponse {
    /** Number of items in results. */
    count: number;
    /** URL to request next page of results. */
    next?: string;
    /** URL to request previous page of results. */
    previous?: string;
}

export declare interface PaletteColorOptions {
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
}

export declare interface Paths11PzrpaV3ApiUsersGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: ApiUserWithoutKey[];
}

export declare interface Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, Paths1UmoszuV3MappingDataSourcesGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema {
    configOverride?: ResumeSearchConfig;
}

export declare interface Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, Paths1Dgz0V9V3AnnotationsGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface Paths1Dgz0V9V3AnnotationsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: (Annotation | null)[];
}

export declare interface Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, PathsWvcyp9V3MappingsGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface Paths1O6IvdaV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: Record<string, unknown>[];
}

export declare interface Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: ResthookSubscription[];
}

export declare interface Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, Paths1O6IvdaV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface Paths1UmoszuV3MappingDataSourcesGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: MappingDataSource[];
}

export declare interface Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, Paths11PzrpaV3ApiUsersGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results: WorkspaceMembership[];
}

export declare interface Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: DataPointChoice[];
}

export declare interface Paths4T5Cm5V3IndexGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: Index[];
}

export declare interface Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: OrganizationMembership[];
}

export declare interface PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema {
    document?: string;
}

export declare interface PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, Paths4T5Cm5V3IndexGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema {
    /** Unique identifier for the document. */
    document?: string;
}

export declare interface PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: Invitation[];
}

export declare interface PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: DocumentUnion[];
}

export declare interface PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema {
    configOverride?: JobDescriptionSearchConfig;
}

export declare interface PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema {
}

export declare interface PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema {
    /** Number of indexed documents in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Get200ApplicationJsonPropertiesItemsItem[];
}

export declare interface PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface PathsWvcyp9V3MappingsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: Mapping[];
}

export declare interface PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema extends PaginatedResponse, Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {
}

export declare interface PhoneNumberAnnotation extends Annotation {
    parsed?: PhoneNumberAnnotationParsed;
}

export declare interface PhoneNumberAnnotationParsed {
    rawText?: string;
    formattedNumber?: string;
    countryCode?: string;
    internationalCountryCode?: number;
    nationalNumber?: string;
}

/** Optional parameters. */
export declare interface PydanticModelsFromDocumentTypeOptionalParams extends coreClient.OperationOptions {
    /** Name for the Pydantic model */
    modelName?: string;
}

/** Contains response data for the pydanticModelsFromDocumentType operation. */
export declare type PydanticModelsFromDocumentTypeResponse = PydanticModelsResponse;

export declare interface PydanticModelsResponse {
    /** Pydantic model code */
    code: string;
}

export declare interface Rectangle {
    pageIndex?: number;
    x0: number;
    y0: number;
    x1: number;
    y1: number;
}

export declare interface RedactConfig {
    redactHeadshot?: boolean;
    redactPersonalDetails?: boolean;
    redactWorkDetails?: boolean;
    redactReferees?: boolean;
    redactEducationDetails?: boolean;
    redactLocations?: boolean;
    redactDates?: boolean;
    redactGender?: boolean;
}

/** Optional parameters. */
export declare interface RegenerateApiKeyForApiUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the regenerateApiKeyForApiUser operation. */
export declare type RegenerateApiKeyForApiUserResponse = ApiUserWithKey;

/**
 * Defines values for Region. \
 * {@link KnownRegion} can be used interchangeably with Region,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **api** \
 * **api.eu1** \
 * **api.us1**
 */
export declare type Region = string;

export declare interface RegionBias {
    /** A single alpha-2 country code (e.g. AU) used by google geocoding service */
    country?: string;
    /** A list of alpha-2 country codes used by Pelias */
    countries?: string[];
    /** A list of coordinates used by Pelias in the shape of [min_lon, min_lat, max_lon, max_lat] */
    squareCoordinates?: number[];
    /**
     * If true, the location must be within the region, as opposed to prefering locations within the region.
     * Default to false.
     *
     */
    strict?: boolean;
}

/** Optional parameters. */
export declare interface ReIndexDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ReplaceDataPointChoicesOptionalParams extends coreClient.OperationOptions {
    /** Request body for replacing choices of a data point. Either `collection` or `organization` is required. */
    body?: DataPointChoiceReplaceRequest;
}

/** Contains response data for the replaceDataPointChoices operation. */
export declare type ReplaceDataPointChoicesResponse = DataPointChoiceReplaceResponse;

/** Optional parameters. */
export declare interface ReplaceMappingDataSourceValuesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the replaceMappingDataSourceValues operation. */
export declare type ReplaceMappingDataSourceValuesResponse = Record<string, unknown>[];

export declare interface RequestError {
    type: string;
    errors: RequestErrorErrorsItem[];
}

export declare interface RequestErrorErrorsItem {
    attr: string | null;
    code: string;
    detail: string;
}

/** Optional parameters. */
export declare interface RespondToInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the respondToInvitation operation. */
export declare type RespondToInvitationResponse = Invitation;

/**
 * Defines values for ResthookEvent. \
 * {@link KnownResthookEvent} can be used interchangeably with ResthookEvent,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resume.parse.succeeded** \
 * **resume.parse.failed** \
 * **resume.parse.completed** \
 * **invoice.parse.succeeded** \
 * **invoice.parse.failed** \
 * **invoice.parse.completed** \
 * **invoice.validate.completed** \
 * **document.parse.succeeded** \
 * **document.parse.failed** \
 * **document.parse.completed** \
 * **document.validate.completed** \
 * **document.classify.succeeded** \
 * **document.classify.failed** \
 * **document.classify.completed** \
 * **document.rejected** \
 * **annotation.validated**
 */
export declare type ResthookEvent = string;

export declare interface ResthookSubscription {
    /** Resthook subscription's ID. */
    id: number;
    /** The event name to subscribe to. */
    event: ResthookEvent;
    organization: Organization | null;
    workspace: ResthookSubscriptionWorkspace | null;
    /** URL of the resthook's receiver. */
    targetUrl: string;
    /** Resthooks only fire for active subscriptions. */
    active: boolean;
    /** Resthook subscriptions can be auto deactivated if the receiver continuously returns error status code over a period of time. */
    autoDeactivated: boolean;
    /** The reason for the subscription being auto deactivated. May contains the error response that the receiver returned. */
    autoDeactivateReason: string;
    /** Version of the resthook subscription. Determines the resthook body being fired. */
    version: ResthookSubscriptionVersion;
}

export declare interface ResthookSubscriptionCreate {
    /** URL of the resthook's receiver. */
    targetUrl: string;
    /** The event name to subscribe to. */
    event: ResthookEvent;
    organization?: string;
    workspace?: string;
    /** Version of the resthook subscription. Determines the resthook body being fired. */
    version?: Version;
}

export declare interface ResthookSubscriptionUpdate {
    /** The event name to subscribe to. */
    event?: ResthookEvent;
    /** Uniquely identify an organization. */
    organization?: string;
    /** Uniquely identify a workspace. */
    workspace?: string;
    /** Version of the resthook subscription. Determines the resthook body being fired. */
    version?: Version;
}

/**
 * Defines values for ResthookSubscriptionVersion. \
 * {@link KnownResthookSubscriptionVersion} can be used interchangeably with ResthookSubscriptionVersion,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **v1** \
 * **v2** \
 * **v3**
 */
export declare type ResthookSubscriptionVersion = string;

export declare interface ResthookSubscriptionWorkspace {
    /** Uniquely identify a workspace. */
    identifier: string;
    name: string;
    organization: Organization;
}

export declare interface Resume extends Document_2 {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    extractor: "resume";
    /** A JSON-encoded string of the `ResumeData` object. */
    data?: ResumeData;
}

/** A JSON-encoded string of the `ResumeData` object. */
export declare interface ResumeData {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    name?: ResumeDataName;
    phoneNumbers?: string[];
    phoneNumberDetails?: ResumeDataPhoneNumberDetailsItem[];
    websites?: string[];
    emails?: string[];
    dateOfBirth?: string;
    location?: Location_2;
    objective?: string;
    languages?: ResumeDataLanguagesItem[];
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly languageCodes?: string[];
    summary?: string;
    totalYearsExperience?: number;
    /**
     * base64 encoded string
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly headShot?: Uint8Array;
    education?: Education[];
    /**
     * Prediction of the candidate's profession based on recent work experience
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly profession?: string;
    /**
     * Linkedin account associated with the candidate
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly linkedin?: string;
    workExperience?: ResumeDataWorkExperienceItem[];
    skills?: ResumeDataSkillsItem[];
    certifications?: string[];
    publications?: string[];
    referees?: ResumeDataRefereesItem[];
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly sections?: ResumeDataSectionsItem[];
    /**
     * Probability that the given document is a resume. Values below 30 suggest that the document is not a resume.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isResumeProbability?: number;
    /** All of the raw text of the parsed resume, example is shortened for readability */
    rawText?: string;
    /** Redacted version of the text in the resume, removing PII. */
    redactedText?: string;
}

/**
 * Defines values for ResumeDataLanguagesItem. \
 * {@link KnownResumeDataLanguagesItem} can be used interchangeably with ResumeDataLanguagesItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Ainu** \
 * **Akan** \
 * **Akkadian** \
 * **Amharic** \
 * **Anam** \
 * **Arabic** \
 * **Aramaic** \
 * **Arem** \
 * **Armenian** \
 * **Awadhi** \
 * **Aymara** \
 * **Azari** \
 * **Bagheli** \
 * **Bagri** \
 * **Bahasa** \
 * **Bahasa Indonesian** \
 * **Bambara** \
 * **Bangala** \
 * **Bardi** \
 * **Bassa** \
 * **Batak** \
 * **Belarusian** \
 * **Bemba** \
 * **Benga** \
 * **Bengali** \
 * **Berber** \
 * **Bhojpuri** \
 * **Bislama** \
 * **Brahui** \
 * **Bulgarian** \
 * **Bunu** \
 * **Cambodian** \
 * **Carew** \
 * **Carib** \
 * **Catalan** \
 * **Cebuano** \
 * **Chakma** \
 * **Chamorro** \
 * **Chango** \
 * **Chewa** \
 * **Croatian** \
 * **Czech** \
 * **Dagbani** \
 * **Danish** \
 * **Dari** \
 * **Dayi** \
 * **Dhatki** \
 * **Dhivehi** \
 * **Dinka** \
 * **Dogri** \
 * **Duala** \
 * **Dutch** \
 * **English** \
 * **Esperanto** \
 * **Estonian** \
 * **Ewondo** \
 * **Faroese** \
 * **Filipino** \
 * **Finnish** \
 * **Formula** \
 * **French** \
 * **Frisian** \
 * **Friulian** \
 * **Fula** \
 * **Gaelic** \
 * **Galo** \
 * **Garhwali** \
 * **Garifuna** \
 * **German** \
 * **Gikuyu** \
 * **Gujarati** \
 * **Gujerati** \
 * **Gwere** \
 * **Hawaiian** \
 * **Haya** \
 * **Hebrew** \
 * **Hindi** \
 * **Hmu** \
 * **Hokkien** \
 * **Hopi** \
 * **Hungarian** \
 * **Hup** \
 * **Ibanag** \
 * **Igbo** \
 * **Ilokano** \
 * **Indonesian** \
 * **Intermediate** \
 * **Irish** \
 * **Italian** \
 * **Japanese** \
 * **Jiba** \
 * **Kachin** \
 * **Kalenjin** \
 * **Kamayo** \
 * **Kannada** \
 * **Kaonde** \
 * **Kayan** \
 * **Khandeshi** \
 * **Khmer** \
 * **Kikuyu** \
 * **Kodava** \
 * **Koma** \
 * **Kongo** \
 * **Konkani** \
 * **Korean** \
 * **Korwa** \
 * **Kreyol** \
 * **Krio** \
 * **Kumaoni** \
 * **Kurdish** \
 * **Kurukh** \
 * **Kwa** \
 * **Ladino** \
 * **Lango** \
 * **Latvian** \
 * **Lawa** \
 * **Lingala** \
 * **Lithuanian** \
 * **Lule** \
 * **Luxembourgish** \
 * **Magahi** \
 * **Maithili** \
 * **Malay** \
 * **Malayalam** \
 * **Malaysian** \
 * **Malvi** \
 * **Maninka** \
 * **Manipuri** \
 * **Manx** \
 * **Marathi** \
 * **Mayan** \
 * **Medumba** \
 * **Memoni** \
 * **Mewari** \
 * **Mizo** \
 * **Montenegrin** \
 * **Mwan** \
 * **Mwanga** \
 * **Ndebele** \
 * **Nepali** \
 * **Nimadi** \
 * **Oriya** \
 * **Oromo** \
 * **Ovambo** \
 * **Pamona** \
 * **Pangasinan** \
 * **Pashto** \
 * **Phoenician** \
 * **Polish** \
 * **Portuguese** \
 * **Pulaar** \
 * **Pular** \
 * **Punjabi** \
 * **Quecha** \
 * **Rajasthani** \
 * **Romanian** \
 * **Russian** \
 * **Sakha** \
 * **Sango** \
 * **Santhali** \
 * **Saraiki** \
 * **Seim** \
 * **Shading** \
 * **Shama** \
 * **Shan** \
 * **Shona** \
 * **Silesian** \
 * **Sindhi** \
 * **Slovak** \
 * **Slovene** \
 * **Soga** \
 * **Sogdian** \
 * **Sotho** \
 * **Spanish** \
 * **Sudanese** \
 * **Sumerian** \
 * **Surajpuri** \
 * **Surigaonon** \
 * **Swati** \
 * **Swazi** \
 * **Swedish** \
 * **Tagalog** \
 * **Tamil** \
 * **Tausug** \
 * **Telugu** \
 * **Tetum** \
 * **Tharu** \
 * **Tibetan** \
 * **Tigrinya** \
 * **Tripuri** \
 * **Tswana** \
 * **Tulu** \
 * **Turkish** \
 * **Tuwali** \
 * **Ubi** \
 * **Ukrainian** \
 * **Urdu** \
 * **Veps** \
 * **Vietnamese** \
 * **Wagdi** \
 * **Waziri** \
 * **Xhosa** \
 * **Yiddish** \
 * **Yoruba**
 */
export declare type ResumeDataLanguagesItem = string;

export declare interface ResumeDataName {
    raw?: string;
    first?: string;
    last?: string;
    middle?: string;
    title?: string;
}

export declare interface ResumeDataPhoneNumberDetailsItem {
    rawText?: string;
    formattedNumber?: string;
    countryCode?: string;
    internationalCountryCode?: number;
    nationalNumber?: string;
}

export declare interface ResumeDataRefereesItem {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    name?: string;
    text?: string;
    email?: string;
    number?: string;
    position?: string;
}

export declare interface ResumeDataSectionsItem {
    sectionType?: string;
    bbox?: number[];
    pageIndex?: number;
    text?: string;
}

export declare interface ResumeDataSkillsItem {
    id?: number;
    /**
     * EMSI id of this skill.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly emsiId?: string;
    name?: string;
    lastUsed?: string;
    numberOfMonths?: number;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly type?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly count?: number;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly weighting?: number;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly sources?: ResumeDataSkillsPropertiesItemsItem[];
}

export declare interface ResumeDataSkillsPropertiesItemsItem {
    section?: string;
    /** If this skill is extracted from a "workExperience" section, the "position" is the index of the work experience where this skill is found, with 0 being the first work experience, 1 being the second work experience, and so on. */
    position?: number;
    /** If this skill is extracted from a "workExperience" section, the "workExperienceId" is the id of the work experience where this skill is found. */
    workExperienceId?: number;
}

export declare interface ResumeDataWorkExperienceItem {
    id?: number;
    jobTitle?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly socCode?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly socName?: string;
    organization?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly industry?: string;
    location?: Location_2;
    jobDescription?: string;
    dates?: ResumeDataWorkExperienceItemDates;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly occupation?: ResumeDataWorkExperienceItemOccupation;
}

export declare interface ResumeDataWorkExperienceItemDates {
    startDate?: Date;
    endDate?: Date;
    monthsInPosition?: number;
    isCurrent?: boolean;
    rawText?: string;
}

export declare interface ResumeDataWorkExperienceItemOccupation {
    /** The raw (not normalized) job title pulled from the work experience entry */
    jobTitle?: string;
    /** Mapped onto the EMSI job title taxonomy if a sufficiently close match exists. */
    jobTitleNormalized?: string;
    /** EMSI id of the normalised job title. */
    emsiId?: string;
    managementLevel?: ManagementLevel;
    classification?: Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification;
}

export declare interface ResumeRedact extends Document_2 {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    extractor: "resume-redact";
    data?: ResumeRedactData;
}

export declare interface ResumeRedactData {
    /** URL to download the redacted resume. */
    redactedPdf?: string;
}

export declare interface ResumeSearch {
    /** Total number of results */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    parameters?: ResumeSearchParameters;
    results?: ResumeSearchResult[];
}

export declare interface ResumeSearchConfig {
    allowPdfDownload?: boolean;
    /** Maximum number of results that can be returned. Setting to "null" means no limitation. */
    maxResults?: number;
    displayJobTitle?: boolean;
    displayLocation?: boolean;
    displayYearsExperience?: boolean;
    displayOccupationGroup?: boolean;
    displayEducation?: boolean;
    displaySkills?: boolean;
    displayLanguages?: boolean;
    displayManagementLevel?: boolean;
    displayKeywords?: boolean;
    weightJobTitle?: number;
    weightLocation?: number;
    weightYearsExperience?: number;
    weightOccupationGroup?: number;
    weightEducation?: number;
    weightSkills?: number;
    weightLanguages?: number;
    weightManagementLevel?: number;
    weightKeywords?: number;
    /** List of index names. */
    indices?: string[];
    /** Controls whether or not the index dropdown is displayed to the user */
    showIndexDropdown?: boolean;
    /** Customize the theme of the embeded search tool. */
    searchToolTheme?: ResumeSearchConfigSearchToolTheme;
    /**
     * ID of the logged in user.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly userId?: number;
    /**
     * Username of the logged in user.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly username?: string;
    /** A list of actions to show in the dropdown in the embedded search tool */
    actions?: SearchConfigAction[];
    /** Hide the reset/import toolbar. */
    hideToolbar?: boolean;
    /** Hide the entire side panel. */
    hideSidePanel?: boolean;
    customFieldsConfig?: CustomFieldConfig[];
    /** The unit of distance to use for location based searches */
    distanceUnit?: ResumeSearchConfigDistanceUnit;
}

/**
 * Defines values for ResumeSearchConfigDistanceUnit. \
 * {@link KnownResumeSearchConfigDistanceUnit} can be used interchangeably with ResumeSearchConfigDistanceUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **mi** \
 * **km**
 */
export declare type ResumeSearchConfigDistanceUnit = string;

/** Customize the theme of the embeded search tool. */
export declare interface ResumeSearchConfigSearchToolTheme extends ThemeConfig {
}

export declare interface ResumeSearchDetail {
    jobTitle?: ResumeSearchDetailJobTitle;
    location?: ResumeSearchDetailLocation;
    education?: ResumeSearchDetailEducation;
    skills?: ResumeSearchDetailSkills;
    experience?: ResumeSearchDetailExperience;
    occupationGroup?: ResumeSearchDetailOccupationGroup;
    languages?: ResumeSearchDetailLanguages;
    managementLevel?: ResumeSearchDetailManagementLevel;
    searchExpression?: ResumeSearchDetailSearchExpression;
}

export declare interface ResumeSearchDetailEducation {
    missing?: ResumeSearchDetailEducationMissing;
    value?: ResumeSearchDetailEducationValueItem[];
}

export declare interface ResumeSearchDetailEducationMissing {
    degrees?: string[];
    highestDegreeTypes?: string[];
    institutions?: string[];
    currentStudent?: boolean;
    recentGraduate?: boolean;
}

export declare interface ResumeSearchDetailEducationValueItem extends Education, ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1 {
}

export declare interface ResumeSearchDetailExperience {
    years?: number;
    match?: boolean;
}

export declare interface ResumeSearchDetailJobTitle {
    missing?: string[];
    value?: ResumeSearchDetailJobTitleValueItem[];
}

export declare interface ResumeSearchDetailJobTitleValueItem {
    name?: string;
    startDate?: string;
    endDate?: string;
    companyName?: string;
    match?: boolean;
}

export declare interface ResumeSearchDetailLanguages {
    missing?: ResumeSearchParametersSkill[];
    value?: ResumeSearchDetailLanguagesValueItem[];
}

export declare interface ResumeSearchDetailLanguagesValueItem extends ResumeSkill, Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1 {
}

export declare interface ResumeSearchDetailLocation {
    missing?: ResumeSearchParametersLocation[];
    value?: ResumeSearchDetailLocationValue;
}

export declare interface ResumeSearchDetailLocationValue extends Location_2, ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1 {
}

export declare interface ResumeSearchDetailManagementLevel {
    level?: ManagementLevel;
    match?: boolean;
}

export declare interface ResumeSearchDetailOccupationGroup {
    missing?: number[];
    value?: OccupationGroupSearchResult[];
}

export declare interface ResumeSearchDetailSearchExpression {
    missing?: string[];
    value?: string[];
}

export declare interface ResumeSearchDetailSkills {
    missing?: ResumeSearchParametersSkill[];
    value?: ResumeSearchDetailSkillsValueItem[];
}

export declare interface ResumeSearchDetailSkillsValueItem extends ResumeSkill, ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1 {
}

export declare interface ResumeSearchEmbed {
    /** The signed URL for the embedable search tool. */
    url?: string;
}

export declare interface ResumeSearchMatch {
    /** The matching score between the provided resume and job description. */
    score?: number;
    details?: ResumeSearchMatchDetails;
}

export declare interface ResumeSearchMatchDetails {
    jobTitle?: JobTitleSearchScoreComponent;
    managementLevel?: ManagementLevelSearchScoreComponent;
    experience?: ExperienceSearchScoreComponent;
    skills?: SkillsSearchScoreComponent;
    languages?: LanguagesSearchScoreComponent;
    location?: LocationSearchScoreComponent;
    education?: EducationSearchScoreComponent;
    occupationGroup?: OccupationGroupSearchScoreComponent;
    searchExpression?: SearchExpressionSearchScoreComponent;
}

export declare interface ResumeSearchParameters {
    indices: string[];
    /** A random string that uniquely identify the resource. */
    jobDescription?: string;
    /** A random string that uniquely identify the resource. */
    resume?: string;
    jobTitles?: string[];
    /** Search only through the canditate's current job */
    jobTitlesCurrentOnly?: boolean;
    jobTitlesRequired?: boolean;
    jobTitlesWeight?: number;
    /** Minimum years of total work experience */
    yearsExperienceMin?: number;
    /** Maximum years of total work experience */
    yearsExperienceMax?: number;
    yearsExperienceRequired?: boolean;
    yearsExperienceWeight?: number;
    /** Search by location name or by coordinates */
    locations?: ResumeSearchParametersLocation[];
    locationsWeight?: number;
    locationsRequired?: boolean;
    skills?: ResumeSearchParametersSkill[];
    skillsWeight?: number;
    languages?: ResumeSearchParametersSkill[];
    languagesWeight?: number;
    institutions?: string[];
    institutionsRequired?: boolean;
    degrees?: string[];
    degreesRequired?: boolean;
    highestDegreeTypes?: (EducationLevel | null)[];
    highestDegreeTypesRequired?: boolean;
    /** Search for student canditates */
    isCurrentStudent?: boolean;
    isCurrentStudentRequired?: boolean;
    /** Search for canditates that graduated less than a year ago */
    isRecentGraduate?: boolean;
    isRecentGraduateRequired?: boolean;
    educationWeight?: number;
    /** Search through resumes' raw text */
    searchExpression?: string;
    searchExpressionRequired?: boolean;
    searchExpressionWeight?: number;
    socCodes?: number[];
    socCodesWeight?: number;
    socCodesRequired?: boolean;
    managementLevel?: ManagementLevel;
    managementLevelRequired?: boolean;
    managementLevelWeight?: number;
    customData?: ResumeSearchParametersCustomData[];
}

export declare interface ResumeSearchParametersCustomData extends SearchParametersCustomData {
}

export declare interface ResumeSearchParametersLocation {
    name?: string;
    coordinates?: ResumeSearchParametersLocationCoordinates;
    distance?: number;
    unit?: SearchLocationUnit;
}

export declare interface ResumeSearchParametersLocationCoordinates {
    latitude?: number;
    longitude?: number;
}

export declare interface ResumeSearchParametersSkill {
    name?: string;
    required?: boolean;
}

export declare interface ResumeSearchResult {
    /** A random string that uniquely identify the resource. */
    identifier: string;
    score: number;
    pdf: string | null;
    name?: string;
    jobTitle: JobTitleSearchScoreComponent;
    managementLevel: ManagementLevelSearchScoreComponent;
    experience: ExperienceSearchScoreComponent;
    skills: SkillsSearchScoreComponent;
    languages: LanguagesSearchScoreComponent;
    location: LocationSearchScoreComponent;
    education: EducationSearchScoreComponent;
    occupationGroup: OccupationGroupSearchScoreComponent;
    searchExpression: SearchExpressionSearchScoreComponent;
    /** Dictionary of <components·nqbw24·schemas·customdatasearchscorecomponent·additionalproperties> */
    customData: {
        [propertyName: string]: ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties;
    };
}

export declare interface ResumeSkill {
    name?: string;
    lastUsed?: string;
    numberOfMonths?: number;
    type?: string;
    sources?: ResumeSkillSourcesItem[];
}

export declare interface ResumeSkillSourcesItem {
    section?: ResumeSkillSourcesItemSection;
    position?: number;
}

/**
 * Defines values for ResumeSkillSourcesItemSection. \
 * {@link KnownResumeSkillSourcesItemSection} can be used interchangeably with ResumeSkillSourcesItemSection,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Achievements** \
 * **AdditionalInformation** \
 * **Education** \
 * **Extracurriculars** \
 * **Organisations** \
 * **Other** \
 * **PersonalDetails** \
 * **Projects** \
 * **Publications** \
 * **Referees** \
 * **Skills** \
 * **Summary** \
 * **Training** \
 * **WorkExperience** \
 * **NotPopulated** \
 * **Header** \
 * **Footer** \
 * **Skills\/Interests\/Languages** \
 * **Training\/Certifications** \
 * **Extracurriculars\/Leadership**
 */
export declare type ResumeSkillSourcesItemSection = string;

export declare interface RowAnnotation extends Annotation {
    parsed?: RowAnnotationParsed;
}

export declare interface RowAnnotationParsed {
    itemCode?: TextAnnotation;
    itemDate?: DateAnnotation;
    itemDescription?: TextAnnotation;
    itemUnit?: TextAnnotation;
    itemUnitPrice?: FloatAnnotation;
    itemQuantity?: FloatAnnotation;
    itemDiscount?: TextAnnotation;
    itemBaseTotal?: FloatAnnotation;
    itemTaxRate?: TextAnnotation;
    itemTaxTotal?: FloatAnnotation;
    itemTotal?: FloatAnnotation;
    itemOther?: TextAnnotation;
}

export declare interface RowBetaAnnotation extends Annotation {
    parsed?: RowBetaAnnotationParsed;
}

export declare interface RowBetaAnnotationParsed {
    itemCodeBeta?: TextAnnotation;
    itemDateBeta?: DateAnnotation;
    itemDescriptionBeta?: TextAnnotation;
    itemUnitBeta?: TextAnnotation;
    itemUnitPriceBeta?: FloatAnnotation;
    itemQuantityBeta?: FloatAnnotation;
    itemDiscountBeta?: TextAnnotation;
    itemBaseTotalBeta?: FloatAnnotation;
    itemTaxRateBeta?: TextAnnotation;
    itemTaxTotalBeta?: FloatAnnotation;
    itemTotalBeta?: FloatAnnotation;
    itemOtherBeta?: TextAnnotation;
}

export declare interface SearchConfigAction {
    /** Human readable label to display in the UI */
    label: string;
    /** Name of the event to be triggered */
    eventName: string;
}

export declare interface SearchExpressionSearchScoreComponent {
    label: string;
    value?: string;
    score?: number;
}

/** Defines values for SearchLocationUnit. */
export declare type SearchLocationUnit = "km" | "mi";

export declare interface SearchParametersCustomData {
    /** Data points of "text" type support only "equals" filterType, others support both "equals" and "range" */
    filterType: SearchParametersCustomDataFilterType;
    /** The data point's slug, used for portal v2 (deprecated) */
    dataPoint?: string;
    /** The field's slug */
    field?: string;
    /** "equals" searches require the "value" key inside the query, and "range" searches require at least one of "gte" (greater than or equal) and "lte" (less than or equal) */
    query: Record<string, unknown>;
    required?: boolean;
    weight?: number;
}

/**
 * Defines values for SearchParametersCustomDataFilterType. \
 * {@link KnownSearchParametersCustomDataFilterType} can be used interchangeably with SearchParametersCustomDataFilterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **equals** \
 * **range**
 */
export declare type SearchParametersCustomDataFilterType = string;

export declare interface SkillAnnotation extends Annotation {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly parsed?: string;
}

export declare interface SkillAnnotationUpdate extends AnnotationBase {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly parsed?: string;
}

export declare interface SkillsSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

export declare interface TableAnnotation extends Annotation {
    parsed?: TableAnnotationParsed;
}

export declare interface TableAnnotationParsed {
    rows?: (RowAnnotation | null)[];
}

export declare interface TableBetaAnnotation extends Annotation {
    parsed?: TableBetaAnnotationParsed;
}

export declare interface TableBetaAnnotationParsed {
    rows?: (RowBetaAnnotation | null)[];
}

export declare interface Tag {
    /** Uniquely identify a tag. */
    id: number;
    name: string;
    /** Uniquely identify a workspace. */
    workspace: string;
    /** Number of documents tagged with this. */
    documentCount: number;
}

export declare interface TagCreate {
    name: string;
    /** Uniquely identify a workspace. */
    workspace: string;
}

export declare interface TagUpdate {
    name?: string;
    /** Uniquely identify a workspace. */
    workspace?: string;
}

export declare interface TextAnnotation extends Annotation {
    parsed?: string;
}

export declare interface TextAnnotationUpdate extends AnnotationBase {
    parsed?: string;
}

export declare interface ThemeConfig {
    palette?: ThemeConfigPalette;
    typography?: ThemeConfigTypography;
    borderRadius?: number;
    fontUrl?: string;
}

export declare interface ThemeConfigPalette {
    mode?: ThemeConfigPaletteMode;
    /** Anything */
    background?: any;
    text?: ThemeConfigPaletteText;
    divider?: string;
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    success?: PaletteColorOptions;
    annotation?: PaletteColorOptions;
    error?: PaletteColorOptions;
    info?: PaletteColorOptions;
    warning?: PaletteColorOptions;
}

/**
 * Defines values for ThemeConfigPaletteMode. \
 * {@link KnownThemeConfigPaletteMode} can be used interchangeably with ThemeConfigPaletteMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **light** \
 * **dark**
 */
export declare type ThemeConfigPaletteMode = string;

export declare interface ThemeConfigPaletteText {
    primary?: string;
    secondary?: string;
    disabled?: string;
}

export declare interface ThemeConfigTypography {
    fontFamily?: string;
    /** Anything */
    fontSize?: any;
    fontWeightRegular?: string;
    fontWeightMedium?: string;
    fontWeightBold?: string;
}

/** Optional parameters. */
export declare interface UpdateAnnotationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateAnnotation operation. */
export declare type UpdateAnnotationResponse = Annotation;

/** Optional parameters. */
export declare interface UpdateApiUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateApiUser operation. */
export declare type UpdateApiUserResponse = ApiUserWithoutKey;

/** Optional parameters. */
export declare interface UpdateCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateCollection operation. */
export declare type UpdateCollectionResponse = Collection;

/** Optional parameters. */
export declare interface UpdateDataFieldForCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDataFieldForCollection operation. */
export declare type UpdateDataFieldForCollectionResponse = CollectionField;

/** Optional parameters. */
export declare interface UpdateDataPointChoiceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDataPointChoice operation. */
export declare type UpdateDataPointChoiceResponse = DataPointChoice;

/** Optional parameters. */
export declare interface UpdateDataPointOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDataPoint operation. */
export declare type UpdateDataPointResponse = DataPoint;

/** Optional parameters. */
export declare interface UpdateDocumentDataOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDocumentData operation. */
export declare type UpdateDocumentDataResponse = DocumentUnion;

/** Optional parameters. */
export declare interface UpdateDocumentOptionalParams extends coreClient.OperationOptions {
    /** If "true", the response is compacted to annotations' parsed data. Annotations' meta data are excluded. Default is "false". */
    compact?: boolean;
    /** Whether to return the response in snake_case instead of camelCase. Default is false. */
    snakeCase?: boolean;
}

/** Contains response data for the updateDocument operation. */
export declare type UpdateDocumentResponse = DocumentUnion;

/** Optional parameters. */
export declare interface UpdateDocumentTypeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDocumentType operation. */
export declare type UpdateDocumentTypeResponse = DocumentType_2;

/** Optional parameters. */
export declare interface UpdateExtractorOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateExtractor operation. */
export declare type UpdateExtractorResponse = Extractor;

/** Optional parameters. */
export declare interface UpdateIndexOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateIndex operation. */
export declare type UpdateIndexResponse = Index;

/** Optional parameters. */
export declare interface UpdateInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateInvitation operation. */
export declare type UpdateInvitationResponse = Invitation;

/** Optional parameters. */
export declare interface UpdateJobDescriptionSearchConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateJobDescriptionSearchConfig operation. */
export declare type UpdateJobDescriptionSearchConfigResponse = JobDescriptionSearchConfig;

/** Optional parameters. */
export declare interface UpdateMappingDataSourceValueOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateMappingDataSourceValue operation. */
export declare type UpdateMappingDataSourceValueResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface UpdateMappingOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateMapping operation. */
export declare type UpdateMappingResponse = Mapping;

/** Optional parameters. */
export declare interface UpdateOrganizationMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateOrganizationMembership operation. */
export declare type UpdateOrganizationMembershipResponse = OrganizationMembership;

/** Optional parameters. */
export declare interface UpdateOrganizationOptionalParams extends coreClient.OperationOptions {
    /** Upload avatar for the organization. */
    avatar?: coreRestPipeline.RequestBodyType;
    /** Used to sign webhook payloads so you can verify their integrity. */
    resthookSignatureKey?: string;
    name?: string;
    /** Configuration of the embeddable validation tool. */
    validationToolConfig?: ValidationToolConfig;
}

/** Contains response data for the updateOrganization operation. */
export declare type UpdateOrganizationResponse = Organization;

/** Optional parameters. */
export declare interface UpdateResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateResthookSubscription operation. */
export declare type UpdateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export declare interface UpdateResumeSearchConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateResumeSearchConfig operation. */
export declare type UpdateResumeSearchConfigResponse = ResumeSearchConfig;

/** Optional parameters. */
export declare interface UpdateTagOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTag operation. */
export declare type UpdateTagResponse = Tag;

/** Optional parameters. */
export declare interface UpdateValidationResultOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateValidationResult operation. */
export declare type UpdateValidationResultResponse = ValidationResult;

/** Optional parameters. */
export declare interface UpdateWorkspaceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateWorkspace operation. */
export declare type UpdateWorkspaceResponse = Workspace;

export declare interface UrlAnnotation extends Annotation {
    parsed?: UrlAnnotationParsed;
}

export declare interface UrlAnnotationParsed {
    url?: string;
    domain?: string;
}

/** Monthly credits consumption */
export declare interface UsageByCollection {
    /** Month of the usage */
    month: string;
    /** Usage count */
    count: number;
}

/** Monthly credits consumption */
export declare interface UsageByWorkspace {
    /** Month of the usage */
    month: string;
    /** Usage count */
    count: number;
}

export declare interface User {
    /** Uniquely identify a user. */
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    /** URL of the user's avatar. */
    avatar?: string;
}

export declare interface UserNullable {
    /** Uniquely identify a user. */
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    /** URL of the user's avatar. */
    avatar?: string;
}

/** Validation result arising from a ValidationRule */
export declare interface ValidationResult {
    /** Validation Result's ID */
    id: number;
    /** List of annotation ids that were validated */
    annotations: number[];
    /** Whether the validation passed or not, null if the validation was not applicable */
    passed: boolean | null;
    /** The kebab-case slug of the validation rule that was applied */
    ruleSlug: string;
    /** Message explaining why the validation failed */
    message: string;
    /** Unique identifier for the document */
    document: string;
}

export declare interface ValidationResultCreate {
    /** List of annotation ids that were validated */
    annotations: number[];
    /** Whether the validation passed or not, null if the validation was not applicable */
    passed?: boolean;
    /** The kebab-case slug of the validation rule that was applied */
    ruleSlug: string;
    /** Message explaining why the validation failed */
    message: string;
    /** Unique identifier for the document */
    document: string;
}

export declare interface ValidationResultUpdate {
    /** List of annotation ids that were validated */
    annotations?: number[];
    /** Whether the validation passed or not, null if the validation was not applicable */
    passed?: boolean;
    /** The kebab-case slug of the validation rule that was applied */
    ruleSlug?: string;
    /** Message explaining why the validation failed */
    message?: string;
    /** Unique identifier for the document */
    document?: string;
}

/** A validation rule for a collection */
export declare interface ValidationRule {
    /** The slug of the validation rule, in lowercase snake_case */
    slug: string;
    /** The data point identifier that this validation rule applies to, can be an empty list if the rule doens't use any data points as sources */
    dataPoints: string[];
}

/** Configuration of the embeddable validation tool. */
export declare interface ValidationToolConfig {
    theme?: ThemeConfig;
    /** Hide the confirm document button and other actions. */
    hideActions?: boolean;
    /** Hide the collection selector. */
    hideCollection?: boolean;
    /** Hide the edit pages button. */
    hideEditPages?: boolean;
    /** Hide the export menu. */
    hideExport?: boolean;
    /** Hide the filename input. */
    hideFilename?: boolean;
    /** Hide the toggle for showing raw annotation values. */
    hideShowRawValues?: boolean;
    /** Hide the reject document button. */
    hideReject?: boolean;
    /** Hide the reparse button. */
    hideReparse?: boolean;
    /** Hide the run OCR button. */
    hideRunOcr?: boolean;
    /** Hide the tags editor. */
    hideTags?: boolean;
    /** Hide the warnings panel. */
    hideWarnings?: boolean;
    /** Disable the page editor after a document has been split once. */
    restrictDocumentSplitting?: boolean;
    /** Disable currency formatting of decimals values. */
    disableCurrencyFormatting?: boolean;
    /** Disable editing document metadata. Makes the collection selector, filename input and tags editor read only. */
    disableEditDocumentMetadata?: boolean;
    /** Disable manual editing of annotation values via the validation popover. */
    disableManualAnnotationEditing?: boolean;
    /** Hide the document status indicator in the toolbar. */
    hideDocumentStatus?: boolean;
}

/**
 * Defines values for Version. \
 * {@link KnownVersion} can be used interchangeably with Version,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **v1** \
 * **v2** \
 * **v3**
 */
export declare type Version = string;

export declare interface Workspace {
    /** Uniquely identify a workspace. */
    identifier: string;
    organization?: Organization;
    name?: string;
    /** Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace. */
    visibility?: WorkspaceVisibility;
    collections?: WorkspaceCollectionsItem[];
    /** Document types associated with this workspace */
    documentTypes?: string[];
    /** If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed. */
    rejectInvalidDocuments?: boolean;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: string;
    members?: User[];
    /** Number of unvalidated documents in the workspace. */
    unvalidatedDocsCount?: number;
    /** Number of validated documents in the workspace. */
    confirmedDocsCount?: number;
    /** When you send email to this address, any document attached in the body will be uploaded to this workspace. */
    ingestEmail?: string;
    /** If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info". */
    whitelistIngestAddresses?: string[];
    documentSplitter?: WorkspaceDocumentSplitter;
}

export declare interface WorkspaceCollectionsItem {
    /** Uniquely identify a collection. */
    identifier: string;
    name: string;
    extractor: WorkspaceCollectionsItemExtractor;
    /** Number of unvalidated documents in the collection. */
    unvalidatedDocsCount?: number;
    /** Number of validated documents in the collection. */
    confirmedDocsCount?: number;
}

export declare interface WorkspaceCollectionsItemExtractor {
    /** Uniquely identify an extractor. */
    identifier: string;
    name: string;
    namePlural: string;
    baseExtractor?: BaseExtractor;
    category?: string;
    validatable: boolean;
    createdDt?: Date;
}

export declare interface WorkspaceCreate {
    /** Uniquely identify an organization. */
    organization: string;
    name: string;
    /** Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace. */
    visibility?: WorkspaceVisibility;
    /** If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed. */
    rejectInvalidDocuments?: boolean;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: string;
    /** Document types to associate with this workspace */
    documentTypes?: string[];
    /** If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info". */
    whitelistIngestAddresses?: string[];
    /** Uniquely identify a document splitter. */
    documentSplitter?: string;
}

export declare interface WorkspaceDocumentSplitter {
    /** Uniquely identify a document splitter. */
    identifier: string;
    name: string;
}

export declare interface WorkspaceMembership {
    /** Uniquely identify a membership. */
    identifier?: string;
    /** Uniquely identify a workspace. */
    workspace?: string;
    user?: User;
}

export declare interface WorkspaceMembershipCreate {
    /** Uniquely identify a workspace. */
    workspace?: string;
    /** Uniquely identify a user. */
    user?: number;
}

export declare interface WorkspaceUpdate {
    name?: string;
    /** Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace. */
    visibility?: WorkspaceVisibility;
    /** If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed. */
    rejectInvalidDocuments?: boolean;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: string;
    /** Document types to associate with this workspace */
    documentTypes?: string[];
    /** If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info". */
    whitelistIngestAddresses?: string[];
    /** Uniquely identify a document splitter. */
    documentSplitter?: string;
}

/**
 * Defines values for WorkspaceVisibility. \
 * {@link KnownWorkspaceVisibility} can be used interchangeably with WorkspaceVisibility,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **organization** \
 * **private**
 */
export declare type WorkspaceVisibility = string;

export declare interface YearsExperienceAnnotation extends Annotation {
    /** Years of experience range */
    parsed?: YearsExperienceAnnotationParsed;
}

/** Years of experience range */
export declare interface YearsExperienceAnnotationParsed {
    /** Minimum years of experience */
    minimum?: number;
    /** Maximum years of experience */
    maximum?: number;
}

export declare interface YearsExperienceAnnotationUpdate extends AnnotationBase {
    /** Years of experience range */
    parsed?: YearsExperienceAnnotationUpdateParsed;
}

/** Years of experience range */
export declare interface YearsExperienceAnnotationUpdateParsed {
    /** Minimum years of experience */
    minimum?: number;
    /** Maximum years of experience */
    maximum?: number;
}

export { }
