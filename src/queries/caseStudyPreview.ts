import { groq } from "next-sanity";

export default groq`
  _id,
  _type,
  title,
  slug,
  "bannerImage": {
    "url": bannerImage.galleryImage.image.asset->url,
    "alt": bannerImage.galleryImage.alt ,
  },
  service,
  shortTitle,
  shortDescription,
  client,
  headquarters,
  projectDuration,
  "projectDescription": 
    projectDescription[]{
      ...,
      _type == "image" => {
        "url": asset->url,
        alt
      }
    },
`;
