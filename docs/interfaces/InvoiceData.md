[@affinda/affinda](../README.md) / [Exports](../modules.md) / InvoiceData

# Interface: InvoiceData

## Table of contents

### Properties

- [bankAccountNumber](InvoiceData.md#bankaccountnumber)
- [bankBsb](InvoiceData.md#bankbsb)
- [bankIban](InvoiceData.md#bankiban)
- [bankSortCode](InvoiceData.md#banksortcode)
- [bankSwift](InvoiceData.md#bankswift)
- [bpayBillerCode](InvoiceData.md#bpaybillercode)
- [bpayReference](InvoiceData.md#bpayreference)
- [currencyCode](InvoiceData.md#currencycode)
- [customFields](InvoiceData.md#customfields)
- [customerBillingAddress](InvoiceData.md#customerbillingaddress)
- [customerBusinessNumber](InvoiceData.md#customerbusinessnumber)
- [customerCompanyName](InvoiceData.md#customercompanyname)
- [customerContactName](InvoiceData.md#customercontactname)
- [customerDeliveryAddress](InvoiceData.md#customerdeliveryaddress)
- [customerEmail](InvoiceData.md#customeremail)
- [customerNumber](InvoiceData.md#customernumber)
- [customerPhoneNumber](InvoiceData.md#customerphonenumber)
- [customerVat](InvoiceData.md#customervat)
- [invoiceDate](InvoiceData.md#invoicedate)
- [invoiceNumber](InvoiceData.md#invoicenumber)
- [invoiceOrderDate](InvoiceData.md#invoiceorderdate)
- [invoicePurchaseOrderNumber](InvoiceData.md#invoicepurchaseordernumber)
- [paymentAmountBase](InvoiceData.md#paymentamountbase)
- [paymentAmountDue](InvoiceData.md#paymentamountdue)
- [paymentAmountPaid](InvoiceData.md#paymentamountpaid)
- [paymentAmountTax](InvoiceData.md#paymentamounttax)
- [paymentAmountTotal](InvoiceData.md#paymentamounttotal)
- [paymentDateDue](InvoiceData.md#paymentdatedue)
- [paymentReference](InvoiceData.md#paymentreference)
- [rawText](InvoiceData.md#rawtext)
- [supplierAddress](InvoiceData.md#supplieraddress)
- [supplierBusinessNumber](InvoiceData.md#supplierbusinessnumber)
- [supplierCompanyName](InvoiceData.md#suppliercompanyname)
- [supplierEmail](InvoiceData.md#supplieremail)
- [supplierFax](InvoiceData.md#supplierfax)
- [supplierPhoneNumber](InvoiceData.md#supplierphonenumber)
- [supplierVat](InvoiceData.md#suppliervat)
- [supplierWebsite](InvoiceData.md#supplierwebsite)
- [tables](InvoiceData.md#tables)
- [tablesBeta](InvoiceData.md#tablesbeta)

## Properties

### bankAccountNumber

• `Optional` **bankAccountNumber**: [`TextAnnotation`](TextAnnotation.md)

___

### bankBsb

• `Optional` **bankBsb**: [`TextAnnotation`](TextAnnotation.md)

___

### bankIban

• `Optional` **bankIban**: [`TextAnnotation`](TextAnnotation.md)

___

### bankSortCode

• `Optional` **bankSortCode**: [`TextAnnotation`](TextAnnotation.md)

___

### bankSwift

• `Optional` **bankSwift**: [`TextAnnotation`](TextAnnotation.md)

___

### bpayBillerCode

• `Optional` **bpayBillerCode**: [`TextAnnotation`](TextAnnotation.md)

___

### bpayReference

• `Optional` **bpayReference**: [`TextAnnotation`](TextAnnotation.md)

___

### currencyCode

• `Optional` **currencyCode**: [`CurrencyCodeAnnotation`](CurrencyCodeAnnotation.md)

___

### customFields

• `Optional` **customFields**: `Object`

Dictionary of <any>

#### Index signature

▪ [propertyName: `string`]: `any`

___

### customerBillingAddress

• `Optional` **customerBillingAddress**: [`LocationAnnotation`](LocationAnnotation.md)

___

### customerBusinessNumber

• `Optional` **customerBusinessNumber**: [`TextAnnotation`](TextAnnotation.md)

___

### customerCompanyName

• `Optional` **customerCompanyName**: [`TextAnnotation`](TextAnnotation.md)

___

### customerContactName

• `Optional` **customerContactName**: [`TextAnnotation`](TextAnnotation.md)

___

### customerDeliveryAddress

• `Optional` **customerDeliveryAddress**: [`LocationAnnotation`](LocationAnnotation.md)

___

### customerEmail

• `Optional` **customerEmail**: [`TextAnnotation`](TextAnnotation.md)

___

### customerNumber

• `Optional` **customerNumber**: [`TextAnnotation`](TextAnnotation.md)

___

### customerPhoneNumber

• `Optional` **customerPhoneNumber**: [`TextAnnotation`](TextAnnotation.md)

___

### customerVat

• `Optional` **customerVat**: [`TextAnnotation`](TextAnnotation.md)

___

### invoiceDate

• `Optional` **invoiceDate**: [`DateAnnotation`](DateAnnotation.md)

___

### invoiceNumber

• `Optional` **invoiceNumber**: [`TextAnnotation`](TextAnnotation.md)

___

### invoiceOrderDate

• `Optional` **invoiceOrderDate**: [`DateAnnotation`](DateAnnotation.md)

___

### invoicePurchaseOrderNumber

• `Optional` **invoicePurchaseOrderNumber**: [`TextAnnotation`](TextAnnotation.md)

___

### paymentAmountBase

• `Optional` **paymentAmountBase**: [`TextAnnotation`](TextAnnotation.md)

___

### paymentAmountDue

• `Optional` **paymentAmountDue**: [`TextAnnotation`](TextAnnotation.md)

___

### paymentAmountPaid

• `Optional` **paymentAmountPaid**: [`TextAnnotation`](TextAnnotation.md)

___

### paymentAmountTax

• `Optional` **paymentAmountTax**: [`TextAnnotation`](TextAnnotation.md)

___

### paymentAmountTotal

• `Optional` **paymentAmountTotal**: [`TextAnnotation`](TextAnnotation.md)

___

### paymentDateDue

• `Optional` **paymentDateDue**: [`DateAnnotation`](DateAnnotation.md)

___

### paymentReference

• `Optional` **paymentReference**: [`TextAnnotation`](TextAnnotation.md)

___

### rawText

• `Optional` **rawText**: `string`

All of the raw text of the parsed invoice.

___

### supplierAddress

• `Optional` **supplierAddress**: [`LocationAnnotation`](LocationAnnotation.md)

___

### supplierBusinessNumber

• `Optional` **supplierBusinessNumber**: [`TextAnnotation`](TextAnnotation.md)

___

### supplierCompanyName

• `Optional` **supplierCompanyName**: [`TextAnnotation`](TextAnnotation.md)

___

### supplierEmail

• `Optional` **supplierEmail**: [`TextAnnotation`](TextAnnotation.md)

___

### supplierFax

• `Optional` **supplierFax**: [`TextAnnotation`](TextAnnotation.md)

___

### supplierPhoneNumber

• `Optional` **supplierPhoneNumber**: [`TextAnnotation`](TextAnnotation.md)

___

### supplierVat

• `Optional` **supplierVat**: [`TextAnnotation`](TextAnnotation.md)

___

### supplierWebsite

• `Optional` **supplierWebsite**: [`TextAnnotation`](TextAnnotation.md)

___

### tables

• `Optional` **tables**: (``null`` \| [`TableAnnotation`](TableAnnotation.md))[]

___

### tablesBeta

• `Optional` **tablesBeta**: (``null`` \| [`TableBetaAnnotation`](TableBetaAnnotation.md))[]
