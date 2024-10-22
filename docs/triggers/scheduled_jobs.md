---
sidebar_position: 2
---

# Scheduled jobs

A scheduled job is a job that is executed periodically. It is used to execute a task periodically. (e.g reporting, data synchronization, etc.)

:::info

Scheduled jobs have no owner user. They are executed by the system.

:::

## Definition

![Scheduled job definition](img/new-scheduled-job.png)

| Attribute | Description |
| --------- | ----------- |
| Job id | The id of the job. It is used to identify the job. |
| Enabled | If the job is enabled, it will be executed periodically. |
| Scheduler entry | The expression that defines when the job is executed. |
| Activity | The activity that is executed by the job. |    
| Request body | The request body of the activity. |

:::caution

By default, the scheduler run the tasks in the timezone of the process environment (UTC if it's the standard container).  
But this can be changed by setting the `APIO_TIMEZONE` environment variable (ref. [timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)).  
Then, you should consider the timezone when you define the scheduler entry.

:::