import SEBSAnsSerif from "$/fonts/SEBSansSerif"

export default function Fonts() {
  if ("adoptedStyleSheets" in document) {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(
      `:root { --gds-font-family: ${SEBSAnsSerif.style.fontFamily}; }`
    )
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
  }

  return
}
