// design/atoms/versus/versus.tsx
'use client'

import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../settings/content'
import { Link } from '../link/link'

interface VersusProps {
  compare: string
  current: string
}

export default function Versus({ compare, current }: VersusProps) {
  const router = useRouter()
  const { actions } = useContent()

  const compareComponent = actions.getComponent(compare)
  const currentComponent = actions.getComponent(current)

  if (!compareComponent || !currentComponent) return null

  console.log(compareComponent)
  console.log(currentComponent['compare-content'])

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="m"
      id="component-versus"
      width="100%"
    >
      <Core.GdsText tag="h2">
        {compareComponent.title} vs. {currentComponent.title}
      </Core.GdsText>
      <Core.GdsGrid columns="1; m{2}" gap="m" width="100%">
        <Core.GdsCard
          variant="primary"
          padding="l"
          gap="s"
          border-radius="s"
          min-width="100%"
        >
          <Core.GdsFlex flex-direction="column" gap="s" height="100%">
            <Core.GdsFlex
              justify-content="space-between"
              align-items="flex-start"
            >
              <Core.GdsText tag="h4">{compareComponent.title}</Core.GdsText>
              {compareComponent.beta && (
                <Core.GdsBadge variant="notice" size="small">
                  BETA
                </Core.GdsBadge>
              )}
            </Core.GdsFlex>
            {compareComponent['compare-content'] && (
              <Core.GdsText color="secondary" tag="p">
                {compareComponent['compare-content']}
              </Core.GdsText>
            )}
            <Link
              href={'/component/' + compareComponent.slug}
              text-decoration="underline"
            >
              Explore {compareComponent.title}
            </Link>
          </Core.GdsFlex>
        </Core.GdsCard>

        <Core.GdsCard
          variant="primary"
          padding="l"
          gap="s"
          border-radius="s"
          min-width="100%"
        >
          <Core.GdsFlex flex-direction="column" gap="s" height="100%">
            <Core.GdsFlex
              justify-content="space-between"
              align-items="flex-start"
            >
              <Core.GdsText tag="h4">{currentComponent.title}</Core.GdsText>
              {currentComponent.beta && (
                <Core.GdsBadge variant="notice" size="small">
                  BETA
                </Core.GdsBadge>
              )}
            </Core.GdsFlex>
            {currentComponent['compare-content'] && (
              <Core.GdsText color="secondary" tag="p">
                {currentComponent['compare-content']}
              </Core.GdsText>
            )}
            <Core.GdsText font-weight="book">Current component.</Core.GdsText>
          </Core.GdsFlex>
        </Core.GdsCard>
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
