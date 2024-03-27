[@affinda/affinda](../README.md) / [Exports](../modules.md) / Invoice

# Interface: Invoice

## Hierarchy

- [`Document`](Document.md)

  ↳ **`Invoice`**

## Table of contents

### Properties

- [data](Invoice.md#data)
- [error](Invoice.md#error)
- [extractor](Invoice.md#extractor)
- [meta](Invoice.md#meta)
- [warnings](Invoice.md#warnings)

## Properties

### data

• `Optional` **data**: [`InvoiceData`](InvoiceData.md)

Dictionary of <any>

#### Overrides

[Document](Document.md).[data](Document.md#data)

___

### error

• `Optional` **error**: [`DocumentError`](DocumentError.md)

#### Inherited from

[Document](Document.md).[error](Document.md#error)

___

### extractor

• **extractor**: ``"invoice"``

Polymorphic discriminator, which specifies the different types this object can be

#### Overrides

[Document](Document.md).[extractor](Document.md#extractor)

___

### meta

• **meta**: [`DocumentMeta`](DocumentMeta.md)

#### Inherited from

[Document](Document.md).[meta](Document.md#meta)

___

### warnings

• `Optional` **warnings**: [`DocumentWarning`](DocumentWarning.md)[]

#### Inherited from

[Document](Document.md).[warnings](Document.md#warnings)
