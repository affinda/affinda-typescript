[@affinda/affinda](../README.md) / [Exports](../modules.md) / ResumeData

# Interface: ResumeData

A JSON-encoded string of the `ResumeData` object.

## Table of contents

### Properties

- [certifications](ResumeData.md#certifications)
- [dateOfBirth](ResumeData.md#dateofbirth)
- [education](ResumeData.md#education)
- [emails](ResumeData.md#emails)
- [headShot](ResumeData.md#headshot)
- [isResumeProbability](ResumeData.md#isresumeprobability)
- [languageCodes](ResumeData.md#languagecodes)
- [languages](ResumeData.md#languages)
- [linkedin](ResumeData.md#linkedin)
- [location](ResumeData.md#location)
- [name](ResumeData.md#name)
- [objective](ResumeData.md#objective)
- [phoneNumbers](ResumeData.md#phonenumbers)
- [profession](ResumeData.md#profession)
- [publications](ResumeData.md#publications)
- [rawText](ResumeData.md#rawtext)
- [referees](ResumeData.md#referees)
- [sections](ResumeData.md#sections)
- [skills](ResumeData.md#skills)
- [summary](ResumeData.md#summary)
- [totalYearsExperience](ResumeData.md#totalyearsexperience)
- [websites](ResumeData.md#websites)
- [workExperience](ResumeData.md#workexperience)

## Properties

### certifications

• `Optional` **certifications**: `string`[]

___

### dateOfBirth

• `Optional` **dateOfBirth**: `string`

___

### education

• `Optional` **education**: [`ResumeDataEducationItem`](ResumeDataEducationItem.md)[]

___

### emails

• `Optional` **emails**: `string`[]

___

### headShot

• `Optional` `Readonly` **headShot**: `Uint8Array`

base64 encoded string
NOTE: This property will not be serialized. It can only be populated by the server.

___

### isResumeProbability

• `Optional` `Readonly` **isResumeProbability**: `number`

Probability that the given document is a resume. Values below 30 suggest that the document is not a resume.
NOTE: This property will not be serialized. It can only be populated by the server.

___

### languageCodes

• `Optional` `Readonly` **languageCodes**: `string`[]

NOTE: This property will not be serialized. It can only be populated by the server.

___

### languages

• `Optional` `Readonly` **languages**: `string`[]

NOTE: This property will not be serialized. It can only be populated by the server.

___

### linkedin

• `Optional` `Readonly` **linkedin**: `string`

Linkedin account associated with the candidate
NOTE: This property will not be serialized. It can only be populated by the server.

___

### location

• `Optional` **location**: [`Location`](Location.md)

___

### name

• `Optional` **name**: [`ResumeDataName`](ResumeDataName.md)

___

### objective

• `Optional` **objective**: `string`

___

### phoneNumbers

• `Optional` **phoneNumbers**: `string`[]

___

### profession

• `Optional` `Readonly` **profession**: `string`

Prediction of the candidate's profession based on recent work experience
NOTE: This property will not be serialized. It can only be populated by the server.

___

### publications

• `Optional` **publications**: `string`[]

___

### rawText

• `Optional` **rawText**: `string`

All of the raw text of the parsed resume, example is shortened for readiblity

___

### referees

• `Optional` **referees**: [`ResumeDataRefereesItem`](ResumeDataRefereesItem.md)[]

___

### sections

• `Optional` `Readonly` **sections**: [`ResumeDataSectionsItem`](ResumeDataSectionsItem.md)[]

NOTE: This property will not be serialized. It can only be populated by the server.

___

### skills

• `Optional` **skills**: [`ResumeDataSkillsItem`](ResumeDataSkillsItem.md)[]

___

### summary

• `Optional` **summary**: `string`

___

### totalYearsExperience

• `Optional` **totalYearsExperience**: `number`

___

### websites

• `Optional` **websites**: `string`[]

___

### workExperience

• `Optional` **workExperience**: [`ResumeDataWorkExperienceItem`](ResumeDataWorkExperienceItem.md)[]
