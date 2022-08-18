[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateRedactedResumeOptionalParams

# Interface: AffindaAPICreateRedactedResumeOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateRedactedResumeOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateRedactedResumeOptionalParams.md#abortsignal)
- [expiryTime](AffindaAPICreateRedactedResumeOptionalParams.md#expirytime)
- [file](AffindaAPICreateRedactedResumeOptionalParams.md#file)
- [fileName](AffindaAPICreateRedactedResumeOptionalParams.md#filename)
- [identifier](AffindaAPICreateRedactedResumeOptionalParams.md#identifier)
- [language](AffindaAPICreateRedactedResumeOptionalParams.md#language)
- [onResponse](AffindaAPICreateRedactedResumeOptionalParams.md#onresponse)
- [redactDates](AffindaAPICreateRedactedResumeOptionalParams.md#redactdates)
- [redactEducationDetails](AffindaAPICreateRedactedResumeOptionalParams.md#redacteducationdetails)
- [redactGender](AffindaAPICreateRedactedResumeOptionalParams.md#redactgender)
- [redactHeadshot](AffindaAPICreateRedactedResumeOptionalParams.md#redactheadshot)
- [redactLocations](AffindaAPICreateRedactedResumeOptionalParams.md#redactlocations)
- [redactPersonalDetails](AffindaAPICreateRedactedResumeOptionalParams.md#redactpersonaldetails)
- [redactReferees](AffindaAPICreateRedactedResumeOptionalParams.md#redactreferees)
- [redactWorkDetails](AffindaAPICreateRedactedResumeOptionalParams.md#redactworkdetails)
- [requestOptions](AffindaAPICreateRedactedResumeOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPICreateRedactedResumeOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPICreateRedactedResumeOptionalParams.md#tracingoptions)
- [url](AffindaAPICreateRedactedResumeOptionalParams.md#url)
- [wait](AffindaAPICreateRedactedResumeOptionalParams.md#wait)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

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

Unique identifier for the document. If creating a document and left blank, one will be automatically generated.

___

### language

• `Optional` **language**: `string`

Language code in ISO 639-1 format. Must specify zh-cn or zh-tw for Chinese.

___

### onResponse

• `Optional` **onResponse**: `RawResponseCallback`

A function to be called each time a response is received from the server
while performing the requested operation.
May be called multiple times.

#### Inherited from

coreClient.OperationOptions.onResponse

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

### requestOptions

• `Optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

coreClient.OperationOptions.requestOptions

___

### serializerOptions

• `Optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

coreClient.OperationOptions.serializerOptions

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions

___

### url

• `Optional` **url**: `string`

URL to a resume to download and process

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.
