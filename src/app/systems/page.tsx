import SystemsOverview from "@/components/systems/SystemsOverview";
import ConnectedAccounts from "@/components/systems/ConnectedAccounts";
import DiscordIntegration from "@/components/systems/DiscordIntegration";
import APIKeys from "@/components/systems/APIKeys";
import DeveloperTools from "@/components/systems/DeveloperTools";
import ExperimentalFeatures from "@/components/systems/ExperimentalFeatures";
import ThemeSelector from "@/components/systems/ThemeSelector";
import SystemStatus from "@/components/systems/SystemStatus";

export default function SystemsPage() {
  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">

        <section>
          <SystemsOverview />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <ConnectedAccounts />
          <DiscordIntegration />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <ThemeSelector />
          <APIKeys />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <DeveloperTools />
          <ExperimentalFeatures />
        </section>

        <section>
          <SystemStatus />
        </section>

      </div>
    </main>
  );
}