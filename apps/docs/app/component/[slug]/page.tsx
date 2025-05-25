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

  if (!component?.overview) {
    return <div>No overview content available</div>
  }

  return (
    <div>
      {component.overview.map((section, index) => (
        <div key={index}>
          {section.column.map((col, colIndex) => (
            <div key={colIndex}>
              <h2>{col.title}</h2>
              <p>{col.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
