[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / SearchParametersCustomData

# Interface: SearchParametersCustomData

## Extended by

- [`ResumeSearchParametersCustomData`](ResumeSearchParametersCustomData.md)

## Properties

### dataPoint

> **dataPoint**: `string`

The data point's slug

***

### filterType

> **filterType**: `string`

Data points of "text" type support only "equals" filterType, others support both "equals" and "range"

***

### query

> **query**: `Record`\<`string`, `unknown`\>

"equals" searches require the "value" key inside the query, and "range" searches require at least one of "gte" (greater than or equal) and "lte" (less than or equal)

***

### required?

> `optional` **required**: `boolean`

***

### weight?

> `optional` **weight**: `number`
