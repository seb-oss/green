import { notFound } from 'next/navigation'
import { allChangelogs } from 'content'
import Layout from '&/changelog'
import { Mdx } from 'core/mdx'

type ChangelogParams = {
  slug: string
}

export const generateStaticParams = (): ChangelogParams[] => {
  return allChangelogs.map((changelog) => ({
    slug: changelog.url_path.replace('/changelog/', ''),
  }))
}

export default function Changelog({ params }: { params: { slug: string } }) {
  const { slug } = params

  const changelog = allChangelogs.find(
    (changelog) => changelog.url_path === '/changelog/' + slug,
  )

  if (!changelog) {
    notFound()
  }

  const { body } = changelog

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
