[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / Resume

# Interface: Resume

## Extends

- [`Document`](Document.md)

## Properties

### data?

> `optional` **data**: [`ResumeData`](ResumeData.md)

A JSON-encoded string of the `ResumeData` object.

#### Overrides

[`Document`](Document.md).[`data`](Document.md#data)

***

### error?

> `optional` **error**: [`DocumentError`](DocumentError.md)

#### Inherited from

[`Document`](Document.md).[`error`](Document.md#error)

***

### extractor

> **extractor**: `"resume"`

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
