[@affinda/affinda](../README.md) / [Exports](../modules.md) / Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema

# Interface: Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema

## Table of contents

### Properties

- [expiryTime](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#expirytime)
- [file](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#file)
- [fileName](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#filename)
- [identifier](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#identifier)
- [redactDates](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactdates)
- [redactEducationDetails](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redacteducationdetails)
- [redactHeadshot](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactheadshot)
- [redactLocations](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactlocations)
- [redactPersonalDetails](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactpersonaldetails)
- [redactReferees](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactreferees)
- [redactWorkDetails](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#redactworkdetails)
- [resumeLanguage](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#resumelanguage)
- [url](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#url)
- [wait](Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema.md#wait)

## Properties

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry.

#### Defined in

[src/models/index.ts:246](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L246)

___

### file

• `Optional` **file**: `RequestBodyType`

File as binary data blob

#### Defined in

[src/models/index.ts:220](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L220)

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

[src/models/index.ts:224](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L224)

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

[src/models/index.ts:222](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L222)

___

### redactDates

• `Optional` **redactDates**: `string`

Whether to redact dates

#### Defined in

[src/models/index.ts:244](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L244)

___

### redactEducationDetails

• `Optional` **redactEducationDetails**: `string`

Whether to redact education details (e.g. university names)

#### Defined in

[src/models/index.ts:238](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L238)

___

### redactHeadshot

• `Optional` **redactHeadshot**: `string`

Whether to redact headshot

#### Defined in

[src/models/index.ts:232](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L232)

___

### redactLocations

• `Optional` **redactLocations**: `string`

Whether to redact location names

#### Defined in

[src/models/index.ts:242](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L242)

___

### redactPersonalDetails

• `Optional` **redactPersonalDetails**: `string`

Whether to redact personal details (e.g. name, address)

#### Defined in

[src/models/index.ts:234](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L234)

___

### redactReferees

• `Optional` **redactReferees**: `string`

Whether to redact referee details

#### Defined in

[src/models/index.ts:240](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L240)

___

### redactWorkDetails

• `Optional` **redactWorkDetails**: `string`

Whether to redact work details (e.g. company names)

#### Defined in

[src/models/index.ts:236](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L236)

___

### resumeLanguage

• `Optional` **resumeLanguage**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

#### Defined in

[src/models/index.ts:228](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L228)

___

### url

• `Optional` **url**: `string`

URL to file to download and process

#### Defined in

[src/models/index.ts:226](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L226)

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.

#### Defined in

[src/models/index.ts:230](https://github.com/affinda/affinda-typescript/blob/a379e85/src/models/index.ts#L230)
