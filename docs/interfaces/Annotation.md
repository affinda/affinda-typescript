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

___

### dataPoint

• `Optional` **dataPoint**: `string`

___

### id

• **id**: `number`

___

### isAutoVerified

• **isAutoVerified**: `boolean`

___

### isClientVerified

• **isClientVerified**: `boolean`

___

### isVerified

• **isVerified**: `boolean`

___

### pageIndex

• **pageIndex**: ``null`` \| `number`

___

### raw

• **raw**: ``null`` \| `string`

___

### rectangle

• **rectangle**: ``null`` \| [`Rectangle`](Rectangle.md)

___

### rectangles

• **rectangles**: ``null`` \| [`Rectangle`](Rectangle.md)[]

___

### textExtractionConfidence

• **textExtractionConfidence**: ``null`` \| `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model.
