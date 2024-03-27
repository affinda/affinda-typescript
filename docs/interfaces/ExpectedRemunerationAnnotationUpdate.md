[@affinda/affinda](../README.md) / [Exports](../modules.md) / ExpectedRemunerationAnnotationUpdate

# Interface: ExpectedRemunerationAnnotationUpdate

## Hierarchy

- [`AnnotationBase`](AnnotationBase.md)

  ↳ **`ExpectedRemunerationAnnotationUpdate`**

## Table of contents

### Properties

- [classificationConfidence](ExpectedRemunerationAnnotationUpdate.md#classificationconfidence)
- [confidence](ExpectedRemunerationAnnotationUpdate.md#confidence)
- [contentType](ExpectedRemunerationAnnotationUpdate.md#contenttype)
- [dataPoint](ExpectedRemunerationAnnotationUpdate.md#datapoint)
- [id](ExpectedRemunerationAnnotationUpdate.md#id)
- [isAutoVerified](ExpectedRemunerationAnnotationUpdate.md#isautoverified)
- [isClientVerified](ExpectedRemunerationAnnotationUpdate.md#isclientverified)
- [isVerified](ExpectedRemunerationAnnotationUpdate.md#isverified)
- [pageIndex](ExpectedRemunerationAnnotationUpdate.md#pageindex)
- [parsed](ExpectedRemunerationAnnotationUpdate.md#parsed)
- [raw](ExpectedRemunerationAnnotationUpdate.md#raw)
- [rectangle](ExpectedRemunerationAnnotationUpdate.md#rectangle)
- [rectangles](ExpectedRemunerationAnnotationUpdate.md#rectangles)
- [textExtractionConfidence](ExpectedRemunerationAnnotationUpdate.md#textextractionconfidence)

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

• `Optional` **parsed**: [`ExpectedRemunerationAnnotationUpdateParsed`](ExpectedRemunerationAnnotationUpdateParsed.md)

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
