[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / JobDescriptionData

# Interface: JobDescriptionData

A JSON-encoded string of the `JobDescriptionData` object.

## Indexable

\[`property`: `string`\]: `any`

Describes unknown properties. The value of an unknown property can be of "any" type.

## Properties

### certifications?

> `optional` **certifications**: (`null` \| [`TextAnnotation`](TextAnnotation.md))[]

***

### contactEmail?

> `optional` **contactEmail**: [`TextAnnotation`](TextAnnotation.md)

***

### contactName?

> `optional` **contactName**: [`TextAnnotation`](TextAnnotation.md)

***

### contactPhone?

> `optional` **contactPhone**: [`TextAnnotation`](TextAnnotation.md)

***

### educationAccreditation?

> `optional` **educationAccreditation**: [`TextAnnotation`](TextAnnotation.md)

***

### educationLevel?

> `optional` **educationLevel**: [`TextAnnotation`](TextAnnotation.md)

***

### endDate?

> `optional` **endDate**: [`DateAnnotation`](DateAnnotation.md)

***

### expectedRemuneration?

> `optional` **expectedRemuneration**: [`ExpectedRemunerationAnnotation`](ExpectedRemunerationAnnotation.md)

***

### jobTitle?

> `optional` **jobTitle**: [`JobTitleAnnotation`](JobTitleAnnotation.md)

***

### jobType?

> `optional` **jobType**: [`TextAnnotation`](TextAnnotation.md)

***

### languages?

> `optional` **languages**: (`null` \| [`LanguageAnnotation`](LanguageAnnotation.md))[]

***

### location?

> `optional` **location**: [`LocationAnnotation`](LocationAnnotation.md)

***

### organizationName?

> `optional` **organizationName**: [`TextAnnotation`](TextAnnotation.md)

***

### organizationWebsite?

> `optional` **organizationWebsite**: [`TextAnnotation`](TextAnnotation.md)

***

### rawText?

> `optional` **rawText**: `string`

All of the raw text of the parsed job description, example is shortened for readability

***

### skills?

> `optional` **skills**: (`null` \| [`SkillAnnotation`](SkillAnnotation.md))[]

***

### startDate?

> `optional` **startDate**: [`DateAnnotation`](DateAnnotation.md)

***

### yearsExperience?

> `optional` **yearsExperience**: [`YearsExperienceAnnotation`](YearsExperienceAnnotation.md)
