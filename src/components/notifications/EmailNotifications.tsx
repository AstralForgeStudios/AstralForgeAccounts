type EmailNotificationPreference = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

type EmailNotificationsProps = {
  preferences: EmailNotificationPreference[];
  onToggle: (id: string, enabled: boolean) => void;
};

export default function EmailNotifications({
  preferences,
  onToggle,
}: EmailNotificationsProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Email
        </p>

        <h2 className="text-2xl font-bold text-white">
          Email Notifications
        </h2>

        <p className="mt-3 text-forge-silver">
          Choose which Astral Forge updates should be sent to your email inbox.
        </p>
      </div>

      {preferences.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Email Preferences Available
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Email notification settings will appear here once available.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {preferences.map((preference) => (
            <div
              key={preference.id}
              className="flex flex-col gap-4 rounded-xl border border-forge-border bg-forge-dark p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-white">
                  {preference.label}
                </h3>

                <p className="mt-1 text-sm text-forge-silver">
                  {preference.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  onToggle(preference.id, !preference.enabled)
                }
                className={`w-fit rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  preference.enabled
                    ? "border-forge-gold/40 bg-forge-gold/10 text-forge-gold"
                    : "border-forge-border text-forge-silver hover:border-forge-gold hover:text-forge-gold"
                }`}
              >
                {preference.enabled ? "Enabled" : "Disabled"}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}