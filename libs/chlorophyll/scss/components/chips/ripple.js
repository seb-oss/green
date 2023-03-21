export const ripple = (e) => {
  const buttons = document.querySelectorAll('.gds-chips')

  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener('click', function (e) {
      ripple(e, btn.querySelector('.gds-ripple'))
    })
  })

  function ripple(e, el) {
    el.style.setProperty('--gds-ripple-top', `${e.layerY}px`)
    el.style.setProperty('--gds-ripple-left', `${e.layerX}px`)
    el.classList.remove('gds-ripple-effect')
    setTimeout(function () {
      el.classList.add('gds-ripple-effect')
    }, 20)
  }
}
