"use client";

import { useCallback, useEffect, useState } from "react";

export type ForgePassTier =
  | "INITIATE"
  | "ADEPT"
  | "MASTER";

export type ForgePass = {
  tier: ForgePassTier;
  active: boolean;

  startedAt?: string | null;
  renewsAt?: string | null;
  expiresAt?: string | null;

  billingCycle?: "monthly" | "yearly" | null;

  benefits: string[];
};

type UseForgePassResult = {
  forgePass: ForgePass | null;

  isLoading: boolean;
  error: string | null;

  refreshForgePass: () => Promise<void>;
};

export function useForgePass(): UseForgePassResult {
  const [forgePass, setForgePass] =
    useState<ForgePass | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const refreshForgePass = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/forge-pass`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to load Forge Pass information."
        );
      }

      const data = await response.json();

      setForgePass(data.forgePass ?? null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load Forge Pass."
      );

      setForgePass(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshForgePass();
  }, [refreshForgePass]);

  return {
    forgePass,
    isLoading,
    error,
    refreshForgePass,
  };
}