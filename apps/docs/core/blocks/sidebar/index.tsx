import React, { KeyboardEvent, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { allComponents, Component } from "content"

import "./style.css"

import { log } from "console"

export default function Sidebar({
  isNavOpen,
  toggleNav,
}: {
  isNavOpen: boolean
  toggleNav: () => void
}) {
  const path = usePathname()
  const filteredComponents = allComponents.filter(
    (component) => component._raw.sourceFileName === "index.mdx"
  )
  function Component(component: Component) {
    return (
      <Link
        className={path == component.url_path ? "active" : ""}
        href={component.url_path}
        onClick={checkIfMenuShouldClose}
      >
        {component.title}
      </Link>
    )
  }

  const components = filteredComponents.sort((a, b) =>
    a.title.localeCompare(b.title)
  )

  const Arrow = () => {
    return (
      <span aria-label="Expand" tabIndex={0}>
        <svg viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
    )
  }

  const SideBarRef = useRef<HTMLDivElement>(null)

  const checkIfMenuShouldClose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { current } = SideBarRef
    if (
      current &&
      window.innerWidth < 992 &&
      !current.classList.contains("hidden")
    ) {
      toggleNav()
    }
  }

  return (
    <aside className={`nav ${!isNavOpen ? "hidden" : ""}`} ref={SideBarRef}>
      <details open={path.includes("/component")}>
        <summary>
          <Link
            className={path === "/components" ? "active" : ""}
            href="/components"
            onClick={checkIfMenuShouldClose}
          >
            Components
          </Link>
          <Arrow />
        </summary>
        <nav>
          {components.map((component, idx) => (
            <Component key={idx} {...component} />
          ))}
        </nav>
      </details>
      <details open={path.includes("/foundation")}>
        <summary>
          <Link
            className={path === "/foundation" ? "active" : ""}
            href="/foundation"
            onClick={checkIfMenuShouldClose}
          >
            Foundation
          </Link>
          <Arrow />
        </summary>
        <nav>
          <Link
            className={path == "/foundation/accessibility" ? "active" : ""}
            href="/foundation/accessibility"
            onClick={checkIfMenuShouldClose}
          >
            Accessibility
          </Link>
        </nav>
      </details>
      <details
        open={
          path.includes("/about") ||
          path.includes("/changelog") ||
          path.includes("/status")
        }
      >
        <summary>
          <Link
            className={path == "/about" ? "active" : ""}
            href="/about"
            onClick={checkIfMenuShouldClose}
          >
            About
          </Link>
          <Arrow />
        </summary>
        <nav>
          <Link
            className={path == "/changelog" ? "active" : ""}
            href="/changelog"
          >
            Changelog
          </Link>
          <Link
            className={path == "/status" ? "active" : ""}
            href="/status"
            onClick={checkIfMenuShouldClose}
          >
            Status
          </Link>
        </nav>
      </details>
      <Link
        className="pill"
        href="https://designlibrary.sebgroup.com/"
        target="_blank"
        style={{ marginTop: "auto" }}
      >
        Design Library
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 512 512"
        >
          <path d="M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z" />
        </svg>
      </Link>
    </aside>
  )
}
