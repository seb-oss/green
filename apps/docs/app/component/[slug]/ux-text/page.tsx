import { loadContent } from '../../../../settings/content/loader'

export async function generateStaticParams() {
  const content = await loadContent()
  return content.components
    .filter((component) => component['ux-text'])
    .map((component) => ({
      slug: component.slug,
    }))
}

export default async function UXTextPage({
  params,
}: {
  params: { slug: string }
}) {
  const content = await loadContent()
  const component = content.components.find((c) => c.slug === params.slug)

  if (!component?.['ux-text']) {
    return <div>No UX text content available</div>
  }

  return (
    <div>
      {component['ux-text'].section.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  )
}
