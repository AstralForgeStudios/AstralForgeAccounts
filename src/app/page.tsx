import type { ComponentProps } from "react";

import ProfileHeader from "@/components/dashboard/ProfileHeader";
import DashboardWidgetContainer from "@/components/dashboard/DashboardWidgetContainer";

import AboutCard from "@/components/dashboard/AboutCard";
import AccountOverviewCard from "@/components/dashboard/AccountOverviewCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import OwnedContentCard from "@/components/dashboard/OwnedContentCard";
import CreatorDashboardCard from "@/components/dashboard/CreatorDashboardCard";
import CommunityCard from "@/components/dashboard/CommunityCard";
import AchievementsCard from "@/components/dashboard/AchievementsCard";
import StatisticsCard from "@/components/dashboard/StatisticsCard";

type Activity =
  ComponentProps<typeof RecentActivityCard>["activities"][number];

type Statistic =
  ComponentProps<typeof StatisticsCard>["statistics"][number];

export default function HomePage() {
  const activities: Activity[] = [];

  const statistics: Statistic[] = [];

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <ProfileHeader
          avatarUrl={null}
          bannerUrl={null}
          displayName="Astral Forge User"
          username="user"
          tier="Initiate"
          memberSince="June 2026"
        />

        <DashboardWidgetContainer>
          <AboutCard />

          <AccountOverviewCard />

          <RecentActivityCard
            activities={activities}
          />

          <OwnedContentCard
            worldsCount={0}
            campaignsCount={0}
            articlesCount={0}
            productsCount={0}
          />

          <CreatorDashboardCard />

          <CommunityCard />

          <AchievementsCard />

          <StatisticsCard
            statistics={statistics}
          />
        </DashboardWidgetContainer>
      </div>
    </main>
  );
}