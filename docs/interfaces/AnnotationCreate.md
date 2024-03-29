[@affinda/affinda](../README.md) / [Exports](../modules.md) / AnnotationCreate

# Interface: AnnotationCreate

## Table of contents

### Properties

- [dataPoint](AnnotationCreate.md#datapoint)
- [document](AnnotationCreate.md#document)
- [isClientVerified](AnnotationCreate.md#isclientverified)
- [pageIndex](AnnotationCreate.md#pageindex)
- [parent](AnnotationCreate.md#parent)
- [parsed](AnnotationCreate.md#parsed)
- [raw](AnnotationCreate.md#raw)
- [rectangles](AnnotationCreate.md#rectangles)
- [validationResults](AnnotationCreate.md#validationresults)

## Properties

### dataPoint

• **dataPoint**: `string`

Data point's identifier

___

### document

• **document**: `string`

Unique identifier for the document

___

### isClientVerified

• `Optional` **isClientVerified**: `boolean`

Indicates whether the data has been validated by a human

___

### pageIndex

• **pageIndex**: ``null`` \| `number`

The page number within the document, starting from 0.

___

### parent

• `Optional` **parent**: `number`

The parent annotation's ID

___

### parsed

• `Optional` **parsed**: `any`

Anything

___

### raw

• `Optional` **raw**: `string`

Raw data extracted from the before any post-processing

___

### rectangles

• `Optional` **rectangles**: [`Rectangle`](Rectangle.md)[]

x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles.

___

### validationResults

• `Optional` **validationResults**: (``null`` \| [`ChangedValidationResults`](ChangedValidationResults.md))[]

The validation results created, changed or deleted as a result of creating the annotation.
