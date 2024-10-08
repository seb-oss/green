'use client'

import React, { useContext } from 'react'

export default function Article({ children }: { children: React.ReactNode }) {
  return <section className="layout-article">{children}</section>
}
