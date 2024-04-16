import Link from "next/link"
import Pattern from "@/core/blocks/pattern/pattern"
import { allComponents, Component } from "content"

function ComponentCard(component: Component) {
  return (
    <Link href={component.url_path}>
      <Pattern>
        <div
          dangerouslySetInnerHTML={{ __html: component.figma_hero_svg.svg }}
        />
      </Pattern>
      <div>{component.title}</div>
      <p>{component.summary}</p>
    </Link>
  )
}

// function ComponentCard(component: Component) {
//   return <Link href={component.url_path}>{component.title}</Link>
// }

export default function Components() {
  const filteredComponents = allComponents.filter(
    (component) => component._raw.sourceFileName === "index.mdx"
  )

  const components = filteredComponents.sort((a, b) =>
    a.title.localeCompare(b.title)
  )

  return (
    <div className="layout core">
      <section className="home-components">
        <h2>
          <Link href="/components">Components</Link>
        </h2>
        <div className="component-list">
          {components.map((component, idx) => (
            <ComponentCard key={idx} {...component} />
          ))}
        </div>
      </section>
    </div>
  )
}
