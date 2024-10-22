---
sidebar_position: 4
---

# Templates

Templates are a way to centralise and to define a text or a document with placeholders usable by workflows and some features of the APIO core (like reset password notification emails).

A common use case is to define a template for an email. The template can be used by a workflow to send an email to a user ([Send email template](../workflows/nodes#send-email)).

By convention, the name of the template is a series of words separated by a dot. The template is stored in the database and can be edited in the APIO UI.

## Name resolution order

When the template is not found, the system can fallback to a `default` template if it exists, using a wildcard `*` in the template name.

The system will try to find the template in the following order:

1. The exact template name.
2. The template name with the fewest wildcards matching the number of parts in the name searched.

Few examples:

| Template name | Existing templates | Selected name |
| --- | --- | --- |
| `mails.users.new` | - `mails.*.*` <br/> - `mails.users.*` <br/> - `mails.users.new` | `mails.users.new` |
| `mails.users.new` | - `mails.*.*` <br/> - `mails.users.*` | `mails.users.*` |
| `mails.users.new` | - `mails.*.*` <br/> - `mails.*.new` | `mails.*.new` |
| `mails.users.new` | - `mails.*.*` <br/> - `mails.*.password` | `mails.*.*` |
| `mails.users.new` | - `mails.reports.*` <br/> - `mails.*.password` | *not found* |