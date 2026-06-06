import Link from "next/link";

type ForgePassTier = "Initiate" | "Adept" | "Master";

type ForgePassTierCardProps = {
  tier: ForgePassTier;
  currentTier?: ForgePassTier;
};

const tierConfig = {
  Initiate: {
    price: "Free",
    description:
      "The foundation of Astral Forge. Access the community, dashboard, Codex, Play, and Shop.",
    benefits: [
      "Astral Forge Account",
      "Community Access",
      "Codex Access",
      "Play Access",
      "Shop Access",
      "Achievements & Badges",
    ],
  },

  Adept: {
    price: "$5 / month",
    description:
      "Support the forge while gaining access to additional perks and early opportunities.",
    benefits: [
      "Everything in Initiate",
      "Adept Supporter Badge",
      "Priority Feature Voting",
      "Early Access Opportunities",
      "Exclusive Community Perks",
      "Support Astral Forge Development",
    ],
  },

  Master: {
    price: "$10 / month",
    description:
      "The highest Forge Pass tier for dedicated supporters and creators.",
    benefits: [
      "Everything in Adept",
      "Master Supporter Badge",
      "Beta Access to New Systems",
      "Priority Support",
      "Premium Recognition",
      "Directly Support Future Projects",
    ],
  },
};

export default function ForgePassTierCard({
  tier,
  currentTier = "Initiate",
}: ForgePassTierCardProps) {
  const config = tierConfig[tier];
  const isCurrent = tier === currentTier;

  return (
    <div className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold text-forge-gold">
            {tier}
          </h3>

          <p className="mt-2 text-3xl font-bold text-white">
            {config.price}
          </p>
        </div>

        {isCurrent && (
          <span className="rounded-full border border-forge-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forge-gold">
            Current Plan
          </span>
        )}
      </div>

      <p className="mt-4 text-forge-silver">
        {config.description}
      </p>

      <ul className="mt-6 space-y-3">
        {config.benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-center gap-3 text-sm text-forge-silver"
          >
            <span className="text-forge-gold">✓</span>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        {isCurrent ? (
          <div className="rounded-lg border border-forge-border bg-forge-dark px-4 py-3 text-center font-semibold text-forge-silver">
            Active Plan
          </div>
        ) : (
          <Link
            href="/billing"
            className="block rounded-lg bg-forge-gold px-4 py-3 text-center font-semibold text-black transition hover:opacity-90"
          >
            {tier === "Initiate"
              ? "Downgrade to Initiate"
              : `Upgrade to ${tier}`}
          </Link>
        )}
      </div>
    </div>
  );
}