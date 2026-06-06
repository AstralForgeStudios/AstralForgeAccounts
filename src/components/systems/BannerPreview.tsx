type BannerPreviewProps = {
  src?: string | null;
  displayName: string;
};

export default function BannerPreview({
  src,
  displayName,
}: BannerPreviewProps) {
  const bannerSrc = src || "/banners/default-banner.webp";

  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-4 shadow-card">
      <div className="mb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Preview
        </p>

        <h3 className="mt-2 text-lg font-bold text-white">
          Banner Preview
        </h3>
      </div>

      <div className="overflow-hidden rounded-xl border border-forge-border bg-forge-dark">
        <div className="relative aspect-[16/5] w-full">
          <img
            src={bannerSrc}
            alt={`${displayName} banner preview`}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-4 left-4">
            <p className="text-lg font-bold text-white">
              {displayName}
            </p>

            <p className="text-sm text-forge-silver">
              Profile Banner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}