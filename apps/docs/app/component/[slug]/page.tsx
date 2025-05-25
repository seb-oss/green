import { loadContent } from '../../../settings/content/loader'

export async function generateStaticParams() {
  const content = await loadContent()
  return content.components.map((component) => ({
    slug: component.slug,
  }))
}

export default async function ComponentPage({
  params,
}: {
  params: { slug: string }
}) {
  const content = await loadContent()
  const component = content.components.find((c) => c.slug === params.slug)

  if (!component) {
    return <div>Component not found</div>
  }

  return <h1>{component.title}</h1>
}
