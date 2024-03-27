[@affinda/affinda](../README.md) / [Exports](../modules.md) / InvoiceDataPaymentAmountTax

# Interface: InvoiceDataPaymentAmountTax

## Hierarchy

- [`TextAnnotation`](TextAnnotation.md)

- [`Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1`](Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1.md)

  ↳ **`InvoiceDataPaymentAmountTax`**

## Table of contents

### Properties

- [classificationConfidence](InvoiceDataPaymentAmountTax.md#classificationconfidence)
- [confidence](InvoiceDataPaymentAmountTax.md#confidence)
- [contentType](InvoiceDataPaymentAmountTax.md#contenttype)
- [dataPoint](InvoiceDataPaymentAmountTax.md#datapoint)
- [document](InvoiceDataPaymentAmountTax.md#document)
- [id](InvoiceDataPaymentAmountTax.md#id)
- [isAutoVerified](InvoiceDataPaymentAmountTax.md#isautoverified)
- [isClientVerified](InvoiceDataPaymentAmountTax.md#isclientverified)
- [isVerified](InvoiceDataPaymentAmountTax.md#isverified)
- [pageIndex](InvoiceDataPaymentAmountTax.md#pageindex)
- [parent](InvoiceDataPaymentAmountTax.md#parent)
- [parsed](InvoiceDataPaymentAmountTax.md#parsed)
- [raw](InvoiceDataPaymentAmountTax.md#raw)
- [rectangle](InvoiceDataPaymentAmountTax.md#rectangle)
- [rectangles](InvoiceDataPaymentAmountTax.md#rectangles)
- [textExtractionConfidence](InvoiceDataPaymentAmountTax.md#textextractionconfidence)

## Properties

### classificationConfidence

• **classificationConfidence**: ``null`` \| `number`

The model's confidence that the text has been classified correctly

#### Inherited from

[TextAnnotation](TextAnnotation.md).[classificationConfidence](TextAnnotation.md#classificationconfidence)

___

### confidence

• **confidence**: ``null`` \| `number`

The overall confidence that the model's prediction is correct

#### Inherited from

[TextAnnotation](TextAnnotation.md).[confidence](TextAnnotation.md#confidence)

___

### contentType

• **contentType**: `string`

The different data types of annotations

#### Inherited from

[TextAnnotation](TextAnnotation.md).[contentType](TextAnnotation.md#contenttype)

___

### dataPoint

• **dataPoint**: `string`

Data point's identifier

#### Inherited from

[TextAnnotation](TextAnnotation.md).[dataPoint](TextAnnotation.md#datapoint)

___

### document

• **document**: `string`

Unique identifier for the document

#### Inherited from

[TextAnnotation](TextAnnotation.md).[document](TextAnnotation.md#document)

___

### id

• **id**: `number`

Annotation's ID

#### Inherited from

[TextAnnotation](TextAnnotation.md).[id](TextAnnotation.md#id)

___

### isAutoVerified

• **isAutoVerified**: `boolean`

Indicates whether the data has been auto-validated

#### Inherited from

[TextAnnotation](TextAnnotation.md).[isAutoVerified](TextAnnotation.md#isautoverified)

___

### isClientVerified

• **isClientVerified**: `boolean`

Indicates whether the data has been validated by a human

#### Inherited from

[TextAnnotation](TextAnnotation.md).[isClientVerified](TextAnnotation.md#isclientverified)

___

### isVerified

• **isVerified**: `boolean`

Indicates whether the data has been validated, either by a human using our validation tool or through auto-validation rules

#### Inherited from

[TextAnnotation](TextAnnotation.md).[isVerified](TextAnnotation.md#isverified)

___

### pageIndex

• **pageIndex**: ``null`` \| `number`

The page number within the document, starting from 0.

#### Inherited from

[TextAnnotation](TextAnnotation.md).[pageIndex](TextAnnotation.md#pageindex)

___

### parent

• `Optional` **parent**: `number`

The parent annotation's ID

#### Inherited from

[TextAnnotation](TextAnnotation.md).[parent](TextAnnotation.md#parent)

___

### parsed

• `Optional` **parsed**: `string`

#### Inherited from

[Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1](Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1.md).[parsed](Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1.md#parsed)

___

### raw

• **raw**: ``null`` \| `string`

Raw data extracted from the before any post-processing

#### Inherited from

[Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1](Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1.md).[raw](Components6Zm20BSchemasInvoicedataPropertiesPaymentamounttaxAllof1.md#raw)

___

### rectangle

• **rectangle**: ``null`` \| [`Rectangle`](Rectangle.md)

x/y coordinates for the rectangular bounding box containing the data

#### Inherited from

[TextAnnotation](TextAnnotation.md).[rectangle](TextAnnotation.md#rectangle)

___

### rectangles

• **rectangles**: [`Rectangle`](Rectangle.md)[]

x/y coordinates for the rectangles containing the data. An annotation can be contained within multiple rectangles.

#### Inherited from

[TextAnnotation](TextAnnotation.md).[rectangles](TextAnnotation.md#rectangles)

___

### textExtractionConfidence

• **textExtractionConfidence**: ``null`` \| `number`

If the document was submitted as an image, this is the confidence that the text in the image has been correctly read by the model

#### Inherited from

[TextAnnotation](TextAnnotation.md).[textExtractionConfidence](TextAnnotation.md#textextractionconfidence)
