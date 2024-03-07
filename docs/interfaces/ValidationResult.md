[@affinda/affinda](../README.md) / [Exports](../modules.md) / ValidationResult

# Interface: ValidationResult

Validation result arising from a ValidationRule

## Table of contents

### Properties

- [annotations](ValidationResult.md#annotations)
- [document](ValidationResult.md#document)
- [id](ValidationResult.md#id)
- [message](ValidationResult.md#message)
- [passed](ValidationResult.md#passed)
- [ruleSlug](ValidationResult.md#ruleslug)

## Properties

### annotations

• **annotations**: `number`[]

List of annotation ids that were validated

___

### document

• **document**: `string`

Unique identifier for the document

___

### id

• **id**: `number`

Validation Result's ID

___

### message

• **message**: `string`

Message explaining why the validation failed

___

### passed

• **passed**: `boolean`

Whether the validation passed or not

___

### ruleSlug

• **ruleSlug**: `string`

The hot-dog case slug of the validation rule that was applied
