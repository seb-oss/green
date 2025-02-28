'use client'

import dynamic from 'next/dynamic'

export const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)

export const GdsDiv = dynamic(
  () => import('@sebgroup/green-react/core/div').then((mod) => mod.GdsDiv),
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

export const GdsDialog = dynamic(
  () =>
    import('@sebgroup/green-react/core/dialog').then((mod) => mod.GdsDialog),
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

export const GdsLink = dynamic(
  () => import('@sebgroup/green-react/core/link').then((mod) => mod.GdsLink),
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

export const GdsRichText = dynamic(
  () =>
    import('@sebgroup/green-react/core/rich-text').then(
      (mod) => mod.GdsRichText,
    ),
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

export const GdsCoachmark = dynamic(
  () =>
    import('@sebgroup/green-react/core/coachmark').then(
      (mod) => mod.GdsCoachmark,
    ),
  {
    ssr: false,
  },
)

export const GdsCalendar = dynamic(
  () =>
    import('@sebgroup/green-react/core/calendar').then(
      (mod) => mod.GdsCalendar,
    ),
  {
    ssr: false,
  },
)

export const GdsMask = dynamic(
  () => import('@sebgroup/green-react/core/mask').then((mod) => mod.GdsMask),
  {
    ssr: false,
  },
)

export const GdsDatepicker = dynamic(
  () =>
    import('@sebgroup/green-react/core/datepicker').then(
      (mod) => mod.GdsDatepicker,
    ),
  {
    ssr: false,
  },
)

export const GdsDropdown = dynamic(
  () =>
    import('@sebgroup/green-react/core/dropdown').then(
      (mod) => mod.GdsDropdown,
    ),
  {
    ssr: false,
  },
)

export const GdsOption = dynamic(
  () =>
    import('@sebgroup/green-react/core/option').then((mod) => mod.GdsOption),
  {
    ssr: false,
  },
)

export const GdsFab = dynamic(
  () => import('@sebgroup/green-react/core/fab').then((mod) => mod.GdsFab),
  {
    ssr: false,
  },
)

export const GdsSignal = dynamic(
  () =>
    import('@sebgroup/green-react/core/signal').then((mod) => mod.GdsSignal),
  {
    ssr: false,
  },
)

export const GdsFilterChips = dynamic(
  () =>
    import('@sebgroup/green-react/core/filter-chips').then(
      (mod) => mod.GdsFilterChips,
    ),
  {
    ssr: false,
  },
)

export const GdsFilterChip = dynamic(
  () =>
    import('@sebgroup/green-react/core/filter-chip').then(
      (mod) => mod.GdsFilterChip,
    ),
  {
    ssr: false,
  },
)

export const GdsImg = dynamic(
  () => import('@sebgroup/green-react/core/img').then((mod) => mod.GdsImg),
  {
    ssr: false,
  },
)

export const GdsInput = dynamic(
  () => import('@sebgroup/green-react/core/input').then((mod) => mod.GdsInput),
  {
    ssr: false,
  },
)

export const GdsPopover = dynamic(
  () =>
    import('@sebgroup/green-react/core/popover').then((mod) => mod.GdsPopover),
  {
    ssr: false,
  },
)

export const GdsSegment = dynamic(
  () =>
    import('@sebgroup/green-react/core/segment').then((mod) => mod.GdsSegment),
  {
    ssr: false,
  },
)

export const GdsSegmentedControl = dynamic(
  () =>
    import('@sebgroup/green-react/core/segmented-control').then(
      (mod) => mod.GdsSegmentedControl,
    ),
  {
    ssr: false,
  },
)

export const GdsSpacer = dynamic(
  () =>
    import('@sebgroup/green-react/core/spacer').then((mod) => mod.GdsSpacer),
  {
    ssr: false,
  },
)

export const GdsTextarea = dynamic(
  () =>
    import('@sebgroup/green-react/core/textarea').then(
      (mod) => mod.GdsTextarea,
    ),
  {
    ssr: false,
  },
)

export const GdsSelect = dynamic(
  () =>
    import('@sebgroup/green-react/core/select').then((mod) => mod.GdsSelect),
  {
    ssr: false,
  },
)

export const GdsVideo = dynamic(
  () => import('@sebgroup/green-react/core/video').then((mod) => mod.GdsVideo),
  {
    ssr: false,
  },
)

export const GdsTheme = dynamic(
  () => import('@sebgroup/green-react/core/theme').then((mod) => mod.GdsTheme),
  {
    ssr: false,
  },
)
