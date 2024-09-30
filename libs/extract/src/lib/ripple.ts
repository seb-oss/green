/**
 * Adds a ripple effect to the clicked element and applies the shadow DOM styles.
 * @param e - The mouse event that triggered the ripple effect.
 */
export const handleGdsRippleEffect = (e: MouseEvent) => {
  const targetElement = e.target as HTMLElement
  const targetRect = targetElement.getBoundingClientRect()

  // Set the ripple effect position
  targetElement.style.setProperty(
    '--gds-ripple-top',
    `${e.clientY - targetRect.top}px`,
  )
  targetElement.style.setProperty(
    '--gds-ripple-left',
    `${e.clientX - targetRect.left}px`,
  )

  // Add and remove the ripple effect class
  targetElement.classList.remove('gds-ripple-effect')
  setTimeout(() => {
    targetElement.classList.add('gds-ripple-effect')
  }, 20)

  // Apply the shadow DOM styles
  const shadowRoot = targetElement.shadowRoot
  if (shadowRoot) {
    const styleElement = document.createElement('style')
    styleElement.textContent = `
      :root {
        --gds-sys-ripple-spread: 20px;
        --gds-sys-ripple-bg: hsl(0 0% 0% / 0.5);
        --gds-sys-ripple-animation-duration: 468ms;
        --gds-sys-ripple-animation-timing-function: ease;
        --gds-sys-ripple-animation-delay: 0s;
        --gds-sys-ripple-animation-iteration-count: 1;
        --gds-sys-ripple-animation-direction: normal;
        --gds-sys-ripple-animation-fill-mode: none;
        --gds-sys-ripple-animation-play-state: running;
        --gds-sys-ripple-animation-name: ripple;
        --gds-sys-ripple-animation: var(--gds-sys-ripple-animation-duration)
            var(--gds-sys-ripple-animation-timing-function)
            var(--gds-sys-ripple-animation-delay)
            var(--gds-sys-ripple-animation-iteration-count)
            var(--gds-sys-ripple-animation-direction)
            var(--gds-sys-ripple-animation-fill-mode)
            var(--gds-sys-ripple-animation-play-state)
            var(--gds-sys-ripple-animation-name);
      }
      .gds-ripple-effect {
        --gds-ripple-spread: var(--gds-sys-ripple-spread, 20px);
        --gds-ripple-bg: var(--gds-sys-ripple-bg, hsl(0 0% 0% / 0.5));
        --gds-ripple-animation: var(--gds-sys-ripple-animation);
        position: relative;
        overflow: hidden;
      }
      .gds-ripple-effect:before {
        content: ' ';
        inset: 0;
        opacity: 0;
        display: block;
        position: absolute;
        overflow: hidden;
        will-change: transform;
        pointer-events: none;
        background: var(--gds-ripple-bg);
        left: var(--gds-ripple-left, 50%);
        top: var(--gds-ripple-top, 50%);
        width: var(--gds-ripple-spread, 50%);
        height: var(--gds-ripple-spread, 50%);
        border-radius: var(--gds-comp-chips-border-radius);
        transition: var(--gds-comp-chips-transition);
        margin-top: calc(var(--gds-ripple-spread) * -1 / 2);
        margin-left: calc(var(--gds-ripple-spread) * -1 / 2);
        animation: var(--gds-ripple-animation);
      }
      @keyframes ripple {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        10% {
          transform: scale(2);
          opacity: 1;
        }
        100% {
          transform: scale(5);
          opacity: 0;
        }
      }
    `
    shadowRoot.appendChild(styleElement)
  }
}
