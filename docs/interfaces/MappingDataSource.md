[@affinda/affinda](../README.md) / [Exports](../modules.md) / MappingDataSource

# Interface: MappingDataSource

A mapping data source is used to map from raw data found by our AI models to records in your database.

## Table of contents

### Properties

- [displayProperty](MappingDataSource.md#displayproperty)
- [identifier](MappingDataSource.md#identifier)
- [keyProperty](MappingDataSource.md#keyproperty)
- [name](MappingDataSource.md#name)
- [organization](MappingDataSource.md#organization)
- [schema](MappingDataSource.md#schema)
- [workspace](MappingDataSource.md#workspace)

## Properties

### displayProperty

• **displayProperty**: `string`

Attribute in the schema which is used to display the value

___

### identifier

• `Readonly` **identifier**: `string`

Uniquely identify a mapping data source.
NOTE: This property will not be serialized. It can only be populated by the server.

___

### keyProperty

• **keyProperty**: `string`

Attribute in the schema which uniquely identifiers the value

___

### name

• `Optional` **name**: `string`

___

### organization

• **organization**: ``null`` \| `string`

The organization that this mapping data source belongs to.

___

### schema

• `Optional` **schema**: `Record`\<`string`, `unknown`\>

The schema of the mapping data source.

___

### workspace

• **workspace**: ``null`` \| `string`

The workspace that this mapping data source belongs to.
