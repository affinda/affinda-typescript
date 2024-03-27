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

• `Optional` **bankAccountNumber**: [`InvoiceDataBankAccountNumber`](InvoiceDataBankAccountNumber.md)

___

### bankBsb

• `Optional` **bankBsb**: [`InvoiceDataBankBsb`](InvoiceDataBankBsb.md)

___

### bankIban

• `Optional` **bankIban**: [`InvoiceDataBankIban`](InvoiceDataBankIban.md)

___

### bankSortCode

• `Optional` **bankSortCode**: [`InvoiceDataBankSortCode`](InvoiceDataBankSortCode.md)

___

### bankSwift

• `Optional` **bankSwift**: [`InvoiceDataBankSwift`](InvoiceDataBankSwift.md)

___

### bpayBillerCode

• `Optional` **bpayBillerCode**: [`InvoiceDataBpayBillerCode`](InvoiceDataBpayBillerCode.md)

___

### bpayReference

• `Optional` **bpayReference**: [`InvoiceDataBpayReference`](InvoiceDataBpayReference.md)

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

• `Optional` **customerBusinessNumber**: [`InvoiceDataCustomerBusinessNumber`](InvoiceDataCustomerBusinessNumber.md)

___

### customerCompanyName

• `Optional` **customerCompanyName**: [`InvoiceDataCustomerCompanyName`](InvoiceDataCustomerCompanyName.md)

___

### customerContactName

• `Optional` **customerContactName**: [`InvoiceDataCustomerContactName`](InvoiceDataCustomerContactName.md)

___

### customerDeliveryAddress

• `Optional` **customerDeliveryAddress**: [`LocationAnnotation`](LocationAnnotation.md)

___

### customerEmail

• `Optional` **customerEmail**: [`InvoiceDataCustomerEmail`](InvoiceDataCustomerEmail.md)

___

### customerNumber

• `Optional` **customerNumber**: [`InvoiceDataCustomerNumber`](InvoiceDataCustomerNumber.md)

___

### customerPhoneNumber

• `Optional` **customerPhoneNumber**: [`InvoiceDataCustomerPhoneNumber`](InvoiceDataCustomerPhoneNumber.md)

___

### customerVat

• `Optional` **customerVat**: [`InvoiceDataCustomerVat`](InvoiceDataCustomerVat.md)

___

### invoiceDate

• `Optional` **invoiceDate**: [`DateAnnotation`](DateAnnotation.md)

___

### invoiceNumber

• `Optional` **invoiceNumber**: [`InvoiceDataInvoiceNumber`](InvoiceDataInvoiceNumber.md)

___

### invoiceOrderDate

• `Optional` **invoiceOrderDate**: [`DateAnnotation`](DateAnnotation.md)

___

### invoicePurchaseOrderNumber

• `Optional` **invoicePurchaseOrderNumber**: [`InvoiceDataInvoicePurchaseOrderNumber`](InvoiceDataInvoicePurchaseOrderNumber.md)

___

### paymentAmountBase

• `Optional` **paymentAmountBase**: [`InvoiceDataPaymentAmountBase`](InvoiceDataPaymentAmountBase.md)

___

### paymentAmountDue

• `Optional` **paymentAmountDue**: [`InvoiceDataPaymentAmountDue`](InvoiceDataPaymentAmountDue.md)

___

### paymentAmountPaid

• `Optional` **paymentAmountPaid**: [`InvoiceDataPaymentAmountPaid`](InvoiceDataPaymentAmountPaid.md)

___

### paymentAmountTax

• `Optional` **paymentAmountTax**: [`InvoiceDataPaymentAmountTax`](InvoiceDataPaymentAmountTax.md)

___

### paymentAmountTotal

• `Optional` **paymentAmountTotal**: [`InvoiceDataPaymentAmountTotal`](InvoiceDataPaymentAmountTotal.md)

___

### paymentDateDue

• `Optional` **paymentDateDue**: [`DateAnnotation`](DateAnnotation.md)

___

### paymentReference

• `Optional` **paymentReference**: [`InvoiceDataPaymentReference`](InvoiceDataPaymentReference.md)

___

### rawText

• `Optional` **rawText**: `string`

All of the raw text of the parsed invoice.

___

### supplierAddress

• `Optional` **supplierAddress**: [`LocationAnnotation`](LocationAnnotation.md)

___

### supplierBusinessNumber

• `Optional` **supplierBusinessNumber**: [`InvoiceDataSupplierBusinessNumber`](InvoiceDataSupplierBusinessNumber.md)

___

### supplierCompanyName

• `Optional` **supplierCompanyName**: [`InvoiceDataSupplierCompanyName`](InvoiceDataSupplierCompanyName.md)

___

### supplierEmail

• `Optional` **supplierEmail**: [`InvoiceDataSupplierEmail`](InvoiceDataSupplierEmail.md)

___

### supplierFax

• `Optional` **supplierFax**: [`InvoiceDataSupplierFax`](InvoiceDataSupplierFax.md)

___

### supplierPhoneNumber

• `Optional` **supplierPhoneNumber**: [`InvoiceDataSupplierPhoneNumber`](InvoiceDataSupplierPhoneNumber.md)

___

### supplierVat

• `Optional` **supplierVat**: [`InvoiceDataSupplierVat`](InvoiceDataSupplierVat.md)

___

### supplierWebsite

• `Optional` **supplierWebsite**: [`InvoiceDataSupplierWebsite`](InvoiceDataSupplierWebsite.md)

___

### tables

• `Optional` **tables**: (``null`` \| [`TableAnnotation`](TableAnnotation.md))[]

___

### tablesBeta

• `Optional` **tablesBeta**: (``null`` \| [`TableBetaAnnotation`](TableBetaAnnotation.md))[]
