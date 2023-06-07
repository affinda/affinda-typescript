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

export declare class AffindaAPI extends AffindaAPIContext {
    /**
     * Initializes a new instance of the AffindaAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: AffindaAPIOptionalParams);
    /**
     * Returns your workspaces.
     * @param organization Filter by organization.
     * @param options The options parameters.
     */
    getAllWorkspaces(organization: string, options?: AffindaAPIGetAllWorkspacesOptionalParams): Promise<AffindaAPIGetAllWorkspacesResponse>;
    /**
     * Create a workspace
     * @param body Workspace to create
     * @param options The options parameters.
     */
    createWorkspace(body: WorkspaceCreate, options?: AffindaAPICreateWorkspaceOptionalParams): Promise<AffindaAPICreateWorkspaceResponse>;
    /**
     * Return a specific workspace.
     * @param identifier Workspace's identifier
     * @param options The options parameters.
     */
    getWorkspace(identifier: string, options?: AffindaAPIGetWorkspaceOptionalParams): Promise<AffindaAPIGetWorkspaceResponse>;
    /**
     * Update a workspace.
     * @param identifier Workspace's identifier
     * @param body Workspace data to update
     * @param options The options parameters.
     */
    updateWorkspace(identifier: string, body: WorkspaceUpdate, options?: AffindaAPIUpdateWorkspaceOptionalParams): Promise<AffindaAPIUpdateWorkspaceResponse>;
    /**
     * Deletes the specified workspace from the database.
     * @param identifier Workspace's identifier
     * @param options The options parameters.
     */
    deleteWorkspace(identifier: string, options?: AffindaAPIDeleteWorkspaceOptionalParams): Promise<void>;
    /**
     * Returns the memberships of your workspaces.
     * @param options The options parameters.
     */
    getAllWorkspaceMemberships(options?: AffindaAPIGetAllWorkspaceMembershipsOptionalParams): Promise<AffindaAPIGetAllWorkspaceMembershipsResponse>;
    /**
     * Create a workspace membership.
     * @param body
     * @param options The options parameters.
     */
    createWorkspaceMembership(body: WorkspaceMembershipCreate, options?: AffindaAPICreateWorkspaceMembershipOptionalParams): Promise<AffindaAPICreateWorkspaceMembershipResponse>;
    /**
     * Return a specific workspace membership.
     * @param identifier Workspace membership's identifier.
     * @param options The options parameters.
     */
    getWorkspaceMembership(identifier: string, options?: AffindaAPIGetWorkspaceMembershipOptionalParams): Promise<AffindaAPIGetWorkspaceMembershipResponse>;
    /**
     * Remove an user from a workspace.
     * @param identifier Workspace membership's identifier.
     * @param options The options parameters.
     */
    deleteWorkspaceMembership(identifier: string, options?: AffindaAPIDeleteWorkspaceMembershipOptionalParams): Promise<void>;
    /**
     * Returns your collections.
     * @param workspace Filter by workspace.
     * @param options The options parameters.
     */
    getAllCollections(workspace: string, options?: AffindaAPIGetAllCollectionsOptionalParams): Promise<AffindaAPIGetAllCollectionsResponse>;
    /**
     * Create a collection
     * @param body
     * @param options The options parameters.
     */
    createCollection(body: CollectionCreate, options?: AffindaAPICreateCollectionOptionalParams): Promise<AffindaAPICreateCollectionResponse>;
    /**
     * Return a specific collection.
     * @param identifier Collection's identifier
     * @param options The options parameters.
     */
    getCollection(identifier: string, options?: AffindaAPIGetCollectionOptionalParams): Promise<AffindaAPIGetCollectionResponse>;
    /**
     * Update data of a collection.
     * @param identifier Collection's identifier
     * @param body Collection data to update
     * @param options The options parameters.
     */
    updateCollection(identifier: string, body: CollectionUpdate, options?: AffindaAPIUpdateCollectionOptionalParams): Promise<AffindaAPIUpdateCollectionResponse>;
    /**
     * Deletes the specified collection from the database.
     * @param identifier Collection's identifier
     * @param options The options parameters.
     */
    deleteCollection(identifier: string, options?: AffindaAPIDeleteCollectionOptionalParams): Promise<void>;
    /**
     * Create data field for a collection along with a new data point.
     * @param identifier Collection's identifier
     * @param body The data field and data point to be created.
     * @param options The options parameters.
     */
    createDataFieldForCollection(identifier: string, body: DataFieldCreate, options?: AffindaAPICreateDataFieldForCollectionOptionalParams): Promise<AffindaAPICreateDataFieldForCollectionResponse>;
    /**
     * Returns all the document summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllDocuments(options?: AffindaAPIGetAllDocumentsOptionalParams): Promise<AffindaAPIGetAllDocumentsResponse>;
    /**
     * Uploads a document for parsing. When successful, returns an `identifier` in the response for
     * subsequent use with the [/documents/{identifier}](#get-/v3/documents/-identifier-) endpoint to check
     * processing status and retrieve results.<br/>
     * @param options The options parameters.
     */
    createDocument(options?: AffindaAPICreateDocumentOptionalParams): Promise<AffindaAPICreateDocumentResponse>;
    /**
     * Return a specific document.
     * @param identifier Document's identifier
     * @param options The options parameters.
     */
    getDocument(identifier: string, options?: AffindaAPIGetDocumentOptionalParams): Promise<AffindaAPIGetDocumentResponse>;
    /**
     * Update file name, expiry time, or move to another collection, etc.
     * @param identifier Document's identifier
     * @param body Document data to update
     * @param options The options parameters.
     */
    updateDocument(identifier: string, body: DocumentUpdate, options?: AffindaAPIUpdateDocumentOptionalParams): Promise<AffindaAPIUpdateDocumentResponse>;
    /**
     * Deletes the specified document from the database.
     * @param identifier Document's identifier
     * @param options The options parameters.
     */
    deleteDocument(identifier: string, options?: AffindaAPIDeleteDocumentOptionalParams): Promise<void>;
    /**
     * Add a tag to documents.
     * Tags are used to group documents together.
     * Tags can be used to filter documents.
     *
     * @param body Specify the tag and the documents to tag
     * @param options The options parameters.
     */
    batchAddTag(body: BatchAddTagRequest, options?: AffindaAPIBatchAddTagOptionalParams): Promise<void>;
    /**
     * Remove a tag from documents.
     * @param body Specify the tag and the documents to remove the tag from
     * @param options The options parameters.
     */
    batchRemoveTag(body: BatchRemoveTagRequest, options?: AffindaAPIBatchRemoveTagOptionalParams): Promise<void>;
    /**
     * Split / merge / rotate / delete pages of a document.
     * Documents with multiple pages can be splitted into multiple documents, or merged into one document.
     * Each page can also be rotated. Edit operations will trigger re-parsing of the documents involved.
     *
     * @param identifier Document's identifier
     * @param body Describe how the pages should be edited
     * @param options The options parameters.
     */
    editDocumentPages(identifier: string, body: DocumentEditRequest, options?: AffindaAPIEditDocumentPagesOptionalParams): Promise<AffindaAPIEditDocumentPagesResponse>;
    /**
     * Returns your custom extractors as well as Affinda's off-the-shelf extractors.
     * @param organization Filter by organization.
     * @param options The options parameters.
     */
    getAllExtractors(organization: string, options?: AffindaAPIGetAllExtractorsOptionalParams): Promise<AffindaAPIGetAllExtractorsResponse>;
    /**
     * Create a custom extractor.
     * @param options The options parameters.
     */
    createExtractor(options?: AffindaAPICreateExtractorOptionalParams): Promise<AffindaAPICreateExtractorResponse>;
    /**
     * Return a specific extractor.
     * @param identifier Extractor's identifier
     * @param options The options parameters.
     */
    getExtractor(identifier: string, options?: AffindaAPIGetExtractorOptionalParams): Promise<AffindaAPIGetExtractorResponse>;
    /**
     * Update data of an extractor.
     * @param identifier Extractor's identifier
     * @param body Extractor data to update
     * @param options The options parameters.
     */
    updateExtractor(identifier: string, body: ExtractorUpdate, options?: AffindaAPIUpdateExtractorOptionalParams): Promise<AffindaAPIUpdateExtractorResponse>;
    /**
     * Deletes the specified extractor from the database.
     * @param identifier Extractor's identifier
     * @param options The options parameters.
     */
    deleteExtractor(identifier: string, options?: AffindaAPIDeleteExtractorOptionalParams): Promise<void>;
    /**
     * Returns your custom data points as well as Affinda's off-the-shelf data points.
     * @param options The options parameters.
     */
    getAllDataPoints(options?: AffindaAPIGetAllDataPointsOptionalParams): Promise<AffindaAPIGetAllDataPointsResponse>;
    /**
     * Create a custom data point.
     * @param options The options parameters.
     */
    createDataPoint(options?: AffindaAPICreateDataPointOptionalParams): Promise<AffindaAPICreateDataPointResponse>;
    /**
     * Return a specific data point.
     * @param identifier Data point's identifier
     * @param options The options parameters.
     */
    getDataPoint(identifier: string, options?: AffindaAPIGetDataPointOptionalParams): Promise<AffindaAPIGetDataPointResponse>;
    /**
     * Update data of a data point.
     * @param identifier DataPoint's identifier
     * @param body Data point to update
     * @param options The options parameters.
     */
    updateDataPoint(identifier: string, body: DataPointUpdate, options?: AffindaAPIUpdateDataPointOptionalParams): Promise<AffindaAPIUpdateDataPointResponse>;
    /**
     * Deletes the specified data point from the database.
     * @param identifier DataPoint's identifier
     * @param options The options parameters.
     */
    deleteDataPoint(identifier: string, options?: AffindaAPIDeleteDataPointOptionalParams): Promise<void>;
    /**
     * Returns available choices for a specific enum data point.
     * @param dataPoint The data point to get choices for.
     * @param collection The collection to get choices for.
     * @param options The options parameters.
     */
    getDataPointChoices(dataPoint: string, collection: string, options?: AffindaAPIGetDataPointChoicesOptionalParams): Promise<AffindaAPIGetDataPointChoicesResponse>;
    /**
     * Create a custom data point choice.
     * @param options The options parameters.
     */
    createDataPointChoice(options?: AffindaAPICreateDataPointChoiceOptionalParams): Promise<AffindaAPICreateDataPointChoiceResponse>;
    /**
     * Return a specific data point choice.
     * @param id Data point choice's ID
     * @param options The options parameters.
     */
    getDataPointChoice(id: number, options?: AffindaAPIGetDataPointChoiceOptionalParams): Promise<AffindaAPIGetDataPointChoiceResponse>;
    /**
     * Update data of a data point choice.
     * @param id Data point choice's ID
     * @param body Data point choice to update
     * @param options The options parameters.
     */
    updateDataPointChoice(id: number, body: DataPointChoiceUpdate, options?: AffindaAPIUpdateDataPointChoiceOptionalParams): Promise<AffindaAPIUpdateDataPointChoiceResponse>;
    /**
     * Deletes the specified data point choice from the database.
     * @param id Data point choice's ID
     * @param options The options parameters.
     */
    deleteDataPointChoice(id: number, options?: AffindaAPIDeleteDataPointChoiceOptionalParams): Promise<void>;
    /**
     * Returns your annotations.
     * @param document Filter by document.
     * @param options The options parameters.
     */
    getAllAnnotations(document: string, options?: AffindaAPIGetAllAnnotationsOptionalParams): Promise<AffindaAPIGetAllAnnotationsResponse>;
    /**
     * Create a annotation
     * @param body
     * @param options The options parameters.
     */
    createAnnotation(body: AnnotationCreate, options?: AffindaAPICreateAnnotationOptionalParams): Promise<AffindaAPICreateAnnotationResponse>;
    /**
     * Return a specific annotation.
     * @param id Annotation's ID
     * @param options The options parameters.
     */
    getAnnotation(id: number, options?: AffindaAPIGetAnnotationOptionalParams): Promise<AffindaAPIGetAnnotationResponse>;
    /**
     * Update data of an annotation.
     * @param id Annotation's ID
     * @param body Annotation data to update
     * @param options The options parameters.
     */
    updateAnnotation(id: number, body: AnnotationUpdate, options?: AffindaAPIUpdateAnnotationOptionalParams): Promise<AffindaAPIUpdateAnnotationResponse>;
    /**
     * Deletes the specified annotation from the database.
     * @param id Annotation's ID
     * @param options The options parameters.
     */
    deleteAnnotation(id: number, options?: AffindaAPIDeleteAnnotationOptionalParams): Promise<void>;
    /**
     * Batch create annotations
     * @param body Array of AnnotationCreate
     * @param options The options parameters.
     */
    batchCreateAnnotations(body: AnnotationCreate[], options?: AffindaAPIBatchCreateAnnotationsOptionalParams): Promise<AffindaAPIBatchCreateAnnotationsResponse>;
    /**
     * Batch update annotations
     * @param body Array of AnnotationBatchUpdate
     * @param options The options parameters.
     */
    batchUpdateAnnotations(body: AnnotationBatchUpdate[], options?: AffindaAPIBatchUpdateAnnotationsOptionalParams): Promise<AffindaAPIBatchUpdateAnnotationsResponse>;
    /**
     * Batch delete annotations
     * @param body Array of annotation IDs to be deleted
     * @param options The options parameters.
     */
    batchDeleteAnnotations(body: number[], options?: AffindaAPIBatchDeleteAnnotationsOptionalParams): Promise<void>;
    /**
     * Returns your tags.
     * @param options The options parameters.
     */
    getAllTags(options?: AffindaAPIGetAllTagsOptionalParams): Promise<AffindaAPIGetAllTagsResponse>;
    /**
     * Create a tag
     * @param body
     * @param options The options parameters.
     */
    createTag(body: TagCreate, options?: AffindaAPICreateTagOptionalParams): Promise<AffindaAPICreateTagResponse>;
    /**
     * Return a specific tag.
     * @param id Tag's ID
     * @param options The options parameters.
     */
    getTag(id: number, options?: AffindaAPIGetTagOptionalParams): Promise<AffindaAPIGetTagResponse>;
    /**
     * Update data of an tag.
     * @param id Tag's ID
     * @param body Tag data to update
     * @param options The options parameters.
     */
    updateTag(id: number, body: TagUpdate, options?: AffindaAPIUpdateTagOptionalParams): Promise<AffindaAPIUpdateTagResponse>;
    /**
     * Deletes the specified tag from the database.
     * @param id Tag's ID
     * @param options The options parameters.
     */
    deleteTag(id: number, options?: AffindaAPIDeleteTagOptionalParams): Promise<void>;
    /**
     * Returns all the organizations
     * @param options The options parameters.
     */
    getAllOrganizations(options?: AffindaAPIGetAllOrganizationsOptionalParams): Promise<AffindaAPIGetAllOrganizationsResponse>;
    /**
     * Create a new organization.
     * @param name
     * @param options The options parameters.
     */
    createOrganization(name: string, options?: AffindaAPICreateOrganizationOptionalParams): Promise<AffindaAPICreateOrganizationResponse>;
    /**
     * Get detail of an organization.
     * @param identifier Organization identifier.
     * @param options The options parameters.
     */
    getOrganization(identifier: string, options?: AffindaAPIGetOrganizationOptionalParams): Promise<AffindaAPIGetOrganizationResponse>;
    /**
     * Update the detail of an organization.
     * @param identifier Organization identifier.
     * @param options The options parameters.
     */
    updateOrganization(identifier: string, options?: AffindaAPIUpdateOrganizationOptionalParams): Promise<AffindaAPIUpdateOrganizationResponse>;
    /**
     * Delete the specified organization from the database.
     * @param identifier Organization identifier.
     * @param options The options parameters.
     */
    deleteOrganization(identifier: string, options?: AffindaAPIDeleteOrganizationOptionalParams): Promise<void>;
    /**
     * Returns all the organization memberships
     * @param options The options parameters.
     */
    getAllOrganizationMemberships(options?: AffindaAPIGetAllOrganizationMembershipsOptionalParams): Promise<AffindaAPIGetAllOrganizationMembershipsResponse>;
    /**
     * Get detail of an organization membership.
     * @param identifier Membership identifier.
     * @param options The options parameters.
     */
    getOrganizationMembership(identifier: string, options?: AffindaAPIGetOrganizationMembershipOptionalParams): Promise<AffindaAPIGetOrganizationMembershipResponse>;
    /**
     * The admin users can use this endpoint to update the role of the members within their organization.
     * @param identifier Membership identifier.
     * @param body
     * @param options The options parameters.
     */
    updateOrganizationMembership(identifier: string, body: OrganizationMembershipUpdate, options?: AffindaAPIUpdateOrganizationMembershipOptionalParams): Promise<AffindaAPIUpdateOrganizationMembershipResponse>;
    /**
     * The admin users can use this endpoint to remove member from their organization. Other users can also
     * use this to leave their organization.
     * @param identifier Membership identifier.
     * @param options The options parameters.
     */
    deleteOrganizationMembership(identifier: string, options?: AffindaAPIDeleteOrganizationMembershipOptionalParams): Promise<void>;
    /**
     * Get list of all invitations you created or sent to you.
     * @param options The options parameters.
     */
    getAllInvitations(options?: AffindaAPIGetAllInvitationsOptionalParams): Promise<AffindaAPIGetAllInvitationsResponse>;
    /**
     * Create a new invitation.
     * @param body Invitation to create.
     * @param options The options parameters.
     */
    createInvitation(body: InvitationCreate, options?: AffindaAPICreateInvitationOptionalParams): Promise<AffindaAPICreateInvitationResponse>;
    /**
     * Get detail of an invitation.
     * @param identifier Invitation identifier.
     * @param options The options parameters.
     */
    getInvitation(identifier: string, options?: AffindaAPIGetInvitationOptionalParams): Promise<AffindaAPIGetInvitationResponse>;
    /**
     * Update the detail of an invitation.
     * @param identifier Invitation identifier.
     * @param body
     * @param options The options parameters.
     */
    updateInvitation(identifier: string, body: InvitationUpdate, options?: AffindaAPIUpdateInvitationOptionalParams): Promise<AffindaAPIUpdateInvitationResponse>;
    /**
     * Delete the specified invitation from the database.
     * @param identifier Invitation identifier.
     * @param options The options parameters.
     */
    deleteInvitation(identifier: string, options?: AffindaAPIDeleteInvitationOptionalParams): Promise<void>;
    /**
     * Get detail of an invitation using a secret token. This allows users who have not registered/logged
     * in to view the invitation.
     * @param token Invitation token.
     * @param options The options parameters.
     */
    getInvitationByToken(token: string, options?: AffindaAPIGetInvitationByTokenOptionalParams): Promise<AffindaAPIGetInvitationByTokenResponse>;
    /**
     * Choose to accept or decline an invitation.
     * @param token Invitation token.
     * @param body
     * @param options The options parameters.
     */
    respondToInvitation(token: string, body: InvitationResponse, options?: AffindaAPIRespondToInvitationOptionalParams): Promise<AffindaAPIRespondToInvitationResponse>;
    /**
     * Returns your resthook subscriptions.
     * @param options The options parameters.
     */
    getAllResthookSubscriptions(options?: AffindaAPIGetAllResthookSubscriptionsOptionalParams): Promise<AffindaAPIGetAllResthookSubscriptionsResponse>;
    /**
     * After a subscription is sucessfully created, we'll send a POST request to your target URL with a
     * `X-Hook-Secret` header. <br />
     * You need to response to this request with a 200 status code to confirm your subscribe intention. <br
     * />
     * Then, you need to use the `X-Hook-Secret` to activate the subscription using the
     * [/resthook_subscriptions/activate](#post-/v3/resthook_subscriptions/activate) endpoint. <br />
     * For more information, see our help article here - [How do I create a
     * webhook?](https://help.affinda.com/hc/en-au/articles/11474095148569-How-do-I-create-a-webhook)
     * @param body
     * @param options The options parameters.
     */
    createResthookSubscription(body: ResthookSubscriptionCreate, options?: AffindaAPICreateResthookSubscriptionOptionalParams): Promise<AffindaAPICreateResthookSubscriptionResponse>;
    /**
     * Return a specific resthook subscription.
     * @param id Resthook subscription's ID
     * @param options The options parameters.
     */
    getResthookSubscription(id: number, options?: AffindaAPIGetResthookSubscriptionOptionalParams): Promise<AffindaAPIGetResthookSubscriptionResponse>;
    /**
     * Update data of a resthook subscription.
     * @param id ResthookSubscription's ID
     * @param body ResthookSubscription data to update
     * @param options The options parameters.
     */
    updateResthookSubscription(id: number, body: ResthookSubscriptionUpdate, options?: AffindaAPIUpdateResthookSubscriptionOptionalParams): Promise<AffindaAPIUpdateResthookSubscriptionResponse>;
    /**
     * Deletes the specified resthook subscription from the database.
     * @param id ResthookSubscription's ID
     * @param options The options parameters.
     */
    deleteResthookSubscription(id: number, options?: AffindaAPIDeleteResthookSubscriptionOptionalParams): Promise<void>;
    /**
     * After creating a subscription, we'll send a POST request to your target URL with a `X-Hook-Secret`
     * header. <br />
     * You should response to this with a 200 status code, and use the value of the `X-Hook-Secret` header
     * that you received to activate the subscription using this endpoint.
     * @param xHookSecret The secret received when creating a subscription.
     * @param options The options parameters.
     */
    activateResthookSubscription(xHookSecret: string, options?: AffindaAPIActivateResthookSubscriptionOptionalParams): Promise<AffindaAPIActivateResthookSubscriptionResponse>;
    /**
     * Returns the list of searchable occupation groups.
     * @param options The options parameters.
     */
    listOccupationGroups(options?: AffindaAPIListOccupationGroupsOptionalParams): Promise<AffindaAPIListOccupationGroupsResponse>;
    /**
     * Searches through parsed job descriptions. You can search with custom criterias or a resume.
     * @param body Search parameters
     * @param options The options parameters.
     */
    createJobDescriptionSearch(body: JobDescriptionSearchParameters | null, options?: AffindaAPICreateJobDescriptionSearchOptionalParams): Promise<AffindaAPICreateJobDescriptionSearchResponse>;
    /**
     * This contains more detailed information about the matching score of the search criteria, or which
     * search criteria is missing in this job description.
     * The `identifier` is the unique ID returned via the
     * [/job_description_search](#post-/job_description_search) endpoint.
     * @param identifier Job Description identifier
     * @param body Search parameters
     * @param options The options parameters.
     */
    getJobDescriptionSearchDetail(identifier: string, body: JobDescriptionSearchParameters | null, options?: AffindaAPIGetJobDescriptionSearchDetailOptionalParams): Promise<AffindaAPIGetJobDescriptionSearchDetailResponse>;
    /**
     * Return configurations such as which fields can be displayed in the logged in user's embeddable job
     * description search tool, what are their weights, what is the maximum number of results that can be
     * returned, etc.
     * @param options The options parameters.
     */
    getJobDescriptionSearchConfig(options?: AffindaAPIGetJobDescriptionSearchConfigOptionalParams): Promise<AffindaAPIGetJobDescriptionSearchConfigResponse>;
    /**
     * Update configurations such as which fields can be displayed in the logged in user's embeddable job
     * description search tool, what are their weights, what is the maximum number of results that can be
     * returned, etc.
     * @param body
     * @param options The options parameters.
     */
    updateJobDescriptionSearchConfig(body: JobDescriptionSearchConfig, options?: AffindaAPIUpdateJobDescriptionSearchConfigOptionalParams): Promise<AffindaAPIUpdateJobDescriptionSearchConfigResponse>;
    /**
     * Create and return a signed URL of the job description search tool which then can be embedded on a
     * web page. An optional parameter `config_override` can be passed to override the user-level
     * configurations of the embeddable search tool.
     * @param options The options parameters.
     */
    createJobDescriptionSearchEmbedUrl(options?: AffindaAPICreateJobDescriptionSearchEmbedUrlOptionalParams): Promise<AffindaAPICreateJobDescriptionSearchEmbedUrlResponse>;
    /**
     * Returns all the indexes
     * @param options The options parameters.
     */
    getAllIndexes(options?: AffindaAPIGetAllIndexesOptionalParams): Promise<AffindaAPIGetAllIndexesResponse>;
    /**
     * Create an index for the search tool
     * @param options The options parameters.
     */
    createIndex(options?: AffindaAPICreateIndexOptionalParams): Promise<AffindaAPICreateIndexResponse>;
    /**
     * Deletes the specified index from the database
     * @param name Index name
     * @param options The options parameters.
     */
    deleteIndex(name: string, options?: AffindaAPIDeleteIndexOptionalParams): Promise<void>;
    /**
     * Returns all the indexed documents for that index
     * @param name Index name
     * @param options The options parameters.
     */
    getAllIndexDocuments(name: string, options?: AffindaAPIGetAllIndexDocumentsOptionalParams): Promise<AffindaAPIGetAllIndexDocumentsResponse>;
    /**
     * Create an indexed document for the search tool
     * @param name Index name
     * @param body Document to index
     * @param options The options parameters.
     */
    createIndexDocument(name: string, body: PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema, options?: AffindaAPICreateIndexDocumentOptionalParams): Promise<AffindaAPICreateIndexDocumentResponse>;
    /**
     * Delete the specified indexed document from the database
     * @param name Index name
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteIndexDocument(name: string, identifier: string, options?: AffindaAPIDeleteIndexDocumentOptionalParams): Promise<void>;
    /**
     * Searches through parsed resumes. Users have 3 options to create a search:<br /><br /> 1.	Match to a
     * job description - a parsed job description is used to find candidates that suit it<br /> 2.	Match to
     * a resume - a parsed resume is used to find other candidates that have similar attributes<br /> 3.
     * Search using custom criteria<br /><br /> Users should only populate 1 of jobDescription, resume or
     * the custom criteria.
     * @param body Search parameters
     * @param options The options parameters.
     */
    createResumeSearch(body: ResumeSearchParameters, options?: AffindaAPICreateResumeSearchOptionalParams): Promise<AffindaAPICreateResumeSearchResponse>;
    /**
     * This contains more detailed information about the matching score of the search criteria, or which
     * search criteria is missing in this resume.
     * The `identifier` is the unique ID returned via the [/resume_search](#post-/resume_search) endpoint.
     * @param identifier Resume identifier
     * @param body Search parameters
     * @param options The options parameters.
     */
    getResumeSearchDetail(identifier: string, body: ResumeSearchParameters, options?: AffindaAPIGetResumeSearchDetailOptionalParams): Promise<AffindaAPIGetResumeSearchDetailResponse>;
    /**
     * Get the matching score between a resume and a job description. The score ranges between 0 and 1,
     * with 0 being not a match at all, and 1 being perfect match.<br/> Note, this score will not directly
     * match the score returned from POST
     * [/resume_search/details/{identifier}](#post-/resume_search/details/-identifier-).
     * @param resume Identify the resume to match.
     * @param jobDescription Identify the job description to match.
     * @param options The options parameters.
     */
    getResumeSearchMatch(resume: string, jobDescription: string, options?: AffindaAPIGetResumeSearchMatchOptionalParams): Promise<AffindaAPIGetResumeSearchMatchResponse>;
    /**
     * Return configurations such as which fields can be displayed in the logged in user's embeddable
     * resume search tool, what are their weights, what is the maximum number of results that can be
     * returned, etc.
     * @param options The options parameters.
     */
    getResumeSearchConfig(options?: AffindaAPIGetResumeSearchConfigOptionalParams): Promise<AffindaAPIGetResumeSearchConfigResponse>;
    /**
     * Update configurations such as which fields can be displayed in the logged in user's embeddable
     * resume search tool, what are their weights, what is the maximum number of results that can be
     * returned, etc.
     * @param body
     * @param options The options parameters.
     */
    updateResumeSearchConfig(body: ResumeSearchConfig, options?: AffindaAPIUpdateResumeSearchConfigOptionalParams): Promise<AffindaAPIUpdateResumeSearchConfigResponse>;
    /**
     * Create and return a signed URL of the resume search tool which then can be embedded on a web page.
     * An optional parameter `config_override` can be passed to override the user-level configurations of
     * the embeddable resume search tool.
     * @param options The options parameters.
     */
    createResumeSearchEmbedUrl(options?: AffindaAPICreateResumeSearchEmbedUrlOptionalParams): Promise<AffindaAPICreateResumeSearchEmbedUrlResponse>;
    /**
     * Provided one or more job titles, get related suggestions for your search.
     * @param jobTitles Job title to query suggestions for
     * @param options The options parameters.
     */
    getResumeSearchSuggestionJobTitle(jobTitles: string[], options?: AffindaAPIGetResumeSearchSuggestionJobTitleOptionalParams): Promise<AffindaAPIGetResumeSearchSuggestionJobTitleResponse>;
    /**
     * Provided one or more skills, get related suggestions for your search.
     * @param skills Skill to query suggestions for
     * @param options The options parameters.
     */
    getResumeSearchSuggestionSkill(skills: string[], options?: AffindaAPIGetResumeSearchSuggestionSkillOptionalParams): Promise<AffindaAPIGetResumeSearchSuggestionSkillResponse>;
    /**
     * Returns your API users.
     * @param options The options parameters.
     */
    getAllApiUsers(options?: AffindaAPIGetAllApiUsersOptionalParams): Promise<AffindaAPIGetAllApiUsersResponse>;
    /**
     * Create an API user
     * @param body
     * @param options The options parameters.
     */
    createApiUser(body: ApiUserCreate, options?: AffindaAPICreateApiUserOptionalParams): Promise<AffindaAPICreateApiUserResponse>;
    /**
     * Return a specific API user.
     * @param id API user's ID
     * @param options The options parameters.
     */
    getApiUser(id: number, options?: AffindaAPIGetApiUserOptionalParams): Promise<AffindaAPIGetApiUserResponse>;
    /**
     * Update data of an API user.
     * @param id API user's ID
     * @param body API user to update
     * @param options The options parameters.
     */
    updateApiUser(id: number, body: ApiUserUpdate, options?: AffindaAPIUpdateApiUserOptionalParams): Promise<AffindaAPIUpdateApiUserResponse>;
    /**
     * Deletes the specified API user from the database.
     * @param id API user's ID
     * @param options The options parameters.
     */
    deleteApiUser(id: number, options?: AffindaAPIDeleteApiUserOptionalParams): Promise<void>;
    /**
     * Regenerate API key for an API user.
     * @param id API user's ID
     * @param options The options parameters.
     */
    regenerateApiKeyForApiUser(id: number, options?: AffindaAPIRegenerateApiKeyForApiUserOptionalParams): Promise<AffindaAPIRegenerateApiKeyForApiUserResponse>;
}

/** Optional parameters. */
export declare interface AffindaAPIActivateResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the activateResthookSubscription operation. */
export declare type AffindaAPIActivateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export declare interface AffindaAPIBatchAddTagOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIBatchCreateAnnotationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the batchCreateAnnotations operation. */
export declare type AffindaAPIBatchCreateAnnotationsResponse = (Annotation | null)[];

/** Optional parameters. */
export declare interface AffindaAPIBatchDeleteAnnotationsOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIBatchRemoveTagOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIBatchUpdateAnnotationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the batchUpdateAnnotations operation. */
export declare type AffindaAPIBatchUpdateAnnotationsResponse = (Annotation | null)[];

export declare class AffindaAPIContext extends coreClient.ServiceClient {
    region: Region;
    /**
     * Initializes a new instance of the AffindaAPIContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: AffindaAPIOptionalParams);
}

/** Optional parameters. */
export declare interface AffindaAPICreateAnnotationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createAnnotation operation. */
export declare type AffindaAPICreateAnnotationResponse = Annotation;

/** Optional parameters. */
export declare interface AffindaAPICreateApiUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createApiUser operation. */
export declare type AffindaAPICreateApiUserResponse = ApiUserWithKey;

/** Optional parameters. */
export declare interface AffindaAPICreateCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createCollection operation. */
export declare type AffindaAPICreateCollectionResponse = Collection;

/** Optional parameters. */
export declare interface AffindaAPICreateDataFieldForCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createDataFieldForCollection operation. */
export declare type AffindaAPICreateDataFieldForCollectionResponse = DataField;

/** Optional parameters. */
export declare interface AffindaAPICreateDataPointChoiceOptionalParams extends coreClient.OperationOptions {
    body?: DataPointChoiceCreate;
}

/** Contains response data for the createDataPointChoice operation. */
export declare type AffindaAPICreateDataPointChoiceResponse = DataPointChoice;

/** Optional parameters. */
export declare interface AffindaAPICreateDataPointOptionalParams extends coreClient.OperationOptions {
    body?: DataPointCreate;
}

/** Contains response data for the createDataPoint operation. */
export declare type AffindaAPICreateDataPointResponse = DataPoint;

/** Optional parameters. */
export declare interface AffindaAPICreateDocumentOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to download the document. */
    url?: string;
    /** Uniquely identify a collection. */
    collection?: string;
    /** Uniquely identify a workspace. */
    workspace?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Specify a custom identifier for the document. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: boolean;
    /** A JSON representation of the RegionBias object. */
    regionBias?: string;
}

/** Contains response data for the createDocument operation. */
export declare type AffindaAPICreateDocumentResponse = DocumentUnion;

/** Optional parameters. */
export declare interface AffindaAPICreateExtractorOptionalParams extends coreClient.OperationOptions {
    body?: ExtractorCreate;
}

/** Contains response data for the createExtractor operation. */
export declare type AffindaAPICreateExtractorResponse = Extractor;

/** Optional parameters. */
export declare interface AffindaAPICreateIndexDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createIndexDocument operation. */
export declare type AffindaAPICreateIndexDocumentResponse = PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPICreateIndexOptionalParams extends coreClient.OperationOptions {
    name?: string;
    documentType?: PostContentSchemaDocumentType;
}

/** Contains response data for the createIndex operation. */
export declare type AffindaAPICreateIndexResponse = Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPICreateInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createInvitation operation. */
export declare type AffindaAPICreateInvitationResponse = Invitation;

/** Optional parameters. */
export declare interface AffindaAPICreateJobDescriptionSearchEmbedUrlOptionalParams extends coreClient.OperationOptions {
    body?: PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the createJobDescriptionSearchEmbedUrl operation. */
export declare type AffindaAPICreateJobDescriptionSearchEmbedUrlResponse = JobDescriptionSearchEmbed;

/** Optional parameters. */
export declare interface AffindaAPICreateJobDescriptionSearchOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the createJobDescriptionSearch operation. */
export declare type AffindaAPICreateJobDescriptionSearchResponse = JobDescriptionSearch;

/** Optional parameters. */
export declare interface AffindaAPICreateOrganizationOptionalParams extends coreClient.OperationOptions {
    /** Upload avatar for the organization. */
    avatar?: coreRestPipeline.RequestBodyType;
    /** Used to sign webhook payloads so you can verify their integrity. */
    resthookSignatureKey?: string;
}

/** Contains response data for the createOrganization operation. */
export declare type AffindaAPICreateOrganizationResponse = Organization;

/** Optional parameters. */
export declare interface AffindaAPICreateResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createResthookSubscription operation. */
export declare type AffindaAPICreateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export declare interface AffindaAPICreateResumeSearchEmbedUrlOptionalParams extends coreClient.OperationOptions {
    body?: Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the createResumeSearchEmbedUrl operation. */
export declare type AffindaAPICreateResumeSearchEmbedUrlResponse = ResumeSearchEmbed;

/** Optional parameters. */
export declare interface AffindaAPICreateResumeSearchOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the createResumeSearch operation. */
export declare type AffindaAPICreateResumeSearchResponse = ResumeSearch;

/** Optional parameters. */
export declare interface AffindaAPICreateTagOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createTag operation. */
export declare type AffindaAPICreateTagResponse = Tag;

/** Optional parameters. */
export declare interface AffindaAPICreateWorkspaceMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createWorkspaceMembership operation. */
export declare type AffindaAPICreateWorkspaceMembershipResponse = WorkspaceMembership;

/** Optional parameters. */
export declare interface AffindaAPICreateWorkspaceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createWorkspace operation. */
export declare type AffindaAPICreateWorkspaceResponse = Workspace;

/** Optional parameters. */
export declare interface AffindaAPIDeleteAnnotationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteApiUserOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteDataPointChoiceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteDataPointOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteExtractorOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteIndexDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteIndexOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteOrganizationMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteOrganizationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteTagOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteWorkspaceMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteWorkspaceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIEditDocumentPagesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the editDocumentPages operation. */
export declare type AffindaAPIEditDocumentPagesResponse = Meta[];

/** Optional parameters. */
export declare interface AffindaAPIGetAllAnnotationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllAnnotations operation. */
export declare type AffindaAPIGetAllAnnotationsResponse = Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllApiUsersOptionalParams extends coreClient.OperationOptions {
    /** Filter by organization. */
    organization?: string;
}

/** Contains response data for the getAllApiUsers operation. */
export declare type AffindaAPIGetAllApiUsersResponse = Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllCollectionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllCollections operation. */
export declare type AffindaAPIGetAllCollectionsResponse = Collection[];

/** Optional parameters. */
export declare interface AffindaAPIGetAllDataPointsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter by organization. */
    organization?: string;
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
export declare type AffindaAPIGetAllDataPointsResponse = DataPoint[];

/** Optional parameters. */
export declare interface AffindaAPIGetAllDocumentsOptionalParams extends coreClient.OperationOptions {
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
    /** Sort the result set. A "-" at the beginning denotes DESC sort, e.g. -created_dt. Sort by multiple fields is supported. */
    ordering?: Get8ItemsItem[];
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
}

/** Contains response data for the getAllDocuments operation. */
export declare type AffindaAPIGetAllDocumentsResponse = PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllExtractorsOptionalParams extends coreClient.OperationOptions {
    /** Filter by name. */
    name?: string;
    /** Filter by validatable. */
    validatable?: boolean;
    /** Whether to include Affinda's off-the-shelf extractors. */
    includePublicExtractors?: boolean;
}

/** Contains response data for the getAllExtractors operation. */
export declare type AffindaAPIGetAllExtractorsResponse = Extractor[];

/** Optional parameters. */
export declare interface AffindaAPIGetAllIndexDocumentsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllIndexDocuments operation. */
export declare type AffindaAPIGetAllIndexDocumentsResponse = PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllIndexesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter indices by a document type */
    documentType?: Enum18;
}

/** Contains response data for the getAllIndexes operation. */
export declare type AffindaAPIGetAllIndexesResponse = PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllInvitationsOptionalParams extends coreClient.OperationOptions {
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
export declare type AffindaAPIGetAllInvitationsResponse = Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllOrganizationMembershipsOptionalParams extends coreClient.OperationOptions {
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
export declare type AffindaAPIGetAllOrganizationMembershipsResponse = PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllOrganizationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllOrganizations operation. */
export declare type AffindaAPIGetAllOrganizationsResponse = Organization[];

/** Optional parameters. */
export declare interface AffindaAPIGetAllResthookSubscriptionsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllResthookSubscriptions operation. */
export declare type AffindaAPIGetAllResthookSubscriptionsResponse = PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllTagsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter by workspace. */
    workspace?: string;
}

/** Contains response data for the getAllTags operation. */
export declare type AffindaAPIGetAllTagsResponse = Tag[];

/** Optional parameters. */
export declare interface AffindaAPIGetAllWorkspaceMembershipsOptionalParams extends coreClient.OperationOptions {
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
export declare type AffindaAPIGetAllWorkspaceMembershipsResponse = PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllWorkspacesOptionalParams extends coreClient.OperationOptions {
    /** Filter by name. */
    name?: string;
}

/** Contains response data for the getAllWorkspaces operation. */
export declare type AffindaAPIGetAllWorkspacesResponse = Workspace[];

/** Optional parameters. */
export declare interface AffindaAPIGetAnnotationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAnnotation operation. */
export declare type AffindaAPIGetAnnotationResponse = Annotation;

/** Optional parameters. */
export declare interface AffindaAPIGetApiUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getApiUser operation. */
export declare type AffindaAPIGetApiUserResponse = ApiUserWithoutKey;

/** Optional parameters. */
export declare interface AffindaAPIGetCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getCollection operation. */
export declare type AffindaAPIGetCollectionResponse = Collection;

/** Optional parameters. */
export declare interface AffindaAPIGetDataPointChoiceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDataPointChoice operation. */
export declare type AffindaAPIGetDataPointChoiceResponse = DataPointChoice;

/** Optional parameters. */
export declare interface AffindaAPIGetDataPointChoicesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter choices by searching for a substring. */
    search?: string;
}

/** Contains response data for the getDataPointChoices operation. */
export declare type AffindaAPIGetDataPointChoicesResponse = PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetDataPointOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDataPoint operation. */
export declare type AffindaAPIGetDataPointResponse = DataPoint;

/** Optional parameters. */
export declare interface AffindaAPIGetDocumentOptionalParams extends coreClient.OperationOptions {
    /** Specify which format you want the response to be. Default is "json" */
    format?: DocumentFormat;
}

/** Contains response data for the getDocument operation. */
export declare type AffindaAPIGetDocumentResponse = DocumentUnion;

/** Optional parameters. */
export declare interface AffindaAPIGetExtractorOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getExtractor operation. */
export declare type AffindaAPIGetExtractorResponse = Extractor;

/** Optional parameters. */
export declare interface AffindaAPIGetInvitationByTokenOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInvitationByToken operation. */
export declare type AffindaAPIGetInvitationByTokenResponse = Invitation;

/** Optional parameters. */
export declare interface AffindaAPIGetInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInvitation operation. */
export declare type AffindaAPIGetInvitationResponse = Invitation;

/** Optional parameters. */
export declare interface AffindaAPIGetJobDescriptionSearchConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getJobDescriptionSearchConfig operation. */
export declare type AffindaAPIGetJobDescriptionSearchConfigResponse = JobDescriptionSearchConfig;

/** Optional parameters. */
export declare interface AffindaAPIGetJobDescriptionSearchDetailOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getJobDescriptionSearchDetail operation. */
export declare type AffindaAPIGetJobDescriptionSearchDetailResponse = JobDescriptionSearchDetail;

/** Optional parameters. */
export declare interface AffindaAPIGetOrganizationMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getOrganizationMembership operation. */
export declare type AffindaAPIGetOrganizationMembershipResponse = OrganizationMembership;

/** Optional parameters. */
export declare interface AffindaAPIGetOrganizationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getOrganization operation. */
export declare type AffindaAPIGetOrganizationResponse = Organization;

/** Optional parameters. */
export declare interface AffindaAPIGetResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResthookSubscription operation. */
export declare type AffindaAPIGetResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export declare interface AffindaAPIGetResumeSearchConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResumeSearchConfig operation. */
export declare type AffindaAPIGetResumeSearchConfigResponse = ResumeSearchConfig;

/** Optional parameters. */
export declare interface AffindaAPIGetResumeSearchDetailOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResumeSearchDetail operation. */
export declare type AffindaAPIGetResumeSearchDetailResponse = ResumeSearchDetail;

/** Optional parameters. */
export declare interface AffindaAPIGetResumeSearchMatchOptionalParams extends coreClient.OperationOptions {
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
export declare type AffindaAPIGetResumeSearchMatchResponse = ResumeSearchMatch;

/** Optional parameters. */
export declare interface AffindaAPIGetResumeSearchSuggestionJobTitleOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResumeSearchSuggestionJobTitle operation. */
export declare type AffindaAPIGetResumeSearchSuggestionJobTitleResponse = {
    /** The parsed response body. */
    body: string[];
};

/** Optional parameters. */
export declare interface AffindaAPIGetResumeSearchSuggestionSkillOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResumeSearchSuggestionSkill operation. */
export declare type AffindaAPIGetResumeSearchSuggestionSkillResponse = {
    /** The parsed response body. */
    body: string[];
};

/** Optional parameters. */
export declare interface AffindaAPIGetTagOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTag operation. */
export declare type AffindaAPIGetTagResponse = Tag;

/** Optional parameters. */
export declare interface AffindaAPIGetWorkspaceMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getWorkspaceMembership operation. */
export declare type AffindaAPIGetWorkspaceMembershipResponse = WorkspaceMembership;

/** Optional parameters. */
export declare interface AffindaAPIGetWorkspaceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getWorkspace operation. */
export declare type AffindaAPIGetWorkspaceResponse = Workspace;

/** Optional parameters. */
export declare interface AffindaAPIListOccupationGroupsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOccupationGroups operation. */
export declare type AffindaAPIListOccupationGroupsResponse = OccupationGroup[];

/** Optional parameters. */
export declare interface AffindaAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** region - server parameter */
    region?: Region;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Optional parameters. */
export declare interface AffindaAPIRegenerateApiKeyForApiUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the regenerateApiKeyForApiUser operation. */
export declare type AffindaAPIRegenerateApiKeyForApiUserResponse = ApiUserWithKey;

/** Optional parameters. */
export declare interface AffindaAPIRespondToInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the respondToInvitation operation. */
export declare type AffindaAPIRespondToInvitationResponse = Invitation;

/** Optional parameters. */
export declare interface AffindaAPIUpdateAnnotationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateAnnotation operation. */
export declare type AffindaAPIUpdateAnnotationResponse = Annotation;

/** Optional parameters. */
export declare interface AffindaAPIUpdateApiUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateApiUser operation. */
export declare type AffindaAPIUpdateApiUserResponse = ApiUserWithoutKey;

/** Optional parameters. */
export declare interface AffindaAPIUpdateCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateCollection operation. */
export declare type AffindaAPIUpdateCollectionResponse = Collection;

/** Optional parameters. */
export declare interface AffindaAPIUpdateDataPointChoiceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDataPointChoice operation. */
export declare type AffindaAPIUpdateDataPointChoiceResponse = DataPointChoice;

/** Optional parameters. */
export declare interface AffindaAPIUpdateDataPointOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDataPoint operation. */
export declare type AffindaAPIUpdateDataPointResponse = DataPoint;

/** Optional parameters. */
export declare interface AffindaAPIUpdateDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDocument operation. */
export declare type AffindaAPIUpdateDocumentResponse = DocumentUnion;

/** Optional parameters. */
export declare interface AffindaAPIUpdateExtractorOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateExtractor operation. */
export declare type AffindaAPIUpdateExtractorResponse = Extractor;

/** Optional parameters. */
export declare interface AffindaAPIUpdateInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateInvitation operation. */
export declare type AffindaAPIUpdateInvitationResponse = Invitation;

/** Optional parameters. */
export declare interface AffindaAPIUpdateJobDescriptionSearchConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateJobDescriptionSearchConfig operation. */
export declare type AffindaAPIUpdateJobDescriptionSearchConfigResponse = JobDescriptionSearchConfig;

/** Optional parameters. */
export declare interface AffindaAPIUpdateOrganizationMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateOrganizationMembership operation. */
export declare type AffindaAPIUpdateOrganizationMembershipResponse = OrganizationMembership;

/** Optional parameters. */
export declare interface AffindaAPIUpdateOrganizationOptionalParams extends coreClient.OperationOptions {
    /** Upload avatar for the organization. */
    avatar?: coreRestPipeline.RequestBodyType;
    /** Used to sign webhook payloads so you can verify their integrity. */
    resthookSignatureKey?: string;
    name?: string;
    /** Configuration of the embeddable validation tool. */
    validationToolConfig?: ValidationToolConfig;
}

/** Contains response data for the updateOrganization operation. */
export declare type AffindaAPIUpdateOrganizationResponse = Organization;

/** Optional parameters. */
export declare interface AffindaAPIUpdateResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateResthookSubscription operation. */
export declare type AffindaAPIUpdateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export declare interface AffindaAPIUpdateResumeSearchConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateResumeSearchConfig operation. */
export declare type AffindaAPIUpdateResumeSearchConfigResponse = ResumeSearchConfig;

/** Optional parameters. */
export declare interface AffindaAPIUpdateTagOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTag operation. */
export declare type AffindaAPIUpdateTagResponse = Tag;

/** Optional parameters. */
export declare interface AffindaAPIUpdateWorkspaceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateWorkspace operation. */
export declare type AffindaAPIUpdateWorkspaceResponse = Workspace;

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
    rectangles: Rectangle[] | null;
    /** Uniquely identify a document. */
    document?: string;
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
    dataPoint: string;
    /** The different data types of annotations */
    contentType: AnnotationContentType;
}

export declare type AnnotationBatchUpdate = AnnotationUpdate & {
    /** Annotation's ID */
    id: number;
};

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
 * **boolean** \
 * **enum** \
 * **location** \
 * **json** \
 * **table** \
 * **cell** \
 * **expectedremuneration** \
 * **jobtitle** \
 * **language** \
 * **skill** \
 * **yearsexperience** \
 * **group** \
 * **table_deprecated**
 */
export declare type AnnotationContentType = string;

export declare interface AnnotationCreate {
    /** x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles. */
    rectangles?: Rectangle[];
    /** Uniquely identify a document. */
    document: string;
    /** The page number within the document, starting from 0. */
    pageIndex: number | null;
    /** Data point's identifier */
    dataPoint: string;
    /** Raw data extracted from the before any post-processing */
    raw?: string;
    parsed?: AnnotationCreateParsed;
    /** Indicates whether the data has been validated by a human */
    isClientVerified?: boolean;
    /** The parent annotation's ID */
    parent?: number;
}

export declare interface AnnotationCreateParsed {
}

export declare interface AnnotationUpdate {
    /** x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles. */
    rectangles?: Rectangle[];
    /** Uniquely identify a document. */
    document?: string;
    /** The page number within the document, starting from 0. */
    pageIndex?: number;
    /** Raw data extracted from the before any post-processing */
    raw?: string;
    parsed?: AnnotationUpdateParsed;
    /** Indicates whether the data has been validated by a human */
    isClientVerified?: boolean;
    /** Data point's identifier */
    dataPoint?: string;
    /** The parent annotation's ID */
    parent?: number;
}

export declare interface AnnotationUpdateParsed {
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

export declare interface BatchAddTagRequest {
    /** List of documents to tag */
    identifiers?: string[];
    /** The tag's ID */
    tag?: number;
}

export declare interface BatchRemoveTagRequest {
    /** List of documents to remove tag from */
    identifiers?: string[];
    /** The tag's ID */
    tag?: number;
}

export declare interface Collection {
    /** Uniquely identify a collection. */
    identifier: string;
    name?: string;
    workspace?: CollectionWorkspace;
    extractor?: Extractor;
    autoValidationThreshold?: number;
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
}

export declare interface CollectionCreate {
    name: string;
    /** Uniquely identify a workspace. */
    workspace: string;
    /** Uniquely identify an extractor. */
    extractor: string;
    autoValidationThreshold?: number;
    fields?: FieldGroup[];
    fieldsLayout?: FieldsLayout;
    dateFormatPreference?: DateFormatPreference;
    /** Predict the date format from any dates in the document that is not ambiguous. */
    dateFormatFromDocument?: boolean;
    /** Extra configurations specific to an extractor. */
    extractorConfig?: ExtractorConfig;
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

export declare interface CollectionUpdate {
    name?: string;
    autoValidationThreshold?: number;
    fields?: FieldGroup[];
    fieldsLayout?: FieldsLayout;
    dateFormatPreference?: DateFormatPreference;
    /** Predict the date format from any dates in the document that is not ambiguous. */
    dateFormatFromDocument?: boolean;
    /** Extra configurations specific to an extractor. */
    extractorConfig?: ExtractorConfig;
}

export declare interface CollectionWorkspace {
    /** Uniquely identify a workspace. */
    identifier?: string;
    organization?: Organization;
    name?: string;
}

export declare interface Components105Abr3SchemasInvoicedataPropertiesCustomernumberAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components10Thcs2SchemasInvoicedataPropertiesSupplieremailAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1127QwqSchemasInvoicedataPropertiesBankibanAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components158Lya5SchemasInvoicedataPropertiesCustomerbusinessnumberAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1 {
    match?: boolean;
}

export declare interface Components17JmwpjSchemasInvoicedataPropertiesSupplierwebsiteAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1Fe3VqtSchemasInvoicedataPropertiesSupplierfaxAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1Hr2XldSchemasInvoicedataPropertiesSupplierphonenumberAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1O8OpknSchemasInvoicedataPropertiesCustomercompanynameAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1P4Fl61SchemasInvoicedataPropertiesSuppliercompanynameAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1QdassaSchemasInvoicedataPropertiesBanksortcodeAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1Roa72HSchemasInvoicedataPropertiesBankswiftAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1RrxgkvSchemasInvoicedataPropertiesBankbsbAllof1 {
    raw?: string;
    parsed?: string;
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
}

export declare interface Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1W3SqeuSchemasInvoicedataPropertiesPaymentamountbaseAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1Y7HcurSchemasInvoicedataPropertiesCustomeremailAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components1YsiqwnSchemasInvoicedataPropertiesCustomerphonenumberAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components2XnshtSchemasInvoicedataPropertiesPaymentreferenceAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components4A2PzvSchemasInvoicedataPropertiesPaymentamounttotalAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components5D6NjySchemasInvoicedataPropertiesSupplierbusinessnumberAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components5Rnu7ESchemasInvoicedataPropertiesInvoicenumberAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface Components74A7C1SchemasInvoicedataPropertiesBankaccountnumberAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface ComponentsA69Bd0SchemasInvoicedataPropertiesBpaybillercodeAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface ComponentsAq75Z8SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface ComponentsB3U7OaSchemasInvoicedataPropertiesSuppliervatAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface ComponentsBeazccSchemasInvoicedataPropertiesCustomervatAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface ComponentsEtsq6MSchemasInvoicedataPropertiesPaymentamountdueAllof1 {
    raw?: string;
    parsed?: string;
}

/** For custom fields. E.g. 'isAvailable': true */
export declare interface ComponentsEyyf0ZSchemasResumedataAdditionalproperties {
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

/** For custom fields. E.g. 'isAvailable': true */
export declare interface ComponentsTk0GmxSchemasJobdescriptiondataAdditionalproperties {
}

export declare interface ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1 {
    raw?: string;
    parsed?: string;
}

export declare type CurrencyCodeAnnotation = Annotation & {
    parsed?: DataPointChoice;
};

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
    name: string;
    slug: string;
    description?: string;
    /** The different data types of annotations */
    type: AnnotationContentType;
    multiple?: boolean;
    noRect?: boolean;
}

/** The field to be created. */
export declare interface DataFieldCreateField {
    label: string;
    mandatory?: boolean;
    showDropdown?: boolean;
    autoValidationThreshold?: number;
}

/** The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused. */
export declare interface DataFieldDataPoint {
    /** Uniquely identify a data point. */
    identifier: string;
    name: string;
    slug: string;
    description: string | null;
    /** The different data types of annotations */
    type: AnnotationContentType;
    multiple: boolean;
    noRect: boolean;
}

/** The field to be created. */
export declare interface DataFieldField {
    label: string;
    mandatory: boolean;
    showDropdown: boolean;
    autoValidationThreshold: number | null;
}

export declare interface DataPoint {
    /** Uniquely identify a data point. */
    identifier: string;
    name: string;
    slug?: string;
    description?: string;
    /** The different data types of annotations */
    annotationContentType: AnnotationContentType;
    organization?: Organization;
    /** Uniquely identify an extractor. */
    extractor: string | null;
    multiple?: boolean;
    noRect?: boolean;
    similarTo?: string[];
    displayEnumValue?: boolean;
    children?: DataPoint[];
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
    name?: string;
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
}

export declare interface DataPointUpdate {
    name?: string;
    slug?: string;
    description?: string;
}

export declare type DateAnnotation = Annotation & {
    parsed?: Date;
};

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

declare interface Document_2 {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    extractor: "resume" | "invoice" | "job-description";
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
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to download the document. */
    url?: string;
    /** Uniquely identify a collection. */
    collection?: string;
    /** Uniquely identify a workspace. */
    workspace?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Specify a custom identifier for the document. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: boolean;
    /** A JSON representation of the RegionBias object. */
    regionBias?: string;
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
    /** Uniquely identify a document. */
    identifier: string;
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
    collection?: DocumentMetaCollection;
    workspace: DocumentMetaWorkspace;
    archivedDt?: Date;
    isArchived?: boolean;
    confirmedDt?: Date;
    isConfirmed?: boolean;
    rejectedDt?: Date;
    isRejected?: boolean;
    createdDt?: Date;
    errorCode?: string;
    errorDetail?: string;
    /** URL to view the file. */
    file?: string;
    tags?: Tag[];
    confirmedBy?: UserNullable;
    createdBy?: User;
    /** If the document is created via email ingestion, this field stores the email file's URL. */
    sourceEmail?: string;
    regionBias?: RegionBias;
}

export declare interface DocumentMetaChildDocumentsItem {
    /** Uniquely identify a document. */
    identifier?: string;
}

export declare interface DocumentMetaCollection {
    /** Uniquely identify a collection. */
    identifier: string;
    name?: string;
    extractor?: DocumentMetaCollectionExtractor;
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
    /** Uniquely identify a document. */
    identifier?: string;
}

export declare interface DocumentMetaWorkspace {
    /** Uniquely identify a workspace. */
    identifier: string;
    name?: string;
}

/** Describe a split of a document. */
export declare interface DocumentSplit {
    /** Any object */
    identifier?: Record<string, unknown>;
    pages: DocumentSplitPage[];
}

/** List the pages within this split. Not including a page here will signal that the page should be deleted. */
export declare interface DocumentSplitPage {
    /** Page's ID */
    id: number;
    /** Specify a degree of rotation if you want to rotate a page. Possitive number for clockwise rotation, and negative number for counter-clockwise rotation. */
    rotation?: number;
}

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

export declare type DocumentUnion = Document_2 | Resume | Invoice | JobDescription;

export declare interface DocumentUpdate {
    /** Uniquely identify a collection. */
    collection?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    isConfirmed?: boolean;
    isRejected?: boolean;
    isArchived?: boolean;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** Specify a custom identifier for the document. */
    identifier?: string;
}

export declare interface DocumentWarning {
    warningCode?: string;
    warningDetail?: string;
}

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
 * Defines values for Enum18. \
 * {@link KnownEnum18} can be used interchangeably with Enum18,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export declare type Enum18 = string;

/**
 * Defines values for Enum21. \
 * {@link KnownEnum21} can be used interchangeably with Enum21,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export declare type Enum21 = string;

export declare type ExpectedRemunerationAnnotation = Annotation & {
    parsed?: ExpectedRemunerationAnnotationParsed;
};

export declare interface ExpectedRemunerationAnnotationParsed {
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
    label: string;
    /** Data point identifier */
    dataPoint: string;
    mandatory?: boolean;
    autoValidationThreshold?: number;
    showDropdown?: boolean;
    fields?: Field[];
}

export declare interface FieldCategory {
    label: string;
    enabledFields: Field[];
    disabledFields: Field[];
}

export declare interface FieldDeprecated {
    label: string;
    slug?: string;
    dataPoint: string;
    mandatory?: boolean;
    disabled?: boolean;
    autoValidationThreshold?: number;
    showDropdown?: boolean;
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

export declare type FloatAnnotation = Annotation & {
    parsed?: number;
};

export declare interface Get200ApplicationJsonPropertiesItemsItem {
    name: string;
    documentType?: GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType;
}

/**
 * Defines values for Get8ItemsItem. \
 * {@link KnownGet8ItemsItem} can be used interchangeably with Get8ItemsItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **file_name** \
 * **extractor** \
 * **created_dt**
 */
export declare type Get8ItemsItem = string;

/**
 * Defines values for GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType. \
 * {@link KnownGetResponses200ContentApplicationJsonSchemaResultsItemDocumentType} can be used interchangeably with GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export declare type GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType = string;

/** IndexRequestBody */
export declare interface IndexRequestBody {
    name?: string;
    documentType?: PostContentSchemaDocumentType;
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

export declare type InvitationRespondedBy = User & {};

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

export declare type Invoice = Document_2 & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    extractor: "invoice";
    data?: InvoiceData;
};

export declare interface InvoiceData {
    tables?: (TableAnnotation | null)[];
    invoiceDate?: DateAnnotation;
    invoiceOrderDate?: DateAnnotation;
    paymentDateDue?: DateAnnotation;
    paymentAmountBase?: InvoiceDataPaymentAmountBase;
    paymentAmountTax?: InvoiceDataPaymentAmountTax;
    paymentAmountTotal?: InvoiceDataPaymentAmountTotal;
    paymentAmountPaid?: InvoiceDataPaymentAmountPaid;
    paymentAmountDue?: InvoiceDataPaymentAmountDue;
    invoiceNumber?: InvoiceDataInvoiceNumber;
    invoicePurchaseOrderNumber?: InvoiceDataInvoicePurchaseOrderNumber;
    supplierBusinessNumber?: InvoiceDataSupplierBusinessNumber;
    customerNumber?: InvoiceDataCustomerNumber;
    customerBusinessNumber?: InvoiceDataCustomerBusinessNumber;
    paymentReference?: InvoiceDataPaymentReference;
    bankAccountNumber?: InvoiceDataBankAccountNumber;
    supplierVat?: InvoiceDataSupplierVat;
    customerVat?: InvoiceDataCustomerVat;
    bpayBillerCode?: InvoiceDataBpayBillerCode;
    bpayReference?: InvoiceDataBpayReference;
    bankSortCode?: InvoiceDataBankSortCode;
    bankIban?: InvoiceDataBankIban;
    bankSwift?: InvoiceDataBankSwift;
    bankBsb?: InvoiceDataBankBsb;
    customerContactName?: InvoiceDataCustomerContactName;
    customerCompanyName?: InvoiceDataCustomerCompanyName;
    supplierCompanyName?: InvoiceDataSupplierCompanyName;
    customerBillingAddress?: LocationAnnotation;
    customerDeliveryAddress?: LocationAnnotation;
    supplierAddress?: LocationAnnotation;
    customerPhoneNumber?: InvoiceDataCustomerPhoneNumber;
    supplierPhoneNumber?: InvoiceDataSupplierPhoneNumber;
    supplierFax?: InvoiceDataSupplierFax;
    customerEmail?: InvoiceDataCustomerEmail;
    supplierEmail?: InvoiceDataSupplierEmail;
    supplierWebsite?: InvoiceDataSupplierWebsite;
    currencyCode?: CurrencyCodeAnnotation;
    /** Dictionary of <any> */
    customFields?: {
        [propertyName: string]: any;
    };
}

export declare type InvoiceDataBankAccountNumber = TextAnnotation & Components74A7C1SchemasInvoicedataPropertiesBankaccountnumberAllof1 & {};

export declare type InvoiceDataBankBsb = TextAnnotation & Components1RrxgkvSchemasInvoicedataPropertiesBankbsbAllof1 & {};

export declare type InvoiceDataBankIban = TextAnnotation & Components1127QwqSchemasInvoicedataPropertiesBankibanAllof1 & {};

export declare type InvoiceDataBankSortCode = TextAnnotation & Components1QdassaSchemasInvoicedataPropertiesBanksortcodeAllof1 & {};

export declare type InvoiceDataBankSwift = TextAnnotation & Components1Roa72HSchemasInvoicedataPropertiesBankswiftAllof1 & {};

export declare type InvoiceDataBpayBillerCode = TextAnnotation & ComponentsA69Bd0SchemasInvoicedataPropertiesBpaybillercodeAllof1 & {};

export declare type InvoiceDataBpayReference = TextAnnotation & ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1 & {};

export declare type InvoiceDataCustomerBusinessNumber = TextAnnotation & Components158Lya5SchemasInvoicedataPropertiesCustomerbusinessnumberAllof1 & {};

export declare type InvoiceDataCustomerCompanyName = TextAnnotation & Components1O8OpknSchemasInvoicedataPropertiesCustomercompanynameAllof1 & {};

export declare type InvoiceDataCustomerContactName = TextAnnotation & ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1 & {};

export declare type InvoiceDataCustomerEmail = TextAnnotation & Components1Y7HcurSchemasInvoicedataPropertiesCustomeremailAllof1 & {};

export declare type InvoiceDataCustomerNumber = TextAnnotation & Components105Abr3SchemasInvoicedataPropertiesCustomernumberAllof1 & {};

export declare type InvoiceDataCustomerPhoneNumber = TextAnnotation & Components1YsiqwnSchemasInvoicedataPropertiesCustomerphonenumberAllof1 & {};

export declare type InvoiceDataCustomerVat = TextAnnotation & ComponentsBeazccSchemasInvoicedataPropertiesCustomervatAllof1 & {};

export declare type InvoiceDataInvoiceNumber = TextAnnotation & Components5Rnu7ESchemasInvoicedataPropertiesInvoicenumberAllof1 & {};

export declare type InvoiceDataInvoicePurchaseOrderNumber = TextAnnotation & ComponentsAq75Z8SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof1 & {};

export declare type InvoiceDataPaymentAmountBase = TextAnnotation & Components1W3SqeuSchemasInvoicedataPropertiesPaymentamountbaseAllof1 & {};

export declare type InvoiceDataPaymentAmountDue = TextAnnotation & ComponentsEtsq6MSchemasInvoicedataPropertiesPaymentamountdueAllof1 & {};

export declare type InvoiceDataPaymentAmountPaid = TextAnnotation & Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1 & {};

export declare type InvoiceDataPaymentAmountTax = TextAnnotation & Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1 & {};

export declare type InvoiceDataPaymentAmountTotal = TextAnnotation & Components4A2PzvSchemasInvoicedataPropertiesPaymentamounttotalAllof1 & {};

export declare type InvoiceDataPaymentReference = TextAnnotation & Components2XnshtSchemasInvoicedataPropertiesPaymentreferenceAllof1 & {};

export declare type InvoiceDataSupplierBusinessNumber = TextAnnotation & Components5D6NjySchemasInvoicedataPropertiesSupplierbusinessnumberAllof1 & {};

export declare type InvoiceDataSupplierCompanyName = TextAnnotation & Components1P4Fl61SchemasInvoicedataPropertiesSuppliercompanynameAllof1 & {};

export declare type InvoiceDataSupplierEmail = TextAnnotation & Components10Thcs2SchemasInvoicedataPropertiesSupplieremailAllof1 & {};

export declare type InvoiceDataSupplierFax = TextAnnotation & Components1Fe3VqtSchemasInvoicedataPropertiesSupplierfaxAllof1 & {};

export declare type InvoiceDataSupplierPhoneNumber = TextAnnotation & Components1Hr2XldSchemasInvoicedataPropertiesSupplierphonenumberAllof1 & {};

export declare type InvoiceDataSupplierVat = TextAnnotation & ComponentsB3U7OaSchemasInvoicedataPropertiesSuppliervatAllof1 & {};

export declare type InvoiceDataSupplierWebsite = TextAnnotation & Components17JmwpjSchemasInvoicedataPropertiesSupplierwebsiteAllof1 & {};

export declare type JobDescription = Document_2 & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    extractor: "job-description";
    data?: JobDescriptionData;
};

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
    searchToolTheme?: {
        [propertyName: string]: any;
    };
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
    customFieldsConfig?: CustomFieldConfig[];
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

export declare type JobDescriptionSearchDetailLocationValue = Location_2 & Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1 & {};

export declare interface JobDescriptionSearchDetailManagementLevel {
    level?: ManagementLevel;
    match?: boolean;
}

export declare interface JobDescriptionSearchDetailOccupationGroup {
    missing?: number[];
    value?: JobDescriptionSearchDetailOccupationGroupValue;
}

export declare type JobDescriptionSearchDetailOccupationGroupValue = OccupationGroupSearchResult & {};

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

export declare type JobTitleAnnotation = Annotation & {
    /** Years of experience range */
    parsed?: JobTitleAnnotationParsed;
};

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
}

export declare interface JobTitleSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

/** Known values of {@link AnnotationContentType} that the service accepts. */
export declare enum KnownAnnotationContentType {
    Text = "text",
    Integer = "integer",
    Float = "float",
    Decimal = "decimal",
    Date = "date",
    Datetime = "datetime",
    Boolean = "boolean",
    Enum = "enum",
    Location = "location",
    Json = "json",
    Table = "table",
    Cell = "cell",
    Expectedremuneration = "expectedremuneration",
    Jobtitle = "jobtitle",
    Language = "language",
    Skill = "skill",
    Yearsexperience = "yearsexperience",
    Group = "group",
    TableDeprecated = "table_deprecated"
}

/** Known values of {@link CollectionDateFormatPreference} that the service accepts. */
export declare enum KnownCollectionDateFormatPreference {
    DMY = "DMY",
    MDY = "MDY",
    YMD = "YMD"
}

/** Known values of {@link DateFormatPreference} that the service accepts. */
export declare enum KnownDateFormatPreference {
    DMY = "DMY",
    MDY = "MDY",
    YMD = "YMD"
}

/** Known values of {@link DateRange} that the service accepts. */
export declare enum KnownDateRange {
    Today = "today",
    Yesterday = "yesterday",
    Week = "week",
    Month = "month",
    Year = "year"
}

/** Known values of {@link DocumentFormat} that the service accepts. */
export declare enum KnownDocumentFormat {
    Json = "json",
    Xml = "xml",
    HrXml = "hr-xml"
}

/** Known values of {@link DocumentState} that the service accepts. */
export declare enum KnownDocumentState {
    Uploaded = "uploaded",
    Review = "review",
    Validated = "validated",
    Archived = "archived",
    Rejected = "rejected"
}

/** Known values of {@link Enum18} that the service accepts. */
export declare enum KnownEnum18 {
    Resumes = "resumes",
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link Enum21} that the service accepts. */
export declare enum KnownEnum21 {
    Resumes = "resumes",
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link Get8ItemsItem} that the service accepts. */
export declare enum KnownGet8ItemsItem {
    FileName = "file_name",
    Extractor = "extractor",
    CreatedDt = "created_dt"
}

/** Known values of {@link GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType} that the service accepts. */
export declare enum KnownGetResponses200ContentApplicationJsonSchemaResultsItemDocumentType {
    Resumes = "resumes",
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link InvitationResponseStatus} that the service accepts. */
export declare enum KnownInvitationResponseStatus {
    Accepted = "accepted",
    Declined = "declined"
}

/** Known values of {@link InvitationStatus} that the service accepts. */
export declare enum KnownInvitationStatus {
    Pending = "pending",
    Accepted = "accepted",
    Declined = "declined"
}

/** Known values of {@link OrganizationRole} that the service accepts. */
export declare enum KnownOrganizationRole {
    Admin = "admin",
    Member = "member"
}

/** Known values of {@link OrganizationUserRole} that the service accepts. */
export declare enum KnownOrganizationUserRole {
    Admin = "admin",
    Member = "member"
}

/** Known values of {@link PostContentSchemaDocumentType} that the service accepts. */
export declare enum KnownPostContentSchemaDocumentType {
    Resumes = "resumes",
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link Region} that the service accepts. */
export declare enum KnownRegion {
    Api = "api",
    ApiEu1 = "api.eu1"
}

/** Known values of {@link ResthookEvent} that the service accepts. */
export declare enum KnownResthookEvent {
    ResumeParseSucceeded = "resume.parse.succeeded",
    ResumeParseFailed = "resume.parse.failed",
    ResumeParseCompleted = "resume.parse.completed",
    InvoiceParseSucceeded = "invoice.parse.succeeded",
    InvoiceParseFailed = "invoice.parse.failed",
    InvoiceParseCompleted = "invoice.parse.completed",
    InvoiceValidateCompleted = "invoice.validate.completed",
    DocumentParseSucceeded = "document.parse.succeeded",
    DocumentParseFailed = "document.parse.failed",
    DocumentParseCompleted = "document.parse.completed",
    DocumentValidateCompleted = "document.validate.completed",
    DocumentClassifySucceeded = "document.classify.succeeded",
    DocumentClassifyFailed = "document.classify.failed",
    DocumentClassifyCompleted = "document.classify.completed"
}

/** Known values of {@link ResthookSubscriptionVersion} that the service accepts. */
export declare enum KnownResthookSubscriptionVersion {
    V1 = "v1",
    V2 = "v2",
    V3 = "v3"
}

/** Known values of {@link ResumeSkillSourcesItemSection} that the service accepts. */
export declare enum KnownResumeSkillSourcesItemSection {
    Achievements = "Achievements",
    AdditionalInformation = "AdditionalInformation",
    Education = "Education",
    Extracurriculars = "Extracurriculars",
    Organisations = "Organisations",
    Other = "Other",
    PersonalDetails = "PersonalDetails",
    Projects = "Projects",
    Publications = "Publications",
    Referees = "Referees",
    Skills = "Skills",
    Summary = "Summary",
    Training = "Training",
    WorkExperience = "WorkExperience",
    NotPopulated = "NotPopulated",
    Header = "Header",
    Footer = "Footer",
    SkillsInterestsLanguages = "Skills/Interests/Languages",
    TrainingCertifications = "Training/Certifications",
    ExtracurricularsLeadership = "Extracurriculars/Leadership"
}

/** Known values of {@link SearchParametersCustomDataFilterType} that the service accepts. */
export declare enum KnownSearchParametersCustomDataFilterType {
    Equals = "equals",
    Range = "range"
}

/** Known values of {@link ThemeConfigPaletteMode} that the service accepts. */
export declare enum KnownThemeConfigPaletteMode {
    Light = "light",
    Dark = "dark"
}

/** Known values of {@link Version} that the service accepts. */
export declare enum KnownVersion {
    V1 = "v1",
    V2 = "v2",
    V3 = "v3"
}

/** Known values of {@link WorkspaceVisibility} that the service accepts. */
export declare enum KnownWorkspaceVisibility {
    Organization = "organization",
    Private = "private"
}

export declare type LanguageAnnotation = Annotation & {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly parsed?: string;
};

export declare interface LanguagesSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

declare interface Location_2 {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly formatted?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly postalCode?: string;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly state?: string;
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
}
export { Location_2 as Location }

export declare type LocationAnnotation = Annotation & {
    parsed?: Location_2;
};

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

export declare interface Meta {
    /** Uniquely identify a document. */
    identifier?: string;
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
}

export declare interface MetaChildDocumentsItem {
    /** Uniquely identify a document. */
    identifier?: string;
}

/** If this document is part of a splitted document, this attribute points to the original document that this document is splitted from. */
export declare interface MetaParentDocument {
    /** Uniquely identify a document. */
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
}

export declare interface PageMeta {
    id: number;
    /** Page number within the document, starts from 0. */
    pageIndex: number;
    /** The URL to the image of the page. */
    image: string | null;
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

export declare type Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema = PaginatedResponse & PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare interface Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema {
    configOverride?: ResumeSearchConfig;
}

export declare type Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema = PaginatedResponse & Paths1Dgz0V9V3AnnotationsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare interface Paths1Dgz0V9V3AnnotationsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: (Annotation | null)[];
}

export declare interface Paths1Kdm1ZxV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems {
    document?: string;
}

export declare interface Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: ResthookSubscription[];
}

export declare interface Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema {
    name?: string;
    documentType?: Enum21;
}

export declare type Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema = PaginatedResponse & Paths11PzrpaV3ApiUsersGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare interface Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results: WorkspaceMembership[];
}

export declare interface Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: DataPointChoice[];
}

export declare interface Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: OrganizationMembership[];
}

export declare interface PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema {
    document?: string;
}

export declare interface PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema {
    /** Number of indexes in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Get200ApplicationJsonPropertiesItemsItem[];
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

export declare type PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema = PaginatedResponse & Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare interface PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema {
    /** Number of indexed documents in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Paths1Kdm1ZxV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems[];
}

export declare type PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema = PaginatedResponse & PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare type PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema = PaginatedResponse & Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare type PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema = PaginatedResponse & Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare type PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema = PaginatedResponse & Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

/**
 * Defines values for PostContentSchemaDocumentType. \
 * {@link KnownPostContentSchemaDocumentType} can be used interchangeably with PostContentSchemaDocumentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export declare type PostContentSchemaDocumentType = string;

export declare interface Rectangle {
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

/**
 * Defines values for Region. \
 * {@link KnownRegion} can be used interchangeably with Region,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **api** \
 * **api.eu1**
 */
export declare type Region = string;

export declare interface RegionBias {
    /** A single alpha-2 country code (e.g. AU) used by google geocoding service */
    country?: string;
    /** A list of alpha-2 country codes used by Pelias */
    countries?: string[];
    /** A list of coordinates used by Pelias in the shape of [min_lon, min_lat, max_lon, max_lat] */
    squareCoordinates?: number[];
}

export declare interface RequestError {
    type: string;
    errors: RequestErrorErrorsItem[];
}

export declare interface RequestErrorErrorsItem {
    attr: string | null;
    code: string;
    detail: string;
}

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
 * **document.classify.completed**
 */
export declare type ResthookEvent = string;

export declare interface ResthookSubscription {
    /** Resthook subscription's ID. */
    id: number;
    /** The event name to subscribe to. */
    event: ResthookEvent;
    organization: Organization;
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
    /** Version of the resthook subscription. Determines the resthook body being fired. */
    version?: Version;
}

export declare interface ResthookSubscriptionUpdate {
    /** The event name to subscribe to. */
    event?: ResthookEvent;
    /** Uniquely identify an organization. */
    organization?: string;
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

export declare type Resume = Document_2 & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    extractor: "resume";
    /** A JSON-encoded string of the `ResumeData` object. */
    data?: ResumeData;
};

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
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly languages?: string[];
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
    managementLevel?: ManagementLevel;
    classification?: Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification;
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
    searchToolTheme?: {
        [propertyName: string]: any;
    };
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
    customFieldsConfig?: CustomFieldConfig[];
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

export declare type ResumeSearchDetailEducationValueItem = Education & ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1 & {};

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

export declare type ResumeSearchDetailLanguagesValueItem = ResumeSkill & Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1 & {};

export declare interface ResumeSearchDetailLocation {
    missing?: ResumeSearchParametersLocation[];
    value?: ResumeSearchDetailLocationValue;
}

export declare type ResumeSearchDetailLocationValue = Location_2 & ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1 & {};

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

export declare type ResumeSearchDetailSkillsValueItem = ResumeSkill & ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1 & {};

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

export declare type ResumeSearchParametersCustomData = SearchParametersCustomData & {};

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

export declare type RowAnnotation = Annotation & {
    parsed?: RowAnnotationParsed;
};

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
    /** The data point's slug */
    dataPoint: string;
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

export declare type SkillAnnotation = Annotation & {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly parsed?: string;
};

export declare interface SkillsSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

export declare type TableAnnotation = Annotation & {
    parsed?: TableAnnotationParsed;
};

export declare interface TableAnnotationParsed {
    rows?: (RowAnnotation | null)[];
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

export declare type TextAnnotation = Annotation & {
    parsed?: string;
};

export declare interface ThemeConfig {
    palette?: ThemeConfigPalette;
    typography?: ThemeConfigTypography;
    borderRadius?: number;
    fontUrl?: string;
}

export declare interface ThemeConfigPalette {
    mode?: ThemeConfigPaletteMode;
    background?: ThemeConfigPaletteBackground;
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

export declare interface ThemeConfigPaletteBackground {
    default?: string;
    paper?: string;
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
    fontSize?: string;
    fontWeightRegular?: string;
    fontWeightMedium?: string;
    fontWeightBold?: string;
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

/** Configuration of the embeddable validation tool. */
export declare interface ValidationToolConfig {
    theme?: ThemeConfig;
    /** Hide the confirm document button and other actions. */
    hideActions?: boolean;
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
    isCustom?: boolean;
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
    /** If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info". */
    whitelistIngestAddresses?: string[];
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
    /** If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info". */
    whitelistIngestAddresses?: string[];
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

export declare type YearsExperienceAnnotation = Annotation & {
    /** Years of experience range */
    parsed?: YearsExperienceAnnotationParsed;
};

/** Years of experience range */
export declare interface YearsExperienceAnnotationParsed {
    /** Minimum years of experience */
    minimum?: number;
    /** Maximum years of experience */
    maximum?: number;
}

export { }
