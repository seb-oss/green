"use client"

import type { Metadata } from "next"
import Head from "next/head"
import Link from "next/link"
import { notFound, usePathname, useRouter } from "next/navigation"
import FigmaSVG from "@/core/blocks/mdx/figma/figmaSVG"
import Pattern from "@/core/blocks/pattern/pattern"
import Taber from "@/core/blocks/taber"
import TOC from "@/core/blocks/toc/toc"
import Trail from "@/core/blocks/trail/trail"
import Layout from "@/core/layouts/component"
import { allComponents } from "content"
import { format, parseISO } from "date-fns"

export default function ComponentLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const { slug } = params
  const pathName = usePathname()

  const getComponent = (path: string) =>
    allComponents.find(
      (component) => component.url_path === `/component/${slug}${path}`
    )

  const component = getComponent("")
  const componentA11y = getComponent("/accessibility")
  const componentCode = getComponent("/code")
  const componentDesign = getComponent("/design")
  const componentUXText = getComponent("/ux-text")

  if (!component) {
    notFound()
  }

  const {
    title,
    url_path,
    tags,
    status,
    date,
    global_id,
    last_edited,
    summary,
    body,
    node,
    figma_hero_svg,
  } = component

  const pathsAndComponents = [
    { path: "/accessibility", component: componentA11y },
    { path: "/code", component: componentCode },
    { path: "/design", component: componentDesign },
    { path: "/ux-text", component: componentUXText },
  ]

  // default TOC component
  let tocComponent = <TOC headings={component?.headings} component={title} />

  for (let { path, component } of pathsAndComponents) {
    if (pathName.includes(path)) {
      tocComponent = <TOC headings={component?.headings} component={title} />
      break
    }
  }

  // const tagsArray = tags ? tags.split(", ") : []
  const MAX_VISIBLE_TAGS = 3
  const tagsArray = tags ? tags.split(", ") : []
  const extraTagsCount = Math.max(0, tagsArray.length - MAX_VISIBLE_TAGS)
  return (
    <Layout key={global_id}>
      <Trail home={"Home"} separator={<span> / </span>} activeClass="active" />
      <header>
        <div className="content">
          <div className="intro">
            <h1>{title}</h1>
            <p>{summary}</p>
          </div>
          <div className="details">
            <div title="Status">
              <div className="status">{status}</div>
            </div>
            <div title="Tags">
              <menu>
                {tagsArray.slice(0, MAX_VISIBLE_TAGS).map((tag, index) => (
                  <div key={tag}>{tag}</div>
                ))}
                {extraTagsCount > 0 && (
                  <div className="more">
                    <svg viewBox="0 0 18 4">
                      <path d="M11 2C11 3.10417 10.1042 4 9 4C7.89583 4 7 3.10417 7 2C7 0.895833 7.89583 0 9 0C10.1042 0 11 0.895833 11 2ZM16 0C14.8958 0 14 0.895833 14 2C14 3.10417 14.8958 4 16 4C17.1042 4 18 3.10417 18 2C18 0.895833 17.1042 0 16 0ZM2 0C0.895833 0 0 0.895833 0 2C0 3.10417 0.895833 4 2 4C3.10417 4 4 3.10417 4 2C4 0.895833 3.10417 0 2 0Z" />
                    </svg>
                  </div>
                )}
              </menu>
            </div>
          </div>
        </div>
        <Pattern>
          <div dangerouslySetInnerHTML={{ __html: figma_hero_svg.svg }} />
        </Pattern>
      </header>
      <article>
        <div className="content">
          {children}
          <Taber component={url_path} />
        </div>
        {tocComponent}
      </article>
      <footer>
        Last updated: <br />
        <time dateTime={last_edited} title="Last updated">
          {format(parseISO(last_edited), "d LLL, yyyy '/' HH:mm")}
        </time>
      </footer>
    </Layout>
  )
}
