"use client"

import "&/content/content.css"

type LayoutType =
  | "home"
  | "content"
  | "component"
  | "changelog"
  | "search"
  | "not-found"
  | "article"

export default function Content({
  children,
  layout,
}: {
  layout: LayoutType
  children: React.ReactNode
}) {
  return (
    <section className={`layout-content ${`page-` + layout}`}>
      {children}
    </section>
  )
}
