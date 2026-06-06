// src/services/notifications.service.ts

export type NotificationType =
  | "account"
  | "billing"
  | "community"
  | "creator"
  | "downloads"
  | "security"
  | "system";

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
};

export type NotificationPreference = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

export async function getNotifications(): Promise<Notification[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notifications`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to load notifications.");
  }

  const data = await response.json();
  return data.notifications ?? [];
}

export async function markNotificationAsRead(notificationId: string): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/notifications/${notificationId}/read`,
    {
      method: "PATCH",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to mark notification as read.");
  }
}

export async function markAllNotificationsAsRead(): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/notifications/read-all`,
    {
      method: "PATCH",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to mark all notifications as read.");
  }
}

export async function getNotificationPreferences(): Promise<NotificationPreference[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/notifications/preferences`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load notification preferences.");
  }

  const data = await response.json();
  return data.preferences ?? [];
}

export async function updateNotificationPreference(
  preferenceId: string,
  enabled: boolean
): Promise<NotificationPreference> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/notifications/preferences/${preferenceId}`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ enabled }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update notification preference.");
  }

  const data = await response.json();
  return data.preference;
}

export async function deleteNotification(notificationId: string): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/notifications/${notificationId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete notification.");
  }
}