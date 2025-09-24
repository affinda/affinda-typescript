[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / ValidationResultUpdate

# Interface: ValidationResultUpdate

## Properties

### annotations?

> `optional` **annotations**: `number`[]

List of annotation ids that were validated

***

### document?

> `optional` **document**: `string`

Unique identifier for the document

***

### message?

> `optional` **message**: `string`

Message explaining why the validation failed

***

### passed?

> `optional` **passed**: `boolean`

Whether the validation passed or not, null if the validation was not applicable

***

### ruleSlug?

> `optional` **ruleSlug**: `string`

The kebab-case slug of the validation rule that was applied
