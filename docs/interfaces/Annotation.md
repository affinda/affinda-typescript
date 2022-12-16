[@affinda/affinda](../README.md) / [Exports](../modules.md) / Annotation

# Interface: Annotation

## Indexable

▪ [property: `string`]: `any`

Describes unknown properties. The value of an unknown property can be of "any" type.

## Table of contents

### Properties

- [classification](Annotation.md#classification)
- [classificationConfidence](Annotation.md#classificationconfidence)
- [confidence](Annotation.md#confidence)
- [id](Annotation.md#id)
- [isAutoVerified](Annotation.md#isautoverified)
- [isClientVerified](Annotation.md#isclientverified)
- [isVerified](Annotation.md#isverified)
- [pageIndex](Annotation.md#pageindex)
- [raw](Annotation.md#raw)
- [rectangle](Annotation.md#rectangle)
- [textExtractionConfidence](Annotation.md#textextractionconfidence)

## Properties

### classification

• **classification**: `string`

___

### classificationConfidence

• **classificationConfidence**: ``null`` \| `number`

The model's confidence that the text has been classified correctly

___

### confidence

• **confidence**: ``null`` \| `number`

The overall confidence that the model's prediction is correct

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

### textExtractionConfidence

• **textExtractionConfidence**: ``null`` \| `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model.
