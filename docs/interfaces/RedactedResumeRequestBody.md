[@affinda/affinda](../README.md) / [Exports](../modules.md) / RedactedResumeRequestBody

# Interface: RedactedResumeRequestBody

RedactedResumeRequestBody

## Table of contents

### Properties

- [expiryTime](RedactedResumeRequestBody.md#expirytime)
- [file](RedactedResumeRequestBody.md#file)
- [fileName](RedactedResumeRequestBody.md#filename)
- [identifier](RedactedResumeRequestBody.md#identifier)
- [language](RedactedResumeRequestBody.md#language)
- [redactDates](RedactedResumeRequestBody.md#redactdates)
- [redactEducationDetails](RedactedResumeRequestBody.md#redacteducationdetails)
- [redactGender](RedactedResumeRequestBody.md#redactgender)
- [redactHeadshot](RedactedResumeRequestBody.md#redactheadshot)
- [redactLocations](RedactedResumeRequestBody.md#redactlocations)
- [redactPersonalDetails](RedactedResumeRequestBody.md#redactpersonaldetails)
- [redactReferees](RedactedResumeRequestBody.md#redactreferees)
- [redactWorkDetails](RedactedResumeRequestBody.md#redactworkdetails)
- [url](RedactedResumeRequestBody.md#url)
- [wait](RedactedResumeRequestBody.md#wait)

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

URL to a resume to download and process

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.
