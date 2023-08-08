# API Gateway

## Overview

The APIGateway plugin gathers comprehensive metric data, encompassing  API call volume, request fulfillment, error occurrences, and latency  counts, serving as the ideal solution.

## Prerequisite

To collect metrics of API Gateway, it is necessary to have an IAM Role with CloudWatch access and sfPoller set up within your AWS environment.

[Click here](/docs/snappyflow-saas/sfPoller/aws_setup) to learn more about setting up sfPoller in your AWS environment.

##### Create a Policy to Access API Gateway

1. Sign in to the AWS Management Console and open the IAM console at https://console.aws.amazon.com/iam/.

2. Follow the below steps to create a policy in the IAM console.

   - Navigate to **Access Management > Policies**
   - In the **Create policy** window, go to the **JSON** tab
   - Copy and paste the below-mentioned **JSON code** into the policy editor

          {
            "Version": "2012-10-17",
            "Statement": [
                {
                  "Sid": "VisualEditor0",
                  "Effect": "Allow",
                  "Action": [
                             "apigateway:GET",  
                             "apigateway:GET_RESOURCE", 
                             "apigateway:GET_STAGE", 
                             "apigateway:UPDATE_STAGE" ,
                             ],
                  },
              ],
          }
      
   - Click the `Next: Tags` > `Next: Review` button
   - In the **Review policy** window, give the **Name** and **Description** (Optional) for the policy and review the list of permissions
   - Click the `Create policy` button
   - Attach the policy to a dedicated IAM Role for read-only access

## Configure sfPoller to Collect Metrics

Follow the below step to add endpoints and plugins:

<img src="/img/integration/apigateway/image_1.png" />

1. In the **Application** tab of sfPoller, navigate to your **Project** > **Application**.

2. Click the **Application**, it will take you to the `Endpoint` page.

   <img src="/img/integration/apigateway/image_2.png" />

3. Click the `Add Endpoint` button, add the following data, and save.
   - **Service Type**: Select `AWS Service`
   - **Account Name**: `aws`
   - **Endpoint Type**: `APIGateway`
   - **Name**: Give a meaningful name to the endpoint
   - **API Type**: Select an API type (REST, HTTP, WebSocket)
   - **Instance Name**: Give the API ID as instance name

   <img src="/img/integration/apigateway/image_3.png" />

4. In the **Plugins** window, click the `+Add` button.

5. In the **Add Plugin** window, select the below details and save.
   - **Plugin Type**: `Metric`
   - **Plugin**: `cloudwatch-apigateway`
   - **Enable Detailed CloudWatch Metrics (incurs additional costs)**: By default, the status is `Disabled`
   - **Stage Name**: 
   - **Interval**: Choose an interval value. The minimum value for the interval is 300
   - **Status**: By default, the status is `Enabled`

   <img src="/img/integration/apigateway/image_4.png" />

6. Click the global `Save` button in the window's top right corner to save all the changes made so far.

## View API Gateway Metrics

Follow the below steps to view the metrics collected from API Gateway.

1. Go to the **Application** tab in SnappyFlow and navigate to your **Project** > **Application** > **Dashboard**.

2. You can view the database metrics in the **Metrics** section.

:::note

Once plugin is added to sfPoller, they will be automatically detected within the Metrics section. However, if the plugins are not detected, you can import template to view the corresponding metrics.

:::

3. To access the unprocessed data gathered from the plugins, navigate to the **Browse data** section and choose the `Index: Metric`, `Instance: Endpoint`, `Plugin,` and `Document Type`.



#### Template Details

| Template   | Plugin                | Document Type                                                | Description                                                  |
| ---------- | --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| APIGateway | cloudwatch-apigateway | apigatewayHttpApistats, apigatewayRestApiStats, apigatewayWebSocketApiStats | Monitors AWS AuroraDB instance to collect all the cluster-level and instance-level metrics. |



#### Metric List

##### REST API and HTTP API

| Metric                     | Description                                                  |
| :------------------------- | :----------------------------------------------------------- |
| **4XXError**               | The number of client-side errors captured                    |
| **Count**                  | The number of calls to API methods                           |
| **5XXError**               | The number of server-side errors captured.                   |
| **CacheHitCount**          | The number of requests served from the API cache.            |
| **CacheMissCount**         | The number of requests served from the back end when API caching is enabled. |
| average IntegrationLatency | The time in milliseconds between when API Gateway relays a request to the back end and when it receives a response from the back end |
| **average Latency**        | The time in milliseconds between when API Gateway receives a request from a client and when it returns a response to the client. The latency includes the integration latency and other API Gateway overhead. |
| **Dataprocessed**          | The amount of data processed in bytes.                       |



##### WebSocket API

| Metric               | Description                                                  |
| :------------------- | :----------------------------------------------------------- |
| **ConnectCount**     | The number of messages sent to the  connect route integration. |
| **MessageCount**     | The number of messages sent to the WebSocket API, either from or to the client. |
| **IntegrationError** | The number of requests that return a 5XX response from the integration. |
| **ClientError**      | The number of requests that have a 4XX response returned by API Gateway before the integration is invoked. |
| **ExecutionError**   | Errors that occurred when calling the integration.           |







