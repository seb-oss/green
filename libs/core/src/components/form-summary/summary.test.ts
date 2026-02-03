import { describe, expect, it } from 'vitest'

import type { GdsFormSummary } from '@sebgroup/green-core/components/form-summary'

import { fixture, html as testingHtml } from '../../utils/testing'

import '@sebgroup/green-core/components/form-summary'
import '@sebgroup/green-core/components/dropdown'

import type { GdsDropdown } from '@sebgroup/green-core/components/dropdown'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-form-summary>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-form-summary></gds-form-summary>`)
    expect(el.getAttribute('gds-element')).toBe('gds-form-summary')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const formEl = await fixture<HTMLFormElement>(
        html`<form>
          <gds-dropdown .invalid=${true} label="Dropdown"></gds-dropdown>
          <gds-form-summary id="summary" reactive></gds-form-summary>
        </form>`,
      )
      const summaryEl = formEl.querySelector('#summary') as GdsFormSummary
      await summaryEl.updateComplete
      await expect(summaryEl).toBeAccessible()
    })
  })

  describe('Rendering', () => {
    it('should render', async () => {
      const el = await fixture<GdsFormSummary>(
        html`<gds-form-summary></gds-form-summary>`,
      )
      await el.updateComplete
      expect(el).toBeDefined()
    })

    it('should render list item in reactive mode', async () => {
      const formEl = await fixture(
        html`<form>
          <gds-dropdown
            .errorMessage=${'Error message'}
            .invalid=${true}
            label="Dropdown label"
            id="dropdown"
          ></gds-dropdown>
          <gds-form-summary id="summary" reactive></gds-form-summary>
        </form>`,
      )
      const summaryEl = formEl.querySelector('#summary') as GdsFormSummary
      const dropdownEl = formEl.querySelector('#dropdown') as GdsDropdown

      await dropdownEl.updateComplete
      await summaryEl.updateComplete

      expect(summaryEl.shadowRoot?.querySelector('li')).toBeDefined()
      expect(
        summaryEl.shadowRoot
          ?.querySelector('li div :first-child')
          ?.textContent?.trim(),
      ).toBe('Dropdown label')
      expect(
        summaryEl.shadowRoot
          ?.querySelector('li div :nth-child(2)')
          ?.textContent?.trim(),
      ).toBe('Error message')
    })

    it('should render list items in non-reactive mode when refresh() is called', async () => {
      const formEl = await fixture(
        html`<form>
          <gds-dropdown
            .errorMessage=${'Error message'}
            .invalid=${true}
            label="Dropdown label"
            id="dropdown"
          ></gds-dropdown>
          <gds-form-summary id="summary"></gds-form-summary>
        </form>`,
      )
      const summaryEl = formEl.querySelector('#summary') as GdsFormSummary
      const dropdownEl = formEl.querySelector('#dropdown') as GdsDropdown

      await dropdownEl.updateComplete
      await summaryEl.updateComplete

      expect(summaryEl.shadowRoot?.querySelector('li')).toBeDefined()

      dropdownEl.invalid = false

      expect(summaryEl.shadowRoot?.querySelector('li')).toBeDefined()

      summaryEl.refresh()
      await summaryEl.updateComplete

      expect(summaryEl.shadowRoot?.querySelector('li')).toBeNull()
    })
  })

  describe('API', () => {
    it('should return the number of errors from the errorCount getter', async () => {
      const formEl = await fixture(
        html`<form>
          <gds-dropdown
            .errorMessage=${'Error message'}
            .invalid=${true}
            label="Dropdown label"
            id="dropdown"
          ></gds-dropdown>
          <gds-form-summary id="summary" reactive></gds-form-summary>
        </form>`,
      )
      const summaryEl = formEl.querySelector('#summary') as GdsFormSummary
      const dropdownEl = formEl.querySelector('#dropdown') as GdsDropdown

      await dropdownEl.updateComplete
      await summaryEl.updateComplete

      expect(summaryEl.errorCount).toBe(1)
    })
  })
})
