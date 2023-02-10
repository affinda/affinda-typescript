[@affinda/affinda](../README.md) / [Exports](../modules.md) / ResthookSubscription

# Interface: ResthookSubscription

## Table of contents

### Properties

- [active](ResthookSubscription.md#active)
- [autoDeactivateReason](ResthookSubscription.md#autodeactivatereason)
- [autoDeactivated](ResthookSubscription.md#autodeactivated)
- [event](ResthookSubscription.md#event)
- [id](ResthookSubscription.md#id)
- [organization](ResthookSubscription.md#organization)
- [targetUrl](ResthookSubscription.md#targeturl)
- [version](ResthookSubscription.md#version)

## Properties

### active

• `Optional` **active**: `boolean`

Resthooks only fire for active subscriptions.

___

### autoDeactivateReason

• `Optional` **autoDeactivateReason**: `string`

The reason for the subscription being auto deactivated. May contains the error response that the receiver returned.

___

### autoDeactivated

• `Optional` **autoDeactivated**: `boolean`

Resthook subscriptions can be auto deactivated if the receiver continuously returns error status code over a period of time.

___

### event

• `Optional` **event**: `string`

The event name to subscribe to.

___

### id

• `Optional` **id**: `number`

Resthook subscription's ID.

___

### organization

• `Optional` **organization**: [`Organization`](Organization.md)

___

### targetUrl

• `Optional` **targetUrl**: `string`

URL of the resthook's receiver.

___

### version

• `Optional` **version**: `string`

Version of the resthook subscription. Determines the resthook body being fired.