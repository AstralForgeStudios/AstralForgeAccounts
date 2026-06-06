// src/services/audit.service.ts

export type AuditLogSeverity = "info" | "warning" | "critical";

export type AuditLogEntry = {
  id: string;
  action: string;
  description: string;
  severity: AuditLogSeverity;
  createdAt: string;
  ipAddress?: string;
};

export async function getAuditLog(): Promise<AuditLogEntry[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/audit-log`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to load audit log.");
  }

  const data = await response.json();

  return data.entries ?? [];
}