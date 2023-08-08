---
sidebar_position: 3 
---
# Security Assertion Markup Language (SAML) Integration

## Overview

SAML is a XML-based framework used for exchanging authentication and authorization data between parties in a secure manner. It is an open standard protocol that enables single sign-on (SSO) and identity  federation across different systems and organizations.

## Integrate SAML with SnappyFlow

<img src="/img/integration/idp/image_8.png" />

1. Go to the **Manage** tab in SnappyFlow.

2. Navigate to **Profiles** section > **Profile** > **Identity Providers**.

3. Click the `Add New` button.

4. In the **Add New Identity Provider** window, add the following details:

   - **Type**: Select the type as `SAML`
   - **Name**: Give a unique name
   - **Sign-On URL**: Give the Sign-On url link
   - **Metadata**: Give a metadata url or metadata xml based file

5. Click the `Add` button.

   <img src="/img/integration/idp/image_9.png" />

6. An Unique Login URL will be generated.

:::note

The admin can share the **Unique Login URL** to the team and the members can login via **Unique Login URL** .

:::
