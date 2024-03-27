[@affinda/affinda](../README.md) / [Exports](../modules.md) / DateAnnotationUpdate

# Interface: DateAnnotationUpdate

## Hierarchy

- [`AnnotationBase`](AnnotationBase.md)

  ↳ **`DateAnnotationUpdate`**

## Table of contents

### Properties

- [classificationConfidence](DateAnnotationUpdate.md#classificationconfidence)
- [confidence](DateAnnotationUpdate.md#confidence)
- [contentType](DateAnnotationUpdate.md#contenttype)
- [dataPoint](DateAnnotationUpdate.md#datapoint)
- [id](DateAnnotationUpdate.md#id)
- [isAutoVerified](DateAnnotationUpdate.md#isautoverified)
- [isClientVerified](DateAnnotationUpdate.md#isclientverified)
- [isVerified](DateAnnotationUpdate.md#isverified)
- [pageIndex](DateAnnotationUpdate.md#pageindex)
- [parsed](DateAnnotationUpdate.md#parsed)
- [raw](DateAnnotationUpdate.md#raw)
- [rectangle](DateAnnotationUpdate.md#rectangle)
- [rectangles](DateAnnotationUpdate.md#rectangles)
- [textExtractionConfidence](DateAnnotationUpdate.md#textextractionconfidence)

## Properties

### classificationConfidence

• `Optional` **classificationConfidence**: `number`

The model's confidence that the text has been classified correctly

#### Inherited from

[AnnotationBase](AnnotationBase.md).[classificationConfidence](AnnotationBase.md#classificationconfidence)

___

### confidence

• `Optional` **confidence**: `number`

The overall confidence that the model's prediction is correct

#### Inherited from

[AnnotationBase](AnnotationBase.md).[confidence](AnnotationBase.md#confidence)

___

### contentType

• `Optional` **contentType**: `string`

#### Inherited from

[AnnotationBase](AnnotationBase.md).[contentType](AnnotationBase.md#contenttype)

___

### dataPoint

• `Optional` **dataPoint**: `string`

#### Inherited from

[AnnotationBase](AnnotationBase.md).[dataPoint](AnnotationBase.md#datapoint)

___

### id

• `Optional` **id**: `number`

#### Inherited from

[AnnotationBase](AnnotationBase.md).[id](AnnotationBase.md#id)

___

### isAutoVerified

• `Optional` **isAutoVerified**: `boolean`

#### Inherited from

[AnnotationBase](AnnotationBase.md).[isAutoVerified](AnnotationBase.md#isautoverified)

___

### isClientVerified

• `Optional` **isClientVerified**: `boolean`

#### Inherited from

[AnnotationBase](AnnotationBase.md).[isClientVerified](AnnotationBase.md#isclientverified)

___

### isVerified

• `Optional` **isVerified**: `boolean`

#### Inherited from

[AnnotationBase](AnnotationBase.md).[isVerified](AnnotationBase.md#isverified)

___

### pageIndex

• `Optional` **pageIndex**: `number`

#### Inherited from

[AnnotationBase](AnnotationBase.md).[pageIndex](AnnotationBase.md#pageindex)

___

### parsed

• `Optional` **parsed**: `Date`

___

### raw

• `Optional` **raw**: `string`

#### Inherited from

[AnnotationBase](AnnotationBase.md).[raw](AnnotationBase.md#raw)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

#### Inherited from

[AnnotationBase](AnnotationBase.md).[rectangle](AnnotationBase.md#rectangle)

___

### rectangles

• `Optional` `Readonly` **rectangles**: [`Rectangle`](Rectangle.md)[]

NOTE: This property will not be serialized. It can only be populated by the server.

#### Inherited from

[AnnotationBase](AnnotationBase.md).[rectangles](AnnotationBase.md#rectangles)

___

### textExtractionConfidence

• `Optional` **textExtractionConfidence**: `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model.

#### Inherited from

[AnnotationBase](AnnotationBase.md).[textExtractionConfidence](AnnotationBase.md#textextractionconfidence)
