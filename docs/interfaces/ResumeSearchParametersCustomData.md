[@affinda/affinda](../README.md) / [Exports](../modules.md) / ResumeSearchParametersCustomData

# Interface: ResumeSearchParametersCustomData

## Hierarchy

- [`SearchParametersCustomData`](SearchParametersCustomData.md)

  ↳ **`ResumeSearchParametersCustomData`**

## Table of contents

### Properties

- [dataPoint](ResumeSearchParametersCustomData.md#datapoint)
- [filterType](ResumeSearchParametersCustomData.md#filtertype)
- [query](ResumeSearchParametersCustomData.md#query)
- [required](ResumeSearchParametersCustomData.md#required)
- [weight](ResumeSearchParametersCustomData.md#weight)

## Properties

### dataPoint

• **dataPoint**: `string`

The data point's slug

#### Inherited from

[SearchParametersCustomData](SearchParametersCustomData.md).[dataPoint](SearchParametersCustomData.md#datapoint)

___

### filterType

• **filterType**: `string`

Data points of "text" type support only "equals" filterType, others support both "equals" and "range"

#### Inherited from

[SearchParametersCustomData](SearchParametersCustomData.md).[filterType](SearchParametersCustomData.md#filtertype)

___

### query

• **query**: `Record`\<`string`, `unknown`\>

"equals" searches require the "value" key inside the query, and "range" searches require at least one of "gte" (greater than or equal) and "lte" (less than or equal)

#### Inherited from

[SearchParametersCustomData](SearchParametersCustomData.md).[query](SearchParametersCustomData.md#query)

___

### required

• `Optional` **required**: `boolean`

#### Inherited from

[SearchParametersCustomData](SearchParametersCustomData.md).[required](SearchParametersCustomData.md#required)

___

### weight

• `Optional` **weight**: `number`

#### Inherited from

[SearchParametersCustomData](SearchParametersCustomData.md).[weight](SearchParametersCustomData.md#weight)
