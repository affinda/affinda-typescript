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

___

### file

• `Optional` **file**: `RequestBodyType`

File as binary data blob

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

___

### resumeLanguage

• `Optional` **resumeLanguage**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

___

### url

• `Optional` **url**: `string`

URL to file to download and process

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.
