'use client'

import {
  fetchComponentContent,
  fetchComponentsList,
  fetchPageContent,
  fetchPagesList,
  fetchSnippetContent,
  fetchSnippetsList,
  fetchTemplateContent,
  fetchTemplatesList,
} from './api'

import type { ContentStore } from './types'

export async function loadContent(): Promise<ContentStore> {
  try {
    // Fetch both components and pages lists
    const [componentsList, pagesList, templatesList, snippetsList] =
      await Promise.all([
        fetchComponentsList(),
        fetchPagesList(),
        fetchTemplatesList(),
        fetchSnippetsList(),
      ])

    // Fetch all content in parallel
    const [components, pages, templates, snippets] = await Promise.all([
      Promise.all(
        componentsList.components.map((component) =>
          fetchComponentContent(component.path),
        ),
      ),
      Promise.all(pagesList.pages.map((page) => fetchPageContent(page.path))),
      Promise.all(
        templatesList.templates.map((template) =>
          fetchTemplateContent(template.path),
        ),
      ),
      Promise.all(
        snippetsList.snippets.map((snippet) =>
          fetchSnippetContent(snippet.path),
        ),
      ),
    ])

    // Get the latest lastUpdated timestamp
    const lastUpdated = new Date(
      Math.max(
        new Date(componentsList.lastUpdated).getTime(),
        new Date(pagesList.lastUpdated).getTime(),
        new Date(templatesList.lastUpdated).getTime(),
        new Date(snippetsList.lastUpdated).getTime(),
      ),
    ).toISOString()

    return {
      pages,
      components,
      templates,
      snippets,
      lastUpdated,
    }
  } catch (error) {
    console.error('Error loading content:', error)
    throw error
  }
}
