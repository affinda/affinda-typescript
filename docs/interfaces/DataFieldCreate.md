[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / DataFieldCreate

# Interface: DataFieldCreate

## Properties

### categoryLabel?

> `optional` **categoryLabel**: `string`

The label of the category that this field will be put into. If not provided, the field will be put into the default category. If no category exists with the specified label, a new category will be created.

***

### dataPoint

> **dataPoint**: [`DataFieldCreateDataPoint`](DataFieldCreateDataPoint.md)

The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused.

***

### field

> **field**: [`DataFieldCreateField`](DataFieldCreateField.md)

The field to be created.
