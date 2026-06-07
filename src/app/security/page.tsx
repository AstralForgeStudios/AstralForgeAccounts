"use client";

import type { ComponentProps } from "react";

import SecurityOverview from "@/components/security/SecurityOverview";
import PasswordSettings from "@/components/security/PasswordSettings";
import TwoFactorAuthentication from "@/components/security/TwoFactorAuthentication";
import RecoveryCodes from "@/components/security/RecoveryCodes";
import ActiveSessions from "@/components/security/ActiveSessions";
import LoginHistory from "@/components/security/LoginHistory";
import AuditLog from "@/components/security/AuditLog";
import DeleteAccount from "@/components/security/DeleteAccount";

type ActiveSession =
  ComponentProps<typeof ActiveSessions>["sessions"][number];

type LoginEntry =
  ComponentProps<typeof LoginHistory>["logins"][number];

type AuditEntry =
  ComponentProps<typeof AuditLog>["entries"][number];

export default function SecurityPage() {
  const sessions: ActiveSession[] = [];
  const logins: LoginEntry[] = [];
  const auditEntries: AuditEntry[] = [];
  const recoveryCodes: string[] = [];

  function noop() {
    // API wiring later
  }

  function handlePasswordChange() {
    // API wiring later
  }

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <section>
          <SecurityOverview
            emailVerified={false}
            twoFactorEnabled={false}
            activeSessionsCount={0}
            lastLoginAt={null}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <PasswordSettings onChangePassword={handlePasswordChange} />

          <TwoFactorAuthentication
            enabled={false}
            method={null}
            enabledAt={null}
            onEnable={noop}
            onDisable={noop}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <RecoveryCodes
            codes={recoveryCodes}
            revealed={false}
            onReveal={noop}
            onRegenerate={noop}
            onDownload={noop}
          />

          <ActiveSessions
            sessions={sessions}
            onRevokeSession={noop}
            onRevokeAllOtherSessions={noop}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <LoginHistory logins={logins} />
          <AuditLog entries={auditEntries} />
        </section>

        <section>
          <DeleteAccount
            confirmationPhrase="DELETE MY ACCOUNT"
            onDeleteAccount={noop}
          />
        </section>
      </div>
    </main>
  );
}