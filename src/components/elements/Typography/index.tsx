"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const typographyStyleMap = {
  base: "text-zinc-900 font-display",
  h1: "text-5xl sm:text-6xl font-semibold",
  h2: "text-4xl sm:text-5xl  font-semibold",
  h3: "text-2xl font-medium leading-8  sm:leading-10 sm:text-3xl",
  h4: "text-xl font-medium",
  bodyOne: "text-lg leading-8 font-base",
  bodyTwo: "text-base leading-8 font-base",
  button: "text-md font-semibold leading-none",
  link: "text-base font-semibold",
  label:
    "inline-flex text-sm font-medium leading-[16px] text-zinc-900/80 sm:text-md",
};

export type TypographyElements =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "label"
  | "span";
export type TextStyles =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "bodyOne"
  | "bodyTwo"
  | "button"
  | "link"
  | "label";

export interface TypographyProps {
  as?: TypographyElements;
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  style?: TextStyles;
  subtle?: boolean;
  componentStyle?: React.CSSProperties;
}

export default function Typography({
  as = "p",
  children,
  animated,
  className: classes,
  style,
  subtle,
  componentStyle,
}: TypographyProps) {
  const className = twMerge(
    clsx(
      typographyStyleMap.base,
      style === "h1" && typographyStyleMap.h1,
      style === "h2" && typographyStyleMap.h2,
      style === "h3" && typographyStyleMap.h3,
      style === "h4" && typographyStyleMap.h4,
      style === "bodyOne" && typographyStyleMap.bodyOne,
      style === "bodyTwo" && typographyStyleMap.bodyTwo,
      style === "button" && typographyStyleMap.button,
      style === "link" && typographyStyleMap.link,
      style === "label" && typographyStyleMap.label,
      subtle && "text-zinc-600",
      classes && classes
    )
  );
  const Component = animated ? motion(as) : as;

  return (
    <Component className={className} style={componentStyle}>
      {children}
    </Component>
  );
}
