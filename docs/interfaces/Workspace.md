[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / Workspace

# Interface: Workspace

## Properties

### collections?

> `optional` **collections**: [`WorkspaceCollectionsItem`](WorkspaceCollectionsItem.md)[]

***

### confirmedDocsCount?

> `optional` **confirmedDocsCount**: `number`

Number of validated documents in the workspace.

***

### documentSplitter?

> `optional` **documentSplitter**: [`WorkspaceDocumentSplitter`](WorkspaceDocumentSplitter.md)

***

### identifier

> **identifier**: `string`

Uniquely identify a workspace.

***

### ingestEmail?

> `optional` **ingestEmail**: `string`

When you send email to this address, any document attached in the body will be uploaded to this workspace.

***

### members?

> `optional` **members**: [`User`](User.md)[]

***

### name?

> `optional` **name**: `string`

***

### organization?

> `optional` **organization**: [`Organization`](Organization.md)

***

### rejectDuplicates?

> `optional` **rejectDuplicates**: `string`

If "true", parsing will fail when the uploaded document is duplicate of an existing document, no credits will be consumed. If "false", will parse the document normally whether its a duplicate or not. If not provided, will fallback to the workspace settings.

***

### rejectInvalidDocuments?

> `optional` **rejectInvalidDocuments**: `boolean`

If true, the uploaded document will be rejected if it's of the wrong document type, or if its document type cannot be determined. No credits will be consumed.

***

### unvalidatedDocsCount?

> `optional` **unvalidatedDocsCount**: `number`

Number of unvalidated documents in the workspace.

***

### visibility?

> `optional` **visibility**: `string`

Visibility "organization" means everyone in the organization can access the workspace. Visibility "private" means only people explicitly added can access the workspace.

***

### whitelistIngestAddresses?

> `optional` **whitelistIngestAddresses**: `string`[]

If specified, only emails from these addresses will be ingested for parsing. Wild cards are allowed, e.g. "*@eyefind.info".
