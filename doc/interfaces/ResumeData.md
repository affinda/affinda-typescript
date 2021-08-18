[affinda](../README.md) / [Exports](../modules.md) / ResumeData

# Interface: ResumeData

## Table of contents

### Properties

- [certifications](ResumeData.md#certifications)
- [dateOfBirth](ResumeData.md#dateofbirth)
- [education](ResumeData.md#education)
- [emails](ResumeData.md#emails)
- [headShot](ResumeData.md#headshot)
- [isResumeProbability](ResumeData.md#isresumeprobability)
- [languages](ResumeData.md#languages)
- [location](ResumeData.md#location)
- [name](ResumeData.md#name)
- [objective](ResumeData.md#objective)
- [phoneNumbers](ResumeData.md#phonenumbers)
- [publications](ResumeData.md#publications)
- [referees](ResumeData.md#referees)
- [sections](ResumeData.md#sections)
- [skills](ResumeData.md#skills)
- [skillsDetails](ResumeData.md#skillsdetails)
- [summary](ResumeData.md#summary)
- [totalYearsExperience](ResumeData.md#totalyearsexperience)
- [websites](ResumeData.md#websites)
- [workExperience](ResumeData.md#workexperience)

## Properties

### certifications

• `Optional` **certifications**: `string`[]

#### Defined in

[src/models/index.ts:55](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L55)

___

### dateOfBirth

• `Optional` **dateOfBirth**: `string`

#### Defined in

[src/models/index.ts:43](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L43)

___

### education

• `Optional` **education**: [`ResumeDataEducationItem`](ResumeDataEducationItem.md)[]

#### Defined in

[src/models/index.ts:51](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L51)

___

### emails

• `Optional` **emails**: `string`[]

#### Defined in

[src/models/index.ts:42](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L42)

___

### headShot

• `Optional` **headShot**: ``null`` \| `string` \| `ReadableStream` \| `Blob` \| `ArrayBuffer` \| `ArrayBufferView` \| `FormData`

base64 encoded string

#### Defined in

[src/models/index.ts:50](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L50)

___

### isResumeProbability

• `Optional` **isResumeProbability**: `number`

Probability that the given document is a resume. Values below 30 suggest that the resume is not a resume.

#### Defined in

[src/models/index.ts:60](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L60)

___

### languages

• `Optional` **languages**: `string`[]

#### Defined in

[src/models/index.ts:46](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L46)

___

### location

• `Optional` **location**: [`Location`](Location.md)

#### Defined in

[src/models/index.ts:44](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L44)

___

### name

• `Optional` **name**: [`ResumeDataName`](ResumeDataName.md)

#### Defined in

[src/models/index.ts:39](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L39)

___

### objective

• `Optional` **objective**: `string`

#### Defined in

[src/models/index.ts:45](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L45)

___

### phoneNumbers

• `Optional` **phoneNumbers**: `string`[]

#### Defined in

[src/models/index.ts:40](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L40)

___

### publications

• `Optional` **publications**: `string`[]

#### Defined in

[src/models/index.ts:56](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L56)

___

### referees

• `Optional` **referees**: [`ResumeDataRefereesItem`](ResumeDataRefereesItem.md)[]

#### Defined in

[src/models/index.ts:57](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L57)

___

### sections

• `Optional` **sections**: [`ResumeDataSectionsItem`](ResumeDataSectionsItem.md)[]

#### Defined in

[src/models/index.ts:58](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L58)

___

### skills

• `Optional` **skills**: `string`[]

#### Defined in

[src/models/index.ts:53](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L53)

___

### skillsDetails

• `Optional` **skillsDetails**: [`ResumeDataSkillsDetailsItem`](ResumeDataSkillsDetailsItem.md)[]

#### Defined in

[src/models/index.ts:54](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L54)

___

### summary

• `Optional` **summary**: `string`

#### Defined in

[src/models/index.ts:47](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L47)

___

### totalYearsExperience

• `Optional` **totalYearsExperience**: `number`

#### Defined in

[src/models/index.ts:48](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L48)

___

### websites

• `Optional` **websites**: `string`[]

#### Defined in

[src/models/index.ts:41](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L41)

___

### workExperience

• `Optional` **workExperience**: [`ResumeDataWorkExperienceItem`](ResumeDataWorkExperienceItem.md)[]

#### Defined in

[src/models/index.ts:52](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L52)
