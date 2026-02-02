import { describe, expect, it } from 'vitest'

import {
  clickOnElement,
  conditionToBeTrue,
  fixture,
  html as testingHtml,
  timeout,
  waitUntil,
} from '../../utils/testing'

import '@sebgroup/green-core/primitives/form-control-footer'

import type { GdsFormControlFooter } from '@sebgroup/green-core/components/form-control-footer'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-form-control-footer>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(
      html`<gds-form-control-footer></gds-form-control-footer>`,
    )
    expect(el.getAttribute('gds-element')).toBe('gds-form-control-footer')
  })

  it('is visually hidden when no error message or char counter is set', async () => {
    const el = await fixture<GdsFormControlFooter>(
      html`<gds-form-control-footer></gds-form-control-footer>`,
    )
    await el.updateComplete
    expect(el.classList.contains('visually-hidden')).toBe(true)
  })

  it('is visually hidden when char counter visibility is set to false', async () => {
    const el = await fixture<GdsFormControlFooter>(
      html`<gds-form-control-footer
        .charCounter=${[10, false]}
      ></gds-form-control-footer>`,
    )
    await el.updateComplete
    expect(el.classList.contains('visually-hidden')).toBe(true)
  })

  it('is visible when error message is set', async () => {
    const el = await fixture<GdsFormControlFooter>(
      html`<gds-form-control-footer
        .errorMessage=${'This is an error message'}
      ></gds-form-control-footer>`,
    )
    await el.updateComplete
    expect(el.classList.contains('visually-hidden')).toBe(false)
  })

  it('is visible when char counter is set', async () => {
    const el = await fixture<GdsFormControlFooter>(
      html`<gds-form-control-footer
        .charCounter=${[10, 'positive']}
      ></gds-form-control-footer>`,
    )
    await el.updateComplete
    expect(el.classList.contains('visually-hidden')).toBe(false)
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsFormControlFooter>(
        html`<gds-form-control-footer
          .validationMessage=${'hello'}
          .charCounter=${[10, 'positive']}
        ></gds-form-control-footer>`,
      )
      await el.updateComplete
      await expect(el).toBeAccessible()
    })

    it('is a polite live region', async () => {
      const el = await fixture<GdsFormControlFooter>(
        html`<gds-form-control-footer
          .validationMessage=${'hello'}
          .charCounter=${[10, 'positive']}
        ></gds-form-control-footer>`,
      )
      await el.updateComplete
      const liveRegion = el.shadowRoot?.querySelector('[aria-live="polite"]')
      expect(liveRegion).toBeDefined()
    })
  })
})
