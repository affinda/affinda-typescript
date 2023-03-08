import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { AffindaAPIContext } from "./affindaAPIContext";
import {
  AffindaAPIOptionalParams,
  ResumeSearchParameters,
  AffindaAPICreateResumeSearchOptionalParams,
  AffindaAPICreateResumeSearchResponse,
  AffindaAPIGetResumeSearchDetailOptionalParams,
  AffindaAPIGetResumeSearchDetailResponse,
  AffindaAPIGetResumeSearchMatchOptionalParams,
  AffindaAPIGetResumeSearchMatchResponse,
  AffindaAPIGetResumeSearchConfigOptionalParams,
  AffindaAPIGetResumeSearchConfigResponse,
  ResumeSearchConfig,
  AffindaAPIUpdateResumeSearchConfigOptionalParams,
  AffindaAPIUpdateResumeSearchConfigResponse,
  AffindaAPICreateResumeSearchEmbedUrlOptionalParams,
  AffindaAPICreateResumeSearchEmbedUrlResponse,
  AffindaAPIGetResumeSearchSuggestionJobTitleOptionalParams,
  AffindaAPIGetResumeSearchSuggestionJobTitleResponse,
  AffindaAPIGetResumeSearchSuggestionSkillOptionalParams,
  AffindaAPIGetResumeSearchSuggestionSkillResponse,
  JobDescriptionSearchParameters,
  AffindaAPICreateJobDescriptionSearchOptionalParams,
  AffindaAPICreateJobDescriptionSearchResponse,
  AffindaAPIGetJobDescriptionSearchDetailOptionalParams,
  AffindaAPIGetJobDescriptionSearchDetailResponse,
  AffindaAPIGetJobDescriptionSearchConfigOptionalParams,
  AffindaAPIGetJobDescriptionSearchConfigResponse,
  JobDescriptionSearchConfig,
  AffindaAPIUpdateJobDescriptionSearchConfigOptionalParams,
  AffindaAPIUpdateJobDescriptionSearchConfigResponse,
  AffindaAPICreateJobDescriptionSearchEmbedUrlOptionalParams,
  AffindaAPICreateJobDescriptionSearchEmbedUrlResponse,
  AffindaAPIGetAllIndexesOptionalParams,
  AffindaAPIGetAllIndexesResponse,
  AffindaAPICreateIndexOptionalParams,
  AffindaAPICreateIndexResponse,
  AffindaAPIDeleteIndexOptionalParams,
  AffindaAPIGetAllIndexDocumentsOptionalParams,
  AffindaAPIGetAllIndexDocumentsResponse,
  PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema,
  AffindaAPICreateIndexDocumentOptionalParams,
  AffindaAPICreateIndexDocumentResponse,
  AffindaAPIDeleteIndexDocumentOptionalParams,
  AffindaAPIListOccupationGroupsOptionalParams,
  AffindaAPIListOccupationGroupsResponse,
  AffindaAPIGetAllOrganizationsOptionalParams,
  AffindaAPIGetAllOrganizationsResponse,
  AffindaAPICreateOrganizationOptionalParams,
  AffindaAPICreateOrganizationResponse,
  AffindaAPIGetOrganizationOptionalParams,
  AffindaAPIGetOrganizationResponse,
  AffindaAPIUpdateOrganizationOptionalParams,
  AffindaAPIUpdateOrganizationResponse,
  AffindaAPIDeleteOrganizationOptionalParams,
  AffindaAPIGetAllOrganizationMembershipsOptionalParams,
  AffindaAPIGetAllOrganizationMembershipsResponse,
  AffindaAPIGetOrganizationMembershipOptionalParams,
  AffindaAPIGetOrganizationMembershipResponse,
  OrganizationMembershipUpdate,
  AffindaAPIUpdateOrganizationMembershipOptionalParams,
  AffindaAPIUpdateOrganizationMembershipResponse,
  AffindaAPIDeleteOrganizationMembershipOptionalParams,
  AffindaAPIGetAllInvitationsOptionalParams,
  AffindaAPIGetAllInvitationsResponse,
  InvitationCreate,
  AffindaAPICreateInvitationOptionalParams,
  AffindaAPICreateInvitationResponse,
  AffindaAPIGetInvitationOptionalParams,
  AffindaAPIGetInvitationResponse,
  InvitationUpdate,
  AffindaAPIUpdateInvitationOptionalParams,
  AffindaAPIUpdateInvitationResponse,
  AffindaAPIDeleteInvitationOptionalParams,
  AffindaAPIGetInvitationByTokenOptionalParams,
  AffindaAPIGetInvitationByTokenResponse,
  InvitationResponse,
  AffindaAPIRespondToInvitationOptionalParams,
  AffindaAPIRespondToInvitationResponse,
  AffindaAPIGetAllExtractorsOptionalParams,
  AffindaAPIGetAllExtractorsResponse,
  AffindaAPICreateExtractorOptionalParams,
  AffindaAPICreateExtractorResponse,
  AffindaAPIGetExtractorOptionalParams,
  AffindaAPIGetExtractorResponse,
  ExtractorUpdate,
  AffindaAPIUpdateExtractorOptionalParams,
  AffindaAPIUpdateExtractorResponse,
  AffindaAPIDeleteExtractorOptionalParams,
  AffindaAPIGetAllDataPointsOptionalParams,
  AffindaAPIGetAllDataPointsResponse,
  AffindaAPICreateDataPointOptionalParams,
  AffindaAPICreateDataPointResponse,
  AffindaAPIGetDataPointOptionalParams,
  AffindaAPIGetDataPointResponse,
  DataPointUpdate,
  AffindaAPIUpdateDataPointOptionalParams,
  AffindaAPIUpdateDataPointResponse,
  AffindaAPIDeleteDataPointOptionalParams,
  AffindaAPIGetDataPointChoicesOptionalParams,
  AffindaAPIGetDataPointChoicesResponse,
  AffindaAPIGetAllWorkspacesOptionalParams,
  AffindaAPIGetAllWorkspacesResponse,
  WorkspaceCreate,
  AffindaAPICreateWorkspaceOptionalParams,
  AffindaAPICreateWorkspaceResponse,
  AffindaAPIGetWorkspaceOptionalParams,
  AffindaAPIGetWorkspaceResponse,
  WorkspaceUpdate,
  AffindaAPIUpdateWorkspaceOptionalParams,
  AffindaAPIUpdateWorkspaceResponse,
  AffindaAPIDeleteWorkspaceOptionalParams,
  AffindaAPIGetAllWorkspaceMembershipsOptionalParams,
  AffindaAPIGetAllWorkspaceMembershipsResponse,
  WorkspaceMembershipCreate,
  AffindaAPICreateWorkspaceMembershipOptionalParams,
  AffindaAPICreateWorkspaceMembershipResponse,
  AffindaAPIGetWorkspaceMembershipOptionalParams,
  AffindaAPIGetWorkspaceMembershipResponse,
  AffindaAPIDeleteWorkspaceMembershipOptionalParams,
  AffindaAPIGetAllCollectionsOptionalParams,
  AffindaAPIGetAllCollectionsResponse,
  CollectionCreate,
  AffindaAPICreateCollectionOptionalParams,
  AffindaAPICreateCollectionResponse,
  AffindaAPIGetCollectionOptionalParams,
  AffindaAPIGetCollectionResponse,
  CollectionUpdate,
  AffindaAPIUpdateCollectionOptionalParams,
  AffindaAPIUpdateCollectionResponse,
  AffindaAPIDeleteCollectionOptionalParams,
  AffindaAPIGetAllDocumentsOptionalParams,
  AffindaAPIGetAllDocumentsResponse,
  AffindaAPICreateDocumentOptionalParams,
  AffindaAPICreateDocumentResponse,
  AffindaAPIGetDocumentOptionalParams,
  AffindaAPIGetDocumentResponse,
  DocumentUpdate,
  AffindaAPIUpdateDocumentOptionalParams,
  AffindaAPIUpdateDocumentResponse,
  AffindaAPIDeleteDocumentOptionalParams,
  AffindaAPIGetAllTagsOptionalParams,
  AffindaAPIGetAllTagsResponse,
  TagCreate,
  AffindaAPICreateTagOptionalParams,
  AffindaAPICreateTagResponse,
  AffindaAPIGetTagOptionalParams,
  AffindaAPIGetTagResponse,
  TagUpdate,
  AffindaAPIUpdateTagOptionalParams,
  AffindaAPIUpdateTagResponse,
  AffindaAPIDeleteTagOptionalParams,
  AffindaAPIGetAllResthookSubscriptionsOptionalParams,
  AffindaAPIGetAllResthookSubscriptionsResponse,
  ResthookSubscriptionCreate,
  AffindaAPICreateResthookSubscriptionOptionalParams,
  AffindaAPICreateResthookSubscriptionResponse,
  AffindaAPIGetResthookSubscriptionOptionalParams,
  AffindaAPIGetResthookSubscriptionResponse,
  ResthookSubscriptionUpdate,
  AffindaAPIUpdateResthookSubscriptionOptionalParams,
  AffindaAPIUpdateResthookSubscriptionResponse,
  AffindaAPIDeleteResthookSubscriptionOptionalParams,
  AffindaAPIActivateResthookSubscriptionOptionalParams,
  AffindaAPIActivateResthookSubscriptionResponse
} from "./models";

export class AffindaAPI extends AffindaAPIContext {
  /**
   * Initializes a new instance of the AffindaAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: AffindaAPIOptionalParams
  ) {
    super(credentials, options);
  }

  /**
   * Searches through parsed resumes. Users have 3 options to create a search:<br /><br /> 1.	Match to a
   * job description - a parsed job description is used to find candidates that suit it<br /> 2.	Match to
   * a resume - a parsed resume is used to find other candidates that have similar attributes<br /> 3.
   * Search using custom criteria<br /><br /> Users should only populate 1 of jobDescription, resume or
   * the custom criteria.
   * @param body Search parameters
   * @param options The options parameters.
   */
  createResumeSearch(
    body: ResumeSearchParameters,
    options?: AffindaAPICreateResumeSearchOptionalParams
  ): Promise<AffindaAPICreateResumeSearchResponse> {
    return this.sendOperationRequest(
      { body, options },
      createResumeSearchOperationSpec
    );
  }

  /**
   * This contains more detailed information about the matching score of the search criteria, or which
   * search criteria is missing in this resume.
   * The `identifier` is the unique ID returned via the [/resume_search](#post-/resume_search) endpoint.
   * @param identifier Resume identifier
   * @param body Search parameters
   * @param options The options parameters.
   */
  getResumeSearchDetail(
    identifier: string,
    body: ResumeSearchParameters,
    options?: AffindaAPIGetResumeSearchDetailOptionalParams
  ): Promise<AffindaAPIGetResumeSearchDetailResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      getResumeSearchDetailOperationSpec
    );
  }

  /**
   * Get the matching score between a resume and a job description. The score ranges between 0 and 1,
   * with 0 being not a match at all, and 1 being perfect match.<br/> Note, this score will not directly
   * match the score returned from POST
   * [/resume_search/details/{identifier}](#post-/resume_search/details/-identifier-).
   * @param resume Identify the resume to match.
   * @param jobDescription Identify the job description to match.
   * @param options The options parameters.
   */
  getResumeSearchMatch(
    resume: string,
    jobDescription: string,
    options?: AffindaAPIGetResumeSearchMatchOptionalParams
  ): Promise<AffindaAPIGetResumeSearchMatchResponse> {
    return this.sendOperationRequest(
      { resume, jobDescription, options },
      getResumeSearchMatchOperationSpec
    );
  }

  /**
   * Return configurations such as which fields can be displayed in the logged in user's embeddable
   * resume search tool, what are their weights, what is the maximum number of results that can be
   * returned, etc.
   * @param options The options parameters.
   */
  getResumeSearchConfig(
    options?: AffindaAPIGetResumeSearchConfigOptionalParams
  ): Promise<AffindaAPIGetResumeSearchConfigResponse> {
    return this.sendOperationRequest(
      { options },
      getResumeSearchConfigOperationSpec
    );
  }

  /**
   * Update configurations such as which fields can be displayed in the logged in user's embeddable
   * resume search tool, what are their weights, what is the maximum number of results that can be
   * returned, etc.
   * @param body
   * @param options The options parameters.
   */
  updateResumeSearchConfig(
    body: ResumeSearchConfig,
    options?: AffindaAPIUpdateResumeSearchConfigOptionalParams
  ): Promise<AffindaAPIUpdateResumeSearchConfigResponse> {
    return this.sendOperationRequest(
      { body, options },
      updateResumeSearchConfigOperationSpec
    );
  }

  /**
   * Create and return a signed URL of the resume search tool which then can be embedded on a web page.
   * An optional parameter `config_override` can be passed to override the user-level configurations of
   * the embeddable resume search tool.
   * @param options The options parameters.
   */
  createResumeSearchEmbedUrl(
    options?: AffindaAPICreateResumeSearchEmbedUrlOptionalParams
  ): Promise<AffindaAPICreateResumeSearchEmbedUrlResponse> {
    return this.sendOperationRequest(
      { options },
      createResumeSearchEmbedUrlOperationSpec
    );
  }

  /**
   * Provided one or more job titles, get related suggestions for your search.
   * @param jobTitles Job title to query suggestions for
   * @param options The options parameters.
   */
  getResumeSearchSuggestionJobTitle(
    jobTitles: string[],
    options?: AffindaAPIGetResumeSearchSuggestionJobTitleOptionalParams
  ): Promise<AffindaAPIGetResumeSearchSuggestionJobTitleResponse> {
    return this.sendOperationRequest(
      { jobTitles, options },
      getResumeSearchSuggestionJobTitleOperationSpec
    );
  }

  /**
   * Provided one or more skills, get related suggestions for your search.
   * @param skills Skill to query suggestions for
   * @param options The options parameters.
   */
  getResumeSearchSuggestionSkill(
    skills: string[],
    options?: AffindaAPIGetResumeSearchSuggestionSkillOptionalParams
  ): Promise<AffindaAPIGetResumeSearchSuggestionSkillResponse> {
    return this.sendOperationRequest(
      { skills, options },
      getResumeSearchSuggestionSkillOperationSpec
    );
  }

  /**
   * Searches through parsed job descriptions. You can search with custom criterias or a resume.
   * @param body Search parameters
   * @param options The options parameters.
   */
  createJobDescriptionSearch(
    body: JobDescriptionSearchParameters | null,
    options?: AffindaAPICreateJobDescriptionSearchOptionalParams
  ): Promise<AffindaAPICreateJobDescriptionSearchResponse> {
    return this.sendOperationRequest(
      { body, options },
      createJobDescriptionSearchOperationSpec
    );
  }

  /**
   * This contains more detailed information about the matching score of the search criteria, or which
   * search criteria is missing in this job description.
   * The `identifier` is the unique ID returned via the
   * [/job_description_search](#post-/job_description_search) endpoint.
   * @param identifier Job Description identifier
   * @param body Search parameters
   * @param options The options parameters.
   */
  getJobDescriptionSearchDetail(
    identifier: string,
    body: JobDescriptionSearchParameters | null,
    options?: AffindaAPIGetJobDescriptionSearchDetailOptionalParams
  ): Promise<AffindaAPIGetJobDescriptionSearchDetailResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      getJobDescriptionSearchDetailOperationSpec
    );
  }

  /**
   * Return configurations such as which fields can be displayed in the logged in user's embeddable job
   * description search tool, what are their weights, what is the maximum number of results that can be
   * returned, etc.
   * @param options The options parameters.
   */
  getJobDescriptionSearchConfig(
    options?: AffindaAPIGetJobDescriptionSearchConfigOptionalParams
  ): Promise<AffindaAPIGetJobDescriptionSearchConfigResponse> {
    return this.sendOperationRequest(
      { options },
      getJobDescriptionSearchConfigOperationSpec
    );
  }

  /**
   * Update configurations such as which fields can be displayed in the logged in user's embeddable job
   * description search tool, what are their weights, what is the maximum number of results that can be
   * returned, etc.
   * @param body
   * @param options The options parameters.
   */
  updateJobDescriptionSearchConfig(
    body: JobDescriptionSearchConfig,
    options?: AffindaAPIUpdateJobDescriptionSearchConfigOptionalParams
  ): Promise<AffindaAPIUpdateJobDescriptionSearchConfigResponse> {
    return this.sendOperationRequest(
      { body, options },
      updateJobDescriptionSearchConfigOperationSpec
    );
  }

  /**
   * Create and return a signed URL of the job description search tool which then can be embedded on a
   * web page. An optional parameter `config_override` can be passed to override the user-level
   * configurations of the embeddable search tool.
   * @param options The options parameters.
   */
  createJobDescriptionSearchEmbedUrl(
    options?: AffindaAPICreateJobDescriptionSearchEmbedUrlOptionalParams
  ): Promise<AffindaAPICreateJobDescriptionSearchEmbedUrlResponse> {
    return this.sendOperationRequest(
      { options },
      createJobDescriptionSearchEmbedUrlOperationSpec
    );
  }

  /**
   * Returns all the indexes
   * @param options The options parameters.
   */
  getAllIndexes(
    options?: AffindaAPIGetAllIndexesOptionalParams
  ): Promise<AffindaAPIGetAllIndexesResponse> {
    return this.sendOperationRequest({ options }, getAllIndexesOperationSpec);
  }

  /**
   * Create an index for the search tool
   * @param options The options parameters.
   */
  createIndex(
    options?: AffindaAPICreateIndexOptionalParams
  ): Promise<AffindaAPICreateIndexResponse> {
    return this.sendOperationRequest({ options }, createIndexOperationSpec);
  }

  /**
   * Deletes the specified index from the database
   * @param name Index name
   * @param options The options parameters.
   */
  deleteIndex(
    name: string,
    options?: AffindaAPIDeleteIndexOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { name, options },
      deleteIndexOperationSpec
    );
  }

  /**
   * Returns all the indexed documents for that index
   * @param name Index name
   * @param options The options parameters.
   */
  getAllIndexDocuments(
    name: string,
    options?: AffindaAPIGetAllIndexDocumentsOptionalParams
  ): Promise<AffindaAPIGetAllIndexDocumentsResponse> {
    return this.sendOperationRequest(
      { name, options },
      getAllIndexDocumentsOperationSpec
    );
  }

  /**
   * Create an indexed document for the search tool
   * @param name Index name
   * @param body Document to index
   * @param options The options parameters.
   */
  createIndexDocument(
    name: string,
    body: PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema,
    options?: AffindaAPICreateIndexDocumentOptionalParams
  ): Promise<AffindaAPICreateIndexDocumentResponse> {
    return this.sendOperationRequest(
      { name, body, options },
      createIndexDocumentOperationSpec
    );
  }

  /**
   * Delete the specified indexed document from the database
   * @param name Index name
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  deleteIndexDocument(
    name: string,
    identifier: string,
    options?: AffindaAPIDeleteIndexDocumentOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { name, identifier, options },
      deleteIndexDocumentOperationSpec
    );
  }

  /**
   * Returns the list of searchable occupation groups.
   * @param options The options parameters.
   */
  listOccupationGroups(
    options?: AffindaAPIListOccupationGroupsOptionalParams
  ): Promise<AffindaAPIListOccupationGroupsResponse> {
    return this.sendOperationRequest(
      { options },
      listOccupationGroupsOperationSpec
    );
  }

  /**
   * Returns all the organizations
   * @param options The options parameters.
   */
  getAllOrganizations(
    options?: AffindaAPIGetAllOrganizationsOptionalParams
  ): Promise<AffindaAPIGetAllOrganizationsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllOrganizationsOperationSpec
    );
  }

  /**
   * Create a new organization.
   * @param name
   * @param options The options parameters.
   */
  createOrganization(
    name: string,
    options?: AffindaAPICreateOrganizationOptionalParams
  ): Promise<AffindaAPICreateOrganizationResponse> {
    return this.sendOperationRequest(
      { name, options },
      createOrganizationOperationSpec
    );
  }

  /**
   * Get detail of an organization.
   * @param identifier Organization identifier.
   * @param options The options parameters.
   */
  getOrganization(
    identifier: string,
    options?: AffindaAPIGetOrganizationOptionalParams
  ): Promise<AffindaAPIGetOrganizationResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getOrganizationOperationSpec
    );
  }

  /**
   * Update the detail of an organization.
   * @param identifier Organization identifier.
   * @param options The options parameters.
   */
  updateOrganization(
    identifier: string,
    options?: AffindaAPIUpdateOrganizationOptionalParams
  ): Promise<AffindaAPIUpdateOrganizationResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      updateOrganizationOperationSpec
    );
  }

  /**
   * Delete the specified organization from the database.
   * @param identifier Organization identifier.
   * @param options The options parameters.
   */
  deleteOrganization(
    identifier: string,
    options?: AffindaAPIDeleteOrganizationOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteOrganizationOperationSpec
    );
  }

  /**
   * Returns all the organization memberships
   * @param options The options parameters.
   */
  getAllOrganizationMemberships(
    options?: AffindaAPIGetAllOrganizationMembershipsOptionalParams
  ): Promise<AffindaAPIGetAllOrganizationMembershipsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllOrganizationMembershipsOperationSpec
    );
  }

  /**
   * Get detail of an organization membership.
   * @param identifier Membership identifier.
   * @param options The options parameters.
   */
  getOrganizationMembership(
    identifier: string,
    options?: AffindaAPIGetOrganizationMembershipOptionalParams
  ): Promise<AffindaAPIGetOrganizationMembershipResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getOrganizationMembershipOperationSpec
    );
  }

  /**
   * The admin users can use this endpoint to update the role of the members within their organization.
   * @param identifier Membership identifier.
   * @param body
   * @param options The options parameters.
   */
  updateOrganizationMembership(
    identifier: string,
    body: OrganizationMembershipUpdate,
    options?: AffindaAPIUpdateOrganizationMembershipOptionalParams
  ): Promise<AffindaAPIUpdateOrganizationMembershipResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateOrganizationMembershipOperationSpec
    );
  }

  /**
   * The admin users can use this endpoint to remove member from their organization. Other users can also
   * use this to leave their organization.
   * @param identifier Membership identifier.
   * @param options The options parameters.
   */
  deleteOrganizationMembership(
    identifier: string,
    options?: AffindaAPIDeleteOrganizationMembershipOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteOrganizationMembershipOperationSpec
    );
  }

  /**
   * Get list of all invitations you created or sent to you.
   * @param options The options parameters.
   */
  getAllInvitations(
    options?: AffindaAPIGetAllInvitationsOptionalParams
  ): Promise<AffindaAPIGetAllInvitationsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllInvitationsOperationSpec
    );
  }

  /**
   * Create a new invitation.
   * @param body Invitation to create.
   * @param options The options parameters.
   */
  createInvitation(
    body: InvitationCreate,
    options?: AffindaAPICreateInvitationOptionalParams
  ): Promise<AffindaAPICreateInvitationResponse> {
    return this.sendOperationRequest(
      { body, options },
      createInvitationOperationSpec
    );
  }

  /**
   * Get detail of an invitation.
   * @param identifier Invitation identifier.
   * @param options The options parameters.
   */
  getInvitation(
    identifier: string,
    options?: AffindaAPIGetInvitationOptionalParams
  ): Promise<AffindaAPIGetInvitationResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getInvitationOperationSpec
    );
  }

  /**
   * Update the detail of an invitation.
   * @param identifier Invitation identifier.
   * @param body
   * @param options The options parameters.
   */
  updateInvitation(
    identifier: string,
    body: InvitationUpdate,
    options?: AffindaAPIUpdateInvitationOptionalParams
  ): Promise<AffindaAPIUpdateInvitationResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateInvitationOperationSpec
    );
  }

  /**
   * Delete the specified invitation from the database.
   * @param identifier Invitation identifier.
   * @param options The options parameters.
   */
  deleteInvitation(
    identifier: string,
    options?: AffindaAPIDeleteInvitationOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteInvitationOperationSpec
    );
  }

  /**
   * Get detail of an invitation using a secret token. This allows users who have not registered/logged
   * in to view the invitation.
   * @param token Invitation token.
   * @param options The options parameters.
   */
  getInvitationByToken(
    token: string,
    options?: AffindaAPIGetInvitationByTokenOptionalParams
  ): Promise<AffindaAPIGetInvitationByTokenResponse> {
    return this.sendOperationRequest(
      { token, options },
      getInvitationByTokenOperationSpec
    );
  }

  /**
   * Choose to accept or decline an invitation.
   * @param token Invitation token.
   * @param body
   * @param options The options parameters.
   */
  respondToInvitation(
    token: string,
    body: InvitationResponse,
    options?: AffindaAPIRespondToInvitationOptionalParams
  ): Promise<AffindaAPIRespondToInvitationResponse> {
    return this.sendOperationRequest(
      { token, body, options },
      respondToInvitationOperationSpec
    );
  }

  /**
   * Returns your custom extractors as well as Affinda's off-the-shelf extractors.
   * @param organization Filter by organization.
   * @param options The options parameters.
   */
  getAllExtractors(
    organization: string,
    options?: AffindaAPIGetAllExtractorsOptionalParams
  ): Promise<AffindaAPIGetAllExtractorsResponse> {
    return this.sendOperationRequest(
      { organization, options },
      getAllExtractorsOperationSpec
    );
  }

  /**
   * Create a custom extractor.
   * @param options The options parameters.
   */
  createExtractor(
    options?: AffindaAPICreateExtractorOptionalParams
  ): Promise<AffindaAPICreateExtractorResponse> {
    return this.sendOperationRequest({ options }, createExtractorOperationSpec);
  }

  /**
   * Return a specific extractor.
   * @param identifier Extractor's identifier
   * @param options The options parameters.
   */
  getExtractor(
    identifier: string,
    options?: AffindaAPIGetExtractorOptionalParams
  ): Promise<AffindaAPIGetExtractorResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getExtractorOperationSpec
    );
  }

  /**
   * Update data of an extractor.
   * @param identifier Extractor's identifier
   * @param body Extractor data to update
   * @param options The options parameters.
   */
  updateExtractor(
    identifier: string,
    body: ExtractorUpdate,
    options?: AffindaAPIUpdateExtractorOptionalParams
  ): Promise<AffindaAPIUpdateExtractorResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateExtractorOperationSpec
    );
  }

  /**
   * Deletes the specified extractor from the database.
   * @param identifier Extractor's identifier
   * @param options The options parameters.
   */
  deleteExtractor(
    identifier: string,
    options?: AffindaAPIDeleteExtractorOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteExtractorOperationSpec
    );
  }

  /**
   * Returns your custom data points as well as Affinda's off-the-shelf data points.
   * @param options The options parameters.
   */
  getAllDataPoints(
    options?: AffindaAPIGetAllDataPointsOptionalParams
  ): Promise<AffindaAPIGetAllDataPointsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllDataPointsOperationSpec
    );
  }

  /**
   * Create a custom data point.
   * @param options The options parameters.
   */
  createDataPoint(
    options?: AffindaAPICreateDataPointOptionalParams
  ): Promise<AffindaAPICreateDataPointResponse> {
    return this.sendOperationRequest({ options }, createDataPointOperationSpec);
  }

  /**
   * Return a specific data point.
   * @param identifier Data point's identifier
   * @param options The options parameters.
   */
  getDataPoint(
    identifier: string,
    options?: AffindaAPIGetDataPointOptionalParams
  ): Promise<AffindaAPIGetDataPointResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getDataPointOperationSpec
    );
  }

  /**
   * Update data of a data point.
   * @param identifier DataPoint's identifier
   * @param body Data point to update
   * @param options The options parameters.
   */
  updateDataPoint(
    identifier: string,
    body: DataPointUpdate,
    options?: AffindaAPIUpdateDataPointOptionalParams
  ): Promise<AffindaAPIUpdateDataPointResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateDataPointOperationSpec
    );
  }

  /**
   * Deletes the specified data point from the database.
   * @param identifier DataPoint's identifier
   * @param options The options parameters.
   */
  deleteDataPoint(
    identifier: string,
    options?: AffindaAPIDeleteDataPointOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteDataPointOperationSpec
    );
  }

  /**
   * Returns available choices for a specific enum data point.
   * @param dataPoint The data point to get choices for.
   * @param options The options parameters.
   */
  getDataPointChoices(
    dataPoint: string,
    options?: AffindaAPIGetDataPointChoicesOptionalParams
  ): Promise<AffindaAPIGetDataPointChoicesResponse> {
    return this.sendOperationRequest(
      { dataPoint, options },
      getDataPointChoicesOperationSpec
    );
  }

  /**
   * Returns your workspaces.
   * @param organization Filter by organization.
   * @param options The options parameters.
   */
  getAllWorkspaces(
    organization: string,
    options?: AffindaAPIGetAllWorkspacesOptionalParams
  ): Promise<AffindaAPIGetAllWorkspacesResponse> {
    return this.sendOperationRequest(
      { organization, options },
      getAllWorkspacesOperationSpec
    );
  }

  /**
   * Create a workspace
   * @param body Workspace to create
   * @param options The options parameters.
   */
  createWorkspace(
    body: WorkspaceCreate,
    options?: AffindaAPICreateWorkspaceOptionalParams
  ): Promise<AffindaAPICreateWorkspaceResponse> {
    return this.sendOperationRequest(
      { body, options },
      createWorkspaceOperationSpec
    );
  }

  /**
   * Return a specific workspace.
   * @param identifier Workspace's identifier
   * @param options The options parameters.
   */
  getWorkspace(
    identifier: string,
    options?: AffindaAPIGetWorkspaceOptionalParams
  ): Promise<AffindaAPIGetWorkspaceResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getWorkspaceOperationSpec
    );
  }

  /**
   * Update a workspace.
   * @param identifier Workspace's identifier
   * @param body Workspace data to update
   * @param options The options parameters.
   */
  updateWorkspace(
    identifier: string,
    body: WorkspaceUpdate,
    options?: AffindaAPIUpdateWorkspaceOptionalParams
  ): Promise<AffindaAPIUpdateWorkspaceResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateWorkspaceOperationSpec
    );
  }

  /**
   * Deletes the specified workspace from the database.
   * @param identifier Workspace's identifier
   * @param options The options parameters.
   */
  deleteWorkspace(
    identifier: string,
    options?: AffindaAPIDeleteWorkspaceOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteWorkspaceOperationSpec
    );
  }

  /**
   * Returns the memberships of your workspaces.
   * @param options The options parameters.
   */
  getAllWorkspaceMemberships(
    options?: AffindaAPIGetAllWorkspaceMembershipsOptionalParams
  ): Promise<AffindaAPIGetAllWorkspaceMembershipsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllWorkspaceMembershipsOperationSpec
    );
  }

  /**
   * Create a workspace membership.
   * @param body
   * @param options The options parameters.
   */
  createWorkspaceMembership(
    body: WorkspaceMembershipCreate,
    options?: AffindaAPICreateWorkspaceMembershipOptionalParams
  ): Promise<AffindaAPICreateWorkspaceMembershipResponse> {
    return this.sendOperationRequest(
      { body, options },
      createWorkspaceMembershipOperationSpec
    );
  }

  /**
   * Return a specific workspace membership.
   * @param identifier Workspace membership's identifier.
   * @param options The options parameters.
   */
  getWorkspaceMembership(
    identifier: string,
    options?: AffindaAPIGetWorkspaceMembershipOptionalParams
  ): Promise<AffindaAPIGetWorkspaceMembershipResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getWorkspaceMembershipOperationSpec
    );
  }

  /**
   * Remove an user from a workspace.
   * @param identifier Workspace membership's identifier.
   * @param options The options parameters.
   */
  deleteWorkspaceMembership(
    identifier: string,
    options?: AffindaAPIDeleteWorkspaceMembershipOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteWorkspaceMembershipOperationSpec
    );
  }

  /**
   * Returns your collections.
   * @param workspace Filter by workspace.
   * @param options The options parameters.
   */
  getAllCollections(
    workspace: string,
    options?: AffindaAPIGetAllCollectionsOptionalParams
  ): Promise<AffindaAPIGetAllCollectionsResponse> {
    return this.sendOperationRequest(
      { workspace, options },
      getAllCollectionsOperationSpec
    );
  }

  /**
   * Create a collection
   * @param body
   * @param options The options parameters.
   */
  createCollection(
    body: CollectionCreate,
    options?: AffindaAPICreateCollectionOptionalParams
  ): Promise<AffindaAPICreateCollectionResponse> {
    return this.sendOperationRequest(
      { body, options },
      createCollectionOperationSpec
    );
  }

  /**
   * Return a specific collection.
   * @param identifier Collection's identifier
   * @param options The options parameters.
   */
  getCollection(
    identifier: string,
    options?: AffindaAPIGetCollectionOptionalParams
  ): Promise<AffindaAPIGetCollectionResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getCollectionOperationSpec
    );
  }

  /**
   * Update data of a collection.
   * @param identifier Collection's identifier
   * @param body Collection data to update
   * @param options The options parameters.
   */
  updateCollection(
    identifier: string,
    body: CollectionUpdate,
    options?: AffindaAPIUpdateCollectionOptionalParams
  ): Promise<AffindaAPIUpdateCollectionResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateCollectionOperationSpec
    );
  }

  /**
   * Deletes the specified collection from the database.
   * @param identifier Collection's identifier
   * @param options The options parameters.
   */
  deleteCollection(
    identifier: string,
    options?: AffindaAPIDeleteCollectionOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteCollectionOperationSpec
    );
  }

  /**
   * Returns all the document summaries for that user, limited to 300 per page.
   * @param options The options parameters.
   */
  getAllDocuments(
    options?: AffindaAPIGetAllDocumentsOptionalParams
  ): Promise<AffindaAPIGetAllDocumentsResponse> {
    return this.sendOperationRequest({ options }, getAllDocumentsOperationSpec);
  }

  /**
   * Uploads a document for parsing. When successful, returns an `identifier` in the response for
   * subsequent use with the [/documents/{identifier}](#get-/v3/documents/-identifier-) endpoint to check
   * processing status and retrieve results.<br/>
   * @param options The options parameters.
   */
  createDocument(
    options?: AffindaAPICreateDocumentOptionalParams
  ): Promise<AffindaAPICreateDocumentResponse> {
    return this.sendOperationRequest({ options }, createDocumentOperationSpec);
  }

  /**
   * Return a specific document.
   * @param identifier Document's identifier
   * @param options The options parameters.
   */
  getDocument(
    identifier: string,
    options?: AffindaAPIGetDocumentOptionalParams
  ): Promise<AffindaAPIGetDocumentResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getDocumentOperationSpec
    );
  }

  /**
   * Update file name, expiry time, or move to another collection, etc.
   * @param identifier Document's identifier
   * @param body Document data to update
   * @param options The options parameters.
   */
  updateDocument(
    identifier: string,
    body: DocumentUpdate,
    options?: AffindaAPIUpdateDocumentOptionalParams
  ): Promise<AffindaAPIUpdateDocumentResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateDocumentOperationSpec
    );
  }

  /**
   * Deletes the specified document from the database.
   * @param identifier Document's identifier
   * @param options The options parameters.
   */
  deleteDocument(
    identifier: string,
    options?: AffindaAPIDeleteDocumentOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteDocumentOperationSpec
    );
  }

  /**
   * Returns your tags.
   * @param options The options parameters.
   */
  getAllTags(
    options?: AffindaAPIGetAllTagsOptionalParams
  ): Promise<AffindaAPIGetAllTagsResponse> {
    return this.sendOperationRequest({ options }, getAllTagsOperationSpec);
  }

  /**
   * Create a tag
   * @param body
   * @param options The options parameters.
   */
  createTag(
    body: TagCreate,
    options?: AffindaAPICreateTagOptionalParams
  ): Promise<AffindaAPICreateTagResponse> {
    return this.sendOperationRequest({ body, options }, createTagOperationSpec);
  }

  /**
   * Return a specific tag.
   * @param id Tag's ID
   * @param options The options parameters.
   */
  getTag(
    id: number,
    options?: AffindaAPIGetTagOptionalParams
  ): Promise<AffindaAPIGetTagResponse> {
    return this.sendOperationRequest({ id, options }, getTagOperationSpec);
  }

  /**
   * Update data of an tag.
   * @param id Tag's ID
   * @param body Tag data to update
   * @param options The options parameters.
   */
  updateTag(
    id: number,
    body: TagUpdate,
    options?: AffindaAPIUpdateTagOptionalParams
  ): Promise<AffindaAPIUpdateTagResponse> {
    return this.sendOperationRequest(
      { id, body, options },
      updateTagOperationSpec
    );
  }

  /**
   * Deletes the specified tag from the database.
   * @param id Tag's ID
   * @param options The options parameters.
   */
  deleteTag(
    id: number,
    options?: AffindaAPIDeleteTagOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest({ id, options }, deleteTagOperationSpec);
  }

  /**
   * Returns your resthook subscriptions.
   * @param options The options parameters.
   */
  getAllResthookSubscriptions(
    options?: AffindaAPIGetAllResthookSubscriptionsOptionalParams
  ): Promise<AffindaAPIGetAllResthookSubscriptionsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllResthookSubscriptionsOperationSpec
    );
  }

  /**
   * After a subscription is sucessfully created, we'll send a POST request to your target URL with a
   * `X-Hook-Secret` header.
   * You need to response to this request with a 200 status code to confirm your subscribe intention.
   * Then, you need to use the `X-Hook-Secret` to activate the subscription using the
   * [/resthook_subscriptions/activate](#post-/v3/resthook_subscriptions/activate) endpoint.
   * For more information, see our help article here - [How do I create a
   * webhook?](https://help.affinda.com/hc/en-au/articles/11474095148569-How-do-I-create-a-webhook)
   * @param body
   * @param options The options parameters.
   */
  createResthookSubscription(
    body: ResthookSubscriptionCreate,
    options?: AffindaAPICreateResthookSubscriptionOptionalParams
  ): Promise<AffindaAPICreateResthookSubscriptionResponse> {
    return this.sendOperationRequest(
      { body, options },
      createResthookSubscriptionOperationSpec
    );
  }

  /**
   * Return a specific resthook subscription.
   * @param id Resthook subscription's ID
   * @param options The options parameters.
   */
  getResthookSubscription(
    id: number,
    options?: AffindaAPIGetResthookSubscriptionOptionalParams
  ): Promise<AffindaAPIGetResthookSubscriptionResponse> {
    return this.sendOperationRequest(
      { id, options },
      getResthookSubscriptionOperationSpec
    );
  }

  /**
   * Update data of a resthook subscription.
   * @param id ResthookSubscription's ID
   * @param body ResthookSubscription data to update
   * @param options The options parameters.
   */
  updateResthookSubscription(
    id: number,
    body: ResthookSubscriptionUpdate,
    options?: AffindaAPIUpdateResthookSubscriptionOptionalParams
  ): Promise<AffindaAPIUpdateResthookSubscriptionResponse> {
    return this.sendOperationRequest(
      { id, body, options },
      updateResthookSubscriptionOperationSpec
    );
  }

  /**
   * Deletes the specified resthook subscription from the database.
   * @param id ResthookSubscription's ID
   * @param options The options parameters.
   */
  deleteResthookSubscription(
    id: number,
    options?: AffindaAPIDeleteResthookSubscriptionOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { id, options },
      deleteResthookSubscriptionOperationSpec
    );
  }

  /**
   * After creating a subscription, we'll send a POST request to your target URL with a `X-Hook-Secret`
   * header.
   * You should response to this with a 200 status code, and use the value of the `X-Hook-Secret` header
   * that you received to activate the subscription using this endpoint.
   * @param xHookSecret The secret received when creating a subscription.
   * @param options The options parameters.
   */
  activateResthookSubscription(
    xHookSecret: string,
    options?: AffindaAPIActivateResthookSubscriptionOptionalParams
  ): Promise<AffindaAPIActivateResthookSubscriptionResponse> {
    return this.sendOperationRequest(
      { xHookSecret, options },
      activateResthookSubscriptionOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createResumeSearchOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ResumeSearch
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getResumeSearchDetailOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/details/{identifier}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchDetail
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getResumeSearchMatchOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/match",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchMatch
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [
    Parameters.resume,
    Parameters.jobDescription,
    Parameters.index,
    Parameters.searchExpression,
    Parameters.jobTitlesWeight,
    Parameters.yearsExperienceWeight,
    Parameters.locationsWeight,
    Parameters.languagesWeight,
    Parameters.skillsWeight,
    Parameters.educationWeight,
    Parameters.searchExpressionWeight,
    Parameters.socCodesWeight,
    Parameters.managementLevelWeight
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const getResumeSearchConfigOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/config",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchConfig
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const updateResumeSearchConfigOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/config",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchConfig
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const createResumeSearchEmbedUrlOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/embed",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchEmbed
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getResumeSearchSuggestionJobTitleOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/suggestion_job_title",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.jobTitles],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const getResumeSearchSuggestionSkillOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/suggestion_skill",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.skills],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createJobDescriptionSearchOperationSpec: coreClient.OperationSpec = {
  path: "/v3/job_description_search",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.JobDescriptionSearch
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getJobDescriptionSearchDetailOperationSpec: coreClient.OperationSpec = {
  path: "/v3/job_description_search/details/{identifier}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescriptionSearchDetail
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getJobDescriptionSearchConfigOperationSpec: coreClient.OperationSpec = {
  path: "/v3/job_description_search/config",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescriptionSearchConfig
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const updateJobDescriptionSearchConfigOperationSpec: coreClient.OperationSpec = {
  path: "/v3/job_description_search/config",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescriptionSearchConfig
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const createJobDescriptionSearchEmbedUrlOperationSpec: coreClient.OperationSpec = {
  path: "/v3/job_description_search/embed",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescriptionSearchEmbed
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body5,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getAllIndexesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.documentType
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createIndexOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [Parameters.name, Parameters.documentType1],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  serializer
};
const deleteIndexOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index/{name}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.name1],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllIndexDocumentsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index/{name}/documents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.name1],
  headerParameters: [Parameters.accept],
  serializer
};
const createIndexDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index/{name}/documents",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body6,
  urlParameters: [Parameters.region, Parameters.name1],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteIndexDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index/{name}/documents/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier, Parameters.name1],
  headerParameters: [Parameters.accept],
  serializer
};
const listOccupationGroupsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/occupation_groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "OccupationGroup" } }
        }
      }
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllOrganizationsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organizations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Organization" } }
        }
      }
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrganizationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organizations",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Organization
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.name2,
    Parameters.avatar,
    Parameters.resthookSignatureKey
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  serializer
};
const getOrganizationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organizations/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Organization
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOrganizationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organizations/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Organization
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.name,
    Parameters.avatar,
    Parameters.resthookSignatureKey
  ],
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  serializer
};
const deleteOrganizationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organizations/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllOrganizationMembershipsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organization_memberships",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.organization,
    Parameters.role
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const getOrganizationMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organization_memberships/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OrganizationMembership
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOrganizationMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organization_memberships/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.OrganizationMembership
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body7,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOrganizationMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organization_memberships/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllInvitationsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.organization,
    Parameters.role,
    Parameters.status
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Invitation
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body8,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Invitation
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const updateInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Invitation
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body9,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvitationByTokenOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations/token/{token}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Invitation
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.token],
  headerParameters: [Parameters.accept],
  serializer
};
const respondToInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations/token/{token}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Invitation
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body10,
  urlParameters: [Parameters.region, Parameters.token],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getAllExtractorsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/extractors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Extractor" } }
        }
      }
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [
    Parameters.organization1,
    Parameters.includePublicExtractors,
    Parameters.name3,
    Parameters.validatable
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createExtractorOperationSpec: coreClient.OperationSpec = {
  path: "/v3/extractors",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Extractor
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body11,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getExtractorOperationSpec: coreClient.OperationSpec = {
  path: "/v3/extractors/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Extractor
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const updateExtractorOperationSpec: coreClient.OperationSpec = {
  path: "/v3/extractors/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Extractor
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body12,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteExtractorOperationSpec: coreClient.OperationSpec = {
  path: "/v3/extractors/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllDataPointsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_points",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "DataPoint" } }
        }
      }
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.organization,
    Parameters.extractor,
    Parameters.slug,
    Parameters.description,
    Parameters.annotationContentType
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createDataPointOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_points",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.DataPoint
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body13,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getDataPointOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_points/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataPoint
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const updateDataPointOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_points/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DataPoint
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body14,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteDataPointOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_points/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const getDataPointChoicesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_point_choices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.dataPoint,
    Parameters.search
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllWorkspacesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Workspace" } }
        }
      }
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.organization1, Parameters.name3],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Workspace
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body15,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const updateWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body16,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllWorkspaceMembershipsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspace_memberships",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.workspace,
    Parameters.user
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createWorkspaceMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspace_memberships",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.WorkspaceMembership
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body17,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getWorkspaceMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspace_memberships/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceMembership
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteWorkspaceMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspace_memberships/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllCollectionsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Collection" } }
        }
      }
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.workspace1],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Collection
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body18,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Collection
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const updateCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Collection
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body19,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllDocumentsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.search,
    Parameters.workspace,
    Parameters.collection,
    Parameters.state,
    Parameters.tags,
    Parameters.createdDt,
    Parameters.ordering,
    Parameters.includeData,
    Parameters.exclude,
    Parameters.inReview
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Document
    },
    201: {
      bodyMapper: Mappers.Document
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  formDataParameters: [
    Parameters.file,
    Parameters.url,
    Parameters.collection1,
    Parameters.workspace2,
    Parameters.wait,
    Parameters.identifier1,
    Parameters.fileName,
    Parameters.expiryTime,
    Parameters.language,
    Parameters.rejectDuplicates
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  serializer
};
const getDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Document
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.format],
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const updateDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Document
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body20,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllTagsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/tags",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Tag" } }
        }
      }
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.offset, Parameters.limit, Parameters.workspace],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createTagOperationSpec: coreClient.OperationSpec = {
  path: "/v3/tags",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Tag
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body21,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getTagOperationSpec: coreClient.OperationSpec = {
  path: "/v3/tags/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Tag
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const updateTagOperationSpec: coreClient.OperationSpec = {
  path: "/v3/tags/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Tag
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body22,
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteTagOperationSpec: coreClient.OperationSpec = {
  path: "/v3/tags/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllResthookSubscriptionsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer
};
const createResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ResthookSubscription
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body23,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResthookSubscription
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const updateResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ResthookSubscription
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  requestBody: Parameters.body24,
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const activateResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions/activate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResthookSubscription
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.xHookSecret],
  serializer
};
