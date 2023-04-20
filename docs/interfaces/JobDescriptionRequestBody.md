[@affinda/affinda](../README.md) / [Exports](../modules.md) / JobDescriptionRequestBody

# Interface: JobDescriptionRequestBody

JobDescriptionRequestBody

## Table of contents

### Properties

- [expiryTime](JobDescriptionRequestBody.md#expirytime)
- [file](JobDescriptionRequestBody.md#file)
- [fileName](JobDescriptionRequestBody.md#filename)
- [identifier](JobDescriptionRequestBody.md#identifier)
- [language](JobDescriptionRequestBody.md#language)
- [rejectDuplicates](JobDescriptionRequestBody.md#rejectduplicates)
- [url](JobDescriptionRequestBody.md#url)
- [wait](JobDescriptionRequestBody.md#wait)

## Properties

### expiryTime

• `Optional` **expiryTime**: `string`

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

A random string that uniquely identify the resource.

___

### language

• `Optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

___

### rejectDuplicates

• `Optional` **rejectDuplicates**: `string`

If "true", parsing will fail when the uploaded document is duplicate of an existing document. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings.

___

### url

• `Optional` **url**: `string`

URL to download the job description.

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.
