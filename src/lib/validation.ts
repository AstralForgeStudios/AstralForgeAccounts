// src/lib/validation.ts

import { z } from "zod";

export const displayNameSchema = z
  .string()
  .min(2, "Display name must be at least 2 characters.")
  .max(50, "Display name cannot exceed 50 characters.");

export const usernameSchema = z
  .string()
  .min(3, "Username must be at least 3 characters.")
  .max(32, "Username cannot exceed 32 characters.")
  .regex(
    /^[a-zA-Z0-9_-]+$/,
    "Username can only contain letters, numbers, underscores, and hyphens."
  );

export const emailSchema = z
  .string()
  .email("Please enter a valid email address.");

export const passwordSchema = z
  .string()
  .min(12, "Password must be at least 12 characters.");

export const profileSchema = z.object({
  displayName: displayNameSchema,
  bio: z.string().max(1000, "Bio cannot exceed 1000 characters.").optional(),
  location: z.string().max(100, "Location cannot exceed 100 characters.").optional(),
  pronouns: z.string().max(50, "Pronouns cannot exceed 50 characters.").optional(),
  website: z.string().url("Please enter a valid URL.").optional().or(z.literal("")),
});

export const passwordChangeSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required."),
    newPassword: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your new password."),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const imageFileSchema = z
  .instanceof(File)
  .refine(
    (file) => ["image/png", "image/jpeg", "image/webp"].includes(file.type),
    "File must be PNG, JPG, or WEBP."
  );

export const avatarFileSchema = imageFileSchema.refine(
  (file) => file.size <= 2 * 1024 * 1024,
  "Avatar must be 2 MB or smaller."
);

export const bannerFileSchema = imageFileSchema.refine(
  (file) => file.size <= 5 * 1024 * 1024,
  "Banner must be 5 MB or smaller."
);

export type ProfileFormValues = z.infer<typeof profileSchema>;
export type PasswordChangeValues = z.infer<typeof passwordChangeSchema>;