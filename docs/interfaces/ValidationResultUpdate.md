[@affinda/affinda](../README.md) / [Exports](../modules.md) / ValidationResultUpdate

# Interface: ValidationResultUpdate

## Table of contents

### Properties

- [annotations](ValidationResultUpdate.md#annotations)
- [document](ValidationResultUpdate.md#document)
- [message](ValidationResultUpdate.md#message)
- [passed](ValidationResultUpdate.md#passed)
- [ruleSlug](ValidationResultUpdate.md#ruleslug)

## Properties

### annotations

• `Optional` **annotations**: `number`[]

List of annotation ids that were validated

___

### document

• `Optional` **document**: `string`

Unique identifier for the document

___

### message

• `Optional` **message**: `string`

Message explaining why the validation failed

___

### passed

• `Optional` **passed**: `boolean`

Whether the validation passed or not, null if the validation was not applicable

___

### ruleSlug

• `Optional` **ruleSlug**: `string`

The hot-dog case slug of the validation rule that was applied
