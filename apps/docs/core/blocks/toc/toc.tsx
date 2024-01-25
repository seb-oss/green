"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { allComponents, Component } from "content"

import "./style.css"

interface Heading {
  slug: string
  text: string
  level: number
}

interface TOCProps {
  headings: Heading[]
  component: string
}

const TOC: React.FC<TOCProps> = ({ headings, component }) => {
  const [activeId, setActiveId] = useState("")
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        const element = document.getElementById(heading.slug)

        if (element && element.offsetTop <= scrollPosition + 161) {
          setActiveId(heading.slug)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [headings])

  const handleClick = (slug: string) => {
    setActiveId(slug)
  }

  return (
    <aside className="toc">
      <span>On this page</span>
      <nav data-name={headings.length > 0 ? "On this page" : ""}>
        <Link
          key={`#top`}
          href={`#top`}
          data-id={"top"}
          data-level={"1"}
          onClick={() => handleClick("top")}
          passHref
        >
          {component}
        </Link>
        {headings.map((heading) => (
          <Link
            key={`#${heading.slug}`}
            href={`#${heading.slug}`}
            className={`toc-link ${activeId === heading.slug ? "active" : ""}`}
            data-id={heading.slug}
            data-level={heading.level}
            onClick={() => handleClick(heading.slug)}
            passHref
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default TOC
