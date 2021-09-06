[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaCredential

# Class: AffindaCredential

## Implements

- `TokenCredential`

## Table of contents

### Constructors

- [constructor](AffindaCredential.md#constructor)

### Properties

- [token](AffindaCredential.md#token)

### Methods

- [getToken](AffindaCredential.md#gettoken)

## Constructors

### constructor

• **new AffindaCredential**(`token`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

## Properties

### token

• **token**: `string`

## Methods

### getToken

▸ **getToken**(`scopes`, `options?`): `Promise`<``null`` \| `AccessToken`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopes` | `string` \| `string`[] |
| `options?` | `GetTokenOptions` |

#### Returns

`Promise`<``null`` \| `AccessToken`\>

#### Implementation of

TokenCredential.getToken
