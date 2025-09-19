// app/studio/[...slug]/layout.tsx
import { IconsProvider } from '../../../design/studio/tools/icons/icons.context'

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <IconsProvider>{children}</IconsProvider>
}
