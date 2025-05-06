// hooks/mdx.ts
import fs from 'node:fs/promises'
import path from 'node:path'

export type ComponentData = {
  slug: string
  component: React.FC
}

export const getComponent = async (slug: string): Promise<ComponentData> => {
  const component = await import(`/content/components/${slug}.mdx`)

  return {
    slug,
    component: component.default,
  }
}

export const listComponents = async (): Promise<string[]> => {
  const files = await fs.readdir(
    path.join(process.cwd(), '/content/components'),
  )

  return files.map((file) => file.replace(/\.mdx$/, ''))
}
