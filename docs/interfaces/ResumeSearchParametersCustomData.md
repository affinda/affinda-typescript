[@affinda/affinda](../README.md) / [Exports](../modules.md) / ResumeSearchParametersCustomData

# Interface: ResumeSearchParametersCustomData

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

___

### filterType

• **filterType**: `string`

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
