import { AccessToken } from '@azure/identity';
import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import * as coreRestPipeline from '@azure/core-rest-pipeline';
import { GetTokenOptions } from '@azure/identity';
import { TokenCredential } from '@azure/identity';

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
     * Uploads a resume for parsing.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/resumes/{identifier}](#operation/getResume) endpoint to check processing status and retrieve
     * results.
     * @param options The options parameters.
     */
    createResume(options?: AffindaAPICreateResumeOptionalParams): Promise<AffindaAPICreateResumeResponse>;
    /**
     * Returns all the parse results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/resumes](#operation/createResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getResume(identifier: string | null, options?: AffindaAPIGetResumeOptionalParams): Promise<AffindaAPIGetResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Resume identifier
     * @param options The options parameters.
     */
    deleteResume(identifier: string | null, options?: AffindaAPIDeleteResumeOptionalParams): Promise<AffindaAPIDeleteResumeResponse>;
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
     * [/redacted_resumes](#operation/createRedactedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getRedactedResume(identifier: string | null, options?: AffindaAPIGetRedactedResumeOptionalParams): Promise<AffindaAPIGetRedactedResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteRedactedResume(identifier: string | null, options?: AffindaAPIDeleteRedactedResumeOptionalParams): Promise<AffindaAPIDeleteRedactedResumeResponse>;
    /**
     * Returns all the resume formats
     * @param options The options parameters.
     */
    getAllResumeFormats(options?: AffindaAPIGetAllResumeFormatsOptionalParams): Promise<AffindaAPIGetAllResumeFormatsResponse>;
    /**
     * Returns all the reformatted resume information for that resume
     * @param options The options parameters.
     */
    getAllReformattedResumes(options?: AffindaAPIGetAllReformattedResumesOptionalParams): Promise<AffindaAPIGetAllReformattedResumesResponse>;
    /**
     * Uploads a resume for reformatting.
     * @param resumeFormat Identifier of the format used
     * @param options The options parameters.
     */
    createReformattedResume(resumeFormat: string, options?: AffindaAPICreateReformattedResumeOptionalParams): Promise<AffindaAPICreateReformattedResumeResponse>;
    /**
     * Returns all the reformatting results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/reformatted_resumes](#operation/createReformattedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getReformattedResume(identifier: string | null, options?: AffindaAPIGetReformattedResumeOptionalParams): Promise<AffindaAPIGetReformattedResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteReformattedResume(identifier: string | null, options?: AffindaAPIDeleteReformattedResumeOptionalParams): Promise<AffindaAPIDeleteReformattedResumeResponse>;
}

export declare class AffindaAPIContext extends coreClient.ServiceClient {
    $host: string;
    limit?: number;
    offset?: number;
    /**
     * Initializes a new instance of the AffindaAPIContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: AffindaAPIOptionalParams);
}

/** Optional parameters. */
export declare interface AffindaAPICreateRedactedResumeOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    resumeLanguage?: string;
    /** The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry. */
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
}

/** Contains response data for the createRedactedResume operation. */
export declare type AffindaAPICreateRedactedResumeResponse = RedactedResume;

/** Optional parameters. */
export declare interface AffindaAPICreateReformattedResumeOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    resumeLanguage?: string;
}

/** Contains response data for the createReformattedResume operation. */
export declare type AffindaAPICreateReformattedResumeResponse = ReformattedResume;

/** Optional parameters. */
export declare interface AffindaAPICreateResumeOptionalParams extends coreClient.OperationOptions {
    /** File as binary data blob */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    resumeLanguage?: string;
    /** The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

/** Contains response data for the createResume operation. */
export declare type AffindaAPICreateResumeResponse = Resume;

/** Optional parameters. */
export declare interface AffindaAPIDeleteRedactedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteRedactedResume operation. */
export declare type AffindaAPIDeleteRedactedResumeResponse = ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIDeleteReformattedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteReformattedResume operation. */
export declare type AffindaAPIDeleteReformattedResumeResponse = ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIDeleteResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteResume operation. */
export declare type AffindaAPIDeleteResumeResponse = ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllRedactedResumesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllRedactedResumes operation. */
export declare type AffindaAPIGetAllRedactedResumesResponse = GetAllDocumentsResults;

/** Optional parameters. */
export declare interface AffindaAPIGetAllReformattedResumesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllReformattedResumes operation. */
export declare type AffindaAPIGetAllReformattedResumesResponse = GetAllDocumentsResults;

/** Optional parameters. */
export declare interface AffindaAPIGetAllResumeFormatsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllResumeFormats operation. */
export declare type AffindaAPIGetAllResumeFormatsResponse = Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllResumesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllResumes operation. */
export declare type AffindaAPIGetAllResumesResponse = GetAllDocumentsResults;

/** Optional parameters. */
export declare interface AffindaAPIGetRedactedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRedactedResume operation. */
export declare type AffindaAPIGetRedactedResumeResponse = RedactedResume;

/** Optional parameters. */
export declare interface AffindaAPIGetReformattedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getReformattedResume operation. */
export declare type AffindaAPIGetReformattedResumeResponse = ReformattedResume;

/** Optional parameters. */
export declare interface AffindaAPIGetResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getResume operation. */
export declare type AffindaAPIGetResumeResponse = Resume;

/** Optional parameters. */
export declare interface AffindaAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** The numbers of documents to return, defaults to 300. */
    limit?: number;
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** Overrides client endpoint. */
    endpoint?: string;
}

export declare class AffindaCredential implements TokenCredential {
    token: string;
    constructor(token: string);
    getToken(scopes: string | string[], options?: GetTokenOptions): Promise<AccessToken | null>;
}

export declare interface Components8Sxs33Responses400ErrorContentApplicationJsonSchema {
    statusCode?: number;
    detail?: string;
}

export declare interface ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema {
    detail?: string;
    statusCode?: number;
}

export declare interface ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema {
    detail?: string;
    statusCode?: number;
}

export declare interface ErrorModel {
    errorCode?: string;
    errorDetail?: string;
}

export declare interface Get200ApplicationJsonPropertiesItemsItem {
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier: string | null;
    /** The template to apply */
    formatFile: string;
}

export declare interface GetAllDocumentsResults {
    count?: number;
    next?: string;
    previous?: string;
    results?: Meta[];
}

export declare interface Location {
    formatted?: string;
    postalCode?: string;
    state?: string;
    country?: string;
    rawInput: string;
    streetNumber?: string;
    street?: string;
    apartmentNumber?: string;
    city?: string;
}

export declare interface Meta {
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier: string | null;
    /** Optional filename of the file */
    fileName?: string;
    /** If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling */
    ready: boolean;
    /** The datetime when the document was ready */
    readyDt?: Date;
    /** If true, some exception was raised during processing. Check the 'error' field of the main return object. */
    failed: boolean;
    /** The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

export declare interface Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema {
    count?: number;
    next?: string;
    previous?: string;
    results?: Get200ApplicationJsonPropertiesItemsItem[];
}

export declare interface Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema {
    /** File as binary data blob */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    resumeLanguage?: string;
    /** The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

export declare interface Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema {
    /** File as binary data blob */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    resumeLanguage?: string;
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
    /** The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

export declare interface PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema {
    /** File as binary data blob */
    file?: coreRestPipeline.RequestBodyType;
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
    /** URL to file to download and process */
    url?: string;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    resumeLanguage?: string;
    /** Identifier of the format used */
    resumeFormat: string;
    /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
    wait?: string;
}

export declare interface RedactedResume {
    data: RedactedResumeData | null;
    meta: Meta;
    error: ErrorModel;
}

export declare interface RedactedResumeData {
    redactedPdf?: string;
}

export declare interface ReformattedResume {
    data: ReformattedResumeData | null;
    meta: Meta;
    error: ErrorModel;
}

export declare interface ReformattedResumeData {
    reformattedFile?: string;
}

export declare interface Resume {
    data: ResumeData | null;
    meta: Meta;
    error: ErrorModel;
}

export declare interface ResumeData {
    name?: ResumeDataName;
    phoneNumbers?: string[];
    websites?: string[];
    emails?: string[];
    dateOfBirth?: string;
    location?: Location;
    objective?: string;
    languages?: string[];
    summary?: string;
    totalYearsExperience?: number;
    /** base64 encoded string */
    headShot?: coreRestPipeline.RequestBodyType;
    education?: ResumeDataEducationItem[];
    workExperience?: ResumeDataWorkExperienceItem[];
    skills?: ResumeDataSkillsItem[];
    certifications?: string[];
    publications?: string[];
    referees?: ResumeDataRefereesItem[];
    sections?: ResumeDataSectionsItem[];
    /** Probability that the given document is a resume. Values below 30 suggest that the resume is not a resume. */
    isResumeProbability?: number;
    /** All of the raw text of the parsed resume, example is shortened for readiblity */
    rawText?: string;
}

export declare interface ResumeDataEducationItem {
    organization?: string;
    accreditation?: ResumeDataEducationItemAccreditation;
    grade?: ResumeDataEducationItemGrade;
    location?: Location;
    dates?: ResumeDataEducationItemDates;
}

export declare interface ResumeDataEducationItemAccreditation {
    education?: string;
    inputStr?: string;
    matchStr?: string;
    educationLevel?: string;
}

export declare interface ResumeDataEducationItemDates {
    completionDate?: Date;
    isCurrent?: boolean;
    startDate?: Date;
}

export declare interface ResumeDataEducationItemGrade {
    raw?: string;
    metric?: string;
    value?: string;
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
}

export declare interface ResumeDataSectionsItem {
    sectionType?: string;
    bbox?: number[];
    pageIndex?: number;
    text?: string;
}

export declare interface ResumeDataSkillsItem {
    name?: string;
    lastUsed?: string;
    numberOfMonths?: number;
    type?: string;
    sources?: ResumeDataSkillsPropertiesItemsItem[];
}

export declare interface ResumeDataSkillsPropertiesItemsItem {
    section?: string;
    position?: number;
}

export declare interface ResumeDataWorkExperienceItem {
    jobTitle?: string;
    organization?: string;
    location?: Location;
    jobDescription?: string;
    dates?: ResumeDataWorkExperienceItemDates;
}

export declare interface ResumeDataWorkExperienceItemDates {
    startDate?: Date;
    endDate?: Date;
    monthsInPosition?: number;
    isCurrent?: boolean;
}

export { }