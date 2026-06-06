// src/types/avatar.ts

export type AvatarSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export type Avatar = {
  id: string;

  userId: string;

  url: string;

  fileName: string;
  contentType: string;

  size: number;

  width: number;
  height: number;

  createdAt: string;
  updatedAt: string;
};

export type AvatarUploadRequest = {
  file: File;
};

export type AvatarUploadResponse = {
  avatar: Avatar;
};

export type AvatarDeleteResponse = {
  success: boolean;
};

export type AvatarCrop = {
  x: number;
  y: number;

  width: number;
  height: number;
};

export type AvatarValidationResult = {
  valid: boolean;
  error?: string;
};

export const AVATAR_SIZES: Record<
  AvatarSize,
  number
> = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
  "2xl": 128,
};

export const AVATAR_ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
] as const;

export const AVATAR_MAX_SIZE =
  2 * 1024 * 1024; // 2 MB