[@affinda/affinda](../README.md) / [Exports](../modules.md) / Collection

# Interface: Collection

## Table of contents

### Properties

- [allowOpenai](Collection.md#allowopenai)
- [autoRefreshValidationResults](Collection.md#autorefreshvalidationresults)
- [autoValidateIfValidationRulesPass](Collection.md#autovalidateifvalidationrulespass)
- [autoValidationThreshold](Collection.md#autovalidationthreshold)
- [confirmedDocsCount](Collection.md#confirmeddocscount)
- [dateFormatFromDocument](Collection.md#dateformatfromdocument)
- [dateFormatPreference](Collection.md#dateformatpreference)
- [disableConfirmationIfValidationRulesFail](Collection.md#disableconfirmationifvalidationrulesfail)
- [enableAutoValidationThreshold](Collection.md#enableautovalidationthreshold)
- [extractor](Collection.md#extractor)
- [extractorConfig](Collection.md#extractorconfig)
- [fields](Collection.md#fields)
- [fieldsConfigured](Collection.md#fieldsconfigured)
- [fieldsLayout](Collection.md#fieldslayout)
- [identifier](Collection.md#identifier)
- [ingestEmail](Collection.md#ingestemail)
- [name](Collection.md#name)
- [tailoredExtractorRequested](Collection.md#tailoredextractorrequested)
- [trainsExtractor](Collection.md#trainsextractor)
- [unvalidatedDocsCount](Collection.md#unvalidateddocscount)
- [workspace](Collection.md#workspace)

## Properties

### allowOpenai

• `Optional` **allowOpenai**: `boolean`

Whether to allow OpenAI API to be used to assist in creating a model for this collection.

___

### autoRefreshValidationResults

• `Optional` **autoRefreshValidationResults**: `boolean`

If True, validation results are refreshed whenever annotations are changed.

___

### autoValidateIfValidationRulesPass

• `Optional` **autoValidateIfValidationRulesPass**: `boolean`

___

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

### disableConfirmationIfValidationRulesFail

• `Optional` **disableConfirmationIfValidationRulesFail**: `boolean`

If True, users cannot validate documents with missing mandatory fields, or failing validation rules.

___

### enableAutoValidationThreshold

• `Optional` **enableAutoValidationThreshold**: `boolean`

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

### tailoredExtractorRequested

• `Optional` **tailoredExtractorRequested**: `boolean`

Whether a tailored extractor has been requested for this collection.

___

### trainsExtractor

• `Optional` **trainsExtractor**: `boolean`

Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors.

___

### unvalidatedDocsCount

• `Optional` **unvalidatedDocsCount**: `number`

Number of unvalidated documents in the collection.

___

### workspace

• `Optional` **workspace**: [`CollectionWorkspace`](CollectionWorkspace.md)
