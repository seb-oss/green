import {
  ComponentContent,
  ComponentList,
  Page,
  PageList,
  Snippet,
  SnippetList,
  Template,
  TemplateList,
} from './types'

const API_BASE = 'https://api.seb.io'

export async function fetchComponentsList(): Promise<ComponentList> {
  const response = await fetch(`${API_BASE}/components/components.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch components list')
  }
  return response.json()
}

export async function fetchComponentContent(
  path: string,
): Promise<ComponentContent> {
  const response = await fetch(`${API_BASE}/${path}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch component content: ${path}`)
  }
  const data = await response.json()
  return {
    ...data,
    type: 'component' as const,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString(),
  }
}

// Pages

export async function fetchPagesList(): Promise<PageList> {
  const response = await fetch(`${API_BASE}/pages/pages.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch pages list')
  }
  return response.json()
}

export async function fetchPageContent(path: string): Promise<Page> {
  const response = await fetch(`${API_BASE}/${path}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch page content: ${path}`)
  }
  const data = await response.json()

  // Transform API response to match Page interface
  return {
    ...data,
    type: 'page' as const,
    headings: data.headings || [], // Provide default if missing
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString(),
    showInMenu: data.showInMenu || false,
    menuOrder: data.menuOrder || 0,
  }
}

// TEMPLATES

export async function fetchTemplatesList(): Promise<TemplateList> {
  const response = await fetch(`${API_BASE}/templates/templates.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch templates list')
  }
  return response.json()
}

export async function fetchTemplateContent(path: string): Promise<Template> {
  const response = await fetch(`${API_BASE}/${path}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch template content: ${path}`)
  }
  const data = await response.json()

  return {
    ...data,
    type: 'template' as const,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString(),
  }
}

// SNIPPETS

export async function fetchSnippetsList(): Promise<SnippetList> {
  const response = await fetch(`${API_BASE}/snippets/snippets.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch snippets list')
  }
  return response.json()
}

export async function fetchSnippetContent(path: string): Promise<Snippet> {
  const response = await fetch(`${API_BASE}/${path}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch snippet content: ${path}`)
  }
  const data = await response.json()

  return {
    ...data,
    type: 'snippet' as const,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString(),
  }
}
