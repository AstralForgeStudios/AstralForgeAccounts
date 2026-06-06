type OwnedContentCardProps = {
  worldsCount: number;
  campaignsCount: number;
  articlesCount: number;
  productsCount: number;
};

export default function OwnedContentCard({
  worldsCount,
  campaignsCount,
  articlesCount,
  productsCount,
}: OwnedContentCardProps) {
  const totalContent =
    worldsCount +
    campaignsCount +
    articlesCount +
    productsCount;

  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
            Content
          </p>

          <h2 className="text-2xl font-bold text-white">
            Owned Content
          </h2>

          <p className="mt-3 text-forge-silver">
            Content associated with your Astral Forge account.
          </p>
        </div>

        <div className="rounded-xl border border-forge-border bg-forge-dark px-4 py-3 text-center">
          <p className="text-xs uppercase tracking-wide text-forge-silver">
            Total
          </p>

          <p className="mt-1 text-2xl font-bold text-forge-gold">
            {totalContent}
          </p>
        </div>
      </div>

      {totalContent === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Content Found
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Worlds, campaigns, articles, and products will appear here once
            they have been created or published.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <ContentStat
            label="Worlds"
            value={worldsCount}
          />

          <ContentStat
            label="Campaigns"
            value={campaignsCount}
          />

          <ContentStat
            label="Articles"
            value={articlesCount}
          />

          <ContentStat
            label="Products"
            value={productsCount}
          />
        </div>
      )}
    </section>
  );
}

function ContentStat({
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
        {value.toLocaleString()}
      </p>
    </div>
  );
}