export const ripple = (e) => {
  const rect = e.target.getBoundingClientRect()
  e.target.style.setProperty('--gds-ripple-top', `${e.clientY - rect.top}px`)
  e.target.style.setProperty('--gds-ripple-left', `${e.clientX - rect.left}px`)
  e.target.classList.remove('gds-ripple-effect')
  setTimeout(function () {
    e.target.classList.add('gds-ripple-effect')
  }, 20)
}
