'use client'

import React, { createContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { Toaster } from 'sonner'

interface ContextProps {
  loading: boolean
  isNavOpen: boolean
  toggleNav: () => void
}

export const Context = createContext<ContextProps>({
  loading: true,
  isNavOpen: false,
  toggleNav: () => {
    console.warn('toggleNav function is not implemented')
  },
})

export function Provider({ children, ...props }: ThemeProviderProps) {
  const [loading, setLoading] = useState(true)
  const [isNavOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen((prevNavOpen) => {
      const newNavOpen = !prevNavOpen
      localStorage.setItem('navOpen', newNavOpen ? 'true' : 'false')
      return newNavOpen
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
    loading,
    isNavOpen,
    toggleNav,
  }

  return (
    <NextThemesProvider {...props}>
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
      </Context.Provider>
    </NextThemesProvider>
  )
}
