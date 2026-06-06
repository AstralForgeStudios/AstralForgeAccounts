import ProfileHeader from "@/components/dashboard/ProfileHeader";
import AboutCard from "@/components/dashboard/AboutCard";
import AccountOverviewCard from "@/components/dashboard/AccountOverviewCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import OwnedContentCard from "@/components/dashboard/OwnedContentCard";
import CreatorDashboardCard from "@/components/dashboard/CreatorDashboardCard";
import CommunityCard from "@/components/dashboard/CommunityCard";
import AchievementsCard from "@/components/dashboard/AchievementsCard";
import StatisticsCard from "@/components/dashboard/StatisticsCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <ProfileHeader />

        <section className="grid gap-6 lg:grid-cols-2">
          <AboutCard />
          <AccountOverviewCard />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <RecentActivityCard />
          <OwnedContentCard />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <CreatorDashboardCard />
          <CommunityCard />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <AchievementsCard />
          <StatisticsCard />
        </section>
      </div>
    </main>
  );
}