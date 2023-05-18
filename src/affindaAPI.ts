import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { AffindaAPIContext } from "./affindaAPIContext";
import {
  AffindaAPIOptionalParams,
  AffindaAPIGetAllResumesOptionalParams,
  AffindaAPIGetAllResumesResponse,
  AffindaAPICreateResumeOptionalParams,
  AffindaAPICreateResumeResponse,
  AffindaAPIGetResumeOptionalParams,
  AffindaAPIGetResumeResponse,
  ResumeData,
  AffindaAPIUpdateResumeDataOptionalParams,
  AffindaAPIUpdateResumeDataResponse,
  AffindaAPIDeleteResumeOptionalParams,
  AffindaAPIGetAllRedactedResumesOptionalParams,
  AffindaAPIGetAllRedactedResumesResponse,
  AffindaAPICreateRedactedResumeOptionalParams,
  AffindaAPICreateRedactedResumeResponse,
  AffindaAPIGetRedactedResumeOptionalParams,
  AffindaAPIGetRedactedResumeResponse,
  AffindaAPIDeleteRedactedResumeOptionalParams,
  AffindaAPIGetAllInvoicesOptionalParams,
  AffindaAPIGetAllInvoicesResponse,
  AffindaAPICreateInvoiceOptionalParams,
  AffindaAPICreateInvoiceResponse,
  AffindaAPIGetInvoiceOptionalParams,
  AffindaAPIGetInvoiceResponse,
  AffindaAPIDeleteInvoiceOptionalParams,
  AffindaAPIGetAllJobDescriptionsOptionalParams,
  AffindaAPIGetAllJobDescriptionsResponse,
  AffindaAPICreateJobDescriptionOptionalParams,
  AffindaAPICreateJobDescriptionResponse,
  AffindaAPIGetJobDescriptionOptionalParams,
  AffindaAPIGetJobDescriptionResponse,
  JobDescriptionDataUpdate,
  AffindaAPIUpdateJobDescriptionDataOptionalParams,
  AffindaAPIUpdateJobDescriptionDataResponse,
  AffindaAPIDeleteJobDescriptionOptionalParams,
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
  AffindaAPIGetAllIndexesOptionalParams,
  AffindaAPIGetAllIndexesResponse,
  AffindaAPICreateIndexOptionalParams,
  AffindaAPICreateIndexResponse,
  AffindaAPIDeleteIndexOptionalParams,
  AffindaAPIGetAllIndexDocumentsOptionalParams,
  AffindaAPIGetAllIndexDocumentsResponse,
  PathsYg099PV2IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema,
  AffindaAPICreateIndexDocumentOptionalParams,
  AffindaAPICreateIndexDocumentResponse,
  AffindaAPIDeleteIndexDocumentOptionalParams,
  AffindaAPIListOccupationGroupsOptionalParams,
  AffindaAPIListOccupationGroupsResponse,
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
   * Returns all the resume summaries for that user, limited to 300 per page.
   * @param options The options parameters.
   */
  getAllResumes(
    options?: AffindaAPIGetAllResumesOptionalParams
  ): Promise<AffindaAPIGetAllResumesResponse> {
    return this.sendOperationRequest({ options }, getAllResumesOperationSpec);
  }

  /**
   * Uploads a resume for parsing. When successful, returns an `identifier` in the response for
   * subsequent use with the [/resumes/{identifier}](#get-/resumes/-identifier-) endpoint to check
   * processing status and retrieve results.<br/>
   * Resumes can be uploaded as a file or a URL. In addition, data can be added directly if users want to
   * upload directly without parsing any resume file. For uploading resume data, the `data` argument
   * provided must be a JSON-encoded string. Data uploads will not impact upon parsing credits.
   * @param options The options parameters.
   */
  createResume(
    options?: AffindaAPICreateResumeOptionalParams
  ): Promise<AffindaAPICreateResumeResponse> {
    return this.sendOperationRequest({ options }, createResumeOperationSpec);
  }

  /**
   * Returns all the parse results for that resume if processing is completed.
   * The `identifier` is the unique ID returned after POST-ing the resume via the
   * [/resumes](#post-/resumes) endpoint.
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  getResume(
    identifier: string,
    options?: AffindaAPIGetResumeOptionalParams
  ): Promise<AffindaAPIGetResumeResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getResumeOperationSpec
    );
  }

  /**
   * Update data of a parsed resume.
   * The `identifier` is the unique ID returned after POST-ing the resume via the
   * [/resumes](#post-/resumes) endpoint.
   * @param identifier Resume identifier
   * @param body Resume data to update
   * @param options The options parameters.
   */
  updateResumeData(
    identifier: string,
    body: ResumeData | null,
    options?: AffindaAPIUpdateResumeDataOptionalParams
  ): Promise<AffindaAPIUpdateResumeDataResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateResumeDataOperationSpec
    );
  }

  /**
   * Deletes the specified resume from the database
   * @param identifier Resume identifier
   * @param options The options parameters.
   */
  deleteResume(
    identifier: string,
    options?: AffindaAPIDeleteResumeOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteResumeOperationSpec
    );
  }

  /**
   * Returns all the redacted resume information for that resume
   * @param options The options parameters.
   */
  getAllRedactedResumes(
    options?: AffindaAPIGetAllRedactedResumesOptionalParams
  ): Promise<AffindaAPIGetAllRedactedResumesResponse> {
    return this.sendOperationRequest(
      { options },
      getAllRedactedResumesOperationSpec
    );
  }

  /**
   * Uploads a resume for redacting.
   * @param options The options parameters.
   */
  createRedactedResume(
    options?: AffindaAPICreateRedactedResumeOptionalParams
  ): Promise<AffindaAPICreateRedactedResumeResponse> {
    return this.sendOperationRequest(
      { options },
      createRedactedResumeOperationSpec
    );
  }

  /**
   * Returns all the redaction results for that resume if processing is completed.
   * The `identifier` is the unique ID returned after POST-ing the resume via the
   * [/redacted_resumes](#post-/redacted_resumes) endpoint.
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  getRedactedResume(
    identifier: string,
    options?: AffindaAPIGetRedactedResumeOptionalParams
  ): Promise<AffindaAPIGetRedactedResumeResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getRedactedResumeOperationSpec
    );
  }

  /**
   * Deletes the specified resume from the database
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  deleteRedactedResume(
    identifier: string,
    options?: AffindaAPIDeleteRedactedResumeOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteRedactedResumeOperationSpec
    );
  }

  /**
   * Returns all the invoice summaries for that user, limited to 300 per page.
   * @param options The options parameters.
   */
  getAllInvoices(
    options?: AffindaAPIGetAllInvoicesOptionalParams
  ): Promise<AffindaAPIGetAllInvoicesResponse> {
    return this.sendOperationRequest({ options }, getAllInvoicesOperationSpec);
  }

  /**
   * Uploads an invoice for parsing.
   * When successful, returns an `identifier` in the response for subsequent use with the
   * [/invoices/{identifier}](#get-/invoices/-identifier-) endpoint to check processing status and
   * retrieve results.
   * @param options The options parameters.
   */
  createInvoice(
    options?: AffindaAPICreateInvoiceOptionalParams
  ): Promise<AffindaAPICreateInvoiceResponse> {
    return this.sendOperationRequest({ options }, createInvoiceOperationSpec);
  }

  /**
   * Returns all the parse results for that invoice if processing is completed.
   * The `identifier` is the unique ID returned after POST-ing the invoice via the
   * [/invoices](#post-/invoices) endpoint.
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  getInvoice(
    identifier: string,
    options?: AffindaAPIGetInvoiceOptionalParams
  ): Promise<AffindaAPIGetInvoiceResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getInvoiceOperationSpec
    );
  }

  /**
   * Delete the specified invoice from the database. Note, any invoices deleted from the database will no
   * longer be used in any tailored customer models.
   * @param identifier Invoice identifier
   * @param options The options parameters.
   */
  deleteInvoice(
    identifier: string,
    options?: AffindaAPIDeleteInvoiceOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteInvoiceOperationSpec
    );
  }

  /**
   * Returns all the job descriptions for that user, limited to 300 per page.
   * @param options The options parameters.
   */
  getAllJobDescriptions(
    options?: AffindaAPIGetAllJobDescriptionsOptionalParams
  ): Promise<AffindaAPIGetAllJobDescriptionsResponse> {
    return this.sendOperationRequest(
      { options },
      getAllJobDescriptionsOperationSpec
    );
  }

  /**
   * Uploads a job description for parsing.
   * When successful, returns an `identifier` in the response for subsequent use with the
   * [/job_descriptions/{identifier}](#get-/job_descriptions/-identifier-) endpoint to check processing
   * status and retrieve results.
   * Job Descriptions can be uploaded as a file or a URL. In addition, data can be added directly if
   * users want to upload directly without parsing any resume file. For uploading resume data, the `data`
   * argument provided must be a JSON-encoded string. Data uploads will not impact upon parsing credits.
   * @param options The options parameters.
   */
  createJobDescription(
    options?: AffindaAPICreateJobDescriptionOptionalParams
  ): Promise<AffindaAPICreateJobDescriptionResponse> {
    return this.sendOperationRequest(
      { options },
      createJobDescriptionOperationSpec
    );
  }

  /**
   * Returns all the results for that job description if processing is completed.
   * The `identifier` is the unique ID returned after POST-ing the resume via the
   * [/job_descriptions](#post-/job_descriptions) endpoint.
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  getJobDescription(
    identifier: string,
    options?: AffindaAPIGetJobDescriptionOptionalParams
  ): Promise<AffindaAPIGetJobDescriptionResponse> {
    return this.sendOperationRequest(
      { identifier, options },
      getJobDescriptionOperationSpec
    );
  }

  /**
   * Update data of a job description.
   * The `identifier` is the unique ID returned after POST-ing the job description via the
   * [/job_descriptions](#post-/job_descriptions) endpoint.
   * @param identifier Job description identifier
   * @param body Job description data to update
   * @param options The options parameters.
   */
  updateJobDescriptionData(
    identifier: string,
    body: JobDescriptionDataUpdate | null,
    options?: AffindaAPIUpdateJobDescriptionDataOptionalParams
  ): Promise<AffindaAPIUpdateJobDescriptionDataResponse> {
    return this.sendOperationRequest(
      { identifier, body, options },
      updateJobDescriptionDataOperationSpec
    );
  }

  /**
   * Deletes the specified job description from the database
   * @param identifier Document identifier
   * @param options The options parameters.
   */
  deleteJobDescription(
    identifier: string,
    options?: AffindaAPIDeleteJobDescriptionOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { identifier, options },
      deleteJobDescriptionOperationSpec
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
    body: PathsYg099PV2IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema,
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
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getAllResumesOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resumes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths14VxierV2ResumesGetResponses200ContentApplicationJsonSchema
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
const createResumeOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resumes",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Resume
    },
    201: {
      bodyMapper: Mappers.Resume
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
    Parameters.data,
    Parameters.identifier,
    Parameters.fileName,
    Parameters.wait,
    Parameters.rejectDuplicates,
    Parameters.language,
    Parameters.expiryTime,
    Parameters.regionBias
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer
};
const getResumeOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resumes/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Resume
    },
    400: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    401: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    404: {
      bodyMapper: Mappers.RequestError,
      isError: true
    },
    default: {
      bodyMapper: Mappers.RequestError
    }
  },
  queryParameters: [Parameters.format],
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept2],
  isXML: true,
  serializer: xmlSerializer
};
const updateResumeDataOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resumes/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ResumeData
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
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteResumeOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resumes/{identifier}",
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
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllRedactedResumesOperationSpec: coreClient.OperationSpec = {
  path: "/v2/redacted_resumes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1D957B5V2RedactedResumesGetResponses200ContentApplicationJsonSchema
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
const createRedactedResumeOperationSpec: coreClient.OperationSpec = {
  path: "/v2/redacted_resumes",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RedactedResume
    },
    201: {
      bodyMapper: Mappers.RedactedResume
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
    Parameters.identifier,
    Parameters.fileName,
    Parameters.wait,
    Parameters.language,
    Parameters.expiryTime,
    Parameters.redactHeadshot,
    Parameters.redactPersonalDetails,
    Parameters.redactWorkDetails,
    Parameters.redactEducationDetails,
    Parameters.redactReferees,
    Parameters.redactLocations,
    Parameters.redactDates,
    Parameters.redactGender
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer
};
const getRedactedResumeOperationSpec: coreClient.OperationSpec = {
  path: "/v2/redacted_resumes/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RedactedResume
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
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteRedactedResumeOperationSpec: coreClient.OperationSpec = {
  path: "/v2/redacted_resumes/{identifier}",
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
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllInvoicesOperationSpec: coreClient.OperationSpec = {
  path: "/v2/invoices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsGfm23QV2InvoicesGetResponses200ContentApplicationJsonSchema
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
const createInvoiceOperationSpec: coreClient.OperationSpec = {
  path: "/v2/invoices",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Invoice
    },
    201: {
      bodyMapper: Mappers.Invoice
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
    Parameters.identifier,
    Parameters.fileName,
    Parameters.wait,
    Parameters.rejectDuplicates,
    Parameters.language,
    Parameters.expiryTime,
    Parameters.regionBias
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer
};
const getInvoiceOperationSpec: coreClient.OperationSpec = {
  path: "/v2/invoices/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Invoice
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
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteInvoiceOperationSpec: coreClient.OperationSpec = {
  path: "/v2/invoices/{identifier}",
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
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllJobDescriptionsOperationSpec: coreClient.OperationSpec = {
  path: "/v2/job_descriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsChbpqfV2JobDescriptionsGetResponses200ContentApplicationJsonSchema
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
const createJobDescriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v2/job_descriptions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescription
    },
    201: {
      bodyMapper: Mappers.JobDescription
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
    Parameters.identifier,
    Parameters.fileName,
    Parameters.wait,
    Parameters.rejectDuplicates,
    Parameters.language,
    Parameters.expiryTime,
    Parameters.regionBias,
    Parameters.data1
  ],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer
};
const getJobDescriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v2/job_descriptions/{identifier}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescription
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
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const updateJobDescriptionDataOperationSpec: coreClient.OperationSpec = {
  path: "/v2/job_descriptions/{identifier}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.JobDescriptionData
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
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteJobDescriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v2/job_descriptions/{identifier}",
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
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept],
  serializer
};
const createJobDescriptionSearchOperationSpec: coreClient.OperationSpec = {
  path: "/v2/job_description_search",
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
  requestBody: Parameters.body2,
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getJobDescriptionSearchDetailOperationSpec: coreClient.OperationSpec = {
  path: "/v2/job_description_search/details/{identifier}",
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
  requestBody: Parameters.body2,
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getJobDescriptionSearchConfigOperationSpec: coreClient.OperationSpec = {
  path: "/v2/job_description_search/config",
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
  path: "/v2/job_description_search/config",
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
  requestBody: Parameters.body3,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const createJobDescriptionSearchEmbedUrlOperationSpec: coreClient.OperationSpec = {
  path: "/v2/job_description_search/embed",
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
  requestBody: Parameters.body4,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const createResumeSearchOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resume_search",
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
  requestBody: Parameters.body5,
  queryParameters: [Parameters.offset, Parameters.limit],
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getResumeSearchDetailOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resume_search/details/{identifier}",
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
  requestBody: Parameters.body5,
  urlParameters: [Parameters.region, Parameters.identifier1],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getResumeSearchMatchOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resume_search/match",
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
  path: "/v2/resume_search/config",
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
  path: "/v2/resume_search/config",
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
  requestBody: Parameters.body6,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const createResumeSearchEmbedUrlOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resume_search/embed",
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
  requestBody: Parameters.body7,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getResumeSearchSuggestionJobTitleOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resume_search/suggestion_job_title",
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
  path: "/v2/resume_search/suggestion_skill",
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
const getAllIndexesOperationSpec: coreClient.OperationSpec = {
  path: "/v2/index",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths18Iqsr4V2IndexGetResponses200ContentApplicationJsonSchema
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
  path: "/v2/index",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths1Sikw07V2IndexPostResponses201ContentApplicationJsonSchema
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
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer
};
const deleteIndexOperationSpec: coreClient.OperationSpec = {
  path: "/v2/index/{name}",
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
  path: "/v2/index/{name}/documents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsAf7Nd4V2IndexNameDocumentsGetResponses200ContentApplicationJsonSchema
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
  path: "/v2/index/{name}/documents",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.Paths14R8PdgV2IndexNameDocumentsPostResponses201ContentApplicationJsonSchema
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
  urlParameters: [Parameters.region, Parameters.name1],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteIndexDocumentOperationSpec: coreClient.OperationSpec = {
  path: "/v2/index/{name}/documents/{identifier}",
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
  urlParameters: [Parameters.region, Parameters.identifier1, Parameters.name1],
  headerParameters: [Parameters.accept],
  serializer
};
const listOccupationGroupsOperationSpec: coreClient.OperationSpec = {
  path: "/v2/occupation_groups",
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
const getAllResthookSubscriptionsOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resthook_subscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsMda0LlV2ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema
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
  path: "/v2/resthook_subscriptions",
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
  requestBody: Parameters.body9,
  urlParameters: [Parameters.region],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resthook_subscriptions/{id}",
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
  path: "/v2/resthook_subscriptions/{id}",
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
  requestBody: Parameters.body10,
  urlParameters: [Parameters.region, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteResthookSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/v2/resthook_subscriptions/{id}",
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
  path: "/v2/resthook_subscriptions/activate",
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
