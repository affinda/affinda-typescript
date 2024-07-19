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
const { AffindaCredential, AffindaAPI } = require("@affinda/affinda");
const fs = require("fs");

const credential = new AffindaCredential("REPLACE_TOKEN");
const client = new AffindaAPI(credential);
const readStream = fs.createReadStream("PATH_TO_RESUME.pdf");

client
  .createDocument({ file: readStream })
  .then((result) => {
    console.log("Returned data:");
    console.dir(result);
  })
  .catch((err) => {
    console.log("An error occurred:");
    console.error(err);
  });

// Can also use a URL:

client
  .createDocument({
    url: "https://api.affinda.com/static/sample_resumes/example.docx",
  })
  .then((result) => {
    console.log("Returned data:");
    console.dir(result);
  })
  .catch((err) => {
    console.log("An error occurred:");
    console.error(err);
  });
```

## API reference

A full API reference generated with [typedoc](https://github.com/TypeStrong/typedoc)
is [available here](./docs/modules.md)

## Samples

Samples are available for [NodeJS](./docs/samples_nodejs.md) and also for [javascript](./docs/samples_javascript.md)
intended for use in a browser.

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
