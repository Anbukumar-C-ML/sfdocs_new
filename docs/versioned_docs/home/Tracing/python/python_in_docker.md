---
sidebar_position: 3 
---
# Python in Docker
**<u>Supported Frameworks</u>** 

**[Django](python_in_docker#django)** | **[Flask](python_in_docker#flask)**

**<u>Standard Library Modules</u>**

**[Script](python_on_instance#script)** | **[Celery](python_on_instance#celery)**

## Django
### Prerequisite

To enable tracing for an application developed by the **Django** framework, **`sf-elastic-apm`** and **`sf-apm-lib` **must be available in your environment. These libraries can be installed by the following methods:

Add the below-mentioned entries in the `requirements.txt` file.

```
sf-elastic-apm==6.7.2
sf-apm-lib==0.1.1
```
**OR**

Install the libraries using CLI.

```
RUN pip install sf-elastic-apm==6.7.2 
RUN pip install sf-apm-lib==0.1.1 
```

### Configuration

Make sure that the project and the application are created in the SnappyFlow Server. [Click here](https://stage-docs.snappyflow.io/docs/RUM/agent_installation/others#create-a-project-in-snappyflow-portal) to know how to create a project and an application in SnappyFlow.

**Add the following entries in `settings.py` file.**

1. Add the following import statement.
   ```
   from sf_apm_lib.snappyflow import Snappyflow 
   import os
   ```

2. Add the following entry in the `INSTALLED_APPS` block.
   ```
   'elasticapm.contrib.django'  
   ```

3. Add the following entry in the `MIDDLEWARE` block.
   ```
   'elasticapm.contrib.django.middleware.TracingMiddleware'
   ```

4. Add the following source code to integrate a Django application with SnappyFlow.
   
   ```
   try: 
       sf = Snappyflow() 
       # Add below part to manually configure the initialization 
       SF_PROJECT_NAME = os.getenv('SF_PROJECT_NAME') 
       SF_APP_NAME = os.getenv('SF_APP_NAME') 
       SF_PROFILE_KEY = os.getenv('SF_PROFILE_KEY') 
       sf.init(SF_PROFILE_KEY, SF_PROJECT_NAME, SF_APP_NAME) 
       # End of manual configuration 
      
       SFTRACE_CONFIG = sf.get_trace_config()
      
       ELASTIC_APM={ 
       # Specify your service name for tracing
           'SERVICE_NAME': "custom-service" ,  
           'SERVER_URL': SFTRACE_CONFIG.get('SFTRACE_SERVER_URL'), 
           'GLOBAL_LABELS': SFTRACE_CONFIG.get('SFTRACE_GLOBAL_LABELS'), 
           'VERIFY_SERVER_CERT': SFTRACE_CONFIG.get('SFTRACE_VERIFY_SERVER_CERT'), 
           'SPAN_FRAMES_MIN_DURATION': SFTRACE_CONFIG.get('SFTRACE_SPAN_FRAMES_MIN_DURATION'), 
           'STACK_TRACE_LIMIT': SFTRACE_CONFIG.get('SFTRACE_STACK_TRACE_LIMIT'), 
           'CAPTURE_SPAN_STACK_TRACES': SFTRACE_CONFIG.get('SFTRACE_CAPTURE_SPAN_STACK_TRACES'), 
           'DJANGO_TRANSACTION_NAME_FROM_ROUTE': True, 
           'CENTRAL_CONFIG': False, 
           'METRICS_INTERVAL': '0s'
       } 
       except Exception as error: 
       print("Error while fetching snappyflow tracing configurations", error)
   ```
   
5. Provide `SF_PROJECT_NAME`, `SF_APP_NAME`, `SF_PROFILE_KEY` as environment variables in the `docker-compose.yml` or `docker stack deployment` file or while using `docker run` command for deployment in the command line. 

   ```docker
    docker run -d -t -i -e SF_PROJECT_NAME='' \  
    -e SF_APP_NAME='' \ 
    -e SF_PROFILE_KEY='' \ 
    -p 80:80 \ 
    --name <container_name> <dockerhub_id/image_name> 
   ```

For more information on setting environment variables in docker refer to: https://docs.docker.com/compose/environment-variables/ 

:::note

If your app is in debug mode (eg: `settings.Debug = true`), then the agent won’t send any tracing data to the SnappyFlow server. You can override it by adding  **`'Debug':True`** configuration in the `ELASTIC_APM` block.

:::

### Verification

Follow the below steps to verify and view the trace data.

1. Login into  SnappyFlow.
2. Go to the **Application** tab.
3. In the **Application** tab, navigate to your **Project** > **Application**.
4. Click the **Application's Dashboard** icon.
5. Navigate to the **Tracing** section and click the `View Transactions` button.
    <img src="/img/Trace_Service_Map.png" />

6. You can view the traces in the **Aggregate** and the **Real Time** tabs.
    <img src="/img/Trace_AggregateTab.png" /><br/>
      <img src="/img/Trace_RealTime.png" /><br/>

### Troubleshoot

1. If the trace data is unavailable in the SnappyFlow server, check the trace configuration in the `settings.py` file.

2. Add the key-value pair in the `ELASTIC_APM` block of the `settings.py` file to enable the debug logs.

   ```
   'DEBUG':'true'
   ```
   
#### Sample Application Code

[Click here](https://github.com/snappyflow/tracing-reference-apps/tree/master/refapp-django) to view the sample application for which the configuration mentioned in the above sections enables the tracing feature.

## Flask

### Prerequisite
To enable tracing for an application developed by the **Flask** framework, **`sf-elastic-apm`** and **`sf-apm-lib` **must be available in your environment. These libraries can be installed by the following methods:

Add the below-mentioned entries in the `requirements.txt` file.
```
sf-elastic-apm[flask]==6.7.2
sf-apm-lib==0.1.1
```
**OR**

Install the libraries using CLI.

 ```
 pip install sf-elastic-apm[flask]==6.7.2 
 pip install sf-apm-lib==0.1.1 
 ```

### Configuration

Make sure that the project and application are created in the SnappyFlow Server. [Click here](https://stage-docs.snappyflow.io/docs/RUM/agent_installation/others#create-a-project-in-snappyflow-portal) to know how to create a project and an application in SnappyFlow.  

**Add the following entries in the `app.py` file.**

1. Add the following import statements.
   ```
   from elasticapm.contrib.flask import ElasticAPM 
   from sf_apm_lib.snappyflow import Snappyflow 
   import os
   ```

2. Add the following source code to integrate a Flask application with SnappyFlow.
   
   ```
   sf = Snappyflow() 
   # Add below part to manually configure the initialization 
   SF_PROJECT_NAME = os.getenv('SF_PROJECT_NAME') 
   SF_APP_NAME = os.getenv('SF_APP_NAME') 
   SF_PROFILE_KEY = os.getenv('SF_PROFILE_KEY') 
   sf.init(SF_PROFILE_KEY, SF_PROJECT_NAME, SF_APP_NAME) 
   # End of manual configuration   
   SFTRACE_CONFIG = sf.get_trace_config()
   app.config['ELASTIC_APM'] = { 
   # Specify your service name for tracing 
   'SERVICE_NAME': 'flask-service', 
   'SERVER_URL': SFTRACE_CONFIG.get('SFTRACE_SERVER_URL'), 
   'GLOBAL_LABELS': SFTRACE_CONFIG.get('SFTRACE_GLOBAL_LABELS'), 
   'VERIFY_SERVER_CERT': SFTRACE_CONFIG.get('SFTRACE_VERIFY_SERVER_CERT'), 
   'SPAN_FRAMES_MIN_DURATION': SFTRACE_CONFIG.get('SFTRACE_SPAN_FRAMES_MIN_DURATION'), 
   'STACK_TRACE_LIMIT': SFTRACE_CONFIG.get('SFTRACE_STACK_TRACE_LIMIT'), 
   'CAPTURE_SPAN_STACK_TRACES': SFTRACE_CONFIG.get('SFTRACE_CAPTURE_SPAN_STACK_TRACES'), 
   'METRICS_INTERVAL': '0s'
       } 
       apm = ElasticAPM(app) 
   ```
3. Provide `SF_PROJECT_NAME`, `SF_APP_NAME`, `SF_PROFILE_KEY` as environment variables in the `docker-compose.yml` or `docker stack deployment` file or while using `docker run` command for deployment in the command line.     

   ```docker
      docker run -d -t -i -e SF_PROJECT_NAME='' \  
     -e SF_APP_NAME='' \ 
     -e SF_PROFILE_KEY='' \ 
     -p 80:80 \ 
     --name <container_name> <dockerhub_id/image_name> 
   ```

For more information on setting environment variables in docker refer to: https://docs.docker.com/compose/environment-variables/ 

:::note

If your app is in debug mode (eg: `app.Debug = true`), then the agent won’t send any tracing data to the SnappyFlow server. You can override it by adding **`'Debug':True`** configuration in the `ELASTIC_APM` block.

:::

### Verification

Follow the below steps to verify and view the trace data.
1. Login into  SnappyFlow.
2. Go to the **Application** tab.
3. In the **Application** tab, navigate to your **Project** > **Application**.
4. Click the **Application's Dashboard** icon.
5. Navigate to the **Tracing** section and click the `View Transactions` button.
    <img src="/img/Trace_Service_Map.png" />

6. You can view the traces in the **Aggregate** and the **Real Time** tabs.
    <img src="/img/Trace_AggregateTab.png" /><br/>
      <img src="/img/Trace_RealTime.png" /><br/>
### Troubleshoot
1. If the trace data is unavailable in the SnappyFlow server, check the trace configuration in the `app.py` file.
2.  Add the key-value pair in the `app.config` block of the `app.py` file to enable the debug logs.

  ```
   'DEBUG':'true'
  ```

## Celery
:::note
  The Celery configuration explained below is based on redis broker.
:::  

### Prerequisite
To enable tracing for an application developed by **Celery, **`sf-elastic-apm`**, **`redis` and `sf-apm-lib` must be available in your environment. 

Install the following requirements.

  ```
pip install sf-elastic-apm==6.7.2 
pip install redis 
pip install sf-apm-lib==0.1.1 
  ```
### Configuration

To setup `elastic apm` client, add the following code at the start of the file where the Celery app is initialized.

   ```
from sf_apm_lib.snappyflow import Snappyflow 
from elasticapm import Client, instrument 
from elasticapm.contrib.celery import register_exception_tracking, register_instrumentation

instrument()

try: 
    sf = Snappyflow() # Initialize Snappyflow. By default intialization will take profileKey, projectName and appName from sfagent config.yaml

    # Add below part to manually configure the initialization 
    SF_PROJECT_NAME = '<SF_PROJECT_NAME>' # Replace with appropriate Snappyflow project name 
    SF_APP_NAME = '<SF_APP_NAME>' # Replace with appropriate Snappyflow app name 
    SF_PROFILE_KEY = '<SF_PROFILE_KEY>' # Replace Snappyflow Profile key 
    sf.init(SF_PROFILE_KEY, SF_PROJECT_NAME, SF_APP_NAME) 
    # End of manual configuration 
       
    SFTRACE_CONFIG = sf.get_trace_config() 
    apm_client = Client(
        service_name= '<Service_Name>', # Specify service name for tracing
        server_url= SFTRACE_CONFIG.get('SFTRACE_SERVER_URL'), 
        global_labels= SFTRACE_CONFIG.get('SFTRACE_GLOBAL_LABELS'), 
        verify_server_cert= SFTRACE_CONFIG.get('SFTRACE_VERIFY_SERVER_CERT')
    )
       
    register_exception_tracking(apm_client) 
    register_instrumentation(apm_client) 
    except Exception as error: 
    print("Error while fetching snappyflow tracing configurations", error)  
   ```
### Verification

Once the instrumentation is done and the Celery worker is running, you can see a trace for each celery task in the Snappyflow server. Follow the below steps to verify and view the traces.

1. Login into  SnappyFlow.
2. Go to the **Application** tab.
3. In the **Application** tab, navigate to your **Project** > **Application**.
4. Click the **Application's Dashboard** icon.
5. Navigate to the **Tracing** section and click the `View Transactions` button.
   <img src="/img/Trace_Service_Map.png" />

6. You can view the traces in the **Aggregate** and the **Real Time** tabs.
   <img src="/img/Trace_AggregateTab.png" /><br/>
     <img src="/img/Trace_RealTime.png" /><br/>

#### Reference Code

Refer complete code: https://github.com/snappyflow/tracing-reference-apps/blob/master/ref-celery/tasks.py 

