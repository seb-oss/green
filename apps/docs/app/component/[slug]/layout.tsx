'use client'

import { notFound, usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

import Taber from '@/taber'
import TOC from '@/toc/toc'
import Trail from '@/trail/trail'
import { allComponents } from 'content'
import { format, parseISO } from 'date-fns'

import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsText from '@sebgroup/green-react/src/core/text'
import GdsBadge from '@sebgroup/green-react/src/core/badge'
import GdsContainer from '@sebgroup/green-react/src/core/container'

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
    pathSegments,
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

  const getDynamicComponent = (c: string) =>
    dynamic(
      () =>
        import(`../../../design/example/${c}`).catch(() => {
          return () => <></>
        }),
      {
        ssr: false,
        loading: () => <p>Loading...</p>,
      },
    )

  const Preview = getDynamicComponent(url_path.replace('/component/', ''))

  return (
    <>
      <Trail
        home={'Home'}
        separator={<span> / </span>}
        activeClass="active"
        slug={slug}
      />

      <GdsFlex justify-content="space-between" align-items="flex-start">
        <GdsFlex flex-direction="column">
          <h1 className="gds-fs-headline-large">{title}</h1>
          <p>{summary}</p>
        </GdsFlex>
        <GdsContainer level="2" background="primary">
          <GdsFlex align-items="flex-start" gap="xl" min-width="400px">
            <GdsFlex flex-direction="column">
              <GdsText>Status</GdsText>
              <GdsBadge>{status}</GdsBadge>
            </GdsFlex>
            <GdsFlex flex-direction="column">
              <GdsText>Tags</GdsText>
              <GdsText>{tagsArray}</GdsText>
            </GdsFlex>
          </GdsFlex>
        </GdsContainer>
      </GdsFlex>
      <GdsFlex
        level="2"
        border="4xs/primary"
        padding="2xl"
        border-radius="m"
        background="primary"
        gap="xl"
        align-items="center"
        justify-content="center"
        height="420px"
      >
        <Preview />
      </GdsFlex>
      <Taber component={url_path} links={links} />
      <footer>
        Last updated: <br />
        <time dateTime={last_edited} title="Last updated">
          {format(parseISO(last_edited), "d LLL, yyyy '/' HH:mm")}
        </time>
      </footer>
    </>
  )
}
