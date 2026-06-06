"use client";

type ForgePassTier = "Initiate" | "Adept" | "Master";

type UpgradePlanModalProps = {
  isOpen: boolean;
  selectedTier?: ForgePassTier;
  currentTier?: ForgePassTier;
  onClose: () => void;
  onConfirm: (tier: ForgePassTier) => void;
};

const tierPricing: Record<ForgePassTier, string> = {
  Initiate: "Free",
  Adept: "$5 / month",
  Master: "$10 / month",
};

const tierDescriptions: Record<ForgePassTier, string> = {
  Initiate: "Return to the default free community tier.",
  Adept: "Support Astral Forge and unlock Adept supporter perks.",
  Master: "Unlock the highest Forge Pass tier and premium recognition.",
};

export default function UpgradePlanModal({
  isOpen,
  selectedTier = "Adept",
  currentTier = "Initiate",
  onClose,
  onConfirm,
}: UpgradePlanModalProps) {
  if (!isOpen) return null;

  const isCurrentTier = selectedTier === currentTier;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
      <div className="w-full max-w-lg rounded-2xl border border-forge-border bg-forge-card p-6 shadow-forge">
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
            Forge Pass
          </p>

          <h2 className="text-2xl font-bold text-white">
            Confirm Plan Change
          </h2>

          <p className="mt-3 text-forge-silver">
            You are about to change your Forge Pass tier.
          </p>
        </div>

        <div className="rounded-xl border border-forge-border bg-forge-dark p-5">
          <p className="text-sm text-forge-silver">Selected Tier</p>

          <h3 className="mt-2 text-3xl font-bold text-forge-gold">
            {selectedTier}
          </h3>

          <p className="mt-2 text-xl font-bold text-white">
            {tierPricing[selectedTier]}
          </p>

          <p className="mt-3 text-sm text-forge-silver">
            {tierDescriptions[selectedTier]}
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
          <p className="text-sm text-forge-silver">
            If payment fails or a paid subscription ends, your account safely
            returns to Initiate. Your purchases, downloads, and licenses remain
            intact.
          </p>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-forge-border px-5 py-2.5 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => onConfirm(selectedTier)}
            disabled={isCurrentTier}
            className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isCurrentTier ? "Current Plan" : `Confirm ${selectedTier}`}
          </button>
        </div>
      </div>
    </div>
  );
}