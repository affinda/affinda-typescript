[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / ResumeSearchParameters

# Interface: ResumeSearchParameters

## Properties

### customData?

> `optional` **customData**: [`ResumeSearchParametersCustomData`](ResumeSearchParametersCustomData.md)[]

***

### degrees?

> `optional` **degrees**: `string`[]

***

### degreesRequired?

> `optional` **degreesRequired**: `boolean`

***

### educationWeight?

> `optional` **educationWeight**: `number`

***

### highestDegreeTypes?

> `optional` **highestDegreeTypes**: (`null` \| [`EducationLevel`](../type-aliases/EducationLevel.md))[]

***

### highestDegreeTypesRequired?

> `optional` **highestDegreeTypesRequired**: `boolean`

***

### indices

> **indices**: `string`[]

***

### institutions?

> `optional` **institutions**: `string`[]

***

### institutionsRequired?

> `optional` **institutionsRequired**: `boolean`

***

### isCurrentStudent?

> `optional` **isCurrentStudent**: `boolean`

Search for student canditates

***

### isCurrentStudentRequired?

> `optional` **isCurrentStudentRequired**: `boolean`

***

### isRecentGraduate?

> `optional` **isRecentGraduate**: `boolean`

Search for canditates that graduated less than a year ago

***

### isRecentGraduateRequired?

> `optional` **isRecentGraduateRequired**: `boolean`

***

### jobDescription?

> `optional` **jobDescription**: `string`

A random string that uniquely identify the resource.

***

### jobTitles?

> `optional` **jobTitles**: `string`[]

***

### jobTitlesCurrentOnly?

> `optional` **jobTitlesCurrentOnly**: `boolean`

Search only through the canditate's current job

***

### jobTitlesRequired?

> `optional` **jobTitlesRequired**: `boolean`

***

### jobTitlesWeight?

> `optional` **jobTitlesWeight**: `number`

***

### languages?

> `optional` **languages**: [`ResumeSearchParametersSkill`](ResumeSearchParametersSkill.md)[]

***

### languagesWeight?

> `optional` **languagesWeight**: `number`

***

### locations?

> `optional` **locations**: [`ResumeSearchParametersLocation`](ResumeSearchParametersLocation.md)[]

Search by location name or by coordinates

***

### locationsRequired?

> `optional` **locationsRequired**: `boolean`

***

### locationsWeight?

> `optional` **locationsWeight**: `number`

***

### managementLevel?

> `optional` **managementLevel**: [`ManagementLevel`](../type-aliases/ManagementLevel.md)

***

### managementLevelRequired?

> `optional` **managementLevelRequired**: `boolean`

***

### managementLevelWeight?

> `optional` **managementLevelWeight**: `number`

***

### resume?

> `optional` **resume**: `string`

A random string that uniquely identify the resource.

***

### searchExpression?

> `optional` **searchExpression**: `string`

Search through resumes' raw text

***

### searchExpressionRequired?

> `optional` **searchExpressionRequired**: `boolean`

***

### searchExpressionWeight?

> `optional` **searchExpressionWeight**: `number`

***

### skills?

> `optional` **skills**: [`ResumeSearchParametersSkill`](ResumeSearchParametersSkill.md)[]

***

### skillsWeight?

> `optional` **skillsWeight**: `number`

***

### socCodes?

> `optional` **socCodes**: `number`[]

***

### socCodesRequired?

> `optional` **socCodesRequired**: `boolean`

***

### socCodesWeight?

> `optional` **socCodesWeight**: `number`

***

### yearsExperienceMax?

> `optional` **yearsExperienceMax**: `number`

Maximum years of total work experience

***

### yearsExperienceMin?

> `optional` **yearsExperienceMin**: `number`

Minimum years of total work experience

***

### yearsExperienceRequired?

> `optional` **yearsExperienceRequired**: `boolean`

***

### yearsExperienceWeight?

> `optional` **yearsExperienceWeight**: `number`
