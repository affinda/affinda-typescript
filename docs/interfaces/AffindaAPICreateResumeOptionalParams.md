[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateResumeOptionalParams

# Interface: AffindaAPICreateResumeOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateResumeOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateResumeOptionalParams.md#abortsignal)
- [expiryTime](AffindaAPICreateResumeOptionalParams.md#expirytime)
- [file](AffindaAPICreateResumeOptionalParams.md#file)
- [fileName](AffindaAPICreateResumeOptionalParams.md#filename)
- [identifier](AffindaAPICreateResumeOptionalParams.md#identifier)
- [onResponse](AffindaAPICreateResumeOptionalParams.md#onresponse)
- [requestOptions](AffindaAPICreateResumeOptionalParams.md#requestoptions)
- [resumeLanguage](AffindaAPICreateResumeOptionalParams.md#resumelanguage)
- [serializerOptions](AffindaAPICreateResumeOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPICreateResumeOptionalParams.md#tracingoptions)
- [url](AffindaAPICreateResumeOptionalParams.md#url)
- [wait](AffindaAPICreateResumeOptionalParams.md#wait)

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

[src/models/index.ts:289](https://github.com/affinda/affinda-typescript/blob/e6c68be/src/models/index.ts#L289)

___

### file

• `Optional` **file**: `RequestBodyType`

File as binary data blob

#### Defined in

[src/models/index.ts:277](https://github.com/affinda/affinda-typescript/blob/e6c68be/src/models/index.ts#L277)

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

[src/models/index.ts:281](https://github.com/affinda/affinda-typescript/blob/e6c68be/src/models/index.ts#L281)

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

[src/models/index.ts:279](https://github.com/affinda/affinda-typescript/blob/e6c68be/src/models/index.ts#L279)

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

[src/models/index.ts:287](https://github.com/affinda/affinda-typescript/blob/e6c68be/src/models/index.ts#L287)

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

[src/models/index.ts:283](https://github.com/affinda/affinda-typescript/blob/e6c68be/src/models/index.ts#L283)

___

### wait

• `Optional` **wait**: `boolean`

If true (default), will return a response only after processing has completed. If false, will return an empty data object which can be polled at the GET endpoint until processing is complete.

#### Defined in

[src/models/index.ts:285](https://github.com/affinda/affinda-typescript/blob/e6c68be/src/models/index.ts#L285)
