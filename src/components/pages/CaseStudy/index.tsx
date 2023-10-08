import React from "react";
import Hero from "./Hero";
import { CaseStudy } from "@/types/CaseStudy/interface";
import ProjectInformation from "./ProjectInformation";
import Gallery from "./Gallery";
import Head from "next/head";
import Footer from "../Home/Footer";

export default function CaseStudyPage({ data }: { data: CaseStudy }) {
  return (
    <>
      <Head>
        <title>{data.shortTitle} - Case Study</title>
        <meta name="description" content={data.shortDescription} />
      </Head>
      <Hero title={data.shortTitle} labels={data.labels} />
      <ProjectInformation
        client={data.client}
        companySize={data.companySize}
        industry={data.industry}
        duration={data.projectDuration}
        headquarters={data.headquarters}
        paragraph={data.projectDescription}
      />
      <Gallery gallery={data.galleries} />
      <Footer />
    </>
  );
}
