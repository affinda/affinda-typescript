# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [7.4.0] - 2024-10-01
### Added
- Add document splitter endpoints

## [7.3.1] - 2024-09-11
### Added
- Allow filter tags by name
- Added enableValidationThreshold to collection and field objects

### Fixed
- Conflicting types for boolean flags

## [7.3.0] - 2024-07-08
### Added
- Ability to set workspace for MappingDataSource

## [7.2.0] - 2024-07-04
### Added
- Added filter and sort options for mapping data source endpoint
- Ability to filter index by name

### Removed
- Removed unnecessary models of InvoiceData fields

## [7.1.0] - 2024-04-10
### Changed
- Reduce maximum limit from 300 to 100 and remove default value

## [7.0.0] - 2024-03-27
### Fixed
- Fix invoiceData annotation required fields to match underling text annotation

### Changed
- Bump v3 compatible client autorest.typescript to latest. This is a breaking change with TS Response and Params classes no longer being prefixed by AffindaAPI due to changes in the autorest.typescript library. e.g. `AffindaAPIGetAllWorkspacesResponse` has changed to `GetAllWorkspacesResponse`

## [6.31.0] - 2024-03-27
### Added
- Add AnnotationBatchUpdate endpoint

## [6.30.0] - 2024-03-07
### Added
- Add validation_results endpoints
- Add US1 region
- Add strict attribute to RegionBias
- Add hideReject, hideEditPages, hideRunOcr and hideReparse options to Organization validationToolConfig
- `compact` parameter for upload document endpoint

## [6.29.0] - 2024-01-31
### Added
- Add sourceEmailAddress to DocumentMeta model

## [6.28.0] - 2024-01-30
### Added
- Added "website" data point type
- Add tablesBeta to InvoiceData model
- Add sourceEmailAddress to document meta
- Add list mapping data sources endpoint
- Add mapping and dataSource to the field endpoints

### Removed
- Removed "cell" data point type

### Changed
- Add URL annotation type

## [6.27.0] - 2023-12-04
### Added
- Added AnnotationContentType
- Added show_custom_field_creation to Organization
- Add data mapping
- Add dropNullEnums to Field

## [6.26.0] - 2023-11-14
### Added
- Add PATCH /index/<name> endpoint
- Add user to Index object
- Add "compact" query parameter to GET /documents/<identifier> endpoint
- Add "compact" query parameter to POST /documents endpoint

### Changed
- Updated readme example

## [6.25.0] - 2023-11-08
### Added
- Add `parent` field to `Annotation`

### Fixed
- Make `Annotation.rectangles` field non-nullable
- Make `Annotation.document` field required

### Changed
- Remove enum constraint from `ordering` on the `getAllDocuments` operation

## [6.24.0] - 2023-10-24
### Added
- Add display_enum_value config to Collection field config

### Changed
- Migrate display_enum_value from DataPoint to Collection field config

### Removed
- Remove display_enum_value from DataPoint

## [6.23.0] - 2023-10-19
### Added
- Add disableEditDocumentMetadata option to validation tool config
- Add field custom_identifier to DocumentMeta model
- Allow specifying custom_identifier when create/update document

### Deprecated
- Deprecate writing to identifier when creating/updating document

## [6.22.0] - 2023-10-03
### Added
- Add SOC group codes to classification

## [6.21.0] - 2023-09-21
### Added
- Allow creating workspace-scope webhook
- Add "document.rejected" webhook event

## [6.20.0] - 2023-09-05
### Added
- Add `documentSplitter` field to `Workspace`

### Removed
- Removed `splitDocuments` boolean field in favour of `documentSplitter` enum field on `Workspace`

## [6.19.0] - 2023-08-14
### Added
- Add manualEntry option to DataPoint

## [6.18.0] - 2023-07-26
### Added
- Allow create and enable/disable child fields in Collection.fieldsLayout

### Deprecated
- Deprecate `fields` in favor of `enabledChildFields` and `disabledChildFields` in Collection.fieldsLayout

## [6.17.0] - 2023-07-24
### Added
- Add more validation tool configuration options

## [6.16.0] - 2023-07-19
### Changed
- Set CustomFieldConfig default to 0.5
- Make Field.slug nullable and not required

### Deprecated
- Deprecate Field.slug

### Added
- Add splitDocuments setting to workspace.
- Add lastCharacters field to API key.

## [6.15.0] - 2023-06-30
### Added
- Add allow OpenAI setting to collections

## [6.14.1] - 2023-06-28
### Fixed
- Fix empty tags and pages keys in response from GET /v3/documents

### Added
- Add xml response to api spec to GET /v3/documenets to match existing functionality

## [6.14.0] - 2023-06-27
### Added
- Allow explicitly set a document as low_priority

## [6.13.0] - 2023-06-16
### Added
- Allow create/update data point's `parent` and `displayEnumValue` property

### Changed
- Make `slug` and `organization` required when creating data point

### Removed
- Remove data point's `similarTo` property

## [6.12.0] - 2023-06-16
### Added
- Add endpoint for update resumes and JD data

## [6.11.2] - 2023-06-15
### Added
- Add `tailoredExtractorRequested` to Collection

## [6.11.1] - 2023-06-14
### Added
- Add `rawText` to invoice data

## [6.11.0] - 2023-06-09
### Added
- Add `base_extractor` parameter to collection creation endpoint

### Changed
- Make `extractor` a non required field (internal use)

## [6.10.1] - 2023-06-08
### Added
- Ability to post/patch languages for resumes in v2
- Add `include_public` parameter to /data_points endpoint

## [6.10.0] - 2023-06-07
### Changed
- Make "pdf" property in SearchResults nullable
- Nest line item table rows correctly.
- Nest line item table rows correctly.

### Fixed
- Update python_requires to be PEP compliant

### Added
- Endpoints for add/remove tag for documents
- Identifier field in DocumentUpdate model
- Allow setting `region_bias` when uploading document
- rawText field to JobDescription Model
- Required fields for resthook subscriptions
- Add `fieldsLayout` to `Collection` schema

### Deprecated
- Deprecate `Collection.fields` in favor of `Collection.fieldsLayout`

## [6.9.0] - 2023-05-02
### Added
- Add custom data to job description search results
- Add international_country_code to phone number details
- Add `created_by` field to `GET /documents` endpoint

## [6.8.0] - 2023-04-28
### Changed
- Allow custom resume fields to be nullable
- Allow custom job description fields to be nullable

### Removed
- Remove `include_child` filter from `/data_points` endpoint

### Added
- Custom fields to Job Descriptions
- Add `has_challenges` filter to `GET /documents` endpoint

## [6.7.1] - 2023-04-26
### Changed
- Provide additional filters for data point choices, and allow data point choices to be specified for any existing text
- field.

## [6.7.0] - 2023-04-25
### Added
- Phone number details to Resume Candidate info
- Add some filters to `GET /documents` endpoint: `failed`, `ready`, `validatable`

## [6.6.0] - 2023-04-24
### Added
- Add `Organization.validationToolConfig` for configuration of the embeddable validation tool

## [6.5.2] - 2023-04-20
### Fixed
- Allow rejectDuplicates to be null

## [6.5.1] - 2023-04-19
### Fixed
- Fix adding custom fields to resume and job search configs

## [6.5.0] - 2023-04-19
### Security
- Remove dependency on azure/identity, bump other versions to get security fixes

## [6.4.0] - 2023-04-18
### Changed
- rawText is now not nullable
- OccupationGroupSearchResult.children is now optional

### Added
- Add custom fields to resume and job search configs

## [6.3.2] - 2023-03-29
### Fixed
- Make search config action fields required

## [6.3.1] - 2023-03-28
### Added
- Add `whitelistIngestAddresses` to Workspace

## [6.3.0] - 2023-03-28
### Added
- Add `hideToolbar` to resume & JD search config
- Add ExtractorConfig object to Collection

## [6.2.1] - 2023-03-23
### Added
- Adding group annotation content type
- Add rejectDuplicates setting to workspace

## [6.2.0] - 2023-03-20
### Fixed
- fixed - Use OccupationGroupResult for v3 SearchAndMatch detail
- Fixed return type for InvoiceData.currencyCode

### Changed
- Don't require Field.slug

### Added
- Add redactedText field to ResumeData

## [6.1.0] - 2023-03-15
### Fixed
- Fixed search and match return types
- fixed document error return types
- Ensure list endpoints have 'results' and 'count' properties required

### Changed
- Change Document API tag from Document API - Upload Documents to Document API - Document

## [6.0.2] - 2023-03-15
### Fixed
- Fixed type and path of data_point and data_point_choices
- Fixed missing data field on base Document type

### Changed
- Minor re-ordering of API spec paths

## [6.0.1] - 2023-03-10
### Changed
- updated readme with new examples

### Fixed
- Fixed resume search response object

## [6.0.0] - 2023-03-09
### Added
- Add link to affinda help docs for resthook creation
- Add activate resthook subscription endpoint
- Added PATCH support for Job Descriptions
- Add `confirmed_by` field to document meta
- Add `description` field to `DataPointChoice`

### Changed
- Rework document polymorphism, the model used to deserialize document response is now automatically chosen based on the
- document's extractor
- Rename `updateCollectionData` to `updateCollection`
- Rename `updateDocumentData` to `updateDocument`
- Make Document.Meta.confirmedBy nullable

### Removed
- Removed v2 endpoints

## [4.3.0] - 2023-02-13
### Changed
- Remove extractor's `id` field, use `identifier` field instead

### Removed
- Remove extractor's `id` field

## [4.2.0] - 2023-02-13
### Added
- Add resthook subscription endpoints
- Add documents `in_review` filter

### Fixed
- Search score component's value is not nullable

## [4.1.1] - 2023-02-06
### Added
- add ingest email to Workspace and Collection

## [4.1.0] - 2023-02-03
### Removed
- Master/child accounts endpoints

### Added
- Add `exclude` parameter to /documents query

## [4.0.1] - 2023-01-25
### Added
- re-add DataPoint.simlarTo

## [4.0.0] - 2023-01-24
### Added
- Add document.collection.extractor.identifier to DocumentMeta
- Add cell to valid content types
- Add EU API server to api docs
- Add latitude and longtitude to Location
- Add expectedremuneration, jobtitle, language, skill and yearsexperience to AnnotationContentType

### Changed
- Updated endpoints for old v2 and newer v3 to point to the correct places.
- Changed Document top level structure to more closely resemble api v2 with top level keys of meta, data and error
- ResumeSearchParamaters.resume, ResumeSearchParameters.jobdescription, JobDescriptionSearchParameters.resume,
- DataPoint.organization

### Fixed
- Fixed various nullable fields not being nullable, and vice versa

## [3.0.0] - 2023-01-13
### Added
- Added endpoints: Organization, Membership, Invitation, tags
- Added name, organization to DataPoint, change id to identifier
- Add new objects schemas Organization, OrganizationMembership, Invitation

### Changed
- Identifier instead of id as URL param
- Update data point filters
- Allow unlimited nesting in field config
- Change document state from "export" to "archive"

### Fixed
- Collection identifier should be nullable
- Don't paginate extractors endpoint
- Fix avatar uploads
- Allow writing resthookSignatureKey

## [2.8.0] - 2023-01-12
* Yanked as this was a breaking release, see newer release for more info

## [2.7.0] - 2023-01-10
### Added
- Add rectangles to Annotation, add position to referee, add actions to JobDescriptionSearchConfig

## [2.6.0] - 2023-01-09
### Fixed
- Bump version to force new release

## [2.5.2] - 2022-12-16
### Added
- Add actions to embedded resume search
- Add actions to embedded search
- Add actions to resume search

## [2.5.1] - 2022-12-09
### Changed
- Allowing a few more fields in ResumeData to be null

### Fixed
- Issue with rejectDuplicates as a boolean field and typescript client lib generation

## [2.5.0] - 2022-11-21
### Changed
- Small changes to release process

## [2.4.0] - 2022-11-21
### Fixed
- Document meta pages without images should be nullable
- Small fixes for accreditiation and education return objects
- Various nullable fields in the API spec

### Security
- Bumped package versions for patch reasons

### Added
- Add reject_duplicates to document upload endpoint
- XML 404 response schema
- CustomData to resume search spec
- suggest skills and job titles endpoints

### Changed
- Update spec to allow XML content-type return from resumes, make totalYearsExperience nullable
- Allow additonalproperties for custom data upload (resumes) and search

## [2.3.1] - 2022-09-23
### Added
- Add job description search config and embed endpoints
- Update index endpoint with document type parameter

### Changed
- Update API spec to match API response.

## [2.3.0] - 2022-08-25
### Changed
- Update modelerfour version to latest

### Deprecated
- Depreciated resume_formats and reformatted_resumes endpoints

### Added
- Reverse match functionality - search job descriptions with a resume, or with a set of parameters.

## [2.2.1] - 2022-08-10
### Added
- Add search expression to 1v1 match

## [2.2.0] - 2022-08-04
### Added
- Adding additional search configuration and embed endpoints

## [2.1.1] - 2022-07-26
### Fixed
- Make `limit` and `offset` method-level rather than client-level params

## [2.1.0] - 2022-07-26
### Added
- Add ability to find other candidates that have similar attributes to a resume
- Add an endpoint to get the matching score between a resume and a job description

## [2.0.0] - 2022-07-04
### Added
- Ability to update resume data in the search system
- New endpoint for creating and managing users within a master account

### Changed
- Add line item tables

## [1.1.1] - 2022-06-06
### Added
- Add searchExpression to ResumeSearchDetail

## [1.1.0] - 2022-05-26
### Added
- Add resume search detail endpoint

### Fixed
- Occupation groups endpoint returns array

## [1.0.3] - 2022-05-10
### Added
- Add searchExpression to score drilldown

## [1.0.2] - 2022-05-07
### Fixed
- Make expiry time native date time

## [1.0.1] - 2022-05-01
### Added
- Add review URL in the invoice response that allows embedding of the Affinda Invoice Review UI

## [1.0.0] - 2022-04-29
### Added
- Add Job description parsing and update invoices output to include rectangle locations and confidence levels

## [0.6.0] - 2022-04-19
### Changed
- Add ability to generate search from a job description identifier

## [0.5.0] - 2022-04-13
### Changed
- Update autorest depedencies

## [0.4.0] - 2022-04-05
### Added
- Add Resume Search functionality

## [0.3.2] - 2022-03-25
### Added
- Add iso 3166 country code to locations

## [0.3.1] - 2021-10-06
### Added
- Add Occupation data to work experience

## [0.3.0] - 2021-10-06
### Added
- Invoices endpoint

### Removed
- Removed 'url' format from url strings in api spec

## [0.2.5] - 2021-09-30
### Added
- Adding LinkedIn to ResumeData

### Changed
- Updated changelog formatting to allow automated updates

## [0.2.4] - 2021-09-08
### Added
- Profession in ResumeData model
- Unified Error models

## [0.2.3] - 2021-09-06
### Fixed
- Link in README, general improvements in formatting
- Fix typo in sample
- Set wait default to be true for requests

## [0.2.1] - 2021-09-05
### Fixed
- Samples files naming convention

## [0.2.0] - 2021-09-05
### Added
- samples files for javascript

### Fixed
- Example used in README

## [0.1.1] - 2021-09-03
### Changed
- Rebuilt for updated API spec with stringified booleans in mulipart/form-data paths

## [0.1.0] - 2021-09-01
* Initial release
