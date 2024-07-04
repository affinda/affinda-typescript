[@affinda/affinda](../README.md) / [Exports](../modules.md) / Mapping

# Interface: Mapping

A mapping allows you to specify specific settings regarding a lookup against a MappingDataSource should be applied.

## Table of contents

### Properties

- [dataSource](Mapping.md#datasource)
- [identifier](Mapping.md#identifier)
- [orderBy](Mapping.md#orderby)
- [organization](Mapping.md#organization)
- [scoreCutoff](Mapping.md#scorecutoff)

## Properties

### dataSource

• **dataSource**: ``null`` \| `string`

The mapping data source this mapping applies to.

___

### identifier

• `Readonly` **identifier**: `string`

Uniquely identify a mapping.
NOTE: This property will not be serialized. It can only be populated by the server.

___

### orderBy

• `Optional` **orderBy**: `string`

The field to order the results by. Leave blank for ordering by relevance.

___

### organization

• `Optional` **organization**: `string`

The organization that this mapping belongs to.

___

### scoreCutoff

• `Optional` **scoreCutoff**: `number`

Higher values will result in more strict matching.
