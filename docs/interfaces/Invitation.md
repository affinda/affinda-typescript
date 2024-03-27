[@affinda/affinda](../README.md) / [Exports](../modules.md) / Invitation

# Interface: Invitation

## Table of contents

### Properties

- [createdDt](Invitation.md#createddt)
- [email](Invitation.md#email)
- [expiryDate](Invitation.md#expirydate)
- [identifier](Invitation.md#identifier)
- [invitedBy](Invitation.md#invitedby)
- [organization](Invitation.md#organization)
- [respondedBy](Invitation.md#respondedby)
- [role](Invitation.md#role)
- [status](Invitation.md#status)

## Properties

### createdDt

• `Optional` **createdDt**: `Date`

___

### email

• `Optional` **email**: `string`

The email which the invitation is sent to.

___

### expiryDate

• `Optional` **expiryDate**: `Date`

The date after which the invitation expires. Default is 10 days from now.

___

### identifier

• `Optional` **identifier**: `string`

Uniquely identify an invitation.

___

### invitedBy

• `Optional` **invitedBy**: [`User`](User.md)

___

### organization

• `Optional` **organization**: [`Organization`](Organization.md)

___

### respondedBy

• `Optional` **respondedBy**: [`InvitationRespondedBy`](InvitationRespondedBy.md)

___

### role

• `Optional` **role**: `string`

___

### status

• `Optional` **status**: `string`
