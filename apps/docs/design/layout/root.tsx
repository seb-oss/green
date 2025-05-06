import { GdsFlex } from '@sebgroup/green-core/react'
import Footer from '../atoms/footer'
import Header from '../atoms/header'
import Sidebar from '../atoms/sidebar'

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <GdsFlex height="100vh" color="primary">
      <Sidebar />
      <GdsFlex gap="xl" padding="0 m" flex-direction="column" flex="1">
        <Header />
        <GdsFlex flex="1" flex-direction="column" gap="m">
          {children}
        </GdsFlex>
        <Footer />
      </GdsFlex>
    </GdsFlex>
  )
}
