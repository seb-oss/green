'use client'

import React, { forwardRef, useContext, useEffect, useState } from 'react'
import Link from 'next/link'

import './header.css'

import { ThemeProviderContext } from '$/theme/provider'
import { ThemeToggle } from '$/theme/toggle'

export const Header = forwardRef(({ ...props }, ref) => {
  const { toggleCmd } = useContext(ThemeProviderContext)
  const { toggleNav, isNavOpen } = useContext(ThemeProviderContext)
  const [isWindows, setIsWindows] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent
    setIsWindows(userAgent.indexOf('Windows') !== -1)
  }, [])

  return (
    <header className="main">
      <nav>
        <button className={`hamburger ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
          {isNavOpen === true ? (
            <svg viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
          Menu
        </button>
        {/*  
            <Link
              className={path == "/components" ? "active" : ""}
              href="/components"
            >
              Components
            </Link>
            <Link
              className={path == "/foundation" ? "active" : ""}
              href="/foundation"
            >
              Foundation
            </Link>
         */}
      </nav>
      <Link href="/" className="logo" aria-label="SEB">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 55 24">
          <path
            fill="currentColor"
            d="M14.87 6.123 11.92 8.32c-1.387-1.2-3.187-1.43-4.178-1.43-.997 0-2.046.288-2.205 1.004-.159.694.492 1.236 1.605 1.54 1.272.34 2.422.643 4.207 1.15 2.646.758 4.46 1.9 4.46 4.553 0 3.665-3.252 5.56-7.604 5.56S.889 18.433 0 17.377l3.116-2.327c2.19 1.908 3.708 2.176 4.98 2.176 1.46 0 2.827-.311 3-1.135.145-.665-.404-1.193-1.648-1.482-1.402-.326-2.595-.586-3.918-.933C1.937 12.737.925 10.648.925 8.77c0-2.581 2.4-5.234 6.803-5.234 4.503 0 7.142 2.58 7.142 2.588Zm18.788-2.328H20.516v16.417h13.38v-3.788h-8.768v-2.646h6.036v-3.621h-6.036V7.54h8.523V3.795h.007ZM17.118 24h1.02V0h-1.02v24Zm18.506 0h1.02V0h-1.02v24Zm3.398-3.788h10.554c2.82 0 5.11-1.699 5.11-4.424 0-2.125-1.387-3.535-3.339-4.157a.837.837 0 0 0-.188-.021c.065-.008.13-.015.188-.037 1.12-.44 2.35-1.619 2.35-3.621 0-2.545-2.249-4.164-5.025-4.164h-9.657l.007 16.424Zm4.633-13.005h3.687c.846 0 1.533.673 1.533 1.439s-.687 1.446-1.533 1.446h-3.687V7.207Zm4.504 9.362h-4.51v-2.993h4.51c.795 0 1.446.643 1.446 1.496 0 .846-.644 1.497-1.446 1.497Z"
          />
        </svg>
      </Link>
      <nav>
        <button onClick={toggleCmd} className="shortcut">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span>{isWindows ? '/' : '⌘K'}</span>
        </button>
        <Link className="github" href="https://github.com/seb-oss/green" target="_blank" aria-label="GitHub">
          <svg viewBox="0 0 24 24">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
