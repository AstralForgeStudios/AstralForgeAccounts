"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export default function Tabs({
  tabs,
  activeTab,
  onTabChange,
}: TabsProps) {
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-wrap gap-2 border-b border-forge-border pb-3">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={clsx(
                "rounded-lg px-4 py-2 text-sm font-semibold transition",
                isActive
                  ? "bg-forge-gold text-black"
                  : "text-forge-silver hover:bg-forge-dark hover:text-forge-gold"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div>{currentTab?.content}</div>
    </div>
  );
}