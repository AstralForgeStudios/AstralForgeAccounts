import Link from "next/link";

type ForgePassTier = "Initiate" | "Adept" | "Master";

type ForgePassCardProps = {
  currentTier?: ForgePassTier;
};

const tiers: {
  name: ForgePassTier;
  price: string;
  description: string;
  action: string;
}[] = [
  {
    name: "Initiate",
    price: "Free",
    description: "Default access for every Astral Forge member.",
    action: "Current Free Tier",
  },
  {
    name: "Adept",
    price: "$5 / month",
    description: "Support the forge and unlock additional community perks.",
    action: "Upgrade to Adept",
  },
  {
    name: "Master",
    price: "$10 / month",
    description: "The highest Forge Pass tier for dedicated supporters.",
    action: "Upgrade to Master",
  },
];

export default function ForgePassCard({
  currentTier = "Initiate",
}: ForgePassCardProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Forge Pass
        </p>

        <h2 className="text-2xl font-bold text-white">
          Choose Your Tier
        </h2>

        <p className="mt-3 text-forge-silver">
          Initiate is always free. Paid tiers support Astral Forge and unlock
          additional perks.
        </p>
      </div>

      <div className="grid gap-4">
        {tiers.map((tier) => {
          const isCurrent = tier.name === currentTier;

          return (
            <div
              key={tier.name}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-forge-gold">
                      {tier.name}
                    </h3>

                    {isCurrent && (
                      <span className="rounded-full border border-forge-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forge-gold">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-2xl font-bold text-white">
                    {tier.price}
                  </p>

                  <p className="mt-2 text-sm text-forge-silver">
                    {tier.description}
                  </p>
                </div>

                {isCurrent ? (
                  <span className="rounded-lg border border-forge-border px-5 py-2.5 text-sm font-semibold text-forge-silver">
                    Active
                  </span>
                ) : (
                  <Link
                    href="/billing"
                    className="rounded-lg bg-forge-gold px-5 py-2.5 text-center font-semibold text-black transition hover:opacity-90"
                  >
                    {tier.action}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}