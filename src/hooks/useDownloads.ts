"use client";

import { useCallback, useEffect, useState } from "react";

export type DownloadItem = {
  id: string;
  name: string;
  version: string;
  platform: string;
  fileSize: string;
  releaseDate: string;
  downloadUrl: string;
  releaseNotesUrl?: string;
};

type UseDownloadsResult = {
  downloads: DownloadItem[];
  isLoading: boolean;
  error: string | null;
  refreshDownloads: () => Promise<void>;
};

export function useDownloads(): UseDownloadsResult {
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshDownloads = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/downloads`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to load downloads.");
      }

      const data = await response.json();

      setDownloads(data.downloads ?? []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unknown error occurred while loading downloads."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshDownloads();
  }, [refreshDownloads]);

  return {
    downloads,
    isLoading,
    error,
    refreshDownloads,
  };
}