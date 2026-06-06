// src/services/avatar.service.ts

import { validateImageFile } from "@/lib/storage";

export type AvatarUploadResponse = {
  avatarUrl: string;
};

const MAX_AVATAR_SIZE_MB = 2;

export async function uploadAvatar(
  file: File
): Promise<AvatarUploadResponse> {
  const validationError = validateImageFile(
    file,
    MAX_AVATAR_SIZE_MB
  );

  if (validationError) {
    throw new Error(validationError);
  }

  const formData = new FormData();

  formData.append("avatar", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/avatar`,
    {
      method: "POST",
      credentials: "include",
      body: formData,
    }
  );

  if (!response.ok) {
    const error =
      (await response.json().catch(() => null))
        ?.message ?? "Failed to upload avatar.";

    throw new Error(error);
  }

  const data = await response.json();

  return {
    avatarUrl: data.avatarUrl,
  };
}

export async function deleteAvatar(): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/avatar`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  if (!response.ok) {
    const error =
      (await response.json().catch(() => null))
        ?.message ?? "Failed to delete avatar.";

    throw new Error(error);
  }
}

export async function getAvatar(): Promise<string | null> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/avatar`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load avatar.");
  }

  const data = await response.json();

  return data.avatarUrl ?? null;
}