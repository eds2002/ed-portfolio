"use client";
import { Button } from "@/components/elements/Button";
import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import RoundedCircle from "@/components/misc/RoundedCircle";
import useCaseStudies from "@/hooks/useCaseStudies";
import { useScroll, useTransform } from "framer-motion";
import { useParams } from "next/navigation";
import React from "react";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0.7, 1], [500, 0]);

  const { caseStudySlug } = useParams();
  const { data } = useCaseStudies();

  const getNextProject = React.useCallback(() => {
    if (!data) return;
    const formatedData = data?.map((item) => ({
      title: item.shortTitle,
      shortDescription: item.shortDescription,
      banner: {
        url: item.bannerImage.url,
        alt: item.bannerImage.alt,
      },
      slug: item.slug.current,
    }));

    const currentProjectIndex = formatedData?.findIndex(
      (item) => item.slug === caseStudySlug
    );

    const totalArrayLength = formatedData.length;
    // Handle if next project is the last project
    const nextProjectIndex =
      currentProjectIndex === totalArrayLength - 1
        ? 0
        : currentProjectIndex + 1;

    const nextProject = formatedData[nextProjectIndex];

    return nextProject;
  }, [caseStudySlug, data]);

  return (
    <Section
      className="h-screen bg-zinc-900 flex items-center justify-center flex-col relative"
      as="footer"
    >
      <RoundedCircle
        className="z-50 bg-white  shadow-black shadow-2xl "
        position="top"
        style={{
          height,
        }}
      />
      <Container className="h-full flex items-center justify-center flex-col gap-12">
        <Typography as="p" style="label" className="text-zinc-100 lg:text-lg">
          Next case
        </Typography>
        <Button
          href={`/case-study/${getNextProject()?.slug}`}
          className="text-6xl sm:text-7xl max-w-3xl px-0 py-0 bg-transparent hover:bg-transparent hover:text-zinc-400 text-zinc-50 text-center font-semibold"
        >
          {getNextProject()?.title}
        </Button>
      </Container>
    </Section>
  );
}
