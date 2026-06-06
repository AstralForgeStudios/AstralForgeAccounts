// src/types/account.ts

export type ForgePassTier =
  | "Initiate"
  | "Adept"
  | "Master";

export type UserRole =
  | "user"
  | "creator"
  | "moderator"
  | "admin"
  | "owner";

export type AccountStatus =
  | "active"
  | "pending"
  | "suspended"
  | "banned";

export type Account = {
  id: string;

  username: string;
  displayName: string;
  email: string;

  avatarUrl?: string | null;
  bannerUrl?: string | null;

  bio?: string | null;
  website?: string | null;
  location?: string | null;
  pronouns?: string | null;

  role: UserRole;
  status: AccountStatus;

  forgePassTier: ForgePassTier;

  emailVerified: boolean;
  twoFactorEnabled: boolean;

  createdAt: string;
  updatedAt: string;
};

export type AccountProfile = {
  displayName: string;

  bio?: string | null;
  website?: string | null;
  location?: string | null;
  pronouns?: string | null;
};

export type AccountStatistics = {
  downloads: number;
  productsOwned: number;
  activeLicenses: number;
  notifications: number;
};

export type ConnectedAccount = {
  id: string;

  provider: string;
  username: string;

  connectedAt: string;
};

export type ActiveSession = {
  id: string;

  device: string;
  browser: string;
  operatingSystem: string;

  ipAddress: string;

  current: boolean;

  lastActiveAt: string;
};

export type LoginHistoryEntry = {
  id: string;

  ipAddress: string;

  browser: string;
  operatingSystem: string;

  successful: boolean;

  createdAt: string;
};