type ActiveSession = {
  id: string;
  deviceName: string;
  browser: string;
  operatingSystem: string;
  ipAddress: string;
  location?: string;
  lastActiveAt: string;
  current: boolean;
};

type ActiveSessionsProps = {
  sessions: ActiveSession[];
  onRevokeSession: (sessionId: string) => void;
  onRevokeAllOtherSessions?: () => void;
};

export default function ActiveSessions({
  sessions,
  onRevokeSession,
  onRevokeAllOtherSessions,
}: ActiveSessionsProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
            Security
          </p>

          <h2 className="text-2xl font-bold text-white">
            Active Sessions
          </h2>

          <p className="mt-3 text-forge-silver">
            Devices and browsers currently authenticated with your Astral Forge
            account.
          </p>
        </div>

        {sessions.length > 1 && onRevokeAllOtherSessions && (
          <button
            type="button"
            onClick={onRevokeAllOtherSessions}
            className="rounded-lg border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
          >
            Sign Out Everywhere Else
          </button>
        )}
      </div>

      {sessions.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Active Sessions Found
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Session information is currently unavailable.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {sessions.map((session) => (
            <article
              key={session.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-white">
                      {session.deviceName}
                    </h3>

                    {session.current && (
                      <span className="rounded-full border border-green-500/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-400">
                        Current Session
                      </span>
                    )}
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    <SessionField
                      label="Browser"
                      value={session.browser}
                    />

                    <SessionField
                      label="Operating System"
                      value={session.operatingSystem}
                    />

                    <SessionField
                      label="IP Address"
                      value={session.ipAddress}
                    />

                    <SessionField
                      label="Location"
                      value={session.location ?? "Unavailable"}
                    />
                  </div>

                  <p className="mt-4 text-sm text-forge-silver">
                    Last Active: {session.lastActiveAt}
                  </p>
                </div>

                {!session.current && (
                  <button
                    type="button"
                    onClick={() => onRevokeSession(session.id)}
                    className="rounded-lg border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm text-forge-silver">
          If you do not recognize a session, sign it out immediately and update
          your account password. Enabling two-factor authentication is strongly
          recommended.
        </p>
      </div>
    </section>
  );
}

function SessionField({
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