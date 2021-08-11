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

## Properties

### file

• `Optional` **file**: ``null`` \| `string` \| `ReadableStream` \| `Blob` \| `ArrayBuffer` \| `ArrayBufferView` \| `FormData`

File as binary data blob

#### Defined in

src/models/index.ts:297

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

src/models/index.ts:301

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

src/models/index.ts:299

___

### resumeFormat

• **resumeFormat**: `string`

Identifier of the format used

#### Defined in

src/models/index.ts:307

___

### resumeLanguage

• `Optional` **resumeLanguage**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

#### Defined in

src/models/index.ts:305

___

### url

• `Optional` **url**: `string`

URL to file to download and process

#### Defined in

src/models/index.ts:303
