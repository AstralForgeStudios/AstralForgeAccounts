type SecurityOverviewProps = {
  emailVerified: boolean;
  twoFactorEnabled: boolean;
  activeSessionsCount: number;
  lastLoginAt?: string | null;
};

export default function SecurityOverview({
  emailVerified,
  twoFactorEnabled,
  activeSessionsCount,
  lastLoginAt,
}: SecurityOverviewProps) {
  const completedChecks = [
    emailVerified,
    twoFactorEnabled,
    activeSessionsCount > 0,
  ].filter(Boolean).length;

  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Security
        </p>

        <h2 className="text-2xl font-bold text-white">Security Overview</h2>

        <p className="mt-3 text-forge-silver">
          Review the protective measures guarding your Astral Forge account.
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-forge-border bg-forge-dark p-5">
        <p className="text-sm text-forge-silver">Security Checks Complete</p>

        <p className="mt-2 text-3xl font-bold text-forge-gold">
          {completedChecks} / 3
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SecurityStatus
          label="Email Verification"
          value={emailVerified ? "Verified" : "Unverified"}
          active={emailVerified}
        />

        <SecurityStatus
          label="Two-Factor Authentication"
          value={twoFactorEnabled ? "Enabled" : "Disabled"}
          active={twoFactorEnabled}
        />

        <SecurityStatus
          label="Active Sessions"
          value={activeSessionsCount.toLocaleString()}
          active={activeSessionsCount > 0}
        />

        <SecurityStatus
          label="Last Login"
          value={lastLoginAt ?? "Unavailable"}
          active={Boolean(lastLoginAt)}
        />
      </div>

      {!twoFactorEnabled && (
        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
          <p className="text-sm text-yellow-300">
            Two-factor authentication is recommended for stronger account
            protection.
          </p>
        </div>
      )}
    </section>
  );
}

function SecurityStatus({
  label,
  value,
  active,
}: {
  label: string;
  value: string;
  active: boolean;
}) {
  return (
    <div className="rounded-xl border border-forge-border bg-forge-dark p-4">
      <p className="text-sm text-forge-silver">{label}</p>

      <p
        className={`mt-2 font-semibold ${
          active ? "text-green-400" : "text-yellow-300"
        }`}
      >
        {value}
      </p>
    </div>
  );
}