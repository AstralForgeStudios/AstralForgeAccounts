type CommunityCardProps = {
  friendsCount?: number;
  groupsCount?: number;
  activeCampaignsCount?: number;
  forumReputation?: number;
  discordLinked?: boolean;
};

export default function CommunityCard({
  friendsCount = 0,
  groupsCount = 0,
  activeCampaignsCount = 0,
  forumReputation = 0,
  discordLinked = false,
}: CommunityCardProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Community
        </p>

        <h2 className="text-2xl font-bold text-white">
          Community Presence
        </h2>

        <p className="mt-3 text-forge-silver">
          Track your presence across Astral Forge communities, groups, and campaigns.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <CommunityStat label="Friends" value={friendsCount} />
        <CommunityStat label="Groups" value={groupsCount} />
        <CommunityStat label="Active Campaigns" value={activeCampaignsCount} />
        <CommunityStat label="Forum Reputation" value={forumReputation} />
      </div>

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-forge-silver">Discord Linked</span>

          <span
            className={
              discordLinked
                ? "font-semibold text-green-400"
                : "font-semibold text-yellow-300"
            }
          >
            {discordLinked ? "Connected" : "Not Connected"}
          </span>
        </div>
      </div>
    </section>
  );
}

function CommunityStat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-forge-border bg-forge-dark p-4">
      <p className="text-sm text-forge-silver">{label}</p>

      <p className="mt-2 text-2xl font-bold text-forge-gold">
        {value}
      </p>
    </div>
  );
}