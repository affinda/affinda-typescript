[@affinda/affinda](../README.md) / [Exports](../modules.md) / CollectionCreate

# Interface: CollectionCreate

## Table of contents

### Properties

- [allowOpenai](CollectionCreate.md#allowopenai)
- [autoValidationThreshold](CollectionCreate.md#autovalidationthreshold)
- [baseExtractor](CollectionCreate.md#baseextractor)
- [dateFormatFromDocument](CollectionCreate.md#dateformatfromdocument)
- [dateFormatPreference](CollectionCreate.md#dateformatpreference)
- [extractor](CollectionCreate.md#extractor)
- [extractorConfig](CollectionCreate.md#extractorconfig)
- [fields](CollectionCreate.md#fields)
- [fieldsLayout](CollectionCreate.md#fieldslayout)
- [name](CollectionCreate.md#name)
- [trainsExtractor](CollectionCreate.md#trainsextractor)
- [workspace](CollectionCreate.md#workspace)

## Properties

### allowOpenai

• `Optional` **allowOpenai**: `boolean`

Whether to allow OpenAI API to be used to assist in creating a model for this collection.

___

### autoValidationThreshold

• `Optional` **autoValidationThreshold**: `number`

___

### baseExtractor

• `Optional` **baseExtractor**: `string`

Not applicable, please leave empty. This feature is reserved for super user.

___

### dateFormatFromDocument

• `Optional` **dateFormatFromDocument**: `boolean`

Predict the date format from any dates in the document that is not ambiguous.

___

### dateFormatPreference

• `Optional` **dateFormatPreference**: `string`

___

### extractor

• `Optional` **extractor**: `string`

Uniquely identify an extractor. Required if you are not a super user.

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

• **name**: `string`

___

### trainsExtractor

• `Optional` **trainsExtractor**: `boolean`

Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors.

___

### workspace

• **workspace**: `string`

Uniquely identify a workspace.
