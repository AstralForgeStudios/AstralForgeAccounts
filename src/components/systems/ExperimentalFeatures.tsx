type ExperimentalFeature = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
};

type ExperimentalFeaturesProps = {
  features: ExperimentalFeature[];
  onToggle: (featureId: string, enabled: boolean) => void;
};

export default function ExperimentalFeatures({
  features,
  onToggle,
}: ExperimentalFeaturesProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Experimental
        </p>

        <h2 className="text-2xl font-bold text-white">
          Experimental Features
        </h2>

        <p className="mt-3 text-forge-silver">
          Test upcoming Astral Forge functionality before it reaches public
          release. Experimental features may change, break, or be removed
          without notice.
        </p>
      </div>

      {features.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Experimental Features Available
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Experimental programs will appear here when they become available
            for testing.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="flex flex-col gap-4 rounded-xl border border-forge-border bg-forge-dark p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-white">
                    {feature.name}
                  </h3>

                  <span className="rounded-full border border-yellow-500/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-300">
                    Beta
                  </span>
                </div>

                <p className="mt-2 text-sm text-forge-silver">
                  {feature.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  onToggle(feature.id, !feature.enabled)
                }
                className={`w-fit rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  feature.enabled
                    ? "border-forge-gold/40 bg-forge-gold/10 text-forge-gold"
                    : "border-forge-border text-forge-silver hover:border-forge-gold hover:text-forge-gold"
                }`}
              >
                {feature.enabled ? "Enabled" : "Disabled"}
              </button>
            </article>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
        <h3 className="font-semibold text-yellow-300">
          Experimental Program Notice
        </h3>

        <p className="mt-2 text-sm text-yellow-200">
          Experimental features are provided for testing purposes. Data loss,
          incomplete functionality, performance issues, and interface changes
          may occur while participating in preview programs.
        </p>
      </div>
    </section>
  );
}