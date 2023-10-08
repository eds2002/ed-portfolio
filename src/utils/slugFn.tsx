import slugify from "slugify";

export default function slugFn(string: string) {
  return slugify(string, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    trim: true,
  });
}
