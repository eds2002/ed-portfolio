import clsx from "clsx";
import "./tailwind.css";
import type { Metadata } from "next";

import {
  Inter,
  Lexend,
  Gochi_Hand,
  Open_Sans,
  Lato,
  DM_Sans,
  Roboto,
  Inter_Tight,
} from "next/font/google";
import ReactQuery from "@/context/ReactQuery";
import Header from "@/components/layout/Header";
import { AnimatePresence } from "framer-motion";
import AnimatedPresenceContext from "@/context/AnimatedPresenceContext";
import { PageWrapper } from "@/components/misc/AnimatedWrapper";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter_tight",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-roboto",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  variable: "--font-gochi-hand",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Eduardo Sanchez",
  description: "Creating memorable digital experiences for web and mobile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "font-sans overscroll-none",
          inter.variable,
          lexend.variable,
          gochiHand.variable,
          openSans.variable,
          lato.variable,
          dmSans.variable,
          roboto.variable,
          interTight.variable
        )}
      >
        <ReactQuery>{children}</ReactQuery>
      </body>
    </html>
  );
}
