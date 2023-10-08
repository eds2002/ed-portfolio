import { CaseStudy } from "@/types/CaseStudy/interface";
import { client } from "../../sanity/lib/client";
import fullCaseStudy from "@/queries/fullCaseStudy";
import { notFound } from "next/navigation";

export async function fetchCaseStudy(slug: string): Promise<CaseStudy> {
  try {
    const data = await client.fetch(
      `*[_type == "caseStudy" && slug.current == "${slug}"]{
          ${fullCaseStudy}
        }[0]`
    );
    if (!data) notFound();
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
}
