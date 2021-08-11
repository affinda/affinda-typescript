import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
export interface Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema {
    count?: number;
    next?: string;
    previous?: string;
    results?: Meta[];
}
export interface Meta {
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
export interface User {
    documentCount?: number;
    redactedDocumentCount?: number;
    reformattedResumeCount?: number;
    parsingCredits?: number;
    redactionCredits?: number;
    reformattingCredits?: number;
}
export interface ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema {
    detail?: string;
    statusCode?: number;
}
export interface PathsWt95EfResumesPostResponses201ContentApplicationJsonSchema {
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Optional filename of the file */
    fileName?: string;
}
export interface Components10Bc157ResponsesConversionerrorContentApplicationJsonSchema {
    fileForConversion?: string;
}
export interface ComponentsP4H6CrResponses404ErrorContentApplicationJsonSchema {
    detail?: string;
    statusCode?: number;
}
export interface Resume {
    data?: ResumeData;
    meta?: Meta;
    error?: ErrorModel;
}
export interface ResumeData {
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
    skills?: string[];
    skillsDetails?: ResumeDataSkillsDetailsItem[];
    certifications?: string[];
    publications?: string[];
    referees?: ResumeDataRefereesItem[];
    sections?: ResumeDataSectionsItem[];
    /** Probability that the given document is a resume. Values below 30 suggest that the resume is not a resume. */
    isResumeProbability?: number;
}
export interface ResumeDataName {
    raw?: string;
    first?: string;
    last?: string;
    middle?: string;
    title?: string;
}
export interface Location {
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
export interface ResumeDataEducationItem {
    organization?: string;
    accreditation?: ResumeDataEducationItemAccreditation;
    grade?: ResumeDataEducationItemGrade;
    location?: Location;
    dates?: ResumeDataEducationItemDates;
}
export interface ResumeDataEducationItemAccreditation {
    education?: string;
    inputStr?: string;
    matchStr?: string;
    educationLevel?: string;
}
export interface ResumeDataEducationItemGrade {
    raw?: string;
    metric?: string;
    value?: string;
}
export interface ResumeDataEducationItemDates {
    completionDate?: Date;
    isCurrent?: boolean;
    startDate?: Date;
}
export interface ResumeDataWorkExperienceItem {
    jobTitle?: string;
    organization?: string;
    location?: Location;
    jobDescription?: string;
    dates?: ResumeDataWorkExperienceItemDates;
}
export interface ResumeDataWorkExperienceItemDates {
    startDate?: Date;
    endDate?: Date;
    monthsInPosition?: number;
    isCurrent?: boolean;
}
export interface ResumeDataSkillsDetailsItem {
    name?: string;
    lastUsed?: string;
    numberOfMonths?: number;
    type?: string;
    sources?: ResumeDataSkillsDetailsPropertiesItemsItem[];
}
export interface ResumeDataSkillsDetailsPropertiesItemsItem {
    section?: string;
    position?: number;
}
export interface ResumeDataRefereesItem {
    name?: string;
    text?: string;
    email?: string;
    number?: string;
}
export interface ResumeDataSectionsItem {
    sectionType?: string;
    bbox?: number[];
    pageIndex?: number;
    text?: string;
}
export interface ErrorModel {
    errorCode: number | null;
    errorDetail: string | null;
}
export interface Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema {
    count?: number;
    next?: string;
    previous?: string;
    results?: Meta[];
}
export interface Paths1VouiekRedactedResumesPostResponses201ContentApplicationJsonSchema {
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
export interface RedactedDocument {
    data?: RedactedDocumentData;
    meta?: Meta;
    error?: ErrorModel;
}
export interface RedactedDocumentData {
    redactedPdf?: string;
}
export interface Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema {
    count?: number;
    next?: string;
    previous?: string;
    results?: Get200ApplicationJsonPropertiesItemsItem[];
}
export interface Get200ApplicationJsonPropertiesItemsItem {
    identifier: string;
    formatFile: string;
}
export interface Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema {
    count?: number;
    next?: string;
    previous?: string;
    results?: Meta[];
}
export interface Paths1Wyf6PlReformattedResumesPostResponses201ContentApplicationJsonSchema {
    /** Optional filename of the file */
    fileName?: string;
    /** Unique identifier for the resume. If creating a document and left blank, one will be automatically generated. */
    identifier?: string;
    /** Identifier of the format used */
    resumeFormat?: string;
}
export interface ReformattedDocument {
    data?: ReformattedDocumentData;
    meta?: Meta;
    error?: ErrorModel;
}
export interface ReformattedDocumentData {
    reformattedFile?: string;
}
export interface Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema {
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
export interface Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema {
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
export interface PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema {
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
/** Optional parameters. */
export interface AffindaAPIGetAllResumesOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getAllResumes operation. */
export declare type AffindaAPIGetAllResumesResponse = Paths1Vwy7YkResumesGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface AffindaAPICreateResumeOptionalParams extends coreClient.OperationOptions {
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
export interface AffindaAPIGetResumeOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getResume operation. */
export declare type AffindaAPIGetResumeResponse = Resume;
/** Optional parameters. */
export interface AffindaAPIDeleteResumeOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the deleteResume operation. */
export declare type AffindaAPIDeleteResumeResponse = ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema;
/** Optional parameters. */
export interface AffindaAPIGetAllRedactedResumesOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getAllRedactedResumes operation. */
export declare type AffindaAPIGetAllRedactedResumesResponse = Paths1My65ZdRedactedResumesGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface AffindaAPICreateRedactedResumeOptionalParams extends coreClient.OperationOptions {
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
export interface AffindaAPIGetRedactedResumeOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getRedactedResume operation. */
export declare type AffindaAPIGetRedactedResumeResponse = RedactedDocument;
/** Optional parameters. */
export interface AffindaAPIDeleteRedactedResumeOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the deleteRedactedResume operation. */
export declare type AffindaAPIDeleteRedactedResumeResponse = ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema;
/** Optional parameters. */
export interface AffindaAPIGetAllResumeFormatsOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getAllResumeFormats operation. */
export declare type AffindaAPIGetAllResumeFormatsResponse = Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface AffindaAPIGetAllReformattedResumesOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getAllReformattedResumes operation. */
export declare type AffindaAPIGetAllReformattedResumesResponse = Paths4Fg3YrReformattedResumesGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface AffindaAPICreateReformattedResumeOptionalParams extends coreClient.OperationOptions {
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
export interface AffindaAPIGetReformattedResumeOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getReformattedResume operation. */
export declare type AffindaAPIGetReformattedResumeResponse = ReformattedDocument;
/** Optional parameters. */
export interface AffindaAPIDeleteReformattedResumeOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the deleteReformattedResume operation. */
export declare type AffindaAPIDeleteReformattedResumeResponse = ComponentsMzfa75Responses401ErrorContentApplicationJsonSchema;
/** Optional parameters. */
export interface AffindaAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** The numbers of documents to return, defaults to 300. */
    limit?: number;
    /** The number of documents to skip before starting to collect the result set. */
    offset?: number;
    /** Overrides client endpoint. */
    endpoint?: string;
}
//# sourceMappingURL=index.d.ts.map