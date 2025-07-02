[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / MappingDataSourceCreate

# Interface: MappingDataSourceCreate

A mapping data source is used to map from raw data found by our AI models to records in your database.

## Properties

### displayProperty?

> `optional` **displayProperty**: `string`

Attribute in the schema which is used to display the value

***

### keyProperty?

> `optional` **keyProperty**: `string`

Attribute in the schema which uniquely identifiers the value

***

### name?

> `optional` **name**: `string`

***

### organization?

> `optional` **organization**: `string`

The organization that this mapping data source belongs to.

***

### schema?

> `optional` **schema**: `Record`\<`string`, `unknown`\>

The schema of the mapping data source.

***

### values?

> `optional` **values**: `Record`\<`string`, `unknown`\>[]

***

### workspace?

> `optional` **workspace**: `string`

The workspace that this mapping data source belongs to.
