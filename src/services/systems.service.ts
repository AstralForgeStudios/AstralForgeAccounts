// src/services/systems.service.ts

export type SystemStatus =
  | "operational"
  | "degraded"
  | "maintenance"
  | "outage";

export type SystemService = {
  id: string;
  name: string;
  status: SystemStatus;
  description?: string;
};

export type ConnectedAccount = {
  id: string;
  provider: string;
  username: string;
  connectedAt: string;
};

export type ApiKey = {
  id: string;
  name: string;
  prefix: string;
  createdAt: string;
  lastUsedAt?: string | null;
  expiresAt?: string | null;
  active: boolean;
};

export type ExperimentalFeature = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
};

export type DeveloperTool = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
};

export async function getSystemStatus(): Promise<SystemService[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/status`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load system status.");
  }

  const data = await response.json();

  return data.services ?? [];
}

export async function getConnectedAccounts(): Promise<
  ConnectedAccount[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/accounts`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load connected accounts."
    );
  }

  const data = await response.json();

  return data.accounts ?? [];
}

export async function connectAccount(
  provider: string
): Promise<{ authorizationUrl: string }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/accounts/connect`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        provider,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to start account connection."
    );
  }

  const data = await response.json();

  return {
    authorizationUrl: data.authorizationUrl,
  };
}

export async function disconnectAccount(
  accountId: string
): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/accounts/${accountId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to disconnect account."
    );
  }
}

export async function getApiKeys(): Promise<ApiKey[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/api-keys`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load API keys."
    );
  }

  const data = await response.json();

  return data.keys ?? [];
}

export async function createApiKey(
  name: string
): Promise<{
  id: string;
  key: string;
}> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/api-keys`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to create API key."
    );
  }

  const data = await response.json();

  return {
    id: data.id,
    key: data.key,
  };
}

export async function revokeApiKey(
  keyId: string
): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/api-keys/${keyId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to revoke API key."
    );
  }
}

export async function getDeveloperTools(): Promise<
  DeveloperTool[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/developer-tools`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load developer tools."
    );
  }

  const data = await response.json();

  return data.tools ?? [];
}

export async function toggleDeveloperTool(
  toolId: string,
  enabled: boolean
): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/developer-tools/${toolId}`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enabled,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to update developer tool."
    );
  }
}

export async function getExperimentalFeatures(): Promise<
  ExperimentalFeature[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/experimental-features`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load experimental features."
    );
  }

  const data = await response.json();

  return data.features ?? [];
}

export async function toggleExperimentalFeature(
  featureId: string,
  enabled: boolean
): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/systems/experimental-features/${featureId}`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enabled,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to update experimental feature."
    );
  }
}