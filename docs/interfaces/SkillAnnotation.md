[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / SkillAnnotation

# Interface: SkillAnnotation

## Extends

- [`Annotation`](Annotation.md)

## Indexable

\[`property`: `string`\]: `any`

Describes unknown properties. The value of an unknown property can be of "any" type.

## Properties

### classificationConfidence

> **classificationConfidence**: `null` \| `number`

The model's confidence that the text has been classified correctly

#### Inherited from

[`Annotation`](Annotation.md).[`classificationConfidence`](Annotation.md#classificationconfidence)

***

### confidence

> **confidence**: `null` \| `number`

The overall confidence that the model's prediction is correct

#### Inherited from

[`Annotation`](Annotation.md).[`confidence`](Annotation.md#confidence)

***

### contentType

> **contentType**: `string`

The different data types of annotations

#### Inherited from

[`Annotation`](Annotation.md).[`contentType`](Annotation.md#contenttype)

***

### dataPoint?

> `optional` **dataPoint**: `string`

Data point's identifier

#### Inherited from

[`Annotation`](Annotation.md).[`dataPoint`](Annotation.md#datapoint)

***

### document

> **document**: `string`

Unique identifier for the document

#### Inherited from

[`Annotation`](Annotation.md).[`document`](Annotation.md#document)

***

### field?

> `optional` **field**: `string`

Field's identifier

#### Inherited from

[`Annotation`](Annotation.md).[`field`](Annotation.md#field)

***

### id

> **id**: `number`

Annotation's ID

#### Inherited from

[`Annotation`](Annotation.md).[`id`](Annotation.md#id)

***

### isAutoVerified

> **isAutoVerified**: `boolean`

Indicates whether the data has been auto-validated

#### Inherited from

[`Annotation`](Annotation.md).[`isAutoVerified`](Annotation.md#isautoverified)

***

### isClientVerified

> **isClientVerified**: `boolean`

Indicates whether the data has been validated by a human

#### Inherited from

[`Annotation`](Annotation.md).[`isClientVerified`](Annotation.md#isclientverified)

***

### isVerified

> **isVerified**: `boolean`

Indicates whether the data has been validated, either by a human using our validation tool or through auto-validation rules

#### Inherited from

[`Annotation`](Annotation.md).[`isVerified`](Annotation.md#isverified)

***

### pageIndex

> **pageIndex**: `null` \| `number`

The page number within the document, starting from 0.

#### Inherited from

[`Annotation`](Annotation.md).[`pageIndex`](Annotation.md#pageindex)

***

### parent?

> `optional` **parent**: `number`

The parent annotation's ID

#### Inherited from

[`Annotation`](Annotation.md).[`parent`](Annotation.md#parent)

***

### parsed?

> `readonly` `optional` **parsed**: `string`

NOTE: This property will not be serialized. It can only be populated by the server.

***

### raw

> **raw**: `null` \| `string`

Raw data extracted from the before any post-processing

#### Inherited from

[`Annotation`](Annotation.md).[`raw`](Annotation.md#raw)

***

### rectangle

> **rectangle**: `null` \| [`Rectangle`](Rectangle.md)

x/y coordinates for the rectangular bounding box containing the data

#### Inherited from

[`Annotation`](Annotation.md).[`rectangle`](Annotation.md#rectangle)

***

### rectangles

> **rectangles**: [`Rectangle`](Rectangle.md)[]

x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles.

#### Inherited from

[`Annotation`](Annotation.md).[`rectangles`](Annotation.md#rectangles)

***

### textExtractionConfidence

> **textExtractionConfidence**: `null` \| `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model

#### Inherited from

[`Annotation`](Annotation.md).[`textExtractionConfidence`](Annotation.md#textextractionconfidence)
