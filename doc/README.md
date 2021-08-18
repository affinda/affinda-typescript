affinda / [Exports](modules.md)

![affinda logo](affinda_logo.png)

This is the typescript client for the **Affinda API**
This package contains an isomorphic SDK (runs both in Node.js and in browsers) for Service client.

[Package (NPM)](https://www.npmjs.com/package/affinda) |
[Samples](https://github.com/Azure-Samples/azure-samples-js-management)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://nodejs.org/about/releases/)
- Latest versions of Safari, Chrome, Edge and Firefox.

### Install the `affinda` package

Install the Service client library for JavaScript with `npm`:

```bash
npm install @affinda/affinda
```
or from git:
```shell
git clone git@github.com:affinda/affinda-typescript.git
npm install
npm build
```

## Quickstart

`AffindaAPI` is the primary interface for developers using the Service client library. [Explore the methods on this client object](./docs/classes/AffindaAPI.md) to understand the different features of the Service service that you can access.

Example getting a resume:
```typescript
import {AffindaAPI, AffindaCredential} from "@affinda/affinda";

let credential = new AffindaCredential("<TOKEN>")

const client = new AffindaAPI(credential, {})

client.getResume("<IDENTIFIER>", {}).then(resume => console.log(JSON.stringify(resume)))
```

## API reference

A full API reference generated with [typedoc](https://github.com/TypeStrong/typedoc) is [available here](./docs/modules.md)

## Parser
## Redactor
## Reformatter
