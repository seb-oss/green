import { useState } from 'react'

import { GdsButton } from '@sebgroup/green-core/react/button'
import { GdsDiv } from '@sebgroup/green-core/react/div'
import { GdsFlex } from '@sebgroup/green-core/react/flex'
import {
  IconBarsThree,
  IconBrandGithub,
  IconBrandSeb,
  IconCrossLarge,
} from '@sebgroup/green-react/src/lib/icon/icons'

export default function Header() {
  const [isNav, setIsNav] = useState(true)

  const toggleNav = () => {
    setIsNav(!isNav)
  }

  return (
    <GdsFlex
      level="1"
      position="sticky"
      inset="0"
      z-index="2"
      background="primary"
      className="main-header"
    >
      <GdsFlex
        justify-content="space-between"
        min-width="100%"
        align-items="center"
        height="60px"
        padding-inline="s"
      >
        {isNav === true ? (
          <GdsButton onClick={toggleNav} rank="tertiary" size="small">
            <IconCrossLarge slot="lead" />
            Menu
          </GdsButton>
        ) : (
          <GdsButton onClick={toggleNav} rank="tertiary" size="small">
            <IconBarsThree slot="lead" />
            Menu
          </GdsButton>
        )}
        <GdsDiv
          position="absolute"
          margin="0 auto"
          inset="auto 0"
          max-width="max-content"
        >
          <a
            href="https://seb.io"
            style={{ color: 'inherit' }}
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandSeb />
          </a>
        </GdsDiv>
        <GdsFlex
          height="100%"
          padding="0; s{0 l}"
          align-items="center"
          gap="2xs"
        >
          <GdsButton
            href="https://github.com/seb-oss/green/tree/main/libs/react"
            target="_blank"
            rank="tertiary"
            size="small"
          >
            <IconBrandGithub />
          </GdsButton>
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}
