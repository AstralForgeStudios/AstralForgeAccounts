type NotificationChannel = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

type NotificationSettingsProps = {
  channels: NotificationChannel[];
  onToggle: (id: string, enabled: boolean) => void;
};

export default function NotificationSettings({
  channels,
  onToggle,
}: NotificationSettingsProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Settings
        </p>

        <h2 className="text-2xl font-bold text-white">
          Notification Settings
        </h2>

        <p className="mt-3 text-forge-silver">
          Control how Astral Forge sends alerts, messages, updates, and account
          notices.
        </p>
      </div>

      {channels.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Notification Settings Available
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Notification controls will appear here once they are available.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="flex flex-col gap-4 rounded-xl border border-forge-border bg-forge-dark p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-white">
                  {channel.label}
                </h3>

                <p className="mt-1 text-sm text-forge-silver">
                  {channel.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onToggle(channel.id, !channel.enabled)}
                className={`w-fit rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  channel.enabled
                    ? "border-forge-gold/40 bg-forge-gold/10 text-forge-gold"
                    : "border-forge-border text-forge-silver hover:border-forge-gold hover:text-forge-gold"
                }`}
              >
                {channel.enabled ? "Enabled" : "Disabled"}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}