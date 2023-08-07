---
sidebar_position: 3 
---


# Monitor Ruby Application in Docker

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

1. Add the following command in the `Gemfile`.

   ```ruby
   gem 'elastic-apm'
   ```

2. Run the following command to install the dependencies.

   ```ruby
   bundle install
   ```

3. Add the following lines of code to the `application.rb` file located inside  `config` folder.

   ```ruby
   require "elastic-apm"
   
   config.elastic_apm.service_name = ENV['SERVICE_NAME']
   
   config.elastic_apm.server_url = ENV['APM_SERVER_URL']
   
   config.elastic_apm.global_labels = "_tag_projectName=#{ENV['PROJECT_NAME']},_tag_appName=#{ENV['APP_NAME']},_tag_profileId=#{ENV['PROFILE_ID']}"
   
   config.elastic_apm.verify_server_cert= false
   
   config.elastic_apm.central_config= false
   
   ```
   <br/>
   
   :::note
   The values mentioned in the above configuration will be passed through the environment variables from the docker file.
   :::
   
4. Add the below given **Environment Variables** to the docker file.

      ```docker
      ENV SERVICE_NAME=<service-name>
      ENV APM_SERVER_URL=<APM DNS>:443/sftrace 
      ENV PROJECT_NAME=<project-name> 
      ENV APP_NAME=<app-name>
      ENV PROFILE_ID=<profile-id>
      ```
   
5. Rebuild the docker image.


## View Trace Data

1. Go to the **Application** tab in SnappyFlow and navigate to your **Project** > **Application** > **Dashboard**.

   <img src="/img/tracing/image_7.png" />

2. In the dashboard window, navigate to the **Tracing** section and click the `View Transactions` button.

3. You can view the traces in the **Aggregate** and the **Real Time** tabs.

   <img src="/img/tracing/image_8.png" />

   <br/>

   <img src="/img/tracing/image_9.png" />

   
