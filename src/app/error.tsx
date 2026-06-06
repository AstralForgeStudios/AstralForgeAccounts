"use client";

import { useEffect } from "react";

export default function Error({
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
    <main className="flex min-h-screen items-center justify-center bg-forge-black px-6">
      <div className="w-full max-w-lg rounded-2xl border border-forge-border bg-forge-card p-8 text-center shadow-forge">

        <h1 className="mb-4 text-4xl font-bold text-forge-gold">
          The Forge Has Fallen Silent
        </h1>

        <p className="mb-6 text-forge-silver">
          The embers still burn, but something has disrupted the forge.
        </p>

        <div className="mb-8 rounded-xl border border-forge-border bg-forge-dark p-4">
          <p className="text-sm text-forge-silver">
            Please try again in a moment.
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="rounded-lg bg-forge-gold px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Return to the Forge
        </button>

      </div>
    </main>
  );
}