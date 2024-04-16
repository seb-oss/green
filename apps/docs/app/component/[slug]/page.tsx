// import type { Metadata } from "next"
import Head from "next/head"
import { notFound } from "next/navigation"
import Script from "next/script"
import { Mdx } from "@/core/blocks/mdx"
import { allComponents, Component, allDocuments } from "content"
import type { Metadata, ResolvingMetadata } from 'next'

export const dynamic = "force-static"

type Props = {
  params: { slug: string }
}

export const generateStaticParams = (): any => {
  return allComponents.map((component) => ({
    slug: component.url_path.replace("/component/", ""),
  }))
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params

  const component = allComponents.find(
    (component) => component.url_path === "/component/" + slug
  )

  if (!component) {
    notFound()
  }

  return {
    title: component.title + " — Green Design System",
    description: component.summary,
  }
}

export default function Component({ params }: { params: { slug: string } }) {
  const { slug } = params

  const component = allComponents.find(
    (component) => component.url_path === "/component/" + slug
  )

  if (!component) {
    notFound()
  }

  const { body } = component

  return (
    <>
     <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Thing',
            description: component.summary,
            url: `https://seb.io/component/${slug}`,
            author: {
              '@type': 'Company',
              name: 'SEB',
            },
          }),
        }}
      />
      <Head>
        <meta name="title" content={component.title} />
      </Head>

      <Script
        src={"/playground-elements/playground-elements.mjs"}
        type="module"
        crossOrigin="anonymous"
      ></Script>
      <Mdx code={body.code} globals={{ slug }} />
    </>
  )
}
