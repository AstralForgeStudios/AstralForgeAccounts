import DownloadCard from "@/components/downloads/DownloadCard";

type DownloadItem = {
  id: string;
  name: string;
  version: string;
  platform: string;
  fileSize: string;
  releaseDate: string;
  downloadUrl: string;
  releaseNotesUrl?: string;
};

type DownloadLibraryProps = {
  downloads: DownloadItem[];
};

export default function DownloadLibrary({
  downloads,
}: DownloadLibraryProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Library
        </p>

        <h2 className="text-2xl font-bold text-white">
          Download Library
        </h2>

        <p className="mt-3 text-forge-silver">
          Your available downloads, installers, and owned files.
        </p>
      </div>

      {downloads.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Downloads Available
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Purchased software, owned products, and available files will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {downloads.map((download) => (
            <DownloadCard
              key={download.id}
              id={download.id}
              name={download.name}
              version={download.version}
              platform={download.platform}
              fileSize={download.fileSize}
              releaseDate={download.releaseDate}
              downloadUrl={download.downloadUrl}
              releaseNotesUrl={download.releaseNotesUrl}
            />
          ))}
        </div>
      )}
    </section>
  );
}