"use client";

import { useState } from "react";
import BannerCropper from "./BannerCropper";
import BannerPreview from "./BannerPreview";

type BannerUploadModalProps = {
  isOpen: boolean;
  currentBannerUrl?: string | null;
  displayName: string;
  onClose: () => void;
  onSave: (file: File) => void;
};

export default function BannerUploadModal({
  isOpen,
  currentBannerUrl = null,
  displayName,
  onClose,
  onSave,
}: BannerUploadModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentBannerUrl);

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
      <div className="w-full max-w-5xl rounded-2xl border border-forge-border bg-forge-card p-6 shadow-forge">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
              Banner
            </p>

            <h2 className="text-2xl font-bold text-white">
              Change Profile Banner
            </h2>

            <p className="mt-3 text-forge-silver">
              Upload a wide PNG, JPG, or WEBP image for your profile banner.
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

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <BannerCropper
            imageUrl={currentBannerUrl}
            onCancel={onClose}
            onConfirm={handleConfirm}
          />

          <BannerPreview src={previewUrl} displayName={displayName} />
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
            Save Banner
          </button>
        </div>
      </div>
    </div>
  );
}