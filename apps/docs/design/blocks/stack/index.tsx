export default function Stack({
  children,
  gap,
}: {
  children: React.ReactNode
  gap: any
}) {
  return (
    <div
      className="stack"
      style={{ display: "flex", flexDirection: "column", gap }}
    >
      {children}
    </div>
  )
}
