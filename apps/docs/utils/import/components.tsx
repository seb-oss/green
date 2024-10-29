import dynamic from 'next/dynamic'

export const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)

export const GdsContainer = dynamic(
  () =>
    import('@sebgroup/green-react/core/container').then(
      (mod) => mod.GdsContainer,
    ),
  {
    ssr: false,
  },
)

export const GdsBadge = dynamic(
  () => import('@sebgroup/green-react/core/badge').then((mod) => mod.GdsBadge),
  {
    ssr: false,
  },
)

export const GdsCard = dynamic(
  () => import('@sebgroup/green-react/core/card').then((mod) => mod.GdsCard),
  {
    ssr: false,
  },
)

export const GdsButton = dynamic(
  () =>
    import('@sebgroup/green-react/core/button').then((mod) => mod.GdsButton),
  {
    ssr: false,
  },
)

export const GdsDivider = dynamic(
  () =>
    import('@sebgroup/green-react/core/divider').then((mod) => mod.GdsDivider),
  {
    ssr: false,
  },
)

export const GdsGrid = dynamic(
  () => import('@sebgroup/green-react/core/grid').then((mod) => mod.GdsGrid),
  {
    ssr: false,
  },
)

export const GdsText = dynamic(
  () => import('@sebgroup/green-react/core/text').then((mod) => mod.GdsText),
  {
    ssr: false,
  },
)

export const GdsMenuButton = dynamic(
  () =>
    import('@sebgroup/green-react/core/menu-button').then(
      (mod) => mod.GdsMenuButton,
    ),
  {
    ssr: false,
  },
)

export const GdsContextMenu = dynamic(
  () =>
    import('@sebgroup/green-react/core/context-menu').then(
      (mod) => mod.GdsContextMenu,
    ),
  {
    ssr: false,
  },
)

export const GdsMenuItem = dynamic(
  () =>
    import('@sebgroup/green-react/core/menu-item').then(
      (mod) => mod.GdsMenuItem,
    ),
  {
    ssr: false,
  },
)
