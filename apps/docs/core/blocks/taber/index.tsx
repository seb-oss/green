"use client"

import "./style.css"

import React, { useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface TaberProps {
  component: string
}

export default function Taber({ component }: TaberProps) {
  const pathName = usePathname()

  const links = [
    { path: "", label: "Overview" },
    { path: "/design", label: "Design" },
    { path: "/ux-text", label: "UX text" },
    { path: "/code", label: "Code" },
    // { path: "/guidelines", label: "Guidelines" },
    { path: "/accessibility", label: "Accessibility" },
  ]

  return (
    <div className="taber">
      {links.map(({ path, label }) => (
        <Link
          key={path}
          href={component + path}
          className={pathName === component + path ? "active" : ""}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
