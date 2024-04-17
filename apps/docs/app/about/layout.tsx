import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/about"),
  title: "About — Green ",
  description: "Green Design System",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    images: "/og?title=About",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
