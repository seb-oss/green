// eslint-disable-next-line
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
import Row from './row/row'
import Section from './section'
import Story from './story/story'

// import { GdsFlex } from '@sebgroup/green-react/core/flex/flex'
// import { GdsDivider } from '@sebgroup/green-react/core/GdsDivider/GdsDivider'
// import { GdsGrid } from '@sebgroup/green-react/core/grid/grid'
// import { GdsText } from '@sebgroup/green-react/core/text/text'

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})
const GdsDivider = dynamic(
  () => import('@sebgroup/green-react/src/core/divider'),
  {
    ssr: false,
  },
)
const GdsGrid = dynamic(() => import('@sebgroup/green-react/src/core/grid'), {
  ssr: false,
})
const GdsText = dynamic(() => import('@sebgroup/green-react/src/core/text'), {
  ssr: false,
})

const components = {
  Figma,
  FigmaProto,
  Image: IMG,
  // Row,
  // Col,
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
  p: (props: any) => <GdsText tag="p" {...props} />,
  h1: (props: any) => <GdsText tag="h1" {...props} />,
  h2: (props: any) => <GdsText tag="h2" {...props} />,
  h3: (props: any) => <GdsText tag="h3" {...props} />,
  h4: (props: any) => <GdsText tag="h4" {...props} />,
  h5: (props: any) => <GdsText tag="h5" {...props} />,
  hr: (props: any) => <GdsDivider {...props} />,
  Column: (props: any) => (
    <GdsFlex flex-direction="column" gap="xs" {...props} />
  ),
  Row: (props: any) => <GdsFlex {...props} />,
  Section: Section,
  ul: (props: any) => <GdsText margin="0" tag="ul" gap="xs" {...props} />,
  li: (props: any) => <GdsText margin="0" tag="li" {...props} />,
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
