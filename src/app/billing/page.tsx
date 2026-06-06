import BillingOverview from "@/components/billing/BillingOverview";
import CurrentPlanCard from "@/components/billing/CurrentPlanCard";
import ForgePassCard from "@/components/billing/ForgePassCard";
import ForgePassBenefits from "@/components/billing/ForgePassBenefits";
import PaymentMethodsCard from "@/components/billing/PaymentMethodsCard";
import InvoiceHistoryCard from "@/components/billing/InvoiceHistoryCard";
import SubscriptionManagement from "@/components/billing/SubscriptionManagement";

export default function BillingPage() {
  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <BillingOverview />

        <section className="grid gap-6 lg:grid-cols-2">
          <CurrentPlanCard />
          <ForgePassCard />
        </section>

        <section>
          <ForgePassBenefits />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <PaymentMethodsCard />
          <SubscriptionManagement />
        </section>

        <section>
          <InvoiceHistoryCard />
        </section>
      </div>
    </main>
  );
}