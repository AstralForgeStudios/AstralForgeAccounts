type ServiceStatus = "operational" | "degraded" | "maintenance" | "outage";

type SystemService = {
  id: string;
  name: string;
  status: ServiceStatus;
  description?: string;
};

type SystemStatusProps = {
  services: SystemService[];
  lastUpdated: string;
};

const statusStyles: Record<ServiceStatus, string> = {
  operational:
    "border-green-500/40 bg-green-500/10 text-green-400",

  degraded:
    "border-yellow-500/40 bg-yellow-500/10 text-yellow-300",

  maintenance:
    "border-blue-500/40 bg-blue-500/10 text-blue-300",

  outage:
    "border-red-500/40 bg-red-500/10 text-red-400",
};

const statusLabels: Record<ServiceStatus, string> = {
  operational: "Operational",
  degraded: "Degraded",
  maintenance: "Maintenance",
  outage: "Outage",
};

export default function SystemStatus({
  services,
  lastUpdated,
}: SystemStatusProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
            Status
          </p>

          <h2 className="text-2xl font-bold text-white">
            System Status
          </h2>

          <p className="mt-3 text-forge-silver">
            Current status of Astral Forge services and infrastructure.
          </p>
        </div>

        <div className="rounded-lg border border-forge-border bg-forge-dark px-4 py-2">
          <p className="text-xs uppercase tracking-wide text-forge-silver">
            Last Updated
          </p>

          <p className="mt-1 text-sm text-white">
            {lastUpdated}
          </p>
        </div>
      </div>

      {services.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            Status Unavailable
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Service status information is currently unavailable.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-white">
                    {service.name}
                  </h3>

                  {service.description && (
                    <p className="mt-2 text-sm text-forge-silver">
                      {service.description}
                    </p>
                  )}
                </div>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[service.status]}`}
                >
                  {statusLabels[service.status]}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}