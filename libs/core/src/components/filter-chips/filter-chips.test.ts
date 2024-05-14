import { expect } from '@esm-bundle/chai'
import {
  fixture,
  html as testingHtml,
  waitUntil,
  assert,
} from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import { clickOnElement, conditionToBeTrue, timeout } from '../../utils/testing'
import sinon from 'sinon'

import '@sebgroup/green-core/components/filter-chips'
import type {
  GdsFilterChips,
  GdsFilterChip,
} from '@sebgroup/green-core/components/filter-chips'

import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-filter-chips>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-filter-chips></gds-filter-chips>`)
    expect(el.getAttribute('gds-element')).to.equal('gds-filter-chips')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsFilterChips>(
        html`<gds-filter-chips label="filter">
          <gds-filter-chip>Chip 1</gds-filter-chip>
          <gds-filter-chip>Chip 2</gds-filter-chip>
          <gds-filter-chip>Chip 3</gds-filter-chip>
        </gds-filter-chips>`,
      )
      await el.updateComplete
      await assert.isAccessible(el, {
        ignoredRules: ['aria-required-children'],
      })
    })
  })

  describe('API', () => {
    it('should set the selected chip based on the value property', async () => {
      const el = await fixture<GdsFilterChips>(
        html`<gds-filter-chips value="2" label="filter">
          <gds-filter-chip value="1">Chip 1</gds-filter-chip>
          <gds-filter-chip value="2" id="chip">Chip 2</gds-filter-chip>
          <gds-filter-chip value="3">Chip 3</gds-filter-chip>
        </gds-filter-chips>`,
      )
      await el.updateComplete
      const chip = el.querySelector('#chip') as GdsFilterChip
      expect(chip.selected).to.be.true
    })

    it('should set the selected chip based on the value property when multiple chips are selected', async () => {
      const el = await fixture<GdsFilterChips>(
        html`<gds-filter-chips value="2,3" multiple label="filter">
          <gds-filter-chip value="1">Chip 1</gds-filter-chip>
          <gds-filter-chip value="2" id="chip1">Chip 2</gds-filter-chip>
          <gds-filter-chip value="3" id="chip2">Chip 3</gds-filter-chip>
        </gds-filter-chips>`,
      )
      await el.updateComplete
      const chip1 = el.querySelector('#chip1') as GdsFilterChip
      const chip2 = el.querySelector('#chip2') as GdsFilterChip
      expect(chip1.selected).to.be.true
      expect(chip2.selected).to.be.true
    })
  })
})
