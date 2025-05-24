'use client'

import React, { createContext, useEffect, useState } from 'react'
import { CMD } from 'core/cmd'
import { Toaster } from 'sonner'

interface ContextProps {
  theme: 'light' | 'dark' | 'auto'
  setTheme: (theme: 'light' | 'dark' | 'auto') => void
  isOpen: boolean
  isNavOpen: boolean
  toggleNav: () => void
  toggleCmd: () => void
  toggleTheme: () => void
}

export const Context = createContext<ContextProps>({
  theme: 'light',
  setTheme: () => {
    console.warn('setTheme function is not implemented')
  },
  isOpen: false,
  isNavOpen: false,
  toggleNav: () => {
    console.warn('toggleNav function is not implemented')
  },
  toggleCmd: () => {
    console.warn('toggleCmd function is not implemented')
  },
  toggleTheme: () => {
    console.warn('toggleTheme function is not implemented')
  },
})

export function Provider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('light')
  const [isOpen, setIsOpen] = useState(false)
  const [isNavOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen((prevNavOpen) => {
      const newNavOpen = !prevNavOpen
      localStorage.setItem('navOpen', newNavOpen ? 'true' : 'false')
      return newNavOpen
    })
  }

  const toggleCmd = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      document.documentElement.setAttribute('gds-theme', newTheme)
      return newTheme
    })
  }

  useEffect(() => {
    const navOpen = localStorage.getItem('navOpen')
    setNavOpen(navOpen === 'true')

    const handleMKey = (e: {
      stopPropagation(): void
      key: string
      target: any
      preventDefault: () => void
    }) => {
      const target = e.target
      const inputElements = Array.from(
        document.querySelectorAll('input, textarea'),
      )
      if (e.key === 'm' && inputElements.includes(target) === false) {
        e.stopPropagation()
        toggleNav()
      }
    }

    document.addEventListener('keydown', handleMKey)
    return () => {
      document.removeEventListener('keydown', handleMKey)
    }
  }, [])

  const value = {
    theme,
    setTheme,
    isOpen,
    isNavOpen,
    toggleNav,
    toggleCmd,
    toggleTheme,
  }

  return (
    <Context.Provider value={value}>
      {children}
      <Toaster
        theme="dark"
        position="bottom-right"
        expand={false}
        closeButton={false}
        duration={4428}
      />
      <CMD isOpen={isOpen} toggleCmd={toggleCmd} />
    </Context.Provider>
  )
}
