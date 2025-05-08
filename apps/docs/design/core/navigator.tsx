'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  GdsButton,
  GdsCard,
  GdsDiv,
  GdsFlex,
  GdsText,
} from '$/import/components'
import { IconChevronTop } from '$/import/icons'

interface Heading {
  slug: string
  text: string
  level: number
}

interface TOCProps {
  headings: Heading[]
  component?: string
}

const Navigator: React.FC<TOCProps> = ({ headings, component }) => {
  const [activeId, setActiveId] = useState('')
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {},
  )

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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  const handleClick = (slug: string) => {
    setActiveId(slug)
  }

  const toggleSection = (slug: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }))
  }

  const groupedHeadings: (Heading | Heading[])[] = headings.reduce(
    (acc: (Heading | Heading[])[], heading: Heading) => {
      if (heading.level > 2) {
        const lastItem = acc[acc.length - 1]
        if (Array.isArray(lastItem)) {
          lastItem.push(heading)
        } else {
          throw new Error(
            'Level 3 and 4 headings should be after a level 2 heading.',
          )
        }
      } else if (heading.level === 2) {
        const nextHeadingIndex = headings.indexOf(heading) + 1
        if (
          headings[nextHeadingIndex] &&
          headings[nextHeadingIndex].level > 2
        ) {
          acc.push([heading])
        } else {
          acc.push(heading)
        }
      } else {
        acc.push(heading)
      }
      return acc
    },
    [],
  )

  return (
    <GdsFlex
      flex-direction="column"
      position="sticky"
      inset="70px 0 0 0"
      overflow="hidden auto"
      max-height="calc(100vh - 72px)"
      width="100%"
    >
      <GdsCard
        padding="m"
        max-height="max-content"
        variant="primary"
        border-radius="s"
        gap="s"
      >
        <GdsText tag="span" font-size="heading-xs">
          On this page
        </GdsText>
        <GdsFlex flex-direction="column" gap="xs">
          <Link
            key={`#top`}
            href={`#top`}
            data-id={'top'}
            data-level={'1'}
            onClick={() => handleClick('top')}
            passHref
          >
            <GdsText font-size="body-s">{component}</GdsText>
          </Link>
          {groupedHeadings.map((item, index) =>
            Array.isArray(item) ? (
              <GdsFlex
                flex-direction="column"
                key={index}
                // open={
                //   item.some((heading) => heading.slug === activeId) ||
                //   openSections[item[0].slug]
                // }
              >
                <GdsFlex justify-content="space-between" align-items="center">
                  <Link
                    key={`#${item[0].slug}`}
                    href={`#${item[0].slug}`}
                    className={`toc-link ${activeId === item[0].slug ? 'active' : ''}`}
                    data-id={item[0].slug}
                    data-level={item[0].level}
                    onClick={() => handleClick(item[0].slug)}
                    passHref
                  >
                    <GdsText
                      font-size="body-s"
                      text-wrap="balance"
                      text-decoration={
                        activeId === item[0].slug ? 'underline' : 'none'
                      }
                    >
                      {item[0].text}
                    </GdsText>
                  </Link>
                  <GdsDiv
                    transform={
                      openSections[item[0].slug] ? 'scaleY(-1)' : 'none'
                    }
                  >
                    <GdsButton
                      size="small"
                      rank="tertiary"
                      onClick={() => toggleSection(item[0].slug)}
                    >
                      <IconChevronTop />
                    </GdsButton>
                  </GdsDiv>
                </GdsFlex>
                {openSections[item[0].slug] && (
                  <GdsFlex flex-direction="column" margin="0 0 0 2xs">
                    {item.slice(1).map((heading) => (
                      <Link
                        key={`#${heading.slug}`}
                        href={`#${heading.slug}`}
                        className={`toc-link ${activeId === heading.slug ? 'active' : ''}`}
                        data-id={heading.slug}
                        data-level={heading.level}
                        onClick={() => handleClick(heading.slug)}
                        passHref
                      >
                        <GdsFlex
                          border={`0 0 0 ${activeId === heading.slug ? '4xs/secondary' : '4xs/primary'}`}
                          padding="xs m"
                        >
                          <GdsText
                            font-size="body-s"
                            text-decoration={
                              activeId === heading.slug ? 'underline' : 'none'
                            }
                          >
                            {heading.text}
                          </GdsText>
                        </GdsFlex>
                      </Link>
                    ))}
                  </GdsFlex>
                )}
              </GdsFlex>
            ) : (
              <GdsFlex key={`#${item.slug}`}>
                <Link
                  href={`#${item.slug}`}
                  className={`toc-link ${activeId === item.slug ? 'active' : ''}`}
                  data-id={item.slug}
                  data-level={item.level}
                  onClick={() => handleClick(item.slug)}
                  passHref
                >
                  <GdsText
                    text-decoration={
                      activeId === item.slug ? 'underline' : 'none'
                    }
                    font-size="body-s"
                  >
                    {item.text}
                  </GdsText>
                </Link>
              </GdsFlex>
            ),
          )}
        </GdsFlex>
      </GdsCard>
    </GdsFlex>
  )
}

export default Navigator
