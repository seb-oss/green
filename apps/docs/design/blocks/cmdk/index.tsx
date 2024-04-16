"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  allChangelogs,
  allComponents,
  allDocuments,
  allMembers,
  allPosts,
  Member,
} from "content"
import { compareDesc, format, parseISO } from "date-fns"
import Fuse from "fuse.js"

import "./style.css"

import React from "react"
import Image from "next/image"

interface Document {
  handle: any
  title: string
  version?: string
  keywords?: string
  type: string
  url_path: string
  name?: string
  department?: string
}

export default function Cmdk({
  isOpen,
  toggleCmd,
}: {
  isOpen: boolean
  toggleCmd: () => void
}) {
  const [isWindows, setIsWindows] = useState(false)
  const [searchResults, setSearchResults] = useState<Document[]>(
    allDocuments as Document[]
  )
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const refs = searchResults.map(() => React.createRef<HTMLDivElement>())

  useEffect(() => {
    if (refs[focusedIndex] && refs[focusedIndex].current) {
      refs[focusedIndex].current?.focus()
      // console.log(refs[focusedIndex].current)
    }
  }, [focusedIndex])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (value.length === 0) {
      setSearchResults(allDocuments as Document[])
      setFocusedIndex(-1)
      return
    }

    const results = []

    // Changelogs
    const changelogFuse = new Fuse(allChangelogs, {
      keys: ["title", "version"],
    })
    const changelogResults = changelogFuse.search(value)
    const changelogItems = changelogResults.map((result) => result.item)
    results.push(...changelogItems)

    // Components
    const componentFuse = new Fuse(allComponents, {
      keys: ["title", "keywords"],
    })
    // const componentResults = componentFuse.search(value)
    // const componentItems = componentResults.map((result) => result.item)
    // results.push(...componentItems)

    const componentResults = componentFuse.search(value)
    const componentItems = componentResults
      .map((result) => result.item)
      .filter((item) => item._raw.sourceFileName === "index.mdx")
    results.push(...componentItems)

    // Posts
    const postFuse = new Fuse(allPosts, {
      keys: ["title", "keywords"],
    })
    const postResults = postFuse.search(value)
    const postItems = postResults.map((result) => result.item)
    results.push(...postItems)

    // Members
    const memberFuse = new Fuse(allMembers, {
      keys: ["name", "department"],
    })
    const memberResults = memberFuse.search(value)
    const memberItems = memberResults.map((result) => result.item)
    results.push(...memberItems)

    setSearchResults(results as Document[])
  }

  const renderResult = (doc: Document, index: number, isFocused: boolean) => {
    const className = isFocused ? "focused" : ""
    if (doc.type === "Changelog") {
      return (
        <Link
          key={doc.title + doc.url_path}
          href={doc.url_path}
          onClick={toggleCmd}
          className={className}
        >
          <div className="cmdk-item-name">
            <span className="cmdk-item-char">{doc.title.charAt(0)}</span>
            <span>{doc.version}</span>
          </div>
          {/* <div className="cmdk-option">
            <span>
              <time dateTime={doc.date}>
                {format(parseISO(doc.date), "LLLL d, yyyy")}
              </time>
            </span>
          </div> */}
        </Link>
      )
    } else if (doc.type === "Component") {
      return (
        <Link
          key={doc.title + doc.url_path}
          href={doc.url_path}
          onClick={toggleCmd}
          className={className}
        >
          <div className="cmdk-item-name">
            <span className="cmdk-item-char">{doc.title.charAt(0)}</span>
            <span>{doc.title}</span>
          </div>
          <div className="cmdk-options">
            <span>
              <svg viewBox="0 0 24 24">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
              </svg>
            </span>
            <span>
              <svg viewBox="0 0 24 24">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </span>
          </div>
        </Link>
      )
    } else if (doc.type === "Post") {
      return (
        <Link
          key={doc.title + doc.url_path}
          href={doc.url_path}
          onClick={toggleCmd}
          className={className}
        >
          <div className="cmdk-item-name">
            <span className="cmdk-item-char">{doc.title.charAt(0)}</span>
            <span>{doc.title}</span>
          </div>
        </Link>
      )
    } else if (doc.type === "Member") {
      return (
        <Link
          key={doc.title + doc.url_path}
          href={"about" + doc.url_path}
          onClick={toggleCmd}
          className={className}
        >
          <div className="cmdk-item-name">
            <Image
              width="16"
              height="16"
              className="cmdk-item-img"
              src={"https://github.com/" + doc.handle.toString() + ".png"}
              alt="Member"
            />
            <span>{doc.name}</span>
          </div>
        </Link>
      )
    } else {
      return null
    }
  }

  useEffect(() => {
    const handleSlashKey = (e: {
      stopPropagation(): void
      key: string
      keyCode: number
      metaKey: any
      ctrlKey: any
      target: any
      preventDefault: () => void
    }) => {
      const target = e.target
      const inputElements = Array.from(
        document.querySelectorAll("input, textarea")
      )
      if (
        (e.key === "/" && inputElements.includes(target) === false) ||
        // (e.key === "/" && (e.metaKey || e.ctrlKey)) ||
        ((e.keyCode === 191 || e.keyCode === 75) && (e.metaKey || e.ctrlKey))
      ) {
        e.stopPropagation()
        // e.preventDefault()
        toggleCmd()
      } else if (e.key === "Escape") {
        if (isOpen) {
          toggleCmd()
          setSearchResults(allDocuments as Document[])
          setFocusedIndex(-1)
        }
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && target.closest(".cmd main") === null) {
        toggleCmd()
      }
    }

    document.addEventListener("keydown", handleSlashKey)
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("keydown", handleSlashKey)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [toggleCmd])

  useEffect(() => {
    const handleFocusInput = () => {
      if (isOpen && inputRef.current) {
        inputRef.current.focus()
      }
    }

    const panelTimeout = setTimeout(handleFocusInput, 300)

    return () => clearTimeout(panelTimeout)
  }, [isOpen])

  useEffect(() => {
    const userAgent = window.navigator.userAgent
    setIsWindows(userAgent.indexOf("Windows") !== -1)
  }, [])

  return (
    <div className={`cmd ${isOpen ? "open" : ""}`} role="dialog">
      <main>
        <form>
          <label htmlFor="search">
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </label>
          <input
            ref={inputRef}
            id="search"
            type="text"
            placeholder={
              isWindows
                ? "/ — Search components & pages"
                : "⌘K — Search components & pages"
            }
            onChange={handleSearch}
          />
          <button type="reset">
            <svg viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </form>
        <section>
          {searchResults.length > 0 ? (
            <>
              {Object.entries(
                searchResults.reduce((groups: { [key: string]: any }, doc) => {
                  if (groups[doc.type]) {
                    groups[doc.type].push(doc)
                  } else {
                    // console.log("group", (groups[doc.type] = [doc]))
                    groups[doc.type] = [doc]
                  }
                  return groups
                }, {})
              )
                .filter(([type, docs]) => type !== "Post" && type !== "Member")
                .map(([type, docs]) => (
                  <div key={type}>
                    <div className="category" tabIndex={-1}>
                      {type}
                    </div>
                    <div className="list">
                      {docs
                        .filter(
                          (doc: any) =>
                            type !== "Component" ||
                            doc._id.endsWith("index.mdx")
                        )
                        .map((doc: Document, index: number) => {
                          const isFocused = index === focusedIndex
                          return renderResult(doc, index, isFocused)
                        })}
                      {/* {docs.filter((doc: Document) => doc._id.endsWith("index.mdx")).map((doc: Document) => renderResult(doc))} */}
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <div className="no-results">
              <div className="category">Error</div>
              <div className="list">
                <Link href="/search">No results found.</Link>
              </div>
            </div>
          )}
        </section>

        <footer>
          <svg width="14" height="14" viewBox="0 0 25 25">
            <path
              d="M24.1819 7.19041C19.6399 7.19041 15.6799 9.77498 13.6419 13.5785C13.2849 11.1715 12.3789 8.88337 10.9969 6.89791C9.20875 4.31037 6.69322 2.3358 3.78189 1.23449L3.15489 0.998047L2.80189 1.57692C1.72967 3.3372 1.11407 5.34635 1.01291 7.41566C0.911744 9.48497 1.32833 11.5465 2.22355 13.4067C3.11876 15.2669 4.46323 16.8646 6.13066 18.0499C7.79809 19.2352 9.73377 19.969 11.7559 20.1826C11.3979 21.9752 10.8799 24.412 10.8799 24.412C10.8623 24.4813 10.8606 24.5537 10.8747 24.6237C10.8889 24.6938 10.9186 24.7596 10.9615 24.8162C11.0044 24.8727 11.0595 24.9185 11.1225 24.95C11.1855 24.9816 11.2547 24.998 11.3249 24.998H12.7829C12.8914 24.9982 12.9964 24.9591 13.0793 24.8879C13.1622 24.8166 13.2177 24.7177 13.2359 24.6087C13.2359 24.6087 13.4399 21.7816 13.5609 20.2396C19.9179 19.94 24.9999 14.5752 24.9999 8.02408V7.18939L24.1819 7.19041ZM2.63589 8.02408C2.63488 6.29308 3.05217 4.58847 3.85089 3.06081C8.86089 5.25912 12.1809 10.3539 12.1809 15.9541C12.1809 16.8183 12.1039 17.6805 11.9499 18.5305C9.39638 18.2657 7.03015 17.0446 5.30946 15.1036C3.58877 13.1626 2.63608 10.6399 2.63589 8.02408ZM13.8519 18.5519C14.2649 13.4184 18.2919 9.3133 23.3279 8.89443C22.9179 14.0259 18.8889 18.131 13.8519 18.5519Z"
              fill="currentColor"
            />
          </svg>
          <div className="cmd-options">
            {/* <div>
              Navigate
              <kbd>
                <svg viewBox="0 0 24 24">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </kbd>
              <kbd>
                <svg viewBox="0 0 24 24">
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </kbd>
            </div> */}
            <div>
              Select
              <kbd>
                <svg viewBox="0 0 24 24">
                  <polyline points="9 10 4 15 9 20"></polyline>
                  <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                </svg>
              </kbd>
            </div>
            <div>
              Escape
              <kbd>⎋</kbd>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
