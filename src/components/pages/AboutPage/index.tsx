import React from "react";
import Hero from "./Hero";
import Header from "@/components/layout/Header";
import Story from "./Story";
import WayOfWorking from "./WayOfWorking";

export default function index() {
  return (
    <>
      <Header />
      <Hero />
      <WayOfWorking />
    </>
  );
}
