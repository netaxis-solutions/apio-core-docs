"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome to APIO core engine","href":"/apio-core-docs/docs/intro","docId":"intro","unlisted":false},{"type":"link","label":"Authentication","href":"/apio-core-docs/docs/auth","docId":"auth","unlisted":false},{"type":"category","label":"Workflows","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Nodes","href":"/apio-core-docs/docs/workflows/nodes","docId":"workflows/nodes","unlisted":false},{"type":"link","label":"Templates","href":"/apio-core-docs/docs/workflows/templates","docId":"workflows/templates","unlisted":false},{"type":"link","label":"Zen","href":"/apio-core-docs/docs/workflows/zen","docId":"workflows/zen","unlisted":false},{"type":"category","label":"Advanced","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Manual actions","href":"/apio-core-docs/docs/workflows/advanced/manual_actions","docId":"workflows/advanced/manual_actions","unlisted":false},{"type":"link","label":"Entities","href":"/apio-core-docs/docs/workflows/advanced/entities","docId":"workflows/advanced/entities","unlisted":false},{"type":"link","label":"Versions","href":"/apio-core-docs/docs/workflows/advanced/versioning","docId":"workflows/advanced/versioning","unlisted":false}],"href":"/apio-core-docs/docs/category/advanced"}],"href":"/apio-core-docs/docs/category/workflows"},{"type":"category","label":"Triggers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Custom routes","href":"/apio-core-docs/docs/triggers/custom_routes","docId":"triggers/custom_routes","unlisted":false},{"type":"link","label":"Scheduled jobs","href":"/apio-core-docs/docs/triggers/scheduled_jobs","docId":"triggers/scheduled_jobs","unlisted":false},{"type":"link","label":"Bulks","href":"/apio-core-docs/docs/triggers/bulk","docId":"triggers/bulk","unlisted":false}],"href":"/apio-core-docs/docs/category/triggers"},{"type":"category","label":"Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"HTTP clients (a.k.a Gateways)","href":"/apio-core-docs/docs/configuration/gateways","docId":"configuration/gateways","unlisted":false},{"type":"link","label":"TCP","href":"/apio-core-docs/docs/configuration/tcp","docId":"configuration/tcp","unlisted":false},{"type":"link","label":"Data stores","href":"/apio-core-docs/docs/configuration/data stores","docId":"configuration/data stores","unlisted":false},{"type":"link","label":"Gui","href":"/apio-core-docs/docs/configuration/gui","docId":"configuration/gui","unlisted":false},{"type":"link","label":"SMTP","href":"/apio-core-docs/docs/configuration/smtp","docId":"configuration/smtp","unlisted":false},{"type":"link","label":"SMPP","href":"/apio-core-docs/docs/configuration/smpp","docId":"configuration/smpp","unlisted":false},{"type":"link","label":"Provisioning","href":"/apio-core-docs/docs/configuration/provisioning","docId":"configuration/provisioning","unlisted":false},{"type":"link","label":"Password","href":"/apio-core-docs/docs/configuration/password","docId":"configuration/password","unlisted":false},{"type":"link","label":"SSO","href":"/apio-core-docs/docs/configuration/sso","docId":"configuration/sso","unlisted":false},{"type":"link","label":"Alarms","href":"/apio-core-docs/docs/configuration/alarms","docId":"configuration/alarms","unlisted":false},{"type":"link","label":"Cleanup","href":"/apio-core-docs/docs/configuration/cleanup","docId":"configuration/cleanup","unlisted":false},{"type":"link","label":"License","href":"/apio-core-docs/docs/configuration/licenses","docId":"configuration/licenses","unlisted":false},{"type":"link","label":"Environment variables","href":"/apio-core-docs/docs/configuration/env","docId":"configuration/env","unlisted":false},{"type":"link","label":"Cache","href":"/apio-core-docs/docs/configuration/cache","docId":"configuration/cache","unlisted":false}],"href":"/apio-core-docs/docs/category/configuration"},{"type":"category","label":"History","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Requests","href":"/apio-core-docs/docs/history/requests","docId":"history/requests","unlisted":false},{"type":"link","label":"Scheduled jobs","href":"/apio-core-docs/docs/history/scheduled_jobs","docId":"history/scheduled_jobs","unlisted":false},{"type":"link","label":"Timers","href":"/apio-core-docs/docs/history/timers","docId":"history/timers","unlisted":false},{"type":"link","label":"Southbound calls","href":"/apio-core-docs/docs/history/southbound_calls","docId":"history/southbound_calls","unlisted":false}],"href":"/apio-core-docs/docs/category/history"},{"type":"category","label":"Administration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setup","href":"/apio-core-docs/docs/administration/setup","docId":"administration/setup","unlisted":false},{"type":"link","label":"Server configuration","href":"/apio-core-docs/docs/administration/server_configuration","docId":"administration/server_configuration","unlisted":false},{"type":"link","label":"Webhooks","href":"/apio-core-docs/docs/administration/webhooks","docId":"administration/webhooks","unlisted":false},{"type":"link","label":"Templates","href":"/apio-core-docs/docs/administration/templates","docId":"administration/templates","unlisted":false},{"type":"link","label":"Database","href":"/apio-core-docs/docs/administration/database","docId":"administration/database","unlisted":false},{"type":"link","label":"Users","href":"/apio-core-docs/docs/administration/users","docId":"administration/users","unlisted":false}],"href":"/apio-core-docs/docs/category/administration"},{"type":"link","label":"Migrations","href":"/apio-core-docs/docs/migrations","docId":"migrations","unlisted":false}]},"docs":{"administration/database":{"id":"administration/database","title":"Database","description":"Setup","sidebar":"tutorialSidebar"},"administration/server_configuration":{"id":"administration/server_configuration","title":"Server configuration","description":"Most configuration sits in the database, only a few parameters are stored as environment variables.","sidebar":"tutorialSidebar"},"administration/setup":{"id":"administration/setup","title":"Setup","description":"Requirements","sidebar":"tutorialSidebar"},"administration/templates":{"id":"administration/templates","title":"Templates","description":"Templates are a way to centralise and to define a text or a document with placeholders usable by workflows and some features of the APIO core.","sidebar":"tutorialSidebar"},"administration/users":{"id":"administration/users","title":"Users","description":"Users are the people who can access the APIO core software. They can be local users (stored in the APIO core software database) or external users (managed in an external system).","sidebar":"tutorialSidebar"},"administration/webhooks":{"id":"administration/webhooks","title":"Webhooks","description":"Some requests processed by APIO core can trigger webhooks. A webhook is a HTTP request sent to a specific URL. The URL is configured in the Webhooks section of the settings menu.","sidebar":"tutorialSidebar"},"auth":{"id":"auth","title":"Authentication","description":"APIO core supports multiple authentication mechanisms. You can use them to authenticate your users and to authenticate your API calls.","sidebar":"tutorialSidebar"},"configuration/alarms":{"id":"configuration/alarms","title":"Alarms","description":"APIO core can send alarms reports with emails.","sidebar":"tutorialSidebar"},"configuration/cache":{"id":"configuration/cache","title":"Cache","description":"APIO core nodes can use a Redis server or its internal memory to cache some data.","sidebar":"tutorialSidebar"},"configuration/cleanup":{"id":"configuration/cleanup","title":"Cleanup","description":"APIO core can cleanup the history data in the database automatically.","sidebar":"tutorialSidebar"},"configuration/data stores":{"id":"configuration/data stores","title":"Data stores","description":"APIO core supports multiple data stores. You can use them to interract with external databases directly from workflows.","sidebar":"tutorialSidebar"},"configuration/env":{"id":"configuration/env","title":"Environment variables","description":"APIO core can be configured with environment variables.","sidebar":"tutorialSidebar"},"configuration/gateways":{"id":"configuration/gateways","title":"HTTP clients (a.k.a Gateways)","description":"APIO core engine can keep client sessions with multiple servers. Each client is identified by a unique name. The session_holder name is used to identify the client in the HTTP calls nodes (e.g HTTP call node).","sidebar":"tutorialSidebar"},"configuration/gui":{"id":"configuration/gui","title":"Gui","description":"The APIO core comes with a GUI that allows you to manage the APIO core. This GUI may hide/expose some features of the APIO core.","sidebar":"tutorialSidebar"},"configuration/licenses":{"id":"configuration/licenses","title":"License","description":"APIO core has a proprietary license. License are delivered by Netaxis support team and are valid for a specific period of time.","sidebar":"tutorialSidebar"},"configuration/password":{"id":"configuration/password","title":"Password","description":"Password rules for APIO core users can be configured here.","sidebar":"tutorialSidebar"},"configuration/provisioning":{"id":"configuration/provisioning","title":"Provisioning","description":"When APIO core is integrated with Broadsoft (gateway(s)), it may be used to provision the Broadsoft platform via a Provisioning ui.","sidebar":"tutorialSidebar"},"configuration/smpp":{"id":"configuration/smpp","title":"SMPP","description":"APIO core engine can use an SMPP server to send sms from workflows.","sidebar":"tutorialSidebar"},"configuration/smtp":{"id":"configuration/smtp","title":"SMTP","description":"APIO core engine can use an SMTP server to send emails either from workflows or from internal processes (e.g. Two-Factor Authentication, reset password, etc...).","sidebar":"tutorialSidebar"},"configuration/sso":{"id":"configuration/sso","title":"SSO","description":"APIO core supports SSO (Single Sign-On) via a bunch of protocols.","sidebar":"tutorialSidebar"},"configuration/tcp":{"id":"configuration/tcp","title":"TCP","description":"Aside of HTTP clients, APIO core also supports a bunch of other protocols on top of TCP.","sidebar":"tutorialSidebar"},"history/requests":{"id":"history/requests","title":"Requests","description":"Every request sent to APIO core is logged in the database. So a user can see the history of the requests. Search for activities or issues and see the details of each request.","sidebar":"tutorialSidebar"},"history/scheduled_jobs":{"id":"history/scheduled_jobs","title":"Scheduled jobs","description":"","sidebar":"tutorialSidebar"},"history/southbound_calls":{"id":"history/southbound_calls","title":"Southbound calls","description":"APIO core can be used to trigger calls to external APIs. This is called a southbound call. Those calls includes http, tcp, (s)ftp, sql calls made by workflow instances.","sidebar":"tutorialSidebar"},"history/timers":{"id":"history/timers","title":"Timers","description":"","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Welcome to APIO core engine","description":"APIO core is a simple workflow engine with great extensibility.","sidebar":"tutorialSidebar"},"migrations":{"id":"migrations","title":"Migrations","description":"Some versions need some changes to the server configuration or the database.","sidebar":"tutorialSidebar"},"triggers/bulk":{"id":"triggers/bulk","title":"Bulks","description":"Bulk jobs are a way to run a workflow on a set of data. For example, you might want to send an email to all users who signed up in the last week. You can do this by creating a bulk job that runs a job on all users who signed up in the last week.","sidebar":"tutorialSidebar"},"triggers/custom_routes":{"id":"triggers/custom_routes","title":"Custom routes","description":"APIO core supports custom HTTP routes. You can use them to expose your workflows to create your own API calls.","sidebar":"tutorialSidebar"},"triggers/scheduled_jobs":{"id":"triggers/scheduled_jobs","title":"Scheduled jobs","description":"A scheduled job is a job that is executed periodically. It is used to execute a task periodically. (e.g reporting, data synchronization, etc.)","sidebar":"tutorialSidebar"},"workflows/advanced/entities":{"id":"workflows/advanced/entities","title":"Entities","description":"Entities are special nodes that can be used to represent an external process or system which is not managed by APIO but which can interract with the workflow.","sidebar":"tutorialSidebar"},"workflows/advanced/manual_actions":{"id":"workflows/advanced/manual_actions","title":"Manual actions","description":"Manual actions are used to pause the workflow and wait for a user to perform an action.","sidebar":"tutorialSidebar"},"workflows/advanced/versioning":{"id":"workflows/advanced/versioning","title":"Versions","description":"It can be useful to keep track of the different versions of a workflow. For example, you might want to keep a version of a workflow that is currently in production or which you are certain it is working, and a version that is being tested.","sidebar":"tutorialSidebar"},"workflows/nodes":{"id":"workflows/nodes","title":"Nodes","description":"Nodes are the building blocks of a workflow (a.k.a cells).","sidebar":"tutorialSidebar"},"workflows/templates":{"id":"workflows/templates","title":"Templates","description":"Most fields in the nodes can be evaluated as templates. The default template engine is Jinja2 and expose all the buit-in\'s of the language.","sidebar":"tutorialSidebar"},"workflows/zen":{"id":"workflows/zen","title":"Zen","description":"Keep your workflow clean","sidebar":"tutorialSidebar"}}}')}}]);