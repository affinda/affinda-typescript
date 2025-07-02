[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / Field

# Interface: Field

## Indexable

\[`property`: `string`\]: `any`

Describes unknown properties. The value of an unknown property can be of "any" type.

## Properties

### autoValidationThreshold?

> `optional` **autoValidationThreshold**: `number`

Threshold for auto validation. If null, uses the collection's autoValidationThreshold.

***

### dataPoint

> **dataPoint**: `string`

Data point identifier

***

### dataSource?

> `optional` **dataSource**: `string`

Data source mapping identifier

***

### disabledChildFields?

> `optional` **disabledChildFields**: `Field`[]

***

### displayEnumValue?

> `optional` **displayEnumValue**: `boolean`

If true, both the value and the label for the enums will appear in the dropdown in the validation tool.

***

### displayRawText?

> `optional` **displayRawText**: `boolean`

If true, then the validation tool will show the user the raw text found on the page, not the value that has been parsed to a specific type.

***

### dropNull?

> `optional` **dropNull**: `boolean`

If True, any dropdown annotations that fail to parse to a value will be discarded

***

### enableAutoValidationThreshold?

> `optional` **enableAutoValidationThreshold**: `boolean`

If true, the autoValidationThreshold enable auto validation from the threshold from this field if specified, else from the collection

***

### enabledChildFields?

> `optional` **enabledChildFields**: `Field`[]

***

### fields?

> `optional` **fields**: `Record`\<`string`, `unknown`\>[]

***

### fieldType

> **fieldType**: `string`

The different data types of annotations

***

### hideEnumDetail?

> `optional` **hideEnumDetail**: `boolean`

If true, the hoverable enum value detail icon will be hidden.

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

***

### slug?

> `optional` **slug**: `string`
