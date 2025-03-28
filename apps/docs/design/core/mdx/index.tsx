'use client'

import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import {
  GdsDivider,
  GdsFlex,
  GdsGrid,
  GdsRichText,
  GdsSpacer,
} from '$/import/components'
import { v4 as uuidv4 } from 'uuid'

import Select from '../../example/select'
import Badge from './badge'
import Common from './common'
import Do from './do'
import Dont from './dont'
import Figma from './figma'
import IMG from './image/image'
import Inline from './inline'
import EN from './lang/en'
import SE from './lang/se'
import Pattern from './pattern/pattern'
import Prototype from './prototype'
import Section from './section'
import Story from './story'
import SVG from './svg'

const components = {
  Figma,
  Prototype,
  Image: IMG,
  Do,
  Dont,
  SE,
  EN,
  Pattern,
  Common,
  GdsDivider: (props: object) => <GdsDivider opacity="0.2" {...props} />,
  Story,
  Badge,
  SVG,
  Grid: ({ children, ...props }: { children: React.ReactNode }) => {
    return (
      <>
        <GdsGrid width="100%" gap="l" margin="m 0 0 0" {...props}>
          {children}
        </GdsGrid>
      </>
    )
  },
  br: (props: object) => <GdsSpacer {...props} />,
  Column: (props: object) => (
    <GdsFlex flex-direction="column" gap="xs" {...props} />
  ),
  Row: (props: object) => <GdsFlex {...props} />,
  Section: Section,
  ul: (props: object) => <ul {...props} />,
  li: (props: object) => <li {...props} />,
  Inline,
  Select,
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
      <GdsRichText captureMode="move" key={uniqueId}>
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

              a {
                color:currentColor;
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
