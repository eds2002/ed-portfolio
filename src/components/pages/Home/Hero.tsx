import { Button } from "@/components/elements/Button";
import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import React from "react";

export default function Hero() {
  return (
    <Section className="w-full">
      <Container className=" w-full grid grid-cols-1">
        <div>
          <Typography
            as="h1"
            className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-center"
          >
            I build accessible, inclusive products and digital experiences.
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
