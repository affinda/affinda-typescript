[@affinda/affinda](../README.md) / [Exports](../modules.md) / MappingDataSourceCreate

# Interface: MappingDataSourceCreate

A mapping data source is used to map from raw data found by our AI models to records in your database.

## Table of contents

### Properties

- [displayProperty](MappingDataSourceCreate.md#displayproperty)
- [keyProperty](MappingDataSourceCreate.md#keyproperty)
- [name](MappingDataSourceCreate.md#name)
- [organization](MappingDataSourceCreate.md#organization)
- [schema](MappingDataSourceCreate.md#schema)
- [values](MappingDataSourceCreate.md#values)

## Properties

### displayProperty

• `Optional` **displayProperty**: `string`

Attribute in the schema which is used to display the value

___

### keyProperty

• `Optional` **keyProperty**: `string`

Attribute in the schema which uniquely identifiers the value

___

### name

• `Optional` **name**: `string`

___

### organization

• **organization**: `string`

The organization that this mapping data source belongs to.

___

### schema

• `Optional` **schema**: `Record`\<`string`, `unknown`\>

The schema of the mapping data source.

___

### values

• `Optional` **values**: `Record`\<`string`, `unknown`\>[]
