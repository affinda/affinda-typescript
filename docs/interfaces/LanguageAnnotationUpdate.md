[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / LanguageAnnotationUpdate

# Interface: LanguageAnnotationUpdate

## Extends

- [`AnnotationBase`](AnnotationBase.md)

## Indexable

\[`property`: `string`\]: `any`

Describes unknown properties. The value of an unknown property can be of "any" type.

## Properties

### classificationConfidence?

> `optional` **classificationConfidence**: `number`

The model's confidence that the text has been classified correctly

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`classificationConfidence`](AnnotationBase.md#classificationconfidence)

***

### confidence?

> `optional` **confidence**: `number`

The overall confidence that the model's prediction is correct

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`confidence`](AnnotationBase.md#confidence)

***

### contentType?

> `optional` **contentType**: `string`

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`contentType`](AnnotationBase.md#contenttype)

***

### dataPoint?

> `optional` **dataPoint**: `string`

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`dataPoint`](AnnotationBase.md#datapoint)

***

### id?

> `optional` **id**: `number`

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`id`](AnnotationBase.md#id)

***

### isAutoVerified?

> `optional` **isAutoVerified**: `boolean`

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`isAutoVerified`](AnnotationBase.md#isautoverified)

***

### isClientVerified?

> `optional` **isClientVerified**: `boolean`

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`isClientVerified`](AnnotationBase.md#isclientverified)

***

### isVerified?

> `optional` **isVerified**: `boolean`

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`isVerified`](AnnotationBase.md#isverified)

***

### pageIndex?

> `optional` **pageIndex**: `number`

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`pageIndex`](AnnotationBase.md#pageindex)

***

### parsed?

> `readonly` `optional` **parsed**: `string`

NOTE: This property will not be serialized. It can only be populated by the server.

***

### raw?

> `optional` **raw**: `string`

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`raw`](AnnotationBase.md#raw)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`rectangle`](AnnotationBase.md#rectangle)

***

### rectangles?

> `readonly` `optional` **rectangles**: [`Rectangle`](Rectangle.md)[]

NOTE: This property will not be serialized. It can only be populated by the server.

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`rectangles`](AnnotationBase.md#rectangles)

***

### textExtractionConfidence?

> `optional` **textExtractionConfidence**: `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model.

#### Inherited from

[`AnnotationBase`](AnnotationBase.md).[`textExtractionConfidence`](AnnotationBase.md#textextractionconfidence)
