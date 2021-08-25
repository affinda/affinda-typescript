@affinda/affinda / [Exports](modules.md)

Affinda API - Typescript Client Library
===================================

![affinda logo](https://raw.githubusercontent.com/affinda/affinda-typescript/main/affinda_logo.png)
[![license](https://img.shields.io/github/license/affinda/affinda-typescript)](https://choosealicense.com/licenses/mit/)

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/affinda/affinda-typescript)

- [Installation](#installation)
- [Quickstart](#quickstart)

Generated using [autorest](https://github.com/Azure/autorest) and [autorest.typescript](https://github.com/Azure/autorest.typescript).

[Package (NPM)](https://www.npmjs.com/package/affinda) |
[Samples](https://github.com/Azure-Samples/azure-samples-js-management)

Installation
------------
```bash
npm install @affinda/affinda
```

Quickstart
----------

### Currently supported environments

- [LTS versions of Node.js](https://nodejs.org/about/releases/)
- Latest versions of Safari, Chrome, Edge and Firefox.
- This package contains an isomorphic SDK (runs both in Node.js and in browsers) for Service client.

### Install the `affinda` package

Install the Service client library for JavaScript with `npm`:
```bash
npm install @affinda/affinda
```

or build from source:
```shell
git clone git@github.com:affinda/affinda-typescript.git
npm install
npm build
```

Example getting a resume:
```typescript
import {AffindaAPI, AffindaCredential} from "@affinda/affinda";

let credential = new AffindaCredential("<TOKEN>")

const client = new AffindaAPI(credential, {})

client.getResume("<IDENTIFIER>", {}).then(resume => console.log(JSON.stringify(resume)))
```

## API reference

A full API reference generated with [typedoc](https://github.com/TypeStrong/typedoc) is [available here](./docs/modules.md)

Parser
------

Redactor
--------

Reformatter
-----------
