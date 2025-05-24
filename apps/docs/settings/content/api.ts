import { ComponentContent, ComponentList } from './types'

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
