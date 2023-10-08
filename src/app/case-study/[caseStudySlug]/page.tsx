import CaseStudyPage from "@/components/pages/CaseStudy";
import React from "react";
import { CaseStudy } from "@/types/CaseStudy/interface";
import { fetchCaseStudy } from "@/utils/fetchCaseStudy";
import Header from "@/components/layout/Header";

export async function generateMetadata({
  params,
}: {
  params: {
    caseStudySlug: string;
  };
}) {
  // read route params
  const slug = params.caseStudySlug;

  // fetch data
  const data = await fetchCaseStudy(slug);

  // return a dynamic title
  return {
    title: `${data.shortTitle} - Case Study`,
    description: data.shortDescription,
  };
}

export default async function CaseStudy({
  params,
}: {
  params: {
    caseStudySlug: string;
  };
}) {
  const data = await fetchCaseStudy(params.caseStudySlug);

  return (
    <>
      <Header backArrow />
      <CaseStudyPage data={data} />
    </>
  );
}
