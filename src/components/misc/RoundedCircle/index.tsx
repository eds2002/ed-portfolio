"use client";
import clsx from "clsx";
import { MotionProps, motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

function index({
  position,
  className,
  ...props
}: {
  position: "top" | "left" | "right" | "bottom";
  className?: string;
} & MotionProps) {
  if (position === "top")
    return (
      <motion.div
        {...props}
        className={twMerge(
          clsx(
            "absolute bottom-[50%] top-0  h-[500px]  w-[150%] -translate-y-1/2 rounded-b-[100%]  bg-red-500",
            className
          )
        )}
      />
    );
  if (position === "bottom")
    return (
      <motion.div
        {...props}
        className={twMerge(
          clsx(
            "absolute bottom-0 h-[500px]  w-[150%] translate-y-1/2 rounded-t-[100%]  bg-red-500 ",
            className
          )
        )}
      />
    );
  if (position === "left") {
    return (
      <motion.div
        {...props}
        className={twMerge(
          clsx(
            "absolute bottom-0 top-[50%] left-0 -translate-y-1/2 h-[150%] w-[500px] -translate-x-1/2 rounded-l-[100%]  bg-red-500 ",
            className
          )
        )}
      />
    );
  }
  if (position === "right") {
    return (
      <motion.div
        {...props}
        className={twMerge(
          clsx(
            "absolute bottom-0 top-[50%] right-0 -translate-y-1/2 h-[150%] w-[500px] translate-x-1/2 rounded-r-[100%]  bg-red-500 ",
            className
          )
        )}
      />
    );
  }
}

export default React.forwardRef(index);
