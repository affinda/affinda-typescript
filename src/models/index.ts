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
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
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
  /** The document's language. */
  language?: string;
  /**
   * The URL to the document's pdf (if the uploaded document is not already pdf, it's converted to pdf as part of the parsing process).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly pdf?: string;
  /**
   * If this document is part of a splitted document, this attribute points to the original document that this document is splitted from.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parentDocument?: SplitRelation;
  /**
   * If this document has been splitted into a number of child documents, this attribute points to those child documents.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly childDocuments?: SplitRelation[];
  /** The document's pages. */
  pages?: PageMeta[];
}

export interface SplitRelation {
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
}

export interface PageMeta {
  id?: number;
  /** Page number within the document, starts from 0. */
  pageIndex?: number;
  /** The URL to the image of the page. */
  image?: string;
  /** Height of the page's image in px. */
  height?: number;
  /** Width of the page's image in px. */
  width?: number;
  /** The degree of rotation applied to the page. Greater than 0 indicates clockwise rotation. Less than 0 indicates counter-clockwise rotation. */
  rotation?: number;
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

/** A JSON-encoded string of the `ResumeData` object. */
export interface ResumeData {
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
  education?: ResumeDataEducationItem[];
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
}

export interface ResumeDataEducationItem {
  id?: number;
  organization?: string;
  accreditation?: ResumeDataEducationItemAccreditation;
  grade?: ResumeDataEducationItemGrade;
  location?: Location;
  dates?: ResumeDataEducationItemDates;
}

export interface ResumeDataEducationItemAccreditation {
  education?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly inputStr?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly matchStr?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly educationLevel?: string;
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

export interface Resume {
  /** A JSON-encoded string of the `ResumeData` object. */
  data: ResumeData | null;
  meta: Meta;
  error: ErrorModel;
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

export interface ResumeSearchParameters {
  indices: string[];
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  jobDescription?: string;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  resume?: string;
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
  isTopStudent?: boolean;
  isTopStudentRequired?: boolean;
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
  jobTitle: JobTitleSearchScoreComponent;
  managementLevel: ManagementLevelSearchScoreComponent;
  experience: ExperienceSearchScoreComponent;
  skills: SkillsSearchScoreComponent;
  languages: LanguagesSearchScoreComponent;
  location: LocationSearchScoreComponent;
  education: EducationSearchScoreComponent;
  occupationGroup: OccupationGroupSearchScoreComponent;
  searchExpression: SearchExpressionSearchScoreComponent;
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
  grade?: EducationGrade;
  location?: Location;
  dates?: EducationDates;
}

export interface Accreditation {
  education?: string;
  educationLevel?: string;
  inputStr?: string;
  matchStr?: string;
}

export interface EducationGrade {
  raw?: string;
  value?: string;
  metric?: string;
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
}

export interface Paths2T1Oc0ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema {
  configOverride?: ResumeSearchConfig;
}

export interface ResumeSearchEmbed {
  /** The signed URL for the embedable search tool. */
  url?: string;
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

export interface Annotation {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  id?: number;
  rectangle: Rectangle | null;
  pageIndex: number | null;
  raw: string | null;
  confidence: number | null;
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

/** Years of experience range */
export interface YearsExperienceAnnotationParsed {
  /** Minimum years of experience */
  minimum?: number;
  /** Maximum years of experience */
  maximum?: number;
}

export interface JobDescriptionSearchParameters {
  indices: string[];
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
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
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier: string | null;
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
  value?: JobDescriptionSearchDetailOccupationGroupValueItem[];
}

export interface Components1Bq3Q31SchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1 {
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
}

export interface PathsFqn8P8JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema {
  configOverride?: JobDescriptionSearchConfig;
}

export interface JobDescriptionSearchEmbed {
  /** The signed URL for the embedable search tool. */
  url?: string;
}

export interface Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema {
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

export interface Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema {
  name?: string;
  documentType?: Enum4;
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
  clientVerifiedDt: string | null;
  data: InvoiceData | null;
  meta: InvoiceMeta;
  error: ErrorModel;
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
  currencyCode?: EnumAnnotationSerializer;
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

export interface Components17Ashz6SchemasInvoicePropertiesMetaAllof1 {
  clientVerifiedDt?: boolean;
  /** Signed URL (valid for 60 minutes) to access the invoice review tool */
  reviewUrl?: string;
}

export interface PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema {
  /** Number of indexes in result */
  count?: number;
  /** URL to request next page of results */
  next?: string;
  /** URL to request previous page of results */
  previous?: string;
  results?: User[];
}

export interface User {
  id?: number;
  name?: string;
  username: string;
  email?: string;
  apiKey?: string;
}

export interface Paths1Y6A2MfUsersPostResponses201ContentApplicationJsonSchemaAllof1 {
  /** API key used to authenticate for future requests.  This key is only retrievable at the initial creation of the user. */
  apiKey?: string;
}

/** ResumeRequestBody */
export interface ResumeRequestBody {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** URL to a resume to download and process */
  url?: string;
  /** A JSON-encoded string of the `ResumeData` object. */
  data?: ResumeData;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
}

/** RedactedResumeRequestBody */
export interface RedactedResumeRequestBody {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** URL to a resume to download and process */
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

/** JobDescriptionRequestBody */
export interface JobDescriptionRequestBody {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** URL to a job description to download and process */
  url?: string;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
}

/** IndexRequestBody */
export interface IndexRequestBody {
  name?: string;
  documentType?: PostContentSchemaDocumentType;
}

/** InvoiceRequestBody */
export interface InvoiceRequestBody {
  /** File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG */
  file?: coreRestPipeline.RequestBodyType;
  /** URL to an invoice to download and process */
  url?: string;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
}

export type InvoiceMeta = Meta &
  Components17Ashz6SchemasInvoicePropertiesMetaAllof1 & {};

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

export type JobDescriptionSearchDetailOccupationGroupValueItem = OccupationGroup &
  Components1Bq3Q31SchemasJobdescriptionsearchdetailPropertiesOccupationgroupPropertiesValueItemsAllof1 & {};

export type JobTitleAnnotation = Annotation & {
  /** Years of experience range */
  parsed?: JobTitleAnnotationParsed;
};

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

export type YearsExperienceAnnotation = Annotation & {
  /** Years of experience range */
  parsed?: YearsExperienceAnnotationParsed;
};

export type EnumAnnotationSerializer = Annotation & {
  parsed?: string;
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

export type PathsTop5ZkUsersPostResponses201ContentApplicationJsonSchema = User &
  Paths1Y6A2MfUsersPostResponses201ContentApplicationJsonSchemaAllof1 & {};

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

/** Known values of {@link Enum1} that the service accepts. */
export enum KnownEnum1 {
  Resumes = "resumes",
  JobDescriptions = "job_descriptions"
}

/**
 * Defines values for Enum1. \
 * {@link KnownEnum1} can be used interchangeably with Enum1,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export type Enum1 = string;

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

/** Known values of {@link Enum4} that the service accepts. */
export enum KnownEnum4 {
  Resumes = "resumes",
  JobDescriptions = "job_descriptions"
}

/**
 * Defines values for Enum4. \
 * {@link KnownEnum4} can be used interchangeably with Enum4,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resumes** \
 * **job_descriptions**
 */
export type Enum4 = string;
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
  /** URL to a resume to download and process */
  url?: string;
  /** A JSON-encoded string of the `ResumeData` object. */
  data?: ResumeData;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
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
  extends coreClient.OperationOptions {
  /** Set this to "hr-xml" to get the response in HR-XML format. Currently the only supported value for this parameter is "hr-xml". */
  format?: string;
}

/** Contains response data for the getResume operation. */
export type AffindaAPIGetResumeResponse = Resume;

/** Optional parameters. */
export interface AffindaAPIUpdateResumeDataOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateResumeData operation. */
export type AffindaAPIUpdateResumeDataResponse = ResumeData;

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
  /** URL to a resume to download and process */
  url?: string;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
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
  body?: Paths2T1Oc0ResumeSearchEmbedPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the createResumeSearchEmbedUrl operation. */
export type AffindaAPICreateResumeSearchEmbedUrlResponse = ResumeSearchEmbed;

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
  /** URL to a job description to download and process */
  url?: string;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
  /** If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete. */
  wait?: string;
  /** Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese. */
  language?: string;
  /** The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry. */
  expiryTime?: string;
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
  body?: PathsFqn8P8JobDescriptionSearchEmbedPostRequestbodyContentApplicationJsonSchema;
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
  documentType?: Enum1;
}

/** Contains response data for the getAllIndexes operation. */
export type AffindaAPIGetAllIndexesResponse = Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPICreateIndexOptionalParams
  extends coreClient.OperationOptions {
  name?: string;
  documentType?: PostContentSchemaDocumentType;
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
  /** URL to an invoice to download and process */
  url?: string;
  /** Unique identifier for the document. If creating a document and left blank, one will be automatically generated. */
  identifier?: string;
  /** Optional filename of the file */
  fileName?: string;
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
export interface AffindaAPIListOccupationGroupsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOccupationGroups operation. */
export type AffindaAPIListOccupationGroupsResponse = OccupationGroup[];

/** Optional parameters. */
export interface AffindaAPIGetAllUsersOptionalParams
  extends coreClient.OperationOptions {
  /** The number of documents to skip before starting to collect the result set. */
  offset?: number;
  /** The numbers of results to return. */
  limit?: number;
}

/** Contains response data for the getAllUsers operation. */
export type AffindaAPIGetAllUsersResponse = PathsWjaaeuUsersGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPICreateUserOptionalParams
  extends coreClient.OperationOptions {
  name?: string;
  id?: number;
  email?: string;
  apiKey?: string;
}

/** Contains response data for the createUser operation. */
export type AffindaAPICreateUserResponse = PathsTop5ZkUsersPostResponses201ContentApplicationJsonSchema;

/** Optional parameters. */
export interface AffindaAPIOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
