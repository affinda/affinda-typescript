[@affinda/affinda](../README.md) / [Exports](../modules.md) / ValidationResultCreate

# Interface: ValidationResultCreate

## Table of contents

### Properties

- [annotations](ValidationResultCreate.md#annotations)
- [document](ValidationResultCreate.md#document)
- [message](ValidationResultCreate.md#message)
- [passed](ValidationResultCreate.md#passed)
- [ruleSlug](ValidationResultCreate.md#ruleslug)

## Properties

### annotations

• **annotations**: `number`[]

List of annotation ids that were validated

___

### document

• **document**: `string`

Unique identifier for the document

___

### message

• **message**: `string`

Message explaining why the validation failed

___

### passed

• `Optional` **passed**: `boolean`

Whether the validation passed or not, null if the validation was not applicable

___

### ruleSlug

• **ruleSlug**: `string`

The hot-dog case slug of the validation rule that was applied
