'use client'

import React, { createContext, useEffect, useState } from 'react'
import Cmdk from '@/cmdk'
import Favicon from '@/favicon/favicon'
import { Toaster } from 'sonner'
import { usePathname } from 'next/navigation'

type ThemeProviderContextType = {
  isOpen: boolean
  isNavOpen: boolean
  toggleCmd: () => void
  toggleNav: () => void
}

export const ThemeProviderContext = createContext<ThemeProviderContextType>({
  isOpen: false,
  isNavOpen: false,
  toggleCmd: () => {
    throw new Error('Function not implemented.')
  },
  toggleNav: () => {
    throw new Error('Function not implemented.')
  },
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isNavOpen, setNavOpen] = useState(false)

  const pathname = usePathname()

  const toggleCmd = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }

  const toggleNav = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen)
  }

  useEffect(() => {
    setNavOpen(false)
  }, [pathname])

  useEffect(() => {
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

  const themeProviderValue = {
    isOpen,
    isNavOpen,
    toggleCmd,
    toggleNav,
  }

  return (
    <ThemeProviderContext.Provider value={themeProviderValue}>
      <Favicon />
      {children}
      <Toaster
        richColors
        theme="dark"
        position="bottom-right"
        expand={false}
        closeButton={true}
        duration={4428}
      />
      <Cmdk isOpen={isOpen} toggleCmd={toggleCmd} />
    </ThemeProviderContext.Provider>
  )
}
