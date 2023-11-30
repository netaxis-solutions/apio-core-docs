---
sidebar_position: 4
---

# Southbound calls

APIO core can be used to trigger calls to external APIs. This is called a southbound call. Those calls includes http, tcp, (s)ftp, sql calls made by workflow instances.

All the calls are logged in the database. So a user can search for activities or issues and see the details of each call.

## Search

- **Host**: The host of the call.
- **Session holder**: The session holder used to make the call.
- **Status**: The status number of the call.
- **Method**: The method of the call.
    - GET, POST, DELETE, PUT: HTTP methods
    - SELECT, INSERT, UPDATE, DELETE: SQL methods
- **URL**:
    - For HTTP calls, the URL of the call.
    - For SQL calls, the statement of the call.

## Results

The results link to the instance and request details. See [Request details](./requests#request-details) for more information.
