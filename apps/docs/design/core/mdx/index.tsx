'use client'

import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Spacer from '@/spacer/spacer'
import { GdsFlex } from '@sebgroup/green-react/core/flex/flex'
import { GdsGrid } from '@sebgroup/green-react/core/grid/grid'
import { GdsText } from '@sebgroup/green-react/core/text/text'

import Col from './col/col'
import Do from './do/do'
import Dont from './dont/dont'
import Figma from './figma/figma'
import FigmaProto from './figma/figmaProto'
import Grid from './grid/grid'
import IMG from './image/image'
import SE from './lang/se'
import Pattern from './pattern/pattern'
import Row from './row/row'
import Story from './story/story'

const components = {
  Figma,
  FigmaProto,
  Image: IMG,
  Row,
  Col,
  Do,
  Dont,
  SE,
  Pattern,
  Spacer,
  Grid,
  GdsGrid: ({ children, ...props }: { children: React.ReactNode }) => {
    return (
      <>
        <GdsGrid {...props}>{children}</GdsGrid>
      </>
    )
  },
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
  h1: (props: any) => <GdsText tag="h1" {...props} />,
  h2: (props: any) => <GdsText tag="h2" {...props} />,
  h3: (props: any) => <GdsText tag="h3" {...props} />,
  h4: (props: any) => <GdsText tag="h4" {...props} />,
  h5: (props: any) => <GdsText tag="h5" {...props} />,
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
