// src/lib/constants.ts

export const APP_NAME = "Astral Forge";

export const FORGE_PASS_TIERS = {
  INITIATE: "Initiate",
  ADEPT: "Adept",
  MASTER: "Master",
} as const;

export const ACCOUNT_STATUSES = {
  ACTIVE: "Active",
  PENDING: "Pending",
  SUSPENDED: "Suspended",
  BANNED: "Banned",
} as const;

export const NOTIFICATION_TYPES = {
  ACCOUNT: "account",
  BILLING: "billing",
  COMMUNITY: "community",
  CREATOR: "creator",
  DOWNLOADS: "downloads",
  SECURITY: "security",
  SYSTEM: "system",
} as const;

export const SYSTEM_SERVICES = {
  ACCOUNTS: "Accounts",
  AUTHENTICATION: "Authentication",
  BILLING: "Billing",
  DOWNLOADS: "Downloads",
  NOTIFICATIONS: "Notifications",
  API: "API",
  STORAGE: "Storage",
  DISCORD: "Discord Integration",
  CODEX: "Codex",
  PLAY: "Play",
  SHOP: "Shop",
} as const;

export const DISCORD_GUILD_ID =
  process.env.NEXT_PUBLIC_DISCORD_GUILD_ID ?? "";

export const SUPPORT_EMAIL =
  "support@astralforge.studio";

export const COMPANY_EMAIL =
  "contact@astralforge.studio";

export const API_TIMEOUT = 30000;

export const MAX_AVATAR_SIZE = 5 * 1024 * 1024;

export const MAX_BANNER_SIZE = 5 * 1024 * 1024;

export const ALLOWED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
];

export const DEFAULT_AVATAR =
  "/avatars/default-avatar.webp";

export const DEFAULT_BANNER =
  "/banners/default-banner.webp";

export const PASSWORD_MIN_LENGTH = 12;

export const RECOVERY_CODE_COUNT = 10;

export const SESSION_RETENTION_DAYS = 90;

export const LOGIN_HISTORY_RETENTION_DAYS = 90;

export const AUDIT_LOG_RETENTION_DAYS = 365;

export const DOWNLOAD_PLATFORMS = [
  "Windows",
  "Linux",
  "macOS",
] as const;

export const THEME_OPTIONS = [
  "system",
  "light",
  "dark",
] as const;

export const CONNECTED_ACCOUNT_PROVIDERS = [
  "Discord",
  "Google",
  "GitHub",
  "Patreon",
  "Twitch",
] as const;