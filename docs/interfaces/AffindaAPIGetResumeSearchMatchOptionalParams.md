[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIGetResumeSearchMatchOptionalParams

# Interface: AffindaAPIGetResumeSearchMatchOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIGetResumeSearchMatchOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIGetResumeSearchMatchOptionalParams.md#abortsignal)
- [educationWeight](AffindaAPIGetResumeSearchMatchOptionalParams.md#educationweight)
- [index](AffindaAPIGetResumeSearchMatchOptionalParams.md#index)
- [jobTitlesWeight](AffindaAPIGetResumeSearchMatchOptionalParams.md#jobtitlesweight)
- [languagesWeight](AffindaAPIGetResumeSearchMatchOptionalParams.md#languagesweight)
- [locationsWeight](AffindaAPIGetResumeSearchMatchOptionalParams.md#locationsweight)
- [managementLevelWeight](AffindaAPIGetResumeSearchMatchOptionalParams.md#managementlevelweight)
- [onResponse](AffindaAPIGetResumeSearchMatchOptionalParams.md#onresponse)
- [requestOptions](AffindaAPIGetResumeSearchMatchOptionalParams.md#requestoptions)
- [searchExpression](AffindaAPIGetResumeSearchMatchOptionalParams.md#searchexpression)
- [searchExpressionWeight](AffindaAPIGetResumeSearchMatchOptionalParams.md#searchexpressionweight)
- [serializerOptions](AffindaAPIGetResumeSearchMatchOptionalParams.md#serializeroptions)
- [skillsWeight](AffindaAPIGetResumeSearchMatchOptionalParams.md#skillsweight)
- [socCodesWeight](AffindaAPIGetResumeSearchMatchOptionalParams.md#soccodesweight)
- [tracingOptions](AffindaAPIGetResumeSearchMatchOptionalParams.md#tracingoptions)
- [yearsExperienceWeight](AffindaAPIGetResumeSearchMatchOptionalParams.md#yearsexperienceweight)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### educationWeight

• `Optional` **educationWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

___

### index

• `Optional` **index**: `string`

Optionally, specify an index to search in. If not specified, will search in all indexes.

___

### jobTitlesWeight

• `Optional` **jobTitlesWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

___

### languagesWeight

• `Optional` **languagesWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

___

### locationsWeight

• `Optional` **locationsWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

___

### managementLevelWeight

• `Optional` **managementLevelWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

___

### onResponse

• `Optional` **onResponse**: `RawResponseCallback`

A function to be called each time a response is received from the server
while performing the requested operation.
May be called multiple times.

#### Inherited from

coreClient.OperationOptions.onResponse

___

### requestOptions

• `Optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

coreClient.OperationOptions.requestOptions

___

### searchExpression

• `Optional` **searchExpression**: `string`

Add keywords to the search criteria.

___

### searchExpressionWeight

• `Optional` **searchExpressionWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

___

### serializerOptions

• `Optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

coreClient.OperationOptions.serializerOptions

___

### skillsWeight

• `Optional` **skillsWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

___

### socCodesWeight

• `Optional` **socCodesWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions

___

### yearsExperienceWeight

• `Optional` **yearsExperienceWeight**: `number`

How important is this criteria to the matching score, range from 0 to 1.
