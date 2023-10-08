import Divider from "@/components/elements/Divider";
import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { CaseStudy } from "@/types/CaseStudy/interface";
import React from "react";

function RenderContent({
  blocks,
}: {
  blocks: CaseStudy["projectDescription"];
}) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        const style = block.style || "normal";

        const text = block.children.map((child) => child.text).join(" ");

        switch (style) {
          case "h2":
            return (
              <Typography
                as="h2"
                style="h3"
                key={index}
                className="font-medium"
              >
                {text}
              </Typography>
            );
          case "normal":
            return (
              <Typography as="p" style="bodyOne" key={index} subtle>
                {text}
              </Typography>
            );
          default:
            return (
              <Typography as="h2" style="h3" key={index}>
                {text}
              </Typography>
            );
        }
      })}
    </div>
  );
}

interface Props {
  client: string;
  companySize: string;
  industry: string;
  duration: string;
  headquarters: string;
  paragraph: CaseStudy["projectDescription"];
}
export default function ProjectInformation({
  client,
  companySize,
  industry,
  duration,
  headquarters,
  paragraph,
}: Props) {
  // Refactor this when you get the chance.
  const clientDetails = [
    ...(!!client
      ? [
          {
            title: "Client",
            description: client,
          },
        ]
      : []),
    ...(!!industry
      ? [
          {
            title: "Industry",
            description: industry,
          },
        ]
      : []),
    ...(!!companySize
      ? [
          {
            title: "Company Size",
            description: companySize,
          },
        ]
      : []),
    ...(!!headquarters
      ? [
          {
            title: "Headquarters",
            description: headquarters,
          },
        ]
      : []),
    ...(!!duration
      ? [
          {
            title: "Duration",
            description: duration,
          },
        ]
      : []),
  ];

  return (
    <Container className="flex flex-col-reverse md:flex-row relative w-full md:gap-24">
      <aside className="md:flex-[0.5] lg:flex-[0.25] md:flex">
        <Section className="space-y-10 ">
          {clientDetails.map((detail) => (
            <div key={detail.title} className="flex flex-col gap-1">
              <Typography
                as="h4"
                style="label"
                className="text-sm md:text-sm"
                subtle
              >
                {detail.title}
              </Typography>
              <Divider spacing={6} />
              <Typography as="p" style="bodyTwo">
                {detail.description}
              </Typography>
            </div>
          ))}
        </Section>
      </aside>
      <Section className="space-y-6 flex flex-col flex-1 md:block hidden">
        <RenderContent blocks={paragraph} />
      </Section>
    </Container>
  );
}
