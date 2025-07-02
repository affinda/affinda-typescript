[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / MappingDataSource

# Interface: MappingDataSource

A mapping data source is used to map from raw data found by our AI models to records in your database.

## Properties

### displayProperty

> **displayProperty**: `string`

Attribute in the schema which is used to display the value

***

### identifier

> `readonly` **identifier**: `string`

Uniquely identify a mapping data source.
NOTE: This property will not be serialized. It can only be populated by the server.

***

### keyProperty

> **keyProperty**: `string`

Attribute in the schema which uniquely identifiers the value

***

### name?

> `optional` **name**: `string`

***

### organization

> **organization**: `null` \| `string`

The organization that this mapping data source belongs to.

***

### schema?

> `optional` **schema**: `Record`\<`string`, `unknown`\>

The schema of the mapping data source.

***

### workspace

> **workspace**: `null` \| `string`

The workspace that this mapping data source belongs to.
