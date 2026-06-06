// src/store/billing.store.ts

import { create } from "zustand";
import type {
  BillingOverview,
  Invoice,
  PaymentMethod,
} from "@/services/billing.service";

type BillingState = {
  billing: BillingOverview | null;

  invoices: Invoice[];
  paymentMethods: PaymentMethod[];

  isLoading: boolean;
  error: string | null;

  setBilling: (
    billing: BillingOverview | null
  ) => void;

  setInvoices: (
    invoices: Invoice[]
  ) => void;

  setPaymentMethods: (
    methods: PaymentMethod[]
  ) => void;

  setLoading: (
    isLoading: boolean
  ) => void;

  setError: (
    error: string | null
  ) => void;

  clearBilling: () => void;
};

export const useBillingStore =
  create<BillingState>((set) => ({
    billing: null,

    invoices: [],
    paymentMethods: [],

    isLoading: false,
    error: null,

    setBilling: (billing) =>
      set({
        billing,
      }),

    setInvoices: (invoices) =>
      set({
        invoices,
      }),

    setPaymentMethods: (
      paymentMethods
    ) =>
      set({
        paymentMethods,
      }),

    setLoading: (isLoading) =>
      set({
        isLoading,
      }),

    setError: (error) =>
      set({
        error,
      }),

    clearBilling: () =>
      set({
        billing: null,

        invoices: [],
        paymentMethods: [],

        isLoading: false,
        error: null,
      }),
  }));