[@affinda/affinda](../README.md) / [Exports](../modules.md) / InvoiceDataPaymentAmountPaid

# Interface: InvoiceDataPaymentAmountPaid

## Hierarchy

- [`TextAnnotation`](TextAnnotation.md)

- [`Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1`](Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1.md)

  ↳ **`InvoiceDataPaymentAmountPaid`**

## Table of contents

### Properties

- [classificationConfidence](InvoiceDataPaymentAmountPaid.md#classificationconfidence)
- [confidence](InvoiceDataPaymentAmountPaid.md#confidence)
- [contentType](InvoiceDataPaymentAmountPaid.md#contenttype)
- [dataPoint](InvoiceDataPaymentAmountPaid.md#datapoint)
- [document](InvoiceDataPaymentAmountPaid.md#document)
- [id](InvoiceDataPaymentAmountPaid.md#id)
- [isAutoVerified](InvoiceDataPaymentAmountPaid.md#isautoverified)
- [isClientVerified](InvoiceDataPaymentAmountPaid.md#isclientverified)
- [isVerified](InvoiceDataPaymentAmountPaid.md#isverified)
- [pageIndex](InvoiceDataPaymentAmountPaid.md#pageindex)
- [parent](InvoiceDataPaymentAmountPaid.md#parent)
- [parsed](InvoiceDataPaymentAmountPaid.md#parsed)
- [raw](InvoiceDataPaymentAmountPaid.md#raw)
- [rectangle](InvoiceDataPaymentAmountPaid.md#rectangle)
- [rectangles](InvoiceDataPaymentAmountPaid.md#rectangles)
- [textExtractionConfidence](InvoiceDataPaymentAmountPaid.md#textextractionconfidence)

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

[Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1](Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1.md).[parsed](Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1.md#parsed)

___

### raw

• **raw**: ``null`` \| `string`

Raw data extracted from the before any post-processing

#### Inherited from

[Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1](Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1.md).[raw](Components1Vvtu5NSchemasInvoicedataPropertiesPaymentamountpaidAllof1.md#raw)

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
