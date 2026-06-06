type Achievement = {
  id: string;
  name: string;
  description: string;
  unlockedAt?: string;
};

type AchievementsCardProps = {
  achievements?: Achievement[];
};

export default function AchievementsCard({
  achievements = [],
}: AchievementsCardProps) {
  const totalAchievements = achievements.length;

  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
            Achievements
          </p>

          <h2 className="text-2xl font-bold text-white">
            Achievements
          </h2>

          <p className="mt-3 text-forge-silver">
            Milestones earned throughout your journey across Astral Forge.
          </p>
        </div>

        <div className="rounded-xl border border-forge-border bg-forge-dark px-4 py-3 text-center">
          <p className="text-xs uppercase tracking-wide text-forge-silver">
            Total
          </p>

          <p className="mt-1 text-2xl font-bold text-forge-gold">
            {totalAchievements}
          </p>
        </div>
      </div>

      {achievements.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Achievements Yet
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Continue exploring, creating, and participating within Astral Forge
            to unlock achievements.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold text-white">
                    {achievement.name}
                  </h3>

                  <p className="mt-1 text-sm text-forge-silver">
                    {achievement.description}
                  </p>
                </div>

                {achievement.unlockedAt && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-forge-gold">
                    {achievement.unlockedAt}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm text-forge-silver">
          Achievements recognize participation, creativity, community
          involvement, worldbuilding milestones, and contributions across the
          Astral Forge platform.
        </p>
      </div>
    </section>
  );
}