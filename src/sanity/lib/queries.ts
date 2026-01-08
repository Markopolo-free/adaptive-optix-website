export const homeCardsQuery = `*[_type == "homeCard"] | order(order asc) {
  _id,
  name,
  title,
  description,
  icon,
  order
}`;

export const whyCardsQuery = `*[_type == "whyCard"] | order(order asc) {
  _id,
  title,
  description,
  clickable,
  order
}`;

export const productCardsQuery = `*[_type == "productCard"] | order(order asc) {
  _id,
  id,
  name,
  href,
  icon,
  shortDescription,
  description,
  features,
  order
}`;

export const solutionCardsQuery = `*[_type == "solutionCard"] | order(order asc) {
  _id,
  id,
  name,
  href,
  icon,
  description,
  benefits,
  order
}`;

export const homeCopyQuery = `*[_type == "homeCopy"][0] {
  heroTitle,
  heroSubheading,
  productsHeading,
  productsSubheading,
  solutionsHeading,
  solutionsSubheading,
  whyHeading,
  whySubheading,
  ctaHeading,
  ctaSubheading,
  ctaButtonLabel
}`;
