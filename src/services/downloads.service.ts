// src/services/downloads.service.ts

export type DownloadPlatform =
  | "Windows"
  | "Linux"
  | "macOS";

export type DownloadCategory =
  | "application"
  | "update"
  | "tool"
  | "asset";

export type DownloadItem = {
  id: string;

  name: string;
  version: string;

  platform: DownloadPlatform;
  category: DownloadCategory;

  fileSize: string;
  releaseDate: string;

  downloadUrl: string;
  releaseNotesUrl?: string;

  latest: boolean;
};

export type DownloadHistoryEntry = {
  id: string;

  productName: string;
  version: string;

  platform: DownloadPlatform;

  downloadedAt: string;
};

export async function getDownloads(): Promise<
  DownloadItem[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/downloads`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load downloads."
    );
  }

  const data = await response.json();

  return data.downloads ?? [];
}

export async function getDownload(
  downloadId: string
): Promise<DownloadItem> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/downloads/${downloadId}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load download."
    );
  }

  const data = await response.json();

  return data.download;
}

export async function startDownload(
  downloadId: string
): Promise<string> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/downloads/${downloadId}/download`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to start download."
    );
  }

  const data = await response.json();

  return data.downloadUrl;
}

export async function getDownloadHistory(): Promise<
  DownloadHistoryEntry[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/downloads/history`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load download history."
    );
  }

  const data = await response.json();

  return data.history ?? [];
}

export async function getLatestDownloads(): Promise<
  DownloadItem[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/downloads/latest`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load latest downloads."
    );
  }

  const data = await response.json();

  return data.downloads ?? [];
}

export async function getDownloadsByPlatform(
  platform: DownloadPlatform
): Promise<DownloadItem[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/downloads?platform=${encodeURIComponent(
      platform
    )}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load platform downloads."
    );
  }

  const data = await response.json();

  return data.downloads ?? [];
}

export async function getReleaseNotes(
  downloadId: string
): Promise<string> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/downloads/${downloadId}/release-notes`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load release notes."
    );
  }

  const data = await response.json();

  return data.releaseNotes;
}