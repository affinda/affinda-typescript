[@affinda/affinda](../README.md) / [Exports](../modules.md) / DataFieldField

# Interface: DataFieldField

The field to be created.

## Table of contents

### Properties

- [autoValidationThreshold](DataFieldField.md#autovalidationthreshold)
- [dataSource](DataFieldField.md#datasource)
- [disabledChildFields](DataFieldField.md#disabledchildfields)
- [displayEnumValue](DataFieldField.md#displayenumvalue)
- [displayRawText](DataFieldField.md#displayrawtext)
- [enableAutoValidationThreshold](DataFieldField.md#enableautovalidationthreshold)
- [enabledChildFields](DataFieldField.md#enabledchildfields)
- [fieldType](DataFieldField.md#fieldtype)
- [label](DataFieldField.md#label)
- [mandatory](DataFieldField.md#mandatory)
- [mapping](DataFieldField.md#mapping)
- [showDropdown](DataFieldField.md#showdropdown)

## Properties

### autoValidationThreshold

• **autoValidationThreshold**: ``null`` \| `number`

Threshold for auto validation. If null, uses the collection's autoValidationThreshold.

___

### dataSource

• `Optional` **dataSource**: `string`

Data source mapping identifier

___

### disabledChildFields

• **disabledChildFields**: [`Field`](Field.md)[]

___

### displayEnumValue

• **displayEnumValue**: `boolean`

If true, both the value and the label for the enums will appear in the dropdown in the validation tool.

___

### displayRawText

• `Optional` **displayRawText**: `boolean`

If true, then the validation tool will show the user the raw text found on the page, not the value that has been parsed to a specific type.

___

### enableAutoValidationThreshold

• `Optional` **enableAutoValidationThreshold**: `boolean`

If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection

___

### enabledChildFields

• **enabledChildFields**: [`Field`](Field.md)[]

___

### fieldType

• `Optional` **fieldType**: `string`

The different data types of annotations

___

### label

• **label**: `string`

___

### mandatory

• **mandatory**: `boolean`

___

### mapping

• `Optional` **mapping**: `string`

Defines how the data point is mapped to the data source

___

### showDropdown

• `Optional` **showDropdown**: `boolean`
