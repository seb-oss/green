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
