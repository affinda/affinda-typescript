[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / Mapping

# Interface: Mapping

A mapping allows you to specify specific settings regarding a lookup against a MappingDataSource should be applied.

## Properties

### dataSource

> **dataSource**: `null` \| `string`

The mapping data source this mapping applies to.

***

### identifier

> `readonly` **identifier**: `string`

Uniquely identify a mapping.
NOTE: This property will not be serialized. It can only be populated by the server.

***

### orderBy?

> `optional` **orderBy**: `string`

The field to order the results by. Leave blank for ordering by relevance.

***

### organization?

> `optional` **organization**: `string`

The organization that this mapping belongs to.

***

### scoreCutoff?

> `optional` **scoreCutoff**: `number`

Higher values will result in more strict matching.
