import slugFn from "@/utils/slugFn";
import { Rule } from "sanity";

const caseStudy = {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the case study.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Slug for the case study.",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input: string) => slugFn(input),
      },
    },
    {
      name: "website",
      title: "Website Link",
      type: "string",
      description: "The website link you would like to showcase.",
    },
    {
      name: "service",
      title: "Service",
      type: "string",
      description: "Service you provided for the client.",
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      description: "A short description of the project.",
    },
    {
      name: "shortTitle",
      title: "Short Title",
      type: "string",
      description: "Short title for the case study.",
    },
    {
      name: "labels",
      title: "Labels",
      type: "array",
      of: [{ type: "string" }],
      description: "Labels or tags for the case study.",
      options: {
        layout: "tags",
      },
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "object",
      description: "Banner image for the case study.",
      fields: [
        {
          type: "object",
          name: "galleryImage",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              description: "Upload the image.",
            },
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
              description: "Alternative text for the image for accessibility.",
            },
          ],
        },
      ],
    },
    {
      name: "client",
      title: "Client",
      type: "string",
      description: "Name of the client or company.",
    },
    {
      name: "industry",
      title: "Industry",
      type: "string",
      description: "Industry of the client.",
    },
    {
      name: "companySize",
      title: "Company Size",
      type: "string",
      description: "Size of the company (e.g., 50 - 100).",
    },
    {
      name: "headquarters",
      title: "Headquarters",
      type: "string",
      description: "Location of the company headquarters.",
    },
    {
      name: "projectDuration",
      title: "Project Duration",
      type: "string",
      description: "Duration of the project (e.g., Mar. 2022 - Oct. 2022).",
    },
    {
      name: "projectShortDesc",
      title: "Project Short Description",
      type: "array",
      description: "Short detailed description of the project.",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "projectDescription",
      title: "Project Description",
      type: "array",
      description: "Detailed description of the project.",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "galleries",
      title: "Galleries",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "layout",
              title: "Layout Option",
              type: "string",
              options: {
                list: [
                  { title: "Row", value: "row" },
                  { title: "4 Grid", value: "fourGrid" },
                  { title: "Masonry", value: "masonry" },
                  { title: "Banner", value: "banner" },
                  { title: "Default Container", value: "defaultContainer" },
                ],
                layout: "radio",
              },
              description: "Choose the layout option for the gallery.",
            },
            {
              name: "images",
              title: "Images",
              type: "array",
              validation: (Rule: any) =>
                Rule.custom((images: any, context: any) => {
                  if (context.parent.layout === "row" && images?.length < 2) {
                    return "Row layout requires 2 images.";
                  }
                  if (
                    context.parent.layout === "fourGrid" &&
                    images?.length !== 4
                  ) {
                    return "4 Grid layout requires 4 images.";
                  }
                  if (
                    context.parent.layout === "masonry" &&
                    images?.length < 4
                  ) {
                    return "Masonry layout requires 4 images.";
                  }
                  if (
                    (context.parent.layout === "banner" ||
                      context.parent.layout === "defaultContainer") &&
                    images?.length !== 1
                  ) {
                    return `${context.parent.layout} layout requires 1 image.`;
                  }
                  return true;
                }),
              of: [
                {
                  type: "object",
                  name: "galleryImage",
                  fields: [
                    {
                      name: "url",
                      title: "Image URL",
                      type: "image",
                      description: "Upload the image.",
                    },
                    {
                      name: "alt",
                      title: "Alternative Text",
                      type: "string",
                      description:
                        "Alternative text for the image for accessibility.",
                    },
                    {
                      name: "captionOrImage",
                      title: "Caption or Image",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          name: "captionObject",
                          title: "Caption",
                          fields: [
                            {
                              name: "caption",
                              type: "string",
                              title: "Caption Text",
                              description: "Caption for the image.",
                            },
                          ],
                        },
                        {
                          type: "object",
                          title: "Image",
                          description: "Upload an image.",
                          fields: [
                            {
                              name: "image",
                              title: "Image",
                              type: "image",
                              description: "Upload the image.",
                            },
                            {
                              name: "alt",
                              title: "Alternative Text",
                              type: "string",
                              description:
                                "Alternative text for the image for accessibility.",
                            },
                          ],
                        },
                      ],
                      description: "Choose either a caption or an image.",
                      validation: (Rule: Rule) => Rule.max(1),
                    },
                  ],
                },
              ],
              description:
                "Upload images for the gallery based on the chosen layout.",
            },
          ],
          description: "Gallery section for the case study images.",
        },
      ],
    },
  ],
};

export default caseStudy;
