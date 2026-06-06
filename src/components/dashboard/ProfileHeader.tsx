"use client";

import ProfileAvatar from "@/components/dashboard/ProfileAvatar";
import ProfileBanner from "@/components/dashboard/ProfileBanner";
import TierBadge from "@/components/dashboard/TierBadge";

type ProfileHeaderProps = {
  avatarUrl: string | null;
  bannerUrl: string | null;

  displayName: string;
  username: string;

  tier: "Initiate" | "Adept" | "Master";

  memberSince: string;

  onAvatarSave?: (file: File) => void;
};

export default function ProfileHeader({
  avatarUrl,
  bannerUrl,
  displayName,
  username,
  tier,
  memberSince,
  onAvatarSave,
}: ProfileHeaderProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-forge-border bg-forge-card shadow-card">
      <ProfileBanner
        src={bannerUrl}
        displayName={displayName}
      />

      <div className="relative px-6 pb-6">
        <div className="-mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <ProfileAvatar
              src={avatarUrl}
              displayName={displayName}
              username={username}
              editable
              onAvatarSave={onAvatarSave}
            />

            <div className="pb-2">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold text-white">
                  {displayName}
                </h1>

                <TierBadge tier={tier} />
              </div>

              <p className="mt-1 text-forge-silver">
                @{username}
              </p>

              <p className="mt-2 text-sm text-forge-silver">
                Member Since {memberSince}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/settings"
              className="rounded-lg border border-forge-border px-4 py-2 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
            >
              Edit Profile
            </a>

            <a
              href="/billing"
              className="rounded-lg bg-forge-gold px-4 py-2 font-semibold text-black transition hover:opacity-90"
            >
              Manage Forge Pass
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}