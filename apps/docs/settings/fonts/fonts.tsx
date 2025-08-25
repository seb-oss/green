'use client'

import { useEffect, useState } from 'react'

import Code from './code'
import SEBSansSerif from './SEBSansSerif'

export default function Fonts({ children }: { children: React.ReactNode }) {
  const [stylesheetCreated, setStylesheetCreated] = useState(false)
  useEffect(() => {
    if ('adoptedStyleSheets' in document) {
      const sheet = new CSSStyleSheet()
      sheet.replaceSync(`
        :root { 
            --font: ${SEBSansSerif.style.fontFamily};
            --font-code: ${Code.style.fontFamily};
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
