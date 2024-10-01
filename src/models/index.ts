import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

export type DocumentUnion =
  | Document
  | Resume
  | Invoice
  | JobDescription
  | ResumeRedact;

export interface Workspace {
  /** Uniquely identify a workspace. */
  identifier: string;
  organization?: Organization;
  name?: string;
  /** Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace. */
  visibility?: WorkspaceVisibility;
  collections?: WorkspaceCollectionsItem[];
  /** If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed. */
  rejectInvalidDocuments?: boolean;
  /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
  rejectDuplicates?: string;
  members?: User[];
  /** Number of unvalidated documents in the workspace. */
  unvalidatedDocsCount?: number;
  /** Number of validated documents in the workspace. */
  confirmedDocsCount?: number;
  /** When you send email to this address, any document attached in the body will be uploaded to this workspace. */
  ingestEmail?: string;
  /** If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info". */
  whitelistIngestAddresses?: string[];
  documentSplitter?: WorkspaceDocumentSplitter;
}

export interface Organization {
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
  /** Configuration of the embeddable validation tool. */
  validationToolConfig?: OrganizationValidationToolConfig;
  /** Whether to show the custom field creation in the UI. */
  showCustomFieldCreation?: boolean;
}

/** Configuration of the embeddable validation tool. */
export interface OrganizationValidationToolConfig {
  theme?: ThemeConfig;
  /** Hide the confirm document button and other actions. */
  hideActions?: boolean;
  /** Hide the collection selector. */
  hideCollection?: boolean;
  /** Hide the edit pages button. */
  hideEditPages?: boolean;
  /** Hide the export menu. */
  hideExport?: boolean;
  /** Hide the filename input. */
  hideFilename?: boolean;
  /** Hide the reject document button. */
  hideReject?: boolean;
  /** Hide the reparse button. */
  hideReparse?: boolean;
  /** Hide the run OCR button. */
  hideRunOcr?: boolean;
  /** Hide the tags editor. */
  hideTags?: boolean;
  /** Hide the warnings panel. */
  hideWarnings?: boolean;
  /** Disable the page editor after a document has been split once. */
  restrictDocumentSplitting?: boolean;
  /** Disable currency formatting of decimals values. */
  disableCurrencyFormatting?: boolean;
  /** Disable editing document metadata. Makes the collection selector, filename input and tags editor read only. */
  disableEditDocumentMetadata?: boolean;
}

export interface ThemeConfig {
  palette?: ThemeConfigPalette;
  typography?: ThemeConfigTypography;
  borderRadius?: number;
  fontUrl?: string;
}

export interface ThemeConfigPalette {
  mode?: ThemeConfigPaletteMode;
  /** Anything */
  background?: any;
  text?: ThemeConfigPaletteText;
  divider?: string;
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  success?: PaletteColorOptions;
  annotation?: PaletteColorOptions;
  error?: PaletteColorOptions;
  info?: PaletteColorOptions;
  warning?: PaletteColorOptions;
}

export interface ThemeConfigPaletteText {
  primary?: string;
  secondary?: string;
  disabled?: string;
}

export interface PaletteColorOptions {
  main: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}

export interface ThemeConfigTypography {
  fontFamily?: string;
  /** Anything */
  fontSize?: any;
  fontWeightRegular?: string;
  fontWeightMedium?: string;
  fontWeightBold?: string;
}

export interface WorkspaceCollectionsItem {
  /** Uniquely identify a collection. */
  identifier: string;
  name: string;
  extractor: WorkspaceCollectionsItemExtractor;
  /** Number of unvalidated documents in the collection. */
  unvalidatedDocsCount?: number;
  /** Number of validated documents in the collection. */
  confirmedDocsCount?: number;
}

export interface WorkspaceCollectionsItemExtractor {
  /** Uniquely identify an extractor. */
  identifier: string;
  name: string;
  namePlural: string;
  baseExtractor?: BaseExtractor;
  category?: string;
  validatable: boolean;
  isCustom?: boolean;
  createdDt?: Date;
}

export interface BaseExtractor {
  /** Uniquely identify an extractor. */
  identifier: string;
  name: string;
  namePlural: string;
  validatable: boolean;
  isCustom?: boolean;
  createdDt?: Date;
}

export interface User {
  /** Uniquely identify a user. */
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  /** URL of the user's avatar. */
  avatar?: string;
}

export interface WorkspaceDocumentSplitter {
  /** Uniquely identify a document splitter. */
  identifier: string;
  name: string;
}

export interface RequestError {
  type: string;
  errors: RequestErrorErrorsItem[];
}

export interface RequestErrorErrorsItem {
  attr: string | null;
  code: string;
  detail: string;
}

export interface WorkspaceCreate {
  /** Uniquely identify an organization. */
  organization: string;
  name: string;
  /** Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace. */
  visibility?: WorkspaceVisibility;
  /** If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed. */
  rejectInvalidDocuments?: boolean;
  /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
  rejectDuplicates?: string;
  /** If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info". */
  whitelistIngestAddresses?: string[];
  /** Uniquely identify a document splitter. */
  documentSplitter?: string;
}

export interface WorkspaceUpdate {
  name?: string;
  /** Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace. */
  visibility?: WorkspaceVisibility;
  /** If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed. */
  rejectInvalidDocuments?: boolean;
  /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
  rejectDuplicates?: string;
  /** If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info". */
  whitelistIngestAddresses?: string[];
  /** Uniquely identify a document splitter. */
  documentSplitter?: string;
}

/** Monthly credits consumption */
export interface UsageByWorkspace {
  /** Month of the usage */
  month: string;
  /** Usage count */
  count: number;
}

export interface PaginatedResponse {
  /** Number of items in results. */
  count: number;
  /** URL to request next page of results. */
  next?: string;
  /** URL to request previous page of results. */
  previous?: string;
}

export interface Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {
  results: WorkspaceMembership[];
}

export interface WorkspaceMembership {
  /** Uniquely identify a membership. */
  identifier?: string;
  /** Uniquely identify a workspace. */
  workspace?: string;
  user?: User;
}

export interface WorkspaceMembershipCreate {
  /** Uniquely identify a workspace. */
  workspace?: string;
  /** Uniquely identify a user. */
  user?: number;
}

export interface Collection {
  /** Uniquely identify a collection. */
  identifier: string;
  name?: string;
  workspace?: CollectionWorkspace;
  extractor?: Extractor;
  autoValidationThreshold?: number;
  enableAutoValidationThreshold?: boolean;
  autoValidateIfValidationRulesPass?: boolean;
  fields?: FieldGroup[];
  fieldsLayout?: FieldsLayout;
  fieldsConfigured?: boolean;
  dateFormatPreference?: CollectionDateFormatPreference;
  /** Predict the date format from any dates in the document that is not ambiguous. */
  dateFormatFromDocument?: boolean;
  /** Extra configurations specific to an extractor. */
  extractorConfig?: ExtractorConfig;
  /** Number of unvalidated documents in the collection. */
  unvalidatedDocsCount?: number;
  /** Number of validated documents in the collection. */
  confirmedDocsCount?: number;
  /** When you send email to this address, any document attached in the body will be uploaded to this collection. */
  ingestEmail?: string;
  /** Whether a tailored extractor has been requested for this collection. */
  tailoredExtractorRequested?: boolean;
  /** Whether to allow OpenAI API to be used to assist in creating a model for this collection. */
  allowOpenai?: boolean;
  /** Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors. */
  trainsExtractor?: boolean;
  /** If True, users cannot validate documents with missing mandatory fields, or failing validation rules. */
  disableConfirmationIfValidationRulesFail?: boolean;
}

export interface CollectionWorkspace {
  /** Uniquely identify a workspace. */
  identifier?: string;
  organization?: Organization;
  name?: string;
}

export interface Extractor {
  /** Uniquely identify an extractor. */
  identifier: string;
  name: string;
  namePlural: string;
  baseExtractor?: ExtractorBaseExtractor;
  organization?: Organization;
  category?: string;
  validatable: boolean;
  isCustom?: boolean;
  fieldGroups?: FieldGroup[];
  createdDt?: Date;
  lastTrainedDt?: Date;
}

export interface ExtractorBaseExtractor {
  /** Uniquely identify an extractor. */
  identifier: string;
  name: string;
  namePlural: string;
  validatable: boolean;
  isCustom?: boolean;
  createdDt?: Date;
}

export interface FieldGroup {
  label: string;
  fields: FieldDeprecated[];
}

export interface FieldDeprecated {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  label: string;
  slug?: string;
  /** The different data types of annotations */
  fieldType: AnnotationContentType;
  /** Data source mapping identifier */
  dataSource?: string;
  /** Defines how the data point is mapped to the data source */
  mapping?: string;
  dataPoint: string;
  mandatory?: boolean;
  disabled?: boolean;
  autoValidationThreshold?: number;
  showDropdown?: boolean;
  displayRawText?: boolean;
  /** If True, any dropdown annotations that fail to parse to a value will be discarded */
  dropNull?: boolean;
  displayEnumValue?: boolean;
  fields?: FieldDeprecated[];
}

export interface FieldsLayout {
  defaultCategory: FieldCategory;
  categories: FieldCategory[];
}

export interface FieldCategory {
  label: string;
  enabledFields: Field[];
  disabledFields: Field[];
}

export interface Field {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  label: string;
  /** Data point identifier */
  dataPoint: string;
  /** The different data types of annotations */
  fieldType: AnnotationContentType;
  /** Data source mapping identifier */
  dataSource?: string;
  /** Defines how the data point is mapped to the data source */
  mapping?: string;
  mandatory?: boolean;
  /** Threshold for auto validation. If null, uses the collection's autoValidationThreshold. */
  autoValidationThreshold?: number;
  /** If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection */
  enableAutoValidationThreshold?: boolean;
  showDropdown?: boolean;
  /** If true, both the value and the label for the enums will appear in the dropdown in the validation tool. */
  displayEnumValue?: boolean;
  /** If true, the hoverable enum value detail icon will be hidden. */
  hideEnumDetail?: boolean;
  /** If True, any dropdown annotations that fail to parse to a value will be discarded */
  dropNull?: boolean;
  enabledChildFields?: Field[];
  disabledChildFields?: Field[];
  slug?: string;
  /** If true, then the validation tool will show the user the raw text found on the page, not the value that has been parsed to a specific type. */
  displayRawText?: boolean;
  fields?: Record<string, unknown>[];
}

/** Extra configurations specific to an extractor. */
export interface ExtractorConfig {
  resumeRedact?: RedactConfig;
}

export interface RedactConfig {
  redactHeadshot?: boolean;
  redactPersonalDetails?: boolean;
  redactWorkDetails?: boolean;
  redactReferees?: boolean;
  redactEducationDetails?: boolean;
  redactLocations?: boolean;
  redactDates?: boolean;
  redactGender?: boolean;
}

export interface CollectionCreate {
  name: string;
  /** Uniquely identify a workspace. */
  workspace: string;
  /** Uniquely identify an extractor. Required if you are not a super user. */
  extractor?: string;
  /** Not applicable, please leave empty. This feature is reserved for super user. */
  baseExtractor?: string;
  autoValidationThreshold?: number;
  enableAutoValidationThreshold?: boolean;
  fields?: FieldGroup[];
  fieldsLayout?: FieldsLayout;
  dateFormatPreference?: DateFormatPreference;
  /** Predict the date format from any dates in the document that is not ambiguous. */
  dateFormatFromDocument?: boolean;
  /** Extra configurations specific to an extractor. */
  extractorConfig?: ExtractorConfig;
  /** Whether to allow OpenAI API to be used to assist in creating a model for this collection. */
  allowOpenai?: boolean;
  /** Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors. */
  trainsExtractor?: boolean;
  /** If True, users cannot validate documents with missing mandatory fields, or failing validation rules. */
  disableConfirmationIfValidationRulesFail?: boolean;
}

export interface CollectionUpdate {
  name?: string;
  autoValidationThreshold?: number;
  enableAutoValidationThreshold?: boolean;
  fields?: FieldGroup[];
  fieldsLayout?: FieldsLayout;
  dateFormatPreference?: DateFormatPreference;
  /** Predict the date format from any dates in the document that is not ambiguous. */
  dateFormatFromDocument?: boolean;
  /** Extra configurations specific to an extractor. */
  extractorConfig?: ExtractorConfig;
  /** Whether to allow OpenAI API to be used to assist in creating a model for this collection. */
  allowOpenai?: boolean;
  /** Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors. */
  trainsExtractor?: boolean;
  /** If True, users cannot validate documents with missing mandatory fields, or failing validation rules. */
  disableConfirmationIfValidationRulesFail?: boolean;
}

export interface DataFieldCreate {
  /** The label of the category that this field will be put into. If not provided, the field will be put into the default category. If no category exists with the specified label, a new category will be created. */
  categoryLabel?: string;
  /** The field to be created. */
  field: DataFieldCreateField;
  /** The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused. */
  dataPoint: DataFieldCreateDataPoint;
}

/** The field to be created. */
export interface DataFieldCreateField {
  label: string;
  /** The different data types of annotations */
  fieldType?: AnnotationContentType;
  mandatory?: boolean;
  showDropdown?: boolean;
  /** If true, both the value and the label for the enums will appear in the dropdown in the validation tool. */
  displayEnumValue?: boolean;
  /** Threshold for auto validation. If null, uses the collection's autoValidationThreshold. */
  autoValidationThreshold?: number;
  /** If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection */
  enableAutoValidationThreshold?: boolean;
  /** Data source mapping identifier */
  dataSource?: string;
  /** Defines how the data point is mapped to the data source */
  mapping?: string;
  /** If true, then the validation tool will show the user the raw text found on the page, not the value that has been parsed to a specific type. */
  displayRawText?: boolean;
}

/** The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused. */
export interface DataFieldCreateDataPoint {
  /** Name of the data point. */
  name: string;
  /** A camelCase string that will be used as the key in the API response. */
  slug: string;
  description?: string;
  /** The different data types of annotations */
  type: AnnotationContentType;
  multiple?: boolean;
  noRect?: boolean;
  /** The identifier of the parent data point if applicable. */
  parent?: string;
  /** If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool. */
  manualEntry?: boolean;
  /** If populated, the model will learn to predict this field using the data source, rather than relying on fuzzy string matching. */
  mappingDataSource?: string;
}

export interface DataField {
  /** The label of the category that this field will be put into. If not provided, the field will be put into the default category. If no category exists with the specified label, a new category will be created. */
  categoryLabel?: string;
  /** The field to be created. */
  field: DataFieldField;
  /** The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused. */
  dataPoint: DataFieldDataPoint;
}

/** The field to be created. */
export interface DataFieldField {
  label: string;
  /** The different data types of annotations */
  fieldType?: AnnotationContentType;
  mandatory: boolean;
  showDropdown?: boolean;
  /** If true, both the value and the label for the enums will appear in the dropdown in the validation tool. */
  displayEnumValue: boolean;
  /** Threshold for auto validation. If null, uses the collection's autoValidationThreshold. */
  autoValidationThreshold: number | null;
  /** If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection */
  enableAutoValidationThreshold?: boolean;
  enabledChildFields: Field[];
  disabledChildFields: Field[];
  /** Data source mapping identifier */
  dataSource?: string;
  /** Defines how the data point is mapped to the data source */
  mapping?: string;
  /** If true, then the validation tool will show the user the raw text found on the page, not the value that has been parsed to a specific type. */
  displayRawText?: boolean;
}

/** The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused. */
export interface DataFieldDataPoint {
  /** Uniquely identify a data point. */
  identifier: string;
  /** Name of the data point. */
  name: string;
  /** A camelCase string that will be used as the key in the API response. */
  slug: string;
  description: string | null;
  /** The different data types of annotations */
  type: AnnotationContentType;
  multiple: boolean;
  noRect: boolean;
  /** The identifier of the parent data point if applicable. */
  parent: string | null;
  children: DataPoint[];
  /** If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool. */
  manualEntry?: boolean;
  availableDataSources?: MappingDataSource[];
}

export interface DataPoint {
  /** Uniquely identify a data point. */
  identifier: string;
  /** Name of the data point. */
  name: string;
  /** A camelCase string that will be used as the key in the API response. */
  slug: string;
  description?: string;
  /** The different data types of annotations */
  annotationContentType: AnnotationContentType;
  organization: Organization | null;
  /** Uniquely identify an extractor. */
  extractor: string | null;
  multiple?: boolean;
  noRect?: boolean;
  /** The identifier of the parent data point if applicable. */
  parent?: string;
  children?: DataPoint[];
  availableDataSources?: MappingDataSource[];
  /** If populated, the model will learn to predict this field using the data source, rather than relying on fuzzy string matching. */
  mappingDataSource?: string;
  /** If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool. */
  manualEntry?: boolean;
}

/** A mapping data source is used to map from raw data found by our AI models to records in your database. */
export interface MappingDataSource {
  /**
   * Uniquely identify a mapping data source.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly identifier: string;
  name?: string;
  /** Attribute in the schema which uniquely identifiers the value */
  keyProperty: string;
  /** Attribute in the schema which is used to display the value */
  displayProperty: string;
  /** The organization that this mapping data source belongs to. */
  organization: string | null;
  /** The workspace that this mapping data source belongs to. */
  workspace: string | null;
  /** The schema of the mapping data source. */
  schema?: Record<string, unknown>;
}

export interface CollectionField {
  label?: string;
  /** The different data types of annotations */
  fieldType?: AnnotationContentType;
  mandatory?: boolean;
  showDropdown?: boolean;
  /** If true, both the value and the label for the enums will appear in the dropdown in the validation tool. */
  displayEnumValue?: boolean;
  /** Threshold for auto validation. If null, uses the collection's autoValidationThreshold. */
  autoValidationThreshold?: number;
  /** If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection */
  enableAutoValidationThreshold?: boolean;
  /** Data source mapping identifier */
  dataSource?: string;
  /** Defines how the data point is mapped to the data source */
  mapping?: string;
  /** Defines how the data point is mapped to the data source */
  displayRawText?: string;
}

/** Monthly credits consumption */
export interface UsageByCollection {
  /** Month of the usage */
  month: string;
  /** Usage count */
  count: number;
}

export interface PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: DocumentUnion[];
}

export interface Document {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  extractor: "resume" | "invoice" | "job-description" | "resume-redact";
  /** Dictionary of <any> */
  data?: { [propertyName: string]: any };
  meta: DocumentMeta;
  error?: DocumentError;
  warnings?: DocumentWarning[];
}

export interface DocumentMeta {
  /** Unique identifier for the document */
  identifier: string;
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
  skipParse?: boolean;
  confirmedDt?: Date;
  confirmedBy?: UserNullable;
  isConfirmed?: boolean;
  rejectedDt?: Date;
  rejectedBy?: UserNullable;
  isRejected?: boolean;
  createdDt?: Date;
  errorCode?: string;
  errorDetail?: string;
  /** URL to view the file. */
  file?: string;
  /** URL to view the file converted to HTML. */
  html?: string;
  tags?: Tag[];
  createdBy?: User;
  /** If the document is created via email ingestion, this field stores the email file's URL. */
  sourceEmail?: string;
  /** If the document is created via email ingestion, this field stores the email's From address. */
  sourceEmailAddress?: string;
  regionBias?: RegionBias;
}

/** If this document is part of a splitted document, this attribute points to the original document that this document is splitted from. */
export interface DocumentMetaParentDocument {
  /** Unique identifier for the document */
  identifier?: string;
  /** Optional identifier for the document that you can set to track the document in the Affinda system.  Is not required to be unique. */
  customIdentifier?: string;
}

export interface DocumentMetaChildDocumentsItem {
  /** Unique identifier for the document */
  identifier?: string;
  /** Optional identifier for the document that you can set to track the document in the Affinda system.  Is not required to be unique. */
  customIdentifier?: string;
}

export interface PageMeta {
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

export interface DocumentMetaCollection {
  /** Uniquely identify a collection. */
  identifier: string;
  name?: string;
  extractor?: DocumentMetaCollectionExtractor;
  validationRules?: ValidationRule[];
}

export interface DocumentMetaCollectionExtractor {
  /** Uniquely identify an extractor. */
  identifier?: string;
  name?: string;
  /** Base extractor's identifier. */
  baseExtractor?: string;
  validatable?: boolean;
}

/** A validation rule for a collection */
export interface ValidationRule {
  /** The slug of the validation rule, in lowercase snake_case */
  slug: string;
  /** The data point identifier that this validation rule applies to, can be an empty list if the rule doens't use any data points as sources */
  dataPoints: string[];
}

export interface DocumentMetaWorkspace {
  /** Uniquely identify a workspace. */
  identifier: string;
  name?: string;
}

export interface UserNullable {
  /** Uniquely identify a user. */
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  /** URL of the user's avatar. */
  avatar?: string;
}

export interface Tag {
  /** Uniquely identify a tag. */
  id: number;
  name: string;
  /** Uniquely identify a workspace. */
  workspace: string;
  /** Number of documents tagged with this. */
  documentCount: number;
}

export interface RegionBias {
  /** A single alpha-2 country code (e.g. AU) used by google geocoding service */
  country?: string;
  /** A list of alpha-2 country codes used by Pelias */
  countries?: string[];
  /** A list of coordinates used by Pelias in the shape of [min_lon, min_lat, max_lon, max_lat] */
  squareCoordinates?: number[];
  /**
   * If true, the location must be within the region, as opposed to prefering locations within the region.
   * Default to false.
   *
   */
  strict?: boolean;
}

export interface DocumentError {
  errorCode?: string;
  errorDetail?: string;
}

export interface DocumentWarning {
  warningCode?: string;
  warningDetail?: string;
}

/** Create resume or job description directly from data. */
export interface DocumentCreateData {}

/** A JSON-encoded string of the `ResumeData` object. */
export interface ResumeData {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  name?: ResumeDataName;
  phoneNumbers?: string[];
  phoneNumberDetails?: ResumeDataPhoneNumberDetailsItem[];
  websites?: string[];
  emails?: string[];
  dateOfBirth?: string;
  location?: Location;
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

export interface ResumeDataName {
  raw?: string;
  first?: string;
  last?: string;
  middle?: string;
  title?: string;
}

export interface ResumeDataPhoneNumberDetailsItem {
  rawText?: string;
  formattedNumber?: string;
  countryCode?: string;
  internationalCountryCode?: number;
  nationalNumber?: string;
}

export interface Location {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly formatted?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly postalCode?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly state?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly stateCode?: string;
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
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly poBox?: string;
}

export interface Education {
  id?: number;
  organization?: string;
  accreditation?: Accreditation;
  grade?: EducationGrade;
  location?: Location;
  dates?: EducationDates;
}

export interface Accreditation {
  education?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly inputStr?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly matchStr?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly educationLevel?: string;
}

export interface EducationGrade {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  raw?: string;
  metric?: string;
  value?: string;
}

export interface EducationDates {
  completionDate?: Date;
  isCurrent?: boolean;
  startDate?: Date;
  rawText?: string;
}

export interface ResumeDataWorkExperienceItem {
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

export interface ResumeDataWorkExperienceItemDates {
  startDate?: Date;
  endDate?: Date;
  monthsInPosition?: number;
  isCurrent?: boolean;
  rawText?: string;
}

export interface ResumeDataWorkExperienceItemOccupation {
  /** The raw (not normalized) job title pulled from the work experience entry */
  jobTitle?: string;
  /** Mapped onto the EMSI job title taxonomy if a sufficiently close match exists. */
  jobTitleNormalized?: string;
  /** EMSI id of the normalised job title. */
  emsiId?: string;
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
  /** The 4 digit code representing the SOC2020 classification for this job title */
  minorGroupCode?: number;
  /** The 4 digit code representing the SOC2020 classification for this job title */
  subMajorGroupCode?: number;
  /** The 4 digit code representing the SOC2020 classification for this job title */
  majorGroupCode?: number;
}

export interface ResumeDataSkillsItem {
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

export interface ResumeDataSkillsPropertiesItemsItem {
  section?: string;
  /** If this skill is extracted from a "workExperience" section, the "position" is the index of the work experience where this skill is found, with 0 being the first work experience, 1 being the second work experience, and so on. */
  position?: number;
  /** If this skill is extracted from a "workExperience" section, the "workExperienceId" is the id of the work experience where this skill is found. */
  workExperienceId?: number;
}

export interface ResumeDataRefereesItem {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  name?: string;
  text?: string;
  email?: string;
  number?: string;
  position?: string;
}

export interface ResumeDataSectionsItem {
  sectionType?: string;
  bbox?: number[];
  pageIndex?: number;
  text?: string;
}

export interface JobDescriptionData {
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

/** Years of experience range */
export interface JobTitleAnnotationParsed {
  name?: string;
  managementLevel?: string;
  classification?: JobTitleAnnotationParsedClassification;
}

export interface JobTitleAnnotationParsedClassification {
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

export interface Annotation {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Annotation's ID */
  id: number;
  /** x/y coordinates for the rectangular bounding box containing the data */
  rectangle: Rectangle | null;
  /** x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles. */
  rectangles: Rectangle[];
  /** Unique identifier for the document */
  document: string;
  /** The page number within the document, starting from 0. */
  pageIndex: number | null;
  /** Raw data extracted from the before any post-processing */
  raw: string | null;
  /** The overall confidence that the model's prediction is correct */
  confidence: number | null;
  /** The model's confidence that the text has been classified correctly */
  classificationConfidence: number | null;
  /** If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model */
  textExtractionConfidence: number | null;
  /** Indicates whether the data has been validated, either by a human using our validation tool or through auto-validation rules */
  isVerified: boolean;
  /** Indicates whether the data has been validated by a human */
  isClientVerified: boolean;
  /** Indicates whether the data has been auto-validated */
  isAutoVerified: boolean;
  /** Data point's identifier */
  dataPoint: string;
  /** The different data types of annotations */
  contentType: AnnotationContentType;
  /** The parent annotation's ID */
  parent?: number;
}

export interface Rectangle {
  pageIndex?: number;
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

/** Years of experience range */
export interface YearsExperienceAnnotationParsed {
  /** Minimum years of experience */
  minimum?: number;
  /** Maximum years of experience */
  maximum?: number;
}

export interface DocumentUpdate {
  /** Uniquely identify a collection. */
  collection?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
  isConfirmed?: boolean;
  isRejected?: boolean;
  isArchived?: boolean;
  skipParse?: boolean;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** Deprecated in favor of `customIdentifier`. */
  identifier?: string;
  /** Specify a custom identifier for the document if you need one, not required to be unique. */
  customIdentifier?: string;
}

export interface PathsO1OmciV3DocumentsIdentifierUpdateDataPostRequestbodyContentApplicationJsonSchema {}

/** A JSON-encoded string of the `JobDescriptionData` object. */
export interface JobDescriptionDataUpdate {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  jobTitle?: JobTitleAnnotationUpdate;
  contactEmail?: TextAnnotationUpdate;
  contactName?: TextAnnotationUpdate;
  contactPhone?: TextAnnotationUpdate;
  startDate?: DateAnnotationUpdate;
  endDate?: DateAnnotationUpdate;
  jobType?: TextAnnotationUpdate;
  languages?: (LanguageAnnotationUpdate | null)[];
  skills?: (SkillAnnotationUpdate | null)[];
  organizationName?: TextAnnotationUpdate;
  organizationWebsite?: TextAnnotationUpdate;
  educationLevel?: TextAnnotationUpdate;
  educationAccreditation?: TextAnnotationUpdate;
  expectedRemuneration?: ExpectedRemunerationAnnotationUpdate;
  location?: LocationAnnotationUpdate;
  certifications?: (TextAnnotationUpdate | null)[];
  yearsExperience?: YearsExperienceAnnotationUpdate;
}

export interface AnnotationBase {
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

export interface JobTitleParsed {
  /**
   * Matching job title to extracted text
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parsed?: JobTitleParsedParsed;
}

/** Matching job title to extracted text */
export interface JobTitleParsedParsed {
  name?: string;
  managementLevel?: string;
  classification?: JobTitleParsedClassification;
}

export interface JobTitleParsedClassification {
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

export interface ExpectedRemunerationAnnotationUpdateParsed {
  minimum?: number;
  maximum?: number;
  currency?: string;
  unit?: string;
}

/** Years of experience range */
export interface YearsExperienceAnnotationUpdateParsed {
  /** Minimum years of experience */
  minimum?: number;
  /** Maximum years of experience */
  maximum?: number;
}

export interface BatchAddTagRequest {
  /** List of documents to tag */
  identifiers?: string[];
  /** The tag's ID */
  tag?: number;
}

export interface BatchRemoveTagRequest {
  /** List of documents to remove tag from */
  identifiers?: string[];
  /** The tag's ID */
  tag?: number;
}

/** Validation result arising from a ValidationRule */
export interface ValidationResult {
  /** Validation Result's ID */
  id: number;
  /** List of annotation ids that were validated */
  annotations: number[];
  /** Whether the validation passed or not, null if the validation was not applicable */
  passed: boolean | null;
  /** The hot-dog case slug of the validation rule that was applied */
  ruleSlug: string;
  /** Message explaining why the validation failed */
  message: string;
  /** Unique identifier for the document */
  document: string;
}

export interface ValidationResultCreate {
  /** List of annotation ids that were validated */
  annotations: number[];
  /** Whether the validation passed or not, null if the validation was not applicable */
  passed?: boolean;
  /** The hot-dog case slug of the validation rule that was applied */
  ruleSlug: string;
  /** Message explaining why the validation failed */
  message: string;
  /** Unique identifier for the document */
  document: string;
}

export interface ValidationResultUpdate {
  /** List of annotation ids that were validated */
  annotations?: number[];
  /** Whether the validation passed or not, null if the validation was not applicable */
  passed?: boolean;
  /** The hot-dog case slug of the validation rule that was applied */
  ruleSlug?: string;
  /** Message explaining why the validation failed */
  message?: string;
  /** Unique identifier for the document */
  document?: string;
}

export interface BatchDeleteValidationResultsRequest {
  /** List of validation result IDs to delete. */
  ids: number[];
}

export interface DocumentSplitter {
  /** Uniquely identify a document splitter. */
  identifier: string;
  name: string;
  /** The different types of document splitters */
  type: DocumentSplitterType;
  /** Uniquely identify an organization. */
  organization: string | null;
  /** Uniquely identify an extractor. */
  extractor: string | null;
  /** The different types of document splitters */
  llmModel: LLMModelType | null;
  /** The hint about when to split which is passed into the LLM prompt. */
  llmHint: string | null;
}

export interface DocumentEditRequest {
  splits: DocumentSplit[];
}

/** Describe a split of a document. */
export interface DocumentSplit {
  /** Anything */
  identifier?: any;
  pages: DocumentSplitPage[];
}

/** List the pages within this split. Not including a page here will signal that the page should be deleted. */
export interface DocumentSplitPage {
  /** Page's ID */
  id: number;
  /** Specify a degree of rotation if you want to rotate a page. Possitive number for clockwise rotation, and negative number for counter-clockwise rotation. */
  rotation?: number;
}

export interface Meta {
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
  isOcrd?: boolean;
}

/** If this document is part of a splitted document, this attribute points to the original document that this document is splitted from. */
export interface MetaParentDocument {
  /** Unique identifier for the document */
  identifier?: string;
}

export interface MetaChildDocumentsItem {
  /** Unique identifier for the document */
  identifier?: string;
}

export interface ExtractorCreate {
  name: string;
  namePlural?: string;
  /** Uniquely identify an extractor. */
  baseExtractor?: string;
  /** Uniquely identify an organization. */
  organization: string;
  category?: string;
  validatable?: boolean;
  fieldGroups?: FieldGroup[];
}

export interface ExtractorUpdate {
  name?: string;
  namePlural?: string;
  /** Uniquely identify an extractor. */
  baseExtractor?: string;
  category?: string;
  validatable?: boolean;
  fieldGroups?: FieldGroup[];
}

export interface DataPointCreate {
  /** Name of the data point. */
  name: string;
  /** A camelCase string that will be used as the key in the API response. */
  slug: string;
  description?: string;
  /** The different data types of annotations */
  annotationContentType: AnnotationContentType;
  /** Uniquely identify an organization. */
  organization: string;
  /** Uniquely identify an extractor. */
  extractor: string;
  multiple?: boolean;
  noRect?: boolean;
  /** The identifier of the parent data point if applicable. */
  parent?: string;
  /** If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool. */
  manualEntry?: boolean;
  /** If populated, the model will learn to predict this field using the data source, rather than relying on fuzzy string matching. */
  mappingDataSource?: string;
}

export interface DataPointUpdate {
  /** Name of the data point. */
  name?: string;
  /** A camelCase string that will be used as the key in the API response. */
  slug?: string;
  description?: string;
  /** The identifier of the parent data point if applicable. */
  parent?: string;
  /** If populated, the model will learn to predict this field using the data source, rather than relying on fuzzy string matching. */
  mappingDataSource?: string;
}

export interface Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: DataPointChoice[];
}

export interface DataPointChoice {
  /** Data point choice's ID */
  id: number;
  label: string;
  value: string;
  synonyms?: string[];
  description?: string;
}

export interface DataPointChoiceCreate {
  /** Uniquely identify a data point. */
  dataPoint: string;
  /** Uniquely identify an organization. */
  organization?: string;
  /** Uniquely identify a collection. */
  collection?: string;
  label: string;
  value: string;
  synonyms?: string[];
  description?: string;
}

export interface DataPointChoiceUpdate {
  /** Uniquely identify a data point. */
  dataPoint?: string;
  /** Uniquely identify an organization. */
  organization?: string;
  /** Uniquely identify a collection. */
  collection?: string;
  label?: string;
  value?: string;
  synonyms?: string[];
  description?: string;
}

/** Request body for replacing choices of a data point. Either `collection` or `organization` is required. */
export interface DataPointChoiceReplaceRequest {
  /** Uniquely identify a data point. */
  dataPoint: string;
  /** Uniquely identify a collection. */
  collection?: string;
  /** Uniquely identify an organization. */
  organization?: string;
  /** Incoming choices to replace existing choices of a data point. Existing choices and incoming choices are matched base on their `value`. New `value` will be created, existing `value` will be updated, and `value` not in incoming choices will be deleted. */
  choices: DataPointChoiceForReplace[];
}

export interface DataPointChoiceForReplace {
  value: string;
  label?: string;
  synonyms?: string[];
  description?: string;
}

export interface DataPointChoiceReplaceResponse {
  /** Uniquely identify a data point. */
  dataPoint: string;
  /** Uniquely identify a collection. */
  collection: string | null;
  /** Uniquely identify an organization. */
  organization: string | null;
  choices: DataPointChoiceReplaceResponseChoicesItem[];
}

export interface DataPointChoiceReplaceResponseChoicesItem {
  /** Data point choice's ID */
  id: number;
  value: string;
  label: string;
  synonyms: string[] | null;
  description: string | null;
}

export interface Paths1Dgz0V9V3AnnotationsGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: (Annotation | null)[];
}

export interface AnnotationCreate {
  /** x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles. */
  rectangles?: Rectangle[];
  /** Unique identifier for the document */
  document: string;
  /** The page number within the document, starting from 0. */
  pageIndex: number | null;
  /** Data point's identifier */
  dataPoint: string;
  /** Raw data extracted from the before any post-processing */
  raw?: string;
  /** Anything */
  parsed?: any;
  /** Indicates whether the data has been validated by a human */
  isClientVerified?: boolean;
  /** The parent annotation's ID */
  parent?: number;
  /** The validation results created, changed or deleted as a result of creating the annotation. */
  validationResults?: (ChangedValidationResults | null)[];
}

export interface ChangedValidationResults {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** List of validation results created during this operation. */
  created?: ValidationResult[];
  /** List of validation results updated during this operation. */
  updated?: ValidationResult[];
  /** List of validation results deleted during this operation. */
  deleted?: ValidationResult[];
}

export interface AnnotationUpdate {
  /** x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles. */
  rectangles?: Rectangle[];
  /** Unique identifier for the document */
  document?: string;
  /** The page number within the document, starting from 0. */
  pageIndex?: number;
  /** Raw data extracted from the before any post-processing */
  raw?: string;
  /** Anything */
  parsed?: any;
  /** Indicates whether the data has been validated by a human */
  isClientVerified?: boolean;
  /** Data point's identifier */
  dataPoint?: string;
  /** The parent annotation's ID */
  parent?: number;
  /** The validation results created, changed or deleted as a result of updating the annotation. */
  validationResults?: (ChangedValidationResults | null)[];
}

export interface AnotationDelete {
  /** The validation results created, changed or deleted as a result of deleting the annotation. */
  validationResults?: Record<string, unknown>;
}

export interface AnnotationBatchUpdate {
  /** Annotation's ID */
  id: number;
  /** x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles. */
  rectangles?: Rectangle[];
  /** Unique identifier for the document */
  document?: string;
  /** The page number within the document, starting from 0. */
  pageIndex?: number;
  /** Raw data extracted from the before any post-processing */
  raw?: string;
  /** Anything */
  parsed?: any;
  /** Indicates whether the data has been validated by a human */
  isClientVerified?: boolean;
  /** Data point's identifier */
  dataPoint?: string;
  /** The parent annotation's ID */
  parent?: number;
  /** The validation results created, changed or deleted as a result of updating the annotation. */
  validationResults?: (ChangedValidationResults | null)[];
}

export interface BatchDeleteAnnotationsResponse {
  /** The validation results created, changed or deleted as a result of deleting the annotations. */
  validationResults?: Record<string, unknown>;
}

/** A mapping data source is used to map from raw data found by our AI models to records in your database. */
export interface MappingDataSourceCreate {
  name?: string;
  /** The organization that this mapping data source belongs to. */
  organization?: string;
  /** The workspace that this mapping data source belongs to. */
  workspace?: string;
  /** Attribute in the schema which uniquely identifiers the value */
  keyProperty?: string;
  /** Attribute in the schema which is used to display the value */
  displayProperty?: string;
  values?: Record<string, unknown>[];
  /** The schema of the mapping data source. */
  schema?: Record<string, unknown>;
}

export interface Paths1UmoszuV3MappingDataSourcesGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: MappingDataSource[];
}

export interface Paths1O6IvdaV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: Record<string, unknown>[];
}

export interface MappingCreate {
  /** The mapping data source this mapping applies to. */
  dataSource: string | null;
  /** Higher values will result in more strict matching. */
  scoreCutoff?: number;
  /** The organization that this mapping belongs to. */
  organization?: string;
  /** The field to order the results by. Leave blank for ordering by relevance. */
  orderBy?: string;
}

/** A mapping allows you to specify specific settings regarding a lookup against a MappingDataSource should be applied. */
export interface Mapping {
  /**
   * Uniquely identify a mapping.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly identifier: string;
  /** The organization that this mapping belongs to. */
  organization?: string;
  /** The mapping data source this mapping applies to. */
  dataSource: string | null;
  /** Higher values will result in more strict matching. */
  scoreCutoff?: number;
  /** The field to order the results by. Leave blank for ordering by relevance. */
  orderBy?: string;
}

export interface PathsWvcyp9V3MappingsGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: Mapping[];
}

export interface MappingUpdate {
  /** Higher values will result in more strict matching. */
  scoreCutoff?: number;
  /** The field to order the results by. Leave blank for ordering by relevance. */
  orderBy?: string;
}

export interface TagCreate {
  name: string;
  /** Uniquely identify a workspace. */
  workspace: string;
}

export interface TagUpdate {
  name?: string;
  /** Uniquely identify a workspace. */
  workspace?: string;
}

/** Configuration of the embeddable validation tool. */
export interface ValidationToolConfig {
  theme?: ThemeConfig;
  /** Hide the confirm document button and other actions. */
  hideActions?: boolean;
  /** Hide the collection selector. */
  hideCollection?: boolean;
  /** Hide the edit pages button. */
  hideEditPages?: boolean;
  /** Hide the export menu. */
  hideExport?: boolean;
  /** Hide the filename input. */
  hideFilename?: boolean;
  /** Hide the reject document button. */
  hideReject?: boolean;
  /** Hide the reparse button. */
  hideReparse?: boolean;
  /** Hide the run OCR button. */
  hideRunOcr?: boolean;
  /** Hide the tags editor. */
  hideTags?: boolean;
  /** Hide the warnings panel. */
  hideWarnings?: boolean;
  /** Disable the page editor after a document has been split once. */
  restrictDocumentSplitting?: boolean;
  /** Disable currency formatting of decimals values. */
  disableCurrencyFormatting?: boolean;
  /** Disable editing document metadata. Makes the collection selector, filename input and tags editor read only. */
  disableEditDocumentMetadata?: boolean;
}

export interface Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: OrganizationMembership[];
}

export interface OrganizationMembership {
  /** A random string that uniquely identify the resource. */
  identifier: string;
  /** Uniquely identify an organization. */
  organization: string;
  user: User;
  role: OrganizationRole;
}

export interface OrganizationMembershipUpdate {
  role?: OrganizationRole;
}

export interface PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: Invitation[];
}

export interface Invitation {
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

export interface InvitationCreate {
  /** Uniquely identify an organization. */
  organization: string;
  /** The email which the invitation is sent to. */
  email: string;
  role: OrganizationRole;
}

export interface InvitationUpdate {
  role?: OrganizationRole;
}

export interface InvitationResponse {
  status?: InvitationResponseStatus;
}

export interface Paths11PzrpaV3ApiUsersGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: ApiUserWithoutKey[];
}

export interface ApiUserWithoutKey {
  /** Uniquely identify a user. */
  id: number;
  name: string;
  username: string;
  email: string;
  /** URL of the user's avatar. */
  avatar: string | null;
  organizations: ApiUserWithoutKeyOrganizationsItem[];
  /** The last 4 characters of the API key. */
  apiKeyLastChars?: string;
}

export interface ApiUserWithoutKeyOrganizationsItem {
  /** Uniquely identify an organization. */
  identifier: string;
  name: string;
}

export interface ApiUserCreate {
  name?: string;
  username?: string;
  email?: string;
  /** URL of the user's avatar. */
  avatar?: string;
  /** Uniquely identify an organization. */
  organization: string;
}

export interface ApiUserWithKey {
  /** Uniquely identify a user. */
  id: number;
  name: string;
  username: string;
  email: string;
  /** URL of the user's avatar. */
  avatar: string | null;
  organizations: ApiUserWithKeyOrganizationsItem[];
  /** Use this key to authenticate with the API. */
  apiKey: string;
  /** The last 4 characters of the API key. */
  apiKeyLastChars?: string;
}

export interface ApiUserWithKeyOrganizationsItem {
  /** Uniquely identify an organization. */
  identifier: string;
  name: string;
}

export interface ApiUserUpdate {
  name?: string;
  username?: string;
  email?: string;
  /** URL of the user's avatar. */
  avatar?: string;
}

export interface Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: ResthookSubscription[];
}

export interface ResthookSubscription {
  /** Resthook subscription's ID. */
  id: number;
  /** The event name to subscribe to. */
  event: ResthookEvent;
  organization: Organization | null;
  workspace: ResthookSubscriptionWorkspace | null;
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

export interface ResthookSubscriptionWorkspace {
  /** Uniquely identify a workspace. */
  identifier: string;
  name: string;
  organization: Organization;
}

export interface ResthookSubscriptionCreate {
  /** URL of the resthook's receiver. */
  targetUrl: string;
  /** The event name to subscribe to. */
  event: ResthookEvent;
  organization?: string;
  workspace?: string;
  /** Version of the resthook subscription. Determines the resthook body being fired. */
  version?: Version;
}

export interface ResthookSubscriptionUpdate {
  /** The event name to subscribe to. */
  event?: ResthookEvent;
  /** Uniquely identify an organization. */
  organization?: string;
  /** Uniquely identify a workspace. */
  workspace?: string;
  /** Version of the resthook subscription. Determines the resthook body being fired. */
  version?: Version;
}

export interface OccupationGroup {
  code: number;
  name: string;
  children: OccupationGroup[];
}

export interface ResumeSearchParameters {
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

export interface SearchParametersCustomData {
  /** Data points of "text" type support only "equals" filterType, others support both "equals" and "range" */
  filterType: SearchParametersCustomDataFilterType;
  /** The data point's slug */
  dataPoint: string;
  /** "equals" searches require the "value" key inside the query, and "range" searches require at least one of "gte" (greater than or equal) and "lte" (less than or equal) */
  query: Record<string, unknown>;
  required?: boolean;
  weight?: number;
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
    [
      propertyName: string
    ]: ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties;
  };
}

export interface JobTitleSearchScoreComponent {
  value?: string;
  label: string;
  score?: number;
}

export interface ManagementLevelSearchScoreComponent {
  value?: string;
  label: string;
  score?: number;
}

export interface ExperienceSearchScoreComponent {
  value?: string;
  label: string;
  score?: number;
}

export interface SkillsSearchScoreComponent {
  value?: string;
  label: string;
  score?: number;
}

export interface LanguagesSearchScoreComponent {
  value?: string;
  label: string;
  score?: number;
}

export interface LocationSearchScoreComponent {
  value?: string;
  label: string;
  score?: number;
}

export interface EducationSearchScoreComponent {
  value?: string;
  label: string;
  score?: number;
}

export interface OccupationGroupSearchScoreComponent {
  value?: string;
  label: string;
  score?: number;
}

export interface SearchExpressionSearchScoreComponent {
  label: string;
  value?: string;
  score?: number;
}

export interface ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties {
  value?: string;
  label: string;
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
  value?: OccupationGroupSearchResult[];
}

export interface OccupationGroupSearchResult {
  match?: boolean;
  code: number;
  name: string;
  children?: OccupationGroup[];
  parents?: OccupationGroup[];
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

export interface ResumeSearchConfig {
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
  searchToolTheme?: ResumeSearchConfigSearchToolTheme;
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
  actions?: SearchConfigAction[];
  /** Hide the reset/import toolbar. */
  hideToolbar?: boolean;
  /** Hide the entire side panel. */
  hideSidePanel?: boolean;
  customFieldsConfig?: CustomFieldConfig[];
  /** The unit of distance to use for location based searches */
  distanceUnit?: ResumeSearchConfigDistanceUnit;
}

export interface SearchConfigAction {
  /** Human readable label to display in the UI */
  label: string;
  /** Name of the event to be triggered */
  eventName: string;
}

export interface CustomFieldConfig {
  /** Data point identifier. */
  dataPoint: string;
  weight: number;
}

export interface Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema {
  configOverride?: ResumeSearchConfig;
}

export interface ResumeSearchEmbed {
  /** The signed URL for the embedable search tool. */
  url?: string;
}

export interface ResumeSearchMatch {
  /** The matching score between the provided resume and job description. */
  score?: number;
  details?: ResumeSearchMatchDetails;
}

export interface ResumeSearchMatchDetails {
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

export interface JobDescriptionSearchParameters {
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

export interface JobDescriptionSearch {
  /** Total number of results */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  parameters?: JobDescriptionSearchParameters;
  results?: JobDescriptionSearchResult[];
}

export interface JobDescriptionSearchResult {
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
    [
      propertyName: string
    ]: ComponentsNqbw24SchemasCustomdatasearchscorecomponentAdditionalproperties;
  };
}

export interface JobDescriptionSearchDetail {
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

export interface JobDescriptionSearchDetailJobTitle {
  missing?: string[];
  value?: JobDescriptionSearchDetailJobTitleValue;
}

export interface JobDescriptionSearchDetailJobTitleValue {
  name?: string;
  companyName?: string;
  match?: boolean;
}

export interface JobDescriptionSearchDetailLocation {
  missing?: ResumeSearchParametersLocation[];
  value?: JobDescriptionSearchDetailLocationValue;
}

export interface Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1 {
  match?: boolean;
}

export interface JobDescriptionSearchDetailEducation {
  missing?: JobDescriptionSearchDetailEducationMissing;
  value?: JobDescriptionSearchDetailEducationValue;
}

export interface JobDescriptionSearchDetailEducationMissing {
  degrees?: string[];
  degreeTypes?: string[];
}

export interface JobDescriptionSearchDetailEducationValue {
  degrees?: string[];
  degreeTypes?: string[];
  match?: boolean;
}

export interface JobDescriptionSearchDetailSkills {
  missing?: ResumeSearchParametersSkill[];
  value?: JobDescriptionSearchDetailSkillsValueItem[];
}

export interface JobDescriptionSearchDetailSkillsValueItem {
  name?: string;
  match?: boolean;
}

export interface JobDescriptionSearchDetailExperience {
  minimumExperience?: number;
  maximumExperience?: number;
  match?: boolean;
}

export interface JobDescriptionSearchDetailOccupationGroup {
  missing?: number[];
  value?: JobDescriptionSearchDetailOccupationGroupValue;
}

export interface JobDescriptionSearchDetailLanguages {
  missing?: ResumeSearchParametersSkill[];
  value?: JobDescriptionSearchDetailLanguagesValueItem[];
}

export interface JobDescriptionSearchDetailLanguagesValueItem {
  name?: string;
  match?: boolean;
}

export interface JobDescriptionSearchDetailManagementLevel {
  level?: ManagementLevel;
  match?: boolean;
}

export interface JobDescriptionSearchDetailSearchExpression {
  missing?: string[];
  value?: string[];
}

export interface JobDescriptionSearchConfig {
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
  searchToolTheme?: JobDescriptionSearchConfigSearchToolTheme;
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
  actions?: SearchConfigAction[];
  /** Hide the reset/import toolbar. */
  hideToolbar?: boolean;
  /** Hide the entire side panel. */
  hideSidePanel?: boolean;
  customFieldsConfig?: CustomFieldConfig[];
  /** The unit of distance to use for location based searches */
  distanceUnit?: JobDescriptionSearchConfigDistanceUnit;
}

export interface PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema {
  configOverride?: JobDescriptionSearchConfig;
}

export interface JobDescriptionSearchEmbed {
  /** The signed URL for the embedable search tool. */
  url?: string;
}

export interface Paths4T5Cm5V3IndexGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: Index[];
}

export interface Index {
  /** Unique index name */
  name: string;
  documentType: IndexDocumentType;
  /**
   * The user who created this index
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly user: IndexUser;
}

/** The user who created this index */
export interface IndexUser {
  /** Uniquely identify a user. */
  id: number;
  name: string;
  email: string;
  /** URL of the user's avatar. */
  avatar: string | null;
}

/** IndexRequestBody */
export interface IndexCreate {
  /** Unique index name */
  name: string;
  documentType?: DocumentType;
}

export interface IndexUpdate {
  /** Unique index name */
  name?: string;
}

export interface PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema {
  /** Number of indexed documents in result */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  results?: Get200ApplicationJsonPropertiesItemsItem[];
}

export interface Get200ApplicationJsonPropertiesItemsItem {
  document?: string;
}

export interface PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema {
  document?: string;
}

export interface PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema {
  /** Unique identifier for the document. */
  document?: string;
}

export interface InvoiceData {
  tables?: (TableAnnotation | null)[];
  tablesBeta?: (TableBetaAnnotation | null)[];
  invoiceDate?: DateAnnotation;
  invoiceOrderDate?: DateAnnotation;
  paymentDateDue?: DateAnnotation;
  paymentAmountBase?: TextAnnotation;
  paymentAmountTax?: TextAnnotation;
  paymentAmountTotal?: TextAnnotation;
  paymentAmountPaid?: TextAnnotation;
  paymentAmountDue?: TextAnnotation;
  invoiceNumber?: TextAnnotation;
  invoicePurchaseOrderNumber?: TextAnnotation;
  supplierBusinessNumber?: TextAnnotation;
  customerNumber?: TextAnnotation;
  customerBusinessNumber?: TextAnnotation;
  paymentReference?: TextAnnotation;
  bankAccountNumber?: TextAnnotation;
  supplierVat?: TextAnnotation;
  customerVat?: TextAnnotation;
  bpayBillerCode?: TextAnnotation;
  bpayReference?: TextAnnotation;
  bankSortCode?: TextAnnotation;
  bankIban?: TextAnnotation;
  bankSwift?: TextAnnotation;
  bankBsb?: TextAnnotation;
  customerContactName?: TextAnnotation;
  customerCompanyName?: TextAnnotation;
  supplierCompanyName?: TextAnnotation;
  customerBillingAddress?: LocationAnnotation;
  customerDeliveryAddress?: LocationAnnotation;
  supplierAddress?: LocationAnnotation;
  customerPhoneNumber?: TextAnnotation;
  supplierPhoneNumber?: TextAnnotation;
  supplierFax?: TextAnnotation;
  customerEmail?: TextAnnotation;
  supplierEmail?: TextAnnotation;
  supplierWebsite?: TextAnnotation;
  currencyCode?: CurrencyCodeAnnotation;
  /** Dictionary of <any> */
  customFields?: { [propertyName: string]: any };
  /** All of the raw text of the parsed invoice. */
  rawText?: string;
}

export interface TableAnnotationParsed {
  rows?: (RowAnnotation | null)[];
}

export interface RowAnnotationParsed {
  itemCode?: TextAnnotation;
  itemDate?: DateAnnotation;
  itemDescription?: TextAnnotation;
  itemUnit?: TextAnnotation;
  itemUnitPrice?: FloatAnnotation;
  itemQuantity?: FloatAnnotation;
  itemDiscount?: TextAnnotation;
  itemBaseTotal?: FloatAnnotation;
  itemTaxRate?: TextAnnotation;
  itemTaxTotal?: FloatAnnotation;
  itemTotal?: FloatAnnotation;
  itemOther?: TextAnnotation;
}

export interface TableBetaAnnotationParsed {
  rows?: (RowBetaAnnotation | null)[];
}

export interface RowBetaAnnotationParsed {
  itemCodeBeta?: TextAnnotation;
  itemDateBeta?: DateAnnotation;
  itemDescriptionBeta?: TextAnnotation;
  itemUnitBeta?: TextAnnotation;
  itemUnitPriceBeta?: FloatAnnotation;
  itemQuantityBeta?: FloatAnnotation;
  itemDiscountBeta?: TextAnnotation;
  itemBaseTotalBeta?: FloatAnnotation;
  itemTaxRateBeta?: TextAnnotation;
  itemTaxTotalBeta?: FloatAnnotation;
  itemTotalBeta?: FloatAnnotation;
  itemOtherBeta?: TextAnnotation;
}

export interface ResumeRedactData {
  /** URL to download the redacted resume. */
  redactedPdf?: string;
}

export interface DateRangeAnnotationParsed {
  start?: DateRangeValue;
  end?: DateRangeValue;
}

export interface DateRangeValue {
  date?: Date;
  isCurrent?: boolean;
  day?: number;
  month?: number;
  year?: number;
}

export interface PhoneNumberAnnotationParsed {
  rawText?: string;
  formattedNumber?: string;
  countryCode?: string;
  internationalCountryCode?: number;
  nationalNumber?: string;
}

export interface UrlAnnotationParsed {
  url?: string;
  domain?: string;
}

export interface Components1Kwk9B6SchemasThemeconfigPropertiesPalettePropertiesBackgroundOneof1 {
  default?: string;
  paper?: string;
}

export interface DocumentCreate {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG, TIFF, ODT, XLS, XLSX, ZIP */
  file?: coreRestPipeline.RequestBodyType;
  /** URL to download the document. */
  url?: string;
  /** Create resume or job description directly from data. */
  data?: DocumentCreateData;
  /** Uniquely identify a collection. */
  collection?: string;
  /** Uniquely identify a workspace. */
  workspace?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Deprecated in favor of `customIdentifier`. */
  identifier?: string;
  /** Specify a custom identifier for the document if you need one, not required to be unique. */
  customIdentifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
  rejectDuplicates?: boolean;
  /** A JSON representation of the RegionBias object. */
  regionBias?: string;
  /** Explicitly mark this document as low priority. */
  lowPriority?: string;
  /** If true, the returned parse result (assuming `wait` is also true) will be a compact version of the full result. */
  compact?: string;
  /** If true, no data will be stored after parsing. Only compatible with requests where wait: True. */
  deleteAfterParse?: string;
  /** If true, the document will be viewable in the Affinda Validation Tool. Set to False to optimize parsing speed. */
  enableValidationTool?: string;
}

export interface OrganizationCreate {
  name: string;
  /** Upload avatar for the organization. */
  avatar?: coreRestPipeline.RequestBodyType;
  /** Used to sign webhook payloads so you can verify their integrity. */
  resthookSignatureKey?: string;
}

export interface OrganizationUpdate {
  name?: string;
  /** Upload avatar for the organization. */
  avatar?: coreRestPipeline.RequestBodyType;
  /** Used to sign webhook payloads so you can verify their integrity. */
  resthookSignatureKey?: string;
  /** Configuration of the embeddable validation tool. */
  validationToolConfig?: ValidationToolConfig;
}

/** Customize the theme of the embeded search tool. */
export interface ResumeSearchConfigSearchToolTheme extends ThemeConfig {}

/** Customize the theme of the embeded search tool. */
export interface JobDescriptionSearchConfigSearchToolTheme
  extends ThemeConfig {}

export interface InvitationRespondedBy extends User {}

export interface PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    Paths1Dgz0V9V3AnnotationsGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    Paths1UmoszuV3MappingDataSourcesGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    Paths1O6IvdaV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    PathsWvcyp9V3MappingsGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    Paths11PzrpaV3ApiUsersGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema
  extends PaginatedResponse,
    Paths4T5Cm5V3IndexGetResponses200ContentApplicationJsonSchemaAllof1 {}

export interface Resume extends Document {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  extractor: "resume";
  /** A JSON-encoded string of the `ResumeData` object. */
  data?: ResumeData;
}

export interface Invoice extends Document {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  extractor: "invoice";
  data?: InvoiceData;
}

export interface JobDescription extends Document {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  extractor: "job-description";
  data?: JobDescriptionData;
}

export interface ResumeRedact extends Document {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  extractor: "resume-redact";
  data?: ResumeRedactData;
}

export interface LocationAnnotationUpdateParsed extends Location {}

export interface ResumeSearchDetailLocationValue
  extends Location,
    ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1 {}

export interface JobDescriptionSearchDetailLocationValue
  extends Location,
    Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1 {}

export interface ResumeSearchDetailEducationValueItem
  extends Education,
    ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1 {}

export interface JobTitleAnnotation extends Annotation {
  /** Years of experience range */
  parsed?: JobTitleAnnotationParsed;
}

export interface TextAnnotation extends Annotation {
  parsed?: string;
}

export interface DateAnnotation extends Annotation {
  parsed?: Date;
}

export interface LanguageAnnotation extends Annotation {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly parsed?: string;
}

export interface SkillAnnotation extends Annotation {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly parsed?: string;
}

export interface ExpectedRemunerationAnnotation extends Annotation {
  parsed?: ExpectedRemunerationAnnotationParsed;
}

export interface LocationAnnotation extends Annotation {
  parsed?: Location;
}

export interface YearsExperienceAnnotation extends Annotation {
  /** Years of experience range */
  parsed?: YearsExperienceAnnotationParsed;
}

export interface AnnotationWithValidationResults extends Annotation {
  /** List of validation results for this annotation. */
  validationResults?: ValidationResult[];
}

export interface FloatAnnotation extends Annotation {
  parsed?: number;
}

export interface RowAnnotation extends Annotation {
  parsed?: RowAnnotationParsed;
}

export interface TableAnnotation extends Annotation {
  parsed?: TableAnnotationParsed;
}

export interface RowBetaAnnotation extends Annotation {
  parsed?: RowBetaAnnotationParsed;
}

export interface TableBetaAnnotation extends Annotation {
  parsed?: TableBetaAnnotationParsed;
}

export interface CurrencyCodeAnnotation extends Annotation {
  parsed?: DataPointChoice;
}

export interface DateRangeAnnotation extends Annotation {
  parsed?: DateRangeAnnotationParsed;
}

export interface PhoneNumberAnnotation extends Annotation {
  parsed?: PhoneNumberAnnotationParsed;
}

export interface UrlAnnotation extends Annotation {
  parsed?: UrlAnnotationParsed;
}

export interface JobTitleAnnotationUpdate
  extends AnnotationBase,
    JobTitleParsed {}

export interface TextAnnotationUpdate extends AnnotationBase {
  parsed?: string;
}

export interface DateAnnotationUpdate extends AnnotationBase {
  parsed?: Date;
}

export interface LanguageAnnotationUpdate extends AnnotationBase {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly parsed?: string;
}

export interface SkillAnnotationUpdate extends AnnotationBase {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly parsed?: string;
}

export interface ExpectedRemunerationAnnotationUpdate extends AnnotationBase {
  parsed?: ExpectedRemunerationAnnotationUpdateParsed;
}

export interface LocationAnnotationUpdate extends AnnotationBase {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly parsed?: LocationAnnotationUpdateParsed;
}

export interface YearsExperienceAnnotationUpdate extends AnnotationBase {
  /** Years of experience range */
  parsed?: YearsExperienceAnnotationUpdateParsed;
}

export interface ResumeSearchParametersCustomData
  extends SearchParametersCustomData {}

export interface ResumeSearchDetailSkillsValueItem
  extends ResumeSkill,
    ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1 {}

export interface ResumeSearchDetailLanguagesValueItem
  extends ResumeSkill,
    Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1 {}

export interface JobDescriptionSearchDetailOccupationGroupValue
  extends OccupationGroupSearchResult {}

/** Known values of {@link Region} that the service accepts. */
export enum KnownRegion {
  /** Api */
  Api = "api",
  /** ApiEu1 */
  ApiEu1 = "api.eu1",
  /** ApiUs1 */
  ApiUs1 = "api.us1",
}

/**
 * Defines values for Region. \
 * {@link KnownRegion} can be used interchangeably with Region,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **api** \
 * **api.eu1** \
 * **api.us1**
 */
export type Region = string;

/** Known values of {@link OrganizationRole} that the service accepts. */
export enum KnownOrganizationRole {
  /** Admin */
  Admin = "admin",
  /** Member */
  Member = "member",
}

/**
 * Defines values for OrganizationRole. \
 * {@link KnownOrganizationRole} can be used interchangeably with OrganizationRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **admin** \
 * **member**
 */
export type OrganizationRole = string;

/** Known values of {@link OrganizationUserRole} that the service accepts. */
export enum KnownOrganizationUserRole {
  /** Admin */
  Admin = "admin",
  /** Member */
  Member = "member",
}

/**
 * Defines values for OrganizationUserRole. \
 * {@link KnownOrganizationUserRole} can be used interchangeably with OrganizationUserRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **admin** \
 * **member**
 */
export type OrganizationUserRole = string;

/** Known values of {@link ThemeConfigPaletteMode} that the service accepts. */
export enum KnownThemeConfigPaletteMode {
  /** Light */
  Light = "light",
  /** Dark */
  Dark = "dark",
}

/**
 * Defines values for ThemeConfigPaletteMode. \
 * {@link KnownThemeConfigPaletteMode} can be used interchangeably with ThemeConfigPaletteMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **light** \
 * **dark**
 */
export type ThemeConfigPaletteMode = string;

/** Known values of {@link WorkspaceVisibility} that the service accepts. */
export enum KnownWorkspaceVisibility {
  /** Organization */
  Organization = "organization",
  /** Private */
  Private = "private",
}

/**
 * Defines values for WorkspaceVisibility. \
 * {@link KnownWorkspaceVisibility} can be used interchangeably with WorkspaceVisibility,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **organization** \
 * **private**
 */
export type WorkspaceVisibility = string;

/** Known values of {@link AnnotationContentType} that the service accepts. */
export enum KnownAnnotationContentType {
  /** Text */
  Text = "text",
  /** Integer */
  Integer = "integer",
  /** Float */
  Float = "float",
  /** Decimal */
  Decimal = "decimal",
  /** Date */
  Date = "date",
  /** Datetime */
  Datetime = "datetime",
  /** Daterange */
  Daterange = "daterange",
  /** Boolean */
  Boolean = "boolean",
  /** Enum */
  Enum = "enum",
  /** Location */
  Location = "location",
  /** Phonenumber */
  Phonenumber = "phonenumber",
  /** Json */
  Json = "json",
  /** Table */
  Table = "table",
  /** Expectedremuneration */
  Expectedremuneration = "expectedremuneration",
  /** Jobtitle */
  Jobtitle = "jobtitle",
  /** Language */
  Language = "language",
  /** Skill */
  Skill = "skill",
  /** Yearsexperience */
  Yearsexperience = "yearsexperience",
  /** Group */
  Group = "group",
  /** TableDeprecated */
  TableDeprecated = "table_deprecated",
  /** Url */
  Url = "url",
  /** Image */
  Image = "image",
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
 * **daterange** \
 * **boolean** \
 * **enum** \
 * **location** \
 * **phonenumber** \
 * **json** \
 * **table** \
 * **expectedremuneration** \
 * **jobtitle** \
 * **language** \
 * **skill** \
 * **yearsexperience** \
 * **group** \
 * **table_deprecated** \
 * **url** \
 * **image**
 */
export type AnnotationContentType = string;

/** Known values of {@link CollectionDateFormatPreference} that the service accepts. */
export enum KnownCollectionDateFormatPreference {
  /** DMY */
  DMY = "DMY",
  /** MDY */
  MDY = "MDY",
  /** YMD */
  YMD = "YMD",
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
export type CollectionDateFormatPreference = string;

/** Known values of {@link DateFormatPreference} that the service accepts. */
export enum KnownDateFormatPreference {
  /** DMY */
  DMY = "DMY",
  /** MDY */
  MDY = "MDY",
  /** YMD */
  YMD = "YMD",
}

/**
 * Defines values for DateFormatPreference. \
 * {@link KnownDateFormatPreference} can be used interchangeably with DateFormatPreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DMY** \
 * **MDY** \
 * **YMD**
 */
export type DateFormatPreference = string;

/** Known values of {@link DocumentState} that the service accepts. */
export enum KnownDocumentState {
  /** Uploaded */
  Uploaded = "uploaded",
  /** Review */
  Review = "review",
  /** Validated */
  Validated = "validated",
  /** Archived */
  Archived = "archived",
  /** Rejected */
  Rejected = "rejected",
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
export type DocumentState = string;

/** Known values of {@link DateRange} that the service accepts. */
export enum KnownDateRange {
  /** Today */
  Today = "today",
  /** Yesterday */
  Yesterday = "yesterday",
  /** Week */
  Week = "week",
  /** Month */
  Month = "month",
  /** Year */
  Year = "year",
}

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
export type DateRange = string;

/** Known values of {@link ResumeDataLanguagesItem} that the service accepts. */
export enum KnownResumeDataLanguagesItem {
  /** Ainu */
  Ainu = "Ainu",
  /** Akan */
  Akan = "Akan",
  /** Akkadian */
  Akkadian = "Akkadian",
  /** Amharic */
  Amharic = "Amharic",
  /** Anam */
  Anam = "Anam",
  /** Arabic */
  Arabic = "Arabic",
  /** Aramaic */
  Aramaic = "Aramaic",
  /** Arem */
  Arem = "Arem",
  /** Armenian */
  Armenian = "Armenian",
  /** Awadhi */
  Awadhi = "Awadhi",
  /** Aymara */
  Aymara = "Aymara",
  /** Azari */
  Azari = "Azari",
  /** Bagheli */
  Bagheli = "Bagheli",
  /** Bagri */
  Bagri = "Bagri",
  /** Bahasa */
  Bahasa = "Bahasa",
  /** Bambara */
  Bambara = "Bambara",
  /** Bangala */
  Bangala = "Bangala",
  /** Bardi */
  Bardi = "Bardi",
  /** Bassa */
  Bassa = "Bassa",
  /** Batak */
  Batak = "Batak",
  /** Belarusian */
  Belarusian = "Belarusian",
  /** Bemba */
  Bemba = "Bemba",
  /** Benga */
  Benga = "Benga",
  /** Bengali */
  Bengali = "Bengali",
  /** Berber */
  Berber = "Berber",
  /** Bhojpuri */
  Bhojpuri = "Bhojpuri",
  /** Bislama */
  Bislama = "Bislama",
  /** Brahui */
  Brahui = "Brahui",
  /** Bulgarian */
  Bulgarian = "Bulgarian",
  /** Bunu */
  Bunu = "Bunu",
  /** Cambodian */
  Cambodian = "Cambodian",
  /** Carew */
  Carew = "Carew",
  /** Carib */
  Carib = "Carib",
  /** Catalan */
  Catalan = "Catalan",
  /** Cebuano */
  Cebuano = "Cebuano",
  /** Chakma */
  Chakma = "Chakma",
  /** Chamorro */
  Chamorro = "Chamorro",
  /** Chango */
  Chango = "Chango",
  /** Chewa */
  Chewa = "Chewa",
  /** Croatian */
  Croatian = "Croatian",
  /** Czech */
  Czech = "Czech",
  /** Dagbani */
  Dagbani = "Dagbani",
  /** Danish */
  Danish = "Danish",
  /** Dari */
  Dari = "Dari",
  /** Dayi */
  Dayi = "Dayi",
  /** Dhatki */
  Dhatki = "Dhatki",
  /** Dhivehi */
  Dhivehi = "Dhivehi",
  /** Dinka */
  Dinka = "Dinka",
  /** Dogri */
  Dogri = "Dogri",
  /** Duala */
  Duala = "Duala",
  /** Dutch */
  Dutch = "Dutch",
  /** English */
  English = "English",
  /** Esperanto */
  Esperanto = "Esperanto",
  /** Estonian */
  Estonian = "Estonian",
  /** Ewondo */
  Ewondo = "Ewondo",
  /** Faroese */
  Faroese = "Faroese",
  /** Filipino */
  Filipino = "Filipino",
  /** Finnish */
  Finnish = "Finnish",
  /** Formula */
  Formula = "Formula",
  /** French */
  French = "French",
  /** Frisian */
  Frisian = "Frisian",
  /** Friulian */
  Friulian = "Friulian",
  /** Fula */
  Fula = "Fula",
  /** Gaelic */
  Gaelic = "Gaelic",
  /** Galo */
  Galo = "Galo",
  /** Garhwali */
  Garhwali = "Garhwali",
  /** Garifuna */
  Garifuna = "Garifuna",
  /** German */
  German = "German",
  /** Gikuyu */
  Gikuyu = "Gikuyu",
  /** Gujarati */
  Gujarati = "Gujarati",
  /** Gujerati */
  Gujerati = "Gujerati",
  /** Gwere */
  Gwere = "Gwere",
  /** Hawaiian */
  Hawaiian = "Hawaiian",
  /** Haya */
  Haya = "Haya",
  /** Hebrew */
  Hebrew = "Hebrew",
  /** Hindi */
  Hindi = "Hindi",
  /** Hmu */
  Hmu = "Hmu",
  /** Hokkien */
  Hokkien = "Hokkien",
  /** Hopi */
  Hopi = "Hopi",
  /** Hungarian */
  Hungarian = "Hungarian",
  /** Hup */
  Hup = "Hup",
  /** Ibanag */
  Ibanag = "Ibanag",
  /** Igbo */
  Igbo = "Igbo",
  /** Ilokano */
  Ilokano = "Ilokano",
  /** Indonesian */
  Indonesian = "Indonesian",
  /** Intermediate */
  Intermediate = "Intermediate",
  /** Irish */
  Irish = "Irish",
  /** Italian */
  Italian = "Italian",
  /** Japanese */
  Japanese = "Japanese",
  /** Jiba */
  Jiba = "Jiba",
  /** Kachin */
  Kachin = "Kachin",
  /** Kalenjin */
  Kalenjin = "Kalenjin",
  /** Kamayo */
  Kamayo = "Kamayo",
  /** Kannada */
  Kannada = "Kannada",
  /** Kaonde */
  Kaonde = "Kaonde",
  /** Kayan */
  Kayan = "Kayan",
  /** Khandeshi */
  Khandeshi = "Khandeshi",
  /** Khmer */
  Khmer = "Khmer",
  /** Kikuyu */
  Kikuyu = "Kikuyu",
  /** Kodava */
  Kodava = "Kodava",
  /** Koma */
  Koma = "Koma",
  /** Kongo */
  Kongo = "Kongo",
  /** Konkani */
  Konkani = "Konkani",
  /** Korean */
  Korean = "Korean",
  /** Korwa */
  Korwa = "Korwa",
  /** Kreyol */
  Kreyol = "Kreyol",
  /** Krio */
  Krio = "Krio",
  /** Kumaoni */
  Kumaoni = "Kumaoni",
  /** Kurdish */
  Kurdish = "Kurdish",
  /** Kurukh */
  Kurukh = "Kurukh",
  /** Kwa */
  Kwa = "Kwa",
  /** Ladino */
  Ladino = "Ladino",
  /** Lango */
  Lango = "Lango",
  /** Latvian */
  Latvian = "Latvian",
  /** Lawa */
  Lawa = "Lawa",
  /** Lingala */
  Lingala = "Lingala",
  /** Lithuanian */
  Lithuanian = "Lithuanian",
  /** Lule */
  Lule = "Lule",
  /** Luxembourgish */
  Luxembourgish = "Luxembourgish",
  /** Magahi */
  Magahi = "Magahi",
  /** Maithili */
  Maithili = "Maithili",
  /** Malay */
  Malay = "Malay",
  /** Malayalam */
  Malayalam = "Malayalam",
  /** Malaysian */
  Malaysian = "Malaysian",
  /** Malvi */
  Malvi = "Malvi",
  /** Maninka */
  Maninka = "Maninka",
  /** Manipuri */
  Manipuri = "Manipuri",
  /** Manx */
  Manx = "Manx",
  /** Marathi */
  Marathi = "Marathi",
  /** Mayan */
  Mayan = "Mayan",
  /** Medumba */
  Medumba = "Medumba",
  /** Memoni */
  Memoni = "Memoni",
  /** Mewari */
  Mewari = "Mewari",
  /** Mizo */
  Mizo = "Mizo",
  /** Montenegrin */
  Montenegrin = "Montenegrin",
  /** Mwan */
  Mwan = "Mwan",
  /** Mwanga */
  Mwanga = "Mwanga",
  /** Ndebele */
  Ndebele = "Ndebele",
  /** Nepali */
  Nepali = "Nepali",
  /** Nimadi */
  Nimadi = "Nimadi",
  /** Oriya */
  Oriya = "Oriya",
  /** Oromo */
  Oromo = "Oromo",
  /** Ovambo */
  Ovambo = "Ovambo",
  /** Pamona */
  Pamona = "Pamona",
  /** Pangasinan */
  Pangasinan = "Pangasinan",
  /** Pashto */
  Pashto = "Pashto",
  /** Phoenician */
  Phoenician = "Phoenician",
  /** Polish */
  Polish = "Polish",
  /** Portuguese */
  Portuguese = "Portuguese",
  /** Pulaar */
  Pulaar = "Pulaar",
  /** Pular */
  Pular = "Pular",
  /** Punjabi */
  Punjabi = "Punjabi",
  /** Quecha */
  Quecha = "Quecha",
  /** Rajasthani */
  Rajasthani = "Rajasthani",
  /** Romanian */
  Romanian = "Romanian",
  /** Russian */
  Russian = "Russian",
  /** Sakha */
  Sakha = "Sakha",
  /** Sango */
  Sango = "Sango",
  /** Santhali */
  Santhali = "Santhali",
  /** Saraiki */
  Saraiki = "Saraiki",
  /** Seim */
  Seim = "Seim",
  /** Shading */
  Shading = "Shading",
  /** Shama */
  Shama = "Shama",
  /** Shan */
  Shan = "Shan",
  /** Shona */
  Shona = "Shona",
  /** Silesian */
  Silesian = "Silesian",
  /** Sindhi */
  Sindhi = "Sindhi",
  /** Slovak */
  Slovak = "Slovak",
  /** Slovene */
  Slovene = "Slovene",
  /** Soga */
  Soga = "Soga",
  /** Sogdian */
  Sogdian = "Sogdian",
  /** Sotho */
  Sotho = "Sotho",
  /** Spanish */
  Spanish = "Spanish",
  /** Sudanese */
  Sudanese = "Sudanese",
  /** Sumerian */
  Sumerian = "Sumerian",
  /** Surajpuri */
  Surajpuri = "Surajpuri",
  /** Surigaonon */
  Surigaonon = "Surigaonon",
  /** Swati */
  Swati = "Swati",
  /** Swazi */
  Swazi = "Swazi",
  /** Swedish */
  Swedish = "Swedish",
  /** Tagalog */
  Tagalog = "Tagalog",
  /** Tamil */
  Tamil = "Tamil",
  /** Tausug */
  Tausug = "Tausug",
  /** Telugu */
  Telugu = "Telugu",
  /** Tetum */
  Tetum = "Tetum",
  /** Tharu */
  Tharu = "Tharu",
  /** Tibetan */
  Tibetan = "Tibetan",
  /** Tigrinya */
  Tigrinya = "Tigrinya",
  /** Tripuri */
  Tripuri = "Tripuri",
  /** Tswana */
  Tswana = "Tswana",
  /** Tulu */
  Tulu = "Tulu",
  /** Turkish */
  Turkish = "Turkish",
  /** Tuwali */
  Tuwali = "Tuwali",
  /** Ubi */
  Ubi = "Ubi",
  /** Ukrainian */
  Ukrainian = "Ukrainian",
  /** Urdu */
  Urdu = "Urdu",
  /** Veps */
  Veps = "Veps",
  /** Vietnamese */
  Vietnamese = "Vietnamese",
  /** Wagdi */
  Wagdi = "Wagdi",
  /** Waziri */
  Waziri = "Waziri",
  /** Xhosa */
  Xhosa = "Xhosa",
  /** Yiddish */
  Yiddish = "Yiddish",
  /** Yoruba */
  Yoruba = "Yoruba",
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
export type ResumeDataLanguagesItem = string;

/** Known values of {@link DocumentFormat} that the service accepts. */
export enum KnownDocumentFormat {
  /** Json */
  Json = "json",
  /** Xml */
  Xml = "xml",
  /** HrXml */
  HrXml = "hr-xml",
}

/**
 * Defines values for DocumentFormat. \
 * {@link KnownDocumentFormat} can be used interchangeably with DocumentFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **json** \
 * **xml** \
 * **hr-xml**
 */
export type DocumentFormat = string;

/** Known values of {@link DocumentSplitterType} that the service accepts. */
export enum KnownDocumentSplitterType {
  /** Llm */
  Llm = "llm",
  /** Extractor */
  Extractor = "extractor",
}

/**
 * Defines values for DocumentSplitterType. \
 * {@link KnownDocumentSplitterType} can be used interchangeably with DocumentSplitterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **llm** \
 * **extractor**
 */
export type DocumentSplitterType = string;

/** Known values of {@link LLMModelType} that the service accepts. */
export enum KnownLLMModelType {
  /** AnthropicClaude3Haiku20240307V10 */
  AnthropicClaude3Haiku20240307V10 = "anthropic.claude-3-haiku-20240307-v1:0",
  /** AnthropicClaude3Sonnet20240229V10 */
  AnthropicClaude3Sonnet20240229V10 = "anthropic.claude-3-sonnet-20240229-v1:0",
  /** AnthropicClaude35Sonnet20240620V10 */
  AnthropicClaude35Sonnet20240620V10 = "anthropic.claude-3-5-sonnet-20240620-v1:0",
  /** Gpt35 */
  Gpt35 = "gpt-35",
  /** Gpt4 */
  Gpt4 = "gpt-4",
}

/**
 * Defines values for LLMModelType. \
 * {@link KnownLLMModelType} can be used interchangeably with LLMModelType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **anthropic.claude-3-haiku-20240307-v1:0** \
 * **anthropic.claude-3-sonnet-20240229-v1:0** \
 * **anthropic.claude-3-5-sonnet-20240620-v1:0** \
 * **gpt-35** \
 * **gpt-4**
 */
export type LLMModelType = string;

/** Known values of {@link InvitationStatus} that the service accepts. */
export enum KnownInvitationStatus {
  /** Pending */
  Pending = "pending",
  /** Accepted */
  Accepted = "accepted",
  /** Declined */
  Declined = "declined",
}

/**
 * Defines values for InvitationStatus. \
 * {@link KnownInvitationStatus} can be used interchangeably with InvitationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **pending** \
 * **accepted** \
 * **declined**
 */
export type InvitationStatus = string;

/** Known values of {@link InvitationResponseStatus} that the service accepts. */
export enum KnownInvitationResponseStatus {
  /** Accepted */
  Accepted = "accepted",
  /** Declined */
  Declined = "declined",
}

/**
 * Defines values for InvitationResponseStatus. \
 * {@link KnownInvitationResponseStatus} can be used interchangeably with InvitationResponseStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **accepted** \
 * **declined**
 */
export type InvitationResponseStatus = string;

/** Known values of {@link ResthookEvent} that the service accepts. */
export enum KnownResthookEvent {
  /** ResumeParseSucceeded */
  ResumeParseSucceeded = "resume.parse.succeeded",
  /** ResumeParseFailed */
  ResumeParseFailed = "resume.parse.failed",
  /** ResumeParseCompleted */
  ResumeParseCompleted = "resume.parse.completed",
  /** InvoiceParseSucceeded */
  InvoiceParseSucceeded = "invoice.parse.succeeded",
  /** InvoiceParseFailed */
  InvoiceParseFailed = "invoice.parse.failed",
  /** InvoiceParseCompleted */
  InvoiceParseCompleted = "invoice.parse.completed",
  /** InvoiceValidateCompleted */
  InvoiceValidateCompleted = "invoice.validate.completed",
  /** DocumentParseSucceeded */
  DocumentParseSucceeded = "document.parse.succeeded",
  /** DocumentParseFailed */
  DocumentParseFailed = "document.parse.failed",
  /** DocumentParseCompleted */
  DocumentParseCompleted = "document.parse.completed",
  /** DocumentValidateCompleted */
  DocumentValidateCompleted = "document.validate.completed",
  /** DocumentClassifySucceeded */
  DocumentClassifySucceeded = "document.classify.succeeded",
  /** DocumentClassifyFailed */
  DocumentClassifyFailed = "document.classify.failed",
  /** DocumentClassifyCompleted */
  DocumentClassifyCompleted = "document.classify.completed",
  /** DocumentRejected */
  DocumentRejected = "document.rejected",
  /** AnnotationValidated */
  AnnotationValidated = "annotation.validated",
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
 * **document.rejected** \
 * **annotation.validated**
 */
export type ResthookEvent = string;

/** Known values of {@link ResthookSubscriptionVersion} that the service accepts. */
export enum KnownResthookSubscriptionVersion {
  /** V1 */
  V1 = "v1",
  /** V2 */
  V2 = "v2",
  /** V3 */
  V3 = "v3",
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
export type ResthookSubscriptionVersion = string;

/** Known values of {@link Version} that the service accepts. */
export enum KnownVersion {
  /** V1 */
  V1 = "v1",
  /** V2 */
  V2 = "v2",
  /** V3 */
  V3 = "v3",
}

/**
 * Defines values for Version. \
 * {@link KnownVersion} can be used interchangeably with Version,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **v1** \
 * **v2** \
 * **v3**
 */
export type Version = string;

/** Known values of {@link SearchParametersCustomDataFilterType} that the service accepts. */
export enum KnownSearchParametersCustomDataFilterType {
  /** Equals */
  Equals = "equals",
  /** Range */
  Range = "range",
}

/**
 * Defines values for SearchParametersCustomDataFilterType. \
 * {@link KnownSearchParametersCustomDataFilterType} can be used interchangeably with SearchParametersCustomDataFilterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **equals** \
 * **range**
 */
export type SearchParametersCustomDataFilterType = string;

/** Known values of {@link ResumeSkillSourcesItemSection} that the service accepts. */
export enum KnownResumeSkillSourcesItemSection {
  /** Achievements */
  Achievements = "Achievements",
  /** AdditionalInformation */
  AdditionalInformation = "AdditionalInformation",
  /** Education */
  Education = "Education",
  /** Extracurriculars */
  Extracurriculars = "Extracurriculars",
  /** Organisations */
  Organisations = "Organisations",
  /** Other */
  Other = "Other",
  /** PersonalDetails */
  PersonalDetails = "PersonalDetails",
  /** Projects */
  Projects = "Projects",
  /** Publications */
  Publications = "Publications",
  /** Referees */
  Referees = "Referees",
  /** Skills */
  Skills = "Skills",
  /** Summary */
  Summary = "Summary",
  /** Training */
  Training = "Training",
  /** WorkExperience */
  WorkExperience = "WorkExperience",
  /** NotPopulated */
  NotPopulated = "NotPopulated",
  /** Header */
  Header = "Header",
  /** Footer */
  Footer = "Footer",
  /** SkillsInterestsLanguages */
  SkillsInterestsLanguages = "Skills/Interests/Languages",
  /** TrainingCertifications */
  TrainingCertifications = "Training/Certifications",
  /** ExtracurricularsLeadership */
  ExtracurricularsLeadership = "Extracurriculars/Leadership",
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
export type ResumeSkillSourcesItemSection = string;

/** Known values of {@link ResumeSearchConfigDistanceUnit} that the service accepts. */
export enum KnownResumeSearchConfigDistanceUnit {
  /** Mi */
  Mi = "mi",
  /** Km */
  Km = "km",
}

/**
 * Defines values for ResumeSearchConfigDistanceUnit. \
 * {@link KnownResumeSearchConfigDistanceUnit} can be used interchangeably with ResumeSearchConfigDistanceUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **mi** \
 * **km**
 */
export type ResumeSearchConfigDistanceUnit = string;

/** Known values of {@link JobDescriptionSearchConfigDistanceUnit} that the service accepts. */
export enum KnownJobDescriptionSearchConfigDistanceUnit {
  /** Mi */
  Mi = "mi",
  /** Km */
  Km = "km",
}

/**
 * Defines values for JobDescriptionSearchConfigDistanceUnit. \
 * {@link KnownJobDescriptionSearchConfigDistanceUnit} can be used interchangeably with JobDescriptionSearchConfigDistanceUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **mi** \
 * **km**
 */
export type JobDescriptionSearchConfigDistanceUnit = string;

/** Known values of {@link Enum23} that the service accepts. */
export enum KnownEnum23 {
  /** Resumes */
  Resumes = "resumes",
  /** JobDescriptions */
  JobDescriptions = "job_descriptions",
}

/**
 * Defines values for Enum23. \
 * {@link KnownEnum23} can be used interchangeably with Enum23,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export type Enum23 = string;

/** Known values of {@link IndexDocumentType} that the service accepts. */
export enum KnownIndexDocumentType {
  /** Resumes */
  Resumes = "resumes",
  /** JobDescriptions */
  JobDescriptions = "job_descriptions",
}

/**
 * Defines values for IndexDocumentType. \
 * {@link KnownIndexDocumentType} can be used interchangeably with IndexDocumentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export type IndexDocumentType = string;

/** Known values of {@link DocumentType} that the service accepts. */
export enum KnownDocumentType {
  /** Resumes */
  Resumes = "resumes",
  /** JobDescriptions */
  JobDescriptions = "job_descriptions",
}

/**
 * Defines values for DocumentType. \
 * {@link KnownDocumentType} can be used interchangeably with DocumentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export type DocumentType = string;
/** Defines values for ManagementLevel. */
export type ManagementLevel = "None" | "Low" | "Mid" | "Upper";
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
export interface GetAllWorkspacesOptionalParams
  extends coreClient.OperationOptions {
  /** Filter by name. */
  name?: string;
}

/** Contains response data for the getAllWorkspaces operation. */
export type GetAllWorkspacesResponse = Workspace[];

/** Optional parameters. */
export interface CreateWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createWorkspace operation. */
export type CreateWorkspaceResponse = Workspace;

/** Optional parameters. */
export interface GetWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getWorkspace operation. */
export type GetWorkspaceResponse = Workspace;

/** Optional parameters. */
export interface UpdateWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateWorkspace operation. */
export type UpdateWorkspaceResponse = Workspace;

/** Optional parameters. */
export interface DeleteWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetUsageByWorkspaceOptionalParams
  extends coreClient.OperationOptions {
  /** Start date of the period to retrieve. Format: YYYY-MM */
  start?: string;
  /** End date of the period to retrieve. Format: YYYY-MM */
  end?: string;
}

/** Contains response data for the getUsageByWorkspace operation. */
export type GetUsageByWorkspaceResponse = UsageByWorkspace[];

/** Optional parameters. */
export interface GetAllWorkspaceMembershipsOptionalParams
  extends coreClient.OperationOptions {
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
export type GetAllWorkspaceMembershipsResponse =
  PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface CreateWorkspaceMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createWorkspaceMembership operation. */
export type CreateWorkspaceMembershipResponse = WorkspaceMembership;

/** Optional parameters. */
export interface GetWorkspaceMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getWorkspaceMembership operation. */
export type GetWorkspaceMembershipResponse = WorkspaceMembership;

/** Optional parameters. */
export interface DeleteWorkspaceMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetAllCollectionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllCollections operation. */
export type GetAllCollectionsResponse = Collection[];

/** Optional parameters. */
export interface CreateCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createCollection operation. */
export type CreateCollectionResponse = Collection;

/** Optional parameters. */
export interface GetCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getCollection operation. */
export type GetCollectionResponse = Collection;

/** Optional parameters. */
export interface UpdateCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateCollection operation. */
export type UpdateCollectionResponse = Collection;

/** Optional parameters. */
export interface DeleteCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface CreateDataFieldForCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createDataFieldForCollection operation. */
export type CreateDataFieldForCollectionResponse = DataField;

/** Optional parameters. */
export interface GetDataFieldForCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDataFieldForCollection operation. */
export type GetDataFieldForCollectionResponse = CollectionField;

/** Optional parameters. */
export interface UpdateDataFieldForCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateDataFieldForCollection operation. */
export type UpdateDataFieldForCollectionResponse = CollectionField;

/** Optional parameters. */
export interface GetUsageByCollectionOptionalParams
  extends coreClient.OperationOptions {
  /** Start date of the period to retrieve. Format: YYYY-MM */
  start?: string;
  /** End date of the period to retrieve. Format: YYYY-MM */
  end?: string;
}

/** Contains response data for the getUsageByCollection operation. */
export type GetUsageByCollectionResponse = UsageByCollection[];

/** Optional parameters. */
export interface GetAllDocumentsOptionalParams
  extends coreClient.OperationOptions {
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
  /** Filter by tag's IDs. */
  tags?: number[];
  /** Filter by created datetime. */
  createdDt?: DateRange;
  /** Partial, case-insensitive match with file name or tag name. */
  search?: string;
  /** Sort the result set. A "-" at the beginning denotes DESC sort, e.g. -created_dt. Sort by multiple fields is supported. Supported values include: 'file_name', 'extractor', 'created_dt', 'validated_dt', 'archived_dt' and 'parsed__<dataPointSlug>'. */
  ordering?: string[];
  /** By default, this endpoint returns only the meta data of the documents. Set this to `true` will return a summary of the data that was parsed. If you want to retrieve the full set of data for a document, use the `GET /documents/{identifier}` endpoint. */
  includeData?: boolean;
  /** Exclude some documents from the result. */
  exclude?: string[];
  /** Exclude documents that are currently being reviewed. */
  inReview?: boolean;
  /** Filter by failed status. */
  failed?: boolean;
  /** Filter by ready status. */
  ready?: boolean;
  /** Filter for validatable documents. */
  validatable?: boolean;
  /** Filter for documents with challenges. */
  hasChallenges?: boolean;
  /** Filter for documents with this custom identifier. */
  customIdentifier?: string;
  /** If "true", the response is compacted to annotations' parsed data. Annotations' meta data are excluded. Default is "false". */
  compact?: boolean;
  /** If "false", the documents count is not computed, thus saving time for large collections. Default is "true". */
  count?: boolean;
}

/** Contains response data for the getAllDocuments operation. */
export type GetAllDocumentsResponse =
  PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface CreateDocumentOptionalParams
  extends coreClient.OperationOptions {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG, TIFF, ODT, XLS, XLSX, ZIP */
  file?: coreRestPipeline.RequestBodyType;
  /** URL to download the document. */
  url?: string;
  /** Create resume or job description directly from data. */
  data?: DocumentCreateData;
  /** Uniquely identify a collection. */
  collection?: string;
  /** Uniquely identify a workspace. */
  workspace?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Deprecated in favor of `customIdentifier`. */
  identifier?: string;
  /** Specify a custom identifier for the document if you need one, not required to be unique. */
  customIdentifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings. */
  rejectDuplicates?: boolean;
  /** A JSON representation of the RegionBias object. */
  regionBias?: string;
  /** Explicitly mark this document as low priority. */
  lowPriority?: string;
  /** If true, the returned parse result (assuming `wait` is also true) will be a compact version of the full result. */
  compact?: string;
  /** If true, no data will be stored after parsing. Only compatible with requests where wait: True. */
  deleteAfterParse?: string;
  /** If true, the document will be viewable in the Affinda Validation Tool. Set to False to optimize parsing speed. */
  enableValidationTool?: string;
}

/** Contains response data for the createDocument operation. */
export type CreateDocumentResponse = DocumentUnion;

/** Optional parameters. */
export interface GetDocumentOptionalParams extends coreClient.OperationOptions {
  /** If "true", the response is compacted to annotations' parsed data. Annotations' meta data are excluded. Default is "false". */
  compact?: boolean;
  /** Specify which format you want the response to be. Default is "json" */
  format?: DocumentFormat;
}

/** Contains response data for the getDocument operation. */
export type GetDocumentResponse = DocumentUnion;

/** Optional parameters. */
export interface UpdateDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateDocument operation. */
export type UpdateDocumentResponse = DocumentUnion;

/** Optional parameters. */
export interface DeleteDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface UpdateDocumentDataOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateDocumentData operation. */
export type UpdateDocumentDataResponse = DocumentUnion;

/** Optional parameters. */
export interface BatchAddTagOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface BatchRemoveTagOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetAllValidationResultsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the getAllValidationResults operation. */
export type GetAllValidationResultsResponse = ValidationResult[];

/** Optional parameters. */
export interface CreateValidationResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createValidationResult operation. */
export type CreateValidationResultResponse = ValidationResult;

/** Optional parameters. */
export interface GetValidationResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getValidationResult operation. */
export type GetValidationResultResponse = ValidationResult;

/** Optional parameters. */
export interface UpdateValidationResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateValidationResult operation. */
export type UpdateValidationResultResponse = ValidationResult;

/** Optional parameters. */
export interface DeleteValidationResultOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface BatchCreateValidationResultsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the batchCreateValidationResults operation. */
export type BatchCreateValidationResultsResponse = ValidationResult[];

/** Optional parameters. */
export interface BatchDeleteValidationResultsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetAllDocumentSplittersOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Filter by organization. */
  organization?: string;
  /** Allows you to include public splitters in the response when you're filtering by organization. */
  includePublic?: boolean;
}

/** Contains response data for the getAllDocumentSplitters operation. */
export type GetAllDocumentSplittersResponse = DocumentSplitter[];

/** Optional parameters. */
export interface GetDocumentSplitterOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDocumentSplitter operation. */
export type GetDocumentSplitterResponse = DocumentSplitter;

/** Optional parameters. */
export interface EditDocumentPagesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the editDocumentPages operation. */
export type EditDocumentPagesResponse = Meta[];

/** Optional parameters. */
export interface GetAllExtractorsOptionalParams
  extends coreClient.OperationOptions {
  /** Filter by name. */
  name?: string;
  /** Filter by validatable. */
  validatable?: boolean;
  /** Whether to include Affinda's off-the-shelf extractors. */
  includePublicExtractors?: boolean;
}

/** Contains response data for the getAllExtractors operation. */
export type GetAllExtractorsResponse = Extractor[];

/** Optional parameters. */
export interface CreateExtractorOptionalParams
  extends coreClient.OperationOptions {
  body?: ExtractorCreate;
}

/** Contains response data for the createExtractor operation. */
export type CreateExtractorResponse = Extractor;

/** Optional parameters. */
export interface GetExtractorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getExtractor operation. */
export type GetExtractorResponse = Extractor;

/** Optional parameters. */
export interface UpdateExtractorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateExtractor operation. */
export type UpdateExtractorResponse = Extractor;

/** Optional parameters. */
export interface DeleteExtractorOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetAllDataPointsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Filter by organization. */
  organization?: string;
  /** Allows you to include public data points in the response when you're filtering by organization. */
  includePublic?: boolean;
  /** Filter by extractor. */
  extractor?: string;
  /** Filter by slug. */
  slug?: string;
  /** Filter by description. */
  description?: string;
  /** Filter by annotation content type, e.g. text, integer, float, date, etc. */
  annotationContentType?: string;
  /** Filter by specific identifiers. */
  identifier?: string[];
}

/** Contains response data for the getAllDataPoints operation. */
export type GetAllDataPointsResponse = DataPoint[];

/** Optional parameters. */
export interface CreateDataPointOptionalParams
  extends coreClient.OperationOptions {
  body?: DataPointCreate;
}

/** Contains response data for the createDataPoint operation. */
export type CreateDataPointResponse = DataPoint;

/** Optional parameters. */
export interface GetDataPointOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDataPoint operation. */
export type GetDataPointResponse = DataPoint;

/** Optional parameters. */
export interface UpdateDataPointOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateDataPoint operation. */
export type UpdateDataPointResponse = DataPoint;

/** Optional parameters. */
export interface DeleteDataPointOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetDataPointChoicesOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Filter choices by searching for a substring. */
  search?: string;
}

/** Contains response data for the getDataPointChoices operation. */
export type GetDataPointChoicesResponse =
  PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface CreateDataPointChoiceOptionalParams
  extends coreClient.OperationOptions {
  body?: DataPointChoiceCreate;
}

/** Contains response data for the createDataPointChoice operation. */
export type CreateDataPointChoiceResponse = DataPointChoice;

/** Optional parameters. */
export interface GetDataPointChoiceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDataPointChoice operation. */
export type GetDataPointChoiceResponse = DataPointChoice;

/** Optional parameters. */
export interface UpdateDataPointChoiceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateDataPointChoice operation. */
export type UpdateDataPointChoiceResponse = DataPointChoice;

/** Optional parameters. */
export interface DeleteDataPointChoiceOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ReplaceDataPointChoicesOptionalParams
  extends coreClient.OperationOptions {
  /** Request body for replacing choices of a data point. Either `collection` or `organization` is required. */
  body?: DataPointChoiceReplaceRequest;
}

/** Contains response data for the replaceDataPointChoices operation. */
export type ReplaceDataPointChoicesResponse = DataPointChoiceReplaceResponse;

/** Optional parameters. */
export interface GetAllAnnotationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllAnnotations operation. */
export type GetAllAnnotationsResponse =
  Paths1D5Zg6MV3AnnotationsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface CreateAnnotationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createAnnotation operation. */
export type CreateAnnotationResponse = AnnotationWithValidationResults;

/** Optional parameters. */
export interface GetAnnotationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAnnotation operation. */
export type GetAnnotationResponse = Annotation;

/** Optional parameters. */
export interface UpdateAnnotationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateAnnotation operation. */
export type UpdateAnnotationResponse = Annotation;

/** Optional parameters. */
export interface DeleteAnnotationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteAnnotation operation. */
export type DeleteAnnotationResponse = AnotationDelete;

/** Optional parameters. */
export interface BatchCreateAnnotationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the batchCreateAnnotations operation. */
export type BatchCreateAnnotationsResponse = (Annotation | null)[];

/** Optional parameters. */
export interface BatchUpdateAnnotationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the batchUpdateAnnotations operation. */
export type BatchUpdateAnnotationsResponse = (Annotation | null)[];

/** Optional parameters. */
export interface BatchDeleteAnnotationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the batchDeleteAnnotations operation. */
export type BatchDeleteAnnotationsOperationResponse =
  BatchDeleteAnnotationsResponse;

/** Optional parameters. */
export interface CreateMappingDataSourceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createMappingDataSource operation. */
export type CreateMappingDataSourceResponse = MappingDataSource;

/** Optional parameters. */
export interface ListMappingDataSourcesOptionalParams
  extends coreClient.OperationOptions {
  /** Filter by name. */
  name?: string;
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Filter by workspace. */
  workspace?: string;
  /** Filter by organization. */
  organization?: string;
  /** Filter by identifier. */
  identifier?: string;
}

/** Contains response data for the listMappingDataSources operation. */
export type ListMappingDataSourcesResponse =
  Paths11QdcofV3MappingDataSourcesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface GetMappingDataSourceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMappingDataSource operation. */
export type GetMappingDataSourceResponse = MappingDataSource;

/** Optional parameters. */
export interface DeleteMappingDataSourceOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ListMappingDataSourceValuesOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Search for specific values */
  search?: string;
  /** Filter based on annotation ID */
  annotation?: number;
}

/** Contains response data for the listMappingDataSourceValues operation. */
export type ListMappingDataSourceValuesResponse =
  Paths1Qr7BnyV3MappingDataSourcesIdentifierValuesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface ReplaceMappingDataSourceValuesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the replaceMappingDataSourceValues operation. */
export type ReplaceMappingDataSourceValuesResponse = Record<string, unknown>[];

/** Optional parameters. */
export interface AddMappingDataSourceValueOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the addMappingDataSourceValue operation. */
export type AddMappingDataSourceValueResponse = Record<string, unknown>;

/** Optional parameters. */
export interface GetMappingDataSourceValueOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMappingDataSourceValue operation. */
export type GetMappingDataSourceValueResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DeleteMappingDataSourceValueOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface CreateMappingOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createMapping operation. */
export type CreateMappingResponse = Mapping;

/** Optional parameters. */
export interface ListMappingsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the listMappings operation. */
export type ListMappingsResponse =
  Paths1Dpvb2PV3MappingsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface GetMappingOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getMapping operation. */
export type GetMappingResponse = Mapping;

/** Optional parameters. */
export interface DeleteMappingOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface UpdateMappingOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateMapping operation. */
export type UpdateMappingResponse = Mapping;

/** Optional parameters. */
export interface GetAllTagsOptionalParams extends coreClient.OperationOptions {
  /** Filter by name. */
  name?: string;
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Filter by workspace. */
  workspace?: string;
}

/** Contains response data for the getAllTags operation. */
export type GetAllTagsResponse = Tag[];

/** Optional parameters. */
export interface CreateTagOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the createTag operation. */
export type CreateTagResponse = Tag;

/** Optional parameters. */
export interface GetTagOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getTag operation. */
export type GetTagResponse = Tag;

/** Optional parameters. */
export interface UpdateTagOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the updateTag operation. */
export type UpdateTagResponse = Tag;

/** Optional parameters. */
export interface DeleteTagOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetAllOrganizationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllOrganizations operation. */
export type GetAllOrganizationsResponse = Organization[];

/** Optional parameters. */
export interface CreateOrganizationOptionalParams
  extends coreClient.OperationOptions {
  /** Upload avatar for the organization. */
  avatar?: coreRestPipeline.RequestBodyType;
  /** Used to sign webhook payloads so you can verify their integrity. */
  resthookSignatureKey?: string;
}

/** Contains response data for the createOrganization operation. */
export type CreateOrganizationResponse = Organization;

/** Optional parameters. */
export interface GetOrganizationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOrganization operation. */
export type GetOrganizationResponse = Organization;

/** Optional parameters. */
export interface UpdateOrganizationOptionalParams
  extends coreClient.OperationOptions {
  /** Upload avatar for the organization. */
  avatar?: coreRestPipeline.RequestBodyType;
  /** Used to sign webhook payloads so you can verify their integrity. */
  resthookSignatureKey?: string;
  name?: string;
  /** Configuration of the embeddable validation tool. */
  validationToolConfig?: ValidationToolConfig;
}

/** Contains response data for the updateOrganization operation. */
export type UpdateOrganizationResponse = Organization;

/** Optional parameters. */
export interface DeleteOrganizationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetAllOrganizationMembershipsOptionalParams
  extends coreClient.OperationOptions {
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
export type GetAllOrganizationMembershipsResponse =
  PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface GetOrganizationMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOrganizationMembership operation. */
export type GetOrganizationMembershipResponse = OrganizationMembership;

/** Optional parameters. */
export interface UpdateOrganizationMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateOrganizationMembership operation. */
export type UpdateOrganizationMembershipResponse = OrganizationMembership;

/** Optional parameters. */
export interface DeleteOrganizationMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetAllInvitationsOptionalParams
  extends coreClient.OperationOptions {
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
export type GetAllInvitationsResponse =
  Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface CreateInvitationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createInvitation operation. */
export type CreateInvitationResponse = Invitation;

/** Optional parameters. */
export interface GetInvitationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInvitation operation. */
export type GetInvitationResponse = Invitation;

/** Optional parameters. */
export interface UpdateInvitationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateInvitation operation. */
export type UpdateInvitationResponse = Invitation;

/** Optional parameters. */
export interface DeleteInvitationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetInvitationByTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInvitationByToken operation. */
export type GetInvitationByTokenResponse = Invitation;

/** Optional parameters. */
export interface RespondToInvitationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the respondToInvitation operation. */
export type RespondToInvitationResponse = Invitation;

/** Optional parameters. */
export interface GetAllApiUsersOptionalParams
  extends coreClient.OperationOptions {
  /** Filter by organization. */
  organization?: string;
}

/** Contains response data for the getAllApiUsers operation. */
export type GetAllApiUsersResponse =
  Paths26Civ0V3ApiUsersGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface CreateApiUserOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createApiUser operation. */
export type CreateApiUserResponse = ApiUserWithKey;

/** Optional parameters. */
export interface GetApiUserOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getApiUser operation. */
export type GetApiUserResponse = ApiUserWithoutKey;

/** Optional parameters. */
export interface UpdateApiUserOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateApiUser operation. */
export type UpdateApiUserResponse = ApiUserWithoutKey;

/** Optional parameters. */
export interface DeleteApiUserOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface RegenerateApiKeyForApiUserOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateApiKeyForApiUser operation. */
export type RegenerateApiKeyForApiUserResponse = ApiUserWithKey;

/** Optional parameters. */
export interface GetAllResthookSubscriptionsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the getAllResthookSubscriptions operation. */
export type GetAllResthookSubscriptionsResponse =
  PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface CreateResthookSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createResthookSubscription operation. */
export type CreateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export interface GetResthookSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResthookSubscription operation. */
export type GetResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export interface UpdateResthookSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateResthookSubscription operation. */
export type UpdateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export interface DeleteResthookSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ActivateResthookSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the activateResthookSubscription operation. */
export type ActivateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export interface ListOccupationGroupsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOccupationGroups operation. */
export type ListOccupationGroupsResponse = OccupationGroup[];

/** Optional parameters. */
export interface CreateResumeSearchOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the createResumeSearch operation. */
export type CreateResumeSearchResponse = ResumeSearch;

/** Optional parameters. */
export interface GetResumeSearchDetailOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResumeSearchDetail operation. */
export type GetResumeSearchDetailResponse = ResumeSearchDetail;

/** Optional parameters. */
export interface GetResumeSearchConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResumeSearchConfig operation. */
export type GetResumeSearchConfigResponse = ResumeSearchConfig;

/** Optional parameters. */
export interface UpdateResumeSearchConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateResumeSearchConfig operation. */
export type UpdateResumeSearchConfigResponse = ResumeSearchConfig;

/** Optional parameters. */
export interface CreateResumeSearchEmbedUrlOptionalParams
  extends coreClient.OperationOptions {
  body?: Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the createResumeSearchEmbedUrl operation. */
export type CreateResumeSearchEmbedUrlResponse = ResumeSearchEmbed;

/** Optional parameters. */
export interface GetResumeSearchMatchOptionalParams
  extends coreClient.OperationOptions {
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
export type GetResumeSearchMatchResponse = ResumeSearchMatch;

/** Optional parameters. */
export interface GetResumeSearchSuggestionJobTitleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResumeSearchSuggestionJobTitle operation. */
export type GetResumeSearchSuggestionJobTitleResponse = {
  /** The parsed response body. */
  body: string[];
};

/** Optional parameters. */
export interface GetResumeSearchSuggestionSkillOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResumeSearchSuggestionSkill operation. */
export type GetResumeSearchSuggestionSkillResponse = {
  /** The parsed response body. */
  body: string[];
};

/** Optional parameters. */
export interface CreateJobDescriptionSearchOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the createJobDescriptionSearch operation. */
export type CreateJobDescriptionSearchResponse = JobDescriptionSearch;

/** Optional parameters. */
export interface GetJobDescriptionSearchDetailOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getJobDescriptionSearchDetail operation. */
export type GetJobDescriptionSearchDetailResponse = JobDescriptionSearchDetail;

/** Optional parameters. */
export interface GetJobDescriptionSearchConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getJobDescriptionSearchConfig operation. */
export type GetJobDescriptionSearchConfigResponse = JobDescriptionSearchConfig;

/** Optional parameters. */
export interface UpdateJobDescriptionSearchConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateJobDescriptionSearchConfig operation. */
export type UpdateJobDescriptionSearchConfigResponse =
  JobDescriptionSearchConfig;

/** Optional parameters. */
export interface CreateJobDescriptionSearchEmbedUrlOptionalParams
  extends coreClient.OperationOptions {
  body?: PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the createJobDescriptionSearchEmbedUrl operation. */
export type CreateJobDescriptionSearchEmbedUrlResponse =
  JobDescriptionSearchEmbed;

/** Optional parameters. */
export interface GetAllIndexesOptionalParams
  extends coreClient.OperationOptions {
  /** Filter indices by name */
  name?: string;
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Filter indices by a document type */
  documentType?: Enum23;
}

/** Contains response data for the getAllIndexes operation. */
export type GetAllIndexesResponse =
  PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface CreateIndexOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createIndex operation. */
export type CreateIndexResponse = Index;

/** Optional parameters. */
export interface UpdateIndexOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateIndex operation. */
export type UpdateIndexResponse = Index;

/** Optional parameters. */
export interface DeleteIndexOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetAllIndexDocumentsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the getAllIndexDocuments operation. */
export type GetAllIndexDocumentsResponse =
  PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface CreateIndexDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createIndexDocument operation. */
export type CreateIndexDocumentResponse =
  PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface DeleteIndexDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ReIndexDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIOptionalParams
  extends coreClient.ServiceClientOptions {
  /** region - server parameter */
  region?: Region;
  /** Overrides client endpoint. */
  endpoint?: string;
}
