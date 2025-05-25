import { loadContent } from '../../../../settings/content/loader'

export async function generateStaticParams() {
  const content = await loadContent()
  return content.components
    .filter((component) => component.accessibility)
    .map((component) => ({
      slug: component.slug,
    }))
}

export default async function AccessibilityPage({
  params,
}: {
  params: { slug: string }
}) {
  const content = await loadContent()
  const component = content.components.find((c) => c.slug === params.slug)

  if (!component?.accessibility) {
    return <div>No accessibility content available</div>
  }

  return (
    <div>
      {component.accessibility.section.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  )
}
