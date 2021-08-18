[affinda](../README.md) / [Exports](../modules.md) / PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema

# Interface: PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema

## Table of contents

### Properties

- [file](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#file)
- [fileName](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#filename)
- [identifier](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#identifier)
- [resumeFormat](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#resumeformat)
- [resumeLanguage](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#resumelanguage)
- [url](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#url)
- [wait](PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema.md#wait)

## Properties

### file

• `Optional` **file**: ``null`` \| `string` \| `ReadableStream` \| `Blob` \| `ArrayBuffer` \| `ArrayBufferView` \| `FormData`

File as binary data blob

#### Defined in

[src/models/index.ts:261](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L261)

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

[src/models/index.ts:265](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L265)

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

[src/models/index.ts:263](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L263)

___

### resumeFormat

• **resumeFormat**: `string`

Identifier of the format used

#### Defined in

[src/models/index.ts:271](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L271)

___

### resumeLanguage

• `Optional` **resumeLanguage**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

#### Defined in

[src/models/index.ts:269](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L269)

___

### url

• `Optional` **url**: `string`

URL to file to download and process

#### Defined in

[src/models/index.ts:267](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L267)

___

### wait

• `Optional` **wait**: `boolean`

If true (default), will return a response only after processing has completed. If false, will return an empty data object which can be polled at the GET endpoint until processing is complete.

#### Defined in

[src/models/index.ts:273](https://github.com/affinda/affinda-typescript/blob/b869a13/src/models/index.ts#L273)
