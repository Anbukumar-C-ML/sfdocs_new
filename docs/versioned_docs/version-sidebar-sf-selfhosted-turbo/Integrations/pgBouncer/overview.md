# Monitoring PgBouncer

## Introduction

**PgBouncer** acts as a connection pool mechanism for **PostgreSQL**. PgBouncer creates a connection pool and enables the application to use the existing connections in the pool to interact with the database. 

The number of PostgreSQL backend processes can be reduced by this mechanism. PgBouncer reduces the resource (memory, backend, fork, etc..) consumption of the PostgreSQL. It also decreases the response time between the client application and the database.

<img src="/img/integration/pgBouncer/image_4.png" />

By integrating PgBouncer with SnappyFlow, you enable SnappyFlow to collect the connection metrics from PgBouncer and visualize them in SnappyFlow's dashboard.

:::note

PgBouncer version 1.12 and above can be monitored.

PgBouncer monitoring is tested on version 1.12.

:::



## Supported Platform

[Instance](/docs/sidebar-sf-selfhosted-turbo/Integrations/pgBouncer/pgBouncer_on_instance) | [Kubernetes](/docs/sidebar-sf-selfhosted-turbo/Integrations/pgBouncer/pgBouncer_in_kubernetes)
