"use client"

import ComponentCard from "@/component-card/component-card"
import Grid from "@/grid/grid"
import isDev from "$/dev/dev"
import { allComponents } from "content"

import "./component-list.css"

export default function ComponentList({ title }: { title: string }) {
  const components = allComponents
    .filter((component) => {
      if (component._raw.sourceFileName !== "index.mdx") {
        return false
      }
      if (component.private && !isDev) {
        return false
      }
      return true
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <section className="component-list">
      {title && <h2>{title}</h2>}
      <Grid
        columns={3}
        mobile={2}
        tablet={1}
        gapInline="medium"
        gapBlock="medium"
      >
        {components.map((component, idx) => (
          <ComponentCard key={idx} {...component} />
        ))}
      </Grid>
    </section>
  )
}
