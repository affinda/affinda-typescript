[@affinda/affinda](../README.md) / [Exports](../modules.md) / CollectionUpdate

# Interface: CollectionUpdate

## Table of contents

### Properties

- [allowOpenai](CollectionUpdate.md#allowopenai)
- [autoValidationThreshold](CollectionUpdate.md#autovalidationthreshold)
- [dateFormatFromDocument](CollectionUpdate.md#dateformatfromdocument)
- [dateFormatPreference](CollectionUpdate.md#dateformatpreference)
- [disableConfirmationIfValidationRulesFail](CollectionUpdate.md#disableconfirmationifvalidationrulesfail)
- [enableAutoValidationThreshold](CollectionUpdate.md#enableautovalidationthreshold)
- [extractorConfig](CollectionUpdate.md#extractorconfig)
- [fields](CollectionUpdate.md#fields)
- [fieldsLayout](CollectionUpdate.md#fieldslayout)
- [name](CollectionUpdate.md#name)
- [trainsExtractor](CollectionUpdate.md#trainsextractor)

## Properties

### allowOpenai

• `Optional` **allowOpenai**: `boolean`

Whether to allow OpenAI API to be used to assist in creating a model for this collection.

___

### autoValidationThreshold

• `Optional` **autoValidationThreshold**: `number`

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

### extractorConfig

• `Optional` **extractorConfig**: [`ExtractorConfig`](ExtractorConfig.md)

Extra configurations specific to an extractor.

___

### fields

• `Optional` **fields**: [`FieldGroup`](FieldGroup.md)[]

___

### fieldsLayout

• `Optional` **fieldsLayout**: [`FieldsLayout`](FieldsLayout.md)

___

### name

• `Optional` **name**: `string`

___

### trainsExtractor

• `Optional` **trainsExtractor**: `boolean`

Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors.
