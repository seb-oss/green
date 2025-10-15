import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import type { GdsCardPattern01 } from './card-pattern-01'

import '@sebgroup/green-core/components/card-pattern-01'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-card-pattern-01>', () => {
  let element: GdsCardPattern01

  beforeEach(async () => {
    element = await fixture(html`<gds-card-pattern-01></gds-card-pattern-01>`)
    await element.updateComplete
  })

  it('should have correct properties when initialized', async () => {
    expect(element.appearance).to.equal('neutral')
    expect(element.aspectRatio).to.equal('landscape')
    expect(element.size).to.equal('large')
  })

  it('should update appearance property', async () => {
    element.appearance = 'outlined'
    await element.updateComplete
    expect(element.appearance).to.equal('outlined')
  })

  it('should update aspect-ratio property', async () => {
    element.aspectRatio = 'square'
    await element.updateComplete
    expect(element.aspectRatio).to.equal('square')
  })

  it('should update size property', async () => {
    element.size = 'small'
    await element.updateComplete
    expect(element.size).to.equal('small')
  })

  it('should handle href property', async () => {
    element.href = '#test'
    await element.updateComplete
    expect(element.href).to.equal('#test')
  })

  it('should handle src property', async () => {
    element.src = 'test.jpg'
    await element.updateComplete
    expect(element.src).to.equal('test.jpg')
  })

  it('should handle title and excerpt properties', async () => {
    element.title = 'Test Title'
    element.excerpt = 'Test Excerpt'
    await element.updateComplete
    expect(element.title).to.equal('Test Title')
    expect(element.excerpt).to.equal('Test Excerpt')
  })
})
