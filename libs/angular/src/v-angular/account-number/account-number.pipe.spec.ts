import { AccountNumberPipe } from './account-number.pipe'

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // AccountNumberPipe - constructor()
  // ----------------------------------------------------------------------------
  describe('AccountNumberPipe - constructor()', () => {
    it('create an instance', () => {
      const pipe = new AccountNumberPipe()
      expect(pipe).toBeTruthy()
    })
  })

  // ----------------------------------------------------------------------------
  // AccountNumberPipe - transform()
  // ----------------------------------------------------------------------------
  describe('AccountNumberPipe - transform()', () => {
    const pipe = new AccountNumberPipe()

    const evaluateFormat = (expectedResult: string, ...testArgs: any[]) => {
      const [value, schema] = testArgs

      if (schema) {
        it(`returns '${expectedResult}' for '${value}' (using schema '${schema}')`, () => {
          const formattedValue = pipe.transform(value, schema)
          const expectedResultWithNonBreakingSpaces = expectedResult.replace(
            /\s/g,
            '\u00A0',
          )
          expect(formattedValue).toEqual(expectedResultWithNonBreakingSpaces)
        })
      } else {
        it(`returns '${expectedResult}' for '${value}'`, () => {
          const formattedValue = pipe.transform(value, schema)
          const expectedResultWithNonBreakingSpaces = expectedResult.replace(
            /\s/g,
            '\u00A0',
          )
          expect(formattedValue).toEqual(expectedResultWithNonBreakingSpaces)
        })
      }
    }

    const test: ([string, string] | [string, string, any])[] = [
      ['LV800000435195001', 'LV80 0000 4351 9500 1'],
      ['LV800000435195001', 'LV80 0000 4351 9500 1', 'iban'],
      ['LV800000435195001', 'LV8000 00 435 195001', 'bban'],
      ['SE  -45500000000 58398257466', 'SE45 5000 0000 0583 9825 7466'],
      ['SE4550000000058398257466', 'SE45 5000 0000 0583 9825 7466', 'iban'],
      ['05839825746', '0583 98 257 46'],
      ['05839825746', '0583 98 257 46', 'bban'],
      ['05839825746', '0583 9825 746', 'iban'],
    ]

    test.forEach(([value, expected, schema]) =>
      evaluateFormat(expected, value, schema),
    )
  })
})
