import { describe, expect, it } from 'vitest'

import { normalizeDocsFramework } from './framework.js'

describe('framework aliases', () => {
  it('maps canonical frameworks to themselves', () => {
    expect(normalizeDocsFramework('angular')).toBe('angular')
    expect(normalizeDocsFramework('react')).toBe('react')
    expect(normalizeDocsFramework('web-component')).toBe('web-component')
  })

  it('maps web-component aliases', () => {
    expect(normalizeDocsFramework('web')).toBe('web-component')
    expect(normalizeDocsFramework('webcomponent')).toBe('web-component')
    expect(normalizeDocsFramework('web-components')).toBe('web-component')
  })

  it('handles casing and extra whitespace', () => {
    expect(normalizeDocsFramework(' Web ')).toBe('web-component')
    expect(normalizeDocsFramework('WEB-COMPONENTS')).toBe('web-component')
  })

  it('returns null for unsupported values', () => {
    expect(normalizeDocsFramework('vue')).toBeNull()
    expect(normalizeDocsFramework('')).toBeNull()
  })
})
