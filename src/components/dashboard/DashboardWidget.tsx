import { ReactNode } from "react";

type DashboardWidgetProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function DashboardWidget({
  title,
  eyebrow,
  description,
  children,
  className = "",
}: DashboardWidgetProps) {
  return (
    <section
      className={`rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card ${className}`}
    >
      <div className="mb-6">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
            {eyebrow}
          </p>
        )}

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-3 text-forge-silver">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}