// src/types/user.ts

import type { ForgePassTier } from "@/types/billing";
import type { Role } from "@/types/role";

export type User = {
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

  role: Role;
  forgePassTier: ForgePassTier;

  emailVerified: boolean;
  twoFactorEnabled: boolean;

  createdAt: string;
  updatedAt: string;
};

export type UserProfile = {
  displayName: string;

  bio?: string | null;
  website?: string | null;
  location?: string | null;
  pronouns?: string | null;
};

export type UserPreferences = {
  theme: "system" | "light" | "dark";

  emailNotifications: boolean;
  websiteNotifications: boolean;

  marketingEmails: boolean;
};

export type UserStatistics = {
  downloads: number;

  notifications: number;

  activeSessions: number;

  connectedAccounts: number;
};

export type UserResponse = {
  user: User;
};

export type UsersResponse = {
  users: User[];
};

export type UpdateUserRequest = {
  displayName?: string;

  bio?: string | null;
  website?: string | null;
  location?: string | null;
  pronouns?: string | null;
};

export type UserPreferencesResponse = {
  preferences: UserPreferences;
};

export type UserStatisticsResponse = {
  statistics: UserStatistics;
};