---
sidebar_position: 5
---

# Database

## Setup

APIO core software requires a PostgreSQL database to store its data.

The database can be installed on the same server as the APIO core software or on a different server. In the first case, it will require a dedicated mount endpoint to store its data. In the latter case, the database must be accessible from the APIO core software server.

We recommend the usage of the [bitnami PostgreSQL docker image](https://hub.docker.com/r/bitnami/postgresql) to run the database. The documentation can be found [here](https://github.com/bitnami/containers/tree/main/bitnami/postgresql#how-to-use-this-image).

:::caution

APIO core requires the database to be set with the `ETC/UTC` timezone. Docker images provided by bitnami are already set with this timezone. If your setup is different, ensure the timezone is set correctly (command `SHOW TIMEZONE`)

:::

## Replication

Postgresql support streaming replication and the image provided by bitnami support it. The documentation can be found [here](https://github.com/bitnami/containers/tree/main/bitnami/postgresql#setting-up-a-streaming-replication).

:::caution

The replicate(s) are not actually used by the APIO core software. But we highly recommend to setup a replication to avoid data loss.

:::

## Backup

APIO core software doesn't provide any backup feature. However, it is possible to backup the data stored in the database by using the `pg_dump` command.

The `pg_dump` command can be used to backup the database. The following command will create a backup file of the database:

```bash
pg_dump -U postgres -h localhost -p 5432 -d apio > /backups/backup_$(date +%Y%m%d%H%M%S).sql

# or with gzip compression
pg_dump -U postgres -h localhost -p 5432 -d apio | gzip > /backups/backup_$(date +%Y%m%d%H%M%S).sql.gz

# if postgresql is running on docker, do not run the command in the container, but on the host machine (or another machine)
docker compose run --rm postgres pg_dump -U postgres -h localhost -p 5432 -d apio > /backups/backup_$(date +%Y%m%d%H%M%S).sql
```

:::info

The backup doesn't require to stop the APIO core software.

:::

:::caution

The backup file can be very large. It is recommended to compress it.
If the database runs on a docker container, avoid generating the backup file in the container.

:::

## Restore

Whilst the APIO core software is [stopped](setup#put-the-instance-down), the database can be restored from a backup file.

The `psql` command can be used to restore the database. The following command will restore the database from a backup file:

```bash
psql -U postgres -h localhost -p 5432 -d apio < /backups/backup_20210101120000.sql

# or with gzip compression
gunzip -c /backups/backup_20210101120000.sql.gz | psql -U postgres -h localhost -p 5432 -d apio
```
