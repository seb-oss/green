export const DOCS_FRAMEWORK_CANONICAL = [
  'angular',
  'react',
  'web-component',
] as const

export type DocsFramework = (typeof DOCS_FRAMEWORK_CANONICAL)[number]

const DOCS_FRAMEWORK_ALIASES: Record<string, DocsFramework> = {
  angular: 'angular',
  react: 'react',
  'web-component': 'web-component',
  'web-components': 'web-component',
  webcomponent: 'web-component',
  webcomponents: 'web-component',
  web: 'web-component',
}

export function normalizeDocsFramework(input: string): DocsFramework | null {
  const normalized = DOCS_FRAMEWORK_ALIASES[input.trim().toLowerCase()]
  return normalized ?? null
}
