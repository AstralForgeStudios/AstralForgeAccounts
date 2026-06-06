import SecurityOverview from "@/components/security/SecurityOverview";
import PasswordSettings from "@/components/security/PasswordSettings";
import TwoFactorAuthentication from "@/components/security/TwoFactorAuthentication";
import RecoveryCodes from "@/components/security/RecoveryCodes";
import ActiveSessions from "@/components/security/ActiveSessions";
import LoginHistory from "@/components/security/LoginHistory";
import AuditLog from "@/components/security/AuditLog";
import DeleteAccount from "@/components/security/DeleteAccount";

export default function SecurityPage() {
  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">

        <section>
          <SecurityOverview />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <PasswordSettings />
          <TwoFactorAuthentication />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <RecoveryCodes />
          <ActiveSessions />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <LoginHistory />
          <AuditLog />
        </section>

        <section>
          <DeleteAccount />
        </section>

      </div>
    </main>
  );
}