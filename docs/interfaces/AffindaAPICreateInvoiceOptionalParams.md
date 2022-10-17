[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPICreateInvoiceOptionalParams

# Interface: AffindaAPICreateInvoiceOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPICreateInvoiceOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPICreateInvoiceOptionalParams.md#abortsignal)
- [expiryTime](AffindaAPICreateInvoiceOptionalParams.md#expirytime)
- [file](AffindaAPICreateInvoiceOptionalParams.md#file)
- [fileName](AffindaAPICreateInvoiceOptionalParams.md#filename)
- [identifier](AffindaAPICreateInvoiceOptionalParams.md#identifier)
- [language](AffindaAPICreateInvoiceOptionalParams.md#language)
- [onResponse](AffindaAPICreateInvoiceOptionalParams.md#onresponse)
- [rejectDuplicates](AffindaAPICreateInvoiceOptionalParams.md#rejectduplicates)
- [requestOptions](AffindaAPICreateInvoiceOptionalParams.md#requestoptions)
- [serializerOptions](AffindaAPICreateInvoiceOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPICreateInvoiceOptionalParams.md#tracingoptions)
- [url](AffindaAPICreateInvoiceOptionalParams.md#url)
- [wait](AffindaAPICreateInvoiceOptionalParams.md#wait)

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

### rejectDuplicates

• `Optional` **rejectDuplicates**: `boolean`

If "true", parsing will fail when the uploaded document is duplicate of an existing document. If "false" (default), will parse the document normally whether its a duplicate or not.

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

URL to an invoice to download and process

___

### wait

• `Optional` **wait**: `string`

If "true" (default), will return a response only after processing has completed. If "false", will return an empty data object which can be polled at the GET endpoint until processing is complete.
