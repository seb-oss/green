// lib/table-data.ts
export interface UserData {
  id: number
  name: string
  email: string
  role: 'Admin' | 'User' | 'Editor'
  status: 'Active' | 'Inactive'
  amount: number
  account: string
  lastLogin: string
  avatarUrl?: string
  department?: string
  download?: string
}

const USERS = {
  FIRST_NAMES: [
    'Alexandra',
    'Benjamin',
    'Caroline',
    'David',
    'Elena',
    'Fredrik',
  ],
  LAST_NAMES: ['Andersson', 'Bergström', 'Carlsson', 'Dahlström', 'Eriksson'],
  ROLES: ['Admin', 'User', 'Editor'] as const,
  STATUSES: ['Active', 'Inactive'] as const,
  DEPARTMENTS: ['Engineering', 'Sales', 'Marketing', 'Support', 'HR'] as const,
  COUNT: 100,
}

const generateUserRecord = (index: number): UserData => {
  const id = index + 1
  const firstName = USERS.FIRST_NAMES[index % USERS.FIRST_NAMES.length]
  const lastName = USERS.LAST_NAMES[index % USERS.LAST_NAMES.length]

  return {
    id,
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}@domain.tld`,
    role: USERS.ROLES[index % USERS.ROLES.length],
    status: USERS.STATUSES[index % USERS.STATUSES.length],
    department: USERS.DEPARTMENTS[index % USERS.DEPARTMENTS.length],
    amount: Math.floor(Math.random() * 500000) + 10000,
    account: `5440${String((index * 7919) % 10000000).padStart(7, '0')}`,
    lastLogin: new Date(
      Date.now() - Math.random() * 30 * 86400000,
    ).toISOString(),
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}${lastName}`,
    download: `#`,
  }
}

const generateUserDataset = (): UserData[] =>
  Array.from({ length: USERS.COUNT }, (_, i) => generateUserRecord(i))

export const userDataProvider = async (request: any) => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const allData = generateUserDataset()
  let processedData = [...allData]

  if (request.searchQuery) {
    const query = request.searchQuery.toLowerCase()
    processedData = processedData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query),
      ),
    )
  }

  if (request.sortColumn) {
    processedData.sort((a, b) => {
      const aValue = String(a[request.sortColumn as keyof UserData])
      const bValue = String(b[request.sortColumn as keyof UserData])

      return request.sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })
  }

  const startIndex = (request.page - 1) * request.rows
  const endIndex = startIndex + request.rows
  const paginatedData = processedData.slice(startIndex, endIndex)

  return {
    rows: paginatedData,
    total: processedData.length,
  }
}
