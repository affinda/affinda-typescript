[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / DataPointCreate

# Interface: DataPointCreate

## Properties

### annotationContentType

> **annotationContentType**: `string`

The different data types of annotations

***

### description?

> `optional` **description**: `string`

***

### extractor

> **extractor**: `string`

Uniquely identify an extractor.

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

### organization

> **organization**: `string`

Uniquely identify an organization.

***

### parent?

> `optional` **parent**: `string`

The identifier of the parent data point if applicable.

***

### slug

> **slug**: `string`

A camelCase string that will be used as the key in the API response.
