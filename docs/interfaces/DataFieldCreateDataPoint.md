[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / DataFieldCreateDataPoint

# Interface: DataFieldCreateDataPoint

The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused.

## Properties

### description?

> `optional` **description**: `string`

***

### manualEntry?

> `optional` **manualEntry**: `boolean`

If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool.

***

### mappingDataSource?

> `optional` **mappingDataSource**: `string`

If populated, the model will learn to predict this field using the data source, rather than relying on fuzzy string matching.

***

### multiple?

> `optional` **multiple**: `boolean`

***

### name

> **name**: `string`

Name of the data point.

***

### noRect?

> `optional` **noRect**: `boolean`

***

### parent?

> `optional` **parent**: `string`

The identifier of the parent data point if applicable.

***

### slug

> **slug**: `string`

A camelCase string that will be used as the key in the API response.

***

### type

> **type**: `string`

The different data types of annotations
