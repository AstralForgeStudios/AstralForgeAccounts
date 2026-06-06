"use client";

import { useCallback, useEffect, useState } from "react";

export type AuthUser = {
  id: string;
  username: string;
  displayName: string;
  email: string;
  avatarUrl?: string | null;
  bannerUrl?: string | null;
  forgePassTier: string;
  emailVerified: boolean;
};

type UseAuthResult = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  refreshUser: () => Promise<void>;
  logout: () => Promise<void>;
};

export function useAuth(): UseAuthResult {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/auth/me", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        setUser(null);
        return;
      }

      const data = await response.json();

      setUser(data.user);
    } catch (error) {
      console.error("Failed to load user:", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      setUser(null);

      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    refreshUser,
    logout,
  };
}