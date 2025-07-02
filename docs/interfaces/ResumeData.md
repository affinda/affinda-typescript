[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / ResumeData

# Interface: ResumeData

A JSON-encoded string of the `ResumeData` object.

## Indexable

\[`property`: `string`\]: `any`

Describes unknown properties. The value of an unknown property can be of "any" type.

## Properties

### certifications?

> `optional` **certifications**: `string`[]

***

### dateOfBirth?

> `optional` **dateOfBirth**: `string`

***

### education?

> `optional` **education**: [`Education`](Education.md)[]

***

### emails?

> `optional` **emails**: `string`[]

***

### headShot?

> `readonly` `optional` **headShot**: `Uint8Array`

base64 encoded string
NOTE: This property will not be serialized. It can only be populated by the server.

***

### isResumeProbability?

> `readonly` `optional` **isResumeProbability**: `number`

Probability that the given document is a resume. Values below 30 suggest that the document is not a resume.
NOTE: This property will not be serialized. It can only be populated by the server.

***

### languageCodes?

> `readonly` `optional` **languageCodes**: `string`[]

NOTE: This property will not be serialized. It can only be populated by the server.

***

### languages?

> `optional` **languages**: `string`[]

***

### linkedin?

> `readonly` `optional` **linkedin**: `string`

Linkedin account associated with the candidate
NOTE: This property will not be serialized. It can only be populated by the server.

***

### location?

> `optional` **location**: [`Location`](Location.md)

***

### name?

> `optional` **name**: [`ResumeDataName`](ResumeDataName.md)

***

### objective?

> `optional` **objective**: `string`

***

### phoneNumberDetails?

> `optional` **phoneNumberDetails**: [`ResumeDataPhoneNumberDetailsItem`](ResumeDataPhoneNumberDetailsItem.md)[]

***

### phoneNumbers?

> `optional` **phoneNumbers**: `string`[]

***

### profession?

> `readonly` `optional` **profession**: `string`

Prediction of the candidate's profession based on recent work experience
NOTE: This property will not be serialized. It can only be populated by the server.

***

### publications?

> `optional` **publications**: `string`[]

***

### rawText?

> `optional` **rawText**: `string`

All of the raw text of the parsed resume, example is shortened for readability

***

### redactedText?

> `optional` **redactedText**: `string`

Redacted version of the text in the resume, removing PII.

***

### referees?

> `optional` **referees**: [`ResumeDataRefereesItem`](ResumeDataRefereesItem.md)[]

***

### sections?

> `readonly` `optional` **sections**: [`ResumeDataSectionsItem`](ResumeDataSectionsItem.md)[]

NOTE: This property will not be serialized. It can only be populated by the server.

***

### skills?

> `optional` **skills**: [`ResumeDataSkillsItem`](ResumeDataSkillsItem.md)[]

***

### summary?

> `optional` **summary**: `string`

***

### totalYearsExperience?

> `optional` **totalYearsExperience**: `number`

***

### websites?

> `optional` **websites**: `string`[]

***

### workExperience?

> `optional` **workExperience**: [`ResumeDataWorkExperienceItem`](ResumeDataWorkExperienceItem.md)[]
