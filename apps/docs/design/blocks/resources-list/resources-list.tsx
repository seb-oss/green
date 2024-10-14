'use client'

import dynamic from 'next/dynamic'

const GdsGrid = dynamic(() => import('@sebgroup/green-react/src/core/grid'), {
  ssr: false,
})

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

const GdsText = dynamic(() => import('@sebgroup/green-react/src/core/text'), {
  ssr: false,
})

const GdsCard = dynamic(() => import('@sebgroup/green-react/src/core/card'), {
  ssr: false,
})

const IconArrowRight = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconArrowRight').then(
      (mod) => mod.IconArrowRight,
    ),
  {
    ssr: false,
  },
)

type Resource = {
  href: string
  target: string
  caption: string
  text: string
}

const resources: Resource[] = [
  {
    href: 'https://github.com/seb-oss/green',
    target: '_blank',
    caption: 'Github',
    text: 'Start contributing now!',
  },
  {
    href: 'https://brand.seb.se/point/en/seb/',
    target: '_blank',
    caption: 'Media Bank & Brand Guidelines',
    text: 'SEB Brand Hub',
  },
]

export default function RessourcesList({
  title,
}: {
  title: string
}): JSX.Element {
  return (
    <GdsFlex flex-direction="column">
      {title && <h2>{title}</h2>}
      <GdsGrid columns="1; m{2}" gap="m">
        {resources.map((resource, index) => (
          <a key={index} href={resource.href} target={resource.target}>
            <GdsCard background="primary" padding="l" border-radius="m">
              <GdsFlex justify-content="space-between" align-items="center">
                <GdsFlex flex-direction="column">
                  <GdsText font-size="details-m">{resource.caption}</GdsText>
                  <GdsText font-size="heading-s" font-weight="book">
                    {resource.text}
                  </GdsText>
                </GdsFlex>
                <IconArrowRight />
              </GdsFlex>
            </GdsCard>
          </a>
        ))}
      </GdsGrid>
    </GdsFlex>
  )
}
