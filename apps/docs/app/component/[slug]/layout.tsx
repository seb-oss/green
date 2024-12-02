'use client'

import { Link } from 'next-view-transitions'
import dynamic from 'next/dynamic'
import { notFound, usePathname } from 'next/navigation'
import { allComponents } from 'content'
import {
  GdsBadge,
  GdsCard,
  GdsContainer,
  GdsFlex,
  GdsRichText,
  GdsText,
} from '$/import/components'
import Breadcrumb from 'core/breadcrumb'
import Navigator from 'core/navigator'
import Taber from 'core/taber'
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

  let TOC = <Navigator headings={component?.headings} component={title} />

  for (const { path, component } of pathsAndComponents) {
    if (pathName.includes(path)) {
      TOC = <Navigator headings={component?.headings} component={title} />
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
          const ExampleComponent = () => <div>Example not created</div>
          ExampleComponent.displayName = 'ExampleComponent'
          return ExampleComponent
        }),
      {
        ssr: false,
      },
    )

  const Preview = getDynamicComponent(url_path.replace('/component/', ''))

  return (
    <GdsFlex
      flex-direction="column"
      width="100%"
      justify-content="center"
      margin="0 auto"
    >
      <GdsFlex gap="l">
        <GdsFlex width="100%; l{80ch}" flex-direction="column" gap="2xl">
          <Breadcrumb
            home={'Home'}
            separator={<GdsText font-size="body-s"> / </GdsText>}
            slug={slug}
          />
          <GdsFlex flex-direction="column" flex="1" width="100%" gap="xl">
            <GdsFlex
              justify-content="space-between"
              align-items="flex-start"
              gap="xl"
            >
              <GdsFlex flex-direction="column" gap="xs">
                <GdsText tag="h1">{title}</GdsText>
                <GdsText
                  tag="p"
                  text-wrap="balance"
                  className="fade-in delay-200"
                >
                  {summary}
                </GdsText>
                {status && (
                  <GdsBadge variant="notice" size="small">
                    {status}
                  </GdsBadge>
                )}
                <GdsFlex gap="s">
                  {tagsArray.map((tag) => (
                    <Link
                      href={`/tag/` + tag}
                      key={tag}
                      variant="primary"
                      size="small"
                    >
                      {tag}
                    </Link>
                  ))}
                </GdsFlex>
              </GdsFlex>
            </GdsFlex>
            <GdsCard>
              <GdsFlex
                gap="xl"
                align-items="center"
                justify-content="center"
                height="360px"
              >
                <Preview />
              </GdsFlex>
            </GdsCard>
          </GdsFlex>
          <Taber component={url_path} links={links} />
          <GdsFlex flex-direction="column" gap="xl">
            {children}
          </GdsFlex>
          <footer>
            Last updated: <br />
            <time dateTime={last_edited} title="Last updated">
              {format(parseISO(last_edited), "d LLL, yyyy '/' HH:mm")}
            </time>
          </footer>
        </GdsFlex>
        <GdsFlex display="none; l{flex}" width="232px">
          {TOC}
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}
