"use client"

import { forwardRef } from "react"
import Link from "next/link"

import "@/card/card.css"

type CardVariant = "default" | "cta"

type CardProps = {
  children?: React.ReactNode
  href: string
  className?: string
  target?: string
  variant?: CardVariant
}

const Card = forwardRef<HTMLAnchorElement, CardProps>(
  (
    { children, href, className = "", target, variant = "default", ...rest },
    ref
  ) => {
    const cardClass = `gds-card ${className} ${
      variant === "cta" ? "gds-card-cta" : ""
    }`

    return (
      <Link
        href={href}
        ref={ref}
        className={cardClass}
        target={target}
        {...rest}
      >
        {children}
      </Link>
    )
  }
)

Card.displayName = "Card"

export default Card
