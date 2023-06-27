[@affinda/affinda](../README.md) / [Exports](../modules.md) / DocumentCreate

# Interface: DocumentCreate

## Table of contents

### Properties

- [collection](DocumentCreate.md#collection)
- [expiryTime](DocumentCreate.md#expirytime)
- [file](DocumentCreate.md#file)
- [fileName](DocumentCreate.md#filename)
- [identifier](DocumentCreate.md#identifier)
- [language](DocumentCreate.md#language)
- [lowPriority](DocumentCreate.md#lowpriority)
- [regionBias](DocumentCreate.md#regionbias)
- [rejectDuplicates](DocumentCreate.md#rejectduplicates)
- [url](DocumentCreate.md#url)
- [wait](DocumentCreate.md#wait)
- [workspace](DocumentCreate.md#workspace)

## Properties

### collection

• `Optional` **collection**: `string`

Uniquely identify a collection.

___

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

Specify a custom identifier for the document.

___

### language

• `Optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

___

### lowPriority

• `Optional` **lowPriority**: `boolean`

Explicitly mark this document as low priority.

___

### regionBias

• `Optional` **regionBias**: `string`

A JSON representation of the RegionBias object.

___

### rejectDuplicates

• `Optional` **rejectDuplicates**: `boolean`

If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings.

___

### url

• `Optional` **url**: `string`

URL to download the document.

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.

___

### workspace

• `Optional` **workspace**: `string`

Uniquely identify a workspace.
