type SystemOverviewProps = {
  accountStatus: string;
  forgePassTier: string;
  emailVerified: boolean;
  discordConnected: boolean;
  twoFactorEnabled: boolean;
  activeSessions: number;
  apiKeys: number;
};

export default function SystemOverview({
  accountStatus,
  forgePassTier,
  emailVerified,
  discordConnected,
  twoFactorEnabled,
  activeSessions,
  apiKeys,
}: SystemOverviewProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Systems
        </p>

        <h2 className="text-2xl font-bold text-white">
          System Overview
        </h2>

        <p className="mt-3 text-forge-silver">
          A high-level overview of your Astral Forge account systems,
          integrations, and security configuration.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <OverviewCard
          label="Account Status"
          value={accountStatus}
        />

        <OverviewCard
          label="Forge Pass"
          value={forgePassTier}
        />

        <OverviewCard
          label="Email Verification"
          value={emailVerified ? "Verified" : "Unverified"}
          status={emailVerified}
        />

        <OverviewCard
          label="Discord"
          value={discordConnected ? "Connected" : "Not Connected"}
          status={discordConnected}
        />

        <OverviewCard
          label="Two-Factor Authentication"
          value={twoFactorEnabled ? "Enabled" : "Disabled"}
          status={twoFactorEnabled}
        />

        <OverviewCard
          label="Active Sessions"
          value={activeSessions.toLocaleString()}
        />

        <OverviewCard
          label="API Keys"
          value={apiKeys.toLocaleString()}
        />
      </div>

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm text-forge-silver">
          Review integrations, security settings, connected accounts, API
          access, and experimental features from the Systems dashboard.
        </p>
      </div>
    </section>
  );
}

type OverviewCardProps = {
  label: string;
  value: string;
  status?: boolean;
};

function OverviewCard({
  label,
  value,
  status,
}: OverviewCardProps) {
  return (
    <div className="rounded-xl border border-forge-border bg-forge-dark p-4">
      <p className="text-sm text-forge-silver">
        {label}
      </p>

      <p
        className={`mt-2 font-semibold ${
          status === undefined
            ? "text-white"
            : status
              ? "text-green-400"
              : "text-yellow-300"
        }`}
      >
        {value}
      </p>
    </div>
  );
}