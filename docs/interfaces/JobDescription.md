[@affinda/affinda](../README.md) / [Exports](../modules.md) / JobDescription

# Interface: JobDescription

## Hierarchy

- [`Document`](Document.md)

  ↳ **`JobDescription`**

## Table of contents

### Properties

- [data](JobDescription.md#data)
- [error](JobDescription.md#error)
- [extractor](JobDescription.md#extractor)
- [meta](JobDescription.md#meta)
- [warnings](JobDescription.md#warnings)

## Properties

### data

• `Optional` **data**: [`JobDescriptionData`](JobDescriptionData.md)

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

• **extractor**: ``"job-description"``

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
