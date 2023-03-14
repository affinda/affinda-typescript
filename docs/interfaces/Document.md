[@affinda/affinda](../README.md) / [Exports](../modules.md) / Document

# Interface: Document

## Table of contents

### Properties

- [data](Document.md#data)
- [error](Document.md#error)
- [extractor](Document.md#extractor)
- [meta](Document.md#meta)

## Properties

### data

• `Optional` **data**: `Object`

Dictionary of <any>

#### Index signature

▪ [propertyName: `string`]: `any`

___

### error

• `Optional` **error**: [`DocumentError`](DocumentError.md)

___

### extractor

• **extractor**: ``"resume"`` \| ``"invoice"`` \| ``"job-description"``

Polymorphic discriminator, which specifies the different types this object can be

___

### meta

• **meta**: [`DocumentMeta`](DocumentMeta.md)
