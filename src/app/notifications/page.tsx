import NotificationSettings from "@/components/notifications/NotificationSettings";
import EmailNotifications from "@/components/notifications/EmailNotifications";
import WebsiteNotifications from "@/components/notifications/WebsiteNotifications";
import CommunityNotifications from "@/components/notifications/CommunityNotifications";
import CreatorNotifications from "@/components/notifications/CreatorNotifications";
import NotificationHistory from "@/components/notifications/NotificationHistory";

export default function NotificationsPage() {
  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">

        <section>
          <NotificationSettings />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <EmailNotifications />
          <WebsiteNotifications />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <CommunityNotifications />
          <CreatorNotifications />
        </section>

        <section>
          <NotificationHistory />
        </section>

      </div>
    </main>
  );
}