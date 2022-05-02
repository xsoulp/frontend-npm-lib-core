import { NEW_TOKEN_VERSION_ID } from "./Authentication/Authentication";

export interface Token {
  message: { name: string; superUser: boolean };
  auth_token: boolean;
  error: boolean;
  refresh_token: string | boolean;
  access_token: string | boolean;
  [NEW_TOKEN_VERSION_ID]?: { domain_name: string };
}

export interface User {
  Superuser: boolean;
}

export interface HttpResponse extends Error {
  error: any | null;
  ok: boolean;
  statusText: string;
  status: number;
}

export interface LdapDomainUpdateModel {
  DomainName: string;
  GroupsDN: string;
  PrimaryHost: string;
  PrimaryPort: number;
  SecondaryHost: string;
  SecondaryPort: number;
  SSLVersion: number;
  Username: string;
  UsersDN: string;
}

export interface LdapDomainPostModel extends LdapDomainUpdateModel {
  Password: string;
}

export interface LdapDomainPutModel extends LdapDomainUpdateModel {
  Password?: string;
}

export interface ChangePasswordModel {
  CurrentPassword: string;
  NewPassword: string;
  ConfirmPassword: string;
}

export interface ResetPasswordModel {
  NewPassword: string;
  ConfirmPassword: string;
}

export interface UserModel {
  Resources: { [scope: string]: string[] };
  Superuser: boolean;
  allRoles: string[];
  allResourcesPermissions: { [scope: string]: string[] };
  resourcesPermissions: ResourcePermission[];
}

export interface UserPostModel {
  AccountName: string;
  Password: string;
  Roles: [string];
  CommonName: string;
  Email: string;
  ReadOnly: boolean;
  SuperUser: boolean;
  SendReport: boolean;
}

export interface UserPutModel {
  Roles: [string];
  CommonName: string;
  Email: string;
  ReadOnly: boolean;
  SuperUser: boolean;
  SendReport: boolean;
}

export interface ResourcePermission {
  id: string;
  name: string;
  roleDefault: boolean;
  resourceType: string;
  value: boolean;
}

export type PermissionType = "create" | "read" | "write" | "delete";
