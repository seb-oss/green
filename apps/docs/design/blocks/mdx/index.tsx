"use client"

import * as React from "react"
import Grid from "@/grid/grid"
import Spacer from "@/spacer/spacer"
import { useMDXComponent } from "next-contentlayer/hooks"

import Pattern from "../pattern/pattern"
import Col from "./col/col"
import Do from "./do/do"
import Dont from "./dont/dont"
import Figma from "./figma/figma"
import FigmaProto from "./figma/figmaProto"
import IMG from "./image/image"
import SE from "./lang/se"
import Playground from "./playground/playground"
import Refs from "./refs/refs"
import Row from "./row/row"

const components = {
  Figma,
  FigmaProto,
  Image: IMG,
  Playground,
  Row,
  Col,
  Do,
  Dont,
  Refs,
  SE,
  Pattern,
  Spacer,
  Grid,
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
