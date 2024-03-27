[@affinda/affinda](../README.md) / [Exports](../modules.md) / Document

# Interface: Document

## Hierarchy

- **`Document`**

  ↳ [`Resume`](Resume.md)

  ↳ [`Invoice`](Invoice.md)

  ↳ [`JobDescription`](JobDescription.md)

  ↳ [`ResumeRedact`](ResumeRedact.md)

## Table of contents

### Properties

- [data](Document.md#data)
- [error](Document.md#error)
- [extractor](Document.md#extractor)
- [meta](Document.md#meta)
- [warnings](Document.md#warnings)

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

• **extractor**: ``"resume"`` \| ``"invoice"`` \| ``"job-description"`` \| ``"resume-redact"``

Polymorphic discriminator, which specifies the different types this object can be

___

### meta

• **meta**: [`DocumentMeta`](DocumentMeta.md)

___

### warnings

• `Optional` **warnings**: [`DocumentWarning`](DocumentWarning.md)[]
