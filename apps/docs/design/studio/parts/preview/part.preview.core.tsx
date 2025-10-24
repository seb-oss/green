import * as Component from './index'
import { PreviewProps } from './part.preview.types'

export default function Preview({ type, token, theme }: PreviewProps) {
  const Previews = {
    colors: Component.Colors,
    spacing: Component.Spacing,
    radius: Component.Radius,
    typography: Component.Typography,
    shadows: Component.Shadows,
    motion: Component.Motion,
    viewport: Component.Viewport,
  }[type]

  if (!Previews) return null

  return <Previews token={token} theme={theme} />
}
