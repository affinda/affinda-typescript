[**@affinda/affinda**](../README.md)

***

[@affinda/affinda](../globals.md) / Invitation

# Interface: Invitation

## Properties

### createdDt?

> `optional` **createdDt**: `Date`

***

### email?

> `optional` **email**: `string`

The email which the invitation is sent to.

***

### expiryDate?

> `optional` **expiryDate**: `Date`

The date after which the invitation expires. Default is 10 days from now.

***

### identifier?

> `optional` **identifier**: `string`

Uniquely identify an invitation.

***

### invitedBy?

> `optional` **invitedBy**: [`User`](User.md)

***

### organization?

> `optional` **organization**: [`Organization`](Organization.md)

***

### respondedBy?

> `optional` **respondedBy**: [`InvitationRespondedBy`](InvitationRespondedBy.md)

***

### role?

> `optional` **role**: `string`

***

### status?

> `optional` **status**: `string`
