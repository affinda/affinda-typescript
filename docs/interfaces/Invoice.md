[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / Invoice

# Interface: Invoice

## Extends

- [`Document`](Document.md)

## Properties

### data?

> `optional` **data**: [`InvoiceData`](InvoiceData.md)

Dictionary of <any>

#### Overrides

[`Document`](Document.md).[`data`](Document.md#data)

***

### error?

> `optional` **error**: [`DocumentError`](DocumentError.md)

#### Inherited from

[`Document`](Document.md).[`error`](Document.md#error)

***

### extractor

> **extractor**: `"invoice"`

Polymorphic discriminator, which specifies the different types this object can be

#### Overrides

[`Document`](Document.md).[`extractor`](Document.md#extractor)

***

### meta

> **meta**: [`DocumentMeta`](DocumentMeta.md)

#### Inherited from

[`Document`](Document.md).[`meta`](Document.md#meta)

***

### warnings?

> `optional` **warnings**: [`DocumentWarning`](DocumentWarning.md)[]

#### Inherited from

[`Document`](Document.md).[`warnings`](Document.md#warnings)
