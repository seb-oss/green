import dynamic from 'next/dynamic'

export const IconEyeSlash = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconEyeSlash').then(
      (mod) => mod.IconEyeSlash,
    ),
  {
    ssr: false,
  },
)

export const IconCainLink = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconCainLink').then(
      (mod) => mod.IconCainLink,
    ),
  {
    ssr: false,
  },
)

export const IconChevronRight = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconChevronRight').then(
      (mod) => mod.IconChevronRight,
    ),
  {
    ssr: false,
  },
)

export const IconChevronBottom = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconChevronBottom').then(
      (mod) => mod.IconChevronBottom,
    ),
  {
    ssr: false,
  },
)

export const IconChevronTop = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconChevronTop').then(
      (mod) => mod.IconChevronTop,
    ),
  {
    ssr: false,
  },
)

export const IconBarsThree = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconBarsThree').then(
      (mod) => mod.IconBarsThree,
    ),
  {
    ssr: false,
  },
)

export const IconBrandGithub = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconBrandGithub').then(
      (mod) => mod.IconBrandGithub,
    ),
  {
    ssr: false,
  },
)

export const IconBrandSeb = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconBrandSeb').then(
      (mod) => mod.IconBrandSeb,
    ),
  {
    ssr: false,
  },
)

export const IconMagnifyingGlass = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconMagnifyingGlass').then(
      (mod) => mod.IconMagnifyingGlass,
    ),
  {
    ssr: false,
  },
)

export const IconPin = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconPin').then(
      (mod) => mod.IconPin,
    ),
  {
    ssr: false,
  },
)

export const IconPlusSmall = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconPlusSmall').then(
      (mod) => mod.IconPlusSmall,
    ),
  {
    ssr: false,
  },
)

export const IconCreditCard = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconCreditCard').then(
      (mod) => mod.IconCreditCard,
    ),
  {
    ssr: false,
  },
)

export const IconRocket = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconRocket').then(
      (mod) => mod.IconRocket,
    ),
  {
    ssr: false,
  },
)

export const IconArrowDown = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconArrowDown').then(
      (mod) => mod.IconArrowDown,
    ),
  {
    ssr: false,
  },
)

export const IconCrossLarge = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconCrossLarge').then(
      (mod) => mod.IconCrossLarge,
    ),
  {
    ssr: false,
  },
)

export const IconCheckmark = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconCheckmark').then(
      (mod) => mod.IconCheckmark,
    ),
  {
    ssr: false,
  },
)
