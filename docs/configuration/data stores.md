---
sidebar_position: 3
---

# Data stores

APIO core supports multiple data stores. You can use them to interract with external databases directly from workflows.

Currently only 2 data stores are supported.

| DBMS | DSN |
| ---- | --- |
| MySQL | mysql://user:password@host:port/database |
| PostgreSQL | postgres://user:password@host:port/database |

:::caution

If username and passwords contain special characters, you should URL encode them.<br />
Plus, passwords are obfuscated using `********`, so you can update them without revealing the original password.

:::