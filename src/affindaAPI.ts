import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  Region,
  AffindaAPIOptionalParams,
  GetAllWorkspacesOptionalParams,
  GetAllWorkspacesResponse,
  WorkspaceCreate,
  CreateWorkspaceOptionalParams,
  CreateWorkspaceResponse,
  GetWorkspaceOptionalParams,
  GetWorkspaceResponse,
  WorkspaceUpdate,
  UpdateWorkspaceOptionalParams,
  UpdateWorkspaceResponse,
  DeleteWorkspaceOptionalParams,
  GetUsageByWorkspaceOptionalParams,
  GetUsageByWorkspaceResponse,
  GetAllWorkspaceMembershipsOptionalParams,
  GetAllWorkspaceMembershipsResponse,
  WorkspaceMembershipCreate,
  CreateWorkspaceMembershipOptionalParams,
  CreateWorkspaceMembershipResponse,
  GetWorkspaceMembershipOptionalParams,
  GetWorkspaceMembershipResponse,
  DeleteWorkspaceMembershipOptionalParams,
  GetAllCollectionsOptionalParams,
  GetAllCollectionsResponse,
  CollectionCreate,
  CreateCollectionOptionalParams,
  CreateCollectionResponse,
  GetCollectionOptionalParams,
  GetCollectionResponse,
  CollectionUpdate,
  UpdateCollectionOptionalParams,
  UpdateCollectionResponse,
  DeleteCollectionOptionalParams,
  DataFieldCreate,
  CreateDataFieldForCollectionOptionalParams,
  CreateDataFieldForCollectionResponse,
  GetDataFieldForCollectionOptionalParams,
  GetDataFieldForCollectionResponse,
  CollectionField,
  UpdateDataFieldForCollectionOptionalParams,
  UpdateDataFieldForCollectionResponse,
  GetUsageByCollectionOptionalParams,
  GetUsageByCollectionResponse,
  GetAllDocumentsOptionalParams,
  GetAllDocumentsResponse,
  CreateDocumentOptionalParams,
  CreateDocumentResponse,
  GetDocumentOptionalParams,
  GetDocumentResponse,
  DocumentUpdate,
  UpdateDocumentOptionalParams,
  UpdateDocumentResponse,
  DeleteDocumentOptionalParams,
  PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema,
  UpdateDocumentDataOptionalParams,
  UpdateDocumentDataResponse,
  BatchAddTagRequest,
  BatchAddTagOptionalParams,
  BatchRemoveTagRequest,
  BatchRemoveTagOptionalParams,
  GetAllValidationResultsOptionalParams,
  GetAllValidationResultsResponse,
  ValidationResultCreate,
  CreateValidationResultOptionalParams,
  CreateValidationResultResponse,
  GetValidationResultOptionalParams,
  GetValidationResultResponse,
  ValidationResultUpdate,
  UpdateValidationResultOptionalParams,
  UpdateValidationResultResponse,
  DeleteValidationResultOptionalParams,
  BatchCreateValidationResultsOptionalParams,
  BatchCreateValidationResultsResponse,
  BatchDeleteValidationResultsRequest,
  BatchDeleteValidationResultsOptionalParams,
  GetAllDocumentSplittersOptionalParams,
  GetAllDocumentSplittersResponse,
  GetDocumentSplitterOptionalParams,
  GetDocumentSplitterResponse,
  DocumentEditRequest,
  EditDocumentPagesOptionalParams,
  EditDocumentPagesResponse,
  GetAllExtractorsOptionalParams,
  GetAllExtractorsResponse,
  CreateExtractorOptionalParams,
  CreateExtractorResponse,
  GetExtractorOptionalParams,
  GetExtractorResponse,
  ExtractorUpdate,
  UpdateExtractorOptionalParams,
  UpdateExtractorResponse,
  DeleteExtractorOptionalParams,
  GetAllDataPointsOptionalParams,
  GetAllDataPointsResponse,
  CreateDataPointOptionalParams,
  CreateDataPointResponse,
  GetDataPointOptionalParams,
  GetDataPointResponse,
  DataPointUpdate,
  UpdateDataPointOptionalParams,
  UpdateDataPointResponse,
  DeleteDataPointOptionalParams,
  GetDataPointChoicesOptionalParams,
  GetDataPointChoicesResponse,
  CreateDataPointChoiceOptionalParams,
  CreateDataPointChoiceResponse,
  GetDataPointChoiceOptionalParams,
  GetDataPointChoiceResponse,
  DataPointChoiceUpdate,
  UpdateDataPointChoiceOptionalParams,
  UpdateDataPointChoiceResponse,
  DeleteDataPointChoiceOptionalParams,
  ReplaceDataPointChoicesOptionalParams,
  ReplaceDataPointChoicesResponse,
  GetAllAnnotationsOptionalParams,
  GetAllAnnotationsResponse,
  AnnotationCreate,
  CreateAnnotationOptionalParams,
  CreateAnnotationResponse,
  GetAnnotationOptionalParams,
  GetAnnotationResponse,
  AnnotationUpdate,
  UpdateAnnotationOptionalParams,
  UpdateAnnotationResponse,
  DeleteAnnotationOptionalParams,
  DeleteAnnotationResponse,
  BatchCreateAnnotationsOptionalParams,
  BatchCreateAnnotationsResponse,
  AnnotationBatchUpdate,
  BatchUpdateAnnotationsOptionalParams,
  BatchUpdateAnnotationsResponse,
  BatchDeleteAnnotationsOptionalParams,
  BatchDeleteAnnotationsOperationResponse,
  MappingDataSourceCreate,
  CreateMappingDataSourceOptionalParams,
  CreateMappingDataSourceResponse,
  ListMappingDataSourcesOptionalParams,
  ListMappingDataSourcesResponse,
  GetMappingDataSourceOptionalParams,
  GetMappingDataSourceResponse,
  DeleteMappingDataSourceOptionalParams,
  ListMappingDataSourceValuesOptionalParams,
  ListMappingDataSourceValuesResponse,
  ReplaceMappingDataSourceValuesOptionalParams,
  ReplaceMappingDataSourceValuesResponse,
  AddMappingDataSourceValueOptionalParams,
  AddMappingDataSourceValueResponse,
  GetMappingDataSourceValueOptionalParams,
  GetMappingDataSourceValueResponse,
  DeleteMappingDataSourceValueOptionalParams,
  MappingCreate,
  CreateMappingOptionalParams,
  CreateMappingResponse,
  ListMappingsOptionalParams,
  ListMappingsResponse,
  GetMappingOptionalParams,
  GetMappingResponse,
  DeleteMappingOptionalParams,
  MappingUpdate,
  UpdateMappingOptionalParams,
  UpdateMappingResponse,
  GetAllTagsOptionalParams,
  GetAllTagsResponse,
  TagCreate,
  CreateTagOptionalParams,
  CreateTagResponse,
  GetTagOptionalParams,
  GetTagResponse,
  TagUpdate,
  UpdateTagOptionalParams,
  UpdateTagResponse,
  DeleteTagOptionalParams,
  GetAllOrganizationsOptionalParams,
  GetAllOrganizationsResponse,
  CreateOrganizationOptionalParams,
  CreateOrganizationResponse,
  GetOrganizationOptionalParams,
  GetOrganizationResponse,
  UpdateOrganizationOptionalParams,
  UpdateOrganizationResponse,
  DeleteOrganizationOptionalParams,
  GetAllOrganizationMembershipsOptionalParams,
  GetAllOrganizationMembershipsResponse,
  GetOrganizationMembershipOptionalParams,
  GetOrganizationMembershipResponse,
  OrganizationMembershipUpdate,
  UpdateOrganizationMembershipOptionalParams,
  UpdateOrganizationMembershipResponse,
  DeleteOrganizationMembershipOptionalParams,
  GetAllInvitationsOptionalParams,
  GetAllInvitationsResponse,
  InvitationCreate,
  CreateInvitationOptionalParams,
  CreateInvitationResponse,
  GetInvitationOptionalParams,
  GetInvitationResponse,
  InvitationUpdate,
  UpdateInvitationOptionalParams,
  UpdateInvitationResponse,
  DeleteInvitationOptionalParams,
  GetInvitationByTokenOptionalParams,
  GetInvitationByTokenResponse,
  InvitationResponse,
  RespondToInvitationOptionalParams,
  RespondToInvitationResponse,
  GetAllApiUsersOptionalParams,
  GetAllApiUsersResponse,
  ApiUserCreate,
  CreateApiUserOptionalParams,
  CreateApiUserResponse,
  GetApiUserOptionalParams,
  GetApiUserResponse,
  ApiUserUpdate,
  UpdateApiUserOptionalParams,
  UpdateApiUserResponse,
  DeleteApiUserOptionalParams,
  RegenerateApiKeyForApiUserOptionalParams,
  RegenerateApiKeyForApiUserResponse,
  GetAllResthookSubscriptionsOptionalParams,
  GetAllResthookSubscriptionsResponse,
  ResthookSubscriptionCreate,
  CreateResthookSubscriptionOptionalParams,
  CreateResthookSubscriptionResponse,
  GetResthookSubscriptionOptionalParams,
  GetResthookSubscriptionResponse,
  ResthookSubscriptionUpdate,
  UpdateResthookSubscriptionOptionalParams,
  UpdateResthookSubscriptionResponse,
  DeleteResthookSubscriptionOptionalParams,
  ActivateResthookSubscriptionOptionalParams,
  ActivateResthookSubscriptionResponse,
  ListOccupationGroupsOptionalParams,
  ListOccupationGroupsResponse,
  ResumeSearchParameters,
  CreateResumeSearchOptionalParams,
  CreateResumeSearchResponse,
  GetResumeSearchDetailOptionalParams,
  GetResumeSearchDetailResponse,
  GetResumeSearchConfigOptionalParams,
  GetResumeSearchConfigResponse,
  ResumeSearchConfig,
  UpdateResumeSearchConfigOptionalParams,
  UpdateResumeSearchConfigResponse,
  CreateResumeSearchEmbedUrlOptionalParams,
  CreateResumeSearchEmbedUrlResponse,
  GetResumeSearchMatchOptionalParams,
  GetResumeSearchMatchResponse,
  GetResumeSearchSuggestionJobTitleOptionalParams,
  GetResumeSearchSuggestionJobTitleResponse,
  GetResumeSearchSuggestionSkillOptionalParams,
  GetResumeSearchSuggestionSkillResponse,
  JobDescriptionSearchParameters,
  CreateJobDescriptionSearchOptionalParams,
  CreateJobDescriptionSearchResponse,
  GetJobDescriptionSearchDetailOptionalParams,
  GetJobDescriptionSearchDetailResponse,
  GetJobDescriptionSearchConfigOptionalParams,
  GetJobDescriptionSearchConfigResponse,
  JobDescriptionSearchConfig,
  UpdateJobDescriptionSearchConfigOptionalParams,
  UpdateJobDescriptionSearchConfigResponse,
  CreateJobDescriptionSearchEmbedUrlOptionalParams,
  CreateJobDescriptionSearchEmbedUrlResponse,
  GetAllIndexesOptionalParams,
  GetAllIndexesResponse,
  IndexCreate,
  CreateIndexOptionalParams,
  CreateIndexResponse,
  IndexUpdate,
  UpdateIndexOptionalParams,
  UpdateIndexResponse,
  DeleteIndexOptionalParams,
  GetAllIndexDocumentsOptionalParams,
  GetAllIndexDocumentsResponse,
  PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema,
  CreateIndexDocumentOptionalParams,
  CreateIndexDocumentResponse,
  DeleteIndexDocumentOptionalParams,
  ReIndexDocumentOptionalParams,
} from "./models";

export class AffindaAPI extends coreClient.ServiceClient {
  region: Region;

  /**
   * Initializes a new instance of the AffindaAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: AffindaAPIOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AffindaAPIOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-affinda/7.4.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://{region}.affinda.com",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }

    // Assigning values to Constant parameters
    this.region = options.region || "api";
  }

  /**
   * Returns your workspaces.
   * @param organization Filter by organization.
   * @param options The options parameters.
   */
  getAllWorkspaces(
    organization: string,
    options?: GetAllWorkspacesOptionalParams,
  ): Promise<GetAllWorkspacesResponse> {
    return this.sendOperationRequest(
      { organization, options },
      getAllWorkspacesOperationSpec,
    );
  }

  /**
   * Create a workspace
   * @param body Workspace to create
   * @param options The options parameters.
   */
  createWorkspace(
    body: WorkspaceCreate,
    options?: CreateWorkspaceOptionalParams,
  ): Promise<CreateWorkspaceResponse> {
    return this.sendOperationRequest(
      { body, options },
      createWorkspaceOperationSpec,
    );
  }

  /**
   * Return a specific workspace.
   * @param identifier Workspace's identifier
   * @param options The options parameters.
   */
  getWorkspace(
    identifier: string,
    options?: GetWorkspaceOptionalParams,
  ): Promise<GetWorkspaceResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getWorkspaceOperationSpec,
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
    options?: UpdateWorkspaceOptionalParams,
  ): Promise<UpdateWorkspaceResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateWorkspaceOperationSpec,
    );
  }

  /**
   * Deletes the specified workspace from the database.
   * @param identifier Workspace's identifier
   * @param options The options parameters.
   */
  deleteWorkspace(
    identifier: string,
    options?: DeleteWorkspaceOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteWorkspaceOperationSpec,
    );
  }

  /**
   * Return monthly credits consumption of a workspace.
   * @param identifier Workspace's identifier
   * @param options The options parameters.
   */
  getUsageByWorkspace(
    identifier: string,
    options?: GetUsageByWorkspaceOptionalParams,
  ): Promise<GetUsageByWorkspaceResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getUsageByWorkspaceOperationSpec,
    );
  }

  /**
   * Returns the memberships of your workspaces.
   * @param options The options parameters.
   */
  getAllWorkspaceMemberships(
    options?: GetAllWorkspaceMembershipsOptionalParams,
  ): Promise<GetAllWorkspaceMembershipsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllWorkspaceMembershipsOperationSpec,
    );
  }

  /**
   * Create a workspace membership.
   * @param body
   * @param options The options parameters.
   */
  createWorkspaceMembership(
    body: WorkspaceMembershipCreate,
    options?: CreateWorkspaceMembershipOptionalParams,
  ): Promise<CreateWorkspaceMembershipResponse> {
    return this.sendOperationRequest(
      { body, options },
      createWorkspaceMembershipOperationSpec,
    );
  }

  /**
   * Return a specific workspace membership.
   * @param identifier Workspace membership's identifier.
   * @param options The options parameters.
   */
  getWorkspaceMembership(
    identifier: string,
    options?: GetWorkspaceMembershipOptionalParams,
  ): Promise<GetWorkspaceMembershipResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getWorkspaceMembershipOperationSpec,
    );
  }

  /**
   * Remove an user from a workspace.
   * @param identifier Workspace membership's identifier.
   * @param options The options parameters.
   */
  deleteWorkspaceMembership(
    identifier: string,
    options?: DeleteWorkspaceMembershipOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteWorkspaceMembershipOperationSpec,
    );
  }

  /**
   * Returns your collections.
   * @param workspace Filter by workspace.
   * @param options The options parameters.
   */
  getAllCollections(
    workspace: string,
    options?: GetAllCollectionsOptionalParams,
  ): Promise<GetAllCollectionsResponse> {
    return this.sendOperationRequest(
      { workspace, options },
      getAllCollectionsOperationSpec,
    );
  }

  /**
   * Create a collection
   * @param body
   * @param options The options parameters.
   */
  createCollection(
    body: CollectionCreate,
    options?: CreateCollectionOptionalParams,
  ): Promise<CreateCollectionResponse> {
    return this.sendOperationRequest(
      { body, options },
      createCollectionOperationSpec,
    );
  }

  /**
   * Return a specific collection.
   * @param identifier Collection's identifier
   * @param options The options parameters.
   */
  getCollection(
    identifier: string,
    options?: GetCollectionOptionalParams,
  ): Promise<GetCollectionResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getCollectionOperationSpec,
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
    options?: UpdateCollectionOptionalParams,
  ): Promise<UpdateCollectionResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateCollectionOperationSpec,
    );
  }

  /**
   * Deletes the specified collection from the database.
   * @param identifier Collection's identifier
   * @param options The options parameters.
   */
  deleteCollection(
    identifier: string,
    options?: DeleteCollectionOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteCollectionOperationSpec,
    );
  }

  /**
   * Create data field for a collection along with a new data point.
   * @param identifier Collection's identifier
   * @param body The data field and data point to be created.
   * @param options The options parameters.
   */
  createDataFieldForCollection(
    identifier: string,
    body: DataFieldCreate,
    options?: CreateDataFieldForCollectionOptionalParams,
  ): Promise<CreateDataFieldForCollectionResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      createDataFieldForCollectionOperationSpec,
    );
  }

  /**
   * Get a data field for a collection assosciated with a data point
   * @param identifier Collection's identifier
   * @param datapointIdentifier Datapoint's identifier
   * @param options The options parameters.
   */
  getDataFieldForCollection(
    identifier: string,
    datapointIdentifier: string,
    options?: GetDataFieldForCollectionOptionalParams,
  ): Promise<GetDataFieldForCollectionResponse> {
    return this.sendOperationRequest(
      { identifier, datapointIdentifier, options },
      getDataFieldForCollectionOperationSpec,
    );
  }

  /**
   * Update data field for a collection assosciated with a data point
   * @param identifier Collection's identifier
   * @param datapointIdentifier Datapoint's identifier
   * @param body Data field properties to update
   * @param options The options parameters.
   */
  updateDataFieldForCollection(
    identifier: string,
    datapointIdentifier: string,
    body: CollectionField,
    options?: UpdateDataFieldForCollectionOptionalParams,
  ): Promise<UpdateDataFieldForCollectionResponse> {
    return this.sendOperationRequest(
      { identifier, datapointIdentifier, body, options },
      updateDataFieldForCollectionOperationSpec,
    );
  }

  /**
   * Return monthly credits consumption of a collection.
   * @param identifier Collection's identifier
   * @param options The options parameters.
   */
  getUsageByCollection(
    identifier: string,
    options?: GetUsageByCollectionOptionalParams,
  ): Promise<GetUsageByCollectionResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getUsageByCollectionOperationSpec,
    );
  }

  /**
   * Returns all the document summaries for that user, limited to 300 per page.
   * @param options The options parameters.
   */
  getAllDocuments(
    options?: GetAllDocumentsOptionalParams,
  ): Promise<GetAllDocumentsResponse> {
    return this.sendOperationRequest({ options }, getAllDocumentsOperationSpec);
  }

  /**
   * Uploads a document for parsing. When successful, returns an `identifier` in the response for
   * subsequent use with the [/documents/{identifier}](#get-/v3/documents/-identifier-) endpoint to check
   * processing status and retrieve results.<br/>
   * @param options The options parameters.
   */
  createDocument(
    options?: CreateDocumentOptionalParams,
  ): Promise<CreateDocumentResponse> {
    return this.sendOperationRequest({ options }, createDocumentOperationSpec);
  }

  /**
   * Return a specific document.
   * @param identifier Document's identifier
   * @param options The options parameters.
   */
  getDocument(
    identifier: string,
    options?: GetDocumentOptionalParams,
  ): Promise<GetDocumentResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getDocumentOperationSpec,
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
    options?: UpdateDocumentOptionalParams,
  ): Promise<UpdateDocumentResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateDocumentOperationSpec,
    );
  }

  /**
   * Deletes the specified document from the database.
   * @param identifier Document's identifier
   * @param options The options parameters.
   */
  deleteDocument(
    identifier: string,
    options?: DeleteDocumentOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteDocumentOperationSpec,
    );
  }

  /**
   * Update data of a document.
   * Only applicable for resumes and job descriptions. For other document types, please use the `PATCH
   * /annotations/{id}` endpoint or the `POST /annotations/batch_update` endpoint.
   * @param identifier Resume or Job Description identifier
   * @param body Resume data to update
   * @param options The options parameters.
   */
  updateDocumentData(
    identifier: string,
    body: PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema,
    options?: UpdateDocumentDataOptionalParams,
  ): Promise<UpdateDocumentDataResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateDocumentDataOperationSpec,
    );
  }

  /**
   * Add a tag to documents.
   * Tags are used to group documents together.
   * Tags can be used to filter documents.
   *
   * @param body Specify the tag and the documents to tag
   * @param options The options parameters.
   */
  batchAddTag(
    body: BatchAddTagRequest,
    options?: BatchAddTagOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      batchAddTagOperationSpec,
    );
  }

  /**
   * Remove a tag from documents.
   * @param body Specify the tag and the documents to remove the tag from
   * @param options The options parameters.
   */
  batchRemoveTag(
    body: BatchRemoveTagRequest,
    options?: BatchRemoveTagOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      batchRemoveTagOperationSpec,
    );
  }

  /**
   * Returns the validation results of a document.
   * @param document Filter by document.
   * @param options The options parameters.
   */
  getAllValidationResults(
    document: string,
    options?: GetAllValidationResultsOptionalParams,
  ): Promise<GetAllValidationResultsResponse> {
    return this.sendOperationRequest(
      { document, options },
      getAllValidationResultsOperationSpec,
    );
  }

  /**
   * Create a validation result.
   * @param body
   * @param options The options parameters.
   */
  createValidationResult(
    body: ValidationResultCreate,
    options?: CreateValidationResultOptionalParams,
  ): Promise<CreateValidationResultResponse> {
    return this.sendOperationRequest(
      { body, options },
      createValidationResultOperationSpec,
    );
  }

  /**
   * Return a specific validation result.
   * @param id Validation result's ID.
   * @param options The options parameters.
   */
  getValidationResult(
    id: number,
    options?: GetValidationResultOptionalParams,
  ): Promise<GetValidationResultResponse> {
    return this.sendOperationRequest(
      { id, options },
      getValidationResultOperationSpec,
    );
  }

  /**
   * Update a validation result.
   * @param id Validation result's ID.
   * @param body Validation result data to update
   * @param options The options parameters.
   */
  updateValidationResult(
    id: number,
    body: ValidationResultUpdate,
    options?: UpdateValidationResultOptionalParams,
  ): Promise<UpdateValidationResultResponse> {
    return this.sendOperationRequest(
      { id, body, options },
      updateValidationResultOperationSpec,
    );
  }

  /**
   * Remove validation result.
   * @param id Validation result's ID.
   * @param options The options parameters.
   */
  deleteValidationResult(
    id: number,
    options?: DeleteValidationResultOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { id, options },
      deleteValidationResultOperationSpec,
    );
  }

  /**
   * Batch create validation results.
   * @param body Array of ValidationResultCreate
   * @param options The options parameters.
   */
  batchCreateValidationResults(
    body: ValidationResultCreate[],
    options?: BatchCreateValidationResultsOptionalParams,
  ): Promise<BatchCreateValidationResultsResponse> {
    return this.sendOperationRequest(
      { body, options },
      batchCreateValidationResultsOperationSpec,
    );
  }

  /**
   * Batch delete validation results
   * @param body
   * @param options The options parameters.
   */
  batchDeleteValidationResults(
    body: BatchDeleteValidationResultsRequest,
    options?: BatchDeleteValidationResultsOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      batchDeleteValidationResultsOperationSpec,
    );
  }

  /**
   * Returns all the document splitters visible to the user.
   * @param options The options parameters.
   */
  getAllDocumentSplitters(
    options?: GetAllDocumentSplittersOptionalParams,
  ): Promise<GetAllDocumentSplittersResponse> {
    return this.sendOperationRequest(
      { options },
      getAllDocumentSplittersOperationSpec,
    );
  }

  /**
   * Return a specific document splitter.
   * @param identifier Document splitter's identifier
   * @param options The options parameters.
   */
  getDocumentSplitter(
    identifier: string,
    options?: GetDocumentSplitterOptionalParams,
  ): Promise<GetDocumentSplitterResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getDocumentSplitterOperationSpec,
    );
  }

  /**
   * Split / merge / rotate / delete pages of a document.
   * Documents with multiple pages can be splitted into multiple documents, or merged into one document.
   * Each page can also be rotated. Edit operations will trigger re-parsing of the documents involved.
   *
   * @param identifier Document's identifier
   * @param body Describe how the pages should be edited
   * @param options The options parameters.
   */
  editDocumentPages(
    identifier: string,
    body: DocumentEditRequest,
    options?: EditDocumentPagesOptionalParams,
  ): Promise<EditDocumentPagesResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      editDocumentPagesOperationSpec,
    );
  }

  /**
   * Returns your custom extractors as well as Affinda's off-the-shelf extractors.
   * @param organization Filter by organization.
   * @param options The options parameters.
   */
  getAllExtractors(
    organization: string,
    options?: GetAllExtractorsOptionalParams,
  ): Promise<GetAllExtractorsResponse> {
    return this.sendOperationRequest(
      { organization, options },
      getAllExtractorsOperationSpec,
    );
  }

  /**
   * Create a custom extractor.
   * @param options The options parameters.
   */
  createExtractor(
    options?: CreateExtractorOptionalParams,
  ): Promise<CreateExtractorResponse> {
    return this.sendOperationRequest({ options }, createExtractorOperationSpec);
  }

  /**
   * Return a specific extractor.
   * @param identifier Extractor's identifier
   * @param options The options parameters.
   */
  getExtractor(
    identifier: string,
    options?: GetExtractorOptionalParams,
  ): Promise<GetExtractorResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getExtractorOperationSpec,
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
    options?: UpdateExtractorOptionalParams,
  ): Promise<UpdateExtractorResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateExtractorOperationSpec,
    );
  }

  /**
   * Deletes the specified extractor from the database.
   * @param identifier Extractor's identifier
   * @param options The options parameters.
   */
  deleteExtractor(
    identifier: string,
    options?: DeleteExtractorOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteExtractorOperationSpec,
    );
  }

  /**
   * Returns your custom data points as well as Affinda's off-the-shelf data points.
   * @param options The options parameters.
   */
  getAllDataPoints(
    options?: GetAllDataPointsOptionalParams,
  ): Promise<GetAllDataPointsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllDataPointsOperationSpec,
    );
  }

  /**
   * Create a custom data point.
   * @param options The options parameters.
   */
  createDataPoint(
    options?: CreateDataPointOptionalParams,
  ): Promise<CreateDataPointResponse> {
    return this.sendOperationRequest({ options }, createDataPointOperationSpec);
  }

  /**
   * Return a specific data point.
   * @param identifier Data point's identifier
   * @param options The options parameters.
   */
  getDataPoint(
    identifier: string,
    options?: GetDataPointOptionalParams,
  ): Promise<GetDataPointResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getDataPointOperationSpec,
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
    options?: UpdateDataPointOptionalParams,
  ): Promise<UpdateDataPointResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateDataPointOperationSpec,
    );
  }

  /**
   * Deletes the specified data point from the database.
   * @param identifier DataPoint's identifier
   * @param options The options parameters.
   */
  deleteDataPoint(
    identifier: string,
    options?: DeleteDataPointOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteDataPointOperationSpec,
    );
  }

  /**
   * Returns available choices for a specific enum data point.
   * @param dataPoint The data point to get choices for.
   * @param collection The collection to get choices for.
   * @param options The options parameters.
   */
  getDataPointChoices(
    dataPoint: string,
    collection: string,
    options?: GetDataPointChoicesOptionalParams,
  ): Promise<GetDataPointChoicesResponse> {
    return this.sendOperationRequest(
      { dataPoint, collection, options },
      getDataPointChoicesOperationSpec,
    );
  }

  /**
   * Create a custom data point choice.
   * @param options The options parameters.
   */
  createDataPointChoice(
    options?: CreateDataPointChoiceOptionalParams,
  ): Promise<CreateDataPointChoiceResponse> {
    return this.sendOperationRequest(
      { options },
      createDataPointChoiceOperationSpec,
    );
  }

  /**
   * Return a specific data point choice.
   * @param id Data point choice's ID
   * @param options The options parameters.
   */
  getDataPointChoice(
    id: number,
    options?: GetDataPointChoiceOptionalParams,
  ): Promise<GetDataPointChoiceResponse> {
    return this.sendOperationRequest(
      { id, options },
      getDataPointChoiceOperationSpec,
    );
  }

  /**
   * Update data of a data point choice.
   * @param id Data point choice's ID
   * @param body Data point choice to update
   * @param options The options parameters.
   */
  updateDataPointChoice(
    id: number,
    body: DataPointChoiceUpdate,
    options?: UpdateDataPointChoiceOptionalParams,
  ): Promise<UpdateDataPointChoiceResponse> {
    return this.sendOperationRequest(
      { id, body, options },
      updateDataPointChoiceOperationSpec,
    );
  }

  /**
   * Deletes the specified data point choice from the database.
   * @param id Data point choice's ID
   * @param options The options parameters.
   */
  deleteDataPointChoice(
    id: number,
    options?: DeleteDataPointChoiceOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { id, options },
      deleteDataPointChoiceOperationSpec,
    );
  }

  /**
   * Replace choices of a data point. Existing choices and incoming choices are matched base on their
   * `value`. New `value` will be created, existing `value` will be updated, and `value` not in incoming
   * choices will be deleted.
   * @param options The options parameters.
   */
  replaceDataPointChoices(
    options?: ReplaceDataPointChoicesOptionalParams,
  ): Promise<ReplaceDataPointChoicesResponse> {
    return this.sendOperationRequest(
      { options },
      replaceDataPointChoicesOperationSpec,
    );
  }

  /**
   * Returns your annotations.
   * @param document Filter by document.
   * @param options The options parameters.
   */
  getAllAnnotations(
    document: string,
    options?: GetAllAnnotationsOptionalParams,
  ): Promise<GetAllAnnotationsResponse> {
    return this.sendOperationRequest(
      { document, options },
      getAllAnnotationsOperationSpec,
    );
  }

  /**
   * Create a annotation
   * @param body
   * @param options The options parameters.
   */
  createAnnotation(
    body: AnnotationCreate,
    options?: CreateAnnotationOptionalParams,
  ): Promise<CreateAnnotationResponse> {
    return this.sendOperationRequest(
      { body, options },
      createAnnotationOperationSpec,
    );
  }

  /**
   * Return a specific annotation.
   * @param id Annotation's ID
   * @param options The options parameters.
   */
  getAnnotation(
    id: number,
    options?: GetAnnotationOptionalParams,
  ): Promise<GetAnnotationResponse> {
    return this.sendOperationRequest(
      { id, options },
      getAnnotationOperationSpec,
    );
  }

  /**
   * Update data of an annotation.
   * @param id Annotation's ID
   * @param body Annotation data to update
   * @param options The options parameters.
   */
  updateAnnotation(
    id: number,
    body: AnnotationUpdate,
    options?: UpdateAnnotationOptionalParams,
  ): Promise<UpdateAnnotationResponse> {
    return this.sendOperationRequest(
      { id, body, options },
      updateAnnotationOperationSpec,
    );
  }

  /**
   * Deletes the specified annotation from the database.
   * @param id Annotation's ID
   * @param options The options parameters.
   */
  deleteAnnotation(
    id: number,
    options?: DeleteAnnotationOptionalParams,
  ): Promise<DeleteAnnotationResponse> {
    return this.sendOperationRequest(
      { id, options },
      deleteAnnotationOperationSpec,
    );
  }

  /**
   * Batch create annotations
   * @param body Array of AnnotationCreate
   * @param options The options parameters.
   */
  batchCreateAnnotations(
    body: AnnotationCreate[],
    options?: BatchCreateAnnotationsOptionalParams,
  ): Promise<BatchCreateAnnotationsResponse> {
    return this.sendOperationRequest(
      { body, options },
      batchCreateAnnotationsOperationSpec,
    );
  }

  /**
   * Batch update annotations
   * @param body Array of AnnotationBatchUpdate
   * @param options The options parameters.
   */
  batchUpdateAnnotations(
    body: AnnotationBatchUpdate[],
    options?: BatchUpdateAnnotationsOptionalParams,
  ): Promise<BatchUpdateAnnotationsResponse> {
    return this.sendOperationRequest(
      { body, options },
      batchUpdateAnnotationsOperationSpec,
    );
  }

  /**
   * Batch delete annotations
   * @param body Array of annotation IDs to be deleted
   * @param options The options parameters.
   */
  batchDeleteAnnotations(
    body: number[],
    options?: BatchDeleteAnnotationsOptionalParams,
  ): Promise<BatchDeleteAnnotationsOperationResponse> {
    return this.sendOperationRequest(
      { body, options },
      batchDeleteAnnotationsOperationSpec,
    );
  }

  /**
   * Create a custom mapping data source.
   * @param body A mapping data source is used to map from raw data found by our AI models to records in
   *             your database.
   * @param options The options parameters.
   */
  createMappingDataSource(
    body: MappingDataSourceCreate,
    options?: CreateMappingDataSourceOptionalParams,
  ): Promise<CreateMappingDataSourceResponse> {
    return this.sendOperationRequest(
      { body, options },
      createMappingDataSourceOperationSpec,
    );
  }

  /**
   * Returns the list of all custom mapping data sources.
   * @param options The options parameters.
   */
  listMappingDataSources(
    options?: ListMappingDataSourcesOptionalParams,
  ): Promise<ListMappingDataSourcesResponse> {
    return this.sendOperationRequest(
      { options },
      listMappingDataSourcesOperationSpec,
    );
  }

  /**
   * Return a specific mapping data source.
   * @param identifier Mapping data source's identifier
   * @param options The options parameters.
   */
  getMappingDataSource(
    identifier: string,
    options?: GetMappingDataSourceOptionalParams,
  ): Promise<GetMappingDataSourceResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getMappingDataSourceOperationSpec,
    );
  }

  /**
   * Delete the specified mapping data source from the database.
   * @param identifier Mapping data source's identifier
   * @param options The options parameters.
   */
  deleteMappingDataSource(
    identifier: string,
    options?: DeleteMappingDataSourceOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteMappingDataSourceOperationSpec,
    );
  }

  /**
   * Returns the list of all values in a mapping data source
   * @param identifier Mapping data source's identifier
   * @param options The options parameters.
   */
  listMappingDataSourceValues(
    identifier: string,
    options?: ListMappingDataSourceValuesOptionalParams,
  ): Promise<ListMappingDataSourceValuesResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      listMappingDataSourceValuesOperationSpec,
    );
  }

  /**
   * Replaces the list of all values in a mapping data source
   * @param identifier Mapping data source's identifier
   * @param body Array of AnyObject
   * @param options The options parameters.
   */
  replaceMappingDataSourceValues(
    identifier: string,
    body: Record<string, unknown>[],
    options?: ReplaceMappingDataSourceValuesOptionalParams,
  ): Promise<ReplaceMappingDataSourceValuesResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      replaceMappingDataSourceValuesOperationSpec,
    );
  }

  /**
   * Adds a value to a mapping data source
   * @param identifier Mapping data source's identifier
   * @param body Any object
   * @param options The options parameters.
   */
  addMappingDataSourceValue(
    identifier: string,
    body: Record<string, unknown>,
    options?: AddMappingDataSourceValueOptionalParams,
  ): Promise<AddMappingDataSourceValueResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      addMappingDataSourceValueOperationSpec,
    );
  }

  /**
   * Return a specific mapping dta source value.
   * @param identifier Mapping data source's identifier
   * @param value Mapping Data Source Value's value
   * @param options The options parameters.
   */
  getMappingDataSourceValue(
    identifier: string,
    value: string,
    options?: GetMappingDataSourceValueOptionalParams,
  ): Promise<GetMappingDataSourceValueResponse> {
    return this.sendOperationRequest(
      { identifier, value, options },
      getMappingDataSourceValueOperationSpec,
    );
  }

  /**
   * Delete the specified mapping data source value from the database.
   * @param identifier Mapping data source's identifier
   * @param value Mapping Data Source Value's value
   * @param options The options parameters.
   */
  deleteMappingDataSourceValue(
    identifier: string,
    value: string,
    options?: DeleteMappingDataSourceValueOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, value, options },
      deleteMappingDataSourceValueOperationSpec,
    );
  }

  /**
   * Create a custom mapping.
   * @param body
   * @param options The options parameters.
   */
  createMapping(
    body: MappingCreate,
    options?: CreateMappingOptionalParams,
  ): Promise<CreateMappingResponse> {
    return this.sendOperationRequest(
      { body, options },
      createMappingOperationSpec,
    );
  }

  /**
   * Returns the list of all custom data mappings.
   * @param mappingDataSource Mapping data source's identifier
   * @param options The options parameters.
   */
  listMappings(
    mappingDataSource: string,
    options?: ListMappingsOptionalParams,
  ): Promise<ListMappingsResponse> {
    return this.sendOperationRequest(
      { mappingDataSource, options },
      listMappingsOperationSpec,
    );
  }

  /**
   * Return a specific mapping.
   * @param identifier Mapping's identifier
   * @param options The options parameters.
   */
  getMapping(
    identifier: string,
    options?: GetMappingOptionalParams,
  ): Promise<GetMappingResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getMappingOperationSpec,
    );
  }

  /**
   * Delete the specified mapping from the database.
   * @param identifier Mapping's identifier
   * @param options The options parameters.
   */
  deleteMapping(
    identifier: string,
    options?: DeleteMappingOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteMappingOperationSpec,
    );
  }

  /**
   * Updates a specific mapping.
   * @param identifier Mapping's identifier
   * @param body
   * @param options The options parameters.
   */
  updateMapping(
    identifier: string,
    body: MappingUpdate,
    options?: UpdateMappingOptionalParams,
  ): Promise<UpdateMappingResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateMappingOperationSpec,
    );
  }

  /**
   * Returns your tags.
   * @param options The options parameters.
   */
  getAllTags(options?: GetAllTagsOptionalParams): Promise<GetAllTagsResponse> {
    return this.sendOperationRequest({ options }, getAllTagsOperationSpec);
  }

  /**
   * Create a tag
   * @param body
   * @param options The options parameters.
   */
  createTag(
    body: TagCreate,
    options?: CreateTagOptionalParams,
  ): Promise<CreateTagResponse> {
    return this.sendOperationRequest({ body, options }, createTagOperationSpec);
  }

  /**
   * Return a specific tag.
   * @param id Tag's ID
   * @param options The options parameters.
   */
  getTag(id: number, options?: GetTagOptionalParams): Promise<GetTagResponse> {
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
    options?: UpdateTagOptionalParams,
  ): Promise<UpdateTagResponse> {
    return this.sendOperationRequest(
      { id, body, options },
      updateTagOperationSpec,
    );
  }

  /**
   * Deletes the specified tag from the database.
   * @param id Tag's ID
   * @param options The options parameters.
   */
  deleteTag(id: number, options?: DeleteTagOptionalParams): Promise<void> {
    return this.sendOperationRequest({ id, options }, deleteTagOperationSpec);
  }

  /**
   * Returns all the organizations
   * @param options The options parameters.
   */
  getAllOrganizations(
    options?: GetAllOrganizationsOptionalParams,
  ): Promise<GetAllOrganizationsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllOrganizationsOperationSpec,
    );
  }

  /**
   * Create a new organization.
   * @param name
   * @param options The options parameters.
   */
  createOrganization(
    name: string,
    options?: CreateOrganizationOptionalParams,
  ): Promise<CreateOrganizationResponse> {
    return this.sendOperationRequest(
      { name, options },
      createOrganizationOperationSpec,
    );
  }

  /**
   * Get detail of an organization.
   * @param identifier Organization identifier.
   * @param options The options parameters.
   */
  getOrganization(
    identifier: string,
    options?: GetOrganizationOptionalParams,
  ): Promise<GetOrganizationResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getOrganizationOperationSpec,
    );
  }

  /**
   * Update the detail of an organization.
   * @param identifier Organization identifier.
   * @param options The options parameters.
   */
  updateOrganization(
    identifier: string,
    options?: UpdateOrganizationOptionalParams,
  ): Promise<UpdateOrganizationResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      updateOrganizationOperationSpec,
    );
  }

  /**
   * Delete the specified organization from the database.
   * @param identifier Organization identifier.
   * @param options The options parameters.
   */
  deleteOrganization(
    identifier: string,
    options?: DeleteOrganizationOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteOrganizationOperationSpec,
    );
  }

  /**
   * Returns all the organization memberships
   * @param options The options parameters.
   */
  getAllOrganizationMemberships(
    options?: GetAllOrganizationMembershipsOptionalParams,
  ): Promise<GetAllOrganizationMembershipsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllOrganizationMembershipsOperationSpec,
    );
  }

  /**
   * Get detail of an organization membership.
   * @param identifier Membership identifier.
   * @param options The options parameters.
   */
  getOrganizationMembership(
    identifier: string,
    options?: GetOrganizationMembershipOptionalParams,
  ): Promise<GetOrganizationMembershipResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getOrganizationMembershipOperationSpec,
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
    options?: UpdateOrganizationMembershipOptionalParams,
  ): Promise<UpdateOrganizationMembershipResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateOrganizationMembershipOperationSpec,
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
    options?: DeleteOrganizationMembershipOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteOrganizationMembershipOperationSpec,
    );
  }

  /**
   * Get list of all invitations you created or sent to you.
   * @param options The options parameters.
   */
  getAllInvitations(
    options?: GetAllInvitationsOptionalParams,
  ): Promise<GetAllInvitationsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllInvitationsOperationSpec,
    );
  }

  /**
   * Create a new invitation.
   * @param body Invitation to create.
   * @param options The options parameters.
   */
  createInvitation(
    body: InvitationCreate,
    options?: CreateInvitationOptionalParams,
  ): Promise<CreateInvitationResponse> {
    return this.sendOperationRequest(
      { body, options },
      createInvitationOperationSpec,
    );
  }

  /**
   * Get detail of an invitation.
   * @param identifier Invitation identifier.
   * @param options The options parameters.
   */
  getInvitation(
    identifier: string,
    options?: GetInvitationOptionalParams,
  ): Promise<GetInvitationResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getInvitationOperationSpec,
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
    options?: UpdateInvitationOptionalParams,
  ): Promise<UpdateInvitationResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateInvitationOperationSpec,
    );
  }

  /**
   * Delete the specified invitation from the database.
   * @param identifier Invitation identifier.
   * @param options The options parameters.
   */
  deleteInvitation(
    identifier: string,
    options?: DeleteInvitationOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteInvitationOperationSpec,
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
    options?: GetInvitationByTokenOptionalParams,
  ): Promise<GetInvitationByTokenResponse> {
    return this.sendOperationRequest(
      { token, options },
      getInvitationByTokenOperationSpec,
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
    options?: RespondToInvitationOptionalParams,
  ): Promise<RespondToInvitationResponse> {
    return this.sendOperationRequest(
      { token, body, options },
      respondToInvitationOperationSpec,
    );
  }

  /**
   * Returns your API users.
   * @param options The options parameters.
   */
  getAllApiUsers(
    options?: GetAllApiUsersOptionalParams,
  ): Promise<GetAllApiUsersResponse> {
    return this.sendOperationRequest({ options }, getAllApiUsersOperationSpec);
  }

  /**
   * Create an API user
   * @param body
   * @param options The options parameters.
   */
  createApiUser(
    body: ApiUserCreate,
    options?: CreateApiUserOptionalParams,
  ): Promise<CreateApiUserResponse> {
    return this.sendOperationRequest(
      { body, options },
      createApiUserOperationSpec,
    );
  }

  /**
   * Return a specific API user.
   * @param id API user's ID
   * @param options The options parameters.
   */
  getApiUser(
    id: number,
    options?: GetApiUserOptionalParams,
  ): Promise<GetApiUserResponse> {
    return this.sendOperationRequest({ id, options }, getApiUserOperationSpec);
  }

  /**
   * Update data of an API user.
   * @param id API user's ID
   * @param body API user to update
   * @param options The options parameters.
   */
  updateApiUser(
    id: number,
    body: ApiUserUpdate,
    options?: UpdateApiUserOptionalParams,
  ): Promise<UpdateApiUserResponse> {
    return this.sendOperationRequest(
      { id, body, options },
      updateApiUserOperationSpec,
    );
  }

  /**
   * Deletes the specified API user from the database.
   * @param id API user's ID
   * @param options The options parameters.
   */
  deleteApiUser(
    id: number,
    options?: DeleteApiUserOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { id, options },
      deleteApiUserOperationSpec,
    );
  }

  /**
   * Regenerate API key for an API user.
   * @param id API user's ID
   * @param options The options parameters.
   */
  regenerateApiKeyForApiUser(
    id: number,
    options?: RegenerateApiKeyForApiUserOptionalParams,
  ): Promise<RegenerateApiKeyForApiUserResponse> {
    return this.sendOperationRequest(
      { id, options },
      regenerateApiKeyForApiUserOperationSpec,
    );
  }

  /**
   * Returns your resthook subscriptions.
   * @param options The options parameters.
   */
  getAllResthookSubscriptions(
    options?: GetAllResthookSubscriptionsOptionalParams,
  ): Promise<GetAllResthookSubscriptionsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllResthookSubscriptionsOperationSpec,
    );
  }

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
  createResthookSubscription(
    body: ResthookSubscriptionCreate,
    options?: CreateResthookSubscriptionOptionalParams,
  ): Promise<CreateResthookSubscriptionResponse> {
    return this.sendOperationRequest(
      { body, options },
      createResthookSubscriptionOperationSpec,
    );
  }

  /**
   * Return a specific resthook subscription.
   * @param id Resthook subscription's ID
   * @param options The options parameters.
   */
  getResthookSubscription(
    id: number,
    options?: GetResthookSubscriptionOptionalParams,
  ): Promise<GetResthookSubscriptionResponse> {
    return this.sendOperationRequest(
      { id, options },
      getResthookSubscriptionOperationSpec,
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
    options?: UpdateResthookSubscriptionOptionalParams,
  ): Promise<UpdateResthookSubscriptionResponse> {
    return this.sendOperationRequest(
      { id, body, options },
      updateResthookSubscriptionOperationSpec,
    );
  }

  /**
   * Deletes the specified resthook subscription from the database.
   * @param id ResthookSubscription's ID
   * @param options The options parameters.
   */
  deleteResthookSubscription(
    id: number,
    options?: DeleteResthookSubscriptionOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { id, options },
      deleteResthookSubscriptionOperationSpec,
    );
  }

  /**
   * After creating a subscription, we'll send a POST request to your target URL with a `X-Hook-Secret`
   * header. <br />
   * You should response to this with a 200 status code, and use the value of the `X-Hook-Secret` header
   * that you received to activate the subscription using this endpoint.
   * @param xHookSecret The secret received when creating a subscription.
   * @param options The options parameters.
   */
  activateResthookSubscription(
    xHookSecret: string,
    options?: ActivateResthookSubscriptionOptionalParams,
  ): Promise<ActivateResthookSubscriptionResponse> {
    return this.sendOperationRequest(
      { xHookSecret, options },
      activateResthookSubscriptionOperationSpec,
    );
  }

  /**
   * Returns the list of searchable occupation groups.
   * @param options The options parameters.
   */
  listOccupationGroups(
    options?: ListOccupationGroupsOptionalParams,
  ): Promise<ListOccupationGroupsResponse> {
    return this.sendOperationRequest(
      { options },
      listOccupationGroupsOperationSpec,
    );
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
    options?: CreateResumeSearchOptionalParams,
  ): Promise<CreateResumeSearchResponse> {
    return this.sendOperationRequest(
      { body, options },
      createResumeSearchOperationSpec,
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
    options?: GetResumeSearchDetailOptionalParams,
  ): Promise<GetResumeSearchDetailResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      getResumeSearchDetailOperationSpec,
    );
  }

  /**
   * Return configurations such as which fields can be displayed in the logged in user's embeddable
   * resume search tool, what are their weights, what is the maximum number of results that can be
   * returned, etc.
   * @param options The options parameters.
   */
  getResumeSearchConfig(
    options?: GetResumeSearchConfigOptionalParams,
  ): Promise<GetResumeSearchConfigResponse> {
    return this.sendOperationRequest(
      { options },
      getResumeSearchConfigOperationSpec,
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
    options?: UpdateResumeSearchConfigOptionalParams,
  ): Promise<UpdateResumeSearchConfigResponse> {
    return this.sendOperationRequest(
      { body, options },
      updateResumeSearchConfigOperationSpec,
    );
  }

  /**
   * Create and return a signed URL of the resume search tool which then can be embedded on a web page.
   * An optional parameter `config_override` can be passed to override the user-level configurations of
   * the embeddable resume search tool.
   * @param options The options parameters.
   */
  createResumeSearchEmbedUrl(
    options?: CreateResumeSearchEmbedUrlOptionalParams,
  ): Promise<CreateResumeSearchEmbedUrlResponse> {
    return this.sendOperationRequest(
      { options },
      createResumeSearchEmbedUrlOperationSpec,
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
    options?: GetResumeSearchMatchOptionalParams,
  ): Promise<GetResumeSearchMatchResponse> {
    return this.sendOperationRequest(
      { resume, jobDescription, options },
      getResumeSearchMatchOperationSpec,
    );
  }

  /**
   * Provided one or more job titles, get related suggestions for your search.
   * @param jobTitles Job title to query suggestions for
   * @param options The options parameters.
   */
  getResumeSearchSuggestionJobTitle(
    jobTitles: string[],
    options?: GetResumeSearchSuggestionJobTitleOptionalParams,
  ): Promise<GetResumeSearchSuggestionJobTitleResponse> {
    return this.sendOperationRequest(
      { jobTitles, options },
      getResumeSearchSuggestionJobTitleOperationSpec,
    );
  }

  /**
   * Provided one or more skills, get related suggestions for your search.
   * @param skills Skill to query suggestions for
   * @param options The options parameters.
   */
  getResumeSearchSuggestionSkill(
    skills: string[],
    options?: GetResumeSearchSuggestionSkillOptionalParams,
  ): Promise<GetResumeSearchSuggestionSkillResponse> {
    return this.sendOperationRequest(
      { skills, options },
      getResumeSearchSuggestionSkillOperationSpec,
    );
  }

  /**
   * Searches through parsed job descriptions. You can search with custom criterias or a resume.
   * @param body Search parameters
   * @param options The options parameters.
   */
  createJobDescriptionSearch(
    body: JobDescriptionSearchParameters | null,
    options?: CreateJobDescriptionSearchOptionalParams,
  ): Promise<CreateJobDescriptionSearchResponse> {
    return this.sendOperationRequest(
      { body, options },
      createJobDescriptionSearchOperationSpec,
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
    options?: GetJobDescriptionSearchDetailOptionalParams,
  ): Promise<GetJobDescriptionSearchDetailResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      getJobDescriptionSearchDetailOperationSpec,
    );
  }

  /**
   * Return configurations such as which fields can be displayed in the logged in user's embeddable job
   * description search tool, what are their weights, what is the maximum number of results that can be
   * returned, etc.
   * @param options The options parameters.
   */
  getJobDescriptionSearchConfig(
    options?: GetJobDescriptionSearchConfigOptionalParams,
  ): Promise<GetJobDescriptionSearchConfigResponse> {
    return this.sendOperationRequest(
      { options },
      getJobDescriptionSearchConfigOperationSpec,
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
    options?: UpdateJobDescriptionSearchConfigOptionalParams,
  ): Promise<UpdateJobDescriptionSearchConfigResponse> {
    return this.sendOperationRequest(
      { body, options },
      updateJobDescriptionSearchConfigOperationSpec,
    );
  }

  /**
   * Create and return a signed URL of the job description search tool which then can be embedded on a
   * web page. An optional parameter `config_override` can be passed to override the user-level
   * configurations of the embeddable search tool.
   * @param options The options parameters.
   */
  createJobDescriptionSearchEmbedUrl(
    options?: CreateJobDescriptionSearchEmbedUrlOptionalParams,
  ): Promise<CreateJobDescriptionSearchEmbedUrlResponse> {
    return this.sendOperationRequest(
      { options },
      createJobDescriptionSearchEmbedUrlOperationSpec,
    );
  }

  /**
   * Returns all the indexes
   * @param options The options parameters.
   */
  getAllIndexes(
    options?: GetAllIndexesOptionalParams,
  ): Promise<GetAllIndexesResponse> {
    return this.sendOperationRequest({ options }, getAllIndexesOperationSpec);
  }

  /**
   * Create an index for the search tool
   * @param body Index to create
   * @param options The options parameters.
   */
  createIndex(
    body: IndexCreate,
    options?: CreateIndexOptionalParams,
  ): Promise<CreateIndexResponse> {
    return this.sendOperationRequest(
      { body, options },
      createIndexOperationSpec,
    );
  }

  /**
   * Updates the specified index
   * @param name Index name
   * @param body Index data to update
   * @param options The options parameters.
   */
  updateIndex(
    name: string,
    body: IndexUpdate,
    options?: UpdateIndexOptionalParams,
  ): Promise<UpdateIndexResponse> {
    return this.sendOperationRequest(
      { name, body, options },
      updateIndexOperationSpec,
    );
  }

  /**
   * Deletes the specified index from the database
   * @param name Index name
   * @param options The options parameters.
   */
  deleteIndex(
    name: string,
    options?: DeleteIndexOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { name, options },
      deleteIndexOperationSpec,
    );
  }

  /**
   * Returns all the indexed documents for that index
   * @param name Index name
   * @param options The options parameters.
   */
  getAllIndexDocuments(
    name: string,
    options?: GetAllIndexDocumentsOptionalParams,
  ): Promise<GetAllIndexDocumentsResponse> {
    return this.sendOperationRequest(
      { name, options },
      getAllIndexDocumentsOperationSpec,
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
    options?: CreateIndexDocumentOptionalParams,
  ): Promise<CreateIndexDocumentResponse> {
    return this.sendOperationRequest(
      { name, body, options },
      createIndexDocumentOperationSpec,
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
    options?: DeleteIndexDocumentOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { name, identifier, options },
      deleteIndexDocumentOperationSpec,
    );
  }

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
  reIndexDocument(
    name: string,
    identifier: string,
    options?: ReIndexDocumentOptionalParams,
  ): Promise<void> {
    return this.sendOperationRequest(
      { name, identifier, options },
      reIndexDocumentOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getAllWorkspacesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Workspace" } },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.organization, Parameters.name],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Workspace,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const getUsageByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspaces/{identifier}/usage",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "UsageByWorkspace" },
          },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.start, Parameters.end],
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllWorkspaceMembershipsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspace_memberships",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.workspace,
    Parameters.user,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createWorkspaceMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspace_memberships",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.WorkspaceMembership,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getWorkspaceMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspace_memberships/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceMembership,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteWorkspaceMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/workspace_memberships/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllCollectionsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Collection" } },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.workspace1],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Collection,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Collection,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Collection,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const createDataFieldForCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections/{identifier}/create_data_field",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DataField,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body5,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getDataFieldForCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections/{identifier}/fields/{datapoint_identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CollectionField,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [
    Parameters.region,
    Parameters.identifier,
    Parameters.datapointIdentifier,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateDataFieldForCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections/{identifier}/fields/{datapoint_identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CollectionField,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body6,
  urlParameters: [
    Parameters.region,
    Parameters.identifier,
    Parameters.datapointIdentifier,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getUsageByCollectionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/collections/{identifier}/usage",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "UsageByCollection" },
          },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.start, Parameters.end],
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllDocumentsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.workspace,
    Parameters.collection,
    Parameters.state,
    Parameters.tags,
    Parameters.createdDt,
    Parameters.search,
    Parameters.ordering,
    Parameters.includeData,
    Parameters.exclude,
    Parameters.inReview,
    Parameters.failed,
    Parameters.ready,
    Parameters.validatable,
    Parameters.hasChallenges,
    Parameters.customIdentifier,
    Parameters.compact,
    Parameters.count,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Document,
    },
    201: {
      bodyMapper: Mappers.Document,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  formDataParameters: [
    Parameters.file,
    Parameters.url,
    Parameters.data,
    Parameters.collection1,
    Parameters.workspace2,
    Parameters.wait,
    Parameters.identifier1,
    Parameters.customIdentifier1,
    Parameters.fileName,
    Parameters.expiryTime,
    Parameters.language,
    Parameters.rejectDuplicates,
    Parameters.regionBias,
    Parameters.lowPriority,
    Parameters.compact1,
    Parameters.deleteAfterParse,
    Parameters.enableValidationTool,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  serializer,
};
const getDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Document,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.compact, Parameters.format],
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Document,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body7,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateDocumentDataOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents/{identifier}/update_data",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Document,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body8,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const batchAddTagOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents/batch_add_tag",
  httpMethod: "POST",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body9,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const batchRemoveTagOperationSpec: coreClient.OperationSpec = {
  path: "/v3/documents/batch_remove_tag",
  httpMethod: "POST",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body10,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getAllValidationResultsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/validation_results",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "ValidationResult" },
          },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.offset, Parameters.limit, Parameters.document],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createValidationResultOperationSpec: coreClient.OperationSpec = {
  path: "/v3/validation_results",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ValidationResult,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body11,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getValidationResultOperationSpec: coreClient.OperationSpec = {
  path: "/v3/validation_results/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ValidationResult,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateValidationResultOperationSpec: coreClient.OperationSpec = {
  path: "/v3/validation_results/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ValidationResult,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body12,
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteValidationResultOperationSpec: coreClient.OperationSpec = {
  path: "/v3/validation_results/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const batchCreateValidationResultsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/validation_results/batch_create",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "ValidationResult" },
          },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body13,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const batchDeleteValidationResultsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/validation_results/batch_delete",
  httpMethod: "POST",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body14,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getAllDocumentSplittersOperationSpec: coreClient.OperationSpec = {
  path: "/v3/document_splitters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "DocumentSplitter" },
          },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.organization1,
    Parameters.includePublic,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const getDocumentSplitterOperationSpec: coreClient.OperationSpec = {
  path: "/v3/document_splitters/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DocumentSplitter,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const editDocumentPagesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/validate/{identifier}/split",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Meta" } },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body15,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getAllExtractorsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/extractors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Extractor" } },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.organization,
    Parameters.name,
    Parameters.validatable,
    Parameters.includePublicExtractors,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createExtractorOperationSpec: coreClient.OperationSpec = {
  path: "/v3/extractors",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Extractor,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body16,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getExtractorOperationSpec: coreClient.OperationSpec = {
  path: "/v3/extractors/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Extractor,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateExtractorOperationSpec: coreClient.OperationSpec = {
  path: "/v3/extractors/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Extractor,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body17,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteExtractorOperationSpec: coreClient.OperationSpec = {
  path: "/v3/extractors/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllDataPointsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_points",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "DataPoint" } },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.organization1,
    Parameters.includePublic,
    Parameters.extractor,
    Parameters.slug,
    Parameters.description,
    Parameters.annotationContentType,
    Parameters.identifier2,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createDataPointOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_points",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.DataPoint,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body18,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getDataPointOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_points/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataPoint,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateDataPointOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_points/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DataPoint,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body19,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteDataPointOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_points/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const getDataPointChoicesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_point_choices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.search,
    Parameters.dataPoint,
    Parameters.collection2,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createDataPointChoiceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_point_choices",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.DataPointChoice,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body20,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getDataPointChoiceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_point_choices/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataPointChoice,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateDataPointChoiceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_point_choices/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DataPointChoice,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body21,
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteDataPointChoiceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_point_choices/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const replaceDataPointChoicesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/data_point_choices/replace",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DataPointChoiceReplaceResponse,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body22,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getAllAnnotationsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/annotations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.document],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createAnnotationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/annotations",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.AnnotationWithValidationResults,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body23,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getAnnotationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/annotations/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Annotation,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateAnnotationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/annotations/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Annotation,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body24,
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteAnnotationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/annotations/{id}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.AnotationDelete,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const batchCreateAnnotationsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/annotations/batch_create",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Annotation" } },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body25,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const batchUpdateAnnotationsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/annotations/batch_update",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Annotation" } },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body26,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const batchDeleteAnnotationsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/annotations/batch_delete",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BatchDeleteAnnotationsResponse,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body27,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const createMappingDataSourceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mapping_data_sources",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.MappingDataSource,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body28,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listMappingDataSourcesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mapping_data_sources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.name,
    Parameters.offset,
    Parameters.limit,
    Parameters.workspace,
    Parameters.organization1,
    Parameters.identifier3,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const getMappingDataSourceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mapping_data_sources/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MappingDataSource,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteMappingDataSourceOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mapping_data_sources/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const listMappingDataSourceValuesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mapping_data_sources/{identifier}/values",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.search,
    Parameters.annotation,
  ],
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const replaceMappingDataSourceValuesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mapping_data_sources/{identifier}/values",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Dictionary", value: { type: { name: "any" } } },
          },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body29,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const addMappingDataSourceValueOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mapping_data_sources/{identifier}/values",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body30,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getMappingDataSourceValueOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mapping_data_sources/{identifier}/values/{value}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier, Parameters.value],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteMappingDataSourceValueOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mapping_data_sources/{identifier}/values/{value}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier, Parameters.value],
  headerParameters: [Parameters.accept],
  serializer,
};
const createMappingOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mappings",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Mapping,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body31,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listMappingsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mappings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.mappingDataSource,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const getMappingOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mappings/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Mapping,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteMappingOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mappings/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateMappingOperationSpec: coreClient.OperationSpec = {
  path: "/v3/mappings/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Mapping,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body32,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getAllTagsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/tags",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Tag" } },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.name,
    Parameters.offset,
    Parameters.limit,
    Parameters.workspace,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createTagOperationSpec: coreClient.OperationSpec = {
  path: "/v3/tags",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Tag,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body33,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getTagOperationSpec: coreClient.OperationSpec = {
  path: "/v3/tags/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Tag,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateTagOperationSpec: coreClient.OperationSpec = {
  path: "/v3/tags/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Tag,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body34,
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteTagOperationSpec: coreClient.OperationSpec = {
  path: "/v3/tags/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllOrganizationsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organizations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Organization" } },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrganizationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organizations",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Organization,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  formDataParameters: [
    Parameters.name1,
    Parameters.avatar,
    Parameters.resthookSignatureKey,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  serializer,
};
const getOrganizationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organizations/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Organization,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOrganizationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organizations/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Organization,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  formDataParameters: [
    Parameters.avatar,
    Parameters.resthookSignatureKey,
    Parameters.name2,
    Parameters.validationToolConfig,
  ],
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  serializer,
};
const deleteOrganizationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organizations/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllOrganizationMembershipsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organization_memberships",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.organization1,
    Parameters.role,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOrganizationMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organization_memberships/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OrganizationMembership,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOrganizationMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organization_memberships/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.OrganizationMembership,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body35,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOrganizationMembershipOperationSpec: coreClient.OperationSpec = {
  path: "/v3/organization_memberships/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllInvitationsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.offset,
    Parameters.limit,
    Parameters.organization1,
    Parameters.role,
    Parameters.status,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Invitation,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body36,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Invitation,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Invitation,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body37,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept],
  serializer,
};
const getInvitationByTokenOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations/token/{token}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Invitation,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.token],
  headerParameters: [Parameters.accept],
  serializer,
};
const respondToInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/v3/invitations/token/{token}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Invitation,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body38,
  urlParameters: [Parameters.region, Parameters.token],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getAllApiUsersOperationSpec: coreClient.OperationSpec = {
  path: "/v3/api_users",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.organization1],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createApiUserOperationSpec: coreClient.OperationSpec = {
  path: "/v3/api_users",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ApiUserWithKey,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body39,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getApiUserOperationSpec: coreClient.OperationSpec = {
  path: "/v3/api_users/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiUserWithoutKey,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateApiUserOperationSpec: coreClient.OperationSpec = {
  path: "/v3/api_users/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ApiUserWithoutKey,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body40,
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteApiUserOperationSpec: coreClient.OperationSpec = {
  path: "/v3/api_users/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const regenerateApiKeyForApiUserOperationSpec: coreClient.OperationSpec = {
  path: "/v3/api_users/{id}/regenerate_api_key",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApiUserWithKey,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllResthookSubscriptionsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ResthookSubscription,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body41,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResthookSubscription,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id1],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ResthookSubscription,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body42,
  urlParameters: [Parameters.region, Parameters.id1],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.id1],
  headerParameters: [Parameters.accept],
  serializer,
};
const activateResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resthook_subscriptions/activate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResthookSubscription,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.xHookSecret],
  serializer,
};
const listOccupationGroupsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/occupation_groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "OccupationGroup" },
          },
        },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createResumeSearchOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ResumeSearch,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body43,
  queryParameters: [Parameters.offset, Parameters.limit1],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getResumeSearchDetailOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/details/{identifier}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchDetail,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body43,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getResumeSearchConfigOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/config",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchConfig,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateResumeSearchConfigOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/config",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchConfig,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body44,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const createResumeSearchEmbedUrlOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/embed",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchEmbed,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body45,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getResumeSearchMatchOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/match",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeSearchMatch,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
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
    Parameters.managementLevelWeight,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const getResumeSearchSuggestionJobTitleOperationSpec: coreClient.OperationSpec =
  {
    path: "/v3/resume_search/suggestion_job_title",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: {
          type: { name: "Sequence", element: { type: { name: "String" } } },
        },
      },
      400: {
        bodyMapper: Mappers.RequestError,
        isError: true,
      },
      401: {
        bodyMapper: Mappers.RequestError,
        isError: true,
      },
      default: {
        bodyMapper: Mappers.RequestError,
      },
    },
    queryParameters: [Parameters.jobTitles],
    urlParameters: [Parameters.region],
    headerParameters: [Parameters.accept],
    serializer,
  };
const getResumeSearchSuggestionSkillOperationSpec: coreClient.OperationSpec = {
  path: "/v3/resume_search/suggestion_skill",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } },
      },
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.skills],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createJobDescriptionSearchOperationSpec: coreClient.OperationSpec = {
  path: "/v3/job_description_search",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.JobDescriptionSearch,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body46,
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getJobDescriptionSearchDetailOperationSpec: coreClient.OperationSpec = {
  path: "/v3/job_description_search/details/{identifier}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescriptionSearchDetail,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body46,
  urlParameters: [Parameters.region, Parameters.identifier],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getJobDescriptionSearchConfigOperationSpec: coreClient.OperationSpec = {
  path: "/v3/job_description_search/config",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescriptionSearchConfig,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateJobDescriptionSearchConfigOperationSpec: coreClient.OperationSpec =
  {
    path: "/v3/job_description_search/config",
    httpMethod: "PATCH",
    responses: {
      200: {
        bodyMapper: Mappers.JobDescriptionSearchConfig,
      },
      400: {
        bodyMapper: Mappers.RequestError,
        isError: true,
      },
      401: {
        bodyMapper: Mappers.RequestError,
        isError: true,
      },
      default: {
        bodyMapper: Mappers.RequestError,
      },
    },
    requestBody: Parameters.body47,
    urlParameters: [Parameters.region],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer,
  };
const createJobDescriptionSearchEmbedUrlOperationSpec: coreClient.OperationSpec =
  {
    path: "/v3/job_description_search/embed",
    httpMethod: "POST",
    responses: {
      200: {
        bodyMapper: Mappers.JobDescriptionSearchEmbed,
      },
      401: {
        bodyMapper: Mappers.RequestError,
        isError: true,
      },
      default: {
        bodyMapper: Mappers.RequestError,
      },
    },
    requestBody: Parameters.body48,
    urlParameters: [Parameters.region],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer,
  };
const getAllIndexesOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [
    Parameters.name,
    Parameters.offset,
    Parameters.limit,
    Parameters.documentType,
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept],
  serializer,
};
const createIndexOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Index,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body49,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateIndexOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Index,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body50,
  urlParameters: [Parameters.region, Parameters.name3],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteIndexOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index/{name}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.name3],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllIndexDocumentsOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index/{name}/documents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.region, Parameters.name3],
  headerParameters: [Parameters.accept],
  serializer,
};
const createIndexDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index/{name}/documents",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema,
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  requestBody: Parameters.body51,
  urlParameters: [Parameters.region, Parameters.name3],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteIndexDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index/{name}/documents/{identifier}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier, Parameters.name3],
  headerParameters: [Parameters.accept],
  serializer,
};
const reIndexDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v3/index/{name}/documents/{identifier}/re_index",
  httpMethod: "POST",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true,
    },
    default: {
      bodyMapper: Mappers.RequestError,
    },
  },
  urlParameters: [Parameters.region, Parameters.identifier, Parameters.name3],
  headerParameters: [Parameters.accept],
  serializer,
};
