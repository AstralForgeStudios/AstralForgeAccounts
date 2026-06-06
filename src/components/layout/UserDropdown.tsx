"use client";

import { useState } from "react";
import Link from "next/link";

type UserDropdownProps = {
  displayName?: string;
  username?: string;
  avatarUrl?: string | null;
};

export default function UserDropdown({
  displayName = "Account",
  username,
  avatarUrl,
}: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const avatar = avatarUrl || "/avatars/default-avatar.webp";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-xl border border-forge-border bg-forge-dark px-3 py-2 transition hover:border-forge-gold"
      >
        <img
          src={avatar}
          alt="Profile Avatar"
          className="h-10 w-10 rounded-full border border-forge-border object-cover"
        />

        <div className="hidden text-left md:block">
          <p className="font-semibold text-white">{displayName}</p>
          {username && <p className="text-xs text-forge-silver">@{username}</p>}
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-forge-border bg-forge-card shadow-forge">
          <DropdownLink href="/" label="Dashboard" />
          <DropdownLink href="/systems" label="Settings" />

          <button
            type="button"
            className="flex w-full items-center gap-2 border-t border-forge-border px-4 py-3 text-left text-sm text-red-400 transition hover:bg-red-500/10"
          >
            <img src="/icons/logout.svg" alt="" className="h-4 w-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-sm text-forge-silver transition hover:bg-forge-dark hover:text-forge-gold"
    >
      {label}
    </Link>
  );
}