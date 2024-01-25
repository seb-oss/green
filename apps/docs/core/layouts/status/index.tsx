import "./style.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="layout status">{children}</section>
}
