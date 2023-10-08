import clsx from "clsx";
import "./tailwind.css";
import type { Metadata } from "next";

import { Inter, Lexend, Gochi_Hand } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  variable: "--font-gochi-hand",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          "font-sans",
          inter.variable,
          lexend.variable,
          gochiHand.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
