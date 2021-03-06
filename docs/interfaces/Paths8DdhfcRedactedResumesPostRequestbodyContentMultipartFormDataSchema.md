[@affinda/affinda](../README.md) / [Exports](../modules.md) / Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema

# Interface: Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema

## Table of contents

### Properties

- [expiryTime](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#expirytime)
- [file](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#file)
- [fileName](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#filename)
- [identifier](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#identifier)
- [language](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#language)
- [redactDates](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactdates)
- [redactEducationDetails](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redacteducationdetails)
- [redactGender](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactgender)
- [redactHeadshot](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactheadshot)
- [redactLocations](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactlocations)
- [redactPersonalDetails](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactpersonaldetails)
- [redactReferees](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactreferees)
- [redactWorkDetails](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactworkdetails)
- [url](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#url)
- [wait](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#wait)

## Properties

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

### redactDates

• `Optional` **redactDates**: `string`

Whether to redact dates

___

### redactEducationDetails

• `Optional` **redactEducationDetails**: `string`

Whether to redact education details (e.g. university names)

___

### redactGender

• `Optional` **redactGender**: `string`

Whether to redact gender

___

### redactHeadshot

• `Optional` **redactHeadshot**: `string`

Whether to redact headshot

___

### redactLocations

• `Optional` **redactLocations**: `string`

Whether to redact location names

___

### redactPersonalDetails

• `Optional` **redactPersonalDetails**: `string`

Whether to redact personal details (e.g. name, address)

___

### redactReferees

• `Optional` **redactReferees**: `string`

Whether to redact referee details

___

### redactWorkDetails

• `Optional` **redactWorkDetails**: `string`

Whether to redact work details (e.g. company names)

___

### url

• `Optional` **url**: `string`

URL to file to download and process

___

### wait

• `Optional` **wait**: `boolean`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.
