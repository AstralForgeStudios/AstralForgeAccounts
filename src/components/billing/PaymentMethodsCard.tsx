type PaymentMethod = {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  isDefault?: boolean;
};

type PaymentMethodsCardProps = {
  paymentMethods?: PaymentMethod[];
};

export default function PaymentMethodsCard({
  paymentMethods = [],
}: PaymentMethodsCardProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Payment
        </p>

        <h2 className="text-2xl font-bold text-white">Payment Methods</h2>

        <p className="mt-3 text-forge-silver">
          Manage the cards or payment methods connected to your Forge Pass.
        </p>
      </div>

      {paymentMethods.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No payment method saved
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Payment methods are only needed for Adept or Master subscriptions.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex flex-col gap-3 rounded-xl border border-forge-border bg-forge-dark p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold text-white">
                  {method.brand} ending in {method.last4}
                </p>

                <p className="mt-1 text-sm text-forge-silver">
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>

              {method.isDefault && (
                <span className="w-fit rounded-full border border-forge-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forge-gold">
                  Default
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-forge-border bg-forge-dark p-4">
        <p className="text-sm text-forge-silver">
          Payment details are securely managed through Stripe. Astral Forge does
          not store full card numbers.
        </p>
      </div>

      <button
        type="button"
        className="mt-6 rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90"
      >
        Manage Payment Methods
      </button>
    </section>
  );
}