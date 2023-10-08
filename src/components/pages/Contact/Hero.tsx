import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import React from "react";

export default function Hero() {
  return (
    <Section className="w-full max-w-6xl mx-auto ">
      <Container className=" w-full md:grid-cols-6 grid">
        <div className="md:col-span-5">
          <Typography
            as="h1"
            className="text-6xl md:text-7xl lg:text-9xl tracking-tight text-zinc-50 font-normal"
          >
            I&apos;m interested.
            <br />
            <span className="text-zinc-400"> Let&apos;s talk.</span>
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
