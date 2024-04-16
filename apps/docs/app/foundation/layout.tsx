import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/foundation"),
  title: "Foundation — Green Design System",
  description:
    "Green Design System, a framework designed to bring unity, efficiency, and coherent perspective to our digital experiences. Over time it will grow and evolve but always reflect our design philosophy. User needs first, being forefront and with confidence.",
  alternates: {
    canonical: "/foundation",
  },
  openGraph: {
    images: "/og?title=Foundation",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
