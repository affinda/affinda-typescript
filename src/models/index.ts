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
  expiryTime?: Date;
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
  managementLevel?: ManagementLevel;
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

export interface ResumeSearchParameters {
  indices: string[];
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  jobDescription?: string;
  jobTitles?: string[];
  jobTitlesCurrentOnly?: boolean;
  jobTitlesRequired?: boolean;
  jobTitlesWeight?: number;
  yearsExperienceMin?: number;
  yearsExperienceMax?: number;
  yearsExperienceRequired?: boolean;
  yearsExperienceWeight?: number;
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
  isCurrentStudent?: boolean;
  isCurrentStudentRequired?: boolean;
  isRecentGraduate?: boolean;
  isRecentGraduateRequired?: boolean;
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

export interface ResumeSearchParametersLocation {
  name?: string;
  coordinates?: ResumeSearchParametersLocationCoordinates;
  distance?: number;
  unit?: SearchLocationUnit;
}

export interface ResumeSearchParametersLocationCoordinates {
  latitude?: number;
  longitude?: number;
}

export interface ResumeSearchParametersSkill {
  name?: string;
  required?: boolean;
}

export interface ResumeSearch {
  /** Total number of results */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  parameters?: ResumeSearchParameters;
  results?: ResumeSearchResult[];
}

export interface ResumeSearchResult {
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier: string | null;
  score: number;
  pdf: string;
  name?: string;
  jobTitle: ResumeSearchScoreComponent;
  managementLevel: ResumeSearchScoreComponent;
  experience: ResumeSearchScoreComponent;
  skills: ResumeSearchScoreComponent;
  languages: ResumeSearchScoreComponent;
  location: ResumeSearchScoreComponent;
  education: ResumeSearchScoreComponent;
  occupationGroup: ResumeSearchScoreComponent;
  searchExpression: ResumeSearchScoreComponent;
}

export interface ResumeSearchScoreComponent {
  label: string;
  value?: string;
  score?: number;
}

export interface ResumeSearchDetail {
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

export interface ResumeSearchDetailJobTitle {
  missing?: string[];
  value?: ResumeSearchDetailJobTitleValueItem[];
}

export interface ResumeSearchDetailJobTitleValueItem {
  name?: string;
  startDate?: string;
  endDate?: string;
  companyName?: string;
  match?: boolean;
}

export interface ResumeSearchDetailLocation {
  missing?: ResumeSearchParametersLocation[];
  value?: ResumeSearchDetailLocationValue;
}

export interface ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1 {
  match?: boolean;
}

export interface ResumeSearchDetailEducation {
  missing?: ResumeSearchDetailEducationMissing;
  value?: ResumeSearchDetailEducationValueItem[];
}

export interface ResumeSearchDetailEducationMissing {
  degrees?: string[];
  highestDegreeTypes?: string[];
  institutions?: string[];
  currentStudent?: boolean;
  recentGraduate?: boolean;
}

export interface Education {
  organization?: string;
  accreditation?: Accreditation;
  grade?: string;
  location?: Location;
  dates?: EducationDates;
}

export interface Accreditation {
  education?: string;
  educationLevel?: string;
  inputStr?: string;
  matchStr?: string;
}

export interface EducationDates {
  startDate?: string;
  completionDate?: string;
  isCurrent?: boolean;
}

export interface ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1 {
  match?: boolean;
}

export interface ResumeSearchDetailSkills {
  missing?: ResumeSearchParametersSkill[];
  value?: ResumeSearchDetailSkillsValueItem[];
}

export interface ResumeSkill {
  name?: string;
  lastUsed?: string;
  numberOfMonths?: number;
  type?: string;
  sources?: ResumeSkillSourcesItem[];
}

export interface ResumeSkillSourcesItem {
  section?: ResumeSkillSourcesItemSection;
  position?: number;
}

export interface ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1 {
  match?: boolean;
}

export interface ResumeSearchDetailExperience {
  years?: number;
  match?: boolean;
}

export interface ResumeSearchDetailOccupationGroup {
  missing?: number[];
  value?: ResumeSearchDetailOccupationGroupValueItem[];
}

export interface OccupationGroup {
  code: number;
  name: string;
  children: OccupationGroup[];
}

export interface ComponentsK7P1F5SchemasResumesearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1 {
  match?: boolean;
}

export interface ResumeSearchDetailLanguages {
  missing?: ResumeSearchParametersSkill[];
  value?: ResumeSearchDetailLanguagesValueItem[];
}

export interface Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1 {
  match?: boolean;
}

export interface ResumeSearchDetailManagementLevel {
  level?: ManagementLevel;
  match?: boolean;
}

export interface ResumeSearchDetailSearchExpression {
  missing?: string[];
  value?: string[];
}

export interface GetAllJobDescriptionsResults {
  /** Number of documents in result */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  results?: Meta[];
}

export interface JobDescription {
  data: JobDescriptionData | null;
  meta: Meta;
  error: ErrorModel;
}

export interface JobDescriptionData {
  contactEmail?: TextAnnotation;
  contactName?: TextAnnotation;
  contactPhone?: TextAnnotation;
  startDate?: DateAnnotation;
  endDate?: DateAnnotation;
  jobType?: TextAnnotation;
  languages?: LanguageAnnotation[];
  skills?: SkillAnnotation[];
  organizationName?: TextAnnotation;
  organizationWebsite?: TextAnnotation;
  educationLevel?: TextAnnotation;
  educationAccreditation?: TextAnnotation;
  expectedRemuneration?: ExpectedRemunerationAnnotation;
  location?: LocationAnnotation;
  certifications?: TextAnnotation[];
}

export interface Annotation {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  rectangle: Rectangle;
  pageIndex: number | null;
  raw: string | null;
  confidence: number;
  isVerified: boolean;
  classification: string;
}

export interface Rectangle {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface ExpectedRemunerationAnnotationParsed {
  minimum?: number;
  maximum?: number;
  currency?: string;
  unit?: string;
}

export interface Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema {
  /** Number of indexes in result */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  results?: Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems[];
}

export interface Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems {
  name: string;
}

export interface Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema {
  name?: string;
}

export interface PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema {
  /** Number of indexed documents in result */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  results?: PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems[];
}

export interface PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems {
  document?: string;
}

export interface PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema {
  document?: string;
}

export interface PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema {
  /** Unique identifier for the document. */
  document?: string;
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
  meta: InvoiceMeta;
  error: ErrorModel;
}

export interface InvoiceData {
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
  supplierVAT?: InvoiceDataSupplierVAT;
  customerVAT?: InvoiceDataCustomerVAT;
  bpayBillerCode?: InvoiceDataBpayBillerCode;
  bpayReference?: InvoiceDataBpayReference;
  bankSortCode?: InvoiceDataBankSortCode;
  bankIban?: InvoiceDataBankIban;
  bankSwift?: InvoiceDataBankSwift;
  bankBSB?: InvoiceDataBankBSB;
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
}

export interface ComponentsTz04ToSchemasInvoicedataPropertiesPaymentamountbaseAllof2 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsY49P83SchemasInvoicedataPropertiesPaymentamounttaxAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components15Ayv0YSchemasInvoicedataPropertiesPaymentamounttotalAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components1LdfgdeSchemasInvoicedataPropertiesPaymentamountpaidAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components14V23KqSchemasInvoicedataPropertiesPaymentamountdueAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components7CqvqpSchemasInvoicedataPropertiesInvoicenumberAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components55Nj82SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof2 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsYe0TzySchemasInvoicedataPropertiesSupplierbusinessnumberAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components2Hu973SchemasInvoicedataPropertiesCustomernumberAllof2 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsRft7JdSchemasInvoicedataPropertiesCustomerbusinessnumberAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components1Wx56HlSchemasInvoicedataPropertiesPaymentreferenceAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components14Dm0XSchemasInvoicedataPropertiesBankaccountnumberAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components1Fdmi0OSchemasInvoicedataPropertiesSuppliervatAllof2 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsRsi73USchemasInvoicedataPropertiesCustomervatAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components1Bh8NlbSchemasInvoicedataPropertiesBpaybillercodeAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components1OmsnpSchemasInvoicedataPropertiesBpayreferenceAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components1Rbm6P1SchemasInvoicedataPropertiesBanksortcodeAllof2 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsE6Bjv3SchemasInvoicedataPropertiesBankibanAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components11Zi81FSchemasInvoicedataPropertiesBankswiftAllof2 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsUilt2MSchemasInvoicedataPropertiesBankbsbAllof2 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsWywi9WSchemasInvoicedataPropertiesCustomercontactnameAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components6DhvidSchemasInvoicedataPropertiesCustomercompanynameAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components1O4BmpySchemasInvoicedataPropertiesSuppliercompanynameAllof2 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsPs8Uo7SchemasInvoicedataPropertiesCustomerphonenumberAllof2 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsBvthtoSchemasInvoicedataPropertiesSupplierphonenumberAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components1ByjheSchemasInvoicedataPropertiesSupplierfaxAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components5PwavySchemasInvoicedataPropertiesCustomeremailAllof2 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsVyrnzuSchemasInvoicedataPropertiesSupplieremailAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components179Pdz6SchemasInvoicedataPropertiesSupplierwebsiteAllof2 {
  raw?: string;
  parsed?: string;
}

export interface Components17Ashz6SchemasInvoicePropertiesMetaAllof1 {
  /** Signed URL (valid for 60 minutes) to access the invoice review tool */
  reviewUrl?: string;
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
  expiryTime?: Date;
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
  expiryTime?: Date;
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

export interface PathsYlw96JobDescriptionsPostRequestbodyContentMultipartFormDataSchema {
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
  expiryTime?: Date;
}

export interface PathsSot11NIndexPostRequestbodyContentMultipartFormDataSchema {
  name?: string;
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
  expiryTime?: Date;
}

export type InvoiceMeta = Meta &
  Components17Ashz6SchemasInvoicePropertiesMetaAllof1 & {};

export type ResumeSearchDetailLocationValue = Location &
  ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1 & {};

export type ResumeSearchDetailEducationValueItem = Education &
  ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1 & {};

export type ResumeSearchDetailSkillsValueItem = ResumeSkill &
  ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1 & {};

export type ResumeSearchDetailLanguagesValueItem = ResumeSkill &
  Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1 & {};

export type ResumeSearchDetailOccupationGroupValueItem = OccupationGroup &
  ComponentsK7P1F5SchemasResumesearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1 & {};

export type TextAnnotation = Annotation & {
  parsed?: string;
};

export type DateAnnotation = Annotation & {
  parsed?: Date;
};

export type LanguageAnnotation = Annotation & {
  parsed?: string;
};

export type SkillAnnotation = Annotation & {
  parsed?: string;
};

export type ExpectedRemunerationAnnotation = Annotation & {
  parsed?: ExpectedRemunerationAnnotationParsed;
};

export type LocationAnnotation = Annotation & {
  parsed?: Location;
};

export type InvoiceDataPaymentAmountBase = TextAnnotation &
  ComponentsTz04ToSchemasInvoicedataPropertiesPaymentamountbaseAllof2 & {};

export type InvoiceDataPaymentAmountTax = TextAnnotation &
  ComponentsY49P83SchemasInvoicedataPropertiesPaymentamounttaxAllof2 & {};

export type InvoiceDataPaymentAmountTotal = TextAnnotation &
  Components15Ayv0YSchemasInvoicedataPropertiesPaymentamounttotalAllof2 & {};

export type InvoiceDataPaymentAmountPaid = TextAnnotation &
  Components1LdfgdeSchemasInvoicedataPropertiesPaymentamountpaidAllof2 & {};

export type InvoiceDataPaymentAmountDue = TextAnnotation &
  Components14V23KqSchemasInvoicedataPropertiesPaymentamountdueAllof2 & {};

export type InvoiceDataInvoiceNumber = TextAnnotation &
  Components7CqvqpSchemasInvoicedataPropertiesInvoicenumberAllof2 & {};

export type InvoiceDataInvoicePurchaseOrderNumber = TextAnnotation &
  Components55Nj82SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof2 & {};

export type InvoiceDataSupplierBusinessNumber = TextAnnotation &
  ComponentsYe0TzySchemasInvoicedataPropertiesSupplierbusinessnumberAllof2 & {};

export type InvoiceDataCustomerNumber = TextAnnotation &
  Components2Hu973SchemasInvoicedataPropertiesCustomernumberAllof2 & {};

export type InvoiceDataCustomerBusinessNumber = TextAnnotation &
  ComponentsRft7JdSchemasInvoicedataPropertiesCustomerbusinessnumberAllof2 & {};

export type InvoiceDataPaymentReference = TextAnnotation &
  Components1Wx56HlSchemasInvoicedataPropertiesPaymentreferenceAllof2 & {};

export type InvoiceDataBankAccountNumber = TextAnnotation &
  Components14Dm0XSchemasInvoicedataPropertiesBankaccountnumberAllof2 & {};

export type InvoiceDataSupplierVAT = TextAnnotation &
  Components1Fdmi0OSchemasInvoicedataPropertiesSuppliervatAllof2 & {};

export type InvoiceDataCustomerVAT = TextAnnotation &
  ComponentsRsi73USchemasInvoicedataPropertiesCustomervatAllof2 & {};

export type InvoiceDataBpayBillerCode = TextAnnotation &
  Components1Bh8NlbSchemasInvoicedataPropertiesBpaybillercodeAllof2 & {};

export type InvoiceDataBpayReference = TextAnnotation &
  Components1OmsnpSchemasInvoicedataPropertiesBpayreferenceAllof2 & {};

export type InvoiceDataBankSortCode = TextAnnotation &
  Components1Rbm6P1SchemasInvoicedataPropertiesBanksortcodeAllof2 & {};

export type InvoiceDataBankIban = TextAnnotation &
  ComponentsE6Bjv3SchemasInvoicedataPropertiesBankibanAllof2 & {};

export type InvoiceDataBankSwift = TextAnnotation &
  Components11Zi81FSchemasInvoicedataPropertiesBankswiftAllof2 & {};

export type InvoiceDataBankBSB = TextAnnotation &
  ComponentsUilt2MSchemasInvoicedataPropertiesBankbsbAllof2 & {};

export type InvoiceDataCustomerContactName = TextAnnotation &
  ComponentsWywi9WSchemasInvoicedataPropertiesCustomercontactnameAllof2 & {};

export type InvoiceDataCustomerCompanyName = TextAnnotation &
  Components6DhvidSchemasInvoicedataPropertiesCustomercompanynameAllof2 & {};

export type InvoiceDataSupplierCompanyName = TextAnnotation &
  Components1O4BmpySchemasInvoicedataPropertiesSuppliercompanynameAllof2 & {};

export type InvoiceDataCustomerPhoneNumber = TextAnnotation &
  ComponentsPs8Uo7SchemasInvoicedataPropertiesCustomerphonenumberAllof2 & {};

export type InvoiceDataSupplierPhoneNumber = TextAnnotation &
  ComponentsBvthtoSchemasInvoicedataPropertiesSupplierphonenumberAllof2 & {};

export type InvoiceDataSupplierFax = TextAnnotation &
  Components1ByjheSchemasInvoicedataPropertiesSupplierfaxAllof2 & {};

export type InvoiceDataCustomerEmail = TextAnnotation &
  Components5PwavySchemasInvoicedataPropertiesCustomeremailAllof2 & {};

export type InvoiceDataSupplierEmail = TextAnnotation &
  ComponentsVyrnzuSchemasInvoicedataPropertiesSupplieremailAllof2 & {};

export type InvoiceDataSupplierWebsite = TextAnnotation &
  Components179Pdz6SchemasInvoicedataPropertiesSupplierwebsiteAllof2 & {};

/** Known values of {@link ResumeSkillSourcesItemSection} that the service accepts. */
export enum KnownResumeSkillSourcesItemSection {
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
export type ResumeSkillSourcesItemSection = string;
/** Defines values for ManagementLevel. */
export type ManagementLevel = "Low" | "Mid" | "Upper";
/** Defines values for SearchLocationUnit. */
export type SearchLocationUnit = "km" | "mi";
/** Defines values for EducationLevel. */
export type EducationLevel =
  | "school"
  | "certificate"
  | "bachelors"
  | "masters"
  | "doctoral";

/** Optional parameters. */
export interface AffindaAPIGetAllResumesOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

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
  expiryTime?: Date;
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
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

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
  expiryTime?: Date;
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
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the getAllResumeFormats operation. */
export type AffindaAPIGetAllResumeFormatsResponse = Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPIGetAllReformattedResumesOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

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
export interface AffindaAPICreateResumeSearchOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the createResumeSearch operation. */
export type AffindaAPICreateResumeSearchResponse = ResumeSearch;

/** Optional parameters. */
export interface AffindaAPIGetResumeSearchDetailOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResumeSearchDetail operation. */
export type AffindaAPIGetResumeSearchDetailResponse = ResumeSearchDetail;

/** Optional parameters. */
export interface AffindaAPIGetAllJobDescriptionsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the getAllJobDescriptions operation. */
export type AffindaAPIGetAllJobDescriptionsResponse = GetAllJobDescriptionsResults;

/** Optional parameters. */
export interface AffindaAPICreateJobDescriptionOptionalParams
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
  expiryTime?: Date;
}

/** Contains response data for the createJobDescription operation. */
export type AffindaAPICreateJobDescriptionResponse = JobDescription;

/** Optional parameters. */
export interface AffindaAPIGetJobDescriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getJobDescription operation. */
export type AffindaAPIGetJobDescriptionResponse = JobDescription;

/** Optional parameters. */
export interface AffindaAPIDeleteJobDescriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteJobDescription operation. */
export type AffindaAPIDeleteJobDescriptionResponse = RequestError;

/** Optional parameters. */
export interface AffindaAPIGetAllIndexesOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the getAllIndexes operation. */
export type AffindaAPIGetAllIndexesResponse = Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPICreateIndexOptionalParams
  extends coreClient.OperationOptions {
  name?: string;
}

/** Contains response data for the createIndex operation. */
export type AffindaAPICreateIndexResponse = Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPIDeleteIndexOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteIndex operation. */
export type AffindaAPIDeleteIndexResponse = RequestError;

/** Optional parameters. */
export interface AffindaAPIGetAllIndexDocumentsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllIndexDocuments operation. */
export type AffindaAPIGetAllIndexDocumentsResponse = PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPICreateIndexDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createIndexDocument operation. */
export type AffindaAPICreateIndexDocumentResponse = PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPIDeleteIndexDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteIndexDocument operation. */
export type AffindaAPIDeleteIndexDocumentResponse = RequestError;

/** Optional parameters. */
export interface AffindaAPIGetAllInvoicesOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

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
  expiryTime?: Date;
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
export interface AffindaAPIListOccupationGroupsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOccupationGroups operation. */
export type AffindaAPIListOccupationGroupsResponse = OccupationGroup[];

/** Optional parameters. */
export interface AffindaAPIOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
