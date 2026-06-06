"use client";

type TwoFactorAuthenticationProps = {
  enabled: boolean;
  method?: string | null;
  enabledAt?: string | null;
  onEnable: () => void;
  onDisable: () => void;
};

export default function TwoFactorAuthentication({
  enabled,
  method = null,
  enabledAt = null,
  onEnable,
  onDisable,
}: TwoFactorAuthenticationProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Two-Factor
        </p>

        <h2 className="text-2xl font-bold text-white">
          Two-Factor Authentication
        </h2>

        <p className="mt-3 text-forge-silver">
          Add an extra layer of protection to your Astral Forge account.
        </p>
      </div>

      <div className="rounded-xl border border-forge-border bg-forge-dark p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-forge-silver">Current Status</p>

            <p
              className={`mt-1 text-xl font-bold ${
                enabled ? "text-green-400" : "text-yellow-300"
              }`}
            >
              {enabled ? "Enabled" : "Disabled"}
            </p>
          </div>

          <span
            className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
              enabled
                ? "border-green-500/40 text-green-400"
                : "border-yellow-500/40 text-yellow-300"
            }`}
          >
            {enabled ? "Protected" : "Recommended"}
          </span>
        </div>

        {enabled && (
          <div className="mt-5 grid gap-4 border-t border-forge-border pt-5 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-forge-silver">
                Method
              </p>

              <p className="mt-1 font-semibold text-white">
                {method ?? "Authenticator App"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-forge-silver">
                Enabled
              </p>

              <p className="mt-1 font-semibold text-white">
                {enabledAt ?? "Unavailable"}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm text-forge-silver">
          Two-factor authentication helps prevent unauthorized access even if
          your password is compromised. Authenticator apps are recommended over
          SMS whenever available.
        </p>
      </div>

      <div className="mt-6">
        {enabled ? (
          <button
            type="button"
            onClick={onDisable}
            className="rounded-lg border border-red-500/40 px-5 py-2.5 font-semibold text-red-400 transition hover:bg-red-500/10"
          >
            Disable Two-Factor Authentication
          </button>
        ) : (
          <button
            type="button"
            onClick={onEnable}
            className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90"
          >
            Enable Two-Factor Authentication
          </button>
        )}
      </div>
    </section>
  );
}