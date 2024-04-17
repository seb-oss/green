"use client"

import React, { useContext } from "react"
import Sidebar from "@/sidebar"
import { ThemeProviderContext } from "$/theme/provider"

import "&/article/article.css"

export default function Article({ children }: { children: React.ReactNode }) {
  const { toggleNav, isNavOpen } = useContext(ThemeProviderContext)

  return (
    <section className="layout-article">
      {isNavOpen && <Sidebar toggleNav={toggleNav} isNavOpen={isNavOpen} />}
      {children}
    </section>
  )
}
