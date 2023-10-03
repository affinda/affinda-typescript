[@affinda/affinda](../README.md) / [Exports](../modules.md) / DataPointChoiceReplaceRequest

# Interface: DataPointChoiceReplaceRequest

Request body for replacing choices of a data point. Either `collection` or `organization` is required.

## Table of contents

### Properties

- [choices](DataPointChoiceReplaceRequest.md#choices)
- [collection](DataPointChoiceReplaceRequest.md#collection)
- [dataPoint](DataPointChoiceReplaceRequest.md#datapoint)
- [organization](DataPointChoiceReplaceRequest.md#organization)

## Properties

### choices

• **choices**: [`DataPointChoiceForReplace`](DataPointChoiceForReplace.md)[]

Incoming choices to replace existing choices of a data point. Existing choices and incoming choices are matched base on their `value`. New `value` will be created, existing `value` will be updated, and `value` not in incoming choices will be deleted.

___

### collection

• `Optional` **collection**: `string`

Uniquely identify a collection.

___

### dataPoint

• **dataPoint**: `string`

Uniquely identify a data point.

___

### organization

• `Optional` **organization**: `string`

Uniquely identify an organization.
