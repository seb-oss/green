'use client'

import { useEffect, useState } from 'react'
import SEBSAnsSerif from '$/fonts/SEBSansSerif'

import SEBSansSerifCentered from './SEBSansSerifCentered'

export default function Fonts({ children }: { children: React.ReactNode }) {
  const [stylesheetCreated, setStylesheetCreated] = useState(false)

  useEffect(() => {
    if ('adoptedStyleSheets' in document) {
      const sheet = new CSSStyleSheet()
      sheet.replaceSync(`
        :root { 
            --gds-font-family-centered: ${SEBSansSerifCentered.style.fontFamily};
            --gds-font-family: ${SEBSAnsSerif.style.fontFamily};
        }
        `)
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
      setStylesheetCreated(true)
    }
  }, [])

  if (!stylesheetCreated) {
    return null
  }

  return children
}
