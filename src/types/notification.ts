// src/types/notifications.ts

export type NotificationType =
  | "account"
  | "billing"
  | "community"
  | "creator"
  | "downloads"
  | "security"
  | "system";

export type NotificationPriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

export type Notification = {
  id: string;

  type: NotificationType;
  priority: NotificationPriority;

  title: string;
  message: string;

  read: boolean;

  actionUrl?: string | null;

  createdAt: string;
  readAt?: string | null;
};

export type NotificationPreference = {
  id: string;

  type: NotificationType;

  label: string;
  description: string;

  enabled: boolean;
};

export type NotificationSettings = {
  website: boolean;
  email: boolean;

  account: boolean;
  billing: boolean;
  community: boolean;
  creator: boolean;
  downloads: boolean;
  security: boolean;
  system: boolean;
};

export type NotificationCategory = {
  id: NotificationType;

  name: string;
  description: string;
};

export type NotificationStatistics = {
  total: number;
  unread: number;

  account: number;
  billing: number;
  community: number;
  creator: number;
  downloads: number;
  security: number;
  system: number;
};

export type NotificationResponse = {
  notifications: Notification[];
};

export type NotificationPreferenceResponse = {
  preferences: NotificationPreference[];
};

export type NotificationSettingsResponse = {
  settings: NotificationSettings;
};

export type NotificationMarkReadRequest = {
  notificationId: string;
};

export type NotificationUpdatePreferenceRequest = {
  preferenceId: string;
  enabled: boolean;
};

export type NotificationCreateRequest = {
  type: NotificationType;

  title: string;
  message: string;

  priority?: NotificationPriority;

  actionUrl?: string;
};

export type NotificationBellState = {
  unreadCount: number;
  hasUnread: boolean;
};

export type NotificationFilter = {
  type?: NotificationType;
  read?: boolean;
  priority?: NotificationPriority;
};