[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / AffindaAPIOptionalParams

# Interface: AffindaAPIOptionalParams

Optional parameters.

## Extends

- `ServiceClientOptions`

## Properties

### additionalPolicies?

> `optional` **additionalPolicies**: `AdditionalPolicyConfig`[]

Additional policies to include in the HTTP pipeline.

#### Inherited from

`coreClient.ServiceClientOptions.additionalPolicies`

***

### agent?

> `optional` **agent**: `Agent`

Options for configuring Agent instance for outgoing requests

#### Inherited from

`coreClient.ServiceClientOptions.agent`

***

### allowInsecureConnection?

> `optional` **allowInsecureConnection**: `boolean`

Set to true if the request is sent over HTTP instead of HTTPS

#### Inherited from

`coreClient.ServiceClientOptions.allowInsecureConnection`

***

### ~~baseUri?~~

> `optional` **baseUri**: `string`

If specified, this is the base URI that requests will be made against for this ServiceClient.
If it is not specified, then all OperationSpecs must contain a baseUrl property.

#### Deprecated

This property is deprecated and will be removed soon, please use endpoint instead

#### Inherited from

`coreClient.ServiceClientOptions.baseUri`

***

### credential?

> `optional` **credential**: `TokenCredential`

Credential used to authenticate the request.

#### Inherited from

`coreClient.ServiceClientOptions.credential`

***

### credentialScopes?

> `optional` **credentialScopes**: `string` \| `string`[]

If specified, will be used to build the BearerTokenAuthenticationPolicy.

#### Inherited from

`coreClient.ServiceClientOptions.credentialScopes`

***

### endpoint?

> `optional` **endpoint**: `string`

Overrides client endpoint.

#### Overrides

`coreClient.ServiceClientOptions.endpoint`

***

### httpClient?

> `optional` **httpClient**: `HttpClient`

The HttpClient that will be used to send HTTP requests.

#### Inherited from

`coreClient.ServiceClientOptions.httpClient`

***

### pipeline?

> `optional` **pipeline**: `Pipeline`

A customized pipeline to use, otherwise a default one will be created.

#### Inherited from

`coreClient.ServiceClientOptions.pipeline`

***

### proxyOptions?

> `optional` **proxyOptions**: `ProxySettings`

Options to configure a proxy for outgoing requests.

#### Inherited from

`coreClient.ServiceClientOptions.proxyOptions`

***

### redirectOptions?

> `optional` **redirectOptions**: `RedirectPolicyOptions`

Options for how redirect responses are handled.

#### Inherited from

`coreClient.ServiceClientOptions.redirectOptions`

***

### region?

> `optional` **region**: `string`

region - server parameter

***

### requestContentType?

> `optional` **requestContentType**: `string`

The default request content type for the service.
Used if no requestContentType is present on an OperationSpec.

#### Inherited from

`coreClient.ServiceClientOptions.requestContentType`

***

### retryOptions?

> `optional` **retryOptions**: `PipelineRetryOptions`

Options that control how to retry failed requests.

#### Inherited from

`coreClient.ServiceClientOptions.retryOptions`

***

### telemetryOptions?

> `optional` **telemetryOptions**: `TelemetryOptions`

Options for setting common telemetry and tracing info to outgoing requests.

#### Inherited from

`coreClient.ServiceClientOptions.telemetryOptions`

***

### tlsOptions?

> `optional` **tlsOptions**: `TlsSettings`

Options for configuring TLS authentication

#### Inherited from

`coreClient.ServiceClientOptions.tlsOptions`

***

### userAgentOptions?

> `optional` **userAgentOptions**: `UserAgentPolicyOptions`

Options for adding user agent details to outgoing requests.

#### Inherited from

`coreClient.ServiceClientOptions.userAgentOptions`
