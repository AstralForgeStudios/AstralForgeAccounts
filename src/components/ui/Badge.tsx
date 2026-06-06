import { ReactNode } from "react";
import clsx from "clsx";

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "gold"
  | "info"
  | "purple";

export type BadgeSize =
  | "sm"
  | "md"
  | "lg";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "border-forge-border bg-forge-dark text-forge-silver",

  success:
    "border-green-500/40 bg-green-500/10 text-green-400",

  warning:
    "border-yellow-500/40 bg-yellow-500/10 text-yellow-300",

  danger:
    "border-red-500/40 bg-red-500/10 text-red-400",

  gold:
    "border-forge-gold/40 bg-forge-gold/10 text-forge-gold",

  info:
    "border-blue-500/40 bg-blue-500/10 text-blue-300",

  purple:
    "border-purple-500/40 bg-purple-500/10 text-purple-300",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-1.5 text-sm",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  rounded = true,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center border font-semibold uppercase tracking-wide",
        variantStyles[variant],
        sizeStyles[size],
        rounded ? "rounded-full" : "rounded-lg",
        className
      )}
    >
      {children}
    </span>
  );
}