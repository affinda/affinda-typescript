[@affinda/affinda](../README.md) / [Exports](../modules.md) / Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema

# Interface: Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema

## Table of contents

### Properties

- [expiryTime](Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema.md#expirytime)
- [file](Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema.md#file)
- [fileName](Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema.md#filename)
- [identifier](Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema.md#identifier)
- [language](Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema.md#language)
- [url](Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema.md#url)
- [wait](Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema.md#wait)

## Properties

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the document will be automatically deleted.  Defaults to no expiry.

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

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.
