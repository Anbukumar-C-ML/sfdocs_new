---
sidebar_position: 3 

---

# Lightweight Directory Access Protocol (LDAP) Integration

## Overview

Lightweight Directory Access Protocol (LDAP) is a communication protocol used to store, update and retrieve data from a directory structure. LDAP integration allows the application to use your existing LDAP server as the primary source of user data.

## Integrate LDAP with SnappyFlow

<img src="/img/integration/idp/image_3.png" />

1. Go to the **Manage** tab in SnappyFlow.

2. Navigate to **Profiles** section > **Profile** > **Identity Providers**.

3. Click the `Add New` button

   <img src="/img/integration/idp/image_4.png" />

4. In the **Add New Identity Provider** window, add the following details:

   - **Type**:Select the type as  `LDAP`

   - **Organization**: `Organization Name` in relation to directory server

   - **Server IP/DNS**: `IP` or `DNS` of the directory server 

   - **Server Port**: `Port` identification of the directory server

   - **Uname Attrib**: An `attrib` to represent the username. 

   - **BaseDN**: `Path of the directory` that holds the user list. Click the `+ADD` button to add multiple BaseDN.

5. Click the `Add` button.

   <img src="/img/integration/idp/image_5.png" />

6. An Unique Login URL will be generated as shown in the above image.

   

:::note
The admin can share the **Unique Login URL** to the team and the members can login via **Unique Login URL** by using the credential available in the above mentioned directory. 
:::

