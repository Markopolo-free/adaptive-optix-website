export const useCasePageBySlugQuery = (slug: string) => `*[_type == "useCasePage" && (slug == "${slug}" || slug.current == "${slug}")][0] {
  _id,
  title,
  image,
  description_2,
  body
}`;
export const contactUsCardsQuery = `*[_type == "contactUsCard"] | order(_createdAt asc) {
  _id,
  icon,
  name,
  title,
  description
}`;
export const footerCardQuery = `*[_type == "footerCard"][0] {
  connectTitle,
  connectText,
  email,
  linkedInUrl
}`;
export const homeCardsQuery = `*[_type == "homeCard"] | order(order asc) {
  _id,
  name,
  title,
  description,
  description_2,
  icon,
  image,
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
  consultancyHeading,
  consultancySubheading,
  contactUsHeading,
  contactUsSubheading,
  ctaHeading,
  ctaSubheading,
  ctaButtonLabel,
  staffPortalScreens
}`;

export const productPageBySlugQuery = (slug: string) => `*[_type == "productCard" && id.current == "${slug}"][0] {
  _id,
  title: name,
  image,
  body,
  description,
  description_2,
  features,
  shortDescription
}`;
