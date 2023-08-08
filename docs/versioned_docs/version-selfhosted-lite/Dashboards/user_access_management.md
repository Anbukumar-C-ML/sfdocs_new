# User Access Management

## Overview

SnappyFlow utilizes **Role-based access control (RBAC)** to streamline the user access management. Snappyflow offers four distinct types of roles, where each role has different set of access permissions. By assigning a role to an users, the access level to of the user towards the profile, project and application can be controlled.

**Profile Admin**: Profile Admin role has permission to Read Project, Create/Delete Project, Edit Project, View Profile, Edit Profile and Add User.

**Basic**: Basic role has permission to Read Project.

**Advance**: Advance role has permissions to Read Project, Create/Delete Project, Edit Project, View Profile.

**None**: This role has no access privileges.



## How to Add User(s)?

:::note

Only Snappyflow account admin has the permission to add user(s) to the account.

:::

<img src="/img/introduction/user_manage/image_21.png" /><br/>

1. Go to the **Manage** tab in SnappyFlow.
2. Navigate to the **Users** tab.
3. Click the `+Add User` button in the **User Management** window.
4. In the Add User window, add the following details:
   - Name
   - Email
5. Click the `Save` button.
6. Password will be generated.
7. To add multiple user at a time, click the `Add Users (.csv)` button.
   - In the **Add User(.csv)** window, upload a `.csv` file with the list of users
   - Click the `Add` button.

:::note

Except the profile admin, all the users added here will be considered as Normal users and their role will be determined at the Profile Level. Until their role is determined at the profile level, they will not be granted access to view any data in SnappyFlow.

:::

## Manage User Access - Profile Level

:::note

Only profile admin has the permission to add user(s) to the profile.

:::

### Single user

1. Go to the **Manage** tab in SnappyFlow.

2. Navigate to **Profiles** > **Profile** > **User Permissions** section.

   <img src="/img/introduction/user_manage/image_16.png" />

3. In the **User Permissions** window, click the `Add New` button.

   <img src="/img/introduction/user_manage/image_16.png" />

4. Select a user and the respective role.

5. Click the `Save` button to save the changes.

   <img src="/img/introduction/user_manage/image_18.png" />

6. A table with the user, role and the respective access will be generated. The **Action** column has the options to edit and delete the user.

### Multiple Users

   <img src="/img/introduction/user_manage/image_19.png" />

1. In the **User Permissions** window, click the `Add New Users` button. User list will pop up.

   <img src="/img/introduction/user_manage/image_20.png" />

2. Select users and their Role.

3. Click on the `Add` button to add the selected users to the profile.

4. A table with the list of users, their role and their respective access will be generated. The **Action** column has the options to edit and delete the user.

5. To delete multiple users:
   - Select the users, a `Delete` button will pop-up
   - Click the `Delete` button
   - In the **Revoke Profile Permissions** window, select `Yes`
   - The selected user will be deleted


## Manage User Access - Project Level

1. Go to the **Applications** tab in SnappyFlow and navigate to **Project**.

   <img src="/img/introduction/user_manage/image_13.png" />

2. Click the `...` project menu icon, and select `User access control` option.

   <img src="/img/introduction/user_manage/image_14.png" />

3. In the **User access control** window, select a user and set permission (Read, write, Deny).
   - **Read** - The user can view the particular project's dashboard
   - **Write** - The user can edit the particular project's dashboard
   - **Deny** - The user cannot access the project's dashboard

:::note

The list will only include user(s) added at the profile level.

:::

4. Click the `Add` button to add the user.

   <img src="/img/introduction/user_manage/image_15.png" />

5. Click the `Save` button to save the changes.

## Manage User Access - Application Level

​          <img src="/img/introduction/user_manage/image_8.png" />

1. Go to the **Applications** tab in SnappyFlow and navigate to **Project** > **Application**.

   <img src="/img/introduction/user_manage/image_9.png" />

2. Click the `...` application menu icon, and select `Dashboard List` option.

   <img src="/img/introduction/user_manage/image_10.png" />

3. In the **Dashboard List** window, click the `User` icon.

   <img src="/img/introduction/user_manage/image_23.png" />

4. In the **User access control** window, select a user and set permission (Read, write, Deny).
   - **Read** - The user can view the particular application's dashboard
   - **Write** - The user can edit the particular application's dashboard
   - **Deny** - The user cannot access the application dashboard

:::note

The list will only include user(s) added at the profile level.

:::

5. Click the `Add` button to add the user.

   <img src="/img/introduction/user_manage/image_12.png" />

6. Click the `Save` button to save the changes.

