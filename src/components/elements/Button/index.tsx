"use client";
import clsx from "clsx";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AnimationProps, motion } from "framer-motion";

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "primaryOnDark"
  | "label";
export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariants;
  href?: string;
  animateAttrs?: AnimationProps;
  target?: string;
};

export const variantStyles = {
  primaryClassName: "bg-blue-600 text-white hover:bg-blue-500",
  secondaryClassName:
    "text-zinc-900 shadow-sm shadow-zinc-100/50 ring-1 ring-zinc-100 hover:bg-zinc-200/60 hover:shadow-zinc-100/50 bg-zinc-100/80",
  primaryOnDarkClassName: "bg-white hover:bg-zinc-50 text-zinc-700",
  labelClassName: "text-blue-600 hover:text-blue-500 px-0 py-2",
};

export function Button({
  variant = "primary",
  className,
  href,
  animateAttrs,
  target,
  ...props
}: ButtonProps) {
  className = twMerge(
    clsx(
      "inline-flex items-center rounded-full gap-2.5 justify-center px-7 py-3 text-md font-semibold leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none",
      variantStyles[`${variant}ClassName`],
      className
    )
  );

  if (href) {
    const linkProps = props as React.ComponentPropsWithoutRef<"a">;
    return (
      <Link target={target} href={href} className={className} {...linkProps} />
    );
  }

  return (
    <button {...animateAttrs} className={className} {...props}>
      {props.children}
    </button>
  );
}
