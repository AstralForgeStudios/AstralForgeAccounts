type UpdateEntry = {
  id: string;
  version: string;
  releaseDate: string;
  title: string;
  summary: string;
};

type UpdateHistoryProps = {
  updates: UpdateEntry[];
};

export default function UpdateHistory({
  updates,
}: UpdateHistoryProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Updates
        </p>

        <h2 className="text-2xl font-bold text-white">
          Update History
        </h2>

        <p className="mt-3 text-forge-silver">
          Recent releases, patches, and version updates available to your
          Astral Forge products.
        </p>
      </div>

      {updates.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Updates Available
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Product release history will appear here once updates have been
            published.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {updates.map((update) => (
            <article
              key={update.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-5"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-forge-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forge-gold">
                      {update.version}
                    </span>

                    <span className="text-sm text-forge-silver">
                      {update.releaseDate}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {update.title}
                  </h3>

                  <p className="mt-2 text-sm text-forge-silver">
                    {update.summary}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm text-forge-silver">
          Update history is provided for informational purposes and may include
          major releases, hotfixes, security updates, compatibility patches,
          and feature additions.
        </p>
      </div>
    </section>
  );
}