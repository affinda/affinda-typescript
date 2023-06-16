[@affinda/affinda](../README.md) / [Exports](../modules.md) / AnnotationBase

# Interface: AnnotationBase

## Indexable

▪ [property: `string`]: `any`

## Table of contents

### Properties

- [classificationConfidence](AnnotationBase.md#classificationconfidence)
- [confidence](AnnotationBase.md#confidence)
- [contentType](AnnotationBase.md#contenttype)
- [dataPoint](AnnotationBase.md#datapoint)
- [id](AnnotationBase.md#id)
- [isAutoVerified](AnnotationBase.md#isautoverified)
- [isClientVerified](AnnotationBase.md#isclientverified)
- [isVerified](AnnotationBase.md#isverified)
- [pageIndex](AnnotationBase.md#pageindex)
- [raw](AnnotationBase.md#raw)
- [rectangle](AnnotationBase.md#rectangle)
- [rectangles](AnnotationBase.md#rectangles)
- [textExtractionConfidence](AnnotationBase.md#textextractionconfidence)

## Properties

### classificationConfidence

• `Optional` **classificationConfidence**: `number`

The model's confidence that the text has been classified correctly

___

### confidence

• `Optional` **confidence**: `number`

The overall confidence that the model's prediction is correct

___

### contentType

• `Optional` **contentType**: `string`

___

### dataPoint

• `Optional` **dataPoint**: `string`

___

### id

• `Optional` **id**: `number`

___

### isAutoVerified

• `Optional` **isAutoVerified**: `boolean`

___

### isClientVerified

• `Optional` **isClientVerified**: `boolean`

___

### isVerified

• `Optional` **isVerified**: `boolean`

___

### pageIndex

• `Optional` **pageIndex**: `number`

___

### raw

• `Optional` **raw**: `string`

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

___

### rectangles

• `Optional` `Readonly` **rectangles**: [`Rectangle`](Rectangle.md)[]

NOTE: This property will not be serialized. It can only be populated by the server.

___

### textExtractionConfidence

• `Optional` **textExtractionConfidence**: `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model.
