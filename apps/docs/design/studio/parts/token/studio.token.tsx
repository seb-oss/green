'use client'

import React from 'react'

import * as Core from '@sebgroup/green-core/react'

interface TokenProps {
  level?: string
  preview?: React.ReactNode
  name?: string | React.ReactNode
  light?: string
  dark?: string
}

export default function StudioToken({
  level,
  preview,
  name,
  light,
  dark,
}: TokenProps) {
  return (
    <Core.GdsFlex
      align-items="center"
      padding="s l"
      border-width="0 0 4xs 0"
      border-color="subtle-01"
    >
      <Core.GdsGrid columns="5" gap="xl" align-items="center">
        {level ? <Core.GdsText>{level}</Core.GdsText> : <div></div>}
        {preview && preview}
        {light && <Core.GdsText color="neutral-02">{light}</Core.GdsText>}
        {dark && <Core.GdsText color="neutral-02">{dark}</Core.GdsText>}
        {name && <Core.GdsText>{name}</Core.GdsText>}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
