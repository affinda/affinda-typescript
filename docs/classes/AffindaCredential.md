[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / AffindaCredential

# Class: AffindaCredential

## Implements

- `TokenCredential`

## Constructors

### Constructor

> **new AffindaCredential**(`token`): `AffindaCredential`

#### Parameters

##### token

`string`

#### Returns

`AffindaCredential`

## Properties

### token

> **token**: `string`

## Methods

### getToken()

> **getToken**(`scopes`, `options?`): `Promise`\<`null` \| `AccessToken`\>

Gets the token provided by this credential.

This method is called automatically by Azure SDK client libraries. You may call this method
directly, but you must also handle token caching and token refreshing.

#### Parameters

##### scopes

The list of scopes for which the token will have access.

`string` | `string`[]

##### options?

`GetTokenOptions`

The options used to configure any requests this
               TokenCredential implementation might make.

#### Returns

`Promise`\<`null` \| `AccessToken`\>

#### Implementation of

`TokenCredential.getToken`
