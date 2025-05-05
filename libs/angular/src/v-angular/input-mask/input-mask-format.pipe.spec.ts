import { InputMaskFormatPipe } from './input-mask-format.pipe'

describe('[NggvInputMask]', () => {
  // ----------------------------------------------------------------------------
  // InputMaskFormatPipe - constructor()
  // ----------------------------------------------------------------------------

  let pipe: InputMaskFormatPipe

  const dateFormats = [
    'yyyy-mm-dd',
    'yyyy/mm/dd',
    'dd/mm/yyyy',
    'dd-mm-yyyy',
    'dd.mm.yyyy',
    'mm/dd/yyyy',
    'dd.mm.yyyy.',
    'yyyy.mm.dd.',
    'yyyy.mm.dd',
    'mm.dd.yyyy',
    'dd/mm yyyy',
  ]

  const dateMasks = dateFormats.map((format) => ({
    alias: 'datetime',
    inputFormat: format,
  }))

  beforeEach(() => {
    pipe = new InputMaskFormatPipe()
  })

  describe('InputMaskFormatPipe - constructor()', () => {
    it('creates an instance', () => {
      expect(pipe).toBeTruthy()
    })

    const numericMask1 = {
      alias: 'numeric',
      groupSeparator: ' ',
      radixPoint: ',',
      digits: 2,
      digitsOptional: false,
    }

    const numericMask2 = {
      alias: 'numeric',
      groupSeparator: ',',
      radixPoint: '.',
      digits: 2,
      digitsOptional: false,
    }

    it.each`
      value                     | config             | expected
      ${null}                   | ${dateMasks[0]}    | ${null}
      ${undefined}              | ${dateMasks[0]}    | ${undefined}
      ${false}                  | ${dateMasks[0]}    | ${false}
      ${''}                     | ${dateMasks[0]}    | ${''}
      ${new Date('2023-08-03')} | ${dateMasks[0]}    | ${'2023-08-03'}
      ${new Date('2023-08-03')} | ${dateMasks[1]}    | ${'2023/08/03'}
      ${new Date('2023-08-03')} | ${dateMasks[2]}    | ${'03/08/2023'}
      ${new Date('2023-08-03')} | ${dateMasks[3]}    | ${'03-08-2023'}
      ${new Date('2023-08-03')} | ${dateMasks[4]}    | ${'03.08.2023'}
      ${new Date('2023-08-03')} | ${dateMasks[5]}    | ${'08/03/2023'}
      ${new Date('2023-08-03')} | ${dateMasks[6]}    | ${'03.08.2023.'}
      ${new Date('2023-08-03')} | ${dateMasks[7]}    | ${'2023.08.03.'}
      ${new Date('2023-08-03')} | ${dateMasks[8]}    | ${'2023.08.03'}
      ${new Date('2023-08-03')} | ${dateMasks[9]}    | ${'08.03.2023'}
      ${new Date('2023-08-03')} | ${dateMasks[10]}   | ${'03/08 2023'}
      ${'111111111111'}         | ${{ alias: 'ip' }} | ${'111.111.111.111'}
      ${100213.95}              | ${numericMask1}    | ${'100 213,95'}
      ${100213.95}              | ${numericMask2}    | ${'100,213.95'}
    `(`value '$value' returns: '$expected'`, ({ value, config, expected }) => {
      expect(pipe.transform(value, config)).toEqual(expected)
    })
  })
})
