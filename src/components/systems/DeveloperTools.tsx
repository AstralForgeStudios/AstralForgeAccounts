type ConnectedAccount = {
  id: string;
  provider: string;
  username: string;
  connectedAt: string;
};

type ConnectedAccountsProps = {
  accounts: ConnectedAccount[];
  onConnect: (provider: string) => void;
  onDisconnect: (accountId: string) => void;
};

const availableProviders = ["Discord", "Google", "GitHub", "Twitch", "Patreon"];

export default function ConnectedAccounts({
  accounts,
  onConnect,
  onDisconnect,
}: ConnectedAccountsProps) {
  const connectedProviders = new Set(
    accounts.map((account) => account.provider)
  );

  const unconnectedProviders = availableProviders.filter(
    (provider) => !connectedProviders.has(provider)
  );

  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Integrations
        </p>

        <h2 className="text-2xl font-bold text-white">Connected Accounts</h2>

        <p className="mt-3 text-forge-silver">
          Link external accounts for sign-in, community features, creator
          verification, and future integrations.
        </p>
      </div>

      {accounts.length > 0 && (
        <div className="mb-6 space-y-3">
          {accounts.map((account) => (
            <article
              key={account.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-white">
                      {account.provider}
                    </h3>

                    <span className="rounded-full border border-green-500/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-400">
                      Connected
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-forge-silver">
                    {account.username}
                  </p>

                  <p className="mt-1 text-xs text-forge-silverDark">
                    Connected {account.connectedAt}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onDisconnect(account.id)}
                  className="rounded-lg border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
                >
                  Disconnect
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {unconnectedProviders.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            All Available Accounts Connected
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Every available provider has already been linked to your account.
          </p>
        </div>
      ) : (
        <div>
          <h3 className="mb-4 font-semibold text-white">
            Available Connections
          </h3>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {unconnectedProviders.map((provider) => (
              <button
                key={provider}
                type="button"
                onClick={() => onConnect(provider)}
                className="rounded-xl border border-forge-border bg-forge-dark p-4 text-left transition hover:border-forge-gold"
              >
                <p className="font-semibold text-white">{provider}</p>

                <p className="mt-1 text-sm text-forge-silver">
                  Connect {provider}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}