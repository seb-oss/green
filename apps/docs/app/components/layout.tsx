import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/components"),
  title: "Components — Green",
  alternates: {
    canonical: "/components",
  },
  openGraph: {
    images: "/og?title=Components",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
