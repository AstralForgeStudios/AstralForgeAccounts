type License = {
  id: string;
  productName: string;
  licenseKey: string;
  licenseType: string;
  issuedAt: string;
  expiresAt?: string | null;
};

type LicenseCardProps = {
  licenses: License[];
};

export default function LicenseCard({
  licenses,
}: LicenseCardProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Licenses
        </p>

        <h2 className="text-2xl font-bold text-white">
          Product Licenses
        </h2>

        <p className="mt-3 text-forge-silver">
          View and manage software licenses associated with your Astral Forge
          account.
        </p>
      </div>

      {licenses.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Licenses Found
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Purchased software licenses will appear here once available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {licenses.map((license) => (
            <article
              key={license.id}
              className="rounded-xl border border-forge-border bg-forge-dark p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="font-semibold text-white">
                    {license.productName}
                  </h3>

                  <p className="mt-1 text-sm text-forge-silver">
                    {license.licenseType}
                  </p>
                </div>

                <span className="rounded-full border border-forge-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forge-gold">
                  Active
                </span>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-forge-silver">
                    License Key
                  </p>

                  <p className="mt-1 font-mono text-sm text-white break-all">
                    {license.licenseKey}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-forge-silver">
                    Issued
                  </p>

                  <p className="mt-1 text-sm text-white">
                    {license.issuedAt}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-forge-silver">
                    Expires
                  </p>

                  <p className="mt-1 text-sm text-white">
                    {license.expiresAt ?? "Never"}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm text-forge-silver">
          Software purchases remain attached to your account permanently. Forge
          Pass subscription status does not affect ownership of purchased
          licenses.
        </p>
      </div>
    </section>
  );
}