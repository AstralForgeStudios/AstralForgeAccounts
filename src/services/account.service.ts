// src/services/account.service.ts

import type { User } from "@/hooks/useUser";

export type UpdateAccountPayload = {
  displayName?: string;
  bio?: string;
  location?: string;
  website?: string;
  pronouns?: string;
};

export async function getAccount(): Promise<User> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to load account.");
  }

  const data = await response.json();

  return data.user;
}

export async function updateAccount(
  payload: UpdateAccountPayload
): Promise<User> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to update account.");
  }

  const data = await response.json();

  return data.user;
}

export async function uploadAvatar(file: File): Promise<User> {
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
    throw new Error("Failed to upload avatar.");
  }

  const data = await response.json();

  return data.user;
}

export async function uploadBanner(file: File): Promise<User> {
  const formData = new FormData();
  formData.append("banner", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/banner`,
    {
      method: "POST",
      credentials: "include",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to upload banner.");
  }

  const data = await response.json();

  return data.user;
}

export async function deleteAccount(): Promise<void> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to delete account.");
  }
}