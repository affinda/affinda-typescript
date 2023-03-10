import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

export type DocumentUnion = Document | Resume | Invoice | JobDescription;

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

export interface ResumeSearchParametersCustomData {
  filterType: ResumeSearchParametersCustomDataFilterType;
  dataPoint: string;
  /** 'equals' searches require the 'value' key inside the query, and 'range' searches require at least one of 'gte' (greater than or equal) and 'lte' (less than or equal) */
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
  pdf: string;
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

export interface RequestError {
  type: string;
  errors: RequestErrorErrorsItem[];
}

export interface RequestErrorErrorsItem {
  attr: string | null;
  code: string;
  detail: string;
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

export interface Location {
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
  searchToolTheme?: { [propertyName: string]: any };
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
}

export interface ResumeSearchConfigActionsItem {
  /** Human readable label to display in the UI */
  label?: string;
  /** Name of the event to be triggered */
  eventName?: string;
}

export interface Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema {
  configOverride?: ResumeSearchConfig;
}

export interface ResumeSearchEmbed {
  /** The signed URL for the embedable search tool. */
  url?: string;
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
  pdf: string;
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

export interface ComponentsRe6GnoSchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueAllof1 {
  match?: boolean;
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
  searchToolTheme?: { [propertyName: string]: any };
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
}

export interface JobDescriptionSearchConfigActionsItem {
  /** Human readable label to display in the UI */
  label?: string;
  /** Name of the event to be triggered */
  eventName?: string;
}

export interface PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema {
  configOverride?: JobDescriptionSearchConfig;
}

export interface JobDescriptionSearchEmbed {
  /** The signed URL for the embedable search tool. */
  url?: string;
}

export interface PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema {
  /** Number of indexes in result */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  results?: Get200ApplicationJsonPropertiesItemsItem[];
}

export interface Get200ApplicationJsonPropertiesItemsItem {
  name: string;
  documentType?: GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType;
}

export interface Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema {
  name?: string;
  documentType?: Enum6;
}

export interface PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema {
  /** Number of indexed documents in result */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  results?: Paths1Kdm1ZxV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems[];
}

export interface Paths1Kdm1ZxV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems {
  document?: string;
}

export interface PathsCl024WV3IndexNameDocumentsPostRequestbodyContentApplicationJsonSchema {
  document?: string;
}

export interface PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema {
  /** Unique identifier for the document. */
  document?: string;
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
}

export interface PaginatedResponse {
  /** Number of items in results. */
  count: number;
  /** URL to request next page of results. */
  next?: string;
  /** URL to request previous page of results. */
  previous?: string;
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

export interface User {
  /** Uniquely identify a user. */
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  /** URL of the user's avatar. */
  avatar?: string;
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
  fields: Field[];
}

export interface Field {
  label: string;
  slug: string;
  dataPoint: string;
  mandatory?: boolean;
  disabled?: boolean;
  autoValidationThreshold?: number;
  fields?: Field[];
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

export interface DataPoint {
  /** Uniquely identify a data point. */
  identifier: string;
  name: string;
  slug?: string;
  description?: string;
  annotationContentType: AnnotationContentType;
  organization?: Organization;
  /** Uniquely identify an extractor. */
  extractor: string | null;
  multiple?: boolean;
  noRect?: boolean;
  similarTo?: string[];
  displayEnumValue?: boolean;
  children?: DataPoint[];
}

export interface DataPointCreate {
  name?: string;
  slug: string;
  description?: string;
  annotationContentType: AnnotationContentType;
  /** Uniquely identify an organization. */
  organization: string;
  /** Uniquely identify an extractor. */
  extractor: string;
  multiple?: boolean;
  noRect?: boolean;
}

export interface DataPointUpdate {
  name?: string;
  slug?: string;
  description?: string;
}

export interface Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: DataPointChoice[];
}

export interface DataPointChoice {
  id: number;
  label: string;
  value: string;
  description?: string;
}

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
  members?: User[];
  /** Number of unvalidated documents in the workspace. */
  unvalidatedDocsCount?: number;
  /** Number of validated documents in the workspace. */
  confirmedDocsCount?: number;
  ingestEmail?: string;
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

export interface WorkspaceCreate {
  /** Uniquely identify an organization. */
  organization: string;
  name: string;
  /** Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace. */
  visibility?: WorkspaceVisibility;
  /** If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed. */
  rejectInvalidDocuments?: boolean;
}

export interface WorkspaceUpdate {
  name?: string;
  /** Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace. */
  visibility?: WorkspaceVisibility;
  /** If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed. */
  rejectInvalidDocuments?: boolean;
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
  fields?: FieldGroup[];
  fieldsConfigured?: boolean;
  dateFormatPreference?: CollectionDateFormatPreference;
  /** Predict the date format from any dates in the document that is not ambiguous. */
  dateFormatFromDocument?: boolean;
  /** Extra configurations specific to an extractor. */
  extractorConfig?: { [propertyName: string]: any };
  /** Number of unvalidated documents in the collection. */
  unvalidatedDocsCount?: number;
  /** Number of validated documents in the collection. */
  confirmedDocsCount?: number;
  ingestEmail?: string;
}

export interface CollectionWorkspace {
  /** Uniquely identify a workspace. */
  identifier?: string;
  organization?: Organization;
  name?: string;
}

export interface CollectionCreate {
  name: string;
  /** Uniquely identify a workspace. */
  workspace: string;
  /** Uniquely identify an extractor. */
  extractor: string;
  autoValidationThreshold?: number;
  fields?: FieldGroup[];
  dateFormatPreference?: DateFormatPreference;
  /** Predict the date format from any dates in the document that is not ambiguous. */
  dateFormatFromDocument?: boolean;
  /** Extra configurations specific to an extractor. */
  extractorConfig?: { [propertyName: string]: any };
}

export interface CollectionUpdate {
  name?: string;
  autoValidationThreshold?: number;
  fields?: FieldGroup[];
  dateFormatPreference?: DateFormatPreference;
  /** Predict the date format from any dates in the document that is not ambiguous. */
  dateFormatFromDocument?: boolean;
  /** Extra configurations specific to an extractor. */
  extractorConfig?: { [propertyName: string]: any };
}

export interface PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: DocumentUnion[];
}

export interface Document {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  extractor: "resume" | "invoice" | "job-description";
  meta: DocumentMeta;
  error?: DocumentError;
}

export interface DocumentMeta {
  /** Uniquely identify a document. */
  identifier: string;
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
  confirmedDt?: Date;
  isConfirmed?: boolean;
  rejectedDt?: Date;
  isRejected?: boolean;
  createdDt?: Date;
  errorCode?: string;
  errorDetail?: string;
  /** URL to view the file. */
  file?: string;
  tags?: Tag[];
  confirmedBy?: UserNullable;
  /** If the document is created via email ingestion, this field stores the email file's URL. */
  sourceEmail?: string;
}

/** If this document is part of a splitted document, this attribute points to the original document that this document is splitted from. */
export interface DocumentMetaParentDocument {
  /** Uniquely identify a document. */
  identifier?: string;
}

export interface DocumentMetaChildDocumentsItem {
  /** Uniquely identify a document. */
  identifier?: string;
}

export interface PageMeta {
  id: number;
  /** Page number within the document, starts from 0. */
  pageIndex: number;
  /** The URL to the image of the page. */
  image: string | null;
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
}

export interface DocumentMetaCollectionExtractor {
  /** Uniquely identify an extractor. */
  identifier?: string;
  name?: string;
  /** Base extractor's identifier. */
  baseExtractor?: string;
  validatable?: boolean;
}

export interface DocumentMetaWorkspace {
  /** Uniquely identify a workspace. */
  identifier: string;
  name?: string;
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

export interface UserNullable {
  /** Uniquely identify a user. */
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  /** URL of the user's avatar. */
  avatar?: string;
}

export interface DocumentError {
  errorCode?: string;
  errorDetail?: string;
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
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
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

export interface Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1 {
  results?: ResthookSubscription[];
}

export interface ResthookSubscription {
  /** Resthook subscription's ID. */
  id?: number;
  /** The event name to subscribe to. */
  event?: ResthookEvent;
  organization?: Organization;
  /** URL of the resthook's receiver. */
  targetUrl?: string;
  /** Resthooks only fire for active subscriptions. */
  active?: boolean;
  /** Resthook subscriptions can be auto deactivated if the receiver continuously returns error status code over a period of time. */
  autoDeactivated?: boolean;
  /** The reason for the subscription being auto deactivated. May contains the error response that the receiver returned. */
  autoDeactivateReason?: string;
  /** Version of the resthook subscription. Determines the resthook body being fired. */
  version?: ResthookSubscriptionVersion;
}

export interface ResthookSubscriptionCreate {
  /** URL of the resthook's receiver. */
  targetUrl: string;
  /** The event name to subscribe to. */
  event: ResthookEvent;
  organization?: string;
  /** Version of the resthook subscription. Determines the resthook body being fired. */
  version?: Version;
}

export interface ResthookSubscriptionUpdate {
  /** The event name to subscribe to. */
  event?: ResthookEvent;
  /** Uniquely identify an organization. */
  organization?: string;
  /** Version of the resthook subscription. Determines the resthook body being fired. */
  version?: Version;
}

/** For custom fields. E.g. 'isAvailable': true */
export interface ComponentsEyyf0ZSchemasResumedataAdditionalproperties {}

/** A JSON-encoded string of the `ResumeData` object. */
export interface ResumeData {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  name?: ResumeDataName;
  phoneNumbers?: string[];
  websites?: string[];
  emails?: string[];
  dateOfBirth?: string;
  location?: Location;
  objective?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly languages?: string[];
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
}

export interface ResumeDataName {
  raw?: string;
  first?: string;
  last?: string;
  middle?: string;
  title?: string;
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

export interface InvoiceData {
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
  customFields?: { [propertyName: string]: any };
}

export interface InvoiceDataTablesItem {
  rows?: (RowAnnotation | null)[];
}

export interface RowAnnotation {
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
  customFields?: { [propertyName: string]: any };
}

export interface Annotation {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  id: number;
  /** x/y coordinates for the rectangular bounding box containing the data */
  rectangle: Rectangle | null;
  rectangles: Rectangle[] | null;
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
  dataPoint: string;
  contentType: string;
}

export interface Rectangle {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface Components1W3SqeuSchemasInvoicedataPropertiesPaymentamountbaseAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components4A2PzvSchemasInvoicedataPropertiesPaymentamounttotalAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsEtsq6MSchemasInvoicedataPropertiesPaymentamountdueAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components5Rnu7ESchemasInvoicedataPropertiesInvoicenumberAllof1 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsAq75Z8SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components5D6NjySchemasInvoicedataPropertiesSupplierbusinessnumberAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components105Abr3SchemasInvoicedataPropertiesCustomernumberAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components158Lya5SchemasInvoicedataPropertiesCustomerbusinessnumberAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components2XnshtSchemasInvoicedataPropertiesPaymentreferenceAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components74A7C1SchemasInvoicedataPropertiesBankaccountnumberAllof1 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsB3U7OaSchemasInvoicedataPropertiesSuppliervatAllof1 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsBeazccSchemasInvoicedataPropertiesCustomervatAllof1 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsA69Bd0SchemasInvoicedataPropertiesBpaybillercodeAllof1 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1QdassaSchemasInvoicedataPropertiesBanksortcodeAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1127QwqSchemasInvoicedataPropertiesBankibanAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1Roa72HSchemasInvoicedataPropertiesBankswiftAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1RrxgkvSchemasInvoicedataPropertiesBankbsbAllof1 {
  raw?: string;
  parsed?: string;
}

export interface ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1O8OpknSchemasInvoicedataPropertiesCustomercompanynameAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1P4Fl61SchemasInvoicedataPropertiesSuppliercompanynameAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1YsiqwnSchemasInvoicedataPropertiesCustomerphonenumberAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1Hr2XldSchemasInvoicedataPropertiesSupplierphonenumberAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1Fe3VqtSchemasInvoicedataPropertiesSupplierfaxAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components1Y7HcurSchemasInvoicedataPropertiesCustomeremailAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components10Thcs2SchemasInvoicedataPropertiesSupplieremailAllof1 {
  raw?: string;
  parsed?: string;
}

export interface Components17JmwpjSchemasInvoicedataPropertiesSupplierwebsiteAllof1 {
  raw?: string;
  parsed?: string;
}

export interface JobDescriptionData {
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
}

export interface DocumentCreate {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** URL to download the document. */
  url?: string;
  /** Uniquely identify a collection. */
  collection?: string;
  /** Uniquely identify a workspace. */
  workspace?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Specify a custom identifier for the document. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** If "true", parsing will fail when the uploaded document is duplicate of an existing document. If "false" (default), will parse the document normally whether its a duplicate or not. */
  rejectDuplicates?: string;
}

/** IndexRequestBody */
export interface IndexRequestBody {
  name?: string;
  documentType?: PostContentSchemaDocumentType;
}

export type ResumeSearchDetailLocationValue = Location &
  ComponentsN9ShogSchemasResumesearchdetailPropertiesLocationPropertiesValueAllof1 & {};

export type JobDescriptionSearchDetailLocationValue = Location &
  Components1TlnsonSchemasJobdescriptionsearchdetailPropertiesLocationPropertiesValueAllof1 & {};

export type ResumeSearchDetailEducationValueItem = Education &
  ComponentsSxu0N3SchemasResumesearchdetailPropertiesEducationPropertiesValueItemsAllof1 & {};

export type ResumeSearchDetailSkillsValueItem = ResumeSkill &
  ComponentsH65QjbSchemasResumesearchdetailPropertiesSkillsPropertiesValueItemsAllof1 & {};

export type ResumeSearchDetailLanguagesValueItem = ResumeSkill &
  Components159Ji55SchemasResumesearchdetailPropertiesLanguagesPropertiesValueItemsAllof1 & {};

export type ResumeSearchDetailOccupationGroupValueItem = OccupationGroup &
  ComponentsK7P1F5SchemasResumesearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1 & {};

export type JobDescriptionSearchDetailOccupationGroupValue = OccupationGroup &
  ComponentsRe6GnoSchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueAllof1 & {};

export type PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema = PaginatedResponse &
  Paths93Fa0ZV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export type Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema = PaginatedResponse &
  PathsKhpbbuV3InvitationsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export type PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema = PaginatedResponse &
  Paths4K6IzqV3DataPointChoicesGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export type PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema = PaginatedResponse &
  Paths2Ld2HiV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export type PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema = PaginatedResponse &
  PathsL3R02CV3DocumentsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export type PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema = PaginatedResponse &
  Paths1Qojy9V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchemaAllof1 & {};

export type InvitationRespondedBy = User & {};

export type Resume = Document & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  extractor: "resume";
  /** A JSON-encoded string of the `ResumeData` object. */
  data?: ResumeData;
};

export type Invoice = Document & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  extractor: "invoice";
  data?: InvoiceData;
};

export type JobDescription = Document & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  extractor: "job-description";
  data?: JobDescriptionData;
};

export type DateAnnotation = Annotation & {
  parsed?: Date;
};

export type TextAnnotation = Annotation & {
  parsed?: string;
};

export type LocationAnnotation = Annotation & {
  parsed?: Location;
};

export type JobTitleAnnotation = Annotation & {
  /** Years of experience range */
  parsed?: JobTitleAnnotationParsed;
};

export type LanguageAnnotation = Annotation & {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly parsed?: string;
};

export type SkillAnnotation = Annotation & {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly parsed?: string;
};

export type ExpectedRemunerationAnnotation = Annotation & {
  parsed?: ExpectedRemunerationAnnotationParsed;
};

export type YearsExperienceAnnotation = Annotation & {
  /** Years of experience range */
  parsed?: YearsExperienceAnnotationParsed;
};

export type InvoiceDataPaymentAmountBase = TextAnnotation &
  Components1W3SqeuSchemasInvoicedataPropertiesPaymentamountbaseAllof1 & {};

export type InvoiceDataPaymentAmountTax = TextAnnotation &
  Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1 & {};

export type InvoiceDataPaymentAmountTotal = TextAnnotation &
  Components4A2PzvSchemasInvoicedataPropertiesPaymentamounttotalAllof1 & {};

export type InvoiceDataPaymentAmountPaid = TextAnnotation &
  Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1 & {};

export type InvoiceDataPaymentAmountDue = TextAnnotation &
  ComponentsEtsq6MSchemasInvoicedataPropertiesPaymentamountdueAllof1 & {};

export type InvoiceDataInvoiceNumber = TextAnnotation &
  Components5Rnu7ESchemasInvoicedataPropertiesInvoicenumberAllof1 & {};

export type InvoiceDataInvoicePurchaseOrderNumber = TextAnnotation &
  ComponentsAq75Z8SchemasInvoicedataPropertiesInvoicepurchaseordernumberAllof1 & {};

export type InvoiceDataSupplierBusinessNumber = TextAnnotation &
  Components5D6NjySchemasInvoicedataPropertiesSupplierbusinessnumberAllof1 & {};

export type InvoiceDataCustomerNumber = TextAnnotation &
  Components105Abr3SchemasInvoicedataPropertiesCustomernumberAllof1 & {};

export type InvoiceDataCustomerBusinessNumber = TextAnnotation &
  Components158Lya5SchemasInvoicedataPropertiesCustomerbusinessnumberAllof1 & {};

export type InvoiceDataPaymentReference = TextAnnotation &
  Components2XnshtSchemasInvoicedataPropertiesPaymentreferenceAllof1 & {};

export type InvoiceDataBankAccountNumber = TextAnnotation &
  Components74A7C1SchemasInvoicedataPropertiesBankaccountnumberAllof1 & {};

export type InvoiceDataSupplierVat = TextAnnotation &
  ComponentsB3U7OaSchemasInvoicedataPropertiesSuppliervatAllof1 & {};

export type InvoiceDataCustomerVat = TextAnnotation &
  ComponentsBeazccSchemasInvoicedataPropertiesCustomervatAllof1 & {};

export type InvoiceDataBpayBillerCode = TextAnnotation &
  ComponentsA69Bd0SchemasInvoicedataPropertiesBpaybillercodeAllof1 & {};

export type InvoiceDataBpayReference = TextAnnotation &
  ComponentsW32SuaSchemasInvoicedataPropertiesBpayreferenceAllof1 & {};

export type InvoiceDataBankSortCode = TextAnnotation &
  Components1QdassaSchemasInvoicedataPropertiesBanksortcodeAllof1 & {};

export type InvoiceDataBankIban = TextAnnotation &
  Components1127QwqSchemasInvoicedataPropertiesBankibanAllof1 & {};

export type InvoiceDataBankSwift = TextAnnotation &
  Components1Roa72HSchemasInvoicedataPropertiesBankswiftAllof1 & {};

export type InvoiceDataBankBsb = TextAnnotation &
  Components1RrxgkvSchemasInvoicedataPropertiesBankbsbAllof1 & {};

export type InvoiceDataCustomerContactName = TextAnnotation &
  ComponentsWv2QrxSchemasInvoicedataPropertiesCustomercontactnameAllof1 & {};

export type InvoiceDataCustomerCompanyName = TextAnnotation &
  Components1O8OpknSchemasInvoicedataPropertiesCustomercompanynameAllof1 & {};

export type InvoiceDataSupplierCompanyName = TextAnnotation &
  Components1P4Fl61SchemasInvoicedataPropertiesSuppliercompanynameAllof1 & {};

export type InvoiceDataCustomerPhoneNumber = TextAnnotation &
  Components1YsiqwnSchemasInvoicedataPropertiesCustomerphonenumberAllof1 & {};

export type InvoiceDataSupplierPhoneNumber = TextAnnotation &
  Components1Hr2XldSchemasInvoicedataPropertiesSupplierphonenumberAllof1 & {};

export type InvoiceDataSupplierFax = TextAnnotation &
  Components1Fe3VqtSchemasInvoicedataPropertiesSupplierfaxAllof1 & {};

export type InvoiceDataCustomerEmail = TextAnnotation &
  Components1Y7HcurSchemasInvoicedataPropertiesCustomeremailAllof1 & {};

export type InvoiceDataSupplierEmail = TextAnnotation &
  Components10Thcs2SchemasInvoicedataPropertiesSupplieremailAllof1 & {};

export type InvoiceDataSupplierWebsite = TextAnnotation &
  Components17JmwpjSchemasInvoicedataPropertiesSupplierwebsiteAllof1 & {};

/** Known values of {@link Region} that the service accepts. */
export enum KnownRegion {
  Api = "api",
  ApiEu1 = "api.eu1"
}

/**
 * Defines values for Region. \
 * {@link KnownRegion} can be used interchangeably with Region,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **api** \
 * **api.eu1**
 */
export type Region = string;

/** Known values of {@link ResumeSearchParametersCustomDataFilterType} that the service accepts. */
export enum KnownResumeSearchParametersCustomDataFilterType {
  Equals = "equals",
  Range = "range"
}

/**
 * Defines values for ResumeSearchParametersCustomDataFilterType. \
 * {@link KnownResumeSearchParametersCustomDataFilterType} can be used interchangeably with ResumeSearchParametersCustomDataFilterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **equals** \
 * **range**
 */
export type ResumeSearchParametersCustomDataFilterType = string;

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
  Footer = "Footer",
  SkillsInterestsLanguages = "Skills/Interests/Languages",
  TrainingCertifications = "Training/Certifications",
  ExtracurricularsLeadership = "Extracurriculars/Leadership"
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

/** Known values of {@link Enum3} that the service accepts. */
export enum KnownEnum3 {
  Resumes = "resumes",
  JobDescriptions = "job_descriptions"
}

/**
 * Defines values for Enum3. \
 * {@link KnownEnum3} can be used interchangeably with Enum3,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export type Enum3 = string;

/** Known values of {@link GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType} that the service accepts. */
export enum KnownGetResponses200ContentApplicationJsonSchemaResultsItemDocumentType {
  Resumes = "resumes",
  JobDescriptions = "job_descriptions"
}

/**
 * Defines values for GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType. \
 * {@link KnownGetResponses200ContentApplicationJsonSchemaResultsItemDocumentType} can be used interchangeably with GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export type GetResponses200ContentApplicationJsonSchemaResultsItemDocumentType = string;

/** Known values of {@link PostContentSchemaDocumentType} that the service accepts. */
export enum KnownPostContentSchemaDocumentType {
  Resumes = "resumes",
  JobDescriptions = "job_descriptions"
}

/**
 * Defines values for PostContentSchemaDocumentType. \
 * {@link KnownPostContentSchemaDocumentType} can be used interchangeably with PostContentSchemaDocumentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export type PostContentSchemaDocumentType = string;

/** Known values of {@link Enum6} that the service accepts. */
export enum KnownEnum6 {
  Resumes = "resumes",
  JobDescriptions = "job_descriptions"
}

/**
 * Defines values for Enum6. \
 * {@link KnownEnum6} can be used interchangeably with Enum6,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export type Enum6 = string;

/** Known values of {@link OrganizationRole} that the service accepts. */
export enum KnownOrganizationRole {
  Admin = "admin",
  Member = "member"
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
  Admin = "admin",
  Member = "member"
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

/** Known values of {@link InvitationStatus} that the service accepts. */
export enum KnownInvitationStatus {
  Pending = "pending",
  Accepted = "accepted",
  Declined = "declined"
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
  Accepted = "accepted",
  Declined = "declined"
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

/** Known values of {@link AnnotationContentType} that the service accepts. */
export enum KnownAnnotationContentType {
  Text = "text",
  Integer = "integer",
  Float = "float",
  Decimal = "decimal",
  Date = "date",
  Datetime = "datetime",
  Boolean = "boolean",
  Enum = "enum",
  Location = "location",
  Json = "json",
  Table = "table",
  Cell = "cell",
  Expectedremuneration = "expectedremuneration",
  Jobtitle = "jobtitle",
  Language = "language",
  Skill = "skill",
  Yearsexperience = "yearsexperience"
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
 * **boolean** \
 * **enum** \
 * **location** \
 * **json** \
 * **table** \
 * **cell** \
 * **expectedremuneration** \
 * **jobtitle** \
 * **language** \
 * **skill** \
 * **yearsexperience**
 */
export type AnnotationContentType = string;

/** Known values of {@link WorkspaceVisibility} that the service accepts. */
export enum KnownWorkspaceVisibility {
  Organization = "organization",
  Private = "private"
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

/** Known values of {@link CollectionDateFormatPreference} that the service accepts. */
export enum KnownCollectionDateFormatPreference {
  DMY = "DMY",
  MDY = "MDY",
  YMD = "YMD"
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
  DMY = "DMY",
  MDY = "MDY",
  YMD = "YMD"
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
  Uploaded = "uploaded",
  Review = "review",
  Validated = "validated",
  Archived = "archived",
  Rejected = "rejected"
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
  Today = "today",
  Yesterday = "yesterday",
  Week = "week",
  Month = "month",
  Year = "year"
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

/** Known values of {@link Get8ItemsItem} that the service accepts. */
export enum KnownGet8ItemsItem {
  FileName = "file_name",
  Extractor = "extractor",
  CreatedDt = "created_dt"
}

/**
 * Defines values for Get8ItemsItem. \
 * {@link KnownGet8ItemsItem} can be used interchangeably with Get8ItemsItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **file_name** \
 * **extractor** \
 * **created_dt**
 */
export type Get8ItemsItem = string;

/** Known values of {@link DocumentFormat} that the service accepts. */
export enum KnownDocumentFormat {
  Json = "json",
  Xml = "xml",
  HrXml = "hr-xml"
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

/** Known values of {@link ResthookEvent} that the service accepts. */
export enum KnownResthookEvent {
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
  DocumentClassifyCompleted = "document.classify.completed"
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
 * **document.classify.completed**
 */
export type ResthookEvent = string;

/** Known values of {@link ResthookSubscriptionVersion} that the service accepts. */
export enum KnownResthookSubscriptionVersion {
  V1 = "v1",
  V2 = "v2",
  V3 = "v3"
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
  V1 = "v1",
  V2 = "v2",
  V3 = "v3"
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
/** Defines values for SearchLocationUnit. */
export type SearchLocationUnit = "km" | "mi";
/** Defines values for EducationLevel. */
export type EducationLevel =
  | "school"
  | "certificate"
  | "bachelors"
  | "masters"
  | "doctoral";
/** Defines values for ManagementLevel. */
export type ManagementLevel = "None" | "Low" | "Mid" | "Upper";

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
export interface AffindaAPIGetResumeSearchMatchOptionalParams
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
export type AffindaAPIGetResumeSearchMatchResponse = ResumeSearchMatch;

/** Optional parameters. */
export interface AffindaAPIGetResumeSearchConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResumeSearchConfig operation. */
export type AffindaAPIGetResumeSearchConfigResponse = ResumeSearchConfig;

/** Optional parameters. */
export interface AffindaAPIUpdateResumeSearchConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateResumeSearchConfig operation. */
export type AffindaAPIUpdateResumeSearchConfigResponse = ResumeSearchConfig;

/** Optional parameters. */
export interface AffindaAPICreateResumeSearchEmbedUrlOptionalParams
  extends coreClient.OperationOptions {
  body?: Paths1Czpnk1V3ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the createResumeSearchEmbedUrl operation. */
export type AffindaAPICreateResumeSearchEmbedUrlResponse = ResumeSearchEmbed;

/** Optional parameters. */
export interface AffindaAPIGetResumeSearchSuggestionJobTitleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResumeSearchSuggestionJobTitle operation. */
export type AffindaAPIGetResumeSearchSuggestionJobTitleResponse = {
  /** The parsed response body. */
  body: string[];
};

/** Optional parameters. */
export interface AffindaAPIGetResumeSearchSuggestionSkillOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResumeSearchSuggestionSkill operation. */
export type AffindaAPIGetResumeSearchSuggestionSkillResponse = {
  /** The parsed response body. */
  body: string[];
};

/** Optional parameters. */
export interface AffindaAPICreateJobDescriptionSearchOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the createJobDescriptionSearch operation. */
export type AffindaAPICreateJobDescriptionSearchResponse = JobDescriptionSearch;

/** Optional parameters. */
export interface AffindaAPIGetJobDescriptionSearchDetailOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getJobDescriptionSearchDetail operation. */
export type AffindaAPIGetJobDescriptionSearchDetailResponse = JobDescriptionSearchDetail;

/** Optional parameters. */
export interface AffindaAPIGetJobDescriptionSearchConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getJobDescriptionSearchConfig operation. */
export type AffindaAPIGetJobDescriptionSearchConfigResponse = JobDescriptionSearchConfig;

/** Optional parameters. */
export interface AffindaAPIUpdateJobDescriptionSearchConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateJobDescriptionSearchConfig operation. */
export type AffindaAPIUpdateJobDescriptionSearchConfigResponse = JobDescriptionSearchConfig;

/** Optional parameters. */
export interface AffindaAPICreateJobDescriptionSearchEmbedUrlOptionalParams
  extends coreClient.OperationOptions {
  body?: PathsM3DzbgV3JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the createJobDescriptionSearchEmbedUrl operation. */
export type AffindaAPICreateJobDescriptionSearchEmbedUrlResponse = JobDescriptionSearchEmbed;

/** Optional parameters. */
export interface AffindaAPIGetAllIndexesOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Filter indices by a document type */
  documentType?: Enum3;
}

/** Contains response data for the getAllIndexes operation. */
export type AffindaAPIGetAllIndexesResponse = PathsDvrcp3V3IndexGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPICreateIndexOptionalParams
  extends coreClient.OperationOptions {
  name?: string;
  documentType?: PostContentSchemaDocumentType;
}

/** Contains response data for the createIndex operation. */
export type AffindaAPICreateIndexResponse = Paths1TvfqeiV3IndexPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPIDeleteIndexOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetAllIndexDocumentsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllIndexDocuments operation. */
export type AffindaAPIGetAllIndexDocumentsResponse = PathsO7SnenV3IndexNameDocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPICreateIndexDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createIndexDocument operation. */
export type AffindaAPICreateIndexDocumentResponse = PathsFte27NV3IndexNameDocumentsPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPIDeleteIndexDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIListOccupationGroupsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOccupationGroups operation. */
export type AffindaAPIListOccupationGroupsResponse = OccupationGroup[];

/** Optional parameters. */
export interface AffindaAPIGetAllOrganizationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllOrganizations operation. */
export type AffindaAPIGetAllOrganizationsResponse = Organization[];

/** Optional parameters. */
export interface AffindaAPICreateOrganizationOptionalParams
  extends coreClient.OperationOptions {
  /** Upload avatar for the organization. */
  avatar?: coreRestPipeline.RequestBodyType;
  /** Used to sign webhook payloads so you can verify their integrity. */
  resthookSignatureKey?: string;
}

/** Contains response data for the createOrganization operation. */
export type AffindaAPICreateOrganizationResponse = Organization;

/** Optional parameters. */
export interface AffindaAPIGetOrganizationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOrganization operation. */
export type AffindaAPIGetOrganizationResponse = Organization;

/** Optional parameters. */
export interface AffindaAPIUpdateOrganizationOptionalParams
  extends coreClient.OperationOptions {
  name?: string;
  /** Upload avatar for the organization. */
  avatar?: coreRestPipeline.RequestBodyType;
  /** Used to sign webhook payloads so you can verify their integrity. */
  resthookSignatureKey?: string;
}

/** Contains response data for the updateOrganization operation. */
export type AffindaAPIUpdateOrganizationResponse = Organization;

/** Optional parameters. */
export interface AffindaAPIDeleteOrganizationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetAllOrganizationMembershipsOptionalParams
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
export type AffindaAPIGetAllOrganizationMembershipsResponse = PathsQ5Os5RV3OrganizationMembershipsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPIGetOrganizationMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOrganizationMembership operation. */
export type AffindaAPIGetOrganizationMembershipResponse = OrganizationMembership;

/** Optional parameters. */
export interface AffindaAPIUpdateOrganizationMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateOrganizationMembership operation. */
export type AffindaAPIUpdateOrganizationMembershipResponse = OrganizationMembership;

/** Optional parameters. */
export interface AffindaAPIDeleteOrganizationMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetAllInvitationsOptionalParams
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
export type AffindaAPIGetAllInvitationsResponse = Paths18Wh2VcV3InvitationsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPICreateInvitationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createInvitation operation. */
export type AffindaAPICreateInvitationResponse = Invitation;

/** Optional parameters. */
export interface AffindaAPIGetInvitationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInvitation operation. */
export type AffindaAPIGetInvitationResponse = Invitation;

/** Optional parameters. */
export interface AffindaAPIUpdateInvitationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateInvitation operation. */
export type AffindaAPIUpdateInvitationResponse = Invitation;

/** Optional parameters. */
export interface AffindaAPIDeleteInvitationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetInvitationByTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInvitationByToken operation. */
export type AffindaAPIGetInvitationByTokenResponse = Invitation;

/** Optional parameters. */
export interface AffindaAPIRespondToInvitationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the respondToInvitation operation. */
export type AffindaAPIRespondToInvitationResponse = Invitation;

/** Optional parameters. */
export interface AffindaAPIGetAllExtractorsOptionalParams
  extends coreClient.OperationOptions {
  /** Whether to include Affinda's off-the-shelf extractors. */
  includePublicExtractors?: boolean;
  /** Filter by name. */
  name?: string;
  /** Filter by validatable. */
  validatable?: boolean;
}

/** Contains response data for the getAllExtractors operation. */
export type AffindaAPIGetAllExtractorsResponse = Extractor[];

/** Optional parameters. */
export interface AffindaAPICreateExtractorOptionalParams
  extends coreClient.OperationOptions {
  body?: ExtractorCreate;
}

/** Contains response data for the createExtractor operation. */
export type AffindaAPICreateExtractorResponse = Extractor;

/** Optional parameters. */
export interface AffindaAPIGetExtractorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getExtractor operation. */
export type AffindaAPIGetExtractorResponse = Extractor;

/** Optional parameters. */
export interface AffindaAPIUpdateExtractorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateExtractor operation. */
export type AffindaAPIUpdateExtractorResponse = Extractor;

/** Optional parameters. */
export interface AffindaAPIDeleteExtractorOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetAllDataPointsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Filter by organization. */
  organization?: string;
  /** Filter by extractor. */
  extractor?: string;
  /** Filter by slug. */
  slug?: string;
  /** Filter by description. */
  description?: string;
  /** Filter by annotation content type, e.g. text, integer, float, date, etc. */
  annotationContentType?: string;
}

/** Contains response data for the getAllDataPoints operation. */
export type AffindaAPIGetAllDataPointsResponse = DataPoint[];

/** Optional parameters. */
export interface AffindaAPICreateDataPointOptionalParams
  extends coreClient.OperationOptions {
  body?: DataPointCreate;
}

/** Contains response data for the createDataPoint operation. */
export type AffindaAPICreateDataPointResponse = DataPoint;

/** Optional parameters. */
export interface AffindaAPIGetDataPointOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDataPoint operation. */
export type AffindaAPIGetDataPointResponse = DataPoint;

/** Optional parameters. */
export interface AffindaAPIUpdateDataPointOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateDataPoint operation. */
export type AffindaAPIUpdateDataPointResponse = DataPoint;

/** Optional parameters. */
export interface AffindaAPIDeleteDataPointOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetDataPointChoicesOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Filter choices by searching for a substring. */
  search?: string;
}

/** Contains response data for the getDataPointChoices operation. */
export type AffindaAPIGetDataPointChoicesResponse = PathsMnwxgV3DataPointChoicesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPIGetAllWorkspacesOptionalParams
  extends coreClient.OperationOptions {
  /** Filter by name. */
  name?: string;
}

/** Contains response data for the getAllWorkspaces operation. */
export type AffindaAPIGetAllWorkspacesResponse = Workspace[];

/** Optional parameters. */
export interface AffindaAPICreateWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createWorkspace operation. */
export type AffindaAPICreateWorkspaceResponse = Workspace;

/** Optional parameters. */
export interface AffindaAPIGetWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getWorkspace operation. */
export type AffindaAPIGetWorkspaceResponse = Workspace;

/** Optional parameters. */
export interface AffindaAPIUpdateWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateWorkspace operation. */
export type AffindaAPIUpdateWorkspaceResponse = Workspace;

/** Optional parameters. */
export interface AffindaAPIDeleteWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetAllWorkspaceMembershipsOptionalParams
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
export type AffindaAPIGetAllWorkspaceMembershipsResponse = PathsZ1JuagV3WorkspaceMembershipsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPICreateWorkspaceMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createWorkspaceMembership operation. */
export type AffindaAPICreateWorkspaceMembershipResponse = WorkspaceMembership;

/** Optional parameters. */
export interface AffindaAPIGetWorkspaceMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getWorkspaceMembership operation. */
export type AffindaAPIGetWorkspaceMembershipResponse = WorkspaceMembership;

/** Optional parameters. */
export interface AffindaAPIDeleteWorkspaceMembershipOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetAllCollectionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllCollections operation. */
export type AffindaAPIGetAllCollectionsResponse = Collection[];

/** Optional parameters. */
export interface AffindaAPICreateCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createCollection operation. */
export type AffindaAPICreateCollectionResponse = Collection;

/** Optional parameters. */
export interface AffindaAPIGetCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getCollection operation. */
export type AffindaAPIGetCollectionResponse = Collection;

/** Optional parameters. */
export interface AffindaAPIUpdateCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateCollection operation. */
export type AffindaAPIUpdateCollectionResponse = Collection;

/** Optional parameters. */
export interface AffindaAPIDeleteCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetAllDocumentsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Partial, case-insensitive match with file name or tag name. */
  search?: string;
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
  /** Sort the result set. A "-" at the beginning denotes DESC sort, e.g. -created_dt. Sort by multiple fields is supported. */
  ordering?: Get8ItemsItem[];
  /** By default, this endpoint returns only the meta data of the documents. Set this to `true` will return the detailed data that was parsed, at a performance cost. */
  includeData?: boolean;
  /** Exclude some documents from the result. */
  exclude?: string[];
  /** Exclude documents that are currently being reviewed. */
  inReview?: boolean;
}

/** Contains response data for the getAllDocuments operation. */
export type AffindaAPIGetAllDocumentsResponse = PathsOxm5M7V3DocumentsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPICreateDocumentOptionalParams
  extends coreClient.OperationOptions {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** URL to download the document. */
  url?: string;
  /** Uniquely identify a collection. */
  collection?: string;
  /** Uniquely identify a workspace. */
  workspace?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Specify a custom identifier for the document. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** If "true", parsing will fail when the uploaded document is duplicate of an existing document. If "false" (default), will parse the document normally whether its a duplicate or not. */
  rejectDuplicates?: string;
}

/** Contains response data for the createDocument operation. */
export type AffindaAPICreateDocumentResponse = DocumentUnion;

/** Optional parameters. */
export interface AffindaAPIGetDocumentOptionalParams
  extends coreClient.OperationOptions {
  /** Specify which format you want the response to be. Default is "json" */
  format?: DocumentFormat;
}

/** Contains response data for the getDocument operation. */
export type AffindaAPIGetDocumentResponse = DocumentUnion;

/** Optional parameters. */
export interface AffindaAPIUpdateDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateDocument operation. */
export type AffindaAPIUpdateDocumentResponse = DocumentUnion;

/** Optional parameters. */
export interface AffindaAPIDeleteDocumentOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetAllTagsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
  /** Filter by workspace. */
  workspace?: string;
}

/** Contains response data for the getAllTags operation. */
export type AffindaAPIGetAllTagsResponse = Tag[];

/** Optional parameters. */
export interface AffindaAPICreateTagOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createTag operation. */
export type AffindaAPICreateTagResponse = Tag;

/** Optional parameters. */
export interface AffindaAPIGetTagOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTag operation. */
export type AffindaAPIGetTagResponse = Tag;

/** Optional parameters. */
export interface AffindaAPIUpdateTagOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateTag operation. */
export type AffindaAPIUpdateTagResponse = Tag;

/** Optional parameters. */
export interface AffindaAPIDeleteTagOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIGetAllResthookSubscriptionsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the getAllResthookSubscriptions operation. */
export type AffindaAPIGetAllResthookSubscriptionsResponse = PathsVz5Kj2V3ResthookSubscriptionsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPICreateResthookSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createResthookSubscription operation. */
export type AffindaAPICreateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export interface AffindaAPIGetResthookSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResthookSubscription operation. */
export type AffindaAPIGetResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export interface AffindaAPIUpdateResthookSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateResthookSubscription operation. */
export type AffindaAPIUpdateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export interface AffindaAPIDeleteResthookSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AffindaAPIActivateResthookSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the activateResthookSubscription operation. */
export type AffindaAPIActivateResthookSubscriptionResponse = ResthookSubscription;

/** Optional parameters. */
export interface AffindaAPIOptionalParams
  extends coreClient.ServiceClientOptions {
  /** region - server parameter */
  region?: Region;
  /** Overrides client endpoint. */
  endpoint?: string;
}
