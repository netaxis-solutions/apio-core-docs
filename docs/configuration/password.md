---
sidebar_position: 8
---

import Image from '@theme/IdealImage';

# Password

Password rules for APIO core users can be configured here.

<Image img={require('./img/password.png')} />

| Attribute | Description |
| --------- | ----------- |
| Min length | The minimum length of the password. |
| Lowercase | The minimum number of lowercase characters. |
| Uppercase | The minimum number of uppercase characters. |
| Digits | The minimum number of digits. |
| Special | The minimum number of special characters. |
| History | The number of previous passwords to remember. |
| Min. entropy | The minimum entropy of the password. |
| Cannot contain the username | Whether the password can contain the username. |
| Cannot be an old password reversed | Whether the password can be an old password reversed. |
| Check against weak passwords | Whether the password should be checked against a list of weak passwords. |
| Weak passwords | The list of weak passwords. |
| Force user to change password if their current password is weak | Whether the user should be forced to change their password if it is weak (regarding the password rules currently set). |