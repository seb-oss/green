import { beforeEach, describe, expect, it } from 'vitest'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'

import type { GdsCardPattern01 } from './card-pattern-01'

import '@sebgroup/green-core/patterns/card-pattern-01'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-card-pattern-01>', () => {
  let element: GdsCardPattern01

  beforeEach(async () => {
    element = await fixture(html`<gds-card-pattern-01></gds-card-pattern-01>`)
    await element.updateComplete
  })

  it('should have correct properties when initialized', async () => {
    expect(element.variant).toBe('neutral-01')
    expect(element.ratio).toBe('landscape')
  })

  it('should update aspect-ratio property', async () => {
    element.ratio = 'square'
    await element.updateComplete
    expect(element.ratio).toBe('square')
  })

  it('should handle href property', async () => {
    element.href = '#test'
    await element.updateComplete
    expect(element.href).toBe('#test')
  })

  it('should handle src property', async () => {
    element.src = 'test.jpg'
    await element.updateComplete
    expect(element.src).toBe('test.jpg')
  })

  it('should handle title and excerpt properties', async () => {
    element.title = 'Test Title'
    element.excerpt = 'Test Excerpt'
    await element.updateComplete
    expect(element.title).toBe('Test Title')
    expect(element.excerpt).toBe('Test Excerpt')
  })
})
