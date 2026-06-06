import { ReactNode } from "react";
import DashboardHeader from "@/components/layout/DashboardHeader";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardFooter from "@/components/layout/DashboardFooter";

type DashboardShellProps = {
  children: ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-forge-black bg-dashboard-bg bg-cover bg-fixed bg-center text-white">
      <div className="min-h-screen bg-black/65">
        <DashboardHeader />

        <div className="mx-auto flex w-full max-w-[1600px]">
          <DashboardSidebar />

          <div className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col">
            <div className="flex-1">{children}</div>

            <div className="px-6">
              <DashboardFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}