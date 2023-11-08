import { expect } from '@esm-bundle/chai'
import { timeout } from '../../utils/testing'
import '../../../../../dist/libs/core/src/index.js'

import { gdsInitLocalization } from './localization'

const { setLocale, getLocale } = gdsInitLocalization()

describe('Localization module', () => {
  describe('gdsInitLocalization', () => {
    it('should return `setLocale` and `getLocale`', async () => {
      expect(setLocale).to.be.a('function')
      expect(getLocale).to.be.a('function')
    })

    it('should set the locale to the default locale', async () => {
      expect(getLocale()).to.equal('en')
    })

    it('should set the locale to the specified locale', async () => {
      setLocale('sv')
      await timeout(0)
      expect(getLocale()).to.equal('sv')
    })
  })
})
