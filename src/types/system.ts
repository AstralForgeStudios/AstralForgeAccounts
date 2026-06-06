// src/types/system.ts

export type SystemStatus =
  | "operational"
  | "degraded"
  | "maintenance"
  | "outage";

export type SystemService = {
  id: string;

  name: string;
  description?: string;

  status: SystemStatus;

  updatedAt?: string;
};

export type ConnectedAccountProvider =
  | "discord"
  | "github"
  | "google"
  | "steam"
  | "patreon";

export type ConnectedAccount = {
  id: string;

  provider: ConnectedAccountProvider;

  username: string;

  avatarUrl?: string | null;

  connectedAt: string;
};

export type ApiKey = {
  id: string;

  name: string;

  prefix: string;

  active: boolean;

  createdAt: string;

  lastUsedAt?: string | null;
  expiresAt?: string | null;
};

export type DeveloperTool = {
  id: string;

  name: string;
  description: string;

  enabled: boolean;
};

export type ExperimentalFeature = {
  id: string;

  name: string;
  description: string;

  enabled: boolean;
};

export type Theme =
  | "system"
  | "light"
  | "dark";

export type ThemeOption = {
  id: Theme;

  name: string;
  description: string;
};

export type ProfileCustomization = {
  avatarUrl?: string | null;
  bannerUrl?: string | null;

  profileTheme?: string | null;
};

export type SystemOverview = {
  connectedAccounts: number;

  activeApiKeys: number;

  enabledDeveloperTools: number;

  enabledExperimentalFeatures: number;
};

export type SystemStatusResponse = {
  services: SystemService[];
};

export type ConnectedAccountsResponse = {
  accounts: ConnectedAccount[];
};

export type ApiKeysResponse = {
  keys: ApiKey[];
};

export type DeveloperToolsResponse = {
  tools: DeveloperTool[];
};

export type ExperimentalFeaturesResponse = {
  features: ExperimentalFeature[];
};

export type CreateApiKeyRequest = {
  name: string;
};

export type CreateApiKeyResponse = {
  id: string;
  key: string;
};

export type ToggleFeatureRequest = {
  enabled: boolean;
};

export type ConnectAccountRequest = {
  provider: ConnectedAccountProvider;
};

export type ConnectAccountResponse = {
  authorizationUrl: string;
};