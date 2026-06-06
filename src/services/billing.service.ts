// src/services/billing.service.ts

export type ForgePassTier = "Initiate" | "Adept" | "Master";

export type SubscriptionStatus =
  | "free"
  | "active"
  | "canceling"
  | "past_due"
  | "expired"
  | "canceled";

export type BillingOverview = {
  currentTier: ForgePassTier;
  status: SubscriptionStatus;
  renewalDate?: string | null;
  endsOn?: string | null;
};

export type Invoice = {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: "Paid" | "Open" | "Failed" | "Refunded";
  downloadUrl?: string;
};

export type PaymentMethod = {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  isDefault?: boolean;
};

export async function getBillingOverview(): Promise<BillingOverview> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billing`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to load billing information.");
  }

  const data = await response.json();
  return data.billing;
}

export async function getInvoices(): Promise<Invoice[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billing/invoices`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to load invoices.");
  }

  const data = await response.json();
  return data.invoices ?? [];
}

export async function getPaymentMethods(): Promise<PaymentMethod[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billing/payment-methods`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to load payment methods.");
  }

  const data = await response.json();
  return data.paymentMethods ?? [];
}

export async function createCheckoutSession(tier: Exclude<ForgePassTier, "Initiate">): Promise<string> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billing/checkout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tier }),
  });

  if (!response.ok) {
    throw new Error("Failed to create checkout session.");
  }

  const data = await response.json();
  return data.url;
}

export async function openCustomerPortal(): Promise<string> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billing/portal`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to open billing portal.");
  }

  const data = await response.json();
  return data.url;
}

export async function cancelSubscription(): Promise<void> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billing/subscription/cancel`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to cancel subscription.");
  }
}