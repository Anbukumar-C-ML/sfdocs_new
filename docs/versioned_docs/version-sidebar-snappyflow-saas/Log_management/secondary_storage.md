---
sidebar_label: Archival
---
# Secondary Storage
## Overview

Store logs for an extended duration in secondary storage and utilize them later for auditing, troubleshooting, performance tuning, and detecting patterns or anomalies.

## Enable Secondary Storage

By default, secondary storage is deactivated for a plugin/document type, requiring manual activation to enable it.

[Click here](/snappyflow-saas/Log_management/manage_logs#actions) to know how to enable secondary storage for a plugin/document type.

## View Logs in Secondary Storage

<img src="/img/log_management/secondary_storage/image_2.png" /><br/>

1. The Logs stored in the secondary storage can be viewed in the **Secondary Storage** pane of the **Log Management** section.

   <img src="/img/log_management/secondary_storage/image_3.png" />

2. The Secondary Storage pane has two tabs:
   - Live Data
   - Search History

## Live Data

- In the Live Data pane, histogram data up to **30 minutes** before the time of access will be displayed. The first 1000 records for logs are displayed and pagination is enabled for records more than 20.

  

  <img src="/img/log_management/secondary_storage/image_5.png" /><br/>

  

- The logs can be expanded or collapsed to view or copy the logs in a JSON format.

- The user can choose from different log types. The corresponding histogram and log data will be fetched for the changed log type.

  <br/>

  <img src="/img/log_management/secondary_storage/image_4.png" /><br/>

- Zooming on histogram data will fetch the respective zoomed data for histogram and logs. Resetting zoom results in the fetching of data up to the last 30 minutes from the time of access.

## Search History

In the Search History pane, you can access all the logs from the moment secondary storage enabled for the plugin and Document Type. You use the following components of the search history pane to access the logs you require.

#### Log Type

Enable you to filter the logs based on the log type. It simplifies the task of navigating through large volumes of log data, facilitating quicker identification.

#### Search History

The Search History component stores your search activities and retains  them for a specified duration, enabling easy access to previously  searched logs.

#### Filter

The Filter component allows you to set filters for previously searched  logs, facilitating more precise and targeted log retrieval. By utilizing this feature, you can quickly narrow down your search results.

#### Data Range

Specify a particular date range, enabling you to focus on logs generated within that specific timeframe

#### Advance Settings

Enable retention period for the performed searches.

#### Search

Execute a search jobs in the search tab and view matching logs and histogram data for the executed search.



## Search Query Details

To perform a search job, use the provided query syntax.



##### Query Syntax Details

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

