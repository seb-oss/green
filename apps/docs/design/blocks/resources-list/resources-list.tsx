"use client"

import Card from "@/card/card"
import Grid from "@/grid/grid"

import "@/resources-list/resources-list.css"

function Chevron() {
  return (
    <div className="gds-card-trail">
      <svg viewBox="0 0 24 24">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>
  )
}

type Resource = {
  href: string
  target: string
  caption: string
  text: string
}

const resources: Resource[] = [
  {
    href: "https://github.com/sebgroup/green",
    target: "_blank",
    caption: "Github",
    text: "Start contributing now!",
  },
  {
    href: "https://brand.seb.se/point/en/seb/",
    target: "_blank",
    caption: "Media Bank & Brand Guidelines",
    text: "SEB Brand Hub",
  },
]

export default function RessourcesList({
  title,
}: {
  title: string
}): JSX.Element {
  return (
    <section className="resources-list">
      {title && <h2>{title}</h2>}
      <Grid
        columns={3}
        mobile={1}
        tablet={1}
        gapInline="medium"
        gapBlock="medium"
      >
        {resources.map((resource, index) => (
          <Card
            key={index}
            href={resource.href}
            target={resource.target}
            variant="cta"
          >
            <div className="gds-card-title" data-caption={resource.caption}>
              {resource.text}
            </div>
            <Chevron />
          </Card>
        ))}
      </Grid>
    </section>
  )
}
