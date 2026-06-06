"use client";

import {
  forwardRef,
  InputHTMLAttributes,
} from "react";
import clsx from "clsx";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className,
      fullWidth = true,
      disabled,
      required,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx(fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-semibold text-white"
          >
            {label}

            {required && (
              <span className="ml-1 text-red-400">*</span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          disabled={disabled}
          aria-invalid={!!error}
          className={clsx(
            "w-full rounded-lg border px-4 py-3 text-white outline-none transition",

            error
              ? "border-red-500 bg-forge-dark focus:border-red-400"
              : "border-forge-border bg-forge-dark focus:border-forge-gold",

            disabled &&
              "cursor-not-allowed opacity-50",

            className
          )}
          {...props}
        />

        {error ? (
          <p className="mt-2 text-sm text-red-400">
            {error}
          </p>
        ) : helperText ? (
          <p className="mt-2 text-sm text-forge-silver">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;