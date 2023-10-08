import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { CaseStudy } from "@/types/CaseStudy/interface";
import Image from "next/image";
import React from "react";

export default function CaseStudyBanner({
  banner,
}: {
  banner: CaseStudy["bannerImage"];
}) {
  return (
    <Section className="py-0 lg:py-0">
      <Container className="relative rounded-3xl overflow-hidden aspect-[16/8]  max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <Image
            src={banner.url}
            layout="fill"
            objectFit="cover"
            alt={banner.alt ?? ""}
          />
        </div>
      </Container>
    </Section>
  );
}
