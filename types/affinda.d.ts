import { AccessToken } from '@azure/identity';
import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import * as coreRestPipeline from '@azure/core-rest-pipeline';
import { GetTokenOptions } from '@azure/identity';
import { TokenCredential } from '@azure/identity';

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
     * Returns all the resume summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllResumes(options?: AffindaAPIGetAllResumesOptionalParams): Promise<AffindaAPIGetAllResumesResponse>;
    /**
     * Uploads a resume for parsing. When successful, returns an `identifier` in the response for
     * subsequent use with the [/resumes/{identifier}](#get-/resumes/-identifier-) endpoint to check
     * processing status and retrieve results.<br/>
     * Resumes can be uploaded as a file or a URL. In addition, data can be added directly if users want to
     * upload directly without parsing any resume file. For uploading resume data, the `data` argument
     * provided must be a JSON-encoded string. Data uploads will not impact upon parsing credits.
     * @param options The options parameters.
     */
    createResume(options?: AffindaAPICreateResumeOptionalParams): Promise<AffindaAPICreateResumeResponse>;
    /**
     * Returns all the parse results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/resumes](#post-/resumes) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getResume(identifier: string, options?: AffindaAPIGetResumeOptionalParams): Promise<AffindaAPIGetResumeResponse>;
    /**
     * Update data of a parsed resume.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/resumes](#post-/resumes) endpoint.
     * @param identifier Resume identifier
     * @param body Resume data to update
     * @param options The options parameters.
     */
    updateResumeData(identifier: string, body: ResumeData | null, options?: AffindaAPIUpdateResumeDataOptionalParams): Promise<AffindaAPIUpdateResumeDataResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Resume identifier
     * @param options The options parameters.
     */
    deleteResume(identifier: string, options?: AffindaAPIDeleteResumeOptionalParams): Promise<void>;
    /**
     * Returns all the redacted resume information for that resume
     * @param options The options parameters.
     */
    getAllRedactedResumes(options?: AffindaAPIGetAllRedactedResumesOptionalParams): Promise<AffindaAPIGetAllRedactedResumesResponse>;
    /**
     * Uploads a resume for redacting.
     * @param options The options parameters.
     */
    createRedactedResume(options?: AffindaAPICreateRedactedResumeOptionalParams): Promise<AffindaAPICreateRedactedResumeResponse>;
    /**
     * Returns all the redaction results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/redacted_resumes](#post-/redacted_resumes) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getRedactedResume(identifier: string, options?: AffindaAPIGetRedactedResumeOptionalParams): Promise<AffindaAPIGetRedactedResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteRedactedResume(identifier: string, options?: AffindaAPIDeleteRedactedResumeOptionalParams): Promise<void>;
    /**
     * Searches through parsed resumes. Users have 3 options to create a search:<br /><br /> 1.	Match to a
     * job description - a parsed job description is used to find candidates that suit it<br /> 2.	Match to
     * a resume - a parsed resume is used to find other candidates that have similar attributes<br /> 3.
     * Search using custom criteria<br /><br /> Users should only populate 1 of jobDescription, resume or
     * the custom criteria.
     * @param body Search parameters
     * @param options The options parameters.
     */
    createResumeSearch(body: ResumeSearchParameters | null, options?: AffindaAPICreateResumeSearchOptionalParams): Promise<AffindaAPICreateResumeSearchResponse>;
    /**
     * This contains more detailed information about the matching score of the search criteria, or which
     * search criteria is missing in this resume.
     * The `identifier` is the unique ID returned via the [/resume_search](#post-/resume_search) endpoint.
     * @param identifier Resume identifier
     * @param body Search parameters
     * @param options The options parameters.
     */
    getResumeSearchDetail(identifier: string, body: ResumeSearchParameters | null, options?: AffindaAPIGetResumeSearchDetailOptionalParams): Promise<AffindaAPIGetResumeSearchDetailResponse>;
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
     * Returns all the job descriptions for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllJobDescriptions(options?: AffindaAPIGetAllJobDescriptionsOptionalParams): Promise<AffindaAPIGetAllJobDescriptionsResponse>;
    /**
     * Uploads a job description for parsing.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/job_descriptions/{identifier}](#get-/job_descriptions/-identifier-) endpoint to check processing
     * status and retrieve results.
     * Job Descriptions can be uploaded as a file or a URL.
     * @param options The options parameters.
     */
    createJobDescription(options?: AffindaAPICreateJobDescriptionOptionalParams): Promise<AffindaAPICreateJobDescriptionResponse>;
    /**
     * Returns all the results for that job description if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/job_descriptions](#post-/job_descriptions) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getJobDescription(identifier: string, options?: AffindaAPIGetJobDescriptionOptionalParams): Promise<AffindaAPIGetJobDescriptionResponse>;
    /**
     * Deletes the specified job description from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteJobDescription(identifier: string, options?: AffindaAPIDeleteJobDescriptionOptionalParams): Promise<void>;
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
    createIndexDocument(name: string, body: PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema, options?: AffindaAPICreateIndexDocumentOptionalParams): Promise<AffindaAPICreateIndexDocumentResponse>;
    /**
     * Delete the specified indexed document from the database
     * @param name Index name
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteIndexDocument(name: string, identifier: string, options?: AffindaAPIDeleteIndexDocumentOptionalParams): Promise<void>;
    /**
     * Returns all the invoice summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllInvoices(options?: AffindaAPIGetAllInvoicesOptionalParams): Promise<AffindaAPIGetAllInvoicesResponse>;
    /**
     * Uploads an invoice for parsing.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/invoices/{identifier}](#get-/invoices/-identifier-) endpoint to check processing status and
     * retrieve results.
     * @param options The options parameters.
     */
    createInvoice(options?: AffindaAPICreateInvoiceOptionalParams): Promise<AffindaAPICreateInvoiceResponse>;
    /**
     * Returns all the parse results for that invoice if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the invoice via the
     * [/invoices](#post-/invoices) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getInvoice(identifier: string, options?: AffindaAPIGetInvoiceOptionalParams): Promise<AffindaAPIGetInvoiceResponse>;
    /**
     * Delete the specified invoice from the database. Note, any invoices deleted from the database will no
     * longer be used in any tailored customer models.
     * @param identifier Invoice identifier
     * @param options The options parameters.
     */
    deleteInvoice(identifier: string, options?: AffindaAPIDeleteInvoiceOptionalParams): Promise<void>;
    /**
     * Returns the list of searchable occupation groups.
     * @param options The options parameters.
     */
    listOccupationGroups(options?: AffindaAPIListOccupationGroupsOptionalParams): Promise<AffindaAPIListOccupationGroupsResponse>;
    /**
     * Returns all the users
     * @param options The options parameters.
     */
    getAllUsers(options?: AffindaAPIGetAllUsersOptionalParams): Promise<AffindaAPIGetAllUsersResponse>;
    /**
     * Create an user as part of your account
     * @param username
     * @param email
     * @param options The options parameters.
     */
    createUser(username: string, email: string, options?: AffindaAPICreateUserOptionalParams): Promise<AffindaAPICreateUserResponse>;
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
    respondToInvitation(token: string, body: PathsW51LnrInvitationsTokenPatchRequestbodyContentApplicationJsonSchema, options?: AffindaAPIRespondToInvitationOptionalParams): Promise<AffindaAPIRespondToInvitationResponse>;
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
     * @param id Extractor's ID
     * @param options The options parameters.
     */
    getExtractor(id: number, options?: AffindaAPIGetExtractorOptionalParams): Promise<AffindaAPIGetExtractorResponse>;
    /**
     * Update data of an extractor.
     * @param id Extractor's ID
     * @param body Extractor data to update
     * @param options The options parameters.
     */
    updateExtractorData(id: number, body: ExtractorUpdate, options?: AffindaAPIUpdateExtractorDataOptionalParams): Promise<AffindaAPIUpdateExtractorDataResponse>;
    /**
     * Deletes the specified extractor from the database.
     * @param id Extractor's ID
     * @param options The options parameters.
     */
    deleteExtractor(id: number, options?: AffindaAPIDeleteExtractorOptionalParams): Promise<void>;
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
    updateDataPointData(identifier: string, body: DataPointUpdate, options?: AffindaAPIUpdateDataPointDataOptionalParams): Promise<AffindaAPIUpdateDataPointDataResponse>;
    /**
     * Deletes the specified data point from the database.
     * @param identifier DataPoint's identifier
     * @param options The options parameters.
     */
    deleteDataPoint(identifier: string, options?: AffindaAPIDeleteDataPointOptionalParams): Promise<void>;
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
    updateCollectionData(identifier: string, body: CollectionUpdate, options?: AffindaAPIUpdateCollectionDataOptionalParams): Promise<AffindaAPIUpdateCollectionDataResponse>;
    /**
     * Deletes the specified collection from the database.
     * @param identifier Collection's identifier
     * @param options The options parameters.
     */
    deleteCollection(identifier: string, options?: AffindaAPIDeleteCollectionOptionalParams): Promise<void>;
    /**
     * Returns all the document summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllDocuments(options?: AffindaAPIGetAllDocumentsOptionalParams): Promise<AffindaAPIGetAllDocumentsResponse>;
    /**
     * Uploads a document for parsing. When successful, returns an `identifier` in the response for
     * subsequent use with the [/documents/{identifier}](#get-/documents/-identifier-) endpoint to check
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
    updateDocumentData(identifier: string, body: DocumentUpdate, options?: AffindaAPIUpdateDocumentDataOptionalParams): Promise<AffindaAPIUpdateDocumentDataResponse>;
    /**
     * Deletes the specified document from the database.
     * @param identifier Document's identifier
     * @param options The options parameters.
     */
    deleteDocument(identifier: string, options?: AffindaAPIDeleteDocumentOptionalParams): Promise<void>;
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
    updateTagData(id: number, body: TagUpdate, options?: AffindaAPIUpdateTagDataOptionalParams): Promise<AffindaAPIUpdateTagDataResponse>;
    /**
     * Deletes the specified tag from the database.
     * @param id Tag's ID
     * @param options The options parameters.
     */
    deleteTag(id: number, options?: AffindaAPIDeleteTagOptionalParams): Promise<void>;
}

export declare class AffindaAPIContext extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the AffindaAPIContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: AffindaAPIOptionalParams);
}

/** Optional parameters. */
export declare interface AffindaAPICreateCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createCollection operation. */
export declare type AffindaAPICreateCollectionResponse = Collection;

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
    /** URL to a resume to download and process */
    url?: string;
    /** Specify a custom identifier for the document. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** Uniquely identify a collection. */
    collection?: string;
    /** Uniquely identify a workspace. */
    workspace?: string;
}

/** Contains response data for the createDocument operation. */
export declare type AffindaAPICreateDocumentResponse = Document;

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
export declare type AffindaAPICreateIndexDocumentResponse = PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPICreateIndexOptionalParams extends coreClient.OperationOptions {
    name?: string;
    documentType?: PostContentSchemaDocumentType;
}

/** Contains response data for the createIndex operation. */
export declare type AffindaAPICreateIndexResponse = Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPICreateInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createInvitation operation. */
export declare type AffindaAPICreateInvitationResponse = Invitation;

/** Optional parameters. */
export declare interface AffindaAPICreateInvoiceOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to an invoice to download and process */
    url?: string;
    /** A random string that uniquely identify the resource. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document. If "false" (default), will parse the document normally whether its a duplicate or not. */
    rejectDuplicates?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

/** Contains response data for the createInvoice operation. */
export declare type AffindaAPICreateInvoiceResponse = Invoice;

/** Optional parameters. */
export declare interface AffindaAPICreateJobDescriptionOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to a job description to download and process */
    url?: string;
    /** A random string that uniquely identify the resource. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document. If "false" (default), will parse the document normally whether its a duplicate or not. */
    rejectDuplicates?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

/** Contains response data for the createJobDescription operation. */
export declare type AffindaAPICreateJobDescriptionResponse = JobDescription;

/** Optional parameters. */
export declare interface AffindaAPICreateJobDescriptionSearchEmbedUrlOptionalParams extends coreClient.OperationOptions {
    body?: PathsFqn8P8JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema;
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
export declare interface AffindaAPICreateRedactedResumeOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to a resume to download and process */
    url?: string;
    /** A random string that uniquely identify the resource. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** Whether to redact headshot */
    redactHeadshot?: string;
    /** Whether to redact personal details (e.g. name, address) */
    redactPersonalDetails?: string;
    /** Whether to redact work details (e.g. company names) */
    redactWorkDetails?: string;
    /** Whether to redact education details (e.g. university names) */
    redactEducationDetails?: string;
    /** Whether to redact referee details */
    redactReferees?: string;
    /** Whether to redact location names */
    redactLocations?: string;
    /** Whether to redact dates */
    redactDates?: string;
    /** Whether to redact gender */
    redactGender?: string;
}

/** Contains response data for the createRedactedResume operation. */
export declare type AffindaAPICreateRedactedResumeResponse = RedactedResume;

/** Optional parameters. */
export declare interface AffindaAPICreateResumeOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to a resume to download and process */
    url?: string;
    /** A JSON-encoded string of the `ResumeData` object. */
    data?: ResumeData;
    /** A random string that uniquely identify the resource. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document. If "false" (default), will parse the document normally whether its a duplicate or not. */
    rejectDuplicates?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

/** Contains response data for the createResume operation. */
export declare type AffindaAPICreateResumeResponse = Resume;

/** Optional parameters. */
export declare interface AffindaAPICreateResumeSearchEmbedUrlOptionalParams extends coreClient.OperationOptions {
    body?: Paths2T1Oc0ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema;
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
export declare interface AffindaAPICreateUserOptionalParams extends coreClient.OperationOptions {
    name?: string;
    /** Upload avatar for the user. */
    avatar?: coreRestPipeline.RequestBodyType;
}

/** Contains response data for the createUser operation. */
export declare type AffindaAPICreateUserResponse = UserCreateResponse;

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
export declare interface AffindaAPIDeleteCollectionOptionalParams extends coreClient.OperationOptions {
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
export declare interface AffindaAPIDeleteInvoiceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteJobDescriptionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteOrganizationMembershipOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteOrganizationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteRedactedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteResumeOptionalParams extends coreClient.OperationOptions {
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
    extractor?: number;
    /** Filter by slug. */
    slug?: string;
    /** Filter by description. */
    description?: string;
    /** Filter by annotation content type, e.g. text, integer, float, date, etc. */
    annotationContentType?: string;
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
    /** Filter by tags. */
    tags?: number[];
    /** Filter by created datetime. */
    createdDt?: DateRange;
    /** Partial, case-insensitive match with file name or tag name. */
    search?: string;
    /** Sort the result set. A "-" at the beginning denotes DESC sort, e.g. -created_dt. Sort by multiple fields is supported. */
    ordering?: Get8ItemsItem[];
    /** By default, this endpoint returns only the meta data of the documents. Set this to `true` will return the detailed data that was parsed, at a performance cost. */
    includeData?: boolean;
}

/** Contains response data for the getAllDocuments operation. */
export declare type AffindaAPIGetAllDocumentsResponse = GetAllDocumentsResults;

/** Optional parameters. */
export declare interface AffindaAPIGetAllExtractorsOptionalParams extends coreClient.OperationOptions {
    /** Whether to include Affinda's off-the-shelf extractors. */
    includePublicExtractors?: boolean;
    /** Filter by name. */
    name?: string;
    /** Filter by validatable. */
    validatable?: boolean;
}

/** Contains response data for the getAllExtractors operation. */
export declare type AffindaAPIGetAllExtractorsResponse = Extractor[];

/** Optional parameters. */
export declare interface AffindaAPIGetAllIndexDocumentsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllIndexDocuments operation. */
export declare type AffindaAPIGetAllIndexDocumentsResponse = PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllIndexesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter indices by a document type */
    documentType?: Enum2;
}

/** Contains response data for the getAllIndexes operation. */
export declare type AffindaAPIGetAllIndexesResponse = Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema;

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
export declare type AffindaAPIGetAllInvitationsResponse = PathsZt2JhiInvitationsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllInvoicesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllInvoices operation. */
export declare type AffindaAPIGetAllInvoicesResponse = GetAllInvoicesResults;

/** Optional parameters. */
export declare interface AffindaAPIGetAllJobDescriptionsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllJobDescriptions operation. */
export declare type AffindaAPIGetAllJobDescriptionsResponse = GetAllJobDescriptionsResults;

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
export declare type AffindaAPIGetAllOrganizationMembershipsResponse = PathsCkdzu3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllOrganizationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllOrganizations operation. */
export declare type AffindaAPIGetAllOrganizationsResponse = Organization[];

/** Optional parameters. */
export declare interface AffindaAPIGetAllRedactedResumesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllRedactedResumes operation. */
export declare type AffindaAPIGetAllRedactedResumesResponse = GetAllDocumentsResults;

/** Optional parameters. */
export declare interface AffindaAPIGetAllResumesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllResumes operation. */
export declare type AffindaAPIGetAllResumesResponse = GetAllDocumentsResults;

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
export declare interface AffindaAPIGetAllUsersOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllUsers operation. */
export declare type AffindaAPIGetAllUsersResponse = PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema;

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
export declare type AffindaAPIGetAllWorkspaceMembershipsResponse = PathsAdr1YhWorkspaceMembershipsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllWorkspacesOptionalParams extends coreClient.OperationOptions {
    /** Filter by name. */
    name?: string;
}

/** Contains response data for the getAllWorkspaces operation. */
export declare type AffindaAPIGetAllWorkspacesResponse = Workspace[];

/** Optional parameters. */
export declare interface AffindaAPIGetCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getCollection operation. */
export declare type AffindaAPIGetCollectionResponse = Collection;

/** Optional parameters. */
export declare interface AffindaAPIGetDataPointOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDataPoint operation. */
export declare type AffindaAPIGetDataPointResponse = DataPoint;

/** Optional parameters. */
export declare interface AffindaAPIGetDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDocument operation. */
export declare type AffindaAPIGetDocumentResponse = Document;

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
export declare interface AffindaAPIGetInvoiceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInvoice operation. */
export declare type AffindaAPIGetInvoiceResponse = Invoice;

/** Optional parameters. */
export declare interface AffindaAPIGetJobDescriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getJobDescription operation. */
export declare type AffindaAPIGetJobDescriptionResponse = JobDescription;

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
export declare interface AffindaAPIGetRedactedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRedactedResume operation. */
export declare type AffindaAPIGetRedactedResumeResponse = RedactedResume;

/** Optional parameters. */
export declare interface AffindaAPIGetResumeOptionalParams extends coreClient.OperationOptions {
    /** Set this to "hr-xml" to get the response in HR-XML format. Currently the only supported value for this parameter is "hr-xml". */
    format?: string;
}

/** Contains response data for the getResume operation. */
export declare type AffindaAPIGetResumeResponse = Resume;

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
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Optional parameters. */
export declare interface AffindaAPIRespondToInvitationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the respondToInvitation operation. */
export declare type AffindaAPIRespondToInvitationResponse = Invitation;

/** Optional parameters. */
export declare interface AffindaAPIUpdateCollectionDataOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateCollectionData operation. */
export declare type AffindaAPIUpdateCollectionDataResponse = Collection;

/** Optional parameters. */
export declare interface AffindaAPIUpdateDataPointDataOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDataPointData operation. */
export declare type AffindaAPIUpdateDataPointDataResponse = DataPoint;

/** Optional parameters. */
export declare interface AffindaAPIUpdateDocumentDataOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDocumentData operation. */
export declare type AffindaAPIUpdateDocumentDataResponse = Document;

/** Optional parameters. */
export declare interface AffindaAPIUpdateExtractorDataOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateExtractorData operation. */
export declare type AffindaAPIUpdateExtractorDataResponse = Extractor;

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
    name?: string;
    /** Upload avatar for the organization. */
    avatar?: coreRestPipeline.RequestBodyType;
    /** Used to sign webhook payloads so you can verify their integrity. */
    resthookSignatureKey?: string;
}

/** Contains response data for the updateOrganization operation. */
export declare type AffindaAPIUpdateOrganizationResponse = Organization;

/** Optional parameters. */
export declare interface AffindaAPIUpdateResumeDataOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateResumeData operation. */
export declare type AffindaAPIUpdateResumeDataResponse = ResumeData;

/** Optional parameters. */
export declare interface AffindaAPIUpdateResumeSearchConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateResumeSearchConfig operation. */
export declare type AffindaAPIUpdateResumeSearchConfigResponse = ResumeSearchConfig;

/** Optional parameters. */
export declare interface AffindaAPIUpdateTagDataOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTagData operation. */
export declare type AffindaAPIUpdateTagDataResponse = Tag;

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
    id: number;
    rectangle: Rectangle | null;
    rectangles: Rectangle[] | null;
    pageIndex: number | null;
    raw: string | null;
    /** The overall confidence that the model's prediction is correct */
    confidence: number | null;
    /** The model's confidence that the text has been classified correctly */
    classificationConfidence: number | null;
    /** If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model. */
    textExtractionConfidence: number | null;
    isVerified: boolean;
    isClientVerified: boolean;
    isAutoVerified: boolean;
    dataPoint: string;
    contentType: string;
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
 * **boolean** \
 * **enum** \
 * **location** \
 * **json** \
 * **table**
 */
export declare type AnnotationContentType = string;

export declare interface BaseExtractor {
    id: number;
    identifier: string;
    name: string;
    namePlural: string;
    validatable: boolean;
    isCustom?: boolean;
    createdDt?: Date;
}

export declare interface Collection {
    /** Uniquely identify a collection. */
    identifier: string;
    name?: string;
    workspace?: CollectionWorkspace;
    extractor?: Extractor;
    autoValidationThreshold?: number;
    fields?: FieldGroup[];
    fieldsConfigured?: boolean;
    dateFormatPreference?: CollectionDateFormatPreference;
    /** Predict the date format from any dates in the document that is not ambiguous. */
    dateFormatFromDocument?: boolean;
    /** Extra configurations specific to an extractor. */
    extractorConfig?: {
        [propertyName: string]: any;
    };
    /** Number of unvalidated documents in the collection. */
    unvalidatedDocsCount?: number;
    /** Number of validated documents in the collection. */
    confirmedDocsCount?: number;
}

export declare interface CollectionCreate {
    name: string;
    /** Uniquely identify a workspace. */
    workspace: string;
    /** Extractor's ID. */
    extractor: number;
    autoValidationThreshold?: number;
    fields?: FieldGroup[];
    dateFormatPreference?: DateFormatPreference;
    /** Predict the date format from any dates in the document that is not ambiguous. */
    dateFormatFromDocument?: boolean;
    /** Extra configurations specific to an extractor. */
    extractorConfig?: {
        [propertyName: string]: any;
    };
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
    dateFormatPreference?: DateFormatPreference;
    /** Predict the date format from any dates in the document that is not ambiguous. */
    dateFormatFromDocument?: boolean;
    /** Extra configurations specific to an extractor. */
    extractorConfig?: {
        [propertyName: string]: any;
    };
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

export declare interface Components1Bq3Q31SchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1 {
    match?: boolean;
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

/** For custom fields. E.g. "isAvailable": true */
export declare interface ComponentsEyyf0ZSchemasResumedataAdditionalproperties {
}

export declare interface ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1 {
    match?: boolean;
}

export declare interface ComponentsK7P1F5SchemasResumesearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1 {
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

export declare interface ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1 {
    raw?: string;
    parsed?: string;
}

export declare interface DataPoint {
    /** Uniquely identify a data point. */
    identifier: string;
    name: string;
    slug?: string;
    description?: string;
    annotationContentType: AnnotationContentType;
    organization?: Organization;
    /** Extractor's ID. */
    extractor: number;
    multiple?: boolean;
    noRect?: boolean;
    similarTo: string[];
    choices?: DataPointChoicesItem[];
    children?: DataPoint[];
}

export declare interface DataPointChoicesItem {
    label: string;
}

export declare interface DataPointCreate {
    name?: string;
    slug: string;
    description?: string;
    annotationContentType: AnnotationContentType;
    /** Uniquely identify an organization. */
    organization: string;
    /** Extractor's ID. */
    extractor: number;
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

export declare type Document = DocumentMeta & {
    /** Dictionary of <any> */
    data?: {
        [propertyName: string]: any;
    };
};

export declare interface DocumentCreate {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to a resume to download and process */
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
}

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
    /** Extractor's ID. */
    id?: number;
    name?: string;
    /** Base extractor's ID. */
    baseExtractor?: number;
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

export declare interface DocumentUpdate {
    /** Uniquely identify a collection. */
    collection?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    isConfirmed?: boolean;
    isRejected?: boolean;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
}

export declare interface Education {
    id?: number;
    organization?: string;
    accreditation?: Accreditation;
    grade?: EducationGrade;
    location?: Location;
    dates?: EducationDates;
}

export declare interface EducationDates {
    completionDate?: Date;
    isCurrent?: boolean;
    startDate?: Date;
}

export declare interface EducationGrade {
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
 * Defines values for Enum2. \
 * {@link KnownEnum2} can be used interchangeably with Enum2,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export declare type Enum2 = string;

/**
 * Defines values for Enum5. \
 * {@link KnownEnum5} can be used interchangeably with Enum5,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export declare type Enum5 = string;

export declare type EnumAnnotationSerializer = Annotation & {
    parsed?: string;
};

export declare interface ErrorModel {
    errorCode?: string;
    errorDetail?: string;
}

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
    /** Extractor's ID. */
    id: number;
    identifier: string;
    name: string;
    namePlural: string;
    baseExtractor?: ExtractorBaseExtractor;
    organization?: Organization;
    category?: string;
    validatable: boolean;
    isCustom?: boolean;
    fieldGroups?: ExtractorFieldGroups;
    createdDt?: Date;
}

export declare interface ExtractorBaseExtractor {
    id: number;
    identifier: string;
    name: string;
    namePlural: string;
    validatable: boolean;
    isCustom?: boolean;
    createdDt?: Date;
}

export declare interface ExtractorCreate {
    name: string;
    namePlural?: string;
    /** The base extractor's ID. */
    baseExtractor?: number;
    /** Uniquely identify an organization. */
    organization: string;
    category?: string;
    validatable?: boolean;
    fieldGroups?: FieldGroups;
}

export declare type ExtractorFieldGroups = FieldGroup & {};

export declare interface ExtractorUpdate {
    name?: string;
    namePlural?: string;
    /** The base extractor's ID. */
    baseExtractor?: number;
    category?: string;
    validatable?: boolean;
    fieldGroups?: FieldGroups;
}

export declare interface Field {
    label: string;
    slug: string;
    dataPoint: string;
    mandatory?: boolean;
    disabled?: boolean;
    autoValidationThreshold?: number;
    fields?: Field[];
}

export declare interface FieldGroup {
    label: string;
    fields: Field[];
}

export declare type FieldGroups = FieldGroup & {};

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

export declare interface GetAllDocumentsResults {
    /** Number of documents in result */
    count: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results: Document[];
}

export declare interface GetAllInvoicesResults {
    /** Number of documents in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Meta[];
}

export declare interface GetAllJobDescriptionsResults {
    /** Number of documents in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Meta[];
}

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

export declare interface Invoice {
    clientVerifiedDt: string | null;
    data: InvoiceData | null;
    meta: Meta;
    error: ErrorModel;
}

export declare interface InvoiceData {
    tables?: InvoiceDataTablesItem[];
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
    currencyCode?: EnumAnnotationSerializer;
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

export declare interface InvoiceDataTablesItem {
    rows?: (RowAnnotation | null)[];
}

/** InvoiceRequestBody */
export declare interface InvoiceRequestBody {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to an invoice to download and process */
    url?: string;
    /** A random string that uniquely identify the resource. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document. If "false" (default), will parse the document normally whether its a duplicate or not. */
    rejectDuplicates?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

export declare interface JobDescription {
    data: JobDescriptionData | null;
    meta: Meta;
    error: ErrorModel;
}

export declare interface JobDescriptionData {
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
}

/** JobDescriptionRequestBody */
export declare interface JobDescriptionRequestBody {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to a job description to download and process */
    url?: string;
    /** A random string that uniquely identify the resource. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document. If "false" (default), will parse the document normally whether its a duplicate or not. */
    rejectDuplicates?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
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
    actions?: JobDescriptionSearchConfigActionsItem[];
}

export declare interface JobDescriptionSearchConfigActionsItem {
    /** Human readable label to display in the UI */
    label?: string;
    /** Name of the event to be triggered */
    eventName?: string;
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

export declare type JobDescriptionSearchDetailLocationValue = Location & Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1 & {};

export declare interface JobDescriptionSearchDetailManagementLevel {
    level?: ManagementLevel;
    match?: boolean;
}

export declare interface JobDescriptionSearchDetailOccupationGroup {
    missing?: number[];
    value?: JobDescriptionSearchDetailOccupationGroupValueItem[];
}

export declare type JobDescriptionSearchDetailOccupationGroupValueItem = OccupationGroup & Components1Bq3Q31SchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1 & {};

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
}

export declare interface JobDescriptionSearchResult {
    /** A random string that uniquely identify the resource. */
    identifier: string;
    score: number;
    pdf: string;
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
    Table = "table"
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

/** Known values of {@link DocumentState} that the service accepts. */
export declare enum KnownDocumentState {
    Uploaded = "uploaded",
    Review = "review",
    Validated = "validated",
    Archived = "archived",
    Rejected = "rejected"
}

/** Known values of {@link Enum2} that the service accepts. */
export declare enum KnownEnum2 {
    Resumes = "resumes",
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link Enum5} that the service accepts. */
export declare enum KnownEnum5 {
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

/** Known values of {@link PatchContentSchemaStatus} that the service accepts. */
export declare enum KnownPatchContentSchemaStatus {
    Accepted = "accepted",
    Declined = "declined"
}

/** Known values of {@link PostContentSchemaDocumentType} that the service accepts. */
export declare enum KnownPostContentSchemaDocumentType {
    Resumes = "resumes",
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link ResumeSearchParametersCustomDataFilterType} that the service accepts. */
export declare enum KnownResumeSearchParametersCustomDataFilterType {
    Equals = "equals",
    Range = "range"
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
    Footer = "Footer"
}

/** Known values of {@link WorkspaceVisibility} that the service accepts. */
export declare enum KnownWorkspaceVisibility {
    Organization = "organization",
    Private = "private"
}

export declare type LanguageAnnotation = Annotation & {
    parsed?: string;
};

export declare interface LanguagesSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

export declare interface ListResult {
    /** Number of items in results */
    count: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
}

export declare interface Location {
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
}

export declare type LocationAnnotation = Annotation & {
    parsed?: Location;
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
    /** This is true if the "confirm" button has been clicked in the Affinda validation tool */
    isVerified?: boolean;
    /** Signed URL (valid for 60 minutes) to access the validation tool.  Not applicable for documents types such a resumes. */
    reviewUrl?: string;
    /** The overall confidence in the conversion of image to text.  (only applicable for images or PDF documents without a text layer) */
    ocrConfidence?: number;
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

/**
 * Defines values for PatchContentSchemaStatus. \
 * {@link KnownPatchContentSchemaStatus} can be used interchangeably with PatchContentSchemaStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **accepted** \
 * **declined**
 */
export declare type PatchContentSchemaStatus = string;

export declare interface Paths171Dpm5OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: OrganizationMembership[];
}

export declare interface Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema {
    name?: string;
    documentType?: Enum5;
}

export declare interface Paths1Vlpqy9WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results: WorkspaceMembership[];
}

export declare interface Paths2T1Oc0ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema {
    configOverride?: ResumeSearchConfig;
}

export declare interface Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema {
    /** Number of indexes in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Get200ApplicationJsonPropertiesItemsItem[];
}

export declare type PathsAdr1YhWorkspaceMembershipsGetResponses200ContentApplicationJsonSchema = ListResult & Paths1Vlpqy9WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare type PathsCkdzu3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema = PaginatedResponse & Paths171Dpm5OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare interface PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema {
    /** Unique identifier for the document. */
    document?: string;
}

export declare interface PathsFqn8P8JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema {
    configOverride?: JobDescriptionSearchConfig;
}

export declare interface PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema {
    document?: string;
}

export declare interface PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems {
    document?: string;
}

export declare interface PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema {
    /** Number of indexed documents in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems[];
}

export declare interface PathsSnpek6InvitationsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: Invitation[];
}

export declare interface PathsW51LnrInvitationsTokenPatchRequestbodyContentApplicationJsonSchema {
    status?: PatchContentSchemaStatus;
}

export declare interface PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema {
    /** Number of indexes in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: User[];
}

export declare type PathsZt2JhiInvitationsGetResponses200ContentApplicationJsonSchema = PaginatedResponse & PathsSnpek6InvitationsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

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

export declare interface RedactedResume {
    data: RedactedResumeData | null;
    meta: Meta;
    error: ErrorModel;
}

export declare interface RedactedResumeData {
    /** URL to redacted PDF */
    redactedPdf?: string;
}

/** RedactedResumeRequestBody */
export declare interface RedactedResumeRequestBody {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** A random string that uniquely identify the resource. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to a resume to download and process */
    url?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Whether to redact headshot */
    redactHeadshot?: string;
    /** Whether to redact personal details (e.g. name, address) */
    redactPersonalDetails?: string;
    /** Whether to redact work details (e.g. company names) */
    redactWorkDetails?: string;
    /** Whether to redact education details (e.g. university names) */
    redactEducationDetails?: string;
    /** Whether to redact referee details */
    redactReferees?: string;
    /** Whether to redact location names */
    redactLocations?: string;
    /** Whether to redact dates */
    redactDates?: string;
    /** Whether to redact gender */
    redactGender?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
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

export declare interface Resume {
    /** A JSON-encoded string of the `ResumeData` object. */
    data: ResumeData | null;
    meta: Meta;
    error: ErrorModel;
}

/** A JSON-encoded string of the `ResumeData` object. */
export declare interface ResumeData {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    name?: ResumeDataName;
    phoneNumbers?: string[];
    websites?: string[];
    emails?: string[];
    dateOfBirth?: string;
    location?: Location;
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
}

export declare interface ResumeDataName {
    raw?: string;
    first?: string;
    last?: string;
    middle?: string;
    title?: string;
}

export declare interface ResumeDataRefereesItem {
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
    location?: Location;
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
}

export declare interface ResumeDataWorkExperienceItemOccupation {
    /** The raw (not normalized) job title pulled from the work experience entry */
    jobTitle?: string;
    /** Mapped onto the EMSI job title taxonomy if a sufficiently close match exists. */
    jobTitleNormalized?: string;
    managementLevel?: ManagementLevel;
    classification?: Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification;
}

/** ResumeRequestBody */
export declare interface ResumeRequestBody {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to a resume to download and process */
    url?: string;
    /** A JSON-encoded string of the `ResumeData` object. */
    data?: ResumeData;
    /** A random string that uniquely identify the resource. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document. If "false" (default), will parse the document normally whether its a duplicate or not. */
    rejectDuplicates?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
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

export declare type ResumeSearchDetailLocationValue = Location & ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1 & {};

export declare interface ResumeSearchDetailManagementLevel {
    level?: ManagementLevel;
    match?: boolean;
}

export declare interface ResumeSearchDetailOccupationGroup {
    missing?: number[];
    value?: ResumeSearchDetailOccupationGroupValueItem[];
}

export declare type ResumeSearchDetailOccupationGroupValueItem = OccupationGroup & ComponentsK7P1F5SchemasResumesearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1 & {};

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

export declare interface ResumeSearchParametersCustomData {
    filterType: ResumeSearchParametersCustomDataFilterType;
    dataPoint: string;
    /** "equals" searches require the "value" key inside the query, and "range" searches require at least one of "gte" (greater than or equal) and "lte" (less than or equal) */
    query: Record<string, unknown>;
    required?: boolean;
    weight?: number;
}

/**
 * Defines values for ResumeSearchParametersCustomDataFilterType. \
 * {@link KnownResumeSearchParametersCustomDataFilterType} can be used interchangeably with ResumeSearchParametersCustomDataFilterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **equals** \
 * **range**
 */
export declare type ResumeSearchParametersCustomDataFilterType = string;

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
    pdf: string;
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
 * **Footer**
 */
export declare type ResumeSkillSourcesItemSection = string;

export declare interface RowAnnotation {
    code?: string;
    date?: string;
    description?: string;
    unit?: string;
    unitPrice?: number;
    quantity?: number;
    discount?: string;
    baseTotal?: number;
    taxRate?: string;
    taxTotal?: number;
    total?: number;
    other?: string;
    /** Dictionary of <any> */
    customFields?: {
        [propertyName: string]: any;
    };
}

export declare interface SearchExpressionSearchScoreComponent {
    label: string;
    value?: string;
    score?: number;
}

/** Defines values for SearchLocationUnit. */
export declare type SearchLocationUnit = "km" | "mi";

export declare type SkillAnnotation = Annotation & {
    parsed?: string;
};

export declare interface SkillsSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
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

export declare interface User {
    /** Uniquely identify a user. */
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    /** URL of the user's avatar. */
    avatar?: string;
}

export declare interface UserCreateRequest {
    name?: string;
    username: string;
    email: string;
    /** Upload avatar for the user. */
    avatar?: coreRestPipeline.RequestBodyType;
}

export declare type UserCreateResponse = User & {
    /** API key used to authenticate for future requests. This key is only retrievable at the initial creation of the user. */
    apiKey?: string;
};

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
    members?: User[];
    /** Number of unvalidated documents in the workspace. */
    unvalidatedDocsCount?: number;
    /** Number of validated documents in the workspace. */
    confirmedDocsCount?: number;
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
    /** Extractor's ID. */
    id: number;
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
