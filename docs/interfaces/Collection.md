[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / Collection

# Interface: Collection

## Properties

### allowOpenai?

> `optional` **allowOpenai**: `boolean`

Whether to allow OpenAI API to be used to assist in creating a model for this collection.

***

### autoRefreshValidationResults?

> `optional` **autoRefreshValidationResults**: `boolean`

If True, validation results are refreshed whenever annotations are changed.

***

### autoValidateIfValidationRulesPass?

> `optional` **autoValidateIfValidationRulesPass**: `boolean`

***

### autoValidationThreshold?

> `optional` **autoValidationThreshold**: `number`

***

### confirmedDocsCount?

> `optional` **confirmedDocsCount**: `number`

Number of validated documents in the collection.

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

> `optional` **extractor**: [`Extractor`](Extractor.md)

***

### extractorConfig?

> `optional` **extractorConfig**: [`ExtractorConfig`](ExtractorConfig.md)

Extra configurations specific to an extractor.

***

### fields?

> `optional` **fields**: [`FieldGroup`](FieldGroup.md)[]

***

### fieldsConfigured?

> `optional` **fieldsConfigured**: `boolean`

***

### fieldsLayout?

> `optional` **fieldsLayout**: [`FieldsLayout`](FieldsLayout.md)

***

### identifier

> **identifier**: `string`

Uniquely identify a collection.

***

### ingestEmail?

> `optional` **ingestEmail**: `string`

When you send email to this address, any document attached in the body will be uploaded to this collection.

***

### name?

> `optional` **name**: `string`

***

### tailoredExtractorRequested?

> `optional` **tailoredExtractorRequested**: `boolean`

Whether a tailored extractor has been requested for this collection.

***

### trainsExtractor?

> `optional` **trainsExtractor**: `boolean`

Whether this collection feeds documents into the extractor's training queue. This setting can only be toggled for custom extractors.

***

### unvalidatedDocsCount?

> `optional` **unvalidatedDocsCount**: `number`

Number of unvalidated documents in the collection.

***

### workspace?

> `optional` **workspace**: [`CollectionWorkspace`](CollectionWorkspace.md)
