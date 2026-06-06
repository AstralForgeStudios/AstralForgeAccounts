"use client";

type DownloadCategory = "all" | "software" | "assets" | "adventures" | "rulebooks" | "licenses";

type DownloadFiltersProps = {
  activeCategory: DownloadCategory;
  searchQuery: string;
  onCategoryChange: (category: DownloadCategory) => void;
  onSearchChange: (value: string) => void;
};

const categories: {
  label: string;
  value: DownloadCategory;
}[] = [
  { label: "All", value: "all" },
  { label: "Software", value: "software" },
  { label: "Assets", value: "assets" },
  { label: "Adventures", value: "adventures" },
  { label: "Rulebooks", value: "rulebooks" },
  { label: "Licenses", value: "licenses" },
];

export default function DownloadFilters({
  activeCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
}: DownloadFiltersProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Downloads
        </p>

        <h2 className="text-2xl font-bold text-white">
          Filter Library
        </h2>

        <p className="mt-3 text-forge-silver">
          Search and filter your available downloads.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search downloads..."
          className="w-full rounded-lg border border-forge-border bg-forge-dark px-4 py-3 text-white outline-none transition placeholder:text-forge-silverDark focus:border-forge-gold lg:max-w-md"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category.value === activeCategory;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => onCategoryChange(category.value)}
                className={
                  isActive
                    ? "rounded-lg bg-forge-gold px-4 py-2 text-sm font-semibold text-black"
                    : "rounded-lg border border-forge-border px-4 py-2 text-sm font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
                }
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}