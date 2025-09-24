'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'

export default function Copy({ name }: { name?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!name) return

    try {
      await navigator.clipboard.writeText(name)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 860)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Core.GdsCard
      flex-direction="row"
      justify-content="space-between"
      align-items="center"
      padding="2xs 2xs 2xs m"
      height="max-content"
      variant={copied ? 'positive' : 'secondary'}
    >
      <Core.GdsText>{copied ? 'Copied!' : name}</Core.GdsText>
      <Core.GdsButton
        size="small"
        rank={copied ? 'secondary' : 'tertiary'}
        variant={copied ? 'positive' : 'neutral'}
        onClick={handleCopy}
      >
        <Core.IconCopy size="s" />
      </Core.GdsButton>
    </Core.GdsCard>
  )
}
