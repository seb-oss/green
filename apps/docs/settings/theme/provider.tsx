// settings/theme/provider.tsx
"use client"

import { useEffect, useState } from "react"

import { useSettingsValue } from "../hooks"
import type { ColorScheme } from "./types"

const THEME_STYLESHEET = "theme-stylesheet"
const styleSheetMap = new WeakMap<CSSStyleSheet, string>()

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [stylesheetCreated, setStylesheetCreated] = useState(false)
  const colorScheme = useSettingsValue((s) => s.UI.Theme.ColorScheme)

  useEffect(() => {
    if ("adoptedStyleSheets" in document) {
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
        (sheet) => styleSheetMap.get(sheet) !== THEME_STYLESHEET
      )

      const sheet = new CSSStyleSheet()
      styleSheetMap.set(sheet, THEME_STYLESHEET)

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")

      const updateColorScheme = (scheme: ColorScheme) => {
        const colorSchemeValue = {
          dark: "only dark",
          light: "only light",
          system: "light dark",
        }[scheme]

        sheet.replaceSync(`
          :root {
            color-scheme: ${colorSchemeValue}; 
          }
        `)
      }

      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
      updateColorScheme(colorScheme)
      setStylesheetCreated(true)

      const handleSystemChange = () => {
        if (colorScheme === "system") {
          updateColorScheme("system")
        }
      }

      prefersDark.addEventListener("change", handleSystemChange)
      return () => {
        prefersDark.removeEventListener("change", handleSystemChange)
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
          (s) => styleSheetMap.get(s) !== THEME_STYLESHEET
        )
      }
    }
  }, [colorScheme])

  if (!stylesheetCreated) return null
  return children
}
