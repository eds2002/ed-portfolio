"use client";
import { Button } from "@/components/elements/Button";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { CaseStudyPreview } from "@/types/CaseStudy/interface";
import React from "react";
import Image from "next/image";
import Typography from "@/components/elements/Typography";
import { useQuery } from "@tanstack/react-query";
import { fetchCaseStudies } from "@/utils/fetchCaseStudies";
import { useRouter } from "next/navigation";

function WorkBox({ work, index }: { work: CaseStudyPreview; index: number }) {
  const router = useRouter();
  const handleImageClick = () => {
    router.push(`/case-study/${work.slug.current}`);
  };
  return (
    <div
      className="relative grid grid-cols-1   p-6  max-w-xl mx-auto lg:max-w-none lg:grid-cols-6 lg:gap-6 overflow-hidden bg-zinc-50
    shadow-sm shadow-zinc-100/50 "
    >
      <div className="relative w-full aspect-[16/9] bg-zinc-100  overflow-hidden border-none lg:col-start-3 lg:col-span-4 lg:order-2 lg:translate-x-6 lg:translate-y-6 ">
        <div className="relative w-full h-full ">
          <Image
            src={work.bannerImage.url ?? ""}
            alt={work.bannerImage.alt ?? ""}
            layout="fill"
            objectFit="cover"
            className="hover:scale-[1.01] transition-transform ease-in-out duration-200 cursor-pointer"
            onClick={handleImageClick}
          />
        </div>
      </div>
      <div className="w-full relative lg:col-span-2 flex items-center">
        <div className="relative flex flex-col justify-between h-full lg:max-h-[55%]">
          <div>
            <Typography as="h3" style="h3" className="font-semibold mt-6">
              {work.shortTitle || "Short Title"}
            </Typography>
            <Typography as="p" style="bodyTwo" className="mt-1">
              {work.shortDescription || "Short Description"}
            </Typography>
          </div>
          <Button
            href={`/case-study/${work.slug.current}`}
            className="mt-6 lg:mt-4 self-start bg-zinc-200/50 hover:bg-zinc-300 rounded-full px-4 py-2 text-black"
          >
            View Case Study &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function RecentWork() {
  const { data } = useQuery(["caseStudies"], fetchCaseStudies);
  return (
    <Section>
      <Container className="relative space-y-16 ">
        {data?.map((work, index) => (
          <WorkBox key={work._id} work={work} index={index} />
        ))}
      </Container>
    </Section>
  );
}
