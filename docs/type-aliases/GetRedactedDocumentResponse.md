[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / GetRedactedDocumentResponse

# Type Alias: GetRedactedDocumentResponse

> **GetRedactedDocumentResponse** = `object`

Contains response data for the getRedactedDocument operation.

## Properties

### blobBody?

> `optional` **blobBody**: `Promise`\<`Blob`\>

BROWSER ONLY

The response body as a browser Blob.
Always `undefined` in node.js.

***

### readableStreamBody?

> `optional` **readableStreamBody**: `NodeJS.ReadableStream`

NODEJS ONLY

The response body as a node.js Readable stream.
Always `undefined` in the browser.
