type Statistic = {
  id: string;
  label: string;
  value: number | string;
  description?: string;
};

type StatisticsCardProps = {
  statistics: Statistic[];
};

export default function StatisticsCard({
  statistics,
}: StatisticsCardProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Statistics
        </p>

        <h2 className="text-2xl font-bold text-white">
          Account Stats
        </h2>

        <p className="mt-3 text-forge-silver">
          A summary of measurable activity across your Astral Forge account.
        </p>
      </div>

      {statistics.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Statistics Available
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Account statistics will appear here once activity has been recorded.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {statistics.map((statistic) => (
            <div
              key={statistic.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <p className="text-sm text-forge-silver">
                {statistic.label}
              </p>

              <p className="mt-2 text-2xl font-bold text-forge-gold">
                {typeof statistic.value === "number"
                  ? statistic.value.toLocaleString()
                  : statistic.value}
              </p>

              {statistic.description && (
                <p className="mt-2 text-xs text-forge-silver">
                  {statistic.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}