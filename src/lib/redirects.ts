// src/lib/redirects.ts

import { redirect } from "next/navigation";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  LOGOUT: "/logout",

  DASHBOARD: "/",

  BILLING: "/billing",
  DOWNLOADS: "/downloads",
  NOTIFICATIONS: "/notifications",
  SECURITY: "/security",
  SYSTEMS: "/systems",

  UNAUTHORIZED: "/unauthorized",
  NOT_FOUND: "/404",
} as const;

export function redirectToDashboard(): never {
  redirect(ROUTES.DASHBOARD);
}

export function redirectToLogin(): never {
  redirect(ROUTES.LOGIN);
}

export function redirectToBilling(): never {
  redirect(ROUTES.BILLING);
}

export function redirectToDownloads(): never {
  redirect(ROUTES.DOWNLOADS);
}

export function redirectToNotifications(): never {
  redirect(ROUTES.NOTIFICATIONS);
}

export function redirectToSecurity(): never {
  redirect(ROUTES.SECURITY);
}

export function redirectToSystems(): never {
  redirect(ROUTES.SYSTEMS);
}

export function redirectToUnauthorized(): never {
  redirect(ROUTES.UNAUTHORIZED);
}

export function redirectToNotFound(): never {
  redirect(ROUTES.NOT_FOUND);
}