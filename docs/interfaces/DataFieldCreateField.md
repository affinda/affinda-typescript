[@affinda/affinda](../README.md) / [Exports](../modules.md) / DataFieldCreateField

# Interface: DataFieldCreateField

The field to be created.

## Table of contents

### Properties

- [autoValidationThreshold](DataFieldCreateField.md#autovalidationthreshold)
- [dataSource](DataFieldCreateField.md#datasource)
- [displayEnumValue](DataFieldCreateField.md#displayenumvalue)
- [displayRawText](DataFieldCreateField.md#displayrawtext)
- [enableAutoValidationThreshold](DataFieldCreateField.md#enableautovalidationthreshold)
- [fieldType](DataFieldCreateField.md#fieldtype)
- [label](DataFieldCreateField.md#label)
- [mandatory](DataFieldCreateField.md#mandatory)
- [mapping](DataFieldCreateField.md#mapping)
- [showDropdown](DataFieldCreateField.md#showdropdown)

## Properties

### autoValidationThreshold

• `Optional` **autoValidationThreshold**: `number`

Threshold for auto validation. If null, uses the collection's autoValidationThreshold.

___

### dataSource

• `Optional` **dataSource**: `string`

Data source mapping identifier

___

### displayEnumValue

• `Optional` **displayEnumValue**: `boolean`

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

### fieldType

• `Optional` **fieldType**: `string`

The different data types of annotations

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
