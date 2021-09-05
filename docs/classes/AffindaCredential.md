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

#### Defined in

[src/affindaAPICredential.ts:7](https://github.com/affinda/affinda-typescript/blob/12596da/src/affindaAPICredential.ts#L7)

## Properties

### token

• **token**: `string`

#### Defined in

[src/affindaAPICredential.ts:5](https://github.com/affinda/affinda-typescript/blob/12596da/src/affindaAPICredential.ts#L5)

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

[src/affindaAPICredential.ts:11](https://github.com/affinda/affinda-typescript/blob/12596da/src/affindaAPICredential.ts#L11)
