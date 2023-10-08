import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import React from "react";

export default function Story() {
  return (
    <Section topToBottomGradient>
      <Container>
        <Typography as="h2" style="h1" className="font-normal">
          My Story
        </Typography>
      </Container>
    </Section>
  );
}
