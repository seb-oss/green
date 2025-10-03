import { expect } from '@esm-bundle/chai'
import { assert, fixture, html as testingHtml } from '@open-wc/testing'
import sinon from 'sinon'

import type {
  GdsFilterChip,
  GdsFilterChips,
} from '@sebgroup/green-core/components/filter-chips'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/filter-chips'

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

    it('chips property should return the chips in the control', async () => {
      const el = await fixture<GdsFilterChips>(
        html`<gds-filter-chips label="filter">
          <gds-filter-chip id="chip1" value="1">Chip 1</gds-filter-chip>
          <gds-filter-chip id="chip2" value="2">Chip 2</gds-filter-chip>
        </gds-filter-chips>`,
      )
      await el.updateComplete
      const chips = el.chips
      await expect(chips.length).to.equal(2)
      await expect(chips[0].value).to.equal('1')
      await expect(chips[1].value).to.equal('2')
    })

    it('should fire a change event when a chip is selected', async () => {
      const el = await fixture<GdsFilterChips>(
        html`<gds-filter-chips label="filter">
          <gds-filter-chip id="chip1" value="1">Chip 1</gds-filter-chip>
          <gds-filter-chip id="chip2" value="2">Chip 2</gds-filter-chip>
        </gds-filter-chips>`,
      )
      await el.updateComplete
      const chip1 = el.querySelector('#chip1') as GdsFilterChip
      const chip2 = el.querySelector('#chip2') as GdsFilterChip
      const changeSpy = sinon.spy()
      el.addEventListener('change', changeSpy)
      await clickOnElement(chip1)
      expect(changeSpy.calledOnce).to.be.true
      await expect(changeSpy.firstCall.args[0].detail.value).to.equal('1')
      await clickOnElement(chip2)
      expect(changeSpy.calledTwice).to.be.true
      await expect(changeSpy.secondCall.args[0].detail.value).to.equal('2')
    })

    it('should have a `rowCollapse` property', async () => {
      const el = await fixture<GdsFilterChips>(
        html`<gds-filter-chips row-collapse label="filter">
          <gds-filter-chip id="chip1" value="1">Chip 1</gds-filter-chip>
          <gds-filter-chip id="chip2" value="2">Chip 2</gds-filter-chip>
        </gds-filter-chips>`,
      )
      await el.updateComplete
      expect(el.rowCollapse).to.be.true
    })
  })

  describe('Interactions', () => {
    it('should select a chip when clicked', async () => {
      const el = await fixture<GdsFilterChips>(
        html`<gds-filter-chips label="filter">
          <gds-filter-chip id="chip1" value="1">Chip 1</gds-filter-chip>
          <gds-filter-chip id="chip2" value="2">Chip 2</gds-filter-chip>
        </gds-filter-chips>`,
      )
      await el.updateComplete
      const chip1 = el.querySelector('#chip1') as GdsFilterChip
      const chip2 = el.querySelector('#chip2') as GdsFilterChip
      await clickOnElement(chip1)
      expect(chip1.selected).to.be.true
      expect(chip2.selected).to.be.false
    })

    it('should deselect a chip when clicked if it is already selected', async () => {
      const el = await fixture<GdsFilterChips>(
        html`<gds-filter-chips label="filter">
          <gds-filter-chip id="chip1" value="1">Chip 1</gds-filter-chip>
          <gds-filter-chip id="chip2" value="2">Chip 2</gds-filter-chip>
        </gds-filter-chips>`,
      )
      await el.updateComplete
      const chip1 = el.querySelector('#chip1') as GdsFilterChip
      const chip2 = el.querySelector('#chip2') as GdsFilterChip
      await clickOnElement(chip1)
      expect(chip1.selected).to.be.true
      expect(chip2.selected).to.be.false
      await clickOnElement(chip1)
      expect(chip1.selected).to.be.false
      expect(chip2.selected).to.be.false
    })

    it('should select a chip when clicked and deselect the other chips if multiple is false', async () => {
      const el = await fixture<GdsFilterChips>(
        html`<gds-filter-chips label="filter">
          <gds-filter-chip id="chip1" value="1">Chip 1</gds-filter-chip>
          <gds-filter-chip id="chip2" value="2">Chip 2</gds-filter-chip>
        </gds-filter-chips>`,
      )
      await el.updateComplete
      const chip1 = el.querySelector('#chip1') as GdsFilterChip
      const chip2 = el.querySelector('#chip2') as GdsFilterChip
      await clickOnElement(chip1)
      expect(chip1.selected).to.be.true
      expect(chip2.selected).to.be.false
      await clickOnElement(chip2)
      expect(chip1.selected).to.be.false
      expect(chip2.selected).to.be.true
    })

    it('should select a chip when clicked and keep the other chips selected if multiple is true', async () => {
      const el = await fixture<GdsFilterChips>(
        html`<gds-filter-chips multiple label="filter">
          <gds-filter-chip id="chip1" value="1">Chip 1</gds-filter-chip>
          <gds-filter-chip id="chip2" value="2">Chip 2</gds-filter-chip>
        </gds-filter-chips>`,
      )
      await el.updateComplete
      const chip1 = el.querySelector('#chip1') as GdsFilterChip
      const chip2 = el.querySelector('#chip2') as GdsFilterChip
      await clickOnElement(chip1)
      expect(chip1.selected).to.be.true
      expect(chip2.selected).to.be.false
      await clickOnElement(chip2)
      expect(chip1.selected).to.be.true
      expect(chip2.selected).to.be.true
    })
  })
})
