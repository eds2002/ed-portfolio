"use client";
import React from "react";
import { Button } from "@/components/elements/Button";
import Typography from "@/components/elements/Typography";
import Drawer from "./Drawer";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const links = [
  {
    name: "Case Studies",
    href: "/case-studies",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function NavLinks({ dark }: { dark?: boolean }) {
  const pathname = usePathname();
  return (
    <ul className="place-items-end flex-row items-center justify-end gap-x-6 md:flex hidden">
      {links.map((link, index) => (
        <li key={index}>
          <Button
            href={link.href}
            className={twMerge(
              clsx(
                "px-0 py-0 bg-transparent text-base md:text-lg  font-normal tracking-tight  text-zinc-900 hover:bg-transparent hover:text-zinc-900",
                dark && "text-zinc-50"
              )
            )}
          >
            {link.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default function Header({
  dark,
  backArrow,
}: {
  dark?: boolean;
  backArrow?: boolean;
}) {
  return (
    <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  py-4 md:py-8 grid grid-cols-2 ">
      {backArrow ? (
        <Button
          href="/"
          className={twMerge(
            clsx(
              "w-16 h-16 bg-zinc-200 hover:bg-zinc-300 text-black text-xl relative"
            )
          )}
          aria-label="Back to home"
        >
          <Image
            src="/chevron-left.svg"
            layout="fill"
            objectFit="cover"
            alt="Arrow pointing left"
            className="p-5"
          />
        </Button>
      ) : (
        <Button
          href="/"
          className={twMerge(
            clsx(
              "px-0 py-0 bg-transparent  text-2xl leading-8 font-semibold text-zinc-900 hover:bg-transparent hover:text-zinc-400 justify-self-start ",
              dark && "text-zinc-50"
            )
          )}
        >
          Eduardo
        </Button>
      )}
      {/* <NavLinks dark={dark} />
      <Drawer /> */}
    </header>
  );
}
