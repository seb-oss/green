// app/posts/[slug]/page.tsx
import Link from "next/link"
import Layout from "&/status"
import { allComponents } from "content"
import { format, parseISO } from "date-fns"

// import "./style.css"

export default function Status() {
  return (
    <Layout>
      <header>
        <div>Component</div>
        <div>Status</div>
        <div>Last update</div>
      </header>
      <ul>
        {allComponents
          .filter((component) => component._raw.sourceFileName === "index.mdx")
          .map((component) => (
            <li>
              <Link href={component.url_path} title="Component">
                {component.title}
              </Link>
              <div title="Status">{component.status}</div>
              <time dateTime={component.date}>
                {component.date &&
                  format(parseISO(component.date), "LLLL d, yyyy")}
              </time>
            </li>
          ))}
      </ul>
    </Layout>
  )
}
