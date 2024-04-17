"use client"

import "#/global.css"
import "&/main/main.css"

export default function Main({ children }: { children: React.ReactNode }) {
  return <main className="layout-main">{children}</main>
}
