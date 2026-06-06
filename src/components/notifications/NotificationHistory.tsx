type NotificationType =
  | "account"
  | "billing"
  | "downloads"
  | "security"
  | "community"
  | "creator"
  | "system";

type NotificationHistoryItem = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
};

type NotificationHistoryProps = {
  notifications: NotificationHistoryItem[];
};

const notificationLabels: Record<NotificationType, string> = {
  account: "Account",
  billing: "Billing",
  downloads: "Downloads",
  security: "Security",
  community: "Community",
  creator: "Creator",
  system: "System",
};

export default function NotificationHistory({
  notifications,
}: NotificationHistoryProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          History
        </p>

        <h2 className="text-2xl font-bold text-white">
          Notification History
        </h2>

        <p className="mt-3 text-forge-silver">
          Recent alerts and messages sent to your Astral Forge account.
        </p>
      </div>

      {notifications.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Notifications Found
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Notifications will appear here once they are received.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <article
              key={notification.id}
              className={`rounded-xl border p-4 ${
                notification.read
                  ? "border-forge-border bg-forge-dark"
                  : "border-forge-gold/40 bg-forge-gold/5"
              }`}
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <span className="inline-flex rounded-full border border-forge-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forge-gold">
                    {notificationLabels[notification.type]}
                  </span>

                  <h3 className="mt-3 font-semibold text-white">
                    {notification.title}
                  </h3>

                  <p className="mt-2 text-sm text-forge-silver">
                    {notification.message}
                  </p>
                </div>

                <time className="text-xs uppercase tracking-wide text-forge-silver">
                  {notification.createdAt}
                </time>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}