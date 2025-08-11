'use client'

import { useEffect, useState } from 'react'

import SEBSansSerifGDS from './SEBSansSerif'

export default function Fonts({ children }: { children: React.ReactNode }) {
  const [stylesheetCreated, setStylesheetCreated] = useState(false)
<<<<<<< HEAD

  console.log(SEBSansSerif)

=======
>>>>>>> c780a0fcae0656cb1382b2c910f036f27b1648fc
  useEffect(() => {
    if ('adoptedStyleSheets' in document) {
      const sheet = new CSSStyleSheet()
      sheet.replaceSync(`
        :root { 
            --font: ${SEBSansSerifGDS.style.fontFamily};
        }`)
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
      console.log(document.adoptedStyleSheets)

      setStylesheetCreated(true)
    }
  }, [])

  if (!stylesheetCreated) {
    return null
  }

  // return (
  //   <div className={`${SEBSansSerifGDS.className} ${SEBSansSerifGDS.variable}`}>
  //     {children}
  //   </div>
  // )

  return children
}
