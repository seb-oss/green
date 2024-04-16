import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/ux-writing/general"),
  title: "UX writing — Green ",
  description: "Green Design System",
  alternates: {
    canonical: "/ux-writing/general",
  },
  openGraph: {
    images: "/og?title=UX Writing General",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
