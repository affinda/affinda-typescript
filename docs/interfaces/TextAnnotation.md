[@affinda/affinda](../README.md) / [Exports](../modules.md) / TextAnnotation

# Interface: TextAnnotation

## Hierarchy

- [`Annotation`](Annotation.md)

  ↳ **`TextAnnotation`**

## Table of contents

### Properties

- [classificationConfidence](TextAnnotation.md#classificationconfidence)
- [confidence](TextAnnotation.md#confidence)
- [contentType](TextAnnotation.md#contenttype)
- [dataPoint](TextAnnotation.md#datapoint)
- [document](TextAnnotation.md#document)
- [id](TextAnnotation.md#id)
- [isAutoVerified](TextAnnotation.md#isautoverified)
- [isClientVerified](TextAnnotation.md#isclientverified)
- [isVerified](TextAnnotation.md#isverified)
- [pageIndex](TextAnnotation.md#pageindex)
- [parent](TextAnnotation.md#parent)
- [parsed](TextAnnotation.md#parsed)
- [raw](TextAnnotation.md#raw)
- [rectangle](TextAnnotation.md#rectangle)
- [rectangles](TextAnnotation.md#rectangles)
- [textExtractionConfidence](TextAnnotation.md#textextractionconfidence)

## Properties

### classificationConfidence

• **classificationConfidence**: ``null`` \| `number`

The model's confidence that the text has been classified correctly

#### Inherited from

[Annotation](Annotation.md).[classificationConfidence](Annotation.md#classificationconfidence)

___

### confidence

• **confidence**: ``null`` \| `number`

The overall confidence that the model's prediction is correct

#### Inherited from

[Annotation](Annotation.md).[confidence](Annotation.md#confidence)

___

### contentType

• **contentType**: `string`

The different data types of annotations

#### Inherited from

[Annotation](Annotation.md).[contentType](Annotation.md#contenttype)

___

### dataPoint

• **dataPoint**: `string`

Data point's identifier

#### Inherited from

[Annotation](Annotation.md).[dataPoint](Annotation.md#datapoint)

___

### document

• **document**: `string`

Unique identifier for the document

#### Inherited from

[Annotation](Annotation.md).[document](Annotation.md#document)

___

### id

• **id**: `number`

Annotation's ID

#### Inherited from

[Annotation](Annotation.md).[id](Annotation.md#id)

___

### isAutoVerified

• **isAutoVerified**: `boolean`

Indicates whether the data has been auto-validated

#### Inherited from

[Annotation](Annotation.md).[isAutoVerified](Annotation.md#isautoverified)

___

### isClientVerified

• **isClientVerified**: `boolean`

Indicates whether the data has been validated by a human

#### Inherited from

[Annotation](Annotation.md).[isClientVerified](Annotation.md#isclientverified)

___

### isVerified

• **isVerified**: `boolean`

Indicates whether the data has been validated, either by a human using our validation tool or through auto-validation rules

#### Inherited from

[Annotation](Annotation.md).[isVerified](Annotation.md#isverified)

___

### pageIndex

• **pageIndex**: ``null`` \| `number`

The page number within the document, starting from 0.

#### Inherited from

[Annotation](Annotation.md).[pageIndex](Annotation.md#pageindex)

___

### parent

• `Optional` **parent**: `number`

The parent annotation's ID

#### Inherited from

[Annotation](Annotation.md).[parent](Annotation.md#parent)

___

### parsed

• `Optional` **parsed**: `string`

___

### raw

• **raw**: ``null`` \| `string`

Raw data extracted from the before any post-processing

#### Inherited from

[Annotation](Annotation.md).[raw](Annotation.md#raw)

___

### rectangle

• **rectangle**: ``null`` \| [`Rectangle`](Rectangle.md)

x/y coordinates for the rectangular bounding box containing the data

#### Inherited from

[Annotation](Annotation.md).[rectangle](Annotation.md#rectangle)

___

### rectangles

• **rectangles**: [`Rectangle`](Rectangle.md)[]

x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles.

#### Inherited from

[Annotation](Annotation.md).[rectangles](Annotation.md#rectangles)

___

### textExtractionConfidence

• **textExtractionConfidence**: ``null`` \| `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model

#### Inherited from

[Annotation](Annotation.md).[textExtractionConfidence](Annotation.md#textextractionconfidence)
