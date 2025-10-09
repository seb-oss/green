// studio/components/preview/preview.types.ts
import { TokenItem } from '../../data/studio.data.types'

export type PreviewType =
  | 'colors'
  | 'spacing'
  | 'radius'
  | 'typography'
  | 'shadows'
  | 'motion'
  | 'viewport'

export interface PreviewProps {
  type: PreviewType
  theme?: 'dark' | 'light'
  token: TokenItem
}

// Optional: Specific token type interfaces for stricter typing
export interface ColorPreviewProps {
  token: TokenItem & { level?: string }
  theme?: 'dark' | 'light'
  darkValue?: string
}

export interface SpacePreviewProps {
  token: TokenItem
}

export interface RadiusPreviewProps {
  token: TokenItem
}

export interface TypographyPreviewProps {
  token: TokenItem & {
    'font-size': string
    'line-height': string
    'font-weight': string
  }
}

export interface ShadowPreviewProps {
  token: TokenItem
}

export interface MotionPreviewProps {
  token: TokenItem
}

export interface ViewportPreviewProps {
  token: TokenItem
}
