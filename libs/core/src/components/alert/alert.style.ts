import { css } from 'lit'

export const alertStyles = css`
  :host {
    display: block;
    container-type: inline-size;
    margin: 0.3rem;
  }

  [gds-element='gds-card'] {
    --grid-areas: 'icon message close' 'icon action close';
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: var(--grid-areas);
    align-items: baseline;
    width: 100%;
    position: relative;
    transition:
      opacity 0.3s ease-out,
      transform 0.3s ease-out;
    padding: 0.75rem;
  }

  [gds-element='gds-card'].dismissible {
    padding: 0.75rem;
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    [gds-element='gds-card'] {
      animation: slideIn 0.3s ease-out;
    }
  }

  [gds-element='gds-card'].dismissing {
    opacity: 0;
    transform: translateX(1rem);
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    [gds-element='gds-card'].dismissing {
      transform: none;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
  }

  /* Focus styles */
  [gds-element='gds-card']:focus-within {
    outline: 2px solid var(--gds-focus-color, #000);
    outline-offset: 2px;
  }

  /* Layout elements */
  .icon {
    grid-area: icon;
  }

  .message {
    grid-area: message;
    font-size: var(--gds-font-size-base, 1rem);
    display: flex;
    justify-content: flex-start;
    text-align: left;
  }

  .message-text {
    display: inline;
    white-space: normal;
  }

  /* Buttons */
  .close-btn,
  [gds-element='gds-button'] {
    /* WCAG 2.5.5 minimum touch target */
    min-width: 44px;
    min-height: 44px;
  }

  .close-btn {
    display: flex;
    justify-content: flex-end;
  }

  .close-btn > gds-icon-cross-small {
    margin: 0;
    align-self: flex-start;
    justify-self: flex-end;
  }

  .close-btn:hover {
    background-color: var(--gds-hover-bg, rgba(0, 0, 0, 0.05));
  }

  .close-btn:focus-visible {
    outline: 2px solid var(--gds-focus-color, #000);
    outline-offset: 2px;
  }

  .close-btn > * {
    vertical-align: top;
    align-self: flex-start;
  }

  [gds-element='gds-button'] {
    grid-area: unset;
    width: auto;
    min-width: auto;
    margin: 0 0 0 1rem;
    display: inline-flex;
  }

  /* Timer bar */
  .timer-bar {
    position: absolute;
    inset: auto 0 0;
    height: 0.25rem;
    background: var(--gds-border-color, rgba(0, 0, 0, 0.1));
    border-radius: 0 0 var(--gds-radius-md, 0.25rem)
      var(--gds-radius-md, 0.25rem);
    overflow: hidden;
  }

  .timer-progress {
    height: 100%;
    transition: width 0.1s linear;
    background: var(--gds-accent, currentColor);
    opacity: 0.6;
    will-change: width;
  }

  @media (prefers-reduced-motion: reduce) {
    .timer-progress {
      transition: none;
    }
  }

  /* Responsive layouts */
  /* Small: stacked */
  @container (max-width: 600px) {
    [gds-element='gds-card'] {
      --grid-areas: 'icon message close' 'icon cta cta';
      grid-template-areas: var(--grid-areas);
    }

    .message {
      flex-direction: column;
      gap: 0.25rem;
    }
    .close-btn {
      grid-area: close;
      justify-self: end;
      align-self: start;
      margin: 0;
    }
  }

  /* Medium: inline */
  @container (min-width: 601px) and (max-width: 1024px) {
    [gds-element='gds-card'] {
      grid-template-areas: 'icon message close';
    }
    .message {
      gap: 0.5rem;
    }
  }

  /* Large: centered */
  @container (min-width: 1025px) {
    [gds-element='gds-card'] {
      grid-template-columns: 1fr minmax(0, 37.5rem) auto 1fr;
      grid-template-areas: 'icon message close close';
    }
    .icon {
      grid-column: 1;
      margin-right: 1.5rem;
    }

    .message {
      grid-column: 2;
      gap: 0.75rem;
    }

    [gds-element='gds-button'] {
      grid-area: unset;
      display: inline-flex;
      flex-shrink: 0;
    }

    .close-btn {
      margin-left: 1.5rem;
      justify-self: end;
      align-self: start;
      grid-column: 4;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .icon {
      forced-color-adjust: none;
    }
  }
`
