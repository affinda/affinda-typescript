# Typescript Client Library for Affinda Resume Parser API

![affinda logo](https://api.affinda.com/static/documentation/affinda_logo_light.png)
[![license](https://img.shields.io/github/license/affinda/affinda-typescript)](https://choosealicense.com/licenses/mit/)

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/affinda/affinda-typescript)

- [Installation](#installation)
- [Quickstart](#quickstart)
- [API reference](#api-reference)
- [Samples](#samples)
- [Troubleshooting](#troubleshooting)

Generated using [autorest](https://github.com/Azure/autorest)
and [autorest.typescript](https://github.com/Azure/autorest.typescript).

[Package (NPM)](https://www.npmjs.com/package/@affinda/affinda)

## Installation

```bash
npm install @affinda/affinda
```

## API Version Compatibility

The Affinda API is currently on `v3`, with breaking changes meant the release of new versions of the client library.
Please see below for which versions are compatible with which API version.

| Affinda API version | `affinda-typescript` versions |
| ------------------- | ----------------------------- |
| v2                  | 0.1.0 - 5.x.x                 |
| v3                  | \>= 6.x.x                     |

## Quickstart

Before using the API, you need to create an account, setup a workspace, and obtain an API key. Follow the steps in our [documentation](https://docs.affinda.com/docs/getting-started-with-affinda).

### Currently supported environments

- [LTS versions of Node.js](https://nodejs.org/about/releases/)
- Latest versions of Safari, Chrome, Edge, and Firefox.

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

Example parsing a resume:

```javascript
import { AffindaAPI, AffindaCredential } from "@affinda/affinda";
import * as fs from "fs";

const credential = new AffindaCredential("YOUR_API_KEY");
const client = new AffindaAPI(credential);

const file = fs.createReadStream("resume.pdf");

client
  .createDocument({
    file,
    workspace: "YOUR_WORKSPACE_IDENTIFIER",
  })
  .then(doc => {
    console.log("Parsed data:", doc.data);
  })
  .catch(err => console.error("Error:", err));
```

## Typescript interfaces

You can generate typescript interfaces to help with consuming the API response in a type-safe way.

Use the `affinda-generate-interfaces` command to auto-generate typescript interfaces from your document type configuration.

For example, this will generate typescript interfaces for your "Resume Parser" document type:

```bash
# Assuming your Resume Parser document type ID is "rLERIsHk"
npm exec affinda-generate-interfaces -- --document-type-id=rLERIsHk
```

You will be prompted for your API key, unless you already have the `AFFINDA_API_KEY` environment variable set.

The generated typescript interfaces will be in `./affinda-interfaces` by default.

For all the options you can use, run:

```bash
npm exec affinda-generate-interfaces -- --help
```

## API reference

A full API reference generated with [typedoc](https://github.com/TypeStrong/typedoc)
is [available here](./docs/globals.md)

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and
responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by
calling `setLogLevel` in the `@azure/logger`:

```javascript
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at
the [@azure/logger](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/core/logger) package docs.
