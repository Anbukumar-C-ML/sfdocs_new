# Getting Started

## Setup Self-Hosted SnappyFlow

- SnappyFlow can be deployed in
  
  - Your on-prem data center
  
  - AWS cloud
  
  - Azure cloud

- Deployment can be automated using templates and scripts provided by SnappyFlow 

- SnappyFlow self-hosted lite version takes ingest rates up to 500 GB/Day
  
- For seeting up SnappyFlow in AWS or Azure [click here](/docs/selfhosted-lite/category/setup-snappyflow-self-hosted-lite). 

- For ingest rates above 500 GB/Day, please reach out to [support@snappyflow.io](mailto:support@snappyflow.io). A support engineer will understand your data ingest rates and provide an appropriately sized solution 

## Important terminologies and concepts

[sfAgent](#sfagent)

[sfPoller](#sfpoller)

[sfPod](#sfpod)

[sfKubeAgent](#sfkubeagent)

[Profile Key](#profile-key)

[Tagging Approach](#tagging-approach)

## sfAgent

Monitoring of applications running on VM or bare-metal requires installation of a lightweight agent called sfAgent. sfAgent provides following features: 

- Discovery of services
- Auto-recommendation of monitoring configuration based on discovered services
- Monitoring of various services based on specified configurations 
- Log parsing and collection
- Orchestration of tracing (check out [sfTracing](/docs/selfhosted-lite/category/tracing) for details)

**Installation procedures**

- For [sfAgent on Linux](/docs/selfhosted-lite/Quick_Start/sfagent_linux) 
- For [sfAgent on Windows](/docs/selfhosted-lite/Quick_Start/sfagent_windows)

## sfPod

Daemon set installed on Kubernetes cluster and monitors the following elements: 

- Host, Pod & Container metrics 
- Resources such as deployments, Daemon Sets etc. 
- Kubernetes core services metrics 
- Cluster logs 
- Monitor Prometheus exporters running on any of the application pods 

[Procedure for sfPod setup](/docs/selfhosted-lite/integrations/kubernetes/kubernetes_monitoring_with_sfPod)

## sfKubeAgent

sfAgent equivalent and installed as a side-car container within a Kubernetes  pod and can be configured to monitor metrics and logs of other  containers running on pods. 

[Procedure for setting up sfKubeAgent](/docs/selfhosted-lite/integrations/kubernetes/sfkubeagent_installation)

## Profile Key

Every user account has a unique system generated profile key. Data sent by collectors to SnappyFlow need to have the correct profile key and tags to be allowed into SnappyFlow. This key has to be copied by the user and pasted into the configuration file of sfAgent or within sfPoller’s UI

## Tagging Approach

SnappyFlow mandates that all end-points should be assigned two tags - `_tag_projectName` and `_tag_appName`. These tags have to be added to configuration files of sfAgent or within sfPoller’s UI.  Pls see the video that explains how end-points should be organized hierarchically in SnappyFlow and how tags should be assigned

<iframe title="Key Concepts" src="/videos/Key-Concepts-production.mp4" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="true"  autoplay="0"  ></iframe>

## Let's Start Monitoring

Try out one of the simple exercises to familiarize yourself with the product 

##### [Monitor a Linux instance](/docs/selfhosted-lite/Quick_Start/sfagent_linux)

##### [Monitor a Kubernetes Cluster](/docs/selfhosted-lite/Quick_Start/kubernetes_monitoring_with_sfPod)

##### [Monitor a Windows instance](/docs/selfhosted-lite/Quick_Start/sfagent_windows)

##### [Trace an application](/docs/selfhosted-lite/category/tracing)