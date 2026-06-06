// src/store/downloads.store.ts

import { create } from "zustand";
import type {
  DownloadItem,
  DownloadHistoryEntry,
} from "@/services/downloads.service";

type DownloadsState = {
  downloads: DownloadItem[];
  latestDownloads: DownloadItem[];
  downloadHistory: DownloadHistoryEntry[];

  isLoading: boolean;
  error: string | null;

  setDownloads: (
    downloads: DownloadItem[]
  ) => void;

  setLatestDownloads: (
    downloads: DownloadItem[]
  ) => void;

  setDownloadHistory: (
    history: DownloadHistoryEntry[]
  ) => void;

  setLoading: (
    isLoading: boolean
  ) => void;

  setError: (
    error: string | null
  ) => void;

  clearDownloads: () => void;
};

export const useDownloadsStore =
  create<DownloadsState>((set) => ({
    downloads: [],
    latestDownloads: [],
    downloadHistory: [],

    isLoading: false,
    error: null,

    setDownloads: (downloads) =>
      set({
        downloads,
      }),

    setLatestDownloads: (
      latestDownloads
    ) =>
      set({
        latestDownloads,
      }),

    setDownloadHistory: (
      downloadHistory
    ) =>
      set({
        downloadHistory,
      }),

    setLoading: (isLoading) =>
      set({
        isLoading,
      }),

    setError: (error) =>
      set({
        error,
      }),

    clearDownloads: () =>
      set({
        downloads: [],
        latestDownloads: [],
        downloadHistory: [],

        isLoading: false,
        error: null,
      }),
  }));