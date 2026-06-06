"use client";

import { useCallback, useEffect, useState } from "react";

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

type UseNotificationsResult = {
  notifications: Notification[];

  unreadCount: number;

  isLoading: boolean;
  error: string | null;

  refreshNotifications: () => Promise<void>;

  markAsRead: (
    notificationId: string
  ) => Promise<void>;

  markAllAsRead: () => Promise<void>;
};

export function useNotifications(): UseNotificationsResult {
  const [notifications, setNotifications] =
    useState<Notification[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const refreshNotifications = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/notifications`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to load notifications."
        );
      }

      const data = await response.json();

      setNotifications(
        data.notifications ?? []
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load notifications."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const markAsRead = useCallback(
    async (notificationId: string) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/notifications/${notificationId}/read`,
          {
            method: "PATCH",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(
            "Failed to update notification."
          );
        }

        setNotifications((current) =>
          current.map((notification) =>
            notification.id === notificationId
              ? {
                  ...notification,
                  read: true,
                }
              : notification
          )
        );
      } catch (err) {
        console.error(err);
      }
    },
    []
  );

  const markAllAsRead = useCallback(
    async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/notifications/read-all`,
          {
            method: "PATCH",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(
            "Failed to update notifications."
          );
        }

        setNotifications((current) =>
          current.map((notification) => ({
            ...notification,
            read: true,
          }))
        );
      } catch (err) {
        console.error(err);
      }
    },
    []
  );

  useEffect(() => {
    refreshNotifications();
  }, [refreshNotifications]);

  return {
    notifications,

    unreadCount: notifications.filter(
      (notification) => !notification.read
    ).length,

    isLoading,
    error,

    refreshNotifications,

    markAsRead,
    markAllAsRead,
  };
}