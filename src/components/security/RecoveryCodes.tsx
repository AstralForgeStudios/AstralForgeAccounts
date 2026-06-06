"use client";

type RecoveryCodesProps = {
  codes: string[];
  revealed: boolean;
  onReveal: () => void;
  onRegenerate: () => void;
  onDownload: () => void;
};

export default function RecoveryCodes({
  codes,
  revealed,
  onReveal,
  onRegenerate,
  onDownload,
}: RecoveryCodesProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Recovery
        </p>

        <h2 className="text-2xl font-bold text-white">Recovery Codes</h2>

        <p className="mt-3 text-forge-silver">
          Recovery codes help you regain access to your account if two-factor
          authentication becomes unavailable.
        </p>
      </div>

      {codes.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Recovery Codes Available
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Recovery codes will appear here once two-factor authentication is
            enabled.
          </p>
        </div>
      ) : !revealed ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            Recovery Codes Hidden
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Reveal your recovery codes only when you are ready to save them in a
            secure location.
          </p>

          <button
            type="button"
            onClick={onReveal}
            className="mt-6 rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90"
          >
            Reveal Codes
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            {codes.map((code) => (
              <div
                key={code}
                className="rounded-lg border border-forge-border bg-forge-dark px-4 py-3 font-mono text-sm text-white"
              >
                {code}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
            <p className="text-sm text-yellow-300">
              Store these codes somewhere safe. Each code should only be used
              once, and newly generated codes will replace the old set.
            </p>
          </div>
        </>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onDownload}
          disabled={codes.length === 0 || !revealed}
          className="rounded-lg border border-forge-border px-5 py-2.5 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold disabled:cursor-not-allowed disabled:opacity-50"
        >
          Download Codes
        </button>

        <button
          type="button"
          onClick={onRegenerate}
          disabled={codes.length === 0}
          className="rounded-lg border border-red-500/40 px-5 py-2.5 font-semibold text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Regenerate Codes
        </button>
      </div>
    </section>
  );
}