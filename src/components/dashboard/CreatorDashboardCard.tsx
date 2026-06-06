type CreatorDashboardCardProps = {
  publishedArticles?: number;
  publishedWorlds?: number;
  activeCampaigns?: number;
  followers?: number;
  isCreator?: boolean;
};

export default function CreatorDashboardCard({
  publishedArticles = 0,
  publishedWorlds = 0,
  activeCampaigns = 0,
  followers = 0,
  isCreator = false,
}: CreatorDashboardCardProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Creator
        </p>

        <h2 className="text-2xl font-bold text-white">
          Creator Dashboard
        </h2>

        <p className="mt-3 text-forge-silver">
          Monitor your published content, campaigns, and community reach across
          Astral Forge.
        </p>
      </div>

      {!isCreator ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            Creator Features Not Yet Active
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Publish articles, worlds, campaigns, and other content to begin
            building your creator presence.
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <CreatorStat
              label="Published Articles"
              value={publishedArticles}
            />

            <CreatorStat
              label="Published Worlds"
              value={publishedWorlds}
            />

            <CreatorStat
              label="Active Campaigns"
              value={activeCampaigns}
            />

            <CreatorStat
              label="Followers"
              value={followers}
            />
          </div>

          <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
            <p className="text-sm text-forge-silver">
              Creator statistics aggregate content from Codex, Play, and future
              Astral Forge publishing systems.
            </p>
          </div>
        </>
      )}
    </section>
  );
}

function CreatorStat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-forge-border bg-forge-dark p-4">
      <p className="text-sm text-forge-silver">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-forge-gold">
        {value}
      </p>
    </div>
  );
}