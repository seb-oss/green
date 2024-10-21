import { validateInputValue } from './validateInput'

describe('ValidateInput Function', () => {
  /* eslint-disable-next-line */
  const args: any = {
    target: {},
    rules: { type: 'Required' },
    setError: jest.fn(),
  }

  it('Should return error when value is undefined', () => {
    args.target = { name: 'text', value: undefined, type: 'text' }
    expect(validateInputValue(args.target, args.rules, args.setError)).toBe(
      'error',
    )
  })

  it('Should return null if input has value', () => {
    args.target = { name: 'text', value: 'value', type: 'text' }
    expect(validateInputValue(args.target, args.rules, args.setError)).toBe(
      null,
    )
  })

  it('Should validate checked value', () => {
    args.target = {
      name: 'text',
      value: 'value',
      type: 'checkbox',
      checked: true,
    }
    expect(validateInputValue(args.target, args.rules, args.setError)).toBe(
      null,
    )
  })

  it('Should throw error for checked value', () => {
    args.target = {
      name: 'text',
      value: null,
      type: 'checkbox',
      checked: false,
    }
    expect(validateInputValue(args.target, args.rules, args.setError)).not.toBe(
      null,
    )
  })

  it('Should use custom validation', () => {
    args.target = { name: 'text', value: 'value', type: 'text' }
    args.rules = { type: 'Required', custom: () => 'customError' }
    expect(validateInputValue(args.target, args.rules, args.setError)).toBe(
      'customError',
    )
  })
})
