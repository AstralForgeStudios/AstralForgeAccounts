export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-forge-black px-6">
      <div className="text-center">

        <div className="mb-8 flex justify-center">
          <div className="h-4 w-4 animate-bounce rounded-full bg-forge-gold" />
        </div>

        <h1 className="mb-4 text-3xl font-bold text-forge-gold">
          Tending the Forge
        </h1>

        <p className="text-forge-silver">
          The embers are being stoked and your account is being prepared.
        </p>

      </div>
    </main>
  );
}