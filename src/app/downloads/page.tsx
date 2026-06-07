"use client";

import { useMemo, useState } from "react";
import type { ComponentProps } from "react";

import DownloadLibrary from "@/components/downloads/DownloadLibrary";
import ProductDownloads from "@/components/downloads/ProductDownloads";
import LicenseCard from "@/components/downloads/LicenseCard";
import UpdateHistory from "@/components/downloads/UpdateHistory";
import DownloadFilters from "@/components/downloads/DownloadFilters";

type DownloadCategory =
  | "all"
  | "software"
  | "assets"
  | "adventures"
  | "rulebooks"
  | "licenses";

type DownloadItem = ComponentProps<typeof DownloadLibrary>["downloads"][number];
type ProductDownload = ComponentProps<typeof ProductDownloads>["products"][number];
type License = ComponentProps<typeof LicenseCard>["licenses"][number];
type UpdateEntry = ComponentProps<typeof UpdateHistory>["updates"][number];

export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] =
    useState<DownloadCategory>("all");

  const [searchQuery, setSearchQuery] = useState("");

  const downloads: DownloadItem[] = [];
  const products: ProductDownload[] = [];
  const licenses: License[] = [];
  const updates: UpdateEntry[] = [];

  const filteredDownloads = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return downloads.filter((download) => {
      const matchesSearch =
        query.length === 0 ||
        download.name.toLowerCase().includes(query) ||
        download.version.toLowerCase().includes(query) ||
        download.platform.toLowerCase().includes(query);

      return matchesSearch;
    });
  }, [downloads, searchQuery, activeCategory]);

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <DownloadFilters
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          onCategoryChange={setActiveCategory}
          onSearchChange={setSearchQuery}
        />

        <section>
          <DownloadLibrary downloads={filteredDownloads} />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <ProductDownloads products={products} />
          <LicenseCard licenses={licenses} />
        </section>

        <section>
          <UpdateHistory updates={updates} />
        </section>
      </div>
    </main>
  );
}