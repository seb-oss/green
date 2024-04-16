import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/status"),
  title: "Status — Green ",
  description: "Green Design System",
  alternates: {
    canonical: "/status",
  },
  openGraph: {
    images: "/og?title=Status",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
