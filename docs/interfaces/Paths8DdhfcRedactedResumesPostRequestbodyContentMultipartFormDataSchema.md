[affinda](../README.md) / [Exports](../modules.md) / Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema

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

## Properties

### expiryTime

• `Optional` **expiryTime**: `string`

The date/time in ISO-8601 format when the resume will be automatically deleted.  Defaults to no expiry.

#### Defined in

src/models/index.ts:292

___

### file

• `Optional` **file**: ``null`` \| `string` \| `ReadableStream` \| `Blob` \| `ArrayBuffer` \| `ArrayBufferView` \| `FormData`

File as binary data blob

#### Defined in

src/models/index.ts:268

___

### fileName

• `Optional` **fileName**: `string`

Optional filename of the file

#### Defined in

src/models/index.ts:272

___

### identifier

• `Optional` **identifier**: `string`

Unique identifier for the resume. If creating a document and left blank, one will be automatically generated.

#### Defined in

src/models/index.ts:270

___

### redactDates

• `Optional` **redactDates**: `boolean`

Whether to redact dates

#### Defined in

src/models/index.ts:290

___

### redactEducationDetails

• `Optional` **redactEducationDetails**: `boolean`

Whether to redact education details (e.g. university names)

#### Defined in

src/models/index.ts:284

___

### redactHeadshot

• `Optional` **redactHeadshot**: `boolean`

Whether to redact headshot

#### Defined in

src/models/index.ts:278

___

### redactLocations

• `Optional` **redactLocations**: `boolean`

Whether to redact location names

#### Defined in

src/models/index.ts:288

___

### redactPersonalDetails

• `Optional` **redactPersonalDetails**: `boolean`

Whether to redact personal details (e.g. name, address)

#### Defined in

src/models/index.ts:280

___

### redactReferees

• `Optional` **redactReferees**: `boolean`

Whether to redact referee details

#### Defined in

src/models/index.ts:286

___

### redactWorkDetails

• `Optional` **redactWorkDetails**: `boolean`

Whether to redact work details (e.g. company names)

#### Defined in

src/models/index.ts:282

___

### resumeLanguage

• `Optional` **resumeLanguage**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

#### Defined in

src/models/index.ts:276

___

### url

• `Optional` **url**: `string`

URL to file to download and process

#### Defined in

src/models/index.ts:274
