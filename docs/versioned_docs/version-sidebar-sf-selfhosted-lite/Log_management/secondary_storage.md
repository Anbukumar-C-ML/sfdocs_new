---
sidebar_label: Archival
---
# Secondary Storage
## Overview

Secondary Storage feature allows you to store logs beyond the retention period. with the help of Secondary  

## Enable Secondary Storage

By default secondary storage is disabled for a pulgin/document type.

[Click here](/docs/Log_management/manage_logs#actions) to know more about adding and editing a rule in Manage Log pane.

:::note

Retention Period can be modified **only if** Secondary Storage is enabled.  By default, retention period is 30 days.

:::

## View Logs in Secondary Storage

1. The Logs stored in the secondary storage can be viewed in the **Secondary Storage** pane of the **Log Management** section.
2. The Secondary Storage pane has two tabs:
   - Live Data
   - Search History

## Live Data

- In the Live Data pane, histogram data up to **30 minutes** before the time of access will be displayed. The first 1000 records for logs are displayed and pagination is enabled for records more than 20.

- The logs can be expanded or collapsed to view or copy the logs in a JSON format.
- The user can choose from different log types. The corresponding histogram and log data will be fetched for the changed log type.
- Zooming on histogram data will fetch the respective zoomed data for histogram and logs. Resetting zoom results in the fetching of data up to the last 30 minutes from the time of access.

## Search History

Log Type

Search History

Filter

Data Range



- The Search history tab, displays the log message 



## Search Query Details



#### Query Syntax Details

| **Operator** | **Description**                  | **Example**                                                  |
| ------------ | -------------------------------- | ------------------------------------------------------------ |
| :            | Key value Search                 | Key:Value                                                    |
| &&           | AND operation                    | Instance_id && responseCode: 400                             |
| \|\|         | OR operation                     | responseCode: 200\|\| requestSuccess: true                   |
| ""           | Phrase searches                  | message: "Recevied Disconnect from"                          |
| >            | Greater than                     | bytes:>8000                                                  |
| <            | Lesser than                      | bytes:<8000                                                  |
| >=           | Greater than or equal            | bytes:>=8000                                                 |
| <=           | Lesser than or equal             | bytes:>=8000                                                 |
| ()           | Grouping                         | (bytes:(>2000 && <=5000) \|\| Latency:>21) && _plugin:jmeter |
| -            | NOT operation                    | _tag_instanceid: (-id1)                                      |
| ?            | Single character wildcard        | _plugin: jmet??                                              |
| *            | Zero or more characters wildcard | message: *exception                                          |
| //           | Pattern searches                 | message: /port [0-9]+/                                       |
| \            | Escape sequence                  | message: sudo\:linux                                         |



## Advance Settings

With the help of Advance Settings option, you can set retention time for the Search History.

