# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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
