/* eslint-disable @nx/enforce-module-boundaries */
'use client'

import React, { useContext, useEffect, useState } from 'react'
import { useTransitionRouter } from 'next-view-transitions'
import dynamic from 'next/dynamic'
import { allComponents, allPages } from 'content'
import { isDev } from '$/env/env'
import {
  GdsBadge,
  GdsButton,
  GdsCard,
  GdsFlex,
  GdsText,
  GdsTheme,
} from '$/import/components'
import { IconBook, IconEyeSlash, IconMagnifyingGlass } from '$/import/icons'
import iconMapping from '$/import/icons.map'
import { Context } from '$/provider/provider'
import { Command } from 'cmdk'
import { toast } from 'sonner'

import * as ICONS from '@sebgroup/green-react/src/lib/icon/icons'

import './cmd.css'

// utils/parseCssVariables.js
export const parseCssVariables = (css: string) => {
  const variables: { [key: string]: string } = {}

  // Regular expression to match CSS variables
  const regex = /(--[a-zA-Z0-9-]+):\s*([^;]+)/g

  let match
  while ((match = regex.exec(css)) !== null) {
    const property = match[1]
    const value = match[2].trim()
    variables[property] = value
  }

  return variables
}

// utils/parseCssVariables.js
const parseTypographySizes = (css: string) => {
  const fontSizes: { [key: string]: string } = {}
  const lineHeights: { [key: string]: string } = {}
  const fontWeights: { [key: string]: string } = {}

  // Regular expression to match CSS variables
  const regex = /(--[a-zA-Z0-9-]+):\s*([^;]+)/g

  let match
  while ((match = regex.exec(css)) !== null) {
    const property = match[1]
    const value = match[2].trim()

    // Separate font sizes and line heights
    if (property.startsWith('--gds-text-size-')) {
      const key = property.replace('--gds-text-size-', '')
      fontSizes[key] = value
    } else if (property.startsWith('--gds-text-line-height-')) {
      const key = property.replace('--gds-text-line-height-', '')
      lineHeights[key] = value
    } else if (property.startsWith('--gds-text-weight-')) {
      const key = property.replace('--gds-text-weight-', '')
      fontWeights[key] = value
    }
  }

  return { fontSizes, lineHeights, fontWeights }
}

export function CMD({
  isOpen,
  toggleCmd,
}: {
  isOpen: boolean
  toggleCmd: () => void
}) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = React.useState('')
  const [pages, setPages] = React.useState<string[]>(['home'])
  const activePage = pages[pages.length - 1]
  const isHome = activePage === 'home'
  const { theme } = useContext(Context)

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: {
      key: string
      metaKey: any
      ctrlKey: any
      preventDefault: () => void
    }) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggleCmd()
        // setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages]
      x.splice(-1, 1)
      return x
    })
  }, [])

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (isHome || inputValue.length) {
        return
      }

      if (e.key === 'Backspace') {
        e.preventDefault()
        popPage()
      }
    },
    [inputValue.length, isHome, popPage],
  )

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.96)'
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = ''
        }
      }, 100)

      setInputValue('')
    }
  }

  const backDrop = ['backdrop', isOpen ? 'open' : null].filter(Boolean)
  const containerElement = React.useRef(null)

  return (
    <>
      <div className={backDrop.join(' ')}></div>
      <GdsTheme color-scheme={theme}>
        <div ref={containerElement} />
      </GdsTheme>
      <Command.Dialog
        ref={ref}
        open={isOpen}
        onOpenChange={toggleCmd}
        // className="dark"
        container={containerElement.current || undefined}
        label="Global Command Menu"
        disablePointerSelection
        loop
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') {
            bounce()
          }

          if (isHome || inputValue.length) {
            return
          }

          if (e.key === 'Backspace') {
            e.preventDefault()
            popPage()
            bounce()
          }
        }}
      >
        <GdsCard padding="xs m" margin="0 0 m 0">
          <GdsFlex align-items="center" gap="s">
            <IconMagnifyingGlass />
            <Command.Input
              autoFocus
              placeholder="Search components, pages and tokens..."
              onValueChange={(value) => {
                setInputValue(value)
              }}
            />
          </GdsFlex>
        </GdsCard>
        {/* <div>
            {pages.map((p) => (
              <GdsBadge key={p} cmdk-vercel-badge="">
                {p}
              </GdsBadge>
            ))}
          </div> */}
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          {activePage === 'home' && (
            <Home searchComponents={() => setPages([...pages, 'components'])} />
          )}
          {activePage === 'components' && <Components />}
        </Command.List>
      </Command.Dialog>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-types
function Home({ searchComponents }: { searchComponents: Function }) {
  const [selectedComponent, setSelectedComponent] = React.useState('')

  const components = allComponents
    .filter((component) => {
      if (component._raw.sourceFileName !== 'index.mdx') {
        return false
      }
      if (!isDev && component.private) {
        return false
      }
      return true
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  const pages = allPages
    .filter((page) => {
      return true
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  const router = useTransitionRouter()
  const { toggleCmd } = useContext(Context)

  const getDynamicComponent = (c: string) =>
    dynamic(
      () =>
        import(`../example/${c}`)
          .then((mod) => mod.default)
          .catch(() => {
            const ExampleComponent = () => <div>Example not created</div>
            ExampleComponent.displayName = 'ExampleComponent'
            return ExampleComponent
          }),
      {
        ssr: false,
      },
    )

  const Preview = selectedComponent
    ? getDynamicComponent(selectedComponent)
    : null

  useEffect(() => {
    const items = document.querySelectorAll('[cmdk-item]')
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-selected'
        ) {
          const target = mutation.target as HTMLElement
          const isSelected = target.getAttribute('data-selected') === 'true'
          if (isSelected) {
            const value = target.getAttribute('data-value')
            if (value) {
              setSelectedComponent(value)
            }
          }
        }
      })
    })

    items.forEach((item) => {
      observer.observe(item, { attributes: true })
    })

    return () => {
      observer.disconnect()
    }
  }, [])

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

  const handleTokenClick = (clipboardText: string) => {
    navigator.clipboard
      .writeText(clipboardText)
      .then(() => {
        toast.success('Copied!')
      })
      .catch((error) => {
        console.error('Error copying text: ', error)
      })
  }

  const [sizeTokensMap, setSizeTokensMap] = useState({})

  useEffect(() => {
    const fetchCssVariables = async () => {
      try {
        // Fetch the CSS file
        const response = await fetch(
          'https://esm.sh/@sebgroup/green-tokens@0.10.1/internal/size.css',
        ) // Adjust the path to your CSS file
        const css = await response.text()

        // Parse the CSS variables
        const cssVariables = parseCssVariables(css)
        setSizeTokensMap(cssVariables)
      } catch (error) {
        console.error('Error fetching CSS file:', error)
      }
    }

    fetchCssVariables()
  }, [])

  // Font sizes

  const [textTokensMap, setTextTokensMap] = useState<{
    fontSizes: { [key: string]: string }
    lineHeights: { [key: string]: string }
    fontWeights: { [key: string]: string }
  }>({
    fontSizes: {},
    lineHeights: {},
    fontWeights: {},
  })

  useEffect(() => {
    const fetchTextTokens = async () => {
      try {
        // Fetch the CSS file
        const response = await fetch(
          'https://esm.sh/@sebgroup/green-tokens@0.10.1/internal/text.css',
        ) // Adjust the path to your CSS file
        const css = await response.text()

        // Parse the CSS variables
        const cssVariables = parseTypographySizes(css)
        setTextTokensMap(cssVariables)
      } catch (error) {
        console.error('Error fetching CSS file:', error)
      }
    }

    fetchTextTokens()
  }, [])

  return (
    <>
      {/* <Item
        // shortcut="S P"
        onSelect={() => {
          searchComponents()
        }}
      >
        Search Components...
      </Item> */}

      <Command.Group heading="Pages">
        {pages.map((page, idx) => {
          const IconComponent = page.icon
            ? iconMapping[page.icon as keyof typeof iconMapping]
            : null

          return (
            <GdsFlex key={idx} flex-direction="column">
              <Item
                onSelect={() => {
                  const urlPath = page.url_path.replace('/page', '')
                  router.push(urlPath || ``)
                  toggleCmd()
                }}
                value={page.body.raw}
              >
                <GdsFlex
                  width="100%"
                  justify-content="space-between"
                  align-items="center"
                >
                  <GdsFlex gap="xs" align-items="center">
                    <GdsFlex
                      width="24px"
                      height="24px"
                      align-items="center"
                      justify-content="center"
                    >
                      {IconComponent ? <IconComponent /> : null}
                    </GdsFlex>
                    <GdsText>{page.title}</GdsText>
                  </GdsFlex>
                </GdsFlex>
              </Item>
            </GdsFlex>
          )
        })}
      </Command.Group>
      <Command.Group heading="Components">
        <GdsFlex gap="xs" width="100%" align-items="flex-start">
          <GdsFlex flex-direction="column" flex="1">
            {components.map((component, idx) => {
              // console.log('component', selectedComponent)
              const tags = component.tags
              const tagsArray = tags ? tags.split(', ') : []

              return (
                <GdsFlex key={idx} flex-direction="column">
                  <Item
                    onSelect={() => {
                      setSelectedComponent(
                        component.url_path.replace('/component/', ''),
                      )
                      // router.push(component.url_path || ``)
                      // toggleCmd()
                    }}
                    data-component={component.url_path.replace(
                      '/component/',
                      '',
                    )}
                    value={component.url_path.replace('/component/', '')}
                    keywords={tagsArray}
                  >
                    <GdsFlex
                      width="100%"
                      justify-content="space-between"
                      align-items="center"
                    >
                      {component.title}
                      <GdsFlex gap="xs" align-items="center">
                        {component.status && (
                          <GdsBadge variant="notice" size="small">
                            {component.status}
                          </GdsBadge>
                        )}
                        <GdsFlex
                          width="24px"
                          height="24px"
                          align-items="center"
                          justify-content="center"
                        >
                          {component.private && (
                            <IconEyeSlash width={12} height={12} />
                          )}
                        </GdsFlex>
                      </GdsFlex>
                    </GdsFlex>
                  </Item>
                </GdsFlex>
              )
            })}
          </GdsFlex>
          <GdsCard
            position="sticky"
            inset="0"
            width="250px"
            height="260px"
            flex="1"
            padding="s m"
          >
            <GdsFlex
              flex-direction="column"
              align-items="flex-start"
              justify-content="flex-start"
              flex="1"
              height="100%"
              gap="s"
            >
              <GdsText font-size="detail-xs">Preview</GdsText>
              <GdsFlex
                align-items="center"
                justify-content="center"
                flex="1"
                gap="xl"
                border-radius="xs"
                background="secondary"
                width="100%"
                height="100%"
              >
                {Preview && <Preview />}
              </GdsFlex>
              <GdsButton
                rank="tertiary"
                size="small"
                onClick={() => {
                  router.push('/component/' + selectedComponent || ``)
                  toggleCmd()
                }}
              >
                <IconBook slot="lead" />
                Documentation
              </GdsButton>
            </GdsFlex>
          </GdsCard>
        </GdsFlex>
      </Command.Group>
      <Command.Group heading="Icons">
        {Object.keys(ICONS).map((iconName, idx) => {
          const IconComponent = ICONS[iconName as keyof typeof ICONS]
          return (
            <GdsFlex key={idx} flex-direction="column">
              <Item
                onSelect={() => {
                  handleIconClick(iconName)
                }}
                value={iconName}
              >
                <GdsFlex gap="xs" align-items="center">
                  <GdsFlex
                    width="24px"
                    height="24px"
                    align-items="center"
                    justify-content="center"
                  >
                    <IconComponent />
                  </GdsFlex>
                  <span>{transformIconName(iconName)}</span>
                </GdsFlex>
              </Item>
            </GdsFlex>
          )
        })}
      </Command.Group>
      <Command.Group heading="Size Tokens">
        {Object.entries(sizeTokensMap).map(([token, value], idx) => (
          <Item
            key={idx}
            onSelect={() => {
              handleIconClick(token.replace('--gds-space-', ''))
            }}
            value={token}
            keywords={[token.replace('--gds-space-', ''), value as string]}
          >
            <GdsFlex
              align-items="center"
              justify-content="flex-start"
              width="100%"
              gap="s"
            >
              <GdsBadge variant="notice">
                <GdsFlex
                  width="4ch"
                  align-items="center"
                  justify-content="center"
                >
                  {token.replace('--gds-space-', '')}
                </GdsFlex>
              </GdsBadge>
              <GdsText font-size="detail-xs">{value as string}</GdsText>
            </GdsFlex>
          </Item>
        ))}
      </Command.Group>
      <Command.Group heading="Typography Tokens">
        {Object.entries(textTokensMap.fontSizes).map(([key, value], idx) => {
          const lineHeight = textTokensMap.lineHeights[key] || 'N/A' // Get line height if available
          return (
            <Item
              key={idx}
              onSelect={() => {
                navigator.clipboard
                  .writeText(key.replace('--gds-text-size-', ''))
                  .then(() => {
                    toast.success('Copied!')
                  })
              }}
              value={key}
              keywords={[
                key.replace('--gds-text-size-', ''),
                value,
                lineHeight,
                'typography',
                'text',
              ]}
            >
              <GdsFlex
                align-items="center"
                justify-content="flex-start"
                width="100%"
                gap="s"
              >
                <GdsBadge variant="positive">
                  {key.replace('--gds-text-size-', '')}
                </GdsBadge>
                <GdsText font-size="detail-xs">
                  {value}/{lineHeight}
                </GdsText>
              </GdsFlex>
            </Item>
          )
        })}
      </Command.Group>
      <Command.Group heading="Font Weights">
        {Object.entries(textTokensMap.fontWeights).map(([key, value], idx) => (
          <Item
            key={idx}
            onSelect={() => {
              navigator.clipboard
                .writeText(key.replace('--gds-text-weight-', ''))
                .then(() => {
                  toast.success('Copied!')
                })
            }}
            value={key}
            keywords={[
              key.replace('--gds-text-weight-', ''),
              value,
              'typography',
              'text',
            ]}
          >
            <GdsFlex
              align-items="center"
              justify-content="flex-start"
              width="100%"
              gap="s"
            >
              <GdsText
                font-weight={key.replace('--gds-text-weight-', '')}
                text-transform="capitalize"
              >
                {value} · {key.replace('--gds-text-weight-', '')}
              </GdsText>
            </GdsFlex>
          </Item>
        ))}
      </Command.Group>
    </>
  )
}

function Components() {
  const components = allComponents
    .filter((component) => {
      if (component._raw.sourceFileName !== 'index.mdx') {
        return false
      }
      if (!isDev && component.private) {
        return false
      }
      return true
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <>
      {components.map((component, idx) => {
        return (
          <Item
            key={idx}
            onSelect={() => {
              console.log('Selected:', component.title)
            }}
          >
            {component.title}
          </Item>
        )
      })}
    </>
  )
}

function Item({
  children,
  shortcut,
  onSelect = () => {
    console.log('Selected:', children)
  },
  value,
  keywords,
}: {
  children: React.ReactNode
  shortcut?: string
  onSelect?: (value: string) => void
  value?: string
  keywords?: string[]
}) {
  return (
    <Command.Item value={value} keywords={keywords} onSelect={onSelect}>
      {children}
      {shortcut && (
        <div cmdk-vercel-shortcuts="">
          {shortcut.split(' ').map((key) => {
            return <kbd key={key}>{key}</kbd>
          })}
        </div>
      )}
    </Command.Item>
  )
}
