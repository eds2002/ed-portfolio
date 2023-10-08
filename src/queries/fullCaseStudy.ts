import { groq } from "next-sanity";

export default groq`
  _id,
  _type,
  title,
  "slug": {
    _type,
    current
  },
  labels,
  "bannerImage": {
    "url": bannerImage.galleryImage.image.asset->url,
    "alt": bannerImage.galleryImage.alt ,
  },
  client,
  industry,
  companySize,
  headquarters,
  projectDuration,
  shortTitle,
  shortDescription,
  "projectDescription": 
    projectDescription[]{
      ...,
      _type == "image" => {
        "url": asset->url,
        alt
      }
    },
  "galleries": galleries[] {
    _type,
    layout,
    images[] {
      "url": url.asset->url,
      alt,
      "captionOrImage": captionOrImage[] {
        "image": {
          "url": image.asset->url,
          "alt": alt
        },
        "caption": caption
      }[0]
    }
  }
`;
