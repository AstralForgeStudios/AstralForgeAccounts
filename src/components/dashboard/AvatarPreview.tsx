type AvatarPreviewProps = {
  src?: string | null;
  displayName?: string;
  username?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-16 w-16",
  md: "h-24 w-24",
  lg: "h-36 w-36",
};

export default function AvatarPreview({
  src,
  displayName = "Astral Forge Member",
  username,
  size = "lg",
}: AvatarPreviewProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div
        className={`${sizeClasses[size]} overflow-hidden rounded-full border-2 border-forge-gold bg-forge-dark shadow-forge`}
      >
        <img
          src={src || "/avatars/default-avatar.png"}
          alt={`${displayName} avatar`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="text-center">
        <p className="font-semibold text-white">{displayName}</p>

        {username && (
          <p className="mt-1 text-sm text-forge-silver">@{username}</p>
        )}
      </div>
    </div>
  );
}