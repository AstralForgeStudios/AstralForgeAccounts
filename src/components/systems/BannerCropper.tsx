"use client";

import { useRef, useState } from "react";

type BannerCropperProps = {
  imageUrl?: string | null;
  onCancel: () => void;
  onConfirm: (file: File) => void;
};

export default function BannerCropper({
  imageUrl,
  onCancel,
  onConfirm,
}: BannerCropperProps) {
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

    if (file.size > 5 * 1024 * 1024) {
      alert("Banner images must be 5 MB or smaller.");
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
          Banner
        </p>

        <h2 className="text-2xl font-bold text-white">Crop Banner</h2>

        <p className="mt-3 text-forge-silver">
          Upload a wide image for the best result. Recommended ratio is 16:9.
        </p>
      </div>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-forge-border bg-forge-dark transition hover:border-forge-gold"
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Banner preview"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm text-forge-silver">Choose Banner Image</span>
        )}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="mt-6 flex flex-wrap justify-end gap-3">
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
          Save Banner
        </button>
      </div>
    </div>
  );
}