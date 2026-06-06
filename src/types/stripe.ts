// src/types/stripe.ts

import type {
  BillingCycle,
  ForgePassTier,
  SubscriptionStatus,
} from "@/types/billing";

export type StripePriceId = string;
export type StripeCustomerId = string;
export type StripeSubscriptionId = string;
export type StripeCheckoutSessionId = string;
export type StripePaymentMethodId = string;
export type StripeInvoiceId = string;

export type StripeForgePassPlan = {
  tier: Exclude<ForgePassTier, "Initiate">;

  billingCycle: BillingCycle;

  priceId: StripePriceId;

  amount: number;
  currency: "usd";
};

export type StripeCheckoutSession = {
  id: StripeCheckoutSessionId;
  url: string;
};

export type StripeCustomerPortalSession = {
  url: string;
};

export type StripeSubscription = {
  id: StripeSubscriptionId;

  customerId: StripeCustomerId;

  tier: ForgePassTier;
  status: SubscriptionStatus;

  priceId?: StripePriceId | null;

  currentPeriodStart?: string | null;
  currentPeriodEnd?: string | null;

  cancelAtPeriodEnd: boolean;
};

export type StripePaymentMethod = {
  id: StripePaymentMethodId;

  brand: string;
  last4: string;

  expMonth: number;
  expYear: number;

  isDefault: boolean;
};

export type StripeInvoice = {
  id: StripeInvoiceId;

  number?: string | null;

  amountPaid: number;
  amountDue: number;

  currency: string;

  status:
    | "draft"
    | "open"
    | "paid"
    | "uncollectible"
    | "void";

  hostedInvoiceUrl?: string | null;
  invoicePdf?: string | null;

  createdAt: string;
};

export type CreateCheckoutSessionRequest = {
  tier: Exclude<ForgePassTier, "Initiate">;
  billingCycle: BillingCycle;
};

export type CreateCheckoutSessionResponse = {
  session: StripeCheckoutSession;
};

export type CreateCustomerPortalResponse = {
  session: StripeCustomerPortalSession;
};

export type StripeWebhookEventType =
  | "checkout.session.completed"
  | "customer.subscription.created"
  | "customer.subscription.updated"
  | "customer.subscription.deleted"
  | "invoice.payment_succeeded"
  | "invoice.payment_failed";

export type StripeWebhookEvent = {
  id: string;
  type: StripeWebhookEventType;
  createdAt: string;
};