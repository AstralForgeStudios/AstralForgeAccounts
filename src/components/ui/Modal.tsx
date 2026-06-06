"use client";

import { ReactNode, useEffect } from "react";
import clsx from "clsx";

type ModalSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

type ModalProps = {
  isOpen: boolean;
  title?: string;
  description?: string;
  children: ReactNode;
  onClose: () => void;

  size?: ModalSize;

  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;

  footer?: ReactNode;
};

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  full: "max-w-[95vw]",
};

export default function Modal({
  isOpen,
  title,
  description,
  children,
  onClose,
  size = "md",
  closeOnBackdrop = true,
  showCloseButton = true,
  footer,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={() => {
        if (closeOnBackdrop) {
          onClose();
        }
      }}
    >
      <div
        className={clsx(
          "w-full rounded-2xl border border-forge-border bg-forge-card shadow-forge",
          sizeClasses[size]
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {(title || description || showCloseButton) && (
          <div className="border-b border-forge-border p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                {title && (
                  <h2 className="text-2xl font-bold text-white">
                    {title}
                  </h2>
                )}

                {description && (
                  <p className="mt-2 text-forge-silver">
                    {description}
                  </p>
                )}
              </div>

              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close Modal"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-forge-border
                    text-forge-silver
                    transition
                    hover:border-forge-gold
                    hover:text-forge-gold
                  "
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}

        <div className="p-6">
          {children}
        </div>

        {footer && (
          <div className="border-t border-forge-border p-6">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}