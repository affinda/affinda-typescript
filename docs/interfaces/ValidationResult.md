[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / ValidationResult

# Interface: ValidationResult

Validation result arising from a ValidationRule

## Properties

### annotations

> **annotations**: `number`[]

List of annotation ids that were validated

***

### document

> **document**: `string`

Unique identifier for the document

***

### id

> **id**: `number`

Validation Result's ID

***

### message

> **message**: `string`

Message explaining why the validation failed

***

### passed

> **passed**: `null` \| `boolean`

Whether the validation passed or not, null if the validation was not applicable

***

### ruleSlug

> **ruleSlug**: `string`

The kebab-case slug of the validation rule that was applied
