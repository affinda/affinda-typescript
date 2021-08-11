[affinda](../README.md) / [Exports](../modules.md) / AffindaCredential

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

#### Defined in

src/affindaAPICredential.ts:7

## Properties

### token

• **token**: `string`

#### Defined in

src/affindaAPICredential.ts:5

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

#### Defined in

src/affindaAPICredential.ts:11
