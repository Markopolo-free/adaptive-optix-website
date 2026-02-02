export const useCasePageBySlugQuery = (slug: string) => `*[_type == "useCasePage" && slug == "${slug}"][0] {
  _id,
  title,
  image,
  body
}`;
export const contactUsCardsQuery = `*[_type == "contactUsCard"] | order(_createdAt asc) {
  _id,
  icon,
  title,
  description
}`;
export const homeCardsQuery = `*[_type == "homeCard"] | order(order asc) {
  _id,
  name,
  title,
  description,
  icon,
  href,
  order,
  productCard->{
    _id,
    href,
    icon
  }
}`;

export const whyCardsQuery = `*[_type == "whyCard"] | order(order asc) {
  _id,
  title,
  description,
  icon,
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

export const useCaseCardsQuery = `*[_type == "useCaseCard"] | order(order asc) {
  _id,
  id,
  name,
  href,
  icon,
  description,
  benefits,
  order
}`;

export const consultancyCardsQuery = `*[_type == "consultancyCard"] | order(order asc) {
  _id,
  id,
  name,
  href,
  icon,
  description,
  benefits,
  order
}`;

export const pricingManagementCardsQuery = `*[_type == "pricingManagementCard"] | order(order asc) {
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

export const productPageBySlugQuery = (slug: string) => `*[_type == "productCard" && id == "${slug}"][0] {
  _id,
  title: name,
  image,
  body,
  description,
  features,
  shortDescription
}`;
