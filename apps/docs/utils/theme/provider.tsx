"use client"

import React, { createContext, useEffect, useState } from "react"
import Cmdk from "@/core/blocks/cmdk"
import Favicon from "@/core/blocks/favicon/favicon"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Toaster } from "sonner"

export const ThemeProviderContext = createContext({
  isOpen: false,
  isNavOpen: false,
  toggleCmd: () => {},
  toggleNav: () => {},
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isNavOpen, setNavOpen] = useState(false)

  const toggleCmd = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }

  const toggleNav = () => {
    setNavOpen((prevNavOpen) => {
      const newNavOpen = !prevNavOpen
      localStorage.setItem("navOpen", newNavOpen ? "true" : "false")
      return newNavOpen
    })
  }

  useEffect(() => {
    const navOpen = localStorage.getItem("navOpen")
    setNavOpen(navOpen === "true")

    const handleMKey = (e: {
      stopPropagation(): void
      key: string
      target: any
      preventDefault: () => void
    }) => {
      const target = e.target
      const inputElements = Array.from(
        document.querySelectorAll("input, textarea")
      )
      if (e.key === "m" && inputElements.includes(target) === false) {
        e.stopPropagation()
        toggleNav()
      }
    }

    document.addEventListener("keydown", handleMKey)
    return () => {
      document.removeEventListener("keydown", handleMKey)
    }
  }, [])

  const themeProviderValue = {
    isOpen,
    isNavOpen,
    toggleCmd,
    toggleNav,
  }

  return (
    <NextThemesProvider {...props}>
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
    </NextThemesProvider>
  )
}
