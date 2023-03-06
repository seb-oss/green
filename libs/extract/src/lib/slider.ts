export const sliderColors = {
  primary: '#007ac7',
  disabled: '#dedede',
}

/**
 * @param val percentage value
 * @returns linear gradient background string
 */
export const getSliderTrackBackground = (val: number): string => {
  return `linear-gradient(
        to right,
        ${sliderColors.primary} 0%,
        ${sliderColors.primary} ${val}%,
        ${sliderColors.disabled} ${val}%,
        ${sliderColors.disabled} 100%
      )`
}
