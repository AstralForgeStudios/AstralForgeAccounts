type ProfileBannerProps = {
  src: string | null;
  displayName: string;
};

export default function ProfileBanner({
  src,
  displayName,
}: ProfileBannerProps) {
  const bannerSrc = src || "/banners/default-banner.webp";

  return (
    <div className="relative h-56 w-full overflow-hidden rounded-t-2xl border-b border-forge-border bg-forge-dark">
      <img
        src={bannerSrc}
        alt={`${displayName} profile banner`}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    </div>
  );
}