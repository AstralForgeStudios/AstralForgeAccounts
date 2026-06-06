"use client";

type APIKey = {
  id: string;
  name: string;
  prefix: string;
  createdAt: string;
  lastUsedAt?: string | null;
  expiresAt?: string | null;
  active: boolean;
};

type APIKeysProps = {
  apiKeys: APIKey[];
  onCreateKey: () => void;
  onRevokeKey: (keyId: string) => void;
};

export default function APIKeys({
  apiKeys,
  onCreateKey,
  onRevokeKey,
}: APIKeysProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
            Developer
          </p>

          <h2 className="text-2xl font-bold text-white">API Keys</h2>

          <p className="mt-3 text-forge-silver">
            Create and manage keys used to access Astral Forge developer systems.
          </p>
        </div>

        <button
          type="button"
          onClick={onCreateKey}
          className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90"
        >
          Create Key
        </button>
      </div>

      {apiKeys.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">No API Keys</h3>

          <p className="mt-2 text-sm text-forge-silver">
            API keys will appear here once created.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {apiKeys.map((apiKey) => (
            <article
              key={apiKey.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-white">{apiKey.name}</h3>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                        apiKey.active
                          ? "border-green-500/40 text-green-400"
                          : "border-forge-silverDark text-forge-silver"
                      }`}
                    >
                      {apiKey.active ? "Active" : "Revoked"}
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-sm text-forge-gold">
                    {apiKey.prefix}••••••••••••
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <KeyField label="Created" value={apiKey.createdAt} />
                    <KeyField
                      label="Last Used"
                      value={apiKey.lastUsedAt ?? "Never"}
                    />
                    <KeyField
                      label="Expires"
                      value={apiKey.expiresAt ?? "Never"}
                    />
                  </div>
                </div>

                {apiKey.active && (
                  <button
                    type="button"
                    onClick={() => onRevokeKey(apiKey.id)}
                    className="rounded-lg border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
                  >
                    Revoke
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm text-forge-silver">
          API keys should be treated like passwords. Never share them publicly or
          commit them to source control.
        </p>
      </div>
    </section>
  );
}

function KeyField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-forge-silver">
        {label}
      </p>

      <p className="mt-1 text-sm text-white break-words">{value}</p>
    </div>
  );
}