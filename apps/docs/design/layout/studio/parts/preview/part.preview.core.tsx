import * as Component from './index'
import { PreviewProps } from './part.preview.types'

export default function Preview({ type, token }: PreviewProps) {
  const Previews = {
    color: Component.Color,
    space: Component.Space,
    radius: Component.Radius,
    typography: Component.Typography,
    shadow: Component.Shadow,
    motion: Component.Motion,
    viewport: Component.Viewport,
  }[type]

  if (!Previews) return null

  return <Previews token={token} />
}
