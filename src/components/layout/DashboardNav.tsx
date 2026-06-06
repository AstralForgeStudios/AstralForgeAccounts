import Link from "next/link";

type NavigationItem = {
  label: string;
  href: string;
  icon: string;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: "/icons/dashboard.svg",
  },
  {
    label: "Billing",
    href: "/billing",
    icon: "/icons/billing.svg",
  },
  {
    label: "Downloads",
    href: "/downloads",
    icon: "/icons/downloads.svg",
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: "/icons/notifications.svg",
  },
  {
    label: "Security",
    href: "/security",
    icon: "/icons/security.svg",
  },
  {
    label: "Systems",
    href: "/systems",
    icon: "/icons/systems.svg",
  },
];

type DashboardNavProps = {
  currentPath: string;
};

export default function DashboardNav({
  currentPath,
}: DashboardNavProps) {
  return (
    <nav className="space-y-2">
      {navigationItems.map((item) => {
        const isActive = currentPath === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive
                ? "border border-forge-gold/40 bg-forge-gold/10 text-forge-gold"
                : "border border-transparent text-forge-silver hover:border-forge-border hover:bg-forge-dark hover:text-white"
            }`}
          >
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              className="h-5 w-5"
            />

            <span className="font-medium">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}