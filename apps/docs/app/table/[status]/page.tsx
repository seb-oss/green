import StatusDetail from '../page'

const STATUSES = ['active', 'inactive', 'pending']

export async function generateStaticParams() {
  return STATUSES.map((status) => ({
    status,
  }))
}

export default function Page() {
  return <StatusDetail />
}
