'use client'

import {
  fetchComponentContent,
  fetchComponentsList,
  fetchHomeContent,
  fetchNavigationContent,
  fetchNavigationList,
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
    const [
      componentsList,
      pagesList,
      templatesList,
      snippetsList,
      navigationList,
      homeContent,
    ] = await Promise.all([
      fetchComponentsList(),
      fetchPagesList(),
      fetchTemplatesList(),
      fetchSnippetsList(),
      fetchNavigationList(),
      fetchHomeContent(),
    ])

    // Fetch all content in parallel
    const [components, pages, templates, snippets, navigation] =
      await Promise.all([
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
        Promise.all(
          navigationList.navigation.map((nav) =>
            fetchNavigationContent(nav.path),
          ),
        ),
      ])

    const allPages = [homeContent, ...pages]

    // Get the latest lastUpdated timestamp
    const lastUpdated = new Date(
      Math.max(
        new Date(componentsList.lastUpdated).getTime(),
        new Date(pagesList.lastUpdated).getTime(),
        new Date(templatesList.lastUpdated).getTime(),
        new Date(snippetsList.lastUpdated).getTime(),
        new Date(navigationList.lastUpdated).getTime(),
      ),
    ).toISOString()

    return {
      pages: allPages,
      components,
      templates,
      snippets,
      navigation,
      lastUpdated,
    }
  } catch (error) {
    console.error('Error loading content:', error)
    throw error
  }
}
