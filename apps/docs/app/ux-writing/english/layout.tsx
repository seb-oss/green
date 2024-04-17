import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/ux-writing/english"),
  title: "English - UX writing — Green ",
  description: "Green Design System",
  alternates: {
    canonical: "/ux-writing/english",
  },
  openGraph: {
    images: "/og?title=UX Writing English",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
