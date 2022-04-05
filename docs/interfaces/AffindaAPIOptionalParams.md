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

___

### allowInsecureConnection

• `Optional` **allowInsecureConnection**: `boolean`

Set to true if the request is sent over HTTP instead of HTTPS

#### Inherited from

coreClient.ServiceClientOptions.allowInsecureConnection

___

### baseUri

• `Optional` **baseUri**: `string`

If specified, this is the base URI that requests will be made against for this ServiceClient.
If it is not specified, then all OperationSpecs must contain a baseUrl property.

#### Inherited from

coreClient.ServiceClientOptions.baseUri

___

### credential

• `Optional` **credential**: `TokenCredential`

Credential used to authenticate the request.

#### Inherited from

coreClient.ServiceClientOptions.credential

___

### credentialScopes

• `Optional` **credentialScopes**: `string` \| `string`[]

If specified, will be used to build the BearerTokenAuthenticationPolicy.

#### Inherited from

coreClient.ServiceClientOptions.credentialScopes

___

### endpoint

• `Optional` **endpoint**: `string`

Overrides client endpoint.

___

### httpClient

• `Optional` **httpClient**: `HttpClient`

The HttpClient that will be used to send HTTP requests.

#### Inherited from

coreClient.ServiceClientOptions.httpClient

___

### pipeline

• `Optional` **pipeline**: `Pipeline`

A customized pipeline to use, otherwise a default one will be created.

#### Inherited from

coreClient.ServiceClientOptions.pipeline

___

### proxyOptions

• `Optional` **proxyOptions**: `ProxySettings`

Options to configure a proxy for outgoing requests.

#### Inherited from

coreClient.ServiceClientOptions.proxyOptions

___

### redirectOptions

• `Optional` **redirectOptions**: `RedirectPolicyOptions`

Options for how redirect responses are handled.

#### Inherited from

coreClient.ServiceClientOptions.redirectOptions

___

### requestContentType

• `Optional` **requestContentType**: `string`

The default request content type for the service.
Used if no requestContentType is present on an OperationSpec.

#### Inherited from

coreClient.ServiceClientOptions.requestContentType

___

### retryOptions

• `Optional` **retryOptions**: `ExponentialRetryPolicyOptions`

Options that control how to retry failed requests.

#### Inherited from

coreClient.ServiceClientOptions.retryOptions

___

### userAgentOptions

• `Optional` **userAgentOptions**: `UserAgentPolicyOptions`

Options for adding user agent details to outgoing requests.

#### Inherited from

coreClient.ServiceClientOptions.userAgentOptions
