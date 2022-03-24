import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

export interface GetAllDocumentsResults {
  /** Number of documents in result */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  results?: Meta[];
}

export interface Meta {
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier: string | null;
  /** Optional filename of the file */
  fileName?: string;
  /** If true, the document has finished processing. Particularly useful if an endpoint request specified wait=False, when polling use this variable to determine when to stop polling */
  ready: boolean;
  /** The datetime when the document was ready */
  readyDt?: Date;
  /** If true, some exception was raised during processing. Check the 'error' field of the main return object. */
  failed: boolean;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
}

export interface RequestError {
  detail: string;
  statusCode: number;
}

export interface Resume {
  data: ResumeData | null;
  meta: Meta;
  error: ErrorModel;
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
  headShot?: Uint8Array;
  education?: ResumeDataEducationItem[];
  /** Prediction of the candidate's profession based on recent work experience */
  profession?: string;
  /** Linkedin account associated with the candidate */
  linkedin?: string;
  workExperience?: ResumeDataWorkExperienceItem[];
  skills?: ResumeDataSkillsItem[];
  certifications?: string[];
  publications?: string[];
  referees?: ResumeDataRefereesItem[];
  sections?: ResumeDataSectionsItem[];
  /** Probability that the given document is a resume. Values below 30 suggest that the document is not a resume. */
  isResumeProbability?: number;
  /** All of the raw text of the parsed resume, example is shortened for readiblity */
  rawText?: string;
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
  /** Two letter country code (ISO 3166-1 alpha-2) */
  countryCode?: string;
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
  occupation?: ResumeDataWorkExperienceItemOccupation;
}

export interface ResumeDataWorkExperienceItemDates {
  startDate?: Date;
  endDate?: Date;
  monthsInPosition?: number;
  isCurrent?: boolean;
}

export interface ResumeDataWorkExperienceItemOccupation {
  /** The raw (not normalized) job title pulled from the work experience entry */
  jobTitle?: string;
  /** Mapped onto the EMSI job title taxonomy if a sufficiently close match exists. */
  jobTitleNormalized?: string;
  managementLevel?: Enum0;
  classification?: Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification;
}

export interface Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification {
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

export interface ResumeDataSkillsItem {
  name?: string;
  lastUsed?: string;
  numberOfMonths?: number;
  type?: string;
  sources?: ResumeDataSkillsPropertiesItemsItem[];
}

export interface ResumeDataSkillsPropertiesItemsItem {
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
  errorCode?: string;
  errorDetail?: string;
}

export interface RedactedResume {
  data: RedactedResumeData | null;
  meta: Meta;
  error: ErrorModel;
}

export interface RedactedResumeData {
  /** URL to redacted PDF */
  redactedPdf?: string;
}

export interface Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema {
  /** Number of documents in result */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  results?: Get200ApplicationJsonPropertiesItemsItem[];
}

export interface Get200ApplicationJsonPropertiesItemsItem {
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier: string | null;
  /** URL to a template to apply */
  formatFile: string;
}

export interface ReformattedResume {
  data: ReformattedResumeData | null;
  meta: Meta;
  error: ErrorModel;
}

export interface ReformattedResumeData {
  reformattedFile?: string;
}

export interface GetAllInvoicesResults {
  /** Number of documents in result */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  results?: Meta[];
}

export interface Invoice {
  data: InvoiceData | null;
  meta: Meta;
  error: ErrorModel;
}

export interface InvoiceData {
  invoiceDate?: string;
  invoiceOrderDate?: string;
  paymentDateDue?: string;
  paymentAmountBase?: string;
  paymentAmountTax?: string;
  paymentAmountTotal?: string;
  paymentAmountPaid?: string;
  paymentAmountDue?: string;
  invoiceNumber?: string;
  invoicePurchaseOrderNumber?: string;
  supplierBusinessNumber?: string;
  customerNumber?: string;
  customerBusinessNumber?: string;
  paymentReference?: string;
  bankAccountNumber?: string;
  supplierVAT?: string;
  customerVAT?: string;
  bpayBillerCode?: string;
  bpayReference?: string;
  bankSortCode?: string;
  bankIban?: string;
  bankSwift?: string;
  bankBSB?: string;
  customerContactName?: string;
  customerCompanyName?: string;
  supplierCompanyName?: string;
  customerBillingAddress?: Location;
  customerDeliveryAddress?: Location;
  supplierAddress?: Location;
  customerPhoneNumber?: string;
  supplierPhoneNumber?: string;
  supplierFax?: string;
  customerEmail?: string;
  supplierEmail?: string;
  supplierWebsite?: string;
}

export interface Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** URL to file to download and process */
  url?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
}

export interface Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** URL to file to download and process */
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

export interface PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** URL to file to download and process */
  url?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** Identifier of the format used */
  resumeFormat: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
}

export interface Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** URL to file to download and process */
  url?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
}

/** Known values of {@link Enum0} that the service accepts. */
export enum KnownEnum0 {
  None = "None",
  Low = "Low",
  Mid = "Mid",
  Upper = "Upper"
}

/**
 * Defines values for Enum0. \
 * {@link KnownEnum0} can be used interchangeably with Enum0,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Low** \
 * **Mid** \
 * **Upper**
 */
export type Enum0 = string;

/** Optional parameters. */
export interface AffindaAPIGetAllResumesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllResumes operation. */
export type AffindaAPIGetAllResumesResponse = GetAllDocumentsResults;

/** Optional parameters. */
export interface AffindaAPICreateResumeOptionalParams
  extends coreClient.OperationOptions {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** URL to file to download and process */
  url?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
}

/** Contains response data for the createResume operation. */
export type AffindaAPICreateResumeResponse = Resume;

/** Optional parameters. */
export interface AffindaAPIGetResumeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResume operation. */
export type AffindaAPIGetResumeResponse = Resume;

/** Optional parameters. */
export interface AffindaAPIDeleteResumeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteResume operation. */
export type AffindaAPIDeleteResumeResponse = RequestError;

/** Optional parameters. */
export interface AffindaAPIGetAllRedactedResumesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllRedactedResumes operation. */
export type AffindaAPIGetAllRedactedResumesResponse = GetAllDocumentsResults;

/** Optional parameters. */
export interface AffindaAPICreateRedactedResumeOptionalParams
  extends coreClient.OperationOptions {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** URL to file to download and process */
  url?: string;
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
export type AffindaAPICreateRedactedResumeResponse = RedactedResume;

/** Optional parameters. */
export interface AffindaAPIGetRedactedResumeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getRedactedResume operation. */
export type AffindaAPIGetRedactedResumeResponse = RedactedResume;

/** Optional parameters. */
export interface AffindaAPIDeleteRedactedResumeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteRedactedResume operation. */
export type AffindaAPIDeleteRedactedResumeResponse = RequestError;

/** Optional parameters. */
export interface AffindaAPIGetAllResumeFormatsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllResumeFormats operation. */
export type AffindaAPIGetAllResumeFormatsResponse = Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPIGetAllReformattedResumesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllReformattedResumes operation. */
export type AffindaAPIGetAllReformattedResumesResponse = GetAllDocumentsResults;

/** Optional parameters. */
export interface AffindaAPICreateReformattedResumeOptionalParams
  extends coreClient.OperationOptions {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** URL to file to download and process */
  url?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
}

/** Contains response data for the createReformattedResume operation. */
export type AffindaAPICreateReformattedResumeResponse = ReformattedResume;

/** Optional parameters. */
export interface AffindaAPIGetReformattedResumeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getReformattedResume operation. */
export type AffindaAPIGetReformattedResumeResponse = ReformattedResume;

/** Optional parameters. */
export interface AffindaAPIDeleteReformattedResumeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteReformattedResume operation. */
export type AffindaAPIDeleteReformattedResumeResponse = RequestError;

/** Optional parameters. */
export interface AffindaAPIGetAllInvoicesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllInvoices operation. */
export type AffindaAPIGetAllInvoicesResponse = GetAllInvoicesResults;

/** Optional parameters. */
export interface AffindaAPICreateInvoiceOptionalParams
  extends coreClient.OperationOptions {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** URL to file to download and process */
  url?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
}

/** Contains response data for the createInvoice operation. */
export type AffindaAPICreateInvoiceResponse = Invoice;

/** Optional parameters. */
export interface AffindaAPIGetInvoiceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInvoice operation. */
export type AffindaAPIGetInvoiceResponse = Invoice;

/** Optional parameters. */
export interface AffindaAPIDeleteInvoiceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteInvoice operation. */
export type AffindaAPIDeleteInvoiceResponse = RequestError;

/** Optional parameters. */
export interface AffindaAPIOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** The numbers of documents to return, defaults to 300. */
  limit?: number;
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** Overrides client endpoint. */
  endpoint?: string;
}
