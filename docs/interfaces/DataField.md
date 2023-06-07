[@affinda/affinda](../README.md) / [Exports](../modules.md) / DataField

# Interface: DataField

## Table of contents

### Properties

- [categoryLabel](DataField.md#categorylabel)
- [dataPoint](DataField.md#datapoint)
- [field](DataField.md#field)

## Properties

### categoryLabel

• `Optional` **categoryLabel**: `string`

The label of the category that this field will be put into. If not provided, the field will be put into the default category. If no category exists with the specified label, a new category will be created.

___

### dataPoint

• **dataPoint**: [`DataFieldDataPoint`](DataFieldDataPoint.md)

The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused.

___

### field

• **field**: [`DataFieldField`](DataFieldField.md)

The field to be created.
