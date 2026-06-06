// src/types/security.ts

export type SecurityOverview = {
  emailVerified: boolean;
  twoFactorEnabled: boolean;

  activeSessions: number;

  recoveryCodesRemaining: number;

  lastPasswordChange?: string | null;
};

export type ActiveSession = {
  id: string;

  device: string;
  browser: string;
  operatingSystem: string;

  ipAddress: string;

  location?: string | null;

  current: boolean;

  lastActiveAt: string;
};

export type LoginHistoryEntry = {
  id: string;

  ipAddress: string;

  location?: string | null;

  browser: string;
  operatingSystem: string;

  successful: boolean;

  createdAt: string;
};

export type RecoveryCode = {
  code: string;
};

export type PasswordChangeRequest = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type TwoFactorSetup = {
  secret: string;
  qrCodeUrl: string;
};

export type TwoFactorVerificationRequest = {
  code: string;
};

export type SecurityAlertSeverity =
  | "info"
  | "warning"
  | "critical";

export type SecurityAlert = {
  id: string;

  severity: SecurityAlertSeverity;

  title: string;
  description: string;

  createdAt: string;
};

export type DeviceFingerprint = {
  browser: string;
  operatingSystem: string;
  device: string;

  ipAddress: string;

  location?: string | null;
};

export type SecurityStatistics = {
  totalLogins: number;

  successfulLogins: number;
  failedLogins: number;

  activeSessions: number;

  securityEvents: number;
};

export type SecurityResponse = {
  security: SecurityOverview;
};

export type ActiveSessionsResponse = {
  sessions: ActiveSession[];
};

export type LoginHistoryResponse = {
  history: LoginHistoryEntry[];
};

export type RecoveryCodesResponse = {
  codes: RecoveryCode[];
};

export type SecurityAlertsResponse = {
  alerts: SecurityAlert[];
};