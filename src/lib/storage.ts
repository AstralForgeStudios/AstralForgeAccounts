// src/lib/storage.ts

export const STORAGE_BUCKETS = {
  AVATARS: "avatars",
  BANNERS: "banners",
  DOWNLOADS: "downloads",
  MEDIA: "media",
} as const;

export type StorageBucket =
  (typeof STORAGE_BUCKETS)[keyof typeof STORAGE_BUCKETS];

export type UploadTarget = "avatar" | "banner" | "media";

export type UploadResult = {
  url: string;
  key: string;
};

export function validateImageFile(
  file: File,
  maxSizeInMB: number
): string | null {
  const allowedTypes = ["image/png", "image/jpeg", "image/webp"];

  if (!allowedTypes.includes(file.type)) {
    return "Please upload a PNG, JPG, or WEBP image.";
  }

  const maxSize = maxSizeInMB * 1024 * 1024;

  if (file.size > maxSize) {
    return `File must be ${maxSizeInMB} MB or smaller.`;
  }

  return null;
}

export async function uploadFile(
  file: File,
  target: UploadTarget
): Promise<UploadResult> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("target", target);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/storage/upload`,
    {
      method: "POST",
      credentials: "include",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("File upload failed.");
  }

  const data = await response.json();

  return {
    url: data.url,
    key: data.key,
  };
}

export function getDefaultAvatar(): string {
  return "/avatars/default-avatar.webp";
}

export function getDefaultBanner(): string {
  return "/banners/default-banner.webp";
}