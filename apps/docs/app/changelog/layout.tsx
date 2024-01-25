import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/changelog"),
  title: "Changelog — Green ",
  description: "Green Design System",
  alternates: {
    canonical: "/changelog",
  },
  openGraph: {
    images: "/og?title=Changelog",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
