[affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateRedactedResumeOptionalParams

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

src/models/index.ts:374

___

### file

• `Optional` **file**: ``null`` \| `string` \| `ReadableStream` \| `Blob` \| `ArrayBuffer` \| `ArrayBufferView` \| `FormData`

File as binary data blob

#### Defined in

src/models/index.ts:364

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

src/models/index.ts:368

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

src/models/index.ts:366

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

• `Optional` **redactDates**: `boolean`

Whether to redact dates

#### Defined in

src/models/index.ts:388

___

### redactEducationDetails

• `Optional` **redactEducationDetails**: `boolean`

Whether to redact education details (e.g. university names)

#### Defined in

src/models/index.ts:382

___

### redactHeadshot

• `Optional` **redactHeadshot**: `boolean`

Whether to redact headshot

#### Defined in

src/models/index.ts:376

___

### redactLocations

• `Optional` **redactLocations**: `boolean`

Whether to redact location names

#### Defined in

src/models/index.ts:386

___

### redactPersonalDetails

• `Optional` **redactPersonalDetails**: `boolean`

Whether to redact personal details (e.g. name, address)

#### Defined in

src/models/index.ts:378

___

### redactReferees

• `Optional` **redactReferees**: `boolean`

Whether to redact referee details

#### Defined in

src/models/index.ts:384

___

### redactWorkDetails

• `Optional` **redactWorkDetails**: `boolean`

Whether to redact work details (e.g. company names)

#### Defined in

src/models/index.ts:380

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

src/models/index.ts:372

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

src/models/index.ts:370
