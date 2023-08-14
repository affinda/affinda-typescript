[@affinda/affinda](../README.md) / [Exports](../modules.md) / DataPoint

# Interface: DataPoint

## Table of contents

### Properties

- [annotationContentType](DataPoint.md#annotationcontenttype)
- [children](DataPoint.md#children)
- [description](DataPoint.md#description)
- [displayEnumValue](DataPoint.md#displayenumvalue)
- [extractor](DataPoint.md#extractor)
- [identifier](DataPoint.md#identifier)
- [manualEntry](DataPoint.md#manualentry)
- [multiple](DataPoint.md#multiple)
- [name](DataPoint.md#name)
- [noRect](DataPoint.md#norect)
- [organization](DataPoint.md#organization)
- [parent](DataPoint.md#parent)
- [slug](DataPoint.md#slug)

## Properties

### annotationContentType

• **annotationContentType**: `string`

The different data types of annotations

___

### children

• `Optional` **children**: [`DataPoint`](DataPoint.md)[]

___

### description

• `Optional` **description**: `string`

___

### displayEnumValue

• `Optional` **displayEnumValue**: `boolean`

If true, both the value and the label for the enums will appear in the dropdown in the validation tool.

___

### extractor

• **extractor**: ``null`` \| `string`

Uniquely identify an extractor.

___

### identifier

• **identifier**: `string`

Uniquely identify a data point.

___

### manualEntry

• `Optional` **manualEntry**: `boolean`

If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool.

___

### multiple

• `Optional` **multiple**: `boolean`

___

### name

• **name**: `string`

Name of the data point.

___

### noRect

• `Optional` **noRect**: `boolean`

___

### organization

• **organization**: ``null`` \| [`Organization`](Organization.md)

___

### parent

• `Optional` **parent**: `string`

The identifier of the parent data point if applicable.

___

### slug

• **slug**: `string`

A camelCase string that will be used as the key in the API response.
