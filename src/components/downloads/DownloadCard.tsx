import Link from "next/link";

type DownloadCardProps = {
  id: string;
  name: string;
  version: string;
  platform: string;
  fileSize: string;
  releaseDate: string;
  downloadUrl: string;
  releaseNotesUrl?: string;
};

export default function DownloadCard({
  name,
  version,
  platform,
  fileSize,
  releaseDate,
  downloadUrl,
  releaseNotesUrl,
}: DownloadCardProps) {
  return (
    <article className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">
            {name}
          </h3>

          <p className="mt-1 text-forge-gold">
            Version {version}
          </p>
        </div>

        <Link
          href={downloadUrl}
          className="rounded-lg bg-forge-gold px-5 py-2.5 text-center font-semibold text-black transition hover:opacity-90"
        >
          Download
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-forge-border bg-forge-dark p-4">
          <p className="text-sm text-forge-silver">
            Platform
          </p>

          <p className="mt-2 font-semibold text-white">
            {platform}
          </p>
        </div>

        <div className="rounded-xl border border-forge-border bg-forge-dark p-4">
          <p className="text-sm text-forge-silver">
            File Size
          </p>

          <p className="mt-2 font-semibold text-white">
            {fileSize}
          </p>
        </div>

        <div className="rounded-xl border border-forge-border bg-forge-dark p-4">
          <p className="text-sm text-forge-silver">
            Released
          </p>

          <p className="mt-2 font-semibold text-white">
            {releaseDate}
          </p>
        </div>
      </div>

      {releaseNotesUrl && (
        <div className="mt-6">
          <Link
            href={releaseNotesUrl}
            className="text-sm font-semibold text-forge-gold transition hover:opacity-80"
          >
            View Release Notes
          </Link>
        </div>
      )}
    </article>
  );
}