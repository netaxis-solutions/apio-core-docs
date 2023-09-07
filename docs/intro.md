---
sidebar_position: 1
---

# Welcome to APIO core engine

APIO core is a simple workflow engine with great extensibility.

## Getting Started

Get started by **creating a new workflow**.

Go to <a href="/../../transactions/config/activities/editor" target="_blank">Activity Editor</a>.

Create a new activity named `demo`.

### Something simple

Add a nodes to prepare a static content.

![add node](img/add-node.png)

![add demo response](img/node-demo-response.png)

Add a node to complete the workflow.

![add demo end](img/node-demo-end.png)

Wire the nodes together.

![wire nodes](img/wire-demo-nodes.png)

Save

![save demo](img/save-activity.png)

## Bind to an HTTP endpoint

### Create a new route endpoint

Go to <a href="/../../transactions/config/startup_events" target="_blank">Startup events</a>.

Create a new route.

![add route](img/route-demo.png)

### Bind to your activity

![bind to activity](img/bind-demo.png)

## Call your endpoint

Call your endpoint with any HTTP client:

```bash
curl http://<host>/api/v01/public/demo
{"message":"hello, world"}
```
