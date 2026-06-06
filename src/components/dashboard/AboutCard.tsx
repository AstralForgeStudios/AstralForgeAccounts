type AboutCardProps = {
  displayName?: string;
  username?: string;
  bio?: string;
  memberSince?: string;
};

export default function AboutCard({
  displayName,
  username,
  bio,
  memberSince,
}: AboutCardProps) {
  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Profile
        </p>

        <h2 className="text-2xl font-bold text-white">
          About Me
        </h2>
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-sm text-forge-silver">
            Display Name
          </p>

          <p className="mt-1 font-semibold text-white">
            {displayName || "Not Set"}
          </p>
        </div>

        <div>
          <p className="text-sm text-forge-silver">
            Username
          </p>

          <p className="mt-1 font-semibold text-white">
            {username ? `@${username}` : "Not Set"}
          </p>
        </div>

        <div>
          <p className="text-sm text-forge-silver">
            About
          </p>

          <div className="mt-2 rounded-xl border border-forge-border bg-forge-dark p-4">
            <p className="whitespace-pre-wrap text-sm text-forge-silver">
              {bio ||
                "This member has not yet written an introduction."}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm text-forge-silver">
            Member Since
          </p>

          <p className="mt-1 font-semibold text-white">
            {memberSince || "Unknown"}
          </p>
        </div>
      </div>
    </section>
  );
}