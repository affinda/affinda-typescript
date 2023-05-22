[@affinda/affinda](../README.md) / [Exports](../modules.md) / Collection

# Interface: Collection

## Table of contents

### Properties

- [autoValidationThreshold](Collection.md#autovalidationthreshold)
- [confirmedDocsCount](Collection.md#confirmeddocscount)
- [dateFormatFromDocument](Collection.md#dateformatfromdocument)
- [dateFormatPreference](Collection.md#dateformatpreference)
- [extractor](Collection.md#extractor)
- [extractorConfig](Collection.md#extractorconfig)
- [fields](Collection.md#fields)
- [fieldsConfigured](Collection.md#fieldsconfigured)
- [fieldsLayout](Collection.md#fieldslayout)
- [identifier](Collection.md#identifier)
- [ingestEmail](Collection.md#ingestemail)
- [name](Collection.md#name)
- [unvalidatedDocsCount](Collection.md#unvalidateddocscount)
- [workspace](Collection.md#workspace)

## Properties

### autoValidationThreshold

• `Optional` **autoValidationThreshold**: `number`

___

### confirmedDocsCount

• `Optional` **confirmedDocsCount**: `number`

Number of validated documents in the collection.

___

### dateFormatFromDocument

• `Optional` **dateFormatFromDocument**: `boolean`

Predict the date format from any dates in the document that is not ambiguous.

___

### dateFormatPreference

• `Optional` **dateFormatPreference**: `string`

___

### extractor

• `Optional` **extractor**: [`Extractor`](Extractor.md)

___

### extractorConfig

• `Optional` **extractorConfig**: [`ExtractorConfig`](ExtractorConfig.md)

Extra configurations specific to an extractor.

___

### fields

• `Optional` **fields**: [`FieldGroup`](FieldGroup.md)[]

___

### fieldsConfigured

• `Optional` **fieldsConfigured**: `boolean`

___

### fieldsLayout

• `Optional` **fieldsLayout**: [`FieldsLayout`](FieldsLayout.md)

___

### identifier

• **identifier**: `string`

Uniquely identify a collection.

___

### ingestEmail

• `Optional` **ingestEmail**: `string`

When you send email to this address, any document attached in the body will be uploaded to this collection.

___

### name

• `Optional` **name**: `string`

___

### unvalidatedDocsCount

• `Optional` **unvalidatedDocsCount**: `number`

Number of unvalidated documents in the collection.

___

### workspace

• `Optional` **workspace**: [`CollectionWorkspace`](CollectionWorkspace.md)
