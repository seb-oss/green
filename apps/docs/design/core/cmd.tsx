'use client'

import React, { useContext, useEffect } from 'react'
import { useTransitionRouter } from 'next-view-transitions'
import dynamic from 'next/dynamic'
import { allComponents, allPages } from 'content'
import { isDev } from '$/env/env'
import {
  GdsBadge,
  GdsCard,
  GdsFlex,
  GdsText,
  GdsTheme,
} from '$/import/components'
import { IconEyeSlash } from '$/import/icons'
import iconMapping from '$/import/icons.map'
import { Context } from '$/provider/provider'
import { Command } from 'cmdk'

import './cmd.css'

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
        container={containerElement.current}
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
        <Command.Input
          autoFocus
          placeholder="What do you need?"
          onValueChange={(value) => {
            setInputValue(value)
          }}
        />
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
          const IconComponent = iconMapping[page.icon]

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
                      router.push(component.url_path || ``)
                      toggleCmd()
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
                      <GdsFlex gap="xs" align-items="center">
                        <GdsFlex
                          width="24px"
                          height="24px"
                          align-items="center"
                          justify-content="center"
                          opacity="0.4"
                        >
                          {component.private && (
                            <IconEyeSlash width={12} height={12} />
                          )}
                        </GdsFlex>
                        <GdsText>{component.title}</GdsText>
                      </GdsFlex>
                      {component.status && (
                        <GdsBadge variant="notice" size="small">
                          {component.status}
                        </GdsBadge>
                      )}
                    </GdsFlex>
                  </Item>
                </GdsFlex>
              )
            })}
          </GdsFlex>
          <GdsCard
            position="sticky"
            inset="0"
            aspect-ratio="1:1"
            width="250px"
            height="280px"
            flex="1"
          >
            <GdsFlex
              align-items="center"
              justify-content="center"
              flex="1"
              height="100%"
              gap="xl"
            >
              {Preview && <Preview cover />}
            </GdsFlex>
          </GdsCard>
        </GdsFlex>
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
      {/* // <Item>Project 1</Item>
      // <Item>Project 2</Item>
      // <Item>Project 3</Item>
      // <Item>Project 4</Item>
      // <Item>Project 5</Item>
      // <Item>Project 6</Item> */}
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
