[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / DataFieldDataPoint

# Interface: DataFieldDataPoint

The data point to be created for this field. If a data point with the same slug and collection already exists, it will be reused.

## Properties

### availableDataSources?

> `optional` **availableDataSources**: [`MappingDataSource`](MappingDataSource.md)[]

***

### children

> **children**: [`DataPoint`](DataPoint.md)[]

***

### description

> **description**: `null` \| `string`

***

### identifier

> **identifier**: `string`

Uniquely identify a data point.

***

### manualEntry?

> `optional` **manualEntry**: `boolean`

If true, the model will not be used to predict this data point. Instead, the user will be able to manually enter the value in the validation tool.

***

### multiple

> **multiple**: `boolean`

***

### name

> **name**: `string`

Name of the data point.

***

### noRect

> **noRect**: `boolean`

***

### parent

> **parent**: `null` \| `string`

The identifier of the parent data point if applicable.

***

### slug

> **slug**: `string`

A camelCase string that will be used as the key in the API response.

***

### type

> **type**: `string`

The different data types of annotations
