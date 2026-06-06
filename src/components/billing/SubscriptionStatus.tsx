type ForgePassTier = "Initiate" | "Adept" | "Master";

type SubscriptionState =
  | "free"
  | "active"
  | "canceling"
  | "past_due"
  | "expired"
  | "canceled";

type SubscriptionStatusProps = {
  tier?: ForgePassTier;
  status?: SubscriptionState;
  renewalDate?: string | null;
  endsOn?: string | null;
};

const statusConfig: Record<
  SubscriptionState,
  {
    label: string;
    message: string;
    badgeClass: string;
  }
> = {
  free: {
    label: "Free Tier",
    message: "Initiate is the default free tier for every Astral Forge account.",
    badgeClass: "border-forge-gold/40 text-forge-gold",
  },
  active: {
    label: "Active",
    message: "Your Forge Pass is active and your benefits are available.",
    badgeClass: "border-green-500/40 text-green-400",
  },
  canceling: {
    label: "Ending Soon",
    message:
      "Your Forge Pass remains active until the end of the current billing period.",
    badgeClass: "border-yellow-500/40 text-yellow-300",
  },
  past_due: {
    label: "Payment Issue",
    message:
      "Your payment needs attention. If unresolved, your account will return to Initiate.",
    badgeClass: "border-orange-500/40 text-orange-300",
  },
  expired: {
    label: "Expired",
    message:
      "Your paid Forge Pass has ended. Your account has returned to Initiate.",
    badgeClass: "border-forge-silverDark text-forge-silver",
  },
  canceled: {
    label: "Canceled",
    message:
      "Your subscription has been canceled. Initiate remains available by default.",
    badgeClass: "border-forge-silverDark text-forge-silver",
  },
};

export default function SubscriptionStatus({
  tier = "Initiate",
  status = tier === "Initiate" ? "free" : "active",
  renewalDate = null,
  endsOn = null,
}: SubscriptionStatusProps) {
  const config = statusConfig[status];

  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
            Status
          </p>

          <h2 className="text-2xl font-bold text-white">
            Subscription Status
          </h2>

          <p className="mt-3 max-w-2xl text-forge-silver">
            {config.message}
          </p>
        </div>

        <span
          className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${config.badgeClass}`}
        >
          {config.label}
        </span>
      </div>

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-sm text-forge-silver">Current Tier</p>
            <p className="mt-1 text-lg font-bold text-forge-gold">{tier}</p>
          </div>

          <div>
            <p className="text-sm text-forge-silver">Renewal Date</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {renewalDate ?? "Not applicable"}
            </p>
          </div>

          <div>
            <p className="text-sm text-forge-silver">Ends On</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {endsOn ?? "Not scheduled"}
            </p>
          </div>
        </div>
      </div>

      {status === "past_due" && (
        <div className="mt-6 rounded-xl border border-orange-500/30 bg-orange-500/10 p-4">
          <p className="text-sm text-orange-300">
            Update your payment method to keep your Forge Pass benefits active.
            If payment cannot be completed, your account will safely return to
            Initiate.
          </p>
        </div>
      )}

      {(status === "expired" || status === "canceled") && (
        <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
          <p className="text-sm text-forge-silver">
            Your account, purchases, licenses, and downloads remain intact.
            Only paid Forge Pass benefits are removed when a subscription ends.
          </p>
        </div>
      )}
    </section>
  );
}