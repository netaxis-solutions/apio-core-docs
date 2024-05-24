---
sidebar_position: 1
---

# Setup

## Requirements

APIO core platform is a set of microservices that can be deployed on a single server or on multiple servers.

The following requirements are for a single server deployment:

* 4 CPU cores
* 16 GB RAM
* 50 GB disk space

## Installation

You can install APIO core platform on multiple ways:

* Using [docker-compose](#docker-compose) with the official [docker images](https://)
* Using [deb packages](#deb-packages)
* Using [rpm packages](#rpm-packages)

### docker-compose

The below [docker-compose](https://docs.docker.com/compose/) configuration can be used to start an APIO core server with a single proxy.

It relies on a number of environment variables that you must set before running `docker-compose up`. The variables are described below.

```yaml
# docker-compose.yml
version: '3'

services:
  nginx:
    image: nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - static-files:/www/
      - ./etc/nginx.conf:/etc/nginx/conf.d/default.conf
      - /var/log/nginx:/var/log/nginx
    logging:
      driver: syslog
      options:
        tag: "{{.Name}}"

  core:
    image: docker.bxl.netaxis.be/apio_bsft/core:2.14.0
    command: /usr/local/go/server -workflows -port=5000 -host=0.0.0.0 -cleanup
    restart: always
    environment:
      - DB=postgres://<username>:<password>@<hostname>:<port>/<database>
      - VIRTUAL_ENV=/opt/apio_core
    volumes:
      - static-files:/usr/local/www/
      - /var/log/apio:/var/log/apio
    logging:
      driver: syslog
      options:
        tag: "{{.Name}}"

  p1:
    image: docker.bxl.netaxis.be/apio_bsft/core:2.14.0
    command: /usr/local/go/server -workflows -port=5000 -host=0.0.0.0 -proxy=/api/v01/p1:bwks
    restart: always
    environment:
      - DB=postgres://<username>:<password>@<hostname>:<port>/<database>
      - VIRTUAL_ENV=/opt/apio_core
    logging:
      driver: syslog
      options:
        tag: "{{.Name}}"

volumes:
    static-www:
```

If processes run nodes like docker containers they require access to the host machine's Docker daemon:

```yaml
# docker-compose.yml
version: '3'

services:
  [...]
  apio:
    [...]
+   volumes:
+     - /var/run/docker.sock:/var/run/docker.sock

  px1:
    [...]
+   volumes:
+     - /var/run/docker.sock:/var/run/docker.sock
```

#### Scheduler

If the platform needs to run recurrent jobs or timers, the scheduler service must be started:

```yaml
# docker-compose.yml
version: '3'

services:
  [...]
  scheduler:
    image: docker.bxl.netaxis.be/apio_bsft/core:2.14.0
    command: /usr/local/go/scheduler
    restart: always
    environment:
      - SCH_DB=postgres://<username>:<password>@<hostname>:<port>/<database>
      - VIRTUAL_ENV=/opt/apio_core
    logging:
      driver: syslog
      options:
        tag: "{{.Name}}"
```

#### Webhooks

If the platform needs to trigger webhooks, the webhook service must be started:

```yaml
# docker-compose.yml
version: '3'

services:
  [...]
  webhooks:
    image: docker.bxl.netaxis.be/apio_bsft/core:2.14.0
    command: /usr/local/go/webhooks
    restart: always
    environment:
      - WHK_DB=postgres://<username>:<password>@<hostname>:<port>/<database>
    extra_hosts:
      - host.docker.internal:host-gateway
    logging:
      driver: syslog
      options:
        tag: "{{.Name}}"
```

#### Webex Gateway

If the platform needs to interact with a Webex Teams API, the webex gateway service must be started:

```yaml
# docker-compose.yml
version: '3'

services:
  [...]
  webex_gw:
    image: docker.bxl.netaxis.be/apio_bsft/core:2.14.0
    command: /usr/local/go/webex_gw -port=9001 -tokensFile=/opt/tokens/.tokens
    restart: always
    environment:
      - client_id=<client_id>
      - client_secret=<client_secret>
      - redirect_uri=https://<apio-core-host>/api/v01/webex/auth/code
    expose:
      - 9001
    volumes:
      - /opt/webex_gw:/opt/tokens
    logging:
      driver: syslog
      options:
        tag: "{{.Name}}"
```

### rsyslog

```
$FileCreateMode 0644

if $syslogtag contains 'apio_core_p1' then \
  /var/log/apio/px1n.log
  &stop

if $syslogtag contains 'apio_core_core' then \
  /var/log/apio/core.log
  &stop

if $syslogtag contains 'apio_core_webhooks' then \
  /var/log/apio/webhooks.log
  &stop

if $syslogtag contains 'apio_core_webex_gw' then \
  /var/log/apio/webex_gw.log
  &stop

if $syslogtag contains 'apio_core_scheduler' then \
  /var/log/apio/scheduler.log
  &stop

$FileCreateMode 0644
```

### logrotate

```
/var/log/apio/*.log
{
       missingok
       daily
       rotate 30
       notifempty
       copytruncate
       compress
}

/var/log/nginx/*.log
{
	missingok
	daily
	rotate 20
	notifempty
	copytruncate
	compress
	delaycompress
	sharedscripts
	postrotate
		docker-compose -f /opt/apio_core/docker-compose.yml exec nginx nginx -s reload
	endscript
}
```

## Time to start

### The Docker way

```bash
$ docker-compose up -d
```

## Create the first superuser

When the APIO core platform is started for the first time, you must create the first user. This user will be the administrator of the platform.

### The Docker way

```bash
$ docker-compose run --rm core /usr/local/go/server -newsuperuser
```

By default the username is 'netaxis'.

:::caution

The password is automatically generated and displayed in the console. You must copy it and store it in a safe place.

:::

## Put the instance down

### The Docker way

```bash
$ docker-compose down -v
```

## Restart the instance

### The Docker way

```bash
$ docker-compose down -v; docker-compose up -d
```
