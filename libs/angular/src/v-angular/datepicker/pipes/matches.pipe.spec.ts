import { MatchesPipe } from './matches.pipe'

describe('[NggvDatepicker]', () => {
  // ----------------------------------------------------------------------------
  // MatchesPipe - constructor()
  // ----------------------------------------------------------------------------
  describe('MatchesPipe - constructor()', () => {
    const pipe = new MatchesPipe()
    const today = new Date()

    it('create an instance', () => {
      expect(pipe).toBeTruthy()
    })

    it(`return true when comparing same dates`, () => {
      expect(pipe.transform(today, new Date(today))).toBeTruthy()
    })

    it(`return true when comparing same dates with different times`, () => {
      const earlier = new Date(today)
      earlier.setHours(1, 0)
      expect(pipe.transform(today, earlier)).toBeTruthy()
    })

    it(`return false when comparing different dates`, () => {
      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)
      expect(pipe.transform(today, yesterday)).toBeFalsy()
    })
  })
})
