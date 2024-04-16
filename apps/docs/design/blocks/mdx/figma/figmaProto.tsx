"use client"

import * as React from "react"
import { useState } from "react"

interface FigmaProtoProps {
  file?: string
  caption?: string
  node?: string
  scale?: string
  height?: string
}

export default function FigmaProto({
  file,
  caption,
  node,
  scale,
  height,
}: FigmaProtoProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Examples of embed urls
  // src={`https://www.figma.com/file/${file}?embed_host=share&hide_ui=1&kind=&mode=design&node-id=${node}&type=design&viewer=1`}
  // src={`https://www.figma.com/file/${file}?embed_host=share&hide_ui=1&kind=&mode=dev&node-id=${node}&type=design&viewer=1&scaling=min-zoom`}
  // https://www.figma.com/file/Nv3WN0vGhsCj1WSqlA1Ctn/Embed?node-id=0%3A1&mode=dev
  // src={`https://www.figma.com/file/${file}?embed_host=green&node-id=${node}&type=dev&viewer=100&scaling=min-zoom`}
  // src={`https://www.figma.com/embed?embed_host=react&url=https://www.figma.com/file/${file}&scaling=scale-down-width&mode=dev&hide_ui=1&node-id=${node}`}

  /* 

  // Embed as prototype 

 src={`https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${file}/Embed?type=design&scaling=min-zoom&node-id=${node}&mode=design&hide-ui=1`}
 
 

  https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/R7v6avf1VILuFqpAjt6U07/Best-Floating-Label-Input?node-id=0%3A1


  Final 

  src={`https://www.figma.com/file/${file}?embed_host=share&hide_ui=1&kind=&mode=design&scaling=1&zoom=0&node-id=${node}&type=design&viewer=1`}
 
 */

  return (
    <figure className={isLoading ? "loading" : ""}>
      <iframe
        src={`https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${file}/Embed?type=design&scaling=min-zoom&node-id=${node}&mode=design&hide-ui=1`}
        onLoad={handleLoad}
        height={height}
      ></iframe>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
