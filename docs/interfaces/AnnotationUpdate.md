[@affinda/affinda](../README.md) / [Exports](../modules.md) / AnnotationUpdate

# Interface: AnnotationUpdate

## Table of contents

### Properties

- [dataPoint](AnnotationUpdate.md#datapoint)
- [document](AnnotationUpdate.md#document)
- [isClientVerified](AnnotationUpdate.md#isclientverified)
- [pageIndex](AnnotationUpdate.md#pageindex)
- [parent](AnnotationUpdate.md#parent)
- [parsed](AnnotationUpdate.md#parsed)
- [raw](AnnotationUpdate.md#raw)
- [rectangles](AnnotationUpdate.md#rectangles)

## Properties

### dataPoint

• `Optional` **dataPoint**: `string`

Data point's identifier

___

### document

• `Optional` **document**: `string`

Uniquely identify a document.

___

### isClientVerified

• `Optional` **isClientVerified**: `boolean`

Indicates whether the data has been validated by a human

___

### pageIndex

• `Optional` **pageIndex**: `number`

The page number within the document, starting from 0.

___

### parent

• `Optional` **parent**: `number`

The parent annotation's ID

___

### parsed

• `Optional` **parsed**: [`AnnotationUpdateParsed`](AnnotationUpdateParsed.md)

___

### raw

• `Optional` **raw**: `string`

Raw data extracted from the before any post-processing

___

### rectangles

• `Optional` **rectangles**: [`Rectangle`](Rectangle.md)[]

x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles.
