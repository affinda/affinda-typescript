[@affinda/affinda](../README.md) / [Exports](../modules.md) / DataPointCreate

# Interface: DataPointCreate

## Table of contents

### Properties

- [annotationContentType](DataPointCreate.md#annotationcontenttype)
- [description](DataPointCreate.md#description)
- [extractor](DataPointCreate.md#extractor)
- [manualEntry](DataPointCreate.md#manualentry)
- [multiple](DataPointCreate.md#multiple)
- [name](DataPointCreate.md#name)
- [noRect](DataPointCreate.md#norect)
- [organization](DataPointCreate.md#organization)
- [parent](DataPointCreate.md#parent)
- [slug](DataPointCreate.md#slug)

## Properties

### annotationContentType

• **annotationContentType**: `string`

The different data types of annotations

___

### description

• `Optional` **description**: `string`

___

### extractor

• **extractor**: `string`

Uniquely identify an extractor.

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

• **organization**: `string`

Uniquely identify an organization.

___

### parent

• `Optional` **parent**: `string`

The identifier of the parent data point if applicable.

___

### slug

• **slug**: `string`

A camelCase string that will be used as the key in the API response.
