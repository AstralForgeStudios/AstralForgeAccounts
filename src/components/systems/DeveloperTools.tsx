type DeveloperTool = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
};

type DeveloperToolsProps = {
  tools: DeveloperTool[];
  onToggle: (toolId: string, enabled: boolean) => void;
};

export default function DeveloperTools({
  tools,
  onToggle,
}: DeveloperToolsProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Developer
        </p>

        <h2 className="text-2xl font-bold text-white">Developer Tools</h2>

        <p className="mt-3 text-forge-silver">
          Manage developer-focused tools and advanced account capabilities.
        </p>
      </div>

      {tools.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Developer Tools Available
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Developer tools will appear here once they are available for your account.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {tools.map((tool) => (
            <article
              key={tool.id}
              className="flex flex-col gap-4 rounded-xl border border-forge-border bg-forge-dark p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-white">{tool.name}</h3>

                <p className="mt-1 text-sm text-forge-silver">
                  {tool.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onToggle(tool.id, !tool.enabled)}
                className={`w-fit rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  tool.enabled
                    ? "border-forge-gold/40 bg-forge-gold/10 text-forge-gold"
                    : "border-forge-border text-forge-silver hover:border-forge-gold hover:text-forge-gold"
                }`}
              >
                {tool.enabled ? "Enabled" : "Disabled"}
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}