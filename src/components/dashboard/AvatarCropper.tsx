"use client";

import { useRef, useState } from "react";

type AvatarCropperProps = {
  imageUrl?: string | null;
  onCancel: () => void;
  onConfirm: (file: File) => void;
};

export default function AvatarCropper({
  imageUrl,
  onCancel,
  onConfirm,
}: AvatarCropperProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(imageUrl ?? null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = ["image/png", "image/jpeg", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PNG, JPG, or WEBP image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Avatar images must be 2 MB or smaller.");
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }

  function handleConfirm() {
    if (!selectedFile) return;
    onConfirm(selectedFile);
  }

  return (
    <div className="rounded-2xl border border-forge-border bg-forge-card p-6 shadow-card">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-forge-gold">
          Avatar
        </p>

        <h2 className="text-2xl font-bold text-white">
          Crop Avatar
        </h2>

        <p className="mt-3 text-forge-silver">
          Upload a square image for the best result. PNG, JPG, and WEBP are supported.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border border-forge-border bg-forge-dark transition hover:border-forge-gold"
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Avatar preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm text-forge-silver">
              Choose Image
            </span>
          )}
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="rounded-lg border border-forge-border px-5 py-2.5 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
          >
            Choose Image
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-forge-border px-5 py-2.5 font-semibold text-forge-silver transition hover:border-forge-gold hover:text-forge-gold"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleConfirm}
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