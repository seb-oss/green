'use client'

import { useEffect } from 'react'
import { Link } from 'next-view-transitions'
import {
  GdsCard,
  GdsFlex,
  GdsImg,
  GdsRichText,
  GdsText,
} from '$/import/components'
import { Accordion, AccordionItem } from 'core/accordion'
import Hero from 'core/hero'
import TOC from 'core/navigator'
import Snowflakes from 'magic-snowflakes'

const HEADINGS = [
  {
    slug: 'what-is-green',
    text: 'What is Green?',
    level: 2,
  },
  {
    slug: 'how-green-works',
    text: 'How Green works',
    level: 2,
  },
  {
    slug: 'maintaining-and-educating',
    text: 'Maintaining and educating',
    level: 3,
  },
  {
    slug: 'built-on-contributions',
    text: 'Built on contributions',
    level: 3,
  },
  {
    slug: 'contact-us',
    text: 'Contact us',
    level: 2,
  },
]

export default function About() {
  useEffect(() => {
    new Snowflakes({
      color: '#ffffff',
      container: document.querySelector('body') as any,
      count: 100,
      maxSize: 100,
      minOpacity: 0.3,
      maxOpacity: 0.9,
    })
  }, [])
  return (
    <GdsFlex flex-direction="column" gap="2xl; m{6xl}">
      <GdsFlex gap="4xl; m{l}">
        <GdsFlex
          className="asd"
          gap="2xl; m{4xl}"
          flex-direction="column"
          width="100%"
        >
          <GdsCard
            box-sizing="border-box"
            height="800px"
            className="snowflakes-card"
          >
            <div
              id="snowflakes"
              style={{
                height: '800px',
              }}
            ></div>
          </GdsCard>
        </GdsFlex>
      </GdsFlex>
      <style>
        {`
        .snowflakes-card {
          background: radial-gradient(circle, rgba(0,83,143,1) 0%, rgba(0,30,46,1) 68%, rgba(0,0,0,1) 100%);
        }
      `}
      </style>
    </GdsFlex>
  )
}
