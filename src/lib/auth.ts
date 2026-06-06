export type AuthUser = {
  id: string;
  username: string;
  displayName: string;
  email: string;
  avatarUrl?: string | null;
  bannerUrl?: string | null;
  forgePassTier: "Initiate" | "Adept" | "Master";
  emailVerified: boolean;
};

export async function getCurrentUser(): Promise<AuthUser | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data.user ?? null;
}

export async function logout(): Promise<void> {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  window.location.href = `${process.env.NEXT_PUBLIC_HOME_URL}/login`;
}

export function isAuthenticated(user: AuthUser | null): boolean {
  return Boolean(user);
}

export function getLoginUrl(redirectUrl?: string): string {
  const loginUrl = new URL(
    `${process.env.NEXT_PUBLIC_HOME_URL}/login`
  );

  if (redirectUrl) {
    loginUrl.searchParams.set("redirect", redirectUrl);
  }

  return loginUrl.toString();
}