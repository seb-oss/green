import React, { KeyboardEvent, useContext, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Dev, { isDev } from "$/dev/dev"
import { allComponents, Component } from "content"

import "./style.css"

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

  const components = filteredComponents
    .filter((component) => !(component.private && !isDev))
    .sort((a, b) => a.title.localeCompare(b.title))

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
          <Dev>
            <Arrow />
          </Dev>
        </summary>
        <Dev>
          <nav>
            <Link
              className={path == "/foundation/accessibility" ? "active" : ""}
              href="/foundation/accessibility"
              onClick={checkIfMenuShouldClose}
            >
              Accessibility
            </Link>
          </nav>
        </Dev>
      </details>
      <details open={path.includes("/ux-writing")}>
        <summary>
          <Link
            className={path == "/ux-writing" ? "active" : ""}
            href="/ux-writing"
            onClick={checkIfMenuShouldClose}
          >
            UX writing
          </Link>
          <Dev>
            <Arrow />
          </Dev>
        </summary>
        <Dev>
          <nav>
            <Link
              className={path == "/ux-writing/general" ? "active" : ""}
              href="/ux-writing/general"
            >
              General
            </Link>
            <Link
              className={path == "/ux-writing/english" ? "active" : ""}
              href="/ux-writing/english"
            >
              English
            </Link>
            <Link
              className={path == "/ux-writing/swedish" ? "active" : ""}
              href="/ux-writing/swedish"
              onClick={checkIfMenuShouldClose}
            >
              Swedish
            </Link>
          </nav>
        </Dev>
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
        <svg viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </Link>
    </aside>
  )
}
