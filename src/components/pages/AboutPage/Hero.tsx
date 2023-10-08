import { Button } from "@/components/elements/Button";
import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import React from "react";

export default function Hero() {
  return (
    <Section>
      <Container className="grid grid-cols-6  items-end">
        <Typography
          as="h1"
          className="text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight col-span-5"
        >
          Full Stack Developer in NJ.
        </Typography>
      </Container>
      <Container className="grid md:grid-cols-3">
        <Typography
          as="p"
          style="h4"
          className="col-span-2 font-normal mt-16 "
          subtle
        >
          I&apos;m a full stack developer based in New Jersey, US. I have a
          passion for building beautiful, functional websites and applications.
          I have been working as a developer for 3 years and have experience
          with a wide range of technologies.
        </Typography>
      </Container>
    </Section>
  );
}
