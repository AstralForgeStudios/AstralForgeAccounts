import type { ComponentProps } from "react";

import NotificationSettings from "@/components/notifications/NotificationSettings";
import EmailNotifications from "@/components/notifications/EmailNotifications";
import WebsiteNotifications from "@/components/notifications/WebsiteNotifications";
import CommunityNotifications from "@/components/notifications/CommunityNotifications";
import CreatorNotifications from "@/components/notifications/CreatorNotifications";
import NotificationHistory from "@/components/notifications/NotificationHistory";

type NotificationChannel =
  ComponentProps<typeof NotificationSettings>["channels"][number];

type NotificationPreference =
  ComponentProps<typeof EmailNotifications>["preferences"][number];

type CommunityNotification =
  ComponentProps<typeof CommunityNotifications>["notifications"][number];

type CreatorNotification =
  ComponentProps<typeof CreatorNotifications>["notifications"][number];

type NotificationHistoryItem =
  ComponentProps<typeof NotificationHistory>["notifications"][number];

export default function NotificationsPage() {
  const channels: NotificationChannel[] = [];
  const emailPreferences: NotificationPreference[] = [];
  const websitePreferences: NotificationPreference[] = [];
  const communityNotifications: CommunityNotification[] = [];
  const creatorNotifications: CreatorNotification[] = [];
  const notificationHistory: NotificationHistoryItem[] = [];

  function handleToggle() {
    // API wiring later
  }

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <section>
          <NotificationSettings
            channels={channels}
            onToggle={handleToggle}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <EmailNotifications
            preferences={emailPreferences}
            onToggle={handleToggle}
          />

          <WebsiteNotifications
            preferences={websitePreferences}
            onToggle={handleToggle}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <CommunityNotifications notifications={communityNotifications} />

          <CreatorNotifications notifications={creatorNotifications} />
        </section>

        <section>
          <NotificationHistory notifications={notificationHistory} />
        </section>
      </div>
    </main>
  );
}