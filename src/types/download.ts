// src/types/downloads.ts

export type DownloadPlatform =
  | "Windows"
  | "Linux"
  | "macOS";

export type DownloadCategory =
  | "application"
  | "update"
  | "tool"
  | "asset"
  | "plugin"
  | "template";

export type DownloadItem = {
  id: string;

  name: string;
  slug: string;

  version: string;

  platform: DownloadPlatform;
  category: DownloadCategory;

  description?: string;

  fileName: string;
  fileSize: number;

  latest: boolean;

  releaseDate: string;

  downloadUrl: string;
  releaseNotesUrl?: string | null;
};

export type DownloadHistoryEntry = {
  id: string;

  downloadId: string;

  productName: string;
  version: string;

  platform: DownloadPlatform;

  downloadedAt: string;
};

export type License = {
  id: string;

  productId: string;
  productName: string;

  licenseKey: string;

  issuedAt: string;
  expiresAt?: string | null;

  active: boolean;
};

export type ReleaseNote = {
  id: string;

  version: string;

  title: string;
  content: string;

  publishedAt: string;
};

export type ProductDownload = {
  id: string;

  name: string;
  description?: string;

  latestVersion: string;

  downloads: DownloadItem[];
};

export type DownloadStatistics = {
  totalDownloads: number;

  ownedProducts: number;

  activeLicenses: number;

  latestUpdates: number;
};

export type DownloadFilter = {
  platform?: DownloadPlatform;
  category?: DownloadCategory;
  latestOnly?: boolean;
};

export type DownloadResponse = {
  downloads: DownloadItem[];
};

export type DownloadHistoryResponse = {
  history: DownloadHistoryEntry[];
};

export type LicenseResponse = {
  licenses: License[];
};

export type ReleaseNotesResponse = {
  notes: ReleaseNote[];
};