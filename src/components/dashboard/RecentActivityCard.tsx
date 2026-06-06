type ActivityType =
  | "account"
  | "billing"
  | "download"
  | "security"
  | "content"
  | "community"
  | "system";

type ActivityItem = {
  id: string;
  type: ActivityType;
  title: string;
  description?: string;
  occurredAt: string;
};

type RecentActivityCardProps = {
  activities: ActivityItem[];
};

const activityLabels: Record<ActivityType, string> = {
  account: "Account",
  billing: "Billing",
  download: "Download",
  security: "Security",
  content: "Content",
  community: "Community",
  system: "System",
};

export default function RecentActivityCard({
  activities,
}: RecentActivityCardProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Activity
        </p>

        <h2 className="text-2xl font-bold text-white">
          Recent Activity
        </h2>

        <p className="mt-3 text-forge-silver">
          Recent actions connected to your Astral Forge account.
        </p>
      </div>

      {activities.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Recent Activity
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Account activity will appear here once actions are recorded.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="inline-flex rounded-full border border-forge-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forge-gold">
                    {activityLabels[activity.type]}
                  </span>

                  <h3 className="mt-3 font-semibold text-white">
                    {activity.title}
                  </h3>

                  {activity.description && (
                    <p className="mt-1 text-sm text-forge-silver">
                      {activity.description}
                    </p>
                  )}
                </div>

                <time className="text-sm text-forge-silver">
                  {activity.occurredAt}
                </time>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}