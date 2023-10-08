import caseStudyPreview from "@/queries/caseStudyPreview";
import { client } from "../../sanity/lib/client";
import { CaseStudyPreview } from "@/types/CaseStudy/interface";

export async function fetchCaseStudies(): Promise<CaseStudyPreview[]> {
  try {
    const data = await client.fetch(
      `*[_type == "caseStudy"] | order(title asc){
          ${caseStudyPreview}
        }`
    );
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
}
