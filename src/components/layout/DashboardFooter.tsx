import Link from "next/link";

export default function DashboardFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-forge-border py-6">
      <div className="flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div>
          <p className="text-sm text-forge-silver">
            © {currentYear} Astral Forge Studios. All rights reserved.
          </p>

          <p className="mt-1 text-xs text-forge-silverDark">
            Build worlds. Forge stories. Create legends.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 lg:justify-end">
          <Link
            href="https://astralforge.studio"
            className="text-sm text-forge-silver transition hover:text-forge-gold"
          >
            Website
          </Link>

          <Link
            href="https://codex.astralforge.studio"
            className="text-sm text-forge-silver transition hover:text-forge-gold"
          >
            Codex
          </Link>

          <Link
            href="https://play.astralforge.studio"
            className="text-sm text-forge-silver transition hover:text-forge-gold"
          >
            Play
          </Link>

          <Link
            href="https://shop.astralforge.studio"
            className="text-sm text-forge-silver transition hover:text-forge-gold"
          >
            Shop
          </Link>

          <Link
            href="/systems"
            className="text-sm text-forge-silver transition hover:text-forge-gold"
          >
            System Status
          </Link>
        </nav>
      </div>
    </footer>
  );
}