// src/services/security.service.ts

export type SecurityOverview = {
  emailVerified: boolean;
  twoFactorEnabled: boolean;
  activeSessions: number;
  recoveryCodesRemaining: number;
  lastPasswordChange?: string | null;
};

export type ActiveSession = {
  id: string;
  device: string;
  browser: string;
  operatingSystem: string;
  ipAddress: string;
  location?: string | null;
  current: boolean;
  lastActiveAt: string;
};

export type LoginHistoryEntry = {
  id: string;
  ipAddress: string;
  location?: string | null;
  browser: string;
  operatingSystem: string;
  successful: boolean;
  createdAt: string;
};

export type RecoveryCode = {
  code: string;
};

export async function getSecurityOverview(): Promise<SecurityOverview> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load security overview.");
  }

  const data = await response.json();

  return data.security;
}

export async function changePassword(
  currentPassword: string,
  newPassword: string
): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security/password`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    }
  );

  if (!response.ok) {
    const error =
      (await response.json().catch(() => null))
        ?.message ?? "Failed to update password.";

    throw new Error(error);
  }
}

export async function enableTwoFactor(): Promise<{
  secret: string;
  qrCodeUrl: string;
}> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security/2fa/enable`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to initialize two-factor authentication."
    );
  }

  const data = await response.json();

  return {
    secret: data.secret,
    qrCodeUrl: data.qrCodeUrl,
  };
}

export async function verifyTwoFactor(
  code: string
): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security/2fa/verify`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to verify two-factor authentication."
    );
  }
}

export async function disableTwoFactor(
  code: string
): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security/2fa/disable`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to disable two-factor authentication."
    );
  }
}

export async function getRecoveryCodes(): Promise<
  RecoveryCode[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security/recovery-codes`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load recovery codes."
    );
  }

  const data = await response.json();

  return data.codes ?? [];
}

export async function regenerateRecoveryCodes(): Promise<
  RecoveryCode[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security/recovery-codes/regenerate`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to regenerate recovery codes."
    );
  }

  const data = await response.json();

  return data.codes ?? [];
}

export async function getActiveSessions(): Promise<
  ActiveSession[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security/sessions`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load active sessions."
    );
  }

  const data = await response.json();

  return data.sessions ?? [];
}

export async function revokeSession(
  sessionId: string
): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security/sessions/${sessionId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to revoke session."
    );
  }
}

export async function revokeAllOtherSessions(): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security/sessions/revoke-all`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to revoke sessions."
    );
  }
}

export async function getLoginHistory(): Promise<
  LoginHistoryEntry[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/security/login-history`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load login history."
    );
  }

  const data = await response.json();

  return data.history ?? [];
}