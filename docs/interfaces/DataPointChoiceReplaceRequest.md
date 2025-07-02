[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / DataPointChoiceReplaceRequest

# Interface: DataPointChoiceReplaceRequest

Request body for replacing choices of a data point. Either `collection` or `organization` is required.

## Properties

### choices

> **choices**: [`DataPointChoiceForReplace`](DataPointChoiceForReplace.md)[]

Incoming choices to replace existing choices of a data point. Existing choices and incoming choices are matched base on their `value`. New `value` will be created, existing `value` will be updated, and `value` not in incoming choices will be deleted.

***

### collection?

> `optional` **collection**: `string`

Uniquely identify a collection.

***

### dataPoint

> **dataPoint**: `string`

Uniquely identify a data point.

***

### organization?

> `optional` **organization**: `string`

Uniquely identify an organization.
