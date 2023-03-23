export const handleRippleEffect = (e) => {
  const rect = e.target.getBoundingClientRect()
  e.target.style.setProperty('--gds-ripple-top', `${e.clientY - rect.top}px`)
  e.target.style.setProperty('--gds-ripple-left', `${e.clientX - rect.left}px`)
  e.target.classList.remove('gds-ripple-effect')
  setTimeout(() => {
    e.target.classList.add('gds-ripple-effect')
  }, 20)
}

export const handleChipSelection = (e) => {
  e.target.classList.toggle('gds-chips__action')
  e.target.classList.toggle('gds-chips__action-selected')
  handleRippleEffect(e)
}

export const handleChipRemoval = (e) => {
  e.target.classList.toggle('gds-chips__action')
  e.target.classList.toggle('gds-chips__action-remove')
  handleRippleEffect(e)
}
