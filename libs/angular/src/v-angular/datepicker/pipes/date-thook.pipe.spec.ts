import { DateThookPipe } from './date-thook.pipe'

describe('[NggvDatepicker]', () => {
  // ----------------------------------------------------------------------------
  // DateThookPipe - constructor()
  // ----------------------------------------------------------------------------

  let pipe: DateThookPipe

  const today = (): Date => {
    return pipe.today
  }

  beforeEach(() => {
    pipe = new DateThookPipe()
  })

  describe('DateThookPipe - constructor()', () => {
    it('create an instance', () => {
      expect(pipe).toBeTruthy()
    })

    it('will return "disabled-date" when disabled', () => {
      expect(pipe.transform(today(), true)).toStrictEqual('disabled-date')
    })

    it('will return "today" when enabled', () => {
      expect(pipe.transform(today(), false)).toStrictEqual('today')
    })
  })
})
