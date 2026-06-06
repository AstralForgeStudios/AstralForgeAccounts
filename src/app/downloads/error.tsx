"use client";

import { useEffect } from "react";

export default function DownloadsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-2xl border border-forge-border bg-forge-card p-8 text-center shadow-forge">
        <h1 className="mb-4 text-3xl font-bold text-forge-gold">
          The Vault Refuses to Open
        </h1>

        <p className="mb-6 text-forge-silver">
          Your downloads are safe, but the vault records could not be reached.
        </p>

        <button
          onClick={() => reset()}
          className="rounded-lg bg-forge-gold px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Try the Vault Again
        </button>
      </div>
    </main>
  );
}