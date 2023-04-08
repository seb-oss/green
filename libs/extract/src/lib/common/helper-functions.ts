export const addSwipeEvents = () => {
  // https://github.com/john-doherty/swiped-events
  import('swiped-events/dist/swiped-events.min.js' as never)
}

export const scrollElementIntoView = (element: HTMLElement) => {
  if (document) {
    const previousPadding = document.body.style.paddingBottom
    const previousTransition = document.body.style.transition
    document.body.setAttribute('data-p-padding', previousPadding)
    document.body.setAttribute('data-p-transition', previousTransition)
    document.body.style.paddingBottom = '450px'
    element.style.scrollMarginTop = '3rem'
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    document.body.style.transition = 'padding-bottom 600ms ease-in'
  }
}

export const resetScroll = () => {
  if (document) {
    const previousPadding = document.body.getAttribute('data-p-padding')
    const previousTransition = document.body.getAttribute('data-p-transition')
    document.body.removeAttribute('data-p-padding')
    document.body.removeAttribute('data-p-transition')
    document.body.style.paddingBottom = previousPadding || ''
    setTimeout(() => {
      document.body.style.transition = previousTransition || ''
    }, 600)
  }
}
