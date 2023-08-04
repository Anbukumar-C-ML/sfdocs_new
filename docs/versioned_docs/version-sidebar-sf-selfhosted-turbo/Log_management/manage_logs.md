# Manage Logs

## Overview
 
By default, all ingested logs are stored in the primary storage for maximum of 7 days. You can access log related data in the **Primary Storage** pane of the **Log Management** section. If you wish to view logs beyond the 7-day retention period, they should be stored in the Secondary Storage.

In the **Manage Logs** pane, you can establish rules for each plugin/document type to determine whether logs should be stored in primary storage or secondary storage.

**Rules**: The rules helps you to enable or disable Primary Storage and Secondary Storage for a `plugin + document type` combination. 
 

## Components of Mange Logs Pane

<img src="/img/log_management/manage_logs/image_1.png" />

**View Project** - Enables you to view, add, edit and delete the rule(s) set for logs at project level.

**View Profile** - Enables you to view add, edit and delete the rule(s) set for logs at profile level.

**User Rules** - Enables you to set rules for logs at plugin level.

**Applied Rules** - Enables you to view the rules set for the logs.

**Refresh** - Enables you the refresh the window.

**Delete** - Enables you to delete rule(s) set for logs.

**Edit** - Enables you to edit rule(s) set for logs.

**Add** - Enables you to add rule(s) set for logs.

**Manage Column** - Enables you to select rules based on the following information: **Created on**, **Last Updated**, **Updated By**.

<img src="/img/log_management/manage_logs/image_2.png" />

**Plugin** - Display the plugin name.

**Document Type** - Display the name of the document type.

**Project** - Displays the project name.

**Application** - Displays the application name.

**Primary Storage** - Displays whether the primary storage is enabled or disabled.

**Secondary Storage** - Displays whether the secondary storage is enabled or disabled.

**Secondary Storage Retention Period** - Displays the retention period of the logs in the secondary storage.

**Status** - Displays the status of the rule either **Applied**, **In progress** and **Pending**.

**Secondary Storage | Size** -  Displays the size of the data stored in the secondary storage.

**Secondary Storage | Started On** - The date and time when the secondary storage is enabled are displayed.

## Actions

Follow the steps give below to add, edit, delete and filter rule(s).

:::note

When multi-select is utilized and pagination is enabled, any changes  made will only affect the rule displayed in the current window or page.

:::

### Add Rule(s)

1. Click the `Add` button.

   <img src="/img/log_management/manage_logs/image_3.png" />

2. In the **Add Rule** window, give the following details:

   - Project Name
   - Application Name
   - Doc Type or Plugin

3. By default, the **Primary Storage** is enabled and the **Secondary Storage** is disabled.

:::note

You have to enable the **Secondary Storage** to send logs and specify the desired retention period for storing them.

:::

<img src="/img/log_management/manage_logs/image_4.png" /> 

<br/>

4. If required enable **Secondary Storage** and set the **Retention Period**.
4. Click the `Add` button to save the rule.

### Edit Rule(s)

:::note

By default, edit option is disabled. It will enable when a rule is selected.

:::

<img src="/img/log_management/manage_logs/image_5.png" /> 

1. Select the rule(s).

2. Click the `Edit` button.

   <img src="/img/log_management/manage_logs/image_6.png" /> 

3. In the **Edit Rule** window, you can modify the information as required.

4. Click the `Save` button the save the changes.

5. The changes will be reflected in the UI.

### Delete Rule(s)

:::note

By default, delete option is disabled. It will enable when a rule is selected. The delete option remains disabled for the default rule.

:::

<img src="/img/log_management/manage_logs/image_8.png" /> 

1. Select the rule(s).

2. Click the `Delete` button.

   <img src="/img/log_management/manage_logs/image_7.png" /> 

3. In the **Delete Rule Confirmation** window, click the `Yes` button.

4. The changes will be reflected in the UI.

### Filter Rule(s)

You have the ability to sort or filter the rules according to plugin, document type, application, and project names. Additionally,  they can utilize multi-select filters for the Primary Storage, Secondary Storage, and Status fields.

1. Click the Filter icon.

   <img src="/img/log_management/manage_logs/image_9.png" /> 

2. In the Add/Edit Filter window, enter the Keyword that need to be filtered and click the Ok button.

   <img src="/img/log_management/manage_logs/image_10.png" /> 

3. The changes will be reflected in the UI.

4. To clear the filter, click the `Clear` option.