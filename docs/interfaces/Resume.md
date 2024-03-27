[@affinda/affinda](../README.md) / [Exports](../modules.md) / Resume

# Interface: Resume

## Hierarchy

- [`Document`](Document.md)

  ↳ **`Resume`**

## Table of contents

### Properties

- [data](Resume.md#data)
- [error](Resume.md#error)
- [extractor](Resume.md#extractor)
- [meta](Resume.md#meta)
- [warnings](Resume.md#warnings)

## Properties

### data

• `Optional` **data**: [`ResumeData`](ResumeData.md)

A JSON-encoded string of the `ResumeData` object.

#### Overrides

[Document](Document.md).[data](Document.md#data)

___

### error

• `Optional` **error**: [`DocumentError`](DocumentError.md)

#### Inherited from

[Document](Document.md).[error](Document.md#error)

___

### extractor

• **extractor**: ``"resume"``

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
