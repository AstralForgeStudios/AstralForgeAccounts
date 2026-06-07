import type { ComponentProps } from "react";

import SystemsOverview from "@/components/systems/SystemsOverview";
import ConnectedAccounts from "@/components/systems/ConnectedAccounts";
import DiscordIntegration from "@/components/systems/DiscordIntegration";
import APIKeys from "@/components/systems/APIKeys";
import DeveloperTools from "@/components/systems/DeveloperTools";
import ExperimentalFeatures from "@/components/systems/ExperimentalFeatures";
import ThemeSelector from "@/components/systems/ThemeSelector";
import SystemStatus from "@/components/systems/SystemStatus";

type ConnectedAccount =
  ComponentProps<typeof ConnectedAccounts>["accounts"][number];

type APIKey =
  ComponentProps<typeof APIKeys>["apiKeys"][number];

type DeveloperTool =
  ComponentProps<typeof DeveloperTools>["tools"][number];

type ExperimentalFeature =
  ComponentProps<typeof ExperimentalFeatures>["features"][number];

type ThemeOption =
  ComponentProps<typeof ThemeSelector>["themes"][number];

type SystemService =
  ComponentProps<typeof SystemStatus>["services"][number];

export default function SystemsPage() {
  const accounts: ConnectedAccount[] = [];
  const apiKeys: APIKey[] = [];
  const developerTools: DeveloperTool[] = [];
  const experimentalFeatures: ExperimentalFeature[] = [];
  const themes: ThemeOption[] = [];
  const services: SystemService[] = [];

  function noop() {
    // API wiring later
  }

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <section>
          <SystemsOverview
            accountStatus="Active"
            forgePassTier="Initiate"
            emailVerified={false}
            discordConnected={false}
            twoFactorEnabled={false}
            activeSessions={0}
            apiKeys={0}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <ConnectedAccounts
            accounts={accounts}
            onConnect={noop}
            onDisconnect={noop}
          />

          <DiscordIntegration
            connection={{
              connected: false,
            }}
            onConnect={noop}
            onDisconnect={noop}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <ThemeSelector
            themes={themes}
            activeTheme="system"
            onThemeChange={noop}
          />

          <APIKeys
            apiKeys={apiKeys}
            onCreateKey={noop}
            onRevokeKey={noop}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <DeveloperTools
            tools={developerTools}
            onToggle={noop}
          />

          <ExperimentalFeatures
            features={experimentalFeatures}
            onToggle={noop}
          />
        </section>

        <section>
          <SystemStatus
            services={services}
            lastUpdated="Unavailable"
          />
        </section>
      </div>
    </main>
  );
}