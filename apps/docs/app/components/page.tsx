// app/components/page.tsx
import Link from 'next/link'

import * as Core from '@sebgroup/green-core/react'

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

  //   {components.length === 0 && <div>No components found</div>}
  return components.map((component: Component) => (
    <Link key={component.name} href={`/component/${component.name}`}>
      <Core.GdsCard
        key={component.name + component.path}
        border="4xs solid primary"
        border-radius="s"
        padding="0"
        background="primary"
        width="280px"
      >
        <Core.GdsCard
          justify-content="space-between"
          padding="l s"
          flex-direction="row"
          background="secondary"
        >
          <Core.GdsText>{component.name}</Core.GdsText>
        </Core.GdsCard>
      </Core.GdsCard>
    </Link>
  ))
}

export default function Components() {
  return (
    <>
      <Core.GdsText tag="h1">Components</Core.GdsText>
      <Core.GdsFlex min-width="100%" gap="s; s{xl}">
        <ComponentsList />
      </Core.GdsFlex>
    </>
  )
}
