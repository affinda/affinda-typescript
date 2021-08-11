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

src/models/index.ts:80

___

### dateOfBirth

• `Optional` **dateOfBirth**: `string`

#### Defined in

src/models/index.ts:68

___

### education

• `Optional` **education**: [`ResumeDataEducationItem`](ResumeDataEducationItem.md)[]

#### Defined in

src/models/index.ts:76

___

### emails

• `Optional` **emails**: `string`[]

#### Defined in

src/models/index.ts:67

___

### headShot

• `Optional` **headShot**: ``null`` \| `string` \| `ReadableStream` \| `Blob` \| `ArrayBuffer` \| `ArrayBufferView` \| `FormData`

base64 encoded string

#### Defined in

src/models/index.ts:75

___

### isResumeProbability

• `Optional` **isResumeProbability**: `number`

Probability that the given document is a resume. Values below 30 suggest that the resume is not a resume.

#### Defined in

src/models/index.ts:85

___

### languages

• `Optional` **languages**: `string`[]

#### Defined in

src/models/index.ts:71

___

### location

• `Optional` **location**: [`Location`](Location.md)

#### Defined in

src/models/index.ts:69

___

### name

• `Optional` **name**: [`ResumeDataName`](ResumeDataName.md)

#### Defined in

src/models/index.ts:64

___

### objective

• `Optional` **objective**: `string`

#### Defined in

src/models/index.ts:70

___

### phoneNumbers

• `Optional` **phoneNumbers**: `string`[]

#### Defined in

src/models/index.ts:65

___

### publications

• `Optional` **publications**: `string`[]

#### Defined in

src/models/index.ts:81

___

### referees

• `Optional` **referees**: [`ResumeDataRefereesItem`](ResumeDataRefereesItem.md)[]

#### Defined in

src/models/index.ts:82

___

### sections

• `Optional` **sections**: [`ResumeDataSectionsItem`](ResumeDataSectionsItem.md)[]

#### Defined in

src/models/index.ts:83

___

### skills

• `Optional` **skills**: `string`[]

#### Defined in

src/models/index.ts:78

___

### skillsDetails

• `Optional` **skillsDetails**: [`ResumeDataSkillsDetailsItem`](ResumeDataSkillsDetailsItem.md)[]

#### Defined in

src/models/index.ts:79

___

### summary

• `Optional` **summary**: `string`

#### Defined in

src/models/index.ts:72

___

### totalYearsExperience

• `Optional` **totalYearsExperience**: `number`

#### Defined in

src/models/index.ts:73

___

### websites

• `Optional` **websites**: `string`[]

#### Defined in

src/models/index.ts:66

___

### workExperience

• `Optional` **workExperience**: [`ResumeDataWorkExperienceItem`](ResumeDataWorkExperienceItem.md)[]

#### Defined in

src/models/index.ts:77
