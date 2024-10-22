---
sidebar_position: 6
---

import Image from '@theme/IdealImage';

# Users

Users are the people who can access the APIO core software. They can be local users (stored in the APIO core software database) or external users (managed in an external system).

## Listing

<Image img={require('./img/users.png')} />

## Update user

<Image img={require('./img/update_user.png')} />

### External users

When the user is managed by an external system (IdP mainly), there is no password set and it can't be changed.

### Force change password

When the flag 'Force change password' the user can sign in but is forced to change his password at the next login. No other action is possible until the password is changed.

### 2FA option

The user can choose to enable 2FA and select the method (TOTP or SMS). But the administrator can force the 2FA activation and the method to use. In that case, only the email method can be forced.

### M2M token

An administrator (whatever his level) may regenerate or remove a user M2M token, but he can't see it. Except if the user represent an entity, in that case, the token is visible and can be copied.

### Login attempts

The last 15 login attempts (succesful or not) are recorded and displayed in the user details.

<Image img={require('./img/login_attempts.png')} />