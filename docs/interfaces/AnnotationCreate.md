[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / AnnotationCreate

# Interface: AnnotationCreate

## Properties

### dataPoint

> **dataPoint**: `string`

Data point's identifier

***

### document

> **document**: `string`

Unique identifier for the document

***

### isClientVerified?

> `optional` **isClientVerified**: `boolean`

Indicates whether the data has been validated by a human

***

### pageIndex

> **pageIndex**: `null` \| `number`

The page number within the document, starting from 0.

***

### parent?

> `optional` **parent**: `number`

The parent annotation's ID

***

### parsed?

> `optional` **parsed**: `any`

Anything

***

### raw?

> `optional` **raw**: `string`

Raw data extracted from the before any post-processing

***

### rectangles?

> `optional` **rectangles**: [`Rectangle`](Rectangle.md)[]

x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles.

***

### validationResults?

> `optional` **validationResults**: (`null` \| [`ChangedValidationResults`](ChangedValidationResults.md))[]

The validation results created, changed or deleted as a result of creating the annotation.
