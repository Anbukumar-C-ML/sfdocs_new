---
sidebar_position: 3 
---
# OpenID Connect Integration

## Overview

OpenID Connect is a simple identity protocol that enables you to rely on authentication that is performed by an OpenID Connect Provider (OP) to verify the identity of a user accessing your application. OpenID Connect integration with SnappyFlow provides an identity layer to verify end-user accessing SnappyFlow APM.

## Integrate OpenID Connect with SnappyFlow

<img src="/img/integration/idp/image_3.png" />

1. Go to the **Manage** tab in SnappyFlow.

2. Navigate to **Profiles** section > **Profile** > **Identity Providers**.

3. Click the `Add New` button.

   <img src="/img/integration/idp/image_6.png" />

4. In the **Add New Identity Provider** window, add the following details:
   - **Type**: Select the type as `Open ID Connect`
   - **Name**:  Give a unique name
   - **Domain**, **Client ID** and **Client Secret**

:::note

Domain, Client ID and Client Secret will be provided by your OpenID Connect provider.

:::

5. Click the `Add` button.
5. An Unique Login URL will be generated.

:::note
The admin can share the **Unique Login URL** to the team and the members can login via **Unique Login URL** .
:::
