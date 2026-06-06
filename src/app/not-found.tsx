import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-forge-black px-6">
      <div className="w-full max-w-lg rounded-2xl border border-forge-border bg-forge-card p-8 text-center shadow-forge">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-forge-gold">
          404
        </p>

        <h1 className="mb-4 text-4xl font-bold text-forge-gold">
          The Path Has Been Lost
        </h1>

        <p className="mb-6 text-forge-silver">
          The route you followed has faded from the astral map. This page may
          have been moved, renamed, or never forged into existence.
        </p>

        <div className="mb-8 rounded-xl border border-forge-border bg-forge-dark p-4">
          <p className="text-sm text-forge-silver">
            Return to your dashboard and chart a new course.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex rounded-lg bg-forge-gold px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Return to the Dashboard
        </Link>
      </div>
    </main>
  );
}