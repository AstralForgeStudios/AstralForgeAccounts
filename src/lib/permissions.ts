// src/lib/permissions.ts

export type ForgePassTier = "Initiate" | "Adept" | "Master";

export type UserRole =
  | "user"
  | "creator"
  | "moderator"
  | "admin"
  | "owner";

export type Permission =
  | "account:view"
  | "account:edit"
  | "billing:view"
  | "billing:manage"
  | "downloads:view"
  | "downloads:download"
  | "notifications:view"
  | "notifications:manage"
  | "security:view"
  | "security:manage"
  | "systems:view"
  | "systems:manage"
  | "api_keys:view"
  | "api_keys:manage"
  | "creator:view"
  | "creator:manage"
  | "admin:view"
  | "admin:manage";

export type PermissionUser = {
  id: string;
  role: UserRole;
  forgePassTier: ForgePassTier;
};

const rolePermissions: Record<UserRole, Permission[]> = {
  user: [
    "account:view",
    "account:edit",
    "billing:view",
    "downloads:view",
    "downloads:download",
    "notifications:view",
    "notifications:manage",
    "security:view",
    "security:manage",
    "systems:view",
  ],

  creator: [
    "account:view",
    "account:edit",
    "billing:view",
    "downloads:view",
    "downloads:download",
    "notifications:view",
    "notifications:manage",
    "security:view",
    "security:manage",
    "systems:view",
    "creator:view",
    "creator:manage",
  ],

  moderator: [
    "account:view",
    "account:edit",
    "billing:view",
    "downloads:view",
    "downloads:download",
    "notifications:view",
    "notifications:manage",
    "security:view",
    "security:manage",
    "systems:view",
    "creator:view",
  ],

  admin: [
    "account:view",
    "account:edit",
    "billing:view",
    "billing:manage",
    "downloads:view",
    "downloads:download",
    "notifications:view",
    "notifications:manage",
    "security:view",
    "security:manage",
    "systems:view",
    "systems:manage",
    "api_keys:view",
    "api_keys:manage",
    "creator:view",
    "creator:manage",
    "admin:view",
  ],

  owner: [
    "account:view",
    "account:edit",
    "billing:view",
    "billing:manage",
    "downloads:view",
    "downloads:download",
    "notifications:view",
    "notifications:manage",
    "security:view",
    "security:manage",
    "systems:view",
    "systems:manage",
    "api_keys:view",
    "api_keys:manage",
    "creator:view",
    "creator:manage",
    "admin:view",
    "admin:manage",
  ],
};

export function hasPermission(
  user: PermissionUser | null,
  permission: Permission
): boolean {
  if (!user) return false;

  return rolePermissions[user.role]?.includes(permission) ?? false;
}

export function hasAnyPermission(
  user: PermissionUser | null,
  permissions: Permission[]
): boolean {
  return permissions.some((permission) => hasPermission(user, permission));
}

export function hasAllPermissions(
  user: PermissionUser | null,
  permissions: Permission[]
): boolean {
  return permissions.every((permission) => hasPermission(user, permission));
}

export function isOwner(user: PermissionUser | null): boolean {
  return user?.role === "owner";
}

export function isAdmin(user: PermissionUser | null): boolean {
  return user?.role === "admin" || user?.role === "owner";
}

export function isCreator(user: PermissionUser | null): boolean {
  return (
    user?.role === "creator" ||
    user?.role === "admin" ||
    user?.role === "owner"
  );
}

export function hasPaidForgePass(user: PermissionUser | null): boolean {
  return user?.forgePassTier === "Adept" || user?.forgePassTier === "Master";
}

export function isMasterTier(user: PermissionUser | null): boolean {
  return user?.forgePassTier === "Master";
}