// app/components/[slug]/page.tsx

interface GitHubContent {
  content: string
  encoding: string
}

interface Component {
  title: string
  slug: string
  body: string
}

async function getComponent(slug: string): Promise<Component> {
  const response = await fetch(
    `https://api.github.com/repos/seb-oss/green-content/contents/_components/${slug}.json`,
    {
      next: { revalidate: 3600 },
      headers: {
        Accept: 'application/vnd.github.v3+json',
        // Add GitHub token if you're hitting API limits
        // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
      },
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch component')
  }

  const data: GitHubContent = await response.json()

  // GitHub API returns content in base64, need to decode it
  const decodedContent = Buffer.from(data.content, 'base64').toString('utf-8')
  return JSON.parse(decodedContent)
}

export default async function ComponentPage({
  params,
}: {
  params: { slug: string }
}) {
  const component = await getComponent(params.slug)

  return (
    <div>
      <h1>{component.title}</h1>
      <div>{component.body}</div>
    </div>
  )
}

interface GitHubFile {
  name: string
  type: string
}

export async function generateStaticParams() {
  const response = await fetch(
    'https://api.github.com/repos/seb-oss/green-content/contents/_components',
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        // Add GitHub token if you're hitting API limits
        // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
      },
    },
  )
  const files: GitHubFile[] = await response.json()

  return files
    .filter((file) => file.name.endsWith('.json'))
    .map((file) => ({
      slug: file.name.replace('.json', ''),
    }))
}
