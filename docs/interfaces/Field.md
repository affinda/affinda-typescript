[@affinda/affinda](../README.md) / [Exports](../modules.md) / Field

# Interface: Field

## Table of contents

### Properties

- [autoValidationThreshold](Field.md#autovalidationthreshold)
- [dataPoint](Field.md#datapoint)
- [dataSource](Field.md#datasource)
- [disabledChildFields](Field.md#disabledchildfields)
- [displayEnumValue](Field.md#displayenumvalue)
- [dropNullEnums](Field.md#dropnullenums)
- [enabledChildFields](Field.md#enabledchildfields)
- [fieldType](Field.md#fieldtype)
- [fields](Field.md#fields)
- [label](Field.md#label)
- [mandatory](Field.md#mandatory)
- [mapping](Field.md#mapping)
- [showDropdown](Field.md#showdropdown)
- [slug](Field.md#slug)

## Properties

### autoValidationThreshold

• `Optional` **autoValidationThreshold**: `number`

___

### dataPoint

• **dataPoint**: `string`

Data point identifier

___

### dataSource

• `Optional` **dataSource**: `string`

Data source mapping identifier

___

### disabledChildFields

• `Optional` **disabledChildFields**: [`Field`](Field.md)[]

___

### displayEnumValue

• `Optional` **displayEnumValue**: `boolean`

If true, both the value and the label for the enums will appear in the dropdown in the validation tool.

___

### dropNullEnums

• `Optional` **dropNullEnums**: `boolean`

If True, any dropdown annotations that fail to be mapped will be discarded

___

### enabledChildFields

• `Optional` **enabledChildFields**: [`Field`](Field.md)[]

___

### fieldType

• **fieldType**: `string`

The different data types of annotations

___

### fields

• `Optional` **fields**: `Record`\<`string`, `unknown`\>[]

___

### label

• **label**: `string`

___

### mandatory

• `Optional` **mandatory**: `boolean`

___

### mapping

• `Optional` **mapping**: `string`

Defines how the data point is mapped to the data source

___

### showDropdown

• `Optional` **showDropdown**: `boolean`

___

### slug

• `Optional` **slug**: `string`
