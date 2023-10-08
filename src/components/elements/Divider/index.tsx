import clsx from "clsx";
import React from "react";

export default function Divider({
  className,
  orientation = "horizontal",
  spacing,
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
  spacing?: number;
}) {
  let styles = "bg-zinc-200";

  if (orientation === "horizontal") {
    styles = clsx(
      styles,
      orientation === "horizontal" && `w-full h-px`,
      className
    );
  } else {
    styles = clsx(
      styles,
      orientation === "vertical" && `w-px h-full`,
      className
    );
  }

  return (
    <div
      className={styles}
      style={{
        ...(orientation === "horizontal" && {
          marginTop: spacing,
          marginBottom: spacing,
        }),
        ...(orientation === "vertical" && {
          marginLeft: spacing,
          marginRight: spacing,
        }),
      }}
    />
  );
}
