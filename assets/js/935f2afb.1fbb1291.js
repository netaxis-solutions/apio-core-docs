"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome to APIO core engine","href":"/apio-core-docs/docs/intro","docId":"intro"},{"type":"link","label":"Authentication","href":"/apio-core-docs/docs/auth","docId":"auth"},{"type":"category","label":"Workflows","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Nodes","href":"/apio-core-docs/docs/workflows/nodes","docId":"workflows/nodes"},{"type":"link","label":"Templates","href":"/apio-core-docs/docs/workflows/templates","docId":"workflows/templates"},{"type":"link","label":"Zen","href":"/apio-core-docs/docs/workflows/zen","docId":"workflows/zen"}],"href":"/apio-core-docs/docs/category/workflows"},{"type":"category","label":"Triggers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Custom routes","href":"/apio-core-docs/docs/triggers/custom_routes","docId":"triggers/custom_routes"},{"type":"link","label":"Scheduled jobs","href":"/apio-core-docs/docs/triggers/scheduled_jobs","docId":"triggers/scheduled_jobs"}],"href":"/apio-core-docs/docs/category/triggers"},{"type":"category","label":"Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"HTTP clients (a.k.a Gateways)","href":"/apio-core-docs/docs/configuration/gateways","docId":"configuration/gateways"},{"type":"link","label":"TCP","href":"/apio-core-docs/docs/configuration/tcp","docId":"configuration/tcp"},{"type":"link","label":"Data stores","href":"/apio-core-docs/docs/configuration/data stores","docId":"configuration/data stores"},{"type":"link","label":"Gui","href":"/apio-core-docs/docs/configuration/gui","docId":"configuration/gui"},{"type":"link","label":"SMTP","href":"/apio-core-docs/docs/configuration/smtp","docId":"configuration/smtp"},{"type":"link","label":"SMPP","href":"/apio-core-docs/docs/configuration/smpp","docId":"configuration/smpp"},{"type":"link","label":"Provisioning","href":"/apio-core-docs/docs/configuration/provisioning","docId":"configuration/provisioning"},{"type":"link","label":"Password","href":"/apio-core-docs/docs/configuration/password","docId":"configuration/password"},{"type":"link","label":"SSO","href":"/apio-core-docs/docs/configuration/sso","docId":"configuration/sso"},{"type":"link","label":"Alarms","href":"/apio-core-docs/docs/configuration/alarms","docId":"configuration/alarms"},{"type":"link","label":"Cleanup","href":"/apio-core-docs/docs/configuration/cleanup","docId":"configuration/cleanup"},{"type":"link","label":"License","href":"/apio-core-docs/docs/configuration/licenses","docId":"configuration/licenses"},{"type":"link","label":"Environment variables","href":"/apio-core-docs/docs/configuration/env","docId":"configuration/env"},{"type":"link","label":"Cache","href":"/apio-core-docs/docs/configuration/cache","docId":"configuration/cache"}],"href":"/apio-core-docs/docs/category/configuration"},{"type":"category","label":"History","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Requests","href":"/apio-core-docs/docs/history/requests","docId":"history/requests"},{"type":"link","label":"Scheduled jobs","href":"/apio-core-docs/docs/history/scheduled_jobs","docId":"history/scheduled_jobs"},{"type":"link","label":"Timers","href":"/apio-core-docs/docs/history/timers","docId":"history/timers"}],"href":"/apio-core-docs/docs/category/history"},{"type":"category","label":"Administration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setup","href":"/apio-core-docs/docs/administration/setup","docId":"administration/setup"},{"type":"link","label":"Server configuration","href":"/apio-core-docs/docs/administration/server_configuration","docId":"administration/server_configuration"},{"type":"link","label":"Webhooks","href":"/apio-core-docs/docs/administration/webhooks","docId":"administration/webhooks"}],"href":"/apio-core-docs/docs/category/administration"},{"type":"link","label":"Migrations","href":"/apio-core-docs/docs/migrations","docId":"migrations"}]},"docs":{"administration/server_configuration":{"id":"administration/server_configuration","title":"Server configuration","description":"Most configuration sits in the database, only a few parameters are stored as environment variables.","sidebar":"tutorialSidebar"},"administration/setup":{"id":"administration/setup","title":"Setup","description":"Requirements","sidebar":"tutorialSidebar"},"administration/webhooks":{"id":"administration/webhooks","title":"Webhooks","description":"Some requests processed by APIO core can trigger webhooks. A webhook is a HTTP request sent to a specific URL. The URL is configured in the Webhooks section of the settings menu.","sidebar":"tutorialSidebar"},"auth":{"id":"auth","title":"Authentication","description":"APIO core supports multiple authentication mechanisms. You can use them to authenticate your users and to authenticate your API calls.","sidebar":"tutorialSidebar"},"configuration/alarms":{"id":"configuration/alarms","title":"Alarms","description":"APIO core can send alarms reports with emails.","sidebar":"tutorialSidebar"},"configuration/cache":{"id":"configuration/cache","title":"Cache","description":"APIO core nodes can use a Redis server or its internal memory to cache some data.","sidebar":"tutorialSidebar"},"configuration/cleanup":{"id":"configuration/cleanup","title":"Cleanup","description":"APIO core can cleanup the history data in the database automatically.","sidebar":"tutorialSidebar"},"configuration/data stores":{"id":"configuration/data stores","title":"Data stores","description":"APIO core supports multiple data stores. You can use them to interract with external databases directly from workflows.","sidebar":"tutorialSidebar"},"configuration/env":{"id":"configuration/env","title":"Environment variables","description":"APIO core can be configured with environment variables.","sidebar":"tutorialSidebar"},"configuration/gateways":{"id":"configuration/gateways","title":"HTTP clients (a.k.a Gateways)","description":"APIO core engine can keep client sessions with multiple servers. Each client is identified by a unique name. The session_holder name is used to identify the client in the HTTP calls nodes (e.g HTTP call node).","sidebar":"tutorialSidebar"},"configuration/gui":{"id":"configuration/gui","title":"Gui","description":"The APIO core comes with a GUI that allows you to manage the APIO core. This GUI may hide/expose some features of the APIO core.","sidebar":"tutorialSidebar"},"configuration/licenses":{"id":"configuration/licenses","title":"License","description":"APIO core has a proprietary license. License are delivered by Netaxis support team and are valid for a specific period of time.","sidebar":"tutorialSidebar"},"configuration/password":{"id":"configuration/password","title":"Password","description":"Password rules for APIO core users can be configured here.","sidebar":"tutorialSidebar"},"configuration/provisioning":{"id":"configuration/provisioning","title":"Provisioning","description":"When APIO core is integrated with Broadsoft (gateway(s)), it may be used to provision the Broadsoft platform via a Provisioning ui.","sidebar":"tutorialSidebar"},"configuration/smpp":{"id":"configuration/smpp","title":"SMPP","description":"APIO core engine can use an SMPP server to send sms from workflows.","sidebar":"tutorialSidebar"},"configuration/smtp":{"id":"configuration/smtp","title":"SMTP","description":"APIO core engine can use an SMTP server to send emails either from workflows or from internal processes (e.g. Two-Factor Authentication, reset password, etc...).","sidebar":"tutorialSidebar"},"configuration/sso":{"id":"configuration/sso","title":"SSO","description":"APIO core supports SSO (Single Sign-On) via a bunch of protocols.","sidebar":"tutorialSidebar"},"configuration/tcp":{"id":"configuration/tcp","title":"TCP","description":"Aside of HTTP clients, APIO core also supports a bunch of other protocols on top of TCP.","sidebar":"tutorialSidebar"},"history/requests":{"id":"history/requests","title":"Requests","description":"Every request sent to APIO core is logged in the database. So a user can see the history of the requests. Search for activities or issues and see the details of each request.","sidebar":"tutorialSidebar"},"history/scheduled_jobs":{"id":"history/scheduled_jobs","title":"Scheduled jobs","description":"","sidebar":"tutorialSidebar"},"history/timers":{"id":"history/timers","title":"Timers","description":"","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Welcome to APIO core engine","description":"APIO core is a simple workflow engine with great extensibility.","sidebar":"tutorialSidebar"},"migrations":{"id":"migrations","title":"Migrations","description":"Some versions need some changes to the server configuration or the database.","sidebar":"tutorialSidebar"},"triggers/custom_routes":{"id":"triggers/custom_routes","title":"Custom routes","description":"APIO core supports custom HTTP routes. You can use them to expose your workflows to create your own API calls.","sidebar":"tutorialSidebar"},"triggers/scheduled_jobs":{"id":"triggers/scheduled_jobs","title":"Scheduled jobs","description":"A scheduled job is a job that is executed periodically. It is used to execute a task periodically. (e.g reporting, data synchronization, etc.)","sidebar":"tutorialSidebar"},"workflows/nodes":{"id":"workflows/nodes","title":"Nodes","description":"Nodes are the building blocks of a workflow (a.k.a cells).","sidebar":"tutorialSidebar"},"workflows/templates":{"id":"workflows/templates","title":"Templates","description":"Most fields in the nodes can be evaluated as templates. The template engine is Jinja2 and expose all the buit-in\'s of the language.","sidebar":"tutorialSidebar"},"workflows/zen":{"id":"workflows/zen","title":"Zen","description":"Keep your workflow clean","sidebar":"tutorialSidebar"}}}')}}]);