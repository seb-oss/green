// app/table/page.tsx or layout.tsx
import Table from './table'
import { TableProvider } from './table.context'

export default function TablePage() {
  return (
    <TableProvider>
      <Table />
    </TableProvider>
  )
}
