[@affinda/affinda](../README.md) / [Exports](../modules.md) / ResumeRedact

# Interface: ResumeRedact

## Hierarchy

- [`Document`](Document.md)

  ↳ **`ResumeRedact`**

## Table of contents

### Properties

- [data](ResumeRedact.md#data)
- [error](ResumeRedact.md#error)
- [extractor](ResumeRedact.md#extractor)
- [meta](ResumeRedact.md#meta)
- [warnings](ResumeRedact.md#warnings)

## Properties

### data

• `Optional` **data**: [`ResumeRedactData`](ResumeRedactData.md)

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

• **extractor**: ``"resume-redact"``

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
