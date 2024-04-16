import type { Metadata } from "next"
import Content from "&/content/content"

import "./page.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/demo/grid-area"),
  title: "Demo Grid Area — Green Design System",
}

export default function GridArea() {
  return (
    <Content layout="content">
      <div className="grid-area">
        <div className="grid-area-alert">alert</div>
        <div className="grid-area-header">header</div>
        <div className="grid-area-layout">
          <div className="sidebar">sidebar</div>
          <div className="content">
            <div className="hero">Hero</div>
            <div className="secondary">Secondary</div>
            <div className="content">Content</div>
            <div className="toc">Toc</div>
          </div>
        </div>
        <div className="grid-area-footer">footer</div>
      </div>
    </Content>
  )
}
