---
sidebar_position: 3 
---
# Monitor Ruby Application in Kubernetes

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

2. Run the following command  to install the dependencies.

   ```
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
   

:::note

The values mentioned in the above configuration will be passed through the environment variables from the docker file.

:::

4. Build a docker image using the above configuration and push the image to the docker hub repository.

### Standard Deployment

To deploy the application using standard deployment method, do the following:

Add the `SERVICE_NAME`, `APM_SERVER_URL`, `PROJECT_NAME`, `APP_NAME`, `PROFILE_ID` as environmental variables in the `deployment.yaml` file. 

**Example configuration**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rails-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: rails-app
  template:
    metadata:
      labels:
        app: rails-app
    spec:
      containers:
        - name: rails-app
          image: ruby-on-rails:restapiApp
          env:
            - name: SERVICE_NAME
              value: <service-name>
            - name: APM_SERVER_URL
              value: <APM DNS>:443/sftrace
            - name: PROJECT_NAME
              value: <project-name>
            - name: APP_NAME
              value: <app-name>
            - name: PROFILE_ID
              value: <profile-id>

```



### Helm Chart Deployment

Do the following to deploy the application using Helm chart deployment.

1. Add the `service-name`, `APM-DNS`, `project-name`, `app-name`, `profile-id`  under the global section in the `values.yaml` files. 

   **Example configuration**

   ``` yaml
   global:
     sfappname: <app-name>
     sfprojectname: <project-name>
     servicename: <service-name>
     apmserverurl: <APM-DNS>:443/sftrace
     profileid: <profile-id>
   replicaCount: 1
   image:
     repository: ruby-on-rails:restapiApp
     pullPolicy: IfNotPresent
     tag: "latest"
   ```

2. Add the `key-value` from the from the global section of the `value.yaml` file. to the `deployment.yaml` file of the helm chart.

   **Example configuration**

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: rails-app
   spec:
     replicas: 1
     template:
       spec:
         containers:
           - name: rails-app
             image: ruby-on-rails:restapiApp
             env:
             - name: APM_SERVER_URL
               value: {{ .Values.global.apmserverurl }}
             - name: SERVICE_NAME
               value: {{ .Values.global.servicename }}
             - name: PROJECT_NAME
               value: {{ .Values.global.sfprojectname }}
             - name: APP_NAME
               value: {{ .Values.global.sfappname }}
             - name: PROFILE_ID
               value: {{ .Values.global.profileid }}
   ```
   


## View Trace Data

Follow the below steps to view the trace data collected from a Ruby application.

1. Go to the **Application** tab in SnappyFlow and navigate to your **Project** > **Application** > **Dashboard**.

   <img src="/img/tracing/image_7.png" />

2. In the dashboard window, navigate to the **Tracing** section and click the `View Transactions` button.

3. You can view the traces in the **Aggregate** and the **Real Time** tabs.

   <img src="/img/tracing/image_8.png" />

   <br/>

   <img src="/img/tracing/image_9.png" />

   
