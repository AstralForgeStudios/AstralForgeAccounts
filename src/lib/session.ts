// src/lib/session.ts

export type SessionUser = {
  id: string;
  username: string;
  displayName: string;
  email: string;
  avatarUrl?: string | null;
  forgePassTier: "Initiate" | "Adept" | "Master";
  role: "user" | "creator" | "moderator" | "admin" | "owner";
  emailVerified: boolean;
};

export type Session = {
  user: SessionUser;
  expiresAt: string;
};

export async function getSession(): Promise<Session | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/session`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data.session ?? null;
}

export async function refreshSession(): Promise<Session | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/session/refresh`, {
    method: "POST",
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data.session ?? null;
}

export async function endSession(): Promise<void> {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  window.location.href = `${process.env.NEXT_PUBLIC_HOME_URL}/login`;
}

export function isSessionExpired(session: Session | null): boolean {
  if (!session) return true;

  const expiresAt = new Date(session.expiresAt).getTime();
  const now = Date.now();

  return expiresAt <= now;
}

export function getSessionUser(session: Session | null): SessionUser | null {
  return session?.user ?? null;
}