[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / Document

# Interface: Document

## Extended by

- [`Resume`](Resume.md)
- [`Invoice`](Invoice.md)
- [`JobDescription`](JobDescription.md)
- [`ResumeRedact`](ResumeRedact.md)

## Properties

### data?

> `optional` **data**: `object`

Dictionary of <any>

#### Index Signature

\[`propertyName`: `string`\]: `any`

***

### error?

> `optional` **error**: [`DocumentError`](DocumentError.md)

***

### extractor

> **extractor**: `"resume"` \| `"invoice"` \| `"job-description"` \| `"resume-redact"`

Polymorphic discriminator, which specifies the different types this object can be

***

### meta

> **meta**: [`DocumentMeta`](DocumentMeta.md)

***

### warnings?

> `optional` **warnings**: [`DocumentWarning`](DocumentWarning.md)[]
