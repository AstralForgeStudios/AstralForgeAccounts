"use client";

type ProfileCustomizationProps = {
  displayName: string;
  bio: string;
  location?: string | null;
  website?: string | null;
  pronouns?: string | null;

  onDisplayNameChange: (value: string) => void;
  onBioChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onWebsiteChange: (value: string) => void;
  onPronounsChange: (value: string) => void;

  onSave: () => void;
};

export default function ProfileCustomization({
  displayName,
  bio,
  location,
  website,
  pronouns,
  onDisplayNameChange,
  onBioChange,
  onLocationChange,
  onWebsiteChange,
  onPronounsChange,
  onSave,
}: ProfileCustomizationProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Profile
        </p>

        <h2 className="text-2xl font-bold text-white">
          Profile Customization
        </h2>

        <p className="mt-3 text-forge-silver">
          Customize how your profile appears across Astral Forge services,
          communities, creator pages, and future products.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label
            htmlFor="displayName"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Display Name
          </label>

          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(event) =>
              onDisplayNameChange(event.target.value)
            }
            maxLength={50}
            className="w-full rounded-lg border border-forge-border bg-forge-dark px-4 py-3 text-white outline-none transition focus:border-forge-gold"
          />
        </div>

        <div>
          <label
            htmlFor="bio"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Biography
          </label>

          <textarea
            id="bio"
            value={bio}
            onChange={(event) =>
              onBioChange(event.target.value)
            }
            rows={5}
            maxLength={1000}
            className="w-full rounded-lg border border-forge-border bg-forge-dark px-4 py-3 text-white outline-none transition focus:border-forge-gold"
          />

          <p className="mt-2 text-xs text-forge-silver">
            {bio.length} / 1000 characters
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-semibold text-white"
            >
              Location
            </label>

            <input
              id="location"
              type="text"
              value={location ?? ""}
              onChange={(event) =>
                onLocationChange(event.target.value)
              }
              maxLength={100}
              className="w-full rounded-lg border border-forge-border bg-forge-dark px-4 py-3 text-white outline-none transition focus:border-forge-gold"
            />
          </div>

          <div>
            <label
              htmlFor="pronouns"
              className="mb-2 block text-sm font-semibold text-white"
            >
              Pronouns
            </label>

            <input
              id="pronouns"
              type="text"
              value={pronouns ?? ""}
              onChange={(event) =>
                onPronounsChange(event.target.value)
              }
              maxLength={50}
              className="w-full rounded-lg border border-forge-border bg-forge-dark px-4 py-3 text-white outline-none transition focus:border-forge-gold"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="website"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Website
          </label>

          <input
            id="website"
            type="url"
            value={website ?? ""}
            onChange={(event) =>
              onWebsiteChange(event.target.value)
            }
            placeholder="https://"
            className="w-full rounded-lg border border-forge-border bg-forge-dark px-4 py-3 text-white outline-none transition focus:border-forge-gold"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={onSave}
          className="rounded-lg bg-forge-gold px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Save Profile
        </button>
      </div>
    </section>
  );
}