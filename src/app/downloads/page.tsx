import DownloadLibrary from "@/components/downloads/DownloadLibrary";
import ProductDownloads from "@/components/downloads/ProductDownloads";
import LicenseCard from "@/components/downloads/LicenseCard";
import UpdateHistory from "@/components/downloads/UpdateHistory";
import DownloadFilters from "@/components/downloads/DownloadFilters";

export default function DownloadsPage() {
  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        
        <DownloadFilters />

        <section>
          <DownloadLibrary />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <ProductDownloads />
          <LicenseCard />
        </section>

        <section>
          <UpdateHistory />
        </section>

      </div>
    </main>
  );
}