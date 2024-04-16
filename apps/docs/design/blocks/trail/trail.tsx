"use client"

import React, { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import "./style.css"

type TrailTypes = {
  home: ReactNode
  separator: ReactNode
  activeClass?: string
}

const Trail = ({ home, separator, activeClass }: TrailTypes) => {
  const paths = usePathname()
  const pathNames = paths.split("/").filter((path) => path)

  return (
    <div className="trail">
      <ul>
        <li>
          <Link href={"/"}>{home}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`
          let itemClasses =
            paths === href
              ? ` ${activeClass}`
              : " "
              ? link[0].toUpperCase() + link.slice(1, link.length)
              : link
          let itemLink = link
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default Trail
