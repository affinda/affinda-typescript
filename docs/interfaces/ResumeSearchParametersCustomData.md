[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / ResumeSearchParametersCustomData

# Interface: ResumeSearchParametersCustomData

## Extends

- [`SearchParametersCustomData`](SearchParametersCustomData.md)

## Properties

### dataPoint?

> `optional` **dataPoint**: `string`

The data point's slug, used for portal v2 (deprecated)

#### Inherited from

[`SearchParametersCustomData`](SearchParametersCustomData.md).[`dataPoint`](SearchParametersCustomData.md#datapoint)

***

### field?

> `optional` **field**: `string`

The field's slug

#### Inherited from

[`SearchParametersCustomData`](SearchParametersCustomData.md).[`field`](SearchParametersCustomData.md#field)

***

### filterType

> **filterType**: `string`

Data points of "text" type support only "equals" filterType, others support both "equals" and "range"

#### Inherited from

[`SearchParametersCustomData`](SearchParametersCustomData.md).[`filterType`](SearchParametersCustomData.md#filtertype)

***

### query

> **query**: `Record`\<`string`, `unknown`\>

"equals" searches require the "value" key inside the query, and "range" searches require at least one of "gte" (greater than or equal) and "lte" (less than or equal)

#### Inherited from

[`SearchParametersCustomData`](SearchParametersCustomData.md).[`query`](SearchParametersCustomData.md#query)

***

### required?

> `optional` **required**: `boolean`

#### Inherited from

[`SearchParametersCustomData`](SearchParametersCustomData.md).[`required`](SearchParametersCustomData.md#required)

***

### weight?

> `optional` **weight**: `number`

#### Inherited from

[`SearchParametersCustomData`](SearchParametersCustomData.md).[`weight`](SearchParametersCustomData.md#weight)
