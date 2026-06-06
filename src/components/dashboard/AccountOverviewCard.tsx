type ForgePassTier = "Initiate" | "Adept" | "Master";

type AccountOverviewCardProps = {
  tier?: ForgePassTier;
  accountStatus?: string;
  emailVerified?: boolean;
  twoFactorEnabled?: boolean;
  memberSince?: string;
};

export default function AccountOverviewCard({
  tier = "Initiate",
  accountStatus = "Active",
  emailVerified = false,
  twoFactorEnabled = false,
  memberSince,
}: AccountOverviewCardProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Account
        </p>

        <h2 className="text-2xl font-bold text-white">
          Account Overview
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-xl border border-forge-border bg-forge-dark p-4">
          <span className="text-forge-silver">Forge Pass</span>

          <span className="font-semibold text-forge-gold">
            {tier}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-forge-border bg-forge-dark p-4">
          <span className="text-forge-silver">Account Status</span>

          <span className="font-semibold text-green-400">
            {accountStatus}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-forge-border bg-forge-dark p-4">
          <span className="text-forge-silver">Email Verification</span>

          <span
            className={
              emailVerified
                ? "font-semibold text-green-400"
                : "font-semibold text-red-400"
            }
          >
            {emailVerified ? "Verified" : "Unverified"}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-forge-border bg-forge-dark p-4">
          <span className="text-forge-silver">
            Two-Factor Authentication
          </span>

          <span
            className={
              twoFactorEnabled
                ? "font-semibold text-green-400"
                : "font-semibold text-yellow-300"
            }
          >
            {twoFactorEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-forge-border bg-forge-dark p-4">
          <span className="text-forge-silver">Member Since</span>

          <span className="font-semibold text-white">
            {memberSince || "Unknown"}
          </span>
        </div>
      </div>
    </section>
  );
}