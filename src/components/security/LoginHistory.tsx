type LoginHistoryEntry = {
  id: string;
  loggedInAt: string;
  ipAddress: string;
  browser: string;
  operatingSystem: string;
  location?: string;
  successful: boolean;
};

type LoginHistoryProps = {
  logins: LoginHistoryEntry[];
};

export default function LoginHistory({
  logins,
}: LoginHistoryProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Security
        </p>

        <h2 className="text-2xl font-bold text-white">
          Login History
        </h2>

        <p className="mt-3 text-forge-silver">
          Review successful and unsuccessful sign-in attempts associated with
          your Astral Forge account.
        </p>
      </div>

      {logins.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Login History Available
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Login activity will appear here once authentication events have been
            recorded.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {logins.map((login) => (
            <article
              key={login.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                        login.successful
                          ? "border-green-500/40 text-green-400"
                          : "border-red-500/40 text-red-400"
                      }`}
                    >
                      {login.successful
                        ? "Successful Login"
                        : "Failed Login"}
                    </span>

                    <time className="text-xs uppercase tracking-wide text-forge-silver">
                      {login.loggedInAt}
                    </time>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <HistoryField
                      label="IP Address"
                      value={login.ipAddress}
                    />

                    <HistoryField
                      label="Browser"
                      value={login.browser}
                    />

                    <HistoryField
                      label="Operating System"
                      value={login.operatingSystem}
                    />

                    <HistoryField
                      label="Location"
                      value={login.location ?? "Unavailable"}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm text-forge-silver">
          If you notice a login attempt you do not recognize, immediately change
          your password, review active sessions, and enable two-factor
          authentication.
        </p>
      </div>
    </section>
  );
}

function HistoryField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-forge-silver">
        {label}
      </p>

      <p className="mt-1 text-sm text-white break-words">
        {value}
      </p>
    </div>
  );
}