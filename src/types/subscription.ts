// src/types/subscription.ts

import type {
  BillingCycle,
  ForgePassTier,
  SubscriptionStatus,
} from "@/types/billing";

export type Subscription = {
  id: string;

  userId: string;

  tier: ForgePassTier;

  status: SubscriptionStatus;

  billingCycle: BillingCycle;

  startedAt: string;

  currentPeriodStart: string;
  currentPeriodEnd: string;

  cancelAtPeriodEnd: boolean;

  canceledAt?: string | null;
  expiresAt?: string | null;

  createdAt: string;
  updatedAt: string;
};

export type SubscriptionFeature = {
  id: string;

  tier: ForgePassTier;

  name: string;
  description: string;
};

export type SubscriptionPlan = {
  tier: ForgePassTier;

  displayName: string;
  description: string;

  monthlyPrice: number;
  yearlyPrice: number;

  features: SubscriptionFeature[];
};

export type SubscriptionUsage = {
  worldsCreated?: number;
  storageUsed?: number;
  apiRequests?: number;
  downloads?: number;
};

export type SubscriptionLimits = {
  maxWorlds?: number | null;
  maxStorageGB?: number | null;
  maxApiRequests?: number | null;
  maxDownloads?: number | null;
};

export type SubscriptionSummary = {
  subscription: Subscription | null;

  limits: SubscriptionLimits;

  usage: SubscriptionUsage;
};

export type UpgradeSubscriptionRequest = {
  tier: Exclude<ForgePassTier, "Initiate">;
  billingCycle: BillingCycle;
};

export type DowngradeSubscriptionRequest = {
  tier: ForgePassTier;
};

export type CancelSubscriptionRequest = {
  cancelAtPeriodEnd: boolean;
};

export type SubscriptionInvoice = {
  id: string;

  invoiceNumber: string;

  amount: number;
  currency: string;

  paid: boolean;

  issuedAt: string;

  downloadUrl?: string | null;
};

export type SubscriptionResponse = {
  subscription: Subscription;
};

export type SubscriptionSummaryResponse = {
  summary: SubscriptionSummary;
};

export type SubscriptionInvoicesResponse = {
  invoices: SubscriptionInvoice[];
};