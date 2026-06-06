"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";

type DropdownItem = {
  label: string;
  onClick: () => void;
  danger?: boolean;
};

type DropdownProps = {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
  className?: string;
};

export default function Dropdown({
  trigger,
  items,
  align = "right",
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={clsx("relative", className)}>
      <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
        {trigger}
      </button>

      {isOpen && (
        <div
          className={clsx(
            "absolute z-50 mt-2 w-56 overflow-hidden rounded-xl border border-forge-border bg-forge-card shadow-forge",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className={clsx(
                "block w-full px-4 py-3 text-left text-sm transition hover:bg-forge-dark",
                item.danger
                  ? "text-red-400 hover:bg-red-500/10"
                  : "text-forge-silver hover:text-forge-gold"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}