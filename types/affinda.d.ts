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
     * Returns all the job descriptions for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllJobDescriptions(options?: AffindaAPIGetAllJobDescriptionsOptionalParams): Promise<AffindaAPIGetAllJobDescriptionsResponse>;
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
     * Update data of a job description.
     * The `identifier` is the unique ID returned after POST-ing the job description via the
     * [/job_descriptions](#post-/job_descriptions) endpoint.
     * @param identifier Job description identifier
     * @param body Job description data to update
     * @param options The options parameters.
     */
    updateJobDescriptionData(identifier: string, body: JobDescriptionDataUpdate | null, options?: AffindaAPIUpdateJobDescriptionDataOptionalParams): Promise<AffindaAPIUpdateJobDescriptionDataResponse>;
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
    createIndexDocument(name: string, body: PathsYg099PV2IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema, options?: AffindaAPICreateIndexDocumentOptionalParams): Promise<AffindaAPICreateIndexDocumentResponse>;
    /**
     * Delete the specified indexed document from the database
     * @param name Index name
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteIndexDocument(name: string, identifier: string, options?: AffindaAPIDeleteIndexDocumentOptionalParams): Promise<void>;
    /**
     * Returns the list of searchable occupation groups.
     * @param options The options parameters.
     */
    listOccupationGroups(options?: AffindaAPIListOccupationGroupsOptionalParams): Promise<AffindaAPIListOccupationGroupsResponse>;
    /**
     * Returns your resthook subscriptions.
     * @param options The options parameters.
     */
    getAllResthookSubscriptions(options?: AffindaAPIGetAllResthookSubscriptionsOptionalParams): Promise<AffindaAPIGetAllResthookSubscriptionsResponse>;
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
     * header.
     * You should response to this with a 200 status code, and use the value of the `X-Hook-Secret` header
     * that you received to activate the subscription using this endpoint.
     * @param xHookSecret The secret received when creating a subscription.
     * @param options The options parameters.
     */
    activateResthookSubscription(xHookSecret: string, options?: AffindaAPIActivateResthookSubscriptionOptionalParams): Promise<AffindaAPIActivateResthookSubscriptionResponse>;
}

/** Optional parameters. */
export declare interface AffindaAPIActivateResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the activateResthookSubscription operation. */
export declare type AffindaAPIActivateResthookSubscriptionResponse = ResthookSubscription;

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
export declare interface AffindaAPICreateIndexDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createIndexDocument operation. */
export declare type AffindaAPICreateIndexDocumentResponse = Paths14R8PdgV2IndexNameDocumentsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPICreateIndexOptionalParams extends coreClient.OperationOptions {
    name?: string;
    documentType?: PostContentSchemaDocumentType;
}

/** Contains response data for the createIndex operation. */
export declare type AffindaAPICreateIndexResponse = Paths1Sikw07V2IndexPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPICreateInvoiceOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to download the invoice. */
    url?: string;
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: boolean;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** A JSON representation of the RegionBias object. */
    regionBias?: string;
    /** Explicitly mark this document as low priority. */
    lowPriority?: boolean;
}

/** Contains response data for the createInvoice operation. */
export declare type AffindaAPICreateInvoiceResponse = Invoice;

/** Optional parameters. */
export declare interface AffindaAPICreateJobDescriptionOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to download the job description. */
    url?: string;
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: boolean;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** A JSON representation of the RegionBias object. */
    regionBias?: string;
    /** Explicitly mark this document as low priority. */
    lowPriority?: boolean;
    /** A JSON-encoded string of the `JobDescriptionData` object. */
    data?: JobDescriptionDataUpdate;
}

/** Contains response data for the createJobDescription operation. */
export declare type AffindaAPICreateJobDescriptionResponse = JobDescription;

/** Optional parameters. */
export declare interface AffindaAPICreateJobDescriptionSearchEmbedUrlOptionalParams extends coreClient.OperationOptions {
    body?: Paths15O3Zn5V2JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema;
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
export declare interface AffindaAPICreateRedactedResumeOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to download the resume. */
    url?: string;
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
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
export declare interface AffindaAPICreateResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createResthookSubscription operation. */
export declare type AffindaAPICreateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export declare interface AffindaAPICreateResumeOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to download the resume. */
    url?: string;
    /** A JSON-encoded string of the `ResumeData` object. */
    data?: ResumeData;
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: boolean;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** A JSON representation of the RegionBias object. */
    regionBias?: string;
    /** Explicitly mark this document as low priority. */
    lowPriority?: boolean;
}

/** Contains response data for the createResume operation. */
export declare type AffindaAPICreateResumeResponse = Resume;

/** Optional parameters. */
export declare interface AffindaAPICreateResumeSearchEmbedUrlOptionalParams extends coreClient.OperationOptions {
    body?: Paths23Ubd8V2ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema;
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
export declare interface AffindaAPIDeleteIndexDocumentOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteIndexOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteInvoiceOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteJobDescriptionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteRedactedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIDeleteResumeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AffindaAPIGetAllIndexDocumentsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllIndexDocuments operation. */
export declare type AffindaAPIGetAllIndexDocumentsResponse = PathsAf7Nd4V2IndexNameDocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllIndexesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter indices by a document type */
    documentType?: Enum5;
}

/** Contains response data for the getAllIndexes operation. */
export declare type AffindaAPIGetAllIndexesResponse = Paths18Iqsr4V2IndexGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllInvoicesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter for documents with this custom identifier. */
    customIdentifier?: string;
}

/** Contains response data for the getAllInvoices operation. */
export declare type AffindaAPIGetAllInvoicesResponse = PathsGfm23QV2InvoicesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllJobDescriptionsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter for documents with this custom identifier. */
    customIdentifier?: string;
}

/** Contains response data for the getAllJobDescriptions operation. */
export declare type AffindaAPIGetAllJobDescriptionsResponse = PathsChbpqfV2JobDescriptionsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllRedactedResumesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter for documents with this custom identifier. */
    customIdentifier?: string;
}

/** Contains response data for the getAllRedactedResumes operation. */
export declare type AffindaAPIGetAllRedactedResumesResponse = Paths1D957B5V2RedactedResumesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllResthookSubscriptionsOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
}

/** Contains response data for the getAllResthookSubscriptions operation. */
export declare type AffindaAPIGetAllResthookSubscriptionsResponse = PathsMda0LlV2ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllResumesOptionalParams extends coreClient.OperationOptions {
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of results to return. */
    limit?: number;
    /** Filter for documents with this custom identifier. */
    customIdentifier?: string;
}

/** Contains response data for the getAllResumes operation. */
export declare type AffindaAPIGetAllResumesResponse = Paths14VxierV2ResumesGetResponses200ContentApplicationJsonSchema;

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
export declare interface AffindaAPIGetRedactedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRedactedResume operation. */
export declare type AffindaAPIGetRedactedResumeResponse = RedactedResume;

/** Optional parameters. */
export declare interface AffindaAPIGetResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResthookSubscription operation. */
export declare type AffindaAPIGetResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export declare interface AffindaAPIGetResumeOptionalParams extends coreClient.OperationOptions {
    /** Set this to "hr-xml" to get the response in HR-XML format. Currently the only supported value for this parameter is "hr-xml". */
    format?: Enum2;
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
export declare interface AffindaAPIUpdateJobDescriptionDataOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateJobDescriptionData operation. */
export declare type AffindaAPIUpdateJobDescriptionDataResponse = JobDescriptionData;

/** Optional parameters. */
export declare interface AffindaAPIUpdateJobDescriptionSearchConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateJobDescriptionSearchConfig operation. */
export declare type AffindaAPIUpdateJobDescriptionSearchConfigResponse = JobDescriptionSearchConfig;

/** Optional parameters. */
export declare interface AffindaAPIUpdateResthookSubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateResthookSubscription operation. */
export declare type AffindaAPIUpdateResthookSubscriptionResponse = ResthookSubscription;

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
    dataPoint?: string;
    contentType: string;
}

export declare interface AnnotationV2Base {
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

/** For custom fields. E.g. 'isAvailable': true */
export declare interface Components1Rpp8I6SchemasJobdescriptiondataupdateAdditionalproperties {
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
    /** The 4 digit code representing the SOC2020 classification for this job title */
    minorGroupCode?: number;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    subMajorGroupCode?: number;
    /** The 4 digit code representing the SOC2020 classification for this job title */
    majorGroupCode?: number;
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

export declare interface ComponentsRe6GnoSchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueAllof1 {
    match?: boolean;
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

export declare interface CustomFieldConfig {
    /** Data point identifier. */
    dataPoint: string;
    weight: number;
}

export declare type DateAnnotation = Annotation & {
    parsed?: Date;
};

export declare type DateAnnotationV2Update = AnnotationV2Base & {
    parsed?: Date;
};

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
 * Defines values for Enum2. \
 * {@link KnownEnum2} can be used interchangeably with Enum2,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **hr-xml**
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

/**
 * Defines values for Enum8. \
 * {@link KnownEnum8} can be used interchangeably with Enum8,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export declare type Enum8 = string;

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

export declare type ExpectedRemunerationAnnotationV2Update = AnnotationV2Base & {
    parsed?: ExpectedRemunerationAnnotationV2UpdateParsed;
};

export declare interface ExpectedRemunerationAnnotationV2UpdateParsed {
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

export declare interface Get200ApplicationJsonPropertiesItemsItem {
    name: string;
    documentType?: GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType;
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

export declare interface Invoice {
    clientVerifiedDt: string | null;
    data: InvoiceData;
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
    currencyCode?: TextAnnotation;
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
    /** URL to download the invoice. */
    url?: string;
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: boolean;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** A JSON representation of the RegionBias object. */
    regionBias?: string;
    /** Explicitly mark this document as low priority. */
    lowPriority?: boolean;
}

export declare interface JobDescription {
    data: JobDescriptionData | null;
    meta: Meta;
    error: ErrorModel;
}

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
    contactEmail?: TextAnnotationV2Update;
    contactName?: TextAnnotationV2Update;
    contactPhone?: TextAnnotationV2Update;
    startDate?: DateAnnotationV2Update;
    endDate?: DateAnnotationV2Update;
    jobType?: TextAnnotationV2Update;
    languages?: (LanguageAnnotationV2Update | null)[];
    skills?: (SkillAnnotationV2Update | null)[];
    organizationName?: TextAnnotationV2Update;
    organizationWebsite?: TextAnnotationV2Update;
    educationLevel?: TextAnnotationV2Update;
    educationAccreditation?: TextAnnotationV2Update;
    expectedRemuneration?: ExpectedRemunerationAnnotationV2Update;
    location?: LocationAnnotationV2Update;
    certifications?: (TextAnnotationV2Update | null)[];
    yearsExperience?: YearsExperienceAnnotationV2Update;
}

/** JobDescriptionRequestBody */
export declare interface JobDescriptionRequestBody {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to download the job description. */
    url?: string;
    /** A JSON-encoded string of the `JobDescriptionData` object. */
    data?: JobDescriptionDataUpdate;
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: boolean;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** A JSON representation of the RegionBias object. */
    regionBias?: string;
    /** Explicitly mark this document as low priority. */
    lowPriority?: boolean;
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
    actions?: JobDescriptionSearchConfigActionsItem[];
    customFieldsConfig?: CustomFieldConfig[];
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

export declare type JobDescriptionSearchDetailLocationValue = Location_2 & Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1 & {};

export declare interface JobDescriptionSearchDetailManagementLevel {
    level?: ManagementLevel;
    match?: boolean;
}

export declare interface JobDescriptionSearchDetailOccupationGroup {
    missing?: number[];
    value?: JobDescriptionSearchDetailOccupationGroupValue;
}

export declare type JobDescriptionSearchDetailOccupationGroupValue = OccupationGroup & ComponentsRe6GnoSchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueAllof1 & {};

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

export declare type JobTitleAnnotation = Annotation & JobTitleParsed & {};

export declare type JobTitleAnnotationUpdate = AnnotationV2Base & JobTitleParsed & {};

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
    /** EMSI id of the normalised job title. */
    emsiId?: string;
    managementLevel?: string;
    classification?: JobTitleParsedClassification;
}

export declare interface JobTitleSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

/** Known values of {@link Enum2} that the service accepts. */
export declare enum KnownEnum2 {
    HrXml = "hr-xml"
}

/** Known values of {@link Enum5} that the service accepts. */
export declare enum KnownEnum5 {
    Resumes = "resumes",
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link Enum8} that the service accepts. */
export declare enum KnownEnum8 {
    Resumes = "resumes",
    JobDescriptions = "job_descriptions"
}

/** Known values of {@link GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType} that the service accepts. */
export declare enum KnownGetResponses200ContentApplicationJsonSchemaResultsItemDocumentType {
    Resumes = "resumes",
    JobDescriptions = "job_descriptions"
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
    DocumentClassifyCompleted = "document.classify.completed",
    DocumentRejected = "document.rejected"
}

/** Known values of {@link ResthookSubscriptionVersion} that the service accepts. */
export declare enum KnownResthookSubscriptionVersion {
    V1 = "v1",
    V2 = "v2",
    V3 = "v3"
}

/** Known values of {@link ResumeDataLanguagesItem} that the service accepts. */
export declare enum KnownResumeDataLanguagesItem {
    Ainu = "Ainu",
    Akan = "Akan",
    Akkadian = "Akkadian",
    Amharic = "Amharic",
    Anam = "Anam",
    Arabic = "Arabic",
    Aramaic = "Aramaic",
    Arem = "Arem",
    Armenian = "Armenian",
    Awadhi = "Awadhi",
    Aymara = "Aymara",
    Azari = "Azari",
    Bagheli = "Bagheli",
    Bagri = "Bagri",
    Bahasa = "Bahasa",
    Bambara = "Bambara",
    Bangala = "Bangala",
    Bardi = "Bardi",
    Bassa = "Bassa",
    Batak = "Batak",
    Belarusian = "Belarusian",
    Bemba = "Bemba",
    Benga = "Benga",
    Bengali = "Bengali",
    Berber = "Berber",
    Bhojpuri = "Bhojpuri",
    Bislama = "Bislama",
    Brahui = "Brahui",
    Bulgarian = "Bulgarian",
    Bunu = "Bunu",
    Cambodian = "Cambodian",
    Carew = "Carew",
    Carib = "Carib",
    Catalan = "Catalan",
    Cebuano = "Cebuano",
    Chakma = "Chakma",
    Chamorro = "Chamorro",
    Chango = "Chango",
    Chewa = "Chewa",
    Croatian = "Croatian",
    Czech = "Czech",
    Dagbani = "Dagbani",
    Danish = "Danish",
    Dari = "Dari",
    Dayi = "Dayi",
    Dhatki = "Dhatki",
    Dhivehi = "Dhivehi",
    Dinka = "Dinka",
    Dogri = "Dogri",
    Duala = "Duala",
    Dutch = "Dutch",
    English = "English",
    Esperanto = "Esperanto",
    Estonian = "Estonian",
    Ewondo = "Ewondo",
    Faroese = "Faroese",
    Filipino = "Filipino",
    Finnish = "Finnish",
    Formula = "Formula",
    French = "French",
    Frisian = "Frisian",
    Friulian = "Friulian",
    Fula = "Fula",
    Gaelic = "Gaelic",
    Galo = "Galo",
    Garhwali = "Garhwali",
    Garifuna = "Garifuna",
    German = "German",
    Gikuyu = "Gikuyu",
    Gujarati = "Gujarati",
    Gujerati = "Gujerati",
    Gwere = "Gwere",
    Hawaiian = "Hawaiian",
    Haya = "Haya",
    Hebrew = "Hebrew",
    Hindi = "Hindi",
    Hmu = "Hmu",
    Hokkien = "Hokkien",
    Hopi = "Hopi",
    Hungarian = "Hungarian",
    Hup = "Hup",
    Ibanag = "Ibanag",
    Igbo = "Igbo",
    Ilokano = "Ilokano",
    Indonesian = "Indonesian",
    Intermediate = "Intermediate",
    Irish = "Irish",
    Italian = "Italian",
    Japanese = "Japanese",
    Jiba = "Jiba",
    Kachin = "Kachin",
    Kalenjin = "Kalenjin",
    Kamayo = "Kamayo",
    Kannada = "Kannada",
    Kaonde = "Kaonde",
    Kayan = "Kayan",
    Khandeshi = "Khandeshi",
    Khmer = "Khmer",
    Kikuyu = "Kikuyu",
    Kodava = "Kodava",
    Koma = "Koma",
    Kongo = "Kongo",
    Konkani = "Konkani",
    Korean = "Korean",
    Korwa = "Korwa",
    Kreyol = "Kreyol",
    Krio = "Krio",
    Kumaoni = "Kumaoni",
    Kurdish = "Kurdish",
    Kurukh = "Kurukh",
    Kwa = "Kwa",
    Ladino = "Ladino",
    Lango = "Lango",
    Latvian = "Latvian",
    Lawa = "Lawa",
    Lingala = "Lingala",
    Lithuanian = "Lithuanian",
    Lule = "Lule",
    Luxembourgish = "Luxembourgish",
    Magahi = "Magahi",
    Maithili = "Maithili",
    Malay = "Malay",
    Malayalam = "Malayalam",
    Malaysian = "Malaysian",
    Malvi = "Malvi",
    Maninka = "Maninka",
    Manipuri = "Manipuri",
    Manx = "Manx",
    Marathi = "Marathi",
    Mayan = "Mayan",
    Medumba = "Medumba",
    Memoni = "Memoni",
    Mewari = "Mewari",
    Mizo = "Mizo",
    Montenegrin = "Montenegrin",
    Mwan = "Mwan",
    Mwanga = "Mwanga",
    Ndebele = "Ndebele",
    Nepali = "Nepali",
    Nimadi = "Nimadi",
    Oriya = "Oriya",
    Oromo = "Oromo",
    Ovambo = "Ovambo",
    Pamona = "Pamona",
    Pangasinan = "Pangasinan",
    Pashto = "Pashto",
    Phoenician = "Phoenician",
    Polish = "Polish",
    Portuguese = "Portuguese",
    Pulaar = "Pulaar",
    Pular = "Pular",
    Punjabi = "Punjabi",
    Quecha = "Quecha",
    Rajasthani = "Rajasthani",
    Romanian = "Romanian",
    Russian = "Russian",
    Sakha = "Sakha",
    Sango = "Sango",
    Santhali = "Santhali",
    Saraiki = "Saraiki",
    Seim = "Seim",
    Shading = "Shading",
    Shama = "Shama",
    Shan = "Shan",
    Shona = "Shona",
    Silesian = "Silesian",
    Sindhi = "Sindhi",
    Slovak = "Slovak",
    Slovene = "Slovene",
    Soga = "Soga",
    Sogdian = "Sogdian",
    Sotho = "Sotho",
    Spanish = "Spanish",
    Sudanese = "Sudanese",
    Sumerian = "Sumerian",
    Surajpuri = "Surajpuri",
    Surigaonon = "Surigaonon",
    Swati = "Swati",
    Swazi = "Swazi",
    Swedish = "Swedish",
    Tagalog = "Tagalog",
    Tamil = "Tamil",
    Tausug = "Tausug",
    Telugu = "Telugu",
    Tetum = "Tetum",
    Tharu = "Tharu",
    Tibetan = "Tibetan",
    Tigrinya = "Tigrinya",
    Tripuri = "Tripuri",
    Tswana = "Tswana",
    Tulu = "Tulu",
    Turkish = "Turkish",
    Tuwali = "Tuwali",
    Ubi = "Ubi",
    Ukrainian = "Ukrainian",
    Urdu = "Urdu",
    Veps = "Veps",
    Vietnamese = "Vietnamese",
    Wagdi = "Wagdi",
    Waziri = "Waziri",
    Xhosa = "Xhosa",
    Yiddish = "Yiddish",
    Yoruba = "Yoruba"
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

/** Known values of {@link Version} that the service accepts. */
export declare enum KnownVersion {
    V1 = "v1",
    V2 = "v2",
    V3 = "v3"
}

export declare type LanguageAnnotation = Annotation & {
    parsed?: string;
};

export declare type LanguageAnnotationV2Update = AnnotationV2Base & {
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

export declare type LocationAnnotationV2Update = AnnotationV2Base & {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly parsed?: LocationAnnotationV2UpdateParsed;
};

export declare type LocationAnnotationV2UpdateParsed = Location_2 & {};

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
    parents?: OccupationGroup[];
}

export declare interface OccupationGroupSearchResult {
    match?: boolean;
    code: number;
    name: string;
    children: OccupationGroup[];
    parents?: OccupationGroup[];
}

export declare interface OccupationGroupSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
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

export declare interface Paths14R8PdgV2IndexNameDocumentsPostResponses201ContentApplicationJsonSchema {
    /** Unique identifier for the document. */
    document?: string;
}

export declare type Paths14VxierV2ResumesGetResponses200ContentApplicationJsonSchema = PaginatedResponse & PathsX4VofmV2ResumesGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare interface Paths15O3Zn5V2JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema {
    configOverride?: JobDescriptionSearchConfig;
}

export declare interface Paths16Tz5M5V2IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems {
    document?: string;
}

export declare interface Paths18Iqsr4V2IndexGetResponses200ContentApplicationJsonSchema {
    /** Number of indexes in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Get200ApplicationJsonPropertiesItemsItem[];
}

export declare interface Paths18ZzckpV2InvoicesGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: Meta[];
}

export declare type Paths1D957B5V2RedactedResumesGetResponses200ContentApplicationJsonSchema = PaginatedResponse & Paths1Q5Zfv5V2RedactedResumesGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare interface Paths1Q5Zfv5V2RedactedResumesGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: Meta[];
}

export declare interface Paths1Sikw07V2IndexPostResponses201ContentApplicationJsonSchema {
    name?: string;
    documentType?: Enum8;
}

export declare interface Paths23Ubd8V2ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema {
    configOverride?: ResumeSearchConfig;
}

export declare interface PathsAf7Nd4V2IndexNameDocumentsGetResponses200ContentApplicationJsonSchema {
    /** Number of indexed documents in result */
    count?: number;
    /** URL to request next page of results */
    next?: string;
    /** URL to request previous page of results */
    previous?: string;
    results?: Paths16Tz5M5V2IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems[];
}

export declare type PathsChbpqfV2JobDescriptionsGetResponses200ContentApplicationJsonSchema = PaginatedResponse & PathsV2IwngV2JobDescriptionsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare interface PathsDd1FapV2ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: ResthookSubscription[];
}

export declare type PathsGfm23QV2InvoicesGetResponses200ContentApplicationJsonSchema = PaginatedResponse & Paths18ZzckpV2InvoicesGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare type PathsMda0LlV2ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema = PaginatedResponse & PathsDd1FapV2ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export declare interface PathsV2IwngV2JobDescriptionsGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: Meta[];
}

export declare interface PathsX4VofmV2ResumesGetResponses200ContentApplicationJsonSchemaAllof1 {
    results?: Meta[];
}

export declare interface PathsYg099PV2IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema {
    document?: string;
}

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
    pageIndex?: number;
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
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to download the resume. */
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
 * **document.classify.completed** \
 * **document.rejected**
 */
export declare type ResthookEvent = string;

export declare interface ResthookSubscription {
    /** Resthook subscription's ID. */
    id: number;
    /** The event name to subscribe to. */
    event: ResthookEvent;
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
    /** Version of the resthook subscription. Determines the resthook body being fired. */
    version?: Version;
}

export declare interface ResthookSubscriptionUpdate {
    /** The event name to subscribe to. */
    event?: ResthookEvent;
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

/** ResumeRequestBody */
export declare interface ResumeRequestBody {
    /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
    file?: coreRestPipeline.RequestBodyType;
    /** URL to download the resume. */
    url?: string;
    /** A JSON-encoded string of the `ResumeData` object. */
    data?: ResumeData;
    /** Deprecated in favor of `customIdentifier`. */
    identifier?: string;
    /** Specify a custom identifier for the document if you need one, not required to be unique. */
    customIdentifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
    rejectDuplicates?: boolean;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    language?: string;
    /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** A JSON representation of the RegionBias object. */
    regionBias?: string;
    /** Explicitly mark this document as low priority. */
    lowPriority?: boolean;
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
    actions?: ResumeSearchConfigActionsItem[];
    customFieldsConfig?: CustomFieldConfig[];
}

export declare interface ResumeSearchConfigActionsItem {
    /** Human readable label to display in the UI */
    label?: string;
    /** Name of the event to be triggered */
    eventName?: string;
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
    parsed?: string;
};

export declare type SkillAnnotationV2Update = AnnotationV2Base & {
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly parsed?: string;
};

export declare interface SkillsSearchScoreComponent {
    value?: string;
    label: string;
    score?: number;
}

export declare type TextAnnotation = Annotation & {
    parsed?: string;
};

export declare type TextAnnotationV2Update = AnnotationV2Base & {
    parsed?: string;
};

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

export declare type YearsExperienceAnnotationV2Update = AnnotationV2Base & {
    /** Years of experience range */
    parsed?: YearsExperienceAnnotationV2UpdateParsed;
};

/** Years of experience range */
export declare interface YearsExperienceAnnotationV2UpdateParsed {
    /** Minimum years of experience */
    minimum?: number;
    /** Maximum years of experience */
    maximum?: number;
}

export { }
