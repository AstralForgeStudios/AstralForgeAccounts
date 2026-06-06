type AuditLogSeverity = "info" | "warning" | "critical";

type AuditLogEntry = {
  id: string;
  action: string;
  description: string;
  severity: AuditLogSeverity;
  createdAt: string;
  ipAddress?: string;
};

type AuditLogProps = {
  entries: AuditLogEntry[];
};

const severityStyles: Record<AuditLogSeverity, string> = {
  info: "border-forge-gold/40 text-forge-gold",
  warning: "border-yellow-500/40 text-yellow-300",
  critical: "border-red-500/40 text-red-400",
};

const severityLabels: Record<AuditLogSeverity, string> = {
  info: "Info",
  warning: "Warning",
  critical: "Critical",
};

export default function AuditLog({ entries }: AuditLogProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Audit
        </p>

        <h2 className="text-2xl font-bold text-white">Audit Log</h2>

        <p className="mt-3 text-forge-silver">
          A record of important account and security-related actions.
        </p>
      </div>

      {entries.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Audit Events Found
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Important account changes will appear here once recorded.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {entries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${severityStyles[entry.severity]}`}
                    >
                      {severityLabels[entry.severity]}
                    </span>

                    <time className="text-xs uppercase tracking-wide text-forge-silver">
                      {entry.createdAt}
                    </time>
                  </div>

                  <h3 className="mt-3 font-semibold text-white">
                    {entry.action}
                  </h3>

                  <p className="mt-2 text-sm text-forge-silver">
                    {entry.description}
                  </p>
                </div>

                {entry.ipAddress && (
                  <div className="rounded-lg border border-forge-border px-3 py-2">
                    <p className="text-xs uppercase tracking-wide text-forge-silver">
                      IP Address
                    </p>

                    <p className="mt-1 font-mono text-sm text-white">
                      {entry.ipAddress}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}