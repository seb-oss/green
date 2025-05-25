// layout/types.ts
export interface LayoutProps {
  children?: React.ReactNode
  className?: string
}

export interface RootProps extends LayoutProps {
  fluid?: boolean
}

export interface PageProps extends LayoutProps {
  content?: React.ReactNode
  slug?: string
  title?: string
  variant?: 'home' | 'page'
  layout?: 'root' | 'page' | 'home' | 'wide' | 'narrow' | 'centered' | 'blank'
}

export interface LayoutClasses {
  root: string
  page: string
  home: string
  wide: string
  narrow: string
}

export interface LayoutStates {
  fluid: string
  loading: string
}

export interface LayoutVariants {
  home: string
  page: string
}
