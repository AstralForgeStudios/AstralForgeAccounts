import Link from "next/link";

type ForgePassTier = "Initiate" | "Adept" | "Master";

type BillingOverviewProps = {
  currentTier?: ForgePassTier;
  renewalDate?: string | null;
};

const tierDescriptions: Record<ForgePassTier, string> = {
  Initiate: "Free community tier",
  Adept: "$5 / month",
  Master: "$10 / month",
};

export default function BillingOverview({
  currentTier = "Initiate",
  renewalDate = null,
}: BillingOverviewProps) {
  const isPaidTier = currentTier !== "Initiate";

  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
            Billing
          </p>

          <h1 className="text-3xl font-bold text-white">
            Forge Pass & Billing
          </h1>

          <p className="mt-3 max-w-2xl text-forge-silver">
            Manage your Forge Pass tier, payment details, invoices, and
            subscription options. If a paid subscription ends or payment fails,
            your account safely returns to Initiate.
          </p>
        </div>

        <div className="rounded-xl border border-forge-border bg-forge-dark p-5 lg:min-w-80">
          <p className="text-sm text-forge-silver">Current Forge Pass</p>

          <div className="mt-2 flex items-center justify-between gap-4">
            <span className="text-2xl font-bold text-forge-gold">
              {currentTier}
            </span>

            <span className="rounded-full border border-forge-gold/40 px-3 py-1 text-sm font-semibold text-forge-gold">
              {tierDescriptions[currentTier]}
            </span>
          </div>

          <p className="mt-3 text-sm text-forge-silver">
            {isPaidTier && renewalDate
              ? `Renews on ${renewalDate}`
              : "Initiate is always available as the default free tier."}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/billing"
          className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90"
        >
          Manage Billing
        </Link>

        <Link
          href="/downloads"
          className="rounded-lg border border-forge-border px-5 py-2.5 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
        >
          View Downloads
        </Link>
      </div>
    </section>
  );
}