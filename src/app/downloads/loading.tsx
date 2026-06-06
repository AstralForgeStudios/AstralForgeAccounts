export default function DownloadsLoading() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <div className="mx-auto mb-8 h-16 w-16 animate-pulse rounded-full border-4 border-forge-border border-t-forge-gold" />

        <h1 className="mb-4 text-3xl font-bold text-forge-gold">
          Gathering Your Creations
        </h1>

        <p className="max-w-md text-forge-silver">
          Tomes, worlds, campaigns, and artifacts are being retrieved from the vault.
        </p>
      </div>
    </main>
  );
}