[@affinda/affinda](../README.md) / [Exports](../modules.md) / Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema

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

[src/models/index.ts:215](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L215)

___

### file

• `Optional` **file**: `RequestBodyType`

File as binary data blob

#### Defined in

[src/models/index.ts:203](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L203)

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

[src/models/index.ts:207](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L207)

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

[src/models/index.ts:205](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L205)

___

### resumeLanguage

• `Optional` **resumeLanguage**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

#### Defined in

[src/models/index.ts:213](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L213)

___

### url

• `Optional` **url**: `string`

URL to file to download and process

#### Defined in

[src/models/index.ts:209](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L209)

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.

#### Defined in

[src/models/index.ts:211](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L211)
