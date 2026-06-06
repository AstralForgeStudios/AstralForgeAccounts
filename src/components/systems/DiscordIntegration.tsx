type DiscordConnection = {
  connected: boolean;
  discordId?: string;
  username?: string;
  avatarUrl?: string | null;
  connectedAt?: string;
};

type DiscordIntegrationProps = {
  connection: DiscordConnection;
  onConnect: () => void;
  onDisconnect: () => void;
};

export default function DiscordIntegration({
  connection,
  onConnect,
  onDisconnect,
}: DiscordIntegrationProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Integration
        </p>

        <h2 className="text-2xl font-bold text-white">
          Discord Integration
        </h2>

        <p className="mt-3 text-forge-silver">
          Connect your Discord account to synchronize community access,
          permissions, Forge Pass roles, and future Astral Forge services.
        </p>
      </div>

      {!connection.connected ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6">
          <h3 className="text-lg font-semibold text-white">
            Discord Not Connected
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Connect your Discord account to access Astral Forge community
            features and role synchronization.
          </p>

          <button
            type="button"
            onClick={onConnect}
            className="mt-6 rounded-lg bg-[#5865F2] px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
          >
            Connect Discord
          </button>
        </div>
      ) : (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              {connection.avatarUrl && (
                <img
                  src={connection.avatarUrl}
                  alt="Discord Avatar"
                  className="h-16 w-16 rounded-full border border-forge-border object-cover"
                />
              )}

              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-white">
                    {connection.username}
                  </h3>

                  <span className="rounded-full border border-green-500/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-400">
                    Connected
                  </span>
                </div>

                {connection.discordId && (
                  <p className="mt-1 text-sm text-forge-silver">
                    ID: {connection.discordId}
                  </p>
                )}

                {connection.connectedAt && (
                  <p className="mt-1 text-xs text-forge-silverDark">
                    Connected {connection.connectedAt}
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={onDisconnect}
              className="rounded-lg border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
            >
              Disconnect
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <h3 className="font-semibold text-white">
          Discord Benefits
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-forge-silver">
          <li>• Automatic Discord authentication</li>
          <li>• Astral Forge Discord role synchronization</li>
          <li>• Forge Pass role assignment</li>
          <li>• Community access verification</li>
          <li>• Future creator and campaign integrations</li>
        </ul>
      </div>
    </section>
  );
}