export interface CaseStudy {
  _id?: string;
  _type: "caseStudy";
  title: string;
  website:string;
  slug: {
    _type: "slug";
    current: string;
  };
  labels: string[];
  bannerImage: {
    url: string;
    alt?: string;
  } | null;
  client: string;
  industry: string;
  companySize: string;
  headquarters: string;
  projectDuration: string;
  shortDescription: string;
  shortTitle: string;
  service: string;
  projectDescription:
    | {
        _type: "block";
        children: { _type: "span"; text: string; marks: string[] }[];
        style: string;
      }[];
  galleries: {
    _type: "object";
    layout: "row" | "fourGrid" | "banner" | "defaultContainer" | "masonry";
    images: {
      url: string;
      alt: string;
      captionOrImage: {
        image: {
          url?: string;
          alt?: string;
        };
        caption: string | null;
      };
    }[];
  }[];
}

export interface CaseStudyPreview {
  _id: string; // Sanity's unique ID for the document
  _type: "caseStudy"; // Document type as defined in the schema
  title: string;
  labels: string[];
  shortDescription: string;
  slug: {
    _type: "slug";
    current: string;
  };
  service: string;
  shortTitle: string;
  bannerImage: {
    url: string;
    alt?: string;
  };
  projectDescription: string;
}
