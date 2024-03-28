---
sidebar_position: 6
---

# Users

Users are the people who can access the APIO core software. They can be local users (stored in the APIO core software database) or external users (managed in an external system).

## Listing

![Users](img/users.png)

## Update user

![Update user](img/update_user.png)

### External users

When the user is managed by an external system (IdP mainly), there is no password set and it can't be changed.

### Force change password

When the flag 'Force change password' the user can sign in but is forced to change his password at the next login. No other action is possible until the password is changed.

### M2M token

An administrator (whatever his level) may regenerate or remove a user M2M token, but he can't see it. Except if the user represent an entity, in that case, the token is visible and can be copied.
