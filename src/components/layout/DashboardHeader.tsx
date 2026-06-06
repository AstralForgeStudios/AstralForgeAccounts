import Link from "next/link";
import UserDropdown from "@/components/layout/UserDropdown";

type DashboardHeaderProps = {
  displayName?: string;
  username?: string;
  avatarUrl?: string | null;
};

export default function DashboardHeader({
  displayName,
  username,
  avatarUrl,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-forge-border bg-forge-black/80 backdrop-blur-xl">
      <div className="flex min-h-16 items-center justify-between gap-4 px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forge-gold">
            Astral Forge
          </p>

          <h1 className="text-lg font-bold text-white">
            Account Dashboard
          </h1>
        </div>

        <nav className="hidden items-center gap-4 lg:flex">
          <Link
            href="https://astralforge.studio"
            className="text-sm font-semibold text-forge-silver transition hover:text-forge-gold"
          >
            Website
          </Link>

          <Link
            href="https://codex.astralforge.studio"
            className="text-sm font-semibold text-forge-silver transition hover:text-forge-gold"
          >
            Codex
          </Link>

          <Link
            href="https://play.astralforge.studio"
            className="text-sm font-semibold text-forge-silver transition hover:text-forge-gold"
          >
            Play
          </Link>

          <Link
            href="https://shop.astralforge.studio"
            className="text-sm font-semibold text-forge-silver transition hover:text-forge-gold"
          >
            Shop
          </Link>
        </nav>

        <UserDropdown
          displayName={displayName}
          username={username}
          avatarUrl={avatarUrl}
        />
      </div>
    </header>
  );
}