[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIOptionalParams

# Interface: AffindaAPIOptionalParams

Optional parameters.

## Hierarchy

- `ServiceClientOptions`

  ↳ **`AffindaAPIOptionalParams`**

## Table of contents

### Properties

- [$host](AffindaAPIOptionalParams.md#$host)
- [allowInsecureConnection](AffindaAPIOptionalParams.md#allowinsecureconnection)
- [baseUri](AffindaAPIOptionalParams.md#baseuri)
- [credential](AffindaAPIOptionalParams.md#credential)
- [credentialScopes](AffindaAPIOptionalParams.md#credentialscopes)
- [endpoint](AffindaAPIOptionalParams.md#endpoint)
- [httpClient](AffindaAPIOptionalParams.md#httpclient)
- [limit](AffindaAPIOptionalParams.md#limit)
- [offset](AffindaAPIOptionalParams.md#offset)
- [pipeline](AffindaAPIOptionalParams.md#pipeline)
- [proxyOptions](AffindaAPIOptionalParams.md#proxyoptions)
- [redirectOptions](AffindaAPIOptionalParams.md#redirectoptions)
- [requestContentType](AffindaAPIOptionalParams.md#requestcontenttype)
- [retryOptions](AffindaAPIOptionalParams.md#retryoptions)
- [userAgentOptions](AffindaAPIOptionalParams.md#useragentoptions)

## Properties

### $host

• `Optional` **$host**: `string`

server parameter

#### Defined in

[src/models/index.ts:418](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L418)

___

### allowInsecureConnection

• `Optional` **allowInsecureConnection**: `boolean`

Set to true if the request is sent over HTTP instead of HTTPS

#### Inherited from

coreClient.ServiceClientOptions.allowInsecureConnection

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:84

___

### baseUri

• `Optional` **baseUri**: `string`

If specified, this is the base URI that requests will be made against for this ServiceClient.
If it is not specified, then all OperationSpecs must contain a baseUrl property.

#### Inherited from

coreClient.ServiceClientOptions.baseUri

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:637

___

### credential

• `Optional` **credential**: `TokenCredential`

Credential used to authenticate the request.

#### Inherited from

coreClient.ServiceClientOptions.credential

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:650

___

### credentialScopes

• `Optional` **credentialScopes**: `string` \| `string`[]

If specified, will be used to build the BearerTokenAuthenticationPolicy.

#### Inherited from

coreClient.ServiceClientOptions.credentialScopes

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:641

___

### endpoint

• `Optional` **endpoint**: `string`

Overrides client endpoint.

#### Defined in

[src/models/index.ts:424](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L424)

___

### httpClient

• `Optional` **httpClient**: `HttpClient`

The HttpClient that will be used to send HTTP requests.

#### Inherited from

coreClient.ServiceClientOptions.httpClient

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:80

___

### limit

• `Optional` **limit**: `number`

The numbers of documents to return, defaults to 300.

#### Defined in

[src/models/index.ts:420](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L420)

___

### offset

• `Optional` **offset**: `number`

The number of documents to skip before starting to collect the result set.

#### Defined in

[src/models/index.ts:422](https://github.com/affinda/affinda-typescript/blob/716efb7/src/models/index.ts#L422)

___

### pipeline

• `Optional` **pipeline**: `Pipeline`

A customized pipeline to use, otherwise a default one will be created.

#### Inherited from

coreClient.ServiceClientOptions.pipeline

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:654

___

### proxyOptions

• `Optional` **proxyOptions**: `ProxySettings`

Options to configure a proxy for outgoing requests.

#### Inherited from

coreClient.ServiceClientOptions.proxyOptions

#### Defined in

node_modules/@azure/core-rest-pipeline/types/latest/core-rest-pipeline.d.ts:406

___

### redirectOptions

• `Optional` **redirectOptions**: `RedirectPolicyOptions`

Options for how redirect responses are handled.

#### Inherited from

coreClient.ServiceClientOptions.redirectOptions

#### Defined in

node_modules/@azure/core-rest-pipeline/types/latest/core-rest-pipeline.d.ts:410

___

### requestContentType

• `Optional` **requestContentType**: `string`

The default request content type for the service.
Used if no requestContentType is present on an OperationSpec.

#### Inherited from

coreClient.ServiceClientOptions.requestContentType

#### Defined in

node_modules/@azure/core-client/types/latest/core-client.d.ts:646

___

### retryOptions

• `Optional` **retryOptions**: `ExponentialRetryPolicyOptions`

Options that control how to retry failed requests.

#### Inherited from

coreClient.ServiceClientOptions.retryOptions

#### Defined in

node_modules/@azure/core-rest-pipeline/types/latest/core-rest-pipeline.d.ts:402

___

### userAgentOptions

• `Optional` **userAgentOptions**: `UserAgentPolicyOptions`

Options for adding user agent details to outgoing requests.

#### Inherited from

coreClient.ServiceClientOptions.userAgentOptions

#### Defined in

node_modules/@azure/core-rest-pipeline/types/latest/core-rest-pipeline.d.ts:414
