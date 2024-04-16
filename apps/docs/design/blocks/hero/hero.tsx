"use client"

import "@/hero/hero.css"

export default function Hero({
  heading,
  preamble,
}: {
  heading: string
  preamble?: string
}) {
  return (
    <div className="hero">
      <h1 className="gds-fs-display-large">{heading}</h1>
      {preamble && (
        <p className="gds-fs-headline-large color-secondary">{preamble}</p>
      )}
    </div>
  )
}
