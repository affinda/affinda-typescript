[@affinda/affinda](../README.md) / [Exports](../modules.md) / AnnotationV2Base

# Interface: AnnotationV2Base

## Indexable

▪ [property: `string`]: `any`

## Table of contents

### Properties

- [classificationConfidence](AnnotationV2Base.md#classificationconfidence)
- [confidence](AnnotationV2Base.md#confidence)
- [contentType](AnnotationV2Base.md#contenttype)
- [dataPoint](AnnotationV2Base.md#datapoint)
- [id](AnnotationV2Base.md#id)
- [isAutoVerified](AnnotationV2Base.md#isautoverified)
- [isClientVerified](AnnotationV2Base.md#isclientverified)
- [isVerified](AnnotationV2Base.md#isverified)
- [pageIndex](AnnotationV2Base.md#pageindex)
- [raw](AnnotationV2Base.md#raw)
- [rectangle](AnnotationV2Base.md#rectangle)
- [rectangles](AnnotationV2Base.md#rectangles)
- [textExtractionConfidence](AnnotationV2Base.md#textextractionconfidence)

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
