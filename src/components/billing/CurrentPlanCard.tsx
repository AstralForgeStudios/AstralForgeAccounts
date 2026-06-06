import Link from "next/link";

type ForgePassTier = "Initiate" | "Adept" | "Master";

type CurrentPlanCardProps = {
  tier?: ForgePassTier;
  renewalDate?: string | null;
};

const tierPricing: Record<ForgePassTier, string> = {
  Initiate: "Free",
  Adept: "$5 / month",
  Master: "$10 / month",
};

const tierDescriptions: Record<ForgePassTier, string> = {
  Initiate:
    "Access Astral Forge community features and core platform services.",
  Adept:
    "Support Astral Forge while gaining additional perks and early access opportunities.",
  Master:
    "Unlock the highest level of Forge Pass benefits and premium supporter recognition.",
};

export default function CurrentPlanCard({
  tier = "Initiate",
  renewalDate = null,
}: CurrentPlanCardProps) {
  const isPaidTier = tier !== "Initiate";

  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Current Plan
        </h2>

        <span className="rounded-full border border-forge-gold/40 px-3 py-1 text-sm font-semibold text-forge-gold">
          {tier}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-4xl font-bold text-forge-gold">
          {tierPricing[tier]}
        </p>

        <p className="mt-3 text-forge-silver">
          {tierDescriptions[tier]}
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm text-forge-silver">
          {isPaidTier && renewalDate
            ? `Next renewal: ${renewalDate}`
            : "Initiate is the default free tier available to all members."}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {tier === "Initiate" && (
          <>
            <Link
              href="/billing"
              className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90"
            >
              Upgrade to Adept
            </Link>

            <Link
              href="/billing"
              className="rounded-lg border border-forge-border px-5 py-2.5 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
            >
              Compare Plans
            </Link>
          </>
        )}

        {tier === "Adept" && (
          <>
            <Link
              href="/billing"
              className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90"
            >
              Upgrade to Master
            </Link>

            <Link
              href="/billing"
              className="rounded-lg border border-forge-border px-5 py-2.5 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
            >
              Manage Subscription
            </Link>
          </>
        )}

        {tier === "Master" && (
          <Link
            href="/billing"
            className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90"
          >
            Manage Subscription
          </Link>
        )}
      </div>
    </section>
  );
}