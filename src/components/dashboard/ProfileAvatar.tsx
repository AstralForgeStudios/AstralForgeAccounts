"use client";

import { useState } from "react";
import AvatarUploadModal from "@/components/dashboard/AvatarUploadModal";

type ProfileAvatarProps = {
  src: string | null;
  displayName: string;
  username?: string;
  editable?: boolean;
  onAvatarSave?: (file: File) => void;
};

export default function ProfileAvatar({
  src,
  displayName,
  username,
  editable = true,
  onAvatarSave,
}: ProfileAvatarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const avatarSrc = src || "/avatars/default-avatar.png";

  return (
    <>
      <button
        type="button"
        onClick={() => editable && setIsModalOpen(true)}
        disabled={!editable}
        className="group relative h-32 w-32 overflow-hidden rounded-full border-4 border-forge-gold bg-forge-dark shadow-forge transition hover:scale-105 disabled:cursor-default disabled:hover:scale-100"
        aria-label="Change avatar"
      >
        <img
          src={avatarSrc}
          alt={`${displayName} avatar`}
          className="h-full w-full object-cover"
        />

        {editable && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
            <span className="text-sm font-semibold text-white">
              Change
            </span>
          </div>
        )}
      </button>

      <AvatarUploadModal
        isOpen={isModalOpen}
        currentAvatarUrl={avatarSrc}
        displayName={displayName}
        username={username}
        onClose={() => setIsModalOpen(false)}
        onSave={(file) => {
          onAvatarSave?.(file);
          setIsModalOpen(false);
        }}
      />
    </>
  );
}