export const handleRippleEffect = (e) => {
  try {
    const rect = e.target.getBoundingClientRect()
    const setStyleProps = document.documentElement.style
    e.target.classList.remove('gds-ripple-effect')
    setStyleProps.setProperty('--gds-ripple-top', `${e.clientY - rect.top}px`)
    setStyleProps.setProperty('--gds-ripple-left', `${e.clientX - rect.left}px`)
    setTimeout(() => {
      e.target.classList.add('gds-ripple-effect')
    }, 20)
  } catch (e) {
    console.error(e)
  }
}

export const handleChipSelection = (e) => {
  e.target.classList.toggle('gds-filter-chip__action')
  e.target.classList.toggle('gds-filter-chip__action-selected')
  handleRippleEffect(e)
}

export const handleChipRemoval = (e) => {
  e.target.classList.toggle('gds-filter-chip__action')
  e.target.classList.toggle('gds-filter-chip__action-remove')
  handleRippleEffect(e)
}
