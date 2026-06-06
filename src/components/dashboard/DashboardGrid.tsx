import { ReactNode } from "react";

type DashboardGridProps = {
  children: ReactNode;
};

export default function DashboardGrid({
  children,
}: DashboardGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {children}
    </div>
  );
}