// src/lib/utils.ts

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date using the user's locale.
 */
export function formatDate(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions
): string {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: undefined,
    ...options,
  }).format(new Date(date));
}

/**
 * Format date + time.
 */
export function formatDateTime(
  date: string | Date
): string {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

/**
 * Format currency.
 */
export function formatCurrency(
  amount: number,
  currency = "USD"
): string {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Format large numbers.
 */
export function formatNumber(
  value: number
): string {
  return new Intl.NumberFormat().format(value);
}

/**
 * Convert bytes into readable file sizes.
 */
export function formatFileSize(
  bytes: number
): string {
  if (bytes === 0) return "0 B";

  const units = [
    "B",
    "KB",
    "MB",
    "GB",
    "TB",
  ];

  const index = Math.floor(
    Math.log(bytes) / Math.log(1024)
  );

  return `${(
    bytes /
    Math.pow(1024, index)
  ).toFixed(2)} ${units[index]}`;
}

/**
 * Truncate text safely.
 */
export function truncate(
  value: string,
  length = 100
): string {
  if (value.length <= length) {
    return value;
  }

  return `${value.slice(0, length)}...`;
}

/**
 * Generate initials from a display name.
 */
export function getInitials(
  name: string
): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Sleep helper.
 */
export function sleep(
  ms: number
): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

/**
 * Copy text to clipboard.
 */
export async function copyToClipboard(
  text: string
): Promise<void> {
  await navigator.clipboard.writeText(text);
}

/**
 * Check if value is empty.
 */
export function isEmpty(
  value: unknown
): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return false;
}

/**
 * Create a URL-safe slug.
 */
export function slugify(
  value: string
): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}