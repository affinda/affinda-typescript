[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateResumeSearchOptionalParams

# Interface: AffindaAPICreateResumeSearchOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateResumeSearchOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateResumeSearchOptionalParams.md#abortsignal)
- [degrees](AffindaAPICreateResumeSearchOptionalParams.md#degrees)
- [degreesRequired](AffindaAPICreateResumeSearchOptionalParams.md#degreesrequired)
- [educationWeight](AffindaAPICreateResumeSearchOptionalParams.md#educationweight)
- [highestDegreeTypes](AffindaAPICreateResumeSearchOptionalParams.md#highestdegreetypes)
- [highestDegreeTypesRequired](AffindaAPICreateResumeSearchOptionalParams.md#highestdegreetypesrequired)
- [institutions](AffindaAPICreateResumeSearchOptionalParams.md#institutions)
- [institutionsRequired](AffindaAPICreateResumeSearchOptionalParams.md#institutionsrequired)
- [isCurrentStudent](AffindaAPICreateResumeSearchOptionalParams.md#iscurrentstudent)
- [isCurrentStudentRequired](AffindaAPICreateResumeSearchOptionalParams.md#iscurrentstudentrequired)
- [isRecentGraduate](AffindaAPICreateResumeSearchOptionalParams.md#isrecentgraduate)
- [isRecentGraduateRequired](AffindaAPICreateResumeSearchOptionalParams.md#isrecentgraduaterequired)
- [jobTitles](AffindaAPICreateResumeSearchOptionalParams.md#jobtitles)
- [jobTitlesCurrentOnly](AffindaAPICreateResumeSearchOptionalParams.md#jobtitlescurrentonly)
- [jobTitlesRequired](AffindaAPICreateResumeSearchOptionalParams.md#jobtitlesrequired)
- [jobTitlesWeight](AffindaAPICreateResumeSearchOptionalParams.md#jobtitlesweight)
- [languages](AffindaAPICreateResumeSearchOptionalParams.md#languages)
- [languagesWeight](AffindaAPICreateResumeSearchOptionalParams.md#languagesweight)
- [limit](AffindaAPICreateResumeSearchOptionalParams.md#limit)
- [locations](AffindaAPICreateResumeSearchOptionalParams.md#locations)
- [locationsRequired](AffindaAPICreateResumeSearchOptionalParams.md#locationsrequired)
- [locationsWeight](AffindaAPICreateResumeSearchOptionalParams.md#locationsweight)
- [managementLevel](AffindaAPICreateResumeSearchOptionalParams.md#managementlevel)
- [managementLevelRequired](AffindaAPICreateResumeSearchOptionalParams.md#managementlevelrequired)
- [managementLevelWeight](AffindaAPICreateResumeSearchOptionalParams.md#managementlevelweight)
- [onResponse](AffindaAPICreateResumeSearchOptionalParams.md#onresponse)
- [requestOptions](AffindaAPICreateResumeSearchOptionalParams.md#requestoptions)
- [searchExpression](AffindaAPICreateResumeSearchOptionalParams.md#searchexpression)
- [searchExpressionRequired](AffindaAPICreateResumeSearchOptionalParams.md#searchexpressionrequired)
- [searchExpressionWeight](AffindaAPICreateResumeSearchOptionalParams.md#searchexpressionweight)
- [serializerOptions](AffindaAPICreateResumeSearchOptionalParams.md#serializeroptions)
- [skills](AffindaAPICreateResumeSearchOptionalParams.md#skills)
- [skillsWeight](AffindaAPICreateResumeSearchOptionalParams.md#skillsweight)
- [socCodes](AffindaAPICreateResumeSearchOptionalParams.md#soccodes)
- [socCodesRequired](AffindaAPICreateResumeSearchOptionalParams.md#soccodesrequired)
- [socCodesWeight](AffindaAPICreateResumeSearchOptionalParams.md#soccodesweight)
- [tracingOptions](AffindaAPICreateResumeSearchOptionalParams.md#tracingoptions)
- [yearsExperienceMax](AffindaAPICreateResumeSearchOptionalParams.md#yearsexperiencemax)
- [yearsExperienceMin](AffindaAPICreateResumeSearchOptionalParams.md#yearsexperiencemin)
- [yearsExperienceRequired](AffindaAPICreateResumeSearchOptionalParams.md#yearsexperiencerequired)
- [yearsExperienceWeight](AffindaAPICreateResumeSearchOptionalParams.md#yearsexperienceweight)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### degrees

• `Optional` **degrees**: `string`[]

Array of ResumeSearchParametersDegreesItem

___

### degreesRequired

• `Optional` **degreesRequired**: `boolean`

___

### educationWeight

• `Optional` **educationWeight**: `number`

___

### highestDegreeTypes

• `Optional` **highestDegreeTypes**: (``null`` \| [`EducationLevel`](../modules.md#educationlevel))[]

Array of educationLevel

___

### highestDegreeTypesRequired

• `Optional` **highestDegreeTypesRequired**: `boolean`

___

### institutions

• `Optional` **institutions**: `string`[]

Array of ResumeSearchParametersInstitutionsItem

___

### institutionsRequired

• `Optional` **institutionsRequired**: `boolean`

___

### isCurrentStudent

• `Optional` **isCurrentStudent**: `boolean`

___

### isCurrentStudentRequired

• `Optional` **isCurrentStudentRequired**: `boolean`

___

### isRecentGraduate

• `Optional` **isRecentGraduate**: `boolean`

___

### isRecentGraduateRequired

• `Optional` **isRecentGraduateRequired**: `boolean`

___

### jobTitles

• `Optional` **jobTitles**: `string`[]

Array of ResumeSearchParametersJobTitlesItem

___

### jobTitlesCurrentOnly

• `Optional` **jobTitlesCurrentOnly**: `boolean`

___

### jobTitlesRequired

• `Optional` **jobTitlesRequired**: `boolean`

___

### jobTitlesWeight

• `Optional` **jobTitlesWeight**: `number`

___

### languages

• `Optional` **languages**: [`ResumeSearchParametersLanguagesItem`](ResumeSearchParametersLanguagesItem.md)[]

Array of ResumeSearchParameters-languagesItem

___

### languagesWeight

• `Optional` **languagesWeight**: `number`

___

### limit

• `Optional` **limit**: `number`

The numbers of results to return.

___

### locations

• `Optional` **locations**: [`ResumeSearchParametersLocationsItem`](ResumeSearchParametersLocationsItem.md)[]

Array of ResumeSearchParameters-locationsItem

___

### locationsRequired

• `Optional` **locationsRequired**: `boolean`

___

### locationsWeight

• `Optional` **locationsWeight**: `number`

___

### managementLevel

• `Optional` **managementLevel**: [`ManagementLevel`](../modules.md#managementlevel)

___

### managementLevelRequired

• `Optional` **managementLevelRequired**: `boolean`

___

### managementLevelWeight

• `Optional` **managementLevelWeight**: `number`

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

___

### searchExpressionRequired

• `Optional` **searchExpressionRequired**: `boolean`

___

### searchExpressionWeight

• `Optional` **searchExpressionWeight**: `number`

___

### serializerOptions

• `Optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

coreClient.OperationOptions.serializerOptions

___

### skills

• `Optional` **skills**: [`ResumeSearchParametersSkillsItem`](ResumeSearchParametersSkillsItem.md)[]

Array of ResumeSearchParameters-skillsItem

___

### skillsWeight

• `Optional` **skillsWeight**: `number`

___

### socCodes

• `Optional` **socCodes**: `number`[]

Array of ArrayItemschema

___

### socCodesRequired

• `Optional` **socCodesRequired**: `boolean`

___

### socCodesWeight

• `Optional` **socCodesWeight**: `number`

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions

___

### yearsExperienceMax

• `Optional` **yearsExperienceMax**: `number`

___

### yearsExperienceMin

• `Optional` **yearsExperienceMin**: `number`

___

### yearsExperienceRequired

• `Optional` **yearsExperienceRequired**: `boolean`

___

### yearsExperienceWeight

• `Optional` **yearsExperienceWeight**: `number`
