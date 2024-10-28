'use client'

import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import dynamic from 'next/dynamic'
import Spacer from '@/spacer/spacer'

// Local components
import Do from './do'
import Dont from './dont'
import Figma from './figma/figma'
import FigmaProto from './figma/figmaProto'
import Grid from './grid'
import IMG from './image/image'
import SE from './lang/se'
import Pattern from './pattern/pattern'
import Section from './section'
import Story from './story/story'

const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)
const GdsDivider = dynamic(
  () =>
    import('@sebgroup/green-react/core/divider').then((mod) => mod.GdsDivider),
  {
    ssr: false,
  },
)
const GdsGrid = dynamic(
  () => import('@sebgroup/green-react/core/grid').then((mod) => mod.GdsGrid),
  {
    ssr: false,
  },
)
const GdsText = dynamic(
  () => import('@sebgroup/green-react/core/text').then((mod) => mod.GdsText),
  {
    ssr: false,
  },
)

const components = {
  Figma,
  FigmaProto,
  Image: IMG,
  Do,
  Dont,
  SE,
  Pattern,
  Spacer,
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
  p: (props: object) => <GdsText tag="p" {...props} />,
  h1: (props: object) => <GdsText tag="h1" {...props} />,
  h2: (props: object) => <GdsText tag="h2" {...props} />,
  h3: (props: object) => <GdsText tag="h3" {...props} />,
  h4: (props: object) => <GdsText tag="h4" {...props} />,
  h5: (props: object) => <GdsText tag="h5" {...props} />,
  hr: (props: object) => <GdsDivider {...props} />,
  Column: (props: object) => (
    <GdsFlex flex-direction="column" gap="xs" {...props} />
  ),
  Row: (props: object) => <GdsFlex {...props} />,
  Section: Section,
  ul: (props: object) => <GdsText margin="0" tag="ul" gap="xs" {...props} />,
  li: (props: object) => <GdsText margin="0" tag="li" {...props} />,
}

export function Mdx({
  code,
  globals,
}: {
  code: string
  globals: Record<string, any>
}) {
  const Component = useMDXComponent(code, globals)

  return <Component components={components} />
}
