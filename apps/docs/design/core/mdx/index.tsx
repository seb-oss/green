'use client'

import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import {
  GdsDivider,
  GdsFlex,
  GdsRichText,
  GdsSpacer,
} from '$/import/components'
import { v4 as uuidv4 } from 'uuid'

// Local components
import Do from './do'
import Dont from './dont'
import Figma from './figma'
import Grid from './grid'
import IMG from './image/image'
import SE from './lang/se'
import Pattern from './pattern/pattern'
import Prototype from './prototype'
import Section from './section'
import Story from './story'

const components = {
  Figma,
  Prototype,
  Image: IMG,
  Do,
  Dont,
  SE,
  Pattern,
  GdsDivider: (props: object) => <GdsDivider {...props} />,
  Grid,
  Story,
  // PP: ({ children, ...props }: { children: React.ReactNode }) => {
  //   return (
  //     <>
  //       <GdsText tag="p" {...props}>
  //         {children}
  //       </GdsText>
  //     </>
  //   )
  // },
  // p: (props: object) => <GdsText tag="p" {...props} />,
  // h1: (props: object) => <GdsText tag="h1" {...props} />,
  // h2: (props: object) => <GdsText tag="h2" {...props} />,
  // h3: (props: object) => <GdsText tag="h3" {...props} />,
  // h4: (props: object) => <GdsText tag="h4" {...props} />,
  // h5: (props: object) => <GdsText tag="h5" {...props} />,
  // hr: (props: object) => <GdsDivider {...props} />,
  br: (props: object) => <GdsSpacer {...props} />,
  Column: (props: object) => (
    <GdsFlex flex-direction="column" gap="xs" {...props} />
  ),
  Row: (props: object) => <GdsFlex {...props} />,
  Section: Section,
  ul: (props: object) => <ul {...props} />,
  li: (props: object) => <li {...props} />,
}

export function Mdx({
  code,
  globals,
}: {
  code: string
  globals: Record<string, any>
}) {
  const Component = useMDXComponent(code, globals)
  const uniqueId = React.useMemo(() => uuidv4(), [])

  return (
    <>
      <GdsRichText key={uniqueId}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @scope {
              pre {
                padding: 20px;
                border-radius: 8px;
                overflow-x: auto;
                scrollbar-width: thin;
              }
            }
          `,
          }}
        />
        <Component components={components} />
      </GdsRichText>
    </>
  )
}
