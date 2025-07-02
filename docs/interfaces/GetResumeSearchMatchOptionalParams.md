[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / GetResumeSearchMatchOptionalParams

# Interface: GetResumeSearchMatchOptionalParams

Optional parameters.

## Extends

- `OperationOptions`

## Properties

### abortSignal?

> `optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

`coreClient.OperationOptions.abortSignal`

***

### educationWeight?

> `optional` **educationWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

***

### index?

> `optional` **index**: `string`

Optionally, specify an index to search in. If not specified, will search in all indexes.

***

### jobTitlesWeight?

> `optional` **jobTitlesWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

***

### languagesWeight?

> `optional` **languagesWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

***

### locationsWeight?

> `optional` **locationsWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

***

### managementLevelWeight?

> `optional` **managementLevelWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

***

### onResponse?

> `optional` **onResponse**: `RawResponseCallback`

A function to be called each time a response is received from the server
while performing the requested operation.
May be called multiple times.

#### Inherited from

`coreClient.OperationOptions.onResponse`

***

### requestOptions?

> `optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

`coreClient.OperationOptions.requestOptions`

***

### searchExpression?

> `optional` **searchExpression**: `string`

Add keywords to the search criteria.

***

### searchExpressionWeight?

> `optional` **searchExpressionWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

***

### serializerOptions?

> `optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

`coreClient.OperationOptions.serializerOptions`

***

### skillsWeight?

> `optional` **skillsWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

***

### socCodesWeight?

> `optional` **socCodesWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

***

### tracingOptions?

> `optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

`coreClient.OperationOptions.tracingOptions`

***

### yearsExperienceWeight?

> `optional` **yearsExperienceWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.
