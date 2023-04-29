[@affinda/affinda](../README.md) / [Exports](../modules.md) / SearchParametersCustomData

# Interface: SearchParametersCustomData

## Table of contents

### Properties

- [dataPoint](SearchParametersCustomData.md#datapoint)
- [filterType](SearchParametersCustomData.md#filtertype)
- [query](SearchParametersCustomData.md#query)
- [required](SearchParametersCustomData.md#required)
- [weight](SearchParametersCustomData.md#weight)

## Properties

### dataPoint

• **dataPoint**: `string`

The data point's slug

___

### filterType

• **filterType**: `string`

Data points of "text" type support only "equals" filterType, others support both "equals" and "range"

___

### query

• **query**: `Record`<`string`, `unknown`\>

"equals" searches require the "value" key inside the query, and "range" searches require at least one of "gte" (greater than or equal) and "lte" (less than or equal)

___

### required

• `Optional` **required**: `boolean`

___

### weight

• `Optional` **weight**: `number`
