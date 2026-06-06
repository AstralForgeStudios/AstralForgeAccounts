// src/lib/navigation.ts

export type NavigationItem = {
  label: string;
  href: string;
  icon?: string;
};

export const DASHBOARD_NAVIGATION: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: "layout-dashboard",
  },

  {
    label: "Billing",
    href: "/billing",
    icon: "credit-card",
  },

  {
    label: "Downloads",
    href: "/downloads",
    icon: "download",
  },

  {
    label: "Notifications",
    href: "/notifications",
    icon: "bell",
  },

  {
    label: "Security",
    href: "/security",
    icon: "shield",
  },

  {
    label: "Systems",
    href: "/systems",
    icon: "settings",
  },
];

export const USER_DROPDOWN_NAVIGATION: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/",
  },

  {
    label: "Settings",
    href: "/systems",
  },
];

export const FOOTER_NAVIGATION: NavigationItem[] = [
  {
    label: "Astral Forge",
    href: "https://astralforge.studio",
  },

  {
    label: "Privacy Policy",
    href: "/privacy",
  },

  {
    label: "Terms of Service",
    href: "/terms",
  },

  {
    label: "Support",
    href: "/support",
  },
];

export const SYSTEMS_NAVIGATION: NavigationItem[] = [
  {
    label: "Overview",
    href: "#overview",
  },

  {
    label: "Connected Accounts",
    href: "#connected-accounts",
  },

  {
    label: "Discord Integration",
    href: "#discord",
  },

  {
    label: "API Keys",
    href: "#api-keys",
  },

  {
    label: "Developer Tools",
    href: "#developer-tools",
  },

  {
    label: "Experimental Features",
    href: "#experimental-features",
  },

  {
    label: "Profile Customization",
    href: "#profile-customization",
  },

  {
    label: "Theme Selector",
    href: "#theme-selector",
  },
];

export const SECURITY_NAVIGATION: NavigationItem[] = [
  {
    label: "Overview",
    href: "#overview",
  },

  {
    label: "Password",
    href: "#password",
  },

  {
    label: "Two-Factor Authentication",
    href: "#two-factor",
  },

  {
    label: "Recovery Codes",
    href: "#recovery-codes",
  },

  {
    label: "Active Sessions",
    href: "#active-sessions",
  },

  {
    label: "Login History",
    href: "#login-history",
  },

  {
    label: "Audit Log",
    href: "#audit-log",
  },

  {
    label: "Delete Account",
    href: "#delete-account",
  },
];

export const NOTIFICATION_NAVIGATION: NavigationItem[] = [
  {
    label: "Notification Settings",
    href: "#settings",
  },

  {
    label: "Website Notifications",
    href: "#website",
  },

  {
    label: "Email Notifications",
    href: "#email",
  },

  {
    label: "Community Notifications",
    href: "#community",
  },

  {
    label: "Creator Notifications",
    href: "#creator",
  },

  {
    label: "Notification History",
    href: "#history",
  },
];

export const BILLING_NAVIGATION: NavigationItem[] = [
  {
    label: "Overview",
    href: "#overview",
  },

  {
    label: "Current Plan",
    href: "#current-plan",
  },

  {
    label: "Forge Pass",
    href: "#forge-pass",
  },

  {
    label: "Subscription",
    href: "#subscription",
  },

  {
    label: "Payment Methods",
    href: "#payment-methods",
  },

  {
    label: "Invoices",
    href: "#invoices",
  },
];

export const DOWNLOAD_NAVIGATION: NavigationItem[] = [
  {
    label: "Library",
    href: "#library",
  },

  {
    label: "Downloads",
    href: "#downloads",
  },

  {
    label: "Licenses",
    href: "#licenses",
  },

  {
    label: "Updates",
    href: "#updates",
  },
];