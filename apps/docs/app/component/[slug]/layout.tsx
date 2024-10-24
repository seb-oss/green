'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { notFound, usePathname } from 'next/navigation'
import Taber from '@/taber'
import TOC from '@/toc/toc'
import Trail from '@/trail/trail'
import GdsBadge from '@sebgroup/green-react/src/core/badge'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsText from '@sebgroup/green-react/src/core/text'
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

  if (!component) {
    notFound()
  }

  const { title, url_path, tags, status, last_edited, summary } = component

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
      <GdsFlex gap="4xl">
        <GdsFlex width="80ch" flex-direction="column">
          <GdsFlex flex-direction="column" flex="1" width="100%" gap="xl">
            <GdsFlex
              justify-content="space-between"
              align-items="flex-start"
              gap="xl"
            >
              <GdsFlex flex-direction="column" gap="xs">
                <GdsText tag="h1">{title}</GdsText>
                <GdsText tag="p" text-wrap="balance">
                  {summary}
                </GdsText>
                <GdsBadge variant="notice" size="small">
                  {status}
                </GdsBadge>
              </GdsFlex>
              {/*
              <GdsFlex
                align-items="flex-start"
                gap="s"
                border-radius="s"
                padding="m"
                level="1"
                background="secondary"
                border="4xs/primary"
                flex-direction="column"
                width="40ch"
              >
                <GdsFlex flex-direction="column">
                  <GdsText tag="small">Status</GdsText>
                  <GdsBadge variant="notice" size="small">
                    {status}
                  </GdsBadge>
                </GdsFlex>
             <GdsFlex flex-direction="column">
                  <GdsText tag="small">Tags</GdsText>
                  <GdsFlex>
                    {tagsArray.map((tag, index) => (
                      <Link key={index} href={`#${tag}`}>
                        {tag}
                      </Link>
                    ))}
                  </GdsFlex>
                </GdsFlex>
              </GdsFlex>
                 */}
            </GdsFlex>
            <GdsFlex
              border="4xs/primary"
              padding="2xl"
              border-radius="m"
              background="secondary"
              gap="xl"
              align-items="center"
              justify-content="center"
              height="420px"
            >
              <Preview />
            </GdsFlex>
          </GdsFlex>
          <Taber component={url_path} links={links} />
          {children}
          <footer>
            Last updated: <br />
            <time dateTime={last_edited} title="Last updated">
              {format(parseISO(last_edited), "d LLL, yyyy '/' HH:mm")}
            </time>
          </footer>
        </GdsFlex>
        <GdsFlex>{tocComponent}</GdsFlex>
      </GdsFlex>
    </>
  )
}
