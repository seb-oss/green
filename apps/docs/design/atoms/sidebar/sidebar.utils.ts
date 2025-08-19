export const createHref = (slug: string) => {
  if (slug.startsWith('https')) return slug
  return slug.startsWith('/') ? slug : `/${slug}`
}
