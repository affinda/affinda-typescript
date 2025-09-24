[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / Annotation

# Interface: Annotation

## Extended by

- [`AnnotationWithValidationResults`](AnnotationWithValidationResults.md)
- [`JobTitleAnnotation`](JobTitleAnnotation.md)
- [`TextAnnotation`](TextAnnotation.md)
- [`DateAnnotation`](DateAnnotation.md)
- [`LanguageAnnotation`](LanguageAnnotation.md)
- [`SkillAnnotation`](SkillAnnotation.md)
- [`ExpectedRemunerationAnnotation`](ExpectedRemunerationAnnotation.md)
- [`LocationAnnotation`](LocationAnnotation.md)
- [`YearsExperienceAnnotation`](YearsExperienceAnnotation.md)
- [`FloatAnnotation`](FloatAnnotation.md)
- [`RowAnnotation`](RowAnnotation.md)
- [`TableAnnotation`](TableAnnotation.md)
- [`RowBetaAnnotation`](RowBetaAnnotation.md)
- [`TableBetaAnnotation`](TableBetaAnnotation.md)
- [`CurrencyCodeAnnotation`](CurrencyCodeAnnotation.md)
- [`DateRangeAnnotation`](DateRangeAnnotation.md)
- [`PhoneNumberAnnotation`](PhoneNumberAnnotation.md)
- [`UrlAnnotation`](UrlAnnotation.md)

## Indexable

\[`property`: `string`\]: `any`

Describes unknown properties. The value of an unknown property can be of "any" type.

## Properties

### classificationConfidence

> **classificationConfidence**: `null` \| `number`

The model's confidence that the text has been classified correctly

***

### confidence

> **confidence**: `null` \| `number`

The overall confidence that the model's prediction is correct

***

### contentType

> **contentType**: `string`

The different data types of annotations

***

### dataPoint?

> `optional` **dataPoint**: `string`

Data point's identifier

***

### document

> **document**: `string`

Unique identifier for the document

***

### field?

> `optional` **field**: `string`

Field's identifier

***

### id

> **id**: `number`

Annotation's ID

***

### isAutoVerified

> **isAutoVerified**: `boolean`

Indicates whether the data has been auto-validated

***

### isClientVerified

> **isClientVerified**: `boolean`

Indicates whether the data has been validated by a human

***

### isVerified

> **isVerified**: `boolean`

Indicates whether the data has been validated, either by a human using our validation tool or through auto-validation rules

***

### pageIndex

> **pageIndex**: `null` \| `number`

The page number within the document, starting from 0.

***

### parent?

> `optional` **parent**: `number`

The parent annotation's ID

***

### raw

> **raw**: `null` \| `string`

Raw data extracted from the before any post-processing

***

### rectangle

> **rectangle**: `null` \| [`Rectangle`](Rectangle.md)

x/y coordinates for the rectangular bounding box containing the data

***

### rectangles

> **rectangles**: [`Rectangle`](Rectangle.md)[]

x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles.

***

### textExtractionConfidence

> **textExtractionConfidence**: `null` \| `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model
