type ForgePassTier = "Initiate" | "Adept" | "Master";

type Benefit = {
  label: string;
  initiate: boolean;
  adept: boolean;
  master: boolean;
};

const benefits: Benefit[] = [
  {
    label: "Astral Forge account access",
    initiate: true,
    adept: true,
    master: true,
  },
  {
    label: "Codex, Play, and Shop access",
    initiate: true,
    adept: true,
    master: true,
  },
  {
    label: "Profile, badges, and achievements",
    initiate: true,
    adept: true,
    master: true,
  },
  {
    label: "Community participation",
    initiate: true,
    adept: true,
    master: true,
  },
  {
    label: "Adept supporter badge",
    initiate: false,
    adept: true,
    master: true,
  },
  {
    label: "Early access opportunities",
    initiate: false,
    adept: true,
    master: true,
  },
  {
    label: "Priority feature voting",
    initiate: false,
    adept: true,
    master: true,
  },
  {
    label: "Master supporter badge",
    initiate: false,
    adept: false,
    master: true,
  },
  {
    label: "Beta access to new systems",
    initiate: false,
    adept: false,
    master: true,
  },
  {
    label: "Priority support",
    initiate: false,
    adept: false,
    master: true,
  },
];

const tiers: {
  key: ForgePassTier;
  price: string;
  description: string;
}[] = [
  {
    key: "Initiate",
    price: "Free",
    description: "The default tier for every Astral Forge member.",
  },
  {
    key: "Adept",
    price: "$5 / month",
    description: "Support the forge and unlock additional perks.",
  },
  {
    key: "Master",
    price: "$10 / month",
    description: "The highest Forge Pass tier for dedicated supporters.",
  },
];

function BenefitMark({ active }: { active: boolean }) {
  return (
    <span
      className={
        active
          ? "text-forge-gold"
          : "text-forge-silverDark"
      }
      aria-label={active ? "Included" : "Not included"}
    >
      {active ? "✓" : "—"}
    </span>
  );
}

export default function ForgePassBenefits() {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Forge Pass
        </p>

        <h2 className="text-2xl font-bold text-white">
          Compare Benefits
        </h2>

        <p className="mt-3 max-w-2xl text-forge-silver">
          Initiate is always available for free. Adept and Master add supporter
          perks while keeping core Astral Forge access open to everyone.
        </p>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.key}
            className="rounded-xl border border-forge-border bg-forge-dark p-4"
          >
            <h3 className="text-lg font-bold text-forge-gold">
              {tier.key}
            </h3>

            <p className="mt-2 text-2xl font-bold text-white">
              {tier.price}
            </p>

            <p className="mt-3 text-sm text-forge-silver">
              {tier.description}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-forge-border">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead className="bg-forge-dark">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-forge-silver">
                Benefit
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-forge-gold">
                Initiate
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-forge-gold">
                Adept
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-forge-gold">
                Master
              </th>
            </tr>
          </thead>

          <tbody>
            {benefits.map((benefit) => (
              <tr
                key={benefit.label}
                className="border-t border-forge-border"
              >
                <td className="px-4 py-3 text-sm text-forge-silver">
                  {benefit.label}
                </td>

                <td className="px-4 py-3 text-center text-lg">
                  <BenefitMark active={benefit.initiate} />
                </td>

                <td className="px-4 py-3 text-center text-lg">
                  <BenefitMark active={benefit.adept} />
                </td>

                <td className="px-4 py-3 text-center text-lg">
                  <BenefitMark active={benefit.master} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}