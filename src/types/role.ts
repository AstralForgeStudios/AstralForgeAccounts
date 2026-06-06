// src/types/role.ts

export type Role =
  | "user"
  | "creator"
  | "moderator"
  | "administrator"
  | "owner";

export type Permission =
  | "account.view"
  | "account.edit"

  | "downloads.view"
  | "downloads.download"

  | "billing.view"
  | "billing.manage"

  | "notifications.view"
  | "notifications.manage"

  | "security.view"
  | "security.manage"

  | "systems.view"
  | "systems.manage"

  | "content.create"
  | "content.edit"
  | "content.delete"

  | "community.moderate"

  | "users.view"
  | "users.manage"

  | "roles.manage"

  | "admin.access"

  | "owner.access";

export type RoleDefinition = {
  role: Role;

  displayName: string;
  description: string;

  permissions: Permission[];
};

export const ROLE_HIERARCHY: Record<Role, number> = {
  user: 0,
  creator: 1,
  moderator: 2,
  administrator: 3,
  owner: 4,
};

export const ROLES: Record<Role, RoleDefinition> = {
  user: {
    role: "user",
    displayName: "User",
    description: "Standard account holder.",
    permissions: [
      "account.view",
      "account.edit",

      "downloads.view",
      "downloads.download",

      "billing.view",

      "notifications.view",

      "security.view",

      "systems.view",
    ],
  },

  creator: {
    role: "creator",
    displayName: "Creator",
    description: "Content creator and publisher.",
    permissions: [
      "account.view",
      "account.edit",

      "downloads.view",
      "downloads.download",

      "billing.view",

      "notifications.view",
      "notifications.manage",

      "security.view",

      "systems.view",

      "content.create",
      "content.edit",
    ],
  },

  moderator: {
    role: "moderator",
    displayName: "Moderator",
    description: "Community moderation access.",
    permissions: [
      "account.view",
      "account.edit",

      "downloads.view",
      "downloads.download",

      "billing.view",

      "notifications.view",
      "notifications.manage",

      "security.view",

      "systems.view",

      "content.create",
      "content.edit",
      "content.delete",

      "community.moderate",

      "users.view",
    ],
  },

  administrator: {
    role: "administrator",
    displayName: "Administrator",
    description: "Platform administration access.",
    permissions: [
      "account.view",
      "account.edit",

      "downloads.view",
      "downloads.download",

      "billing.view",
      "billing.manage",

      "notifications.view",
      "notifications.manage",

      "security.view",
      "security.manage",

      "systems.view",
      "systems.manage",

      "content.create",
      "content.edit",
      "content.delete",

      "community.moderate",

      "users.view",
      "users.manage",

      "admin.access",
    ],
  },

  owner: {
    role: "owner",
    displayName: "Owner",
    description: "Astral Forge Studios owner.",
    permissions: [
      "account.view",
      "account.edit",

      "downloads.view",
      "downloads.download",

      "billing.view",
      "billing.manage",

      "notifications.view",
      "notifications.manage",

      "security.view",
      "security.manage",

      "systems.view",
      "systems.manage",

      "content.create",
      "content.edit",
      "content.delete",

      "community.moderate",

      "users.view",
      "users.manage",

      "roles.manage",

      "admin.access",
      "owner.access",
    ],
  },
};

export function hasPermission(
  role: Role,
  permission: Permission
): boolean {
  return ROLES[role].permissions.includes(
    permission
  );
}

export function isHigherRole(
  role: Role,
  targetRole: Role
): boolean {
  return (
    ROLE_HIERARCHY[role] >
    ROLE_HIERARCHY[targetRole]
  );
}