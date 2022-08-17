export const getOptionScrollPosition = (
  optionOffset: number,
  optionHeight: number,
  currentScrollPosition: number,
  parentHeight: number
) => {
  if (optionOffset < currentScrollPosition) {
    return optionOffset
  }

  if (optionOffset + optionHeight > currentScrollPosition + parentHeight) {
    return Math.max(0, optionOffset - parentHeight + optionHeight)
  }

  return currentScrollPosition
}
