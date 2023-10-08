import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import React from "react";

export default function About() {
  return (
    <Section topToBottomGradient>
      <Container className="flex items-center justify-center max-w-3xl">
        <Typography
          as="h2"
          style="h2"
          className="font-medium text-3xl text-center "
        >
          Creating memorable digital experiences for web and mobile.
        </Typography>
      </Container>
    </Section>
  );
}
