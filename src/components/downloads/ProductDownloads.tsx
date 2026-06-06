import DownloadCard from "@/components/downloads/DownloadCard";

type ProductDownload = {
  id: string;
  name: string;
  version: string;
  platform: string;
  fileSize: string;
  releaseDate: string;
  downloadUrl: string;
  releaseNotesUrl?: string;
};

type ProductDownloadsProps = {
  products: ProductDownload[];
};

export default function ProductDownloads({
  products,
}: ProductDownloadsProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Products
        </p>

        <h2 className="text-2xl font-bold text-white">
          Product Downloads
        </h2>

        <p className="mt-3 text-forge-silver">
          Software, installers, and product files available to your account.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Product Downloads
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Owned software and downloadable products will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {products.map((product) => (
            <DownloadCard
              key={product.id}
              id={product.id}
              name={product.name}
              version={product.version}
              platform={product.platform}
              fileSize={product.fileSize}
              releaseDate={product.releaseDate}
              downloadUrl={product.downloadUrl}
              releaseNotesUrl={product.releaseNotesUrl}
            />
          ))}
        </div>
      )}
    </section>
  );
}