import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/ux-writing/swedish"),
  title: "Swedish - UX writing — Green ",
  description: "Green Design System",
  alternates: {
    canonical: "/ux-writing/swedish",
  },
  openGraph: {
    images: "/og?title=UX Writing Swedish",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
