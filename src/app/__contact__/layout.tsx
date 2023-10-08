import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-zinc-900 min-h-screen  w-full h-full">{children}</main>
  );
}
