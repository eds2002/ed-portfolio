"use client";
import { Button } from "@/components/elements/Button";
import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import RoundedCircle from "@/components/misc/RoundedCircle";
import { useAnimate, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0.7, 1], [500, 0]);
  return (
    <Section
      as="footer"
      className="bg-black h-screen flex items-center justify-center flex-col relative"
    >
      <RoundedCircle
        className="z-50 bg-white  shadow-black shadow-2xl "
        position="top"
        style={{
          height,
        }}
      />
      <Container className="  relative grid grid-cols-1 w-full">
        <div className="flex items-center justify-center flex-col">
          <Typography animated as="p" className="text-zinc-400">
            I&apos;m Ed
          </Typography>
          <Typography
            className="text-7xl sm:text-8xl font-medium px-0 py-0 text-zinc-50"
            as="h2"
          >
            Let&apos;s talk.
          </Typography>
        </div>
        <div className="w-full h-px bg-zinc-600 my-16 relative flex justify-end" />
        <div className="flex items-center justify-center">
          <Button
            href="mailto:es23jr@gmail.com"
            className="py-6 font-normal px-16 border-zinc-50 border bg-transparent hover:bg-zinc-100/10"
          >
            Email me
          </Button>
        </div>
      </Container>
      <Container className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 grid grid-cols-4 md:grid-cols-6 items-start pb-8">
        <div className="flex flex-col">
          <Typography className="text-zinc-500" as="p" style="label">
            Copyright
          </Typography>
          <Typography className="text-zinc-300 mt-1" style="label" subtle>
            © 2023 Eduardo
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
