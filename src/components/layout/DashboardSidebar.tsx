"use client";

import DashboardNav from "@/components/layout/DashboardNav";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 border-r border-forge-border bg-forge-black/80 p-6 backdrop-blur-xl lg:block">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forge-gold">
          Accounts
        </p>

        <h2 className="mt-2 text-xl font-bold text-white">
          Dashboard
        </h2>
      </div>

      <DashboardNav currentPath={pathname} />

      <div className="mt-8 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm font-semibold text-white">
          Forge Pass
        </p>

        <p className="mt-2 text-sm text-forge-silver">
          Manage your tier, billing, downloads, and account systems.
        </p>
      </div>
    </aside>
  );
}