export const ripple = (e) => {
  const rect = e.target.getBoundingClientRect()
  e.target.style.setProperty('--gds-ripple-top', `${e.clientY - rect.top}px`)
  e.target.style.setProperty('--gds-ripple-left', `${e.clientX - rect.left}px`)
  e.target.classList.remove('gds-ripple-effect')
  setTimeout(function () {
    e.target.classList.add('gds-ripple-effect')
  }, 20)
}

// const ripple = (e) => {
//   const button = document.querySelector('.gds-chips')
//   const ripple = document.createElement('span')
//   ripple.classList.add('gds-ripple')
//   ripple.style.left = `${e.clientX - e.target.offsetLeft}px`
//   ripple.style.top = `${e.clientY - e.target.offsetTop}px`
//   button.appendChild(ripple)
//   setTimeout(() => {
//     ripple.remove()
//   }, 1000)
// }
