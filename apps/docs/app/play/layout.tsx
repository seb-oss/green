import { Studio } from '../../design/layout/studio/layout.studio'

export default function PlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Studio aside="hello">{children}</Studio>
}
