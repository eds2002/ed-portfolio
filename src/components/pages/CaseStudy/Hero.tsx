import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import React from "react";

export default function Hero({
  title,
  labels,
}: {
  title: string;
  labels: string[];
}) {
  return (
    <Section className="py-0 pt-20 lg:py-0 lg:pt-20">
      <Container>
        <Typography
          as="h1"
          className="text-7xl md:text-8xl lg:text-8xl  tracking-tight font-semibold"
        >
          {title}
        </Typography>
      </Container>
    </Section>
  );
}
