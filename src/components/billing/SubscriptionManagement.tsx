type ForgePassTier = "Initiate" | "Adept" | "Master";

type SubscriptionManagementProps = {
  currentTier?: ForgePassTier;
  renewalDate?: string | null;
  cancelAtPeriodEnd?: boolean;
};

export default function SubscriptionManagement({
  currentTier = "Initiate",
  renewalDate = null,
  cancelAtPeriodEnd = false,
}: SubscriptionManagementProps) {
  const isPaidTier = currentTier !== "Initiate";

  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Subscription
        </p>

        <h2 className="text-2xl font-bold text-white">
          Subscription Management
        </h2>

        <p className="mt-3 text-forge-silver">
          Manage your Forge Pass membership and subscription preferences.
        </p>
      </div>

      <div className="rounded-xl border border-forge-border bg-forge-dark p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-forge-silver">
              Current Subscription
            </p>

            <h3 className="mt-1 text-2xl font-bold text-forge-gold">
              {currentTier}
            </h3>

            <p className="mt-2 text-sm text-forge-silver">
              {currentTier === "Initiate" &&
                "You are currently using the free community tier."}

              {currentTier === "Adept" &&
                "You are supporting Astral Forge through an Adept subscription."}

              {currentTier === "Master" &&
                "You are supporting Astral Forge through a Master subscription."}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
              isPaidTier
                ? "border border-green-500/40 text-green-400"
                : "border border-forge-gold/40 text-forge-gold"
            }`}
          >
            {isPaidTier ? "Active" : "Free Tier"}
          </span>
        </div>

        {isPaidTier && renewalDate && (
          <div className="mt-4 border-t border-forge-border pt-4">
            <p className="text-sm text-forge-silver">
              Next Renewal
            </p>

            <p className="mt-1 font-semibold text-white">
              {renewalDate}
            </p>
          </div>
        )}

        {cancelAtPeriodEnd && (
          <div className="mt-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
            <p className="text-sm text-yellow-300">
              This subscription is scheduled to end at the conclusion of the
              current billing period.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <h4 className="font-semibold text-white">
          Astral Forge Subscription Policy
        </h4>

        <ul className="mt-3 space-y-2 text-sm text-forge-silver">
          <li>
            • Purchased products and licenses are never removed from your
            account.
          </li>

          <li>
            • If a subscription expires or payment fails, your account safely
            returns to Initiate.
          </li>

          <li>
            • Forge Pass perks remain active until the end of the current
            billing period.
          </li>

          <li>
            • You may upgrade, downgrade, or cancel at any time.
          </li>
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {currentTier === "Initiate" && (
          <>
            <button
              type="button"
              className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90"
            >
              Upgrade to Adept
            </button>

            <button
              type="button"
              className="rounded-lg border border-forge-border px-5 py-2.5 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
            >
              Upgrade to Master
            </button>
          </>
        )}

        {currentTier === "Adept" && (
          <>
            <button
              type="button"
              className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90"
            >
              Upgrade to Master
            </button>

            <button
              type="button"
              className="rounded-lg border border-red-500/40 px-5 py-2.5 font-semibold text-red-400 transition hover:bg-red-500/10"
            >
              Cancel Subscription
            </button>
          </>
        )}

        {currentTier === "Master" && (
          <>
            <button
              type="button"
              className="rounded-lg border border-forge-border px-5 py-2.5 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
            >
              Downgrade to Adept
            </button>

            <button
              type="button"
              className="rounded-lg border border-red-500/40 px-5 py-2.5 font-semibold text-red-400 transition hover:bg-red-500/10"
            >
              Cancel Subscription
            </button>
          </>
        )}
      </div>
    </section>
  );
}