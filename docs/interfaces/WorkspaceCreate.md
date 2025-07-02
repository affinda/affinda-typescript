[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / WorkspaceCreate

# Interface: WorkspaceCreate

## Properties

### documentSplitter?

> `optional` **documentSplitter**: `string`

Uniquely identify a document splitter.

***

### name

> **name**: `string`

***

### organization

> **organization**: `string`

Uniquely identify an organization.

***

### rejectDuplicates?

> `optional` **rejectDuplicates**: `string`

If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings.

***

### rejectInvalidDocuments?

> `optional` **rejectInvalidDocuments**: `boolean`

If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed.

***

### visibility?

> `optional` **visibility**: `string`

Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace.

***

### whitelistIngestAddresses?

> `optional` **whitelistIngestAddresses**: `string`[]

If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info".
