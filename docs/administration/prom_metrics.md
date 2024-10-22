---
sidebar_position: 8
---

# Prometheus metrics

APIO core exposes metrics in the Prometheus format on core process on port `9090`. These metrics can be used to monitor the APIO core software at platform level (not process level).

:::info

The metrics are exposed on port 9090 with no authentication required. Be sure to protect this port from unauthorized access.

:::

## Activation

The metrics are enabled by adding the argument `-metrics` to the core process command line.

## Sample

```shell
curl http://<host>:9090/metrics
# HELP apio_active_instances_total The total number of active instances
# TYPE apio_active_instances_total gauge
apio_active_instances_total 12671
# HELP apio_instances_errors The number of instances in error
# TYPE apio_instances_errors gauge
apio_instances_errors 2
# HELP apio_instances_per_workflow The number of instances per workflow
# TYPE apio_instances_per_workflow gauge
apio_instances_per_workflow{workflow="debug_116"} 11429
apio_instances_per_workflow{workflow="debug_246"} 11
apio_instances_per_workflow{workflow="demo-sip777"} 2
apio_instances_per_workflow{workflow="nden_cb01"} 3
apio_instances_per_workflow{workflow="pxm_get_numbers"} 2
apio_instances_per_workflow{workflow="reporting_add_report"} 5
apio_instances_per_workflow{workflow="reporting_customer_reports"} 2
apio_instances_per_workflow{workflow="reporting_get_customer"} 1
apio_instances_per_workflow{workflow="reporting_get_report"} 47
apio_instances_per_workflow{workflow="reporting_list_report_history"} 2
apio_instances_per_workflow{workflow="reporting_run"} 1
apio_instances_per_workflow{workflow="user_services"} 7
# HELP apio_reponse_time_avg The average response time over the last minute
# TYPE apio_reponse_time_avg gauge
apio_reponse_time_avg 0
# HELP apio_reponse_time_max The maximum response time over the last minute
# TYPE apio_reponse_time_max gauge
apio_reponse_time_max 0
# HELP apio_requests_http_status The number of HTTP status codes
# TYPE apio_requests_http_status gauge
apio_requests_http_status{status="200"} 229
apio_requests_http_status{status="222"} 1
apio_requests_http_status{status="400"} 2
apio_requests_http_status{status="401"} 15
apio_requests_http_status{status="403"} 16
apio_requests_http_status{status="404"} 11
# HELP apio_requests_total The number of requests
# TYPE apio_requests_total gauge
apio_requests_total 294
# HELP apio_users_total The total number of users
# TYPE apio_users_total gauge
apio_users_total 15
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 0
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0
```