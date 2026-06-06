// src/types/billing.ts

export type ForgePassTier =
  | "Initiate"
  | "Adept"
  | "Master";

export type BillingCycle =
  | "monthly"
  | "yearly";

export type SubscriptionStatus =
  | "free"
  | "active"
  | "trialing"
  | "past_due"
  | "canceling"
  | "canceled"
  | "expired";

export type BillingOverview = {
  currentTier: ForgePassTier;

  status: SubscriptionStatus;

  billingCycle?: BillingCycle | null;

  startedAt?: string | null;
  renewalDate?: string | null;
  expiresAt?: string | null;
};

export type ForgePassPlan = {
  tier: ForgePassTier;

  name: string;
  description: string;

  monthlyPrice: number;
  yearlyPrice: number;

  features: string[];
};

export type PaymentMethod = {
  id: string;

  brand: string;

  last4: string;

  expMonth: number;
  expYear: number;

  holderName?: string | null;

  isDefault: boolean;
};

export type InvoiceStatus =
  | "paid"
  | "open"
  | "failed"
  | "refunded"
  | "void";

export type Invoice = {
  id: string;

  invoiceNumber: string;

  amount: number;
  currency: string;

  status: InvoiceStatus;

  description: string;

  issuedAt: string;
  paidAt?: string | null;

  downloadUrl?: string | null;
};

export type Subscription = {
  id: string;

  tier: ForgePassTier;

  status: SubscriptionStatus;

  billingCycle: BillingCycle;

  startedAt: string;

  renewalDate?: string | null;
  expiresAt?: string | null;

  cancelAtPeriodEnd: boolean;
};

export type CheckoutSession = {
  id: string;
  url: string;
};

export type CustomerPortalSession = {
  url: string;
};

export type BillingStatistics = {
  totalSpent: number;

  invoiceCount: number;

  activeSubscriptions: number;

  paymentMethods: number;
};