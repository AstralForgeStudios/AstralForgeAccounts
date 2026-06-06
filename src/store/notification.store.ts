// src/store/notifications.store.ts

import { create } from "zustand";
import type {
  Notification,
  NotificationPreference,
} from "@/services/notifications.service";

type NotificationsState = {
  notifications: Notification[];
  preferences: NotificationPreference[];

  unreadCount: number;

  isLoading: boolean;
  error: string | null;

  setNotifications: (
    notifications: Notification[]
  ) => void;

  addNotification: (
    notification: Notification
  ) => void;

  removeNotification: (
    notificationId: string
  ) => void;

  markAsRead: (
    notificationId: string
  ) => void;

  markAllAsRead: () => void;

  setPreferences: (
    preferences: NotificationPreference[]
  ) => void;

  updatePreference: (
    preferenceId: string,
    enabled: boolean
  ) => void;

  setLoading: (
    isLoading: boolean
  ) => void;

  setError: (
    error: string | null
  ) => void;

  clearNotifications: () => void;
};

export const useNotificationsStore =
  create<NotificationsState>((set) => ({
    notifications: [],
    preferences: [],

    unreadCount: 0,

    isLoading: false,
    error: null,

    setNotifications: (notifications) =>
      set({
        notifications,
        unreadCount: notifications.filter(
          (notification) => !notification.read
        ).length,
      }),

    addNotification: (notification) =>
      set((state) => {
        const notifications = [
          notification,
          ...state.notifications,
        ];

        return {
          notifications,
          unreadCount: notifications.filter(
            (item) => !item.read
          ).length,
        };
      }),

    removeNotification: (notificationId) =>
      set((state) => {
        const notifications =
          state.notifications.filter(
            (notification) =>
              notification.id !== notificationId
          );

        return {
          notifications,
          unreadCount: notifications.filter(
            (item) => !item.read
          ).length,
        };
      }),

    markAsRead: (notificationId) =>
      set((state) => {
        const notifications =
          state.notifications.map(
            (notification) =>
              notification.id === notificationId
                ? {
                    ...notification,
                    read: true,
                  }
                : notification
          );

        return {
          notifications,
          unreadCount: notifications.filter(
            (item) => !item.read
          ).length,
        };
      }),

    markAllAsRead: () =>
      set((state) => {
        const notifications =
          state.notifications.map(
            (notification) => ({
              ...notification,
              read: true,
            })
          );

        return {
          notifications,
          unreadCount: 0,
        };
      }),

    setPreferences: (preferences) =>
      set({
        preferences,
      }),

    updatePreference: (
      preferenceId,
      enabled
    ) =>
      set((state) => ({
        preferences:
          state.preferences.map(
            (preference) =>
              preference.id === preferenceId
                ? {
                    ...preference,
                    enabled,
                  }
                : preference
          ),
      })),

    setLoading: (isLoading) =>
      set({
        isLoading,
      }),

    setError: (error) =>
      set({
        error,
      }),

    clearNotifications: () =>
      set({
        notifications: [],
        preferences: [],

        unreadCount: 0,

        isLoading: false,
        error: null,
      }),
  }));