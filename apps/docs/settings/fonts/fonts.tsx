'use client'

import { useEffect, useState } from 'react'

import SEBSansSerif from './SEBSansSerif'

export default function Fonts({ children }: { children: React.ReactNode }) {
  const [stylesheetCreated, setStylesheetCreated] = useState(false)
  useEffect(() => {
    if ('adoptedStyleSheets' in document) {
      const sheet = new CSSStyleSheet()
      sheet.replaceSync(`
        :root { 
            --font: ${SEBSansSerif.style.fontFamily};
        }`)
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]

      setStylesheetCreated(true)
    }
  }, [])

  if (!stylesheetCreated) {
    return null
  }

  return children
}
