// app/components/[slug]/page.tsx
import { GdsFlex, GdsText } from '@sebgroup/green-core/react'

interface GitHubContent {
  content: string
  encoding: string
}

interface Component {
  title: string
  slug: string
  body: string
}

interface GitHubFile {
  name: string
  type: string
}

async function getComponent(slug: string): Promise<Component> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/seb-oss/green-content/contents/_components/${slug}.json`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: GitHubContent = await response.json()
    const decodedContent = Buffer.from(data.content, 'base64').toString('utf-8')
    return JSON.parse(decodedContent)
  } catch (error) {
    console.error('Error fetching component:', error)
    throw error
  }
}

export default async function ComponentPage({
  params,
}: {
  params: { slug: string }
}) {
  try {
    const component = await getComponent(params.slug)

    return (
      <GdsFlex flex-direction="column" gap="m">
        <GdsText tag="h1">{component.title}</GdsText>
        <div>{component.body}</div>
      </GdsFlex>
    )
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  try {
    const response = await fetch(
      'https://api.github.com/repos/seb-oss/green-content/contents/_components',
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    // Check if data is an array
    if (!Array.isArray(data)) {
      console.error('Expected array but got:', typeof data, data)
      return []
    }

    const files = data.filter(
      (file: GitHubFile) =>
        file && typeof file.name === 'string' && file.name.endsWith('.json'),
    )

    return files.map((file: GitHubFile) => ({
      slug: file.name.replace('.json', ''),
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// Add not-found.tsx for better error handling
export function notFound() {
  return (
    <div>
      <h1>Component Not Found</h1>
      <p>The requested component could not be found.</p>
    </div>
  )
}
