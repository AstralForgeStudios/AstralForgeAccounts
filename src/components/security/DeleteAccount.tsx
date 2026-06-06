"use client";

import { useState } from "react";

type DeleteAccountProps = {
  confirmationPhrase: string;
  onDeleteAccount: () => void;
};

export default function DeleteAccount({
  confirmationPhrase,
  onDeleteAccount,
}: DeleteAccountProps) {
  const [inputValue, setInputValue] = useState("");
  const canDelete = inputValue === confirmationPhrase;

  return (
    <section className="rounded-2xl border border-red-500/40 bg-red-500/10 p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
          Danger Zone
        </p>

        <h2 className="text-2xl font-bold text-white">Delete Account</h2>

        <p className="mt-3 text-red-200">
          This action is permanent. Your account profile, settings, sessions,
          notifications, and Forge Pass data will be removed.
        </p>
      </div>

      <div className="rounded-xl border border-red-500/30 bg-black/30 p-4">
        <p className="text-sm text-red-200">
          To confirm deletion, type:
        </p>

        <p className="mt-2 font-mono text-sm font-semibold text-white">
          {confirmationPhrase}
        </p>
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Type confirmation phrase"
        className="mt-4 w-full rounded-lg border border-red-500/40 bg-forge-dark px-4 py-3 text-white outline-none placeholder:text-forge-silverDark focus:border-red-400"
      />

      <button
        type="button"
        onClick={onDeleteAccount}
        disabled={!canDelete}
        className="mt-6 rounded-lg border border-red-500/40 px-5 py-2.5 font-semibold text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Permanently Delete Account
      </button>
    </section>
  );
}