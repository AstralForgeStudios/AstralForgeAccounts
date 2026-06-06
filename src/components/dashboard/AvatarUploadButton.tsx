"use client";

import { useRef } from "react";

type AvatarUploadButtonProps = {
  onSelect: (file: File) => void;
  disabled?: boolean;
};

export default function AvatarUploadButton({
  onSelect,
  disabled = false,
}: AvatarUploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (disabled) return;
    fileInputRef.current?.click();
  }

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PNG, JPG, or WEBP image.");
      return;
    }

    const maxSize = 2 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("Avatar images must be 2 MB or smaller.");
      return;
    }

    onSelect(file);

    event.target.value = "";
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        aria-label="Upload Avatar"
        className="
          rounded-lg
          bg-forge-gold
          px-5
          py-2.5
          font-semibold
          text-black
          transition
          hover:opacity-90
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Change Avatar
      </button>
    </>
  );
}