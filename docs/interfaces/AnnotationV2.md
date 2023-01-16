[@affinda/affinda](../README.md) / [Exports](../modules.md) / AnnotationV2

# Interface: AnnotationV2

## Indexable

▪ [property: `string`]: `any`

Describes unknown properties. The value of an unknown property can be of "any" type.

## Table of contents

### Properties

- [classificationConfidence](AnnotationV2.md#classificationconfidence)
- [confidence](AnnotationV2.md#confidence)
- [contentType](AnnotationV2.md#contenttype)
- [dataPoint](AnnotationV2.md#datapoint)
- [id](AnnotationV2.md#id)
- [isAutoVerified](AnnotationV2.md#isautoverified)
- [isClientVerified](AnnotationV2.md#isclientverified)
- [isVerified](AnnotationV2.md#isverified)
- [pageIndex](AnnotationV2.md#pageindex)
- [raw](AnnotationV2.md#raw)
- [rectangle](AnnotationV2.md#rectangle)
- [rectangles](AnnotationV2.md#rectangles)
- [textExtractionConfidence](AnnotationV2.md#textextractionconfidence)

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
