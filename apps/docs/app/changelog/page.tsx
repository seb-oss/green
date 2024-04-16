import Link from "next/link"
import { Mdx } from "@/mdx"
import Layout from "&/changelog"
import { allChangelogs, Changelog } from "content"
import { compareDesc, format, parseISO } from "date-fns"

function ChangelogCard(changelog: Changelog) {
  return (
    <article id={changelog.version} className="log">
      <aside>
        <div>{changelog.version}</div>
        <time dateTime={changelog.date}>
          {format(parseISO(changelog.date), "LL.d.yy")}
        </time>
      </aside>
      <div>
        <h2>
          <Link href={changelog.url_path}>{changelog.title}</Link>
        </h2>
        <p>{changelog.summary}</p>
      </div>
    </article>
  )
}

export default function ChangelogPage() {
  const changelogs = allChangelogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <Layout>
      <h1 className="heading-medium">Changelogs</h1>
      <section>
        {changelogs.map((changelog, idx) => (
          <ChangelogCard key={idx} {...changelog} />
        ))}
      </section>
    </Layout>
  )
}
