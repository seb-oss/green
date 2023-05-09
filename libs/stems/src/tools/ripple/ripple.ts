// ripple.ts
// export function effectRipple(e: MouseEvent): void {
//   // function implementation
//   try {
//     const rect = (e.target as HTMLElement).getBoundingClientRect();
//     const setStyleProps = document.documentElement.style as CSSStyleDeclaration;
//     (e.target as HTMLElement).classList.remove('gds-ripple-effect');
//     setStyleProps.setProperty('--gds-ripple-top', `${e.clientY - rect.top}px`);
//     setStyleProps.setProperty('--gds-ripple-left', `${e.clientX - rect.left}px`);
//     setTimeout(() => {
//       (e.target as HTMLElement).classList.add('gds-ripple-effect');
//     }, 20);
//     console.log('esd');
//   } catch (e) {
//     console.error(e);
//   }
// };


export function effectRipple(e: MouseEvent): void {
  try {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const setStyleProps = document.documentElement.style as CSSStyleDeclaration;
    const shadowRoot = (e.target as HTMLElement).shadowRoot;
    console.log('shadowRoot', shadowRoot);
    const rippleEl = shadowRoot?.querySelector('div');
    console.log('shadowRoot', rippleEl);
    if (rippleEl) {
      rippleEl.classList.remove('gds-ripple-effect');
      setStyleProps.setProperty('--gds-ripple-top', `${e.clientY - rect.top}px`);
      setStyleProps.setProperty('--gds-ripple-left', `${e.clientX - rect.left}px`);
      setTimeout(() => {
        rippleEl.classList.add('gds-ripple-effect');
      }, 20);
    }
    console.log('esd');
  } catch (e) {
    console.error(e);
  }
};


