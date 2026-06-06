import { ReactNode } from "react";

type DashboardWidgetContainerProps = {
  children: ReactNode;
};

export default function DashboardWidgetContainer({
  children,
}: DashboardWidgetContainerProps) {
  return (
    <div
      className="
        grid
        gap-6
        lg:grid-cols-2
        auto-rows-fr
      "
    >
      {children}
    </div>
  );
}