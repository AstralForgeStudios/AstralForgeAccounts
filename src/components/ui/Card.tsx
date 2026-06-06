import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  description?: string;
  footer?: ReactNode;
};

export default function Card({
  children,
  title,
  eyebrow,
  description,
  footer,
  className,
  ...props
}: CardProps) {
  return (
    <section
      className={clsx(
        "rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card",
        className
      )}
      {...props}
    >
      {(eyebrow || title || description) && (
        <div className="mb-6">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
              {eyebrow}
            </p>
          )}

          {title && (
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-3 text-forge-silver">
              {description}
            </p>
          )}
        </div>
      )}

      {children}

      {footer && (
        <div className="mt-6 border-t border-forge-border pt-4">
          {footer}
        </div>
      )}
    </section>
  );
}