type AvatarProps = {
  src?: string | null;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-16 w-16",
  xl: "h-32 w-32",
};

export default function Avatar({
  src,
  alt,
  size = "md",
  className = "",
}: AvatarProps) {
  const avatarSrc = src || "/avatars/default-avatar.webp";

  return (
    <div
      className={`${sizeClasses[size]} overflow-hidden rounded-full border border-forge-border bg-forge-dark ${className}`}
    >
      <img
        src={avatarSrc}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}