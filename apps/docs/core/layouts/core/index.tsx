"use client"

import "@/core/styles/global.css"

import React, { useContext } from "react"
import Sidebar from "@/core/blocks/sidebar"
import { ThemeProviderContext } from "@/utils/theme/provider"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { toggleNav, isNavOpen } = useContext(ThemeProviderContext)

  return (
    <main>
      {isNavOpen && <Sidebar toggleNav={toggleNav} isNavOpen={isNavOpen} />}
      {children}
    </main>
  )
}
