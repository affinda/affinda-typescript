[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / ValidationResultCreate

# Interface: ValidationResultCreate

## Properties

### annotations

> **annotations**: `number`[]

List of annotation ids that were validated

***

### document

> **document**: `string`

Unique identifier for the document

***

### message

> **message**: `string`

Message explaining why the validation failed

***

### passed?

> `optional` **passed**: `boolean`

Whether the validation passed or not, null if the validation was not applicable

***

### ruleSlug

> **ruleSlug**: `string`

The kebab-case slug of the validation rule that was applied
