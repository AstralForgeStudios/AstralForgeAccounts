type InvoiceStatus = "Paid" | "Open" | "Failed" | "Refunded";

type Invoice = {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: InvoiceStatus;
  downloadUrl?: string;
};

type InvoiceHistoryCardProps = {
  invoices?: Invoice[];
};

const statusStyles: Record<InvoiceStatus, string> = {
  Paid: "border-green-500/40 text-green-400",
  Open: "border-forge-gold/40 text-forge-gold",
  Failed: "border-red-500/40 text-red-400",
  Refunded: "border-forge-silverDark text-forge-silver",
};

export default function InvoiceHistoryCard({
  invoices = [],
}: InvoiceHistoryCardProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Invoices
        </p>

        <h2 className="text-2xl font-bold text-white">Invoice History</h2>

        <p className="mt-3 text-forge-silver">
          View your Forge Pass billing records and receipts.
        </p>
      </div>

      {invoices.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No invoices yet
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Once you subscribe to Adept or Master, your invoices will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-forge-border">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead className="bg-forge-dark">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-forge-silver">
                  Date
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-forge-silver">
                  Description
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-forge-silver">
                  Amount
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-forge-silver">
                  Status
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-forge-silver">
                  Receipt
                </th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-t border-forge-border">
                  <td className="px-4 py-3 text-sm text-forge-silver">
                    {invoice.date}
                  </td>

                  <td className="px-4 py-3 text-sm text-white">
                    {invoice.description}
                  </td>

                  <td className="px-4 py-3 text-sm text-forge-silver">
                    {invoice.amount}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[invoice.status]}`}
                    >
                      {invoice.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-right">
                    {invoice.downloadUrl ? (
                      <a
                        href={invoice.downloadUrl}
                        className="text-sm font-semibold text-forge-gold transition hover:opacity-80"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-sm text-forge-silverDark">
                        —
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}