[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / CollectionCreate

# Interface: CollectionCreate

## Properties

### allowOpenai?

> `optional` **allowOpenai**: `boolean`

Whether to allow OpenAI API to be used to assist in creating a model for this collection.

***

### autoValidationThreshold?

> `optional` **autoValidationThreshold**: `number`

***

### baseExtractor?

> `optional` **baseExtractor**: `string`

Not applicable, please leave empty. This feature is reserved for super user.

***

### dateFormatFromDocument?

> `optional` **dateFormatFromDocument**: `boolean`

Predict the date format from any dates in the document that is not ambiguous.

***

### dateFormatPreference?

> `optional` **dateFormatPreference**: `string`

***

### disableConfirmationIfValidationRulesFail?

> `optional` **disableConfirmationIfValidationRulesFail**: `boolean`

If True, users cannot validate documents with missing mandatory fields, or failing validation rules.

***

### enableAutoValidationThreshold?

> `optional` **enableAutoValidationThreshold**: `boolean`

***

### extractor?

> `optional` **extractor**: `string`

Uniquely identify an extractor. Required if you are not a super user.

***

### extractorConfig?

> `optional` **extractorConfig**: [`ExtractorConfig`](ExtractorConfig.md)

Extra configurations specific to an extractor.

***

### fields?

> `optional` **fields**: [`FieldGroup`](FieldGroup.md)[]

***

### fieldsLayout?

> `optional` **fieldsLayout**: [`FieldsLayout`](FieldsLayout.md)

***

### name

> **name**: `string`

***

### trainsExtractor?

> `optional` **trainsExtractor**: `boolean`

Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors.

***

### workspace

> **workspace**: `string`

Uniquely identify a workspace.
