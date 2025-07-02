[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / ResthookSubscription

# Interface: ResthookSubscription

## Properties

### active

> **active**: `boolean`

Resthooks only fire for active subscriptions.

***

### autoDeactivated

> **autoDeactivated**: `boolean`

Resthook subscriptions can be auto deactivated if the receiver continuously returns error status code over a period of time.

***

### autoDeactivateReason

> **autoDeactivateReason**: `string`

The reason for the subscription being auto deactivated. May contains the error response that the receiver returned.

***

### event

> **event**: `string`

The event name to subscribe to.

***

### id

> **id**: `number`

Resthook subscription's ID.

***

### organization

> **organization**: `null` \| [`Organization`](Organization.md)

***

### targetUrl

> **targetUrl**: `string`

URL of the resthook's receiver.

***

### version

> **version**: `string`

Version of the resthook subscription. Determines the resthook body being fired.

***

### workspace

> **workspace**: `null` \| [`ResthookSubscriptionWorkspace`](ResthookSubscriptionWorkspace.md)
