type CommunityNotification = {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
};

type CommunityNotificationsProps = {
  notifications: CommunityNotification[];
};

export default function CommunityNotifications({
  notifications,
}: CommunityNotificationsProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Community
        </p>

        <h2 className="text-2xl font-bold text-white">
          Community Notifications
        </h2>

        <p className="mt-3 text-forge-silver">
          Activity from friends, groups, campaigns, forums, and creators you
          follow.
        </p>
      </div>

      {notifications.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Community Notifications
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Community activity will appear here when available.
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
                  <h3 className="font-semibold text-white">
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