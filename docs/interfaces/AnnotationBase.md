[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / AnnotationBase

# Interface: AnnotationBase

## Extended by

- [`JobTitleAnnotationUpdate`](JobTitleAnnotationUpdate.md)
- [`TextAnnotationUpdate`](TextAnnotationUpdate.md)
- [`DateAnnotationUpdate`](DateAnnotationUpdate.md)
- [`LanguageAnnotationUpdate`](LanguageAnnotationUpdate.md)
- [`SkillAnnotationUpdate`](SkillAnnotationUpdate.md)
- [`ExpectedRemunerationAnnotationUpdate`](ExpectedRemunerationAnnotationUpdate.md)
- [`LocationAnnotationUpdate`](LocationAnnotationUpdate.md)
- [`YearsExperienceAnnotationUpdate`](YearsExperienceAnnotationUpdate.md)

## Indexable

\[`property`: `string`\]: `any`

Describes unknown properties. The value of an unknown property can be of "any" type.

## Properties

### classificationConfidence?

> `optional` **classificationConfidence**: `number`

The model's confidence that the text has been classified correctly

***

### confidence?

> `optional` **confidence**: `number`

The overall confidence that the model's prediction is correct

***

### contentType?

> `optional` **contentType**: `string`

***

### dataPoint?

> `optional` **dataPoint**: `string`

***

### id?

> `optional` **id**: `number`

***

### isAutoVerified?

> `optional` **isAutoVerified**: `boolean`

***

### isClientVerified?

> `optional` **isClientVerified**: `boolean`

***

### isVerified?

> `optional` **isVerified**: `boolean`

***

### pageIndex?

> `optional` **pageIndex**: `number`

***

### raw?

> `optional` **raw**: `string`

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

***

### rectangles?

> `readonly` `optional` **rectangles**: [`Rectangle`](Rectangle.md)[]

NOTE: This property will not be serialized. It can only be populated by the server.

***

### textExtractionConfidence?

> `optional` **textExtractionConfidence**: `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model.
