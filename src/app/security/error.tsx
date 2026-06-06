"use client";

import { useEffect } from "react";

export default function SecurityError({
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
          The Wards Have Been Disturbed
        </h1>

        <p className="mb-6 text-forge-silver">
          The protective sigils surrounding your account could not be inspected.
          Your security remains intact, but the records are temporarily beyond reach.
        </p>

        <button
          onClick={() => reset()}
          className="rounded-lg bg-forge-gold px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Restore the Wards
        </button>
      </div>
    </main>
  );
}