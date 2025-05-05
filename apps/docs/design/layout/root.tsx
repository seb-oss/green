import Footer from '../atoms/footer'
import Header from '../atoms/header'

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  )
}
