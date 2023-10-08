import React from "react";
import Hero from "./Hero";
import About from "./About";
import RecentWork from "./RecentWork";
import Footer from "./Footer";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <RecentWork />
      <Footer />
    </>
  );
}
