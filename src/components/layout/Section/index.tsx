import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  topToBottomGradient?: boolean;
  secondaryBg?: boolean;
  as?: React.ElementType;
  ref?: React.RefObject<HTMLElement>;
}

export default function Section({
  className,
  topToBottomGradient,
  secondaryBg,
  as = "section",
  ...props
}: SectionProps) {
  const Element = as;
  return (
    <Element
      className={twMerge(
        clsx(
          "relative overflow-hidden py-20 lg:py-24 w-full",
          topToBottomGradient &&
            "bg-gradient-to-b from-zinc-50 via-zinc-50 to-white",
          secondaryBg && "bg-zinc-50",
          className && className
        )
      )}
      {...props}
    />
  );
}
