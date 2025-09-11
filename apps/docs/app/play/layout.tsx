import { Studio } from '../../design/layout/studio/layout.studio'

export default function PlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Studio page="icons" aside="hello" title="Title" description="hello">
      {children}
    </Studio>
  )
}
