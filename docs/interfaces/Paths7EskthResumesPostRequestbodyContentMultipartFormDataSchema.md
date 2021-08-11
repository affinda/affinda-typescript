[affinda](../README.md) / [Exports](../modules.md) / Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema

# Interface: Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema

## Table of contents

### Properties

- [expiryTime](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#expirytime)
- [file](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#file)
- [fileName](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#filename)
- [identifier](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#identifier)
- [resumeLanguage](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#resumelanguage)
- [url](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#url)
- [wait](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#wait)

## Properties

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry.

#### Defined in

src/models/index.ts:263

___

### file

• `Optional` **file**: ``null`` \| `string` \| `ReadableStream` \| `Blob` \| `ArrayBuffer` \| `ArrayBufferView` \| `FormData`

File as binary data blob

#### Defined in

src/models/index.ts:251

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

src/models/index.ts:255

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

src/models/index.ts:253

___

### resumeLanguage

• `Optional` **resumeLanguage**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

#### Defined in

src/models/index.ts:261

___

### url

• `Optional` **url**: `string`

URL to file to download and process

#### Defined in

src/models/index.ts:257

___

### wait

• `Optional` **wait**: `boolean`

If true (default), will return a response only after resume processing has completed. If False, will return an identifier, which can be polled at the GET endpoint until processing is complete.

#### Defined in

src/models/index.ts:259
