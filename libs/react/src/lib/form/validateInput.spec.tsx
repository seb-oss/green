import { validateInputValue } from './validateInput'

describe('ValidateInput Function', () => {
  const args: any = {
    name: 'text',
    rules: { type: 'Required' },
    value: undefined,
    setError: jest.fn(),
  }

  it('Should return error when value is undefined', () => {
    expect(validateInputValue(args.name, args.rules, args.value, args.setError)).toBe('error')
  })

  it('Should return null if input has value', () => {
    args.value = 'i am input'
    expect(validateInputValue(args.name, args.rules, args.value, args.setError)).toBe(null)
  })

  it('Should use custom validation', () => {
    args.rules = { type: 'Required', custom: () => 'customError' }
    expect(validateInputValue(args.name, args.rules, args.value, args.setError)).toBe('customError')
  })
})
