[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / ResumeRedact

# Interface: ResumeRedact

## Extends

- [`Document`](Document.md)

## Properties

### data?

> `optional` **data**: [`ResumeRedactData`](ResumeRedactData.md)

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

> **extractor**: `"resume-redact"`

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
