[@affinda/affinda](../README.md) / [Exports](../modules.md) / Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema

# Interface: Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema

## Table of contents

### Properties

- [data](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#data)
- [expiryTime](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#expirytime)
- [file](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#file)
- [fileName](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#filename)
- [identifier](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#identifier)
- [language](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#language)
- [url](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#url)
- [wait](Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema.md#wait)

## Properties

### data

• `Optional` **data**: [`ResumeData`](ResumeData.md)

A JSON-encoded string of the `ResumeData` object.

___

### expiryTime

• `Optional` **expiryTime**: `Date`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

___

### file

• `Optional` **file**: `RequestBodyType`

File as binary data blob. Supported formats: PDF, DOC, DOCX, TXT, RTF, HTML, PNG, JPG

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the document. If creating a document and left blank, one will be automatically generated.

___

### language

• `Optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

___

### url

• `Optional` **url**: `string`

URL to file to download and process

___

### wait

• `Optional` **wait**: `boolean`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.
