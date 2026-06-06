"use client";

import { useCallback, useEffect, useState } from "react";

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

  forgePassTier: string;

  emailVerified: boolean;
  createdAt: string;
};

type UpdateUserPayload = {
  displayName?: string;
  bio?: string;
  website?: string;
  location?: string;
  pronouns?: string;
};

type UseUserResult = {
  user: User | null;

  isLoading: boolean;
  error: string | null;

  refreshUser: () => Promise<void>;

  updateUser: (
    updates: UpdateUserPayload
  ) => Promise<boolean>;

  updateAvatar: (
    file: File
  ) => Promise<boolean>;

  updateBanner: (
    file: File
  ) => Promise<boolean>;
};

export function useUser(): UseUserResult {
  const [user, setUser] =
    useState<User | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const refreshUser = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to load user."
        );
      }

      const data = await response.json();

      setUser(data.user);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load user."
      );

      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateUser = useCallback(
    async (
      updates: UpdateUserPayload
    ): Promise<boolean> => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user`,
          {
            method: "PATCH",
            credentials: "include",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify(
              updates
            ),
          }
        );

        if (!response.ok) {
          throw new Error(
            "Failed to update profile."
          );
        }

        const data =
          await response.json();

        setUser(data.user);

        return true;
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to update profile."
        );

        return false;
      }
    },
    []
  );

  const updateAvatar = useCallback(
    async (
      file: File
    ): Promise<boolean> => {
      try {
        const formData =
          new FormData();

        formData.append(
          "avatar",
          file
        );

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/avatar`,
          {
            method: "POST",
            credentials: "include",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(
            "Failed to upload avatar."
          );
        }

        const data =
          await response.json();

        setUser(data.user);

        return true;
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to upload avatar."
        );

        return false;
      }
    },
    []
  );

  const updateBanner = useCallback(
    async (
      file: File
    ): Promise<boolean> => {
      try {
        const formData =
          new FormData();

        formData.append(
          "banner",
          file
        );

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/banner`,
          {
            method: "POST",
            credentials: "include",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(
            "Failed to upload banner."
          );
        }

        const data =
          await response.json();

        setUser(data.user);

        return true;
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to upload banner."
        );

        return false;
      }
    },
    []
  );

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  return {
    user,

    isLoading,
    error,

    refreshUser,

    updateUser,
    updateAvatar,
    updateBanner,
  };
}