"use client";

import { useState } from "react";

type PasswordSettingsProps = {
  onChangePassword: (values: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
};

export default function PasswordSettings({
  onChangePassword,
}: PasswordSettingsProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = newPassword === confirmPassword;
  const meetsLength = newPassword.length >= 12;

  const canSubmit =
    currentPassword.length > 0 &&
    newPassword.length > 0 &&
    confirmPassword.length > 0 &&
    passwordsMatch &&
    meetsLength;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) return;

    onChangePassword({
      currentPassword,
      newPassword,
      confirmPassword,
    });

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  return (
    <section className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Password
        </p>

        <h2 className="text-2xl font-bold text-white">Password Settings</h2>

        <p className="mt-3 text-forge-silver">
          Update the password used to protect your Astral Forge account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <PasswordField
          label="Current Password"
          value={currentPassword}
          onChange={setCurrentPassword}
        />

        <PasswordField
          label="New Password"
          value={newPassword}
          onChange={setNewPassword}
        />

        <PasswordField
          label="Confirm New Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />

        <div className="rounded-xl border border-forge-border bg-forge-dark p-4">
          <ul className="space-y-2 text-sm">
            <li className={meetsLength ? "text-green-400" : "text-forge-silver"}>
              • At least 12 characters
            </li>

            <li className={passwordsMatch ? "text-green-400" : "text-forge-silver"}>
              • Passwords must match
            </li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Update Password
        </button>
      </form>
    </section>
  );
}

function PasswordField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-forge-silver">
        {label}
      </span>

      <input
        type="password"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-lg border border-forge-border bg-forge-dark px-4 py-3 text-white outline-none placeholder:text-forge-silverDark focus:border-forge-gold"
      />
    </label>
  );
}