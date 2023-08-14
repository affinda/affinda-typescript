[@affinda/affinda](../README.md) / [Exports](../modules.md) / DataFieldDataPoint

# Interface: DataFieldDataPoint

The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused.

## Table of contents

### Properties

- [children](DataFieldDataPoint.md#children)
- [description](DataFieldDataPoint.md#description)
- [identifier](DataFieldDataPoint.md#identifier)
- [manualEntry](DataFieldDataPoint.md#manualentry)
- [multiple](DataFieldDataPoint.md#multiple)
- [name](DataFieldDataPoint.md#name)
- [noRect](DataFieldDataPoint.md#norect)
- [parent](DataFieldDataPoint.md#parent)
- [slug](DataFieldDataPoint.md#slug)
- [type](DataFieldDataPoint.md#type)

## Properties

### children

• **children**: [`DataPoint`](DataPoint.md)[]

___

### description

• **description**: ``null`` \| `string`

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

• **multiple**: `boolean`

___

### name

• **name**: `string`

Name of the data point.

___

### noRect

• **noRect**: `boolean`

___

### parent

• **parent**: ``null`` \| `string`

The identifier of the parent data point if applicable.

___

### slug

• **slug**: `string`

A camelCase string that will be used as the key in the API response.

___

### type

• **type**: `string`

The different data types of annotations
