import { describe, expect, it } from 'vitest'

import { aTimeout } from '../testing'

import '@sebgroup/green-core'

import { gdsInitLocalization } from './localization'

const { setLocale, getLocale } = gdsInitLocalization()

describe('Localization module', () => {
  describe('gdsInitLocalization', () => {
    it('should return `setLocale` and `getLocale`', async () => {
      expect(setLocale).toBeTypeOf('function')
      expect(getLocale).toBeTypeOf('function')
    })

    it('should set the locale to the default locale', async () => {
      expect(getLocale()).toBe('en')
    })

    it('should set the locale to the specified locale', async () => {
      setLocale('sv')
      await aTimeout(0)
      expect(getLocale()).toBe('sv')
    })
  })
})
