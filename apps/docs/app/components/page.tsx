// app/components/page.tsx
import Link from 'next/link'

// Define the component type
interface Component {
  name: string
  path: string
  url: string
  download_url: string
}

// Define the GitHub API response type
interface GitHubFile {
  name: string
  path: string
  url: string
  download_url: string
}

async function getComponents(): Promise<Component[]> {
  const response = await fetch(
    'https://api.github.com/repos/seb-oss/green-content/contents/_components',
    { next: { revalidate: 3600 } },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch components')
  }

  const files: GitHubFile[] = await response.json()

  return files
    .filter((file) => file.name.endsWith('.json'))
    .map((file) => ({
      name: file.name.replace('.json', ''),
      path: file.path,
      url: file.url,
      download_url: file.download_url,
    }))
}

async function ComponentsList() {
  const components = await getComponents()

  return (
    <div className="grid gap-4">
      {components.map((component: Component) => (
        <Link
          key={component.name}
          href={`/component/${component.name}`}
          className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-lg font-semibold capitalize">{component.name}</h2>
        </Link>
      ))}

      {components.length === 0 && (
        <p className="text-gray-500">No components found</p>
      )}
    </div>
  )
}

export default function Components() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Components</h1>
      <ComponentsList />
    </div>
  )
}
