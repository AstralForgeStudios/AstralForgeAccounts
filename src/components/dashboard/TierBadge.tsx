type ForgePassTier = "Initiate" | "Adept" | "Master";

type TierBadgeProps = {
  tier: ForgePassTier;
};

const tierStyles: Record<ForgePassTier, string> = {
  Initiate:
    "border-forge-border bg-forge-dark text-forge-silver",

  Adept:
    "border-blue-500/40 bg-blue-500/10 text-blue-300",

  Master:
    "border-forge-gold/40 bg-forge-gold/10 text-forge-gold",
};

export default function TierBadge({
  tier,
}: TierBadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-semibold
        uppercase
        tracking-wide
        ${tierStyles[tier]}
      `}
    >
      {tier}
    </span>
  );
}