[@affinda/affinda](../README.md) / [Exports](../modules.md) / DataFieldCreateDataPoint

# Interface: DataFieldCreateDataPoint

The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused.

## Table of contents

### Properties

- [description](DataFieldCreateDataPoint.md#description)
- [manualEntry](DataFieldCreateDataPoint.md#manualentry)
- [multiple](DataFieldCreateDataPoint.md#multiple)
- [name](DataFieldCreateDataPoint.md#name)
- [noRect](DataFieldCreateDataPoint.md#norect)
- [parent](DataFieldCreateDataPoint.md#parent)
- [slug](DataFieldCreateDataPoint.md#slug)
- [type](DataFieldCreateDataPoint.md#type)

## Properties

### description

• `Optional` **description**: `string`

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

### parent

• `Optional` **parent**: `string`

The identifier of the parent data point if applicable.

___

### slug

• **slug**: `string`

A camelCase string that will be used as the key in the API response.

___

### type

• **type**: `string`

The different data types of annotations
