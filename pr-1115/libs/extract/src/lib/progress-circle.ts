export type ProgressCircleThemes =
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'
  | 'light'
  | 'dark'
  | 'disabled'

/**
 * @param percent value
 * @returns degree value, formula: ((n% * 360deg) / 100% ) / 2
 */
export const calculateDegrees = (percent: number): number => {
  if (percent > 100) {
    return 180
  }

  if (percent < 0) {
    return 0
  }

  return percent * 1.8
}
