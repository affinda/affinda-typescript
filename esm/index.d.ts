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
    getResume(identifier: string, options?: AffindaAPIGetResumeOptionalParams): Promise<AffindaAPIGetResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Resume identifier
     * @param options The options parameters.
     */
    deleteResume(identifier: string, options?: AffindaAPIDeleteResumeOptionalParams): Promise<AffindaAPIDeleteResumeResponse>;
    /**
     * Returns all the redacted resume information for that resume
     * @param options The options parameters.
     */
    getAllRedactedResumes(options?: AffindaAPIGetAllRedactedResumesOptionalParams): Promise<AffindaAPIGetAllRedactedResumesResponse>;
    /**
     * Uploads a resume for redacting.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/redacted_resumes/{identifier}](#operation/getRedactedResume) endpoint to check processing status
     * and retrieve results.
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
    getRedactedResume(identifier: string, options?: AffindaAPIGetRedactedResumeOptionalParams): Promise<AffindaAPIGetRedactedResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteRedactedResume(identifier: string, options?: AffindaAPIDeleteRedactedResumeOptionalParams): Promise<AffindaAPIDeleteRedactedResumeResponse>;
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
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/reformatted_resumes/{identifier}](#operation/getReformattedResume) endpoint to check processing
     * status and retrieve results.
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
    getReformattedResume(identifier: string, options?: AffindaAPIGetReformattedResumeOptionalParams): Promise<AffindaAPIGetReformattedResumeResponse>;
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteReformattedResume(identifier: string, options?: AffindaAPIDeleteReformattedResumeOptionalParams): Promise<AffindaAPIDeleteReformattedResumeResponse>;
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
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    resumeLanguage?: string;
    /** The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
    /** Whether to redact headshot */
    redactHeadshot?: boolean;
    /** Whether to redact personal details (e.g. name, address) */
    redactPersonalDetails?: boolean;
    /** Whether to redact work details (e.g. company names) */
    redactWorkDetails?: boolean;
    /** Whether to redact education details (e.g. university names) */
    redactEducationDetails?: boolean;
    /** Whether to redact referee details */
    redactReferees?: boolean;
    /** Whether to redact location names */
    redactLocations?: boolean;
    /** Whether to redact dates */
    redactDates?: boolean;
}

/** Contains response data for the createRedactedResume operation. */
export declare type AffindaAPICreateRedactedResumeResponse = Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema;

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
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    resumeLanguage?: string;
}

/** Contains response data for the createReformattedResume operation. */
export declare type AffindaAPICreateReformattedResumeResponse = Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema;

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
    /** If true (default), will return a response only after resume processing has completed. If False, will return an identifier, which can be polled at the GET endpoint until processing is complete. */
    wait?: boolean;
    /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
    resumeLanguage?: string;
    /** The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

/** Contains response data for the createResume operation. */
export declare type AffindaAPICreateResumeResponse = PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema;

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
export declare type AffindaAPIGetAllRedactedResumesResponse = Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllReformattedResumesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllReformattedResumes operation. */
export declare type AffindaAPIGetAllReformattedResumesResponse = Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllResumeFormatsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllResumeFormats operation. */
export declare type AffindaAPIGetAllResumeFormatsResponse = Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetAllResumesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getAllResumes operation. */
export declare type AffindaAPIGetAllResumesResponse = Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface AffindaAPIGetRedactedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRedactedResume operation. */
export declare type AffindaAPIGetRedactedResumeResponse = RedactedDocument;

/** Optional parameters. */
export declare interface AffindaAPIGetReformattedResumeOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getReformattedResume operation. */
export declare type AffindaAPIGetReformattedResumeResponse = ReformattedDocument;

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

export declare interface Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema {
    fileForConversion?: string;
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
    errorCode: number | null;
    errorDetail: string | null;
}

export declare interface Get200ApplicationJsonPropertiesItemsItem {
    identifier: string;
    formatFile: string;
}

declare interface Location_2 {
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
export { Location_2 as Location }

export declare interface Meta {
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier: string | null;
    /** Optional filename of the file */
    fileName?: string;
    /** If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling */
    ready: boolean;
    /** The datetime when the document was ready */
    readyDt: Date | null;
    /** If true, some exception was raised during processing. Check the 'error' field of the main return object. */
    failed: boolean;
    user: User;
    /** The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry. */
    expiryTime: string | null;
}

export declare interface Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema {
    count?: number;
    next?: string;
    previous?: string;
    results?: Meta[];
}

export declare interface Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema {
    count?: number;
    next?: string;
    previous?: string;
    results?: Get200ApplicationJsonPropertiesItemsItem[];
}

export declare interface Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema {
    fileName?: string;
    identifier?: string;
    redactHeadshot?: boolean;
    redactPersonalDetails?: boolean;
    redactWorkDetails?: boolean;
    redactEducationDetails?: boolean;
    redactReferees?: boolean;
    redactLocations?: boolean;
    redactDates?: boolean;
}

export declare interface Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema {
    count?: number;
    next?: string;
    previous?: string;
    results?: Meta[];
}

export declare interface Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema {
    /** Optional filename of the file */
    fileName?: string;
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Identifier of the format used */
    resumeFormat?: string;
}

export declare interface Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema {
    count?: number;
    next?: string;
    previous?: string;
    results?: Meta[];
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
    /** If true (default), will return a response only after resume processing has completed. If False, will return an identifier, which can be polled at the GET endpoint until processing is complete. */
    wait?: boolean;
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
    /** Whether to redact headshot */
    redactHeadshot?: boolean;
    /** Whether to redact personal details (e.g. name, address) */
    redactPersonalDetails?: boolean;
    /** Whether to redact work details (e.g. company names) */
    redactWorkDetails?: boolean;
    /** Whether to redact education details (e.g. university names) */
    redactEducationDetails?: boolean;
    /** Whether to redact referee details */
    redactReferees?: boolean;
    /** Whether to redact location names */
    redactLocations?: boolean;
    /** Whether to redact dates */
    redactDates?: boolean;
    /** The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry. */
    expiryTime?: string;
}

export declare interface PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema {
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
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
}

export declare interface RedactedDocument {
    data?: RedactedDocumentData;
    meta?: Meta;
    error?: ErrorModel;
}

export declare interface RedactedDocumentData {
    redactedPdf?: string;
}

export declare interface ReformattedDocument {
    data?: ReformattedDocumentData;
    meta?: Meta;
    error?: ErrorModel;
}

export declare interface ReformattedDocumentData {
    reformattedFile?: string;
}

export declare interface Resume {
    data?: ResumeData;
    meta?: Meta;
    error?: ErrorModel;
}

export declare interface ResumeData {
    name?: ResumeDataName;
    phoneNumbers?: string[];
    websites?: string[];
    emails?: string[];
    dateOfBirth?: string;
    location?: Location_2;
    objective?: string;
    languages?: string[];
    summary?: string;
    totalYearsExperience?: number;
    /** base64 encoded string */
    headShot?: coreRestPipeline.RequestBodyType;
    education?: ResumeDataEducationItem[];
    workExperience?: ResumeDataWorkExperienceItem[];
    skills?: string[];
    skillsDetails?: ResumeDataSkillsDetailsItem[];
    certifications?: string[];
    publications?: string[];
    referees?: ResumeDataRefereesItem[];
    sections?: ResumeDataSectionsItem[];
    /** Probability that the given document is a resume. Values below 30 suggest that the resume is not a resume. */
    isResumeProbability?: number;
}

export declare interface ResumeDataEducationItem {
    organization?: string;
    accreditation?: ResumeDataEducationItemAccreditation;
    grade?: ResumeDataEducationItemGrade;
    location?: Location_2;
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

export declare interface ResumeDataSkillsDetailsItem {
    name?: string;
    lastUsed?: string;
    numberOfMonths?: number;
    type?: string;
    sources?: ResumeDataSkillsDetailsPropertiesItemsItem[];
}

export declare interface ResumeDataSkillsDetailsPropertiesItemsItem {
    section?: string;
    position?: number;
}

export declare interface ResumeDataWorkExperienceItem {
    jobTitle?: string;
    organization?: string;
    location?: Location_2;
    jobDescription?: string;
    dates?: ResumeDataWorkExperienceItemDates;
}

export declare interface ResumeDataWorkExperienceItemDates {
    startDate?: Date;
    endDate?: Date;
    monthsInPosition?: number;
    isCurrent?: boolean;
}

export declare interface User {
    documentCount?: number;
    redactedDocumentCount?: number;
    reformattedResumeCount?: number;
    parsingCredits?: number;
    redactionCredits?: number;
    reformattingCredits?: number;
}

export { }
