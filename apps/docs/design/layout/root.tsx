import { GdsFlex } from '@sebgroup/green-core/react'
import Footer from '../atoms/footer'
import Header from '../atoms/header'
import Sidebar from '../atoms/sidebar'

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <GdsFlex flex-direction="column" gap="m" height="100vh">
      <Header />
      <GdsFlex gap="xl" padding="0 m">
        <Sidebar />
        <section>{children}</section>
      </GdsFlex>
      <Footer />
    </GdsFlex>
  )
}
