'use client'

import { notFound, usePathname } from 'next/navigation'
import Badge from '@/badge/badge'
import Flex from '@/flex/flex'
import Cell from '@/grid/cell'
import Grid from '@/grid/grid'
import Pattern from '@/pattern/pattern'
import Taber from '@/taber'
import Tags from '@/tags-list/tags'
import TOC from '@/toc/toc'
import Trail from '@/trail/trail'
import Content from '&/content/content'
import { allComponents } from 'content'
import { format, parseISO } from 'date-fns'

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
      (component) => component.url_path === `/component/${slug}${path}`,
    )

  const component = getComponent('')
  const componentA11y = getComponent('/accessibility')
  const componentCode = getComponent('/code')
  const componentDesign = getComponent('/design')
  const componentUXText = getComponent('/ux-text')

  console.log('component', componentCode?.private)

  if (!component) {
    notFound()
  }

  const {
    title,
    url_path,
    tags,
    status,
    global_id,
    last_edited,
    summary,
    figma_hero_svg,
    preview,
  } = component

  const pathsAndComponents = [
    { path: '/accessibility', component: componentA11y },
    { path: '/code', component: componentCode },
    { path: '/design', component: componentDesign },
    { path: '/ux-text', component: componentUXText },
  ]

  let tocComponent = <TOC headings={component?.headings} component={title} />

  for (const { path, component } of pathsAndComponents) {
    if (pathName.includes(path)) {
      tocComponent = <TOC headings={component?.headings} component={title} />
      break
    }
  }

  const tagsArray = tags ? tags.split(', ') : []

  const links = [
    { path: '', label: 'Overview', isPrivate: false },
    {
      path: '/design',
      label: 'Design',
      isPrivate: componentDesign?.private || false,
    },
    {
      path: '/ux-text',
      label: 'UX text',
      isPrivate: componentUXText?.private || false,
    },
    {
      path: '/code',
      label: 'Code',
      isPrivate: componentCode?.private || false,
    },
    {
      path: '/accessibility',
      label: 'Accessibility',
      isPrivate: componentA11y?.private || false,
    },
  ]

  return (
    <Content layout="component" key={global_id}>
      <Grid columns={1} paddingBlock="small" paddingInline="small">
        <Trail
          home={'Home'}
          separator={<span> / </span>}
          activeClass="active"
          slug={slug}
        />
        <Grid columns={6} tablet={2} mobile={1} gapBlock="small">
          <gds-cell span="4" className="content">
            <Grid columns={1} gapBlock="small">
              <div>
                <h1 className="gds-fs-headline-large">{title}</h1>
                <p>{summary}</p>
              </div>
              <Flex wrap="wrap" gap="small">
                <Badge title="Status" label={status} />
                <Tags title="Tags" tags={tagsArray} max={3} />
              </Flex>
            </Grid>
          </gds-cell>
          <gds-cell span="2">
            <Pattern>
              {(preview?.trim() ?? '') ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${preview}`,
                  }}
                />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: figma_hero_svg.svg }} />
              )}
            </Pattern>
          </gds-cell>
        </Grid>
        <Taber component={url_path} links={links} />
        <Grid columns={12} gapInline="small" paddingBlock="small">
          <Cell span="10">
            <div className="gds-prose">{children}</div>
          </Cell>
          <Cell span="2">{tocComponent}</Cell>
        </Grid>
        <footer>
          Last updated: <br />
          <time dateTime={last_edited} title="Last updated">
            {format(parseISO(last_edited), "d LLL, yyyy '/' HH:mm")}
          </time>
        </footer>
      </Grid>
    </Content>
  )
}
