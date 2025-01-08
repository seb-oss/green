import { TrThookPipe } from './tr-thook.pipe'

describe('[NggvTable]', () => {
  // ----------------------------------------------------------------------------
  // TrThookPipe
  // ----------------------------------------------------------------------------
  describe('TrThookPipe', () => {
    const pipe = new TrThookPipe()
    describe('constructor()', () => {
      it('create an instance', () => {
        expect(pipe).toBeTruthy()
      })
    })

    describe('transform()', () => {
      const customThookTransformer = ({ externalId }: any) => `id_${externalId}`
      it.each`
        value                                          | index | thookFn                   | expected
        ${{}}                                          | ${1}  | ${undefined}              | ${'table-row-1'}
        ${{ customId: 'my-1', externalId: 'abc-123' }} | ${1}  | ${customThookTransformer} | ${'id_abc-123'}
      `(
        `transforms $value (thookFn: $thookFn) to '$expected'`,
        ({ value, index, thookFn, expected }) => {
          const result = pipe.transform(value, index, thookFn)
          expect(result).toBe(expected)
        },
      )
    })
  })
})
