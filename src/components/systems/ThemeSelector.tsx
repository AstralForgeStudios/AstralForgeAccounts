"use client";

type ThemeOption = {
  id: string;
  name: string;
  description: string;
};

type ThemeSelectorProps = {
  themes: ThemeOption[];
  activeTheme: string;
  onThemeChange: (themeId: string) => void;
};

export default function ThemeSelector({
  themes,
  activeTheme,
  onThemeChange,
}: ThemeSelectorProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Appearance
        </p>

        <h2 className="text-2xl font-bold text-white">
          Theme Selector
        </h2>

        <p className="mt-3 text-forge-silver">
          Choose how the Astral Forge dashboard appears on your account.
        </p>
      </div>

      {themes.length === 0 ? (
        <div className="rounded-xl border border-forge-border bg-forge-dark p-6 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Themes Available
          </h3>

          <p className="mt-2 text-sm text-forge-silver">
            Theme options will appear here once available.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {themes.map((theme) => {
            const isActive = theme.id === activeTheme;

            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => onThemeChange(theme.id)}
                className={`rounded-xl border p-4 text-left transition ${
                  isActive
                    ? "border-forge-gold bg-forge-gold/10"
                    : "border-forge-border bg-forge-dark hover:border-forge-gold"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">
                    {theme.name}
                  </h3>

                  {isActive && (
                    <span className="rounded-full border border-forge-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forge-gold">
                      Active
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-forge-silver">
                  {theme.description}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}