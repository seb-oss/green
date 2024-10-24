'use client'

import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Grid from '@/grid/grid'
import Spacer from '@/spacer/spacer'

import Pattern from '../pattern/pattern'
import Col from './col/col'
import Do from './do/do'
import Dont from './dont/dont'
import Figma from './figma/figma'
import FigmaProto from './figma/figmaProto'
import IMG from './image/image'
import SE from './lang/se'
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
  Story,
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
