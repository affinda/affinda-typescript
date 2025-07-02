[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / DataFieldCreateField

# Interface: DataFieldCreateField

The field to be created.

## Properties

### autoValidationThreshold?

> `optional` **autoValidationThreshold**: `number`

Threshold for auto validation. If null, uses the collection's autoValidationThreshold.

***

### dataSource?

> `optional` **dataSource**: `string`

Data source mapping identifier

***

### displayEnumValue?

> `optional` **displayEnumValue**: `boolean`

If true, both the value and the label for the enums will appear in the dropdown in the validation tool.

***

### displayRawText?

> `optional` **displayRawText**: `boolean`

If true, then the validation tool will show the user the raw text found on the page, not the value that has been parsed to a specific type.

***

### enableAutoValidationThreshold?

> `optional` **enableAutoValidationThreshold**: `boolean`

If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection

***

### fieldType?

> `optional` **fieldType**: `string`

The different data types of annotations

***

### label

> **label**: `string`

***

### mandatory?

> `optional` **mandatory**: `boolean`

***

### mapping?

> `optional` **mapping**: `string`

Defines how the data point is mapped to the data source

***

### showDropdown?

> `optional` **showDropdown**: `boolean`
