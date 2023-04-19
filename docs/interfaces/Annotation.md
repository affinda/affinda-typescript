[@affinda/affinda](../README.md) / [Exports](../modules.md) / Annotation

# Interface: Annotation

## Indexable

▪ [property: `string`]: `any`

## Table of contents

### Properties

- [classificationConfidence](Annotation.md#classificationconfidence)
- [confidence](Annotation.md#confidence)
- [contentType](Annotation.md#contenttype)
- [dataPoint](Annotation.md#datapoint)
- [document](Annotation.md#document)
- [id](Annotation.md#id)
- [isAutoVerified](Annotation.md#isautoverified)
- [isClientVerified](Annotation.md#isclientverified)
- [isVerified](Annotation.md#isverified)
- [pageIndex](Annotation.md#pageindex)
- [raw](Annotation.md#raw)
- [rectangle](Annotation.md#rectangle)
- [rectangles](Annotation.md#rectangles)
- [textExtractionConfidence](Annotation.md#textextractionconfidence)

## Properties

### classificationConfidence

• **classificationConfidence**: ``null`` \| `number`

The model's confidence that the text has been classified correctly

___

### confidence

• **confidence**: ``null`` \| `number`

The overall confidence that the model's prediction is correct

___

### contentType

• **contentType**: `string`

The different data types of annotations

___

### dataPoint

• **dataPoint**: `string`

Data point's identifier

___

### document

• `Optional` **document**: `string`

Uniquely identify a document.

___

### id

• **id**: `number`

Annotation's ID

___

### isAutoVerified

• **isAutoVerified**: `boolean`

Indicates whether the data has been auto-validated

___

### isClientVerified

• **isClientVerified**: `boolean`

Indicates whether the data has been validated by a human

___

### isVerified

• **isVerified**: `boolean`

Indicates whether the data has been validated, either by a human using our validation tool or through auto-validation rules

___

### pageIndex

• **pageIndex**: ``null`` \| `number`

The page number within the document, starting from 0.

___

### raw

• **raw**: ``null`` \| `string`

Raw data extracted from the before any post-processing

___

### rectangle

• **rectangle**: ``null`` \| [`Rectangle`](Rectangle.md)

x/y coordinates for the rectangular bounding box containing the data

___

### rectangles

• **rectangles**: ``null`` \| [`Rectangle`](Rectangle.md)[]

x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles.

___

### textExtractionConfidence

• **textExtractionConfidence**: ``null`` \| `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model
