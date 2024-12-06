/* eslint-disable @nx/enforce-module-boundaries */
'use client'

import { useState } from 'react'
import { Link } from 'next-view-transitions'
import dynamic from 'next/dynamic'
import { notFound, usePathname } from 'next/navigation'
import { allComponents } from 'content'
import {
  GdsBadge,
  GdsButton,
  GdsCard,
  GdsContainer,
  GdsFlex,
  GdsGrid,
  GdsInput,
  GdsText,
} from '$/import/components'
import { IconMagnifyingGlass, IconSquareBehindSquare } from '$/import/icons'
import Breadcrumb from 'core/breadcrumb'
import Navigator from 'core/navigator'
import Taber from 'core/taber'
import { format, parseISO } from 'date-fns'
import { toast } from 'sonner'

import * as ICONS from '@sebgroup/green-react/src/lib/icon/icons'

export default function ComponentLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const { slug } = params
  const pathName = usePathname()
  const [searchTerm, setSearchTerm] = useState('')
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
          const ExampleComponent = () => <div>Example</div>
          ExampleComponent.displayName = 'ExampleComponent'
          return ExampleComponent
        }),
      {
        ssr: false,
      },
    )

  const Preview = getDynamicComponent(url_path.replace('/component/', ''))

  const transformIconName = (iconName: string): string => {
    return iconName
      .replace(/^Icon/, '') // Remove the "Icon" prefix
      .replace(/([A-Z])/g, ' $1') // Add space before each capital letter
      .trim() // Remove leading space
  }

  const handleIconClick = (clipboardText: string) => {
    navigator.clipboard
      .writeText(clipboardText)
      .then(() => {
        toast.success('Copied!')
      })
      .catch((error) => {
        console.error('Error copying text: ', error)
      })
  }

  const fuzzySearch = (term: string, text: string): boolean => {
    const termLower = term.toLowerCase()
    const textLower = text.toLowerCase()
    let termIndex = 0
    let textIndex = 0

    while (termIndex < termLower.length && textIndex < textLower.length) {
      if (termLower[termIndex] === textLower[textIndex]) {
        termIndex++
      }
      textIndex++
    }

    return termIndex === termLower.length
  }

  const filteredIcons = Object.keys(ICONS).filter((iconName) =>
    fuzzySearch(searchTerm, transformIconName(iconName)),
  )

  if (component.url_path === '/component/icon') {
    // console.log('ICONS', ICONS)
    // toast.success("Copied!")
    return (
      <GdsFlex
        flex-direction="column"
        width="100%"
        justify-content="center"
        margin="0 auto"
        gap="xl"
      >
        <GdsContainer position="sticky" inset="58px 0 0 0">
          <GdsFlex gap="l" flex-direction="column">
            <GdsInput
              clearable
              onKeyUp={(e) =>
                setSearchTerm((e.target as HTMLInputElement).value)
              }
            >
              <IconMagnifyingGlass height="24" slot="lead" />
            </GdsInput>
            {/* <GdsFilterChips>
            <GdsFilterChip value="1">Solid</GdsFilterChip>
            <GdsFilterChip value="2">Regular</GdsFilterChip>
          </GdsFilterChips> */}
          </GdsFlex>
        </GdsContainer>
        {/* <GdsDivider opacity="0.2" /> */}
        <GdsGrid columns="5" gap="m">
          {filteredIcons.map((iconName) => {
            const IconComponent = (ICONS as any)[iconName]
            return (
              <GdsCard
                level="2"
                key={iconName}
                flex-direction="column"
                align-items="center"
                gap="s"
                padding="xs"
                title={transformIconName(iconName)}
                variant="secondary"
                background="hover:primary"
                border-color="primary"
              >
                <GdsFlex
                  background="secondary"
                  align-items="center"
                  justify-content="center"
                  padding="m"
                  height="120px"
                  border-radius="s"
                  cursor="pointer"
                  data-clipboard-text={`<${iconName}></${iconName}>`}
                  onClick={() => handleIconClick(`<${iconName}></${iconName}>`)}
                >
                  <IconComponent height="24" />
                </GdsFlex>
                <GdsFlex
                  align-items="center"
                  justify-content="space-between"
                  padding="xs xs 0 s"
                >
                  <GdsText font-size="detail-xs">
                    {transformIconName(iconName)}
                  </GdsText>
                  <GdsButton
                    rank="tertiary"
                    size="small"
                    onClick={() =>
                      handleIconClick(`<${iconName}></${iconName}>`)
                    }
                  >
                    <IconSquareBehindSquare height="12" />
                  </GdsButton>
                </GdsFlex>
              </GdsCard>
            )
          })}
        </GdsGrid>
      </GdsFlex>
    )
  } else {
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
                      <Link href={`/tag/` + tag} key={tag}>
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
}
