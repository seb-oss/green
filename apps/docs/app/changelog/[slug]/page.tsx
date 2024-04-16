import Link from "next/link"
import { notFound } from "next/navigation"
import { Mdx } from "@/mdx"
import Layout from "&/changelog"
import { allChangelogs } from "content"
import { format, parseISO } from "date-fns"

export const generateStaticParams = (): any => {
  return allChangelogs.map((changelog) => ({
    slug: changelog.url_path.replace("/changelog/", ""),
  }))
}

export default function Changelog({ params }: { params: { slug: string } }) {
  const { slug } = params

  const changelog = allChangelogs.find(
    (changelog) => changelog.url_path === "/changelog/" + slug
  )

  if (!changelog) {
    notFound()
  }

  const { date, title, global_id, last_edited, body } = changelog

  return (
    <Layout>
      <section>
        <article id={changelog.version} className="log">
          <main>
            <h1>{changelog.title}</h1>
            <Mdx code={body.code} globals={{ slug }} />
          </main>
        </article>
      </section>
    </Layout>
  )
}
