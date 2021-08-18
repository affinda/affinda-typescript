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
- [wait](AffindaAPICreateReformattedResumeOptionalParams.md#wait)

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

[src/models/index.ts:394](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L394)

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

[src/models/index.ts:398](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L398)

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

[src/models/index.ts:396](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L396)

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

[src/models/index.ts:404](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L404)

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

[src/models/index.ts:400](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L400)

___

### wait

• `Optional` **wait**: `boolean`

If true (default), will return a response only after processing has completed. If false, will return an empty data object which can be polled at the GET endpoint until processing is complete.

#### Defined in

[src/models/index.ts:402](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L402)
