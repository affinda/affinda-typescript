[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateRedactedResumeOptionalParams

# Interface: AffindaAPICreateRedactedResumeOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateRedactedResumeOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateRedactedResumeOptionalParams.md#abortsignal)
- [expiryTime](AffindaAPICreateRedactedResumeOptionalParams.md#expirytime)
- [file](AffindaAPICreateRedactedResumeOptionalParams.md#file)
- [fileName](AffindaAPICreateRedactedResumeOptionalParams.md#filename)
- [identifier](AffindaAPICreateRedactedResumeOptionalParams.md#identifier)
- [onResponse](AffindaAPICreateRedactedResumeOptionalParams.md#onresponse)
- [redactDates](AffindaAPICreateRedactedResumeOptionalParams.md#redactdates)
- [redactEducationDetails](AffindaAPICreateRedactedResumeOptionalParams.md#redacteducationdetails)
- [redactHeadshot](AffindaAPICreateRedactedResumeOptionalParams.md#redactheadshot)
- [redactLocations](AffindaAPICreateRedactedResumeOptionalParams.md#redactlocations)
- [redactPersonalDetails](AffindaAPICreateRedactedResumeOptionalParams.md#redactpersonaldetails)
- [redactReferees](AffindaAPICreateRedactedResumeOptionalParams.md#redactreferees)
- [redactWorkDetails](AffindaAPICreateRedactedResumeOptionalParams.md#redactworkdetails)
- [requestOptions](AffindaAPICreateRedactedResumeOptionalParams.md#requestoptions)
- [resumeLanguage](AffindaAPICreateRedactedResumeOptionalParams.md#resumelanguage)
- [serializerOptions](AffindaAPICreateRedactedResumeOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPICreateRedactedResumeOptionalParams.md#tracingoptions)
- [url](AffindaAPICreateRedactedResumeOptionalParams.md#url)
- [wait](AffindaAPICreateRedactedResumeOptionalParams.md#wait)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:289

___

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry.

#### Defined in

[src/models/index.ts:332](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L332)

___

### file

• `Optional` **file**: `RequestBodyType`

File as binary data blob

#### Defined in

[src/models/index.ts:320](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L320)

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

[src/models/index.ts:324](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L324)

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

[src/models/index.ts:322](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L322)

___

### onResponse

• `Optional` **onResponse**: `RawResponseCallback`

A function to be called each time a response is received from the server
while performing the requested operation.
May be called multiple times.

#### Inherited from

coreClient.OperationOptions.onResponse

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:307

___

### redactDates

• `Optional` **redactDates**: `string`

Whether to redact dates

#### Defined in

[src/models/index.ts:346](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L346)

___

### redactEducationDetails

• `Optional` **redactEducationDetails**: `string`

Whether to redact education details (e.g. university names)

#### Defined in

[src/models/index.ts:340](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L340)

___

### redactHeadshot

• `Optional` **redactHeadshot**: `string`

Whether to redact headshot

#### Defined in

[src/models/index.ts:334](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L334)

___

### redactLocations

• `Optional` **redactLocations**: `string`

Whether to redact location names

#### Defined in

[src/models/index.ts:344](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L344)

___

### redactPersonalDetails

• `Optional` **redactPersonalDetails**: `string`

Whether to redact personal details (e.g. name, address)

#### Defined in

[src/models/index.ts:336](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L336)

___

### redactReferees

• `Optional` **redactReferees**: `string`

Whether to redact referee details

#### Defined in

[src/models/index.ts:342](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L342)

___

### redactWorkDetails

• `Optional` **redactWorkDetails**: `string`

Whether to redact work details (e.g. company names)

#### Defined in

[src/models/index.ts:338](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L338)

___

### requestOptions

• `Optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

coreClient.OperationOptions.requestOptions

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:293

___

### resumeLanguage

• `Optional` **resumeLanguage**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

#### Defined in

[src/models/index.ts:330](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L330)

___

### serializerOptions

• `Optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

coreClient.OperationOptions.serializerOptions

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:301

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:297

___

### url

• `Optional` **url**: `string`

URL to file to download and process

#### Defined in

[src/models/index.ts:326](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L326)

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.

#### Defined in

[src/models/index.ts:328](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L328)
