import { GdsFlex } from '@sebgroup/green-core/react'
import Footer from '../atoms/footer/footer'
import Header from '../atoms/header/header'
import Sidebar from '../atoms/sidebar/sidebar'

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <GdsFlex height="100vh" flex-direction="column" color="primary">
      <Header />
      <GdsFlex gap="xl">
        <Sidebar />
        <GdsFlex flex-direction="column">
          {children}
          <Footer />
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}
