---
sidebar_position: 3 
---
# Monitor Ruby Application on Instance | Windows

## Prerequisite

#### Profile Id

Follow the below steps to get the Profile Id from the Profiles section.

<img src="/img/tracing/image_4.png" />

1. To access the **Profiles** section in SnappyFlow, navigate to the **Manage** tab and click on your profile.

   <img src="/img/tracing/image_5.png" />

2. Navigate to **Archival Infrastructure** section.

   <img src="/img/tracing/image_6.png" />

3. Under the **Kafka Topic  and Secondary Storage** > **Kafka Topic** you can see the 8 digit Profile Id as shown in the above image.

:::note

Copy the **Profile Id** to clipboard and use the same during configuration.

:::

## Configuration

Follow the below steps to enable the monitoring of a Ruby application.

1. Add the following command to the `Gemfile`.

   ```
   gem 'elastic-apm'
   ```

2. Run the following command to install the dependencies.

   ```
   bundle install
   ```

3. Add the following lines of code to the `application.rb` file located inside `config` folder.

   ```ruby
   require "elastic-apm"
   
   # Replace the <service-name>
   config.elastic_apm.service_name = '<service-name>' 
    
   config.elastic_apm.server_url = '<APM-DNS-url>:443/sftrace'
    
   # Replace the <projectName>, <appName>, <profileId>
   config.elastic_apm.global_labels = '_tag_projectName=<projectName>,_tag_appName=<appName>,_tag_profileId=<profileId>'
    
   config.elastic_apm.verify_server_cert = false
    
   config.elastic_apm.central_config = false
   
   ```

:::note

Ensure that the **Project Name** and the **Application Name** in the configuration aligns with the actual project and application you are working with in the user interface.

:::

## View Trace Data

Follow the below steps to view the trace data collected from a Ruby application.

1. Go to the **Application** tab in SnappyFlow and navigate to your **Project** > **Application** > **Dashboard**.

   <img src="/img/tracing/image_7.png" />

2. In the dashboard window, navigate to the **Tracing** section and click the `View Transactions` button.

3. You can view the traces in the **Aggregate** and the **Real Time** tabs.

   <img src="/img/tracing/image_8.png" />

   <br/>

   <img src="/img/tracing/image_9.png" />

   

