'use client'

import React, { createContext, useEffect, useState } from 'react'
import { CMD } from 'core/cmd'
import { Toaster } from 'sonner'

interface ContextProps {
  isOpen: boolean
  loading: boolean
  isNavOpen: boolean
  toggleNav: () => void
  theme: string
  setTheme: (theme: string) => void
}

export const Context = createContext<ContextProps>({
  isOpen: false,
  loading: true,
  isNavOpen: false,
  toggleNav: () => {
    console.warn('toggleNav function is not implemented')
  },
  theme: 'light',
  setTheme: () => {
    console.warn('setTheme function is not implemented')
  },
})

export function Provider({
  children,
  theme = 'light',
  setTheme = () => {
    console.warn('setTheme function is not implemented')
  },
  ...props
}: {
  children: React.ReactNode
  theme?: string
  setTheme?: (theme: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
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
    isOpen,
    loading,
    isNavOpen,
    toggleNav,
    theme,
    setTheme,
  }

  return (
    <Context.Provider value={value}>
      {children}
      <Toaster
        richColors
        theme="light"
        position="bottom-center"
        expand={false}
        closeButton={true}
        duration={4428}
      />
      <CMD isOpen={isOpen} toggleCmd={toggleCmd} />
    </Context.Provider>
  )
}
