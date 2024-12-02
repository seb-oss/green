'use client'

import React, { useContext } from 'react'
import { useTransitionRouter } from 'next-view-transitions'
import { allComponents, allDocuments } from 'content'
import { isDev } from '$/env/env'
import {
  GdsBadge,
  GdsButton,
  GdsDialog,
  GdsFlex,
  GdsInput,
} from '$/import/components'
import { Context } from '$/provider/provider'
// import { toggleCmd } from '$/provider/provider'
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
  // const [open, setOpen] = React.useState(false)
  const [pages, setPages] = React.useState<string[]>(['home'])
  const activePage = pages[pages.length - 1]
  const isHome = activePage === 'home'

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

  return (
    <>
      <div className={backDrop.join(' ')}></div>
      <Command.Dialog
        ref={ref}
        open={isOpen}
        onOpenChange={toggleCmd}
        className="dark"
        label="Global Command Menu"
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
  console.log('content', allDocuments)

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

  const router = useTransitionRouter()
  const { toggleCmd } = useContext(Context)
  return (
    <>
      <Command.Group heading="Components">
        {/* <Item
        // shortcut="S P"
        onSelect={() => {
          searchComponents()
        }}
      >
        Search Components...
      </Item> */}

        {components.map((component, idx) => {
          return (
            <Item
              key={idx}
              // onClick={() => {
              //   router.push(component + path)
              // }}
              onSelect={() => {
                router.push(component.url_path || ``)
                toggleCmd()
                // console.log('Selected:', component.title)
              }}
            >
              {component.title}
            </Item>
          )
        })}
      </Command.Group>
      <Command.Group heading="Pages">
        <Item
          onSelect={() => {
            router.push('/foundation')
            toggleCmd()
          }}
        >
          Foundation
        </Item>
        <Item
          onSelect={() => {
            router.push('/ux-writing')
            toggleCmd()
          }}
        >
          UX Writing
        </Item>
        <Item
          onSelect={() => {
            router.push('/about')
            toggleCmd()
          }}
        >
          About
        </Item>
      </Command.Group>
      {/* <Command.Group heading="Foundation">
        <Item shortcut="⇧ A">Accesibility</Item>
      </Command.Group>
      <Command.Group heading="UX writing">
        <Item shortcut="⇧ G">General</Item>
        <Item shortcut="⇧ E">English</Item>
        <Item shortcut="⇧ S">Swedish</Item>
      </Command.Group>
      <Command.Group heading="About">
        <Item shortcut="⇧ C">Changelog</Item>
        <Item shortcut="⇧ L">Status</Item>
      </Command.Group> */}
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
}: {
  children: React.ReactNode
  shortcut?: string
  onSelect?: (value: string) => void
}) {
  return (
    <Command.Item onSelect={onSelect}>
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
