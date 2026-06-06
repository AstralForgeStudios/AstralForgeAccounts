// src/types/audit.ts

export type AuditSeverity = "info" | "warning" | "critical";

export type AuditCategory =
  | "account"
  | "billing"
  | "security"
  | "systems"
  | "downloads"
  | "notifications";

export type AuditLogEntry = {
  id: string;

  category: AuditCategory;
  severity: AuditSeverity;

  action: string;
  description: string;

  ipAddress?: string | null;
  userAgent?: string | null;

  createdAt: string;
};