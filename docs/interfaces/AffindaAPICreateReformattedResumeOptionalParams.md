[affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateReformattedResumeOptionalParams

# Interface: AffindaAPICreateReformattedResumeOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateReformattedResumeOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateReformattedResumeOptionalParams.md#abortsignal)
- [file](AffindaAPICreateReformattedResumeOptionalParams.md#file)
- [fileName](AffindaAPICreateReformattedResumeOptionalParams.md#filename)
- [identifier](AffindaAPICreateReformattedResumeOptionalParams.md#identifier)
- [onResponse](AffindaAPICreateReformattedResumeOptionalParams.md#onresponse)
- [requestOptions](AffindaAPICreateReformattedResumeOptionalParams.md#requestoptions)
- [resumeLanguage](AffindaAPICreateReformattedResumeOptionalParams.md#resumelanguage)
- [serializerOptions](AffindaAPICreateReformattedResumeOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPICreateReformattedResumeOptionalParams.md#tracingoptions)
- [url](AffindaAPICreateReformattedResumeOptionalParams.md#url)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:289

___

### file

• `Optional` **file**: ``null`` \| `string` \| `ReadableStream` \| `Blob` \| `ArrayBuffer` \| `ArrayBufferView` \| `FormData`

File as binary data blob

#### Defined in

src/models/index.ts:426

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

src/models/index.ts:430

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

src/models/index.ts:428

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

src/models/index.ts:434

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

src/models/index.ts:432
