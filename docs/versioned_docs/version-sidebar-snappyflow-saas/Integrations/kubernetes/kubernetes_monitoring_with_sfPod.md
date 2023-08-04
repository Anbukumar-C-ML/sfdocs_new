# Monitor Kubernetes with sfPod 

## sfPod overview

sfPod is a collector that is installed on Kubernetes and runs as a DaemonSet on each worker node. It monitors the following elements of a Kubernetes environment: 

- Kubernetes metrics 
  - Cluster metrics 
  - Host metrics 
  - Pod metrics 
  - Container metrics 
  - Events 
  - Kubernetes services health– Kubelet, Kube-Proxy, API Server, Controller Manager, Core DNS 

- Kubernetes cluster logs 
- Poll Prometheus Exporters running on application pods 
- Pod Application Logs 

## sfPod installation

Below is short video explaining the sfPOD installation steps

<iframe title="sfPOD installation" src="https://www.youtube.com/embed/Q4BiVR2nOn4?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="true"></iframe>

### Step 1: Create a Cloud profile 

Create a cloud profile in SnappyFlow (or use an existing profile) and copy the profile key to use it while installing the sfPod in your cluster. 

### Step 2: Add Snappyflow helm chart 

Login to any node that has network connectivity to Kubernetes master node and run the following commands 

```shell
helm repo add snappyflow https://snappyflow.github.io/helm-charts 
helm repo list 
helm repo update 
```
### Step 3: Installing helm chart 



```shell
kubectl create namespace sfagent 
helm install <name> snappyflow/sfagent --set config.project_name=<my-project-name> --set config.app_name=<my-cluster-name> --set config.key=<profile key> --namespace sfagent
```
:::note

`<my-cluster-name>` Replace with any name, Cluster is discovered by this name on the Snappyflow. 

`<profile key>` Replace with key copied from SnappyFlow. 

:::

## Restricted sfPod Configuration 

By default, sfPod is installed with a comprehensive configuration mode that actively monitors all elements. You have the option to choose a limited configuration by using  specific flags, enabling them to monitor either cluster logs or cluster  metrics exclusively. <br/>

### Control Flags

**Cluster Monitoring**

Enable or disable **Cluster Monitoring** by using the following flag.

```
--set config.cluster_monitoring=true/false
```

- `true` enables **Cluster Monitoring.**

- `false` to disables **Cluster Monitoring** and enables **Prometheus Polling** and **Centralized Application Log Monitoring**. <br/>

**Drop Cluster**

Disable **Cluster Monitoring** by using the following flag.

```
--set config.node_agent.drop_cluster_logs=true =>
```

**Document Type**

sfPod organizes data collected by plugin/documentType. Example: pod, node, container, cluster_stats etc.  The detailed list of document types can be viewed in **Browse Data** section of a Kubernetes cluster. You can disable collection of a documentType using the following flag.

```
--set config.<doc_type>= false
```

**App View**

By default, sfPod sends metrics for pods and containers that have `projectName` and `appName` tags to both the `Cluster Index` and `Project  Index`, resulting in duplicated metric data. This feature is enabled to enhance correlation of Application and Infrastructure data. App view feature can be switched-off by using the following flag.

```
--set config.app_view= true
```

**Parsing**

To enable or disable **Single Line Parsing** (skipping multiline log parsers) with supported parser plugins in SnappyFlow, use the following flag.

```
--set node_agent.basic_parsing=On/Off
```

**Metadata**

The Kubernetes cluster efficiently manages the scheduling and deletion of numerous pod and container deployments within a brief timeframe. By default, the metadata server utilized is the `apiserver`. However, to  prevent any potential `apiserver` throttling in a busy cluster, `kubelet`  can be employed. Use the following flag to set the usage of `kubelet` server for retrieving pod/container metadata.

```
--set node_agent.kubelet_for_metadata=On/Off
```

