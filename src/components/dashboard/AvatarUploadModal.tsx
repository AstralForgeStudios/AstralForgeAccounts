"use client";

import { useState } from "react";
import AvatarCropper from "@/components/dashboard/AvatarCropper";
import AvatarPreview from "@/components/dashboard/AvatarPreview";

type AvatarUploadModalProps = {
  isOpen: boolean;
  currentAvatarUrl?: string | null;
  displayName?: string;
  username?: string;
  onClose: () => void;
  onSave: (file: File) => void;
};

export default function AvatarUploadModal({
  isOpen,
  currentAvatarUrl = null,
  displayName = "Astral Forge Member",
  username,
  onClose,
  onSave,
}: AvatarUploadModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentAvatarUrl);

  if (!isOpen) return null;

  function handleConfirm(file: File) {
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }

  function handleSave() {
    if (!selectedFile) return;
    onSave(selectedFile);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6">
      <div className="w-full max-w-4xl rounded-2xl border border-forge-border bg-forge-card p-6 shadow-forge">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
              Avatar
            </p>

            <h2 className="text-2xl font-bold text-white">
              Change Avatar
            </h2>

            <p className="mt-3 text-forge-silver">
              Upload a PNG, JPG, or WEBP image. A square image works best.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-forge-border px-3 py-1.5 text-sm font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
          >
            Close
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <AvatarCropper
            imageUrl={currentAvatarUrl}
            onCancel={onClose}
            onConfirm={handleConfirm}
          />

          <AvatarPreview
            src={previewUrl}
            displayName={displayName}
            username={username}
            size="lg"
          />
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-forge-border px-5 py-2.5 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={!selectedFile}
            className="rounded-lg bg-forge-gold px-5 py-2.5 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Save Avatar
          </button>
        </div>
      </div>
    </div>
  );
}