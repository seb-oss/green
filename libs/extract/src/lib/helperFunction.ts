export type IndicatorType = 'valid' | 'invalid' | 'neutral'

export const validateClassName = (value: IndicatorType) => {
  switch (value) {
    case 'valid':
      return 'is-valid'
    case 'invalid':
      return 'is-invalid'
    default:
      return ''
  }
}
