import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)
      )}
      {...props}
    />
  );
}
